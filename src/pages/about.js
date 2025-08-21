import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Hero band */}
      <section className="band">
        <div className="wrap band__inner">
          <h1>Craftsmanship you can see. Care you can feel.</h1>
          <p className="muted">
            Maryland’s family-run painting team delivering clean prep, durable finishes, and zero-stress service.
          </p>
          <div className="cta">
            <Link className="btn btn--light" to="/contact">Get a Free Quote</Link>
            <a className="btn btn--ghost" href="tel:+12408765629">Call (240) 876-5629</a>
          </div>
          <ul className="chips" style={{marginTop:12}}>
            <li className="chip">Licensed & Insured</li>
            <li className="chip">Low/Zero-VOC Options</li>
            <li className="chip">Clean, Tidy Job Sites</li>
          </ul>
        </div>
      </section>

      {/* Trust stats */}
      <section className="wrap section">
        <div className="stats">
          <div className="stat"><div className="kpi">10+ yrs</div><div className="muted">Painting locally</div></div>
          <div className="stat"><div className="kpi">Licensed</div><div className="muted">& insured</div></div>
          <div className="stat"><div className="kpi">98%</div><div className="muted">Great reviews</div></div>
          <div className="stat"><div className="kpi">Low/Zero-VOC</div><div className="muted">Paint options</div></div>
        </div>
      </section>

      {/* Mission + photo */}
      <section className="wrap section two-col" id="mission">
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make homes and businesses feel brand-new—without the hassle. We pair meticulous prep with
            premium, low/zero-VOC paints to deliver finishes that last, timelines you can trust, and a crew that treats
            your space like our own.
          </p>
          <p>
            JAL Painting is a small, family-driven crew based in Maryland. From the first walkthrough to the final
            clean-up, you’ll get clear communication, tidy job sites, and results you’ll be proud to show off.
          </p>
        </div>
        <img
          src="/images/about/team1.jpg"
          alt="JAL Painting crew prepping and protecting a room before painting"
        />
      </section>

      {/* Values */}
      <section className="wrap section">
        <h2>What We Value</h2>
        <div className="grid grid-3">
          <article className="card"><h3>Community</h3><p className="muted">We live where we work and give back locally.</p></article>
          <article className="card"><h3>Teamwork</h3><p className="muted">Professional, respectful crews—trained and background-checked.</p></article>
          <article className="card"><h3>Craftsmanship</h3><p className="muted">Careful prep, sharp lines, and durable materials.</p></article>
          <article className="card"><h3>Ethics & Safety</h3><p className="muted">Up-front pricing, written changes, and safe job sites.</p></article>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="wrap section">
        <div className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
          <div>
            <h3 style={{margin:'4px 0'}}>Ready to refresh your space?</h3>
            <p className="muted" style={{margin:0}}>Request a free quote or call us now.</p>
          </div>
          <div style={{display:'flex', gap:10}}>
            <Link to="/contact" className="btn btn--primary">Request Quote</Link>
            <a className="btn" href="tel:+12408765629">Call (240) 876-5629</a>
          </div>
        </div>
      </section>
    </>
  );
}
