import { useEffect, useMemo, useState } from "react";

const STATUSES = ["new", "contacted", "scheduled", "done", "archived"];

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem("ADMIN_TOKEN") || "");
  const [rows, setRows] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () => rows.filter(r => (filter === "all" ? true : r.status === filter)),
    [rows, filter]
  );

  useEffect(() => {
    const ensureToken = async () => {
      if (!token) {
        const t = window.prompt("Admin token:");
        if (!t) return;
        localStorage.setItem("ADMIN_TOKEN", t);
        setToken(t);
      }
    };
    ensureToken();
  }, [token]);

  // Keep original load() for the Refresh button
  const load = async () => {
    if (!token) return;
    try {
      setLoading(true);
      setErr("");
      const res = await fetch("/api/reservations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setRows(data);
    } catch (e) {
      setErr("Unauthorized or server error. Check your token and server.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-load reservations when token changes (inline to satisfy ESLint)
  useEffect(() => {
    const run = async () => {
      if (!token) return;
      try {
        setLoading(true);
        setErr("");
        const res = await fetch("/api/reservations", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setRows(data);
      } catch (e) {
        setErr("Unauthorized or server error. Check your token and server.");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [token]);

  const updateStatus = async (id, status) => {
    try {
      await fetch(`/api/reservations/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      setRows(rs => rs.map(r => (r.id === id ? { ...r, status } : r)));
    } catch {
      alert("Failed to update status");
    }
  };

  return (
    <div className="wrap" style={{ marginTop: 20 }}>
      <h1>Admin — Reservations</h1>

      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <button className="btn" onClick={load} disabled={loading}>
          {loading ? "Refreshing…" : "Refresh"}
        </button>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <button
          className="btn"
          onClick={() => {
            const t = window.prompt("New token:", token || "");
            if (t !== null) { localStorage.setItem("ADMIN_TOKEN", t); setToken(t); }
          }}
        >
          Set token
        </button>
      </div>

      {err && <p style={{ color: "#b42318" }}>{err}</p>}

      <div style={{ overflowX: "auto", marginTop: 12 }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
          <thead>
            <tr>
              <Th>When</Th><Th>Name</Th><Th>Email</Th><Th>Phone</Th>
              <Th>Service</Th><Th>Preferred</Th><Th>Message</Th><Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {visible.map(r => (
              <tr key={r.id} style={{ borderTop: "1px solid #eef1f4" }}>
                <Td>{r.created_at?.replace("T"," ").slice(0,16) || ""}</Td>
                <Td>{r.name}</Td>
                <Td><a href={`mailto:${r.email}`}>{r.email}</a></Td>
                <Td><a href={`tel:${r.phone || ""}`}>{r.phone}</a></Td>
                <Td>{r.service}</Td>
                <Td>{r.date}</Td>
                <Td style={{ maxWidth: 320 }}>{r.message}</Td>
                <Td>
                  <select value={r.status} onChange={e => updateStatus(r.id, e.target.value)}>
                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th style={{ textAlign: "left", padding: "10px 8px", fontWeight: 700, borderBottom: "1px solid #eef1f4" }}>
      {children}
    </th>
  );
}
function Td({ children }) {
  return <td style={{ padding: "8px" }}>{children}</td>;
}
