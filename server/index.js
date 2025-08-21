import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { ensureDb } from './lib/db.js';

const app = express();
const PORT = process.env.PORT || 4000;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';
const db = ensureDb();

app.use(cors());
app.use(express.json());

// Simple admin auth (Bearer <token>)
function requireAdmin(req, res, next) {
  const auth = req.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (ADMIN_TOKEN && token === ADMIN_TOKEN) return next();
  return res.status(401).json({ ok: false, error: 'unauthorized' });
}

// health
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, status: 'healthy' });
});

// list reservations (PROTECTED)
app.get('/api/reservations', requireAdmin, (_req, res) => {
  const rows = db.prepare(`
    SELECT id, name, email, phone, service, date, message, status, created_at
    FROM reservations
    ORDER BY id DESC
  `).all();
  res.json(rows);
});

// create reservation (PUBLIC)
app.post('/api/reservations', (req, res) => {
  const { name = '', email = '', phone = '', service = '', date = '', message = '' } = req.body || {};
  const t = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: String(phone).trim(),
    service: String(service).trim(),
    date: String(date).trim(),
    message: String(message).trim(),
  };

  const errors = {};
  if (!t.name) errors.name = 'Name is required';
  if (!t.email) errors.email = 'Email is required';
  else if (!/^\S+@\S+\.\S+$/.test(t.email)) errors.email = 'Enter a valid email';
  if (Object.keys(errors).length) return res.status(400).json({ ok: false, errors });

  const stmt = db.prepare(`
    INSERT INTO reservations (name, email, phone, service, date, message, status, created_at)
    VALUES (@name, @email, @phone, @service, @date, @message, 'new', DATETIME('now'))
  `);
  const info = stmt.run(t);
  res.status(201).json({ ok: true, id: info.lastInsertRowid });
});

// update status (PROTECTED)
app.patch('/api/reservations/:id', requireAdmin, (req, res) => {
  const { status } = req.body || {};
  const allowed = new Set(['new', 'contacted', 'scheduled', 'done', 'archived']);
  if (!allowed.has(status)) return res.status(400).json({ ok: false, error: 'invalid status' });

  const info = db.prepare(`UPDATE reservations SET status=@status WHERE id=@id`).run({
    status,
    id: Number(req.params.id),
  });
  res.json({ ok: true, updated: info.changes });
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
