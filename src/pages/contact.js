import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

/* keep options stable to silence exhaustive-deps and avoid re-renders */
const BASE_OPTIONS = [
  "Drywall Repair",
  "General Painting",
  "Exterior & Interior Painting",
  "Power Washing",
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefillService = searchParams.get("service") || "";

  const options = useMemo(() => {
    if (prefillService && !BASE_OPTIONS.includes(prefillService)) {
      return [prefillService, ...BASE_OPTIONS];
    }
    return BASE_OPTIONS;
  }, [prefillService]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: prefillService || "",
    date: "",
    message: "",
  });

  useEffect(() => {
    if (prefillService) setForm((f) => ({ ...f, service: prefillService }));
  }, [prefillService]);

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setStatus("Thanks! We received your request and will reach out shortly.");
    setForm({
      name: "",
      email: "",
      phone: "",
      service: prefillService || "",
      date: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="contact-hero">
        <div className="wrap">
          <h1>Get a Free, Same-Day Quote</h1>
          <p className="muted">
            Tell us about your project—interior, exterior, drywall repair, or power washing—and we’ll follow up fast.
          </p>
          <div className="cta">
            <Link className="btn btn--primary" to="/services">View Services</Link>
            <a className="btn" href="tel:+12408765629">Call (240) 876-5629</a>
          </div>

          <div className="trust">
            <span className="chip">Licensed & Insured</span>
            <span className="chip">Low/Zero-VOC Options</span>
            <span className="chip">Clean, Tidy Job Sites</span>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="wrap contact-layout">
        <form onSubmit={onSubmit} noValidate className="card form-card">
          <h2 style={{ marginTop: 0 }}>Contact / Reservation</h2>

          <div className="field">
            <label htmlFor="name">Name *</label>
            <input
              id="name" name="name" value={form.name} onChange={onChange}
              aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined}
              placeholder="Your full name" required
            />
            {errors.name && <div id="name-err" className="error">{errors.name}</div>}
          </div>

          <div className="field">
            <label htmlFor="email">Email *</label>
            <input
              id="email" name="email" type="email" value={form.email} onChange={onChange}
              aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined}
              placeholder="you@example.com" required
            />
            {errors.email && <div id="email-err" className="error">{errors.email}</div>}
          </div>

          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone" name="phone" type="tel" value={form.phone} onChange={onChange}
              placeholder="(240) 876-5629"
            />
          </div>

          <div className="two-up">
            <div className="field">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" value={form.service} onChange={onChange}>
                <option value="">Select a service…</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="date">Preferred date (optional)</label>
              <input id="date" name="date" type="date" value={form.date} onChange={onChange} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message" name="message" rows={6} value={form.message} onChange={onChange}
              placeholder="Room sizes, surfaces, colors, timeline, access, etc."
            />
          </div>

          <div className="actions">
            <button className="btn btn--primary" type="submit">Send Request</button>
            <a className="btn" href="tel:+12408765629">Call (240) 876-5629</a>
          </div>

          {status && <p className="success" aria-live="polite">{status}</p>}
        </form>

        <aside className="card side-panel">
          <h3 style={{ marginTop: 0 }}>What you can expect</h3>
          <ul className="checklist">
            <li>Clear, itemized quote</li>
            <li>Flexible scheduling</li>
            <li>Respect for your home or business</li>
            <li>Neat prep and thorough cleanup</li>
          </ul>

          <h3>Hours</h3>
          <p className="muted">Mon–Sat • 8am–6pm</p>

          <h3>Service Area</h3>
          <p className="muted">Montgomery County & nearby Maryland communities</p>

          <h3>Need help choosing?</h3>
          <p className="muted">Tell us the surface and your goal—we’ll recommend the best approach.</p>
        </aside>
      </section>
    </>
  );
}
