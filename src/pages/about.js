import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="wrap">
          <h1>Craftsmanship you can see. Care you can feel.</h1>
          <p className="muted">
            Maryland’s family-run painting team delivering clean prep, durable finishes, and zero-stress service.
          </p>
          <div className="cta">
            <Link className="btn" to="/contact">Get a Free Quote</Link>
            <a className="btn" href="tel:+12408765629">Call (240) 876-5629</a>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="stats">
        <div className="wrap">
          <div className="stat"><div className="kpi">10+ yrs</div><div className="label">Painting locally</div></div>
          <div className="stat"><div className="kpi">Licensed</div><div className="label">& insured</div></div>
          <div className="stat"><div className="kpi">98%</div><div className="label">Great reviews</div></div>
          <div className="stat"><div className="kpi">Low/Zero-VOC</div><div className="label">Paint options</div></div>
        </div>
      </section>

      {/* Mission + photo */}
      <section className="wrap two-col" id="mission">
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
      <section className="wrap values" id="values" style={{ marginTop: 24 }}>
        <h2>What We Value</h2>
        <div className="grid">
          <article className="card"><h3>Community</h3><p>We live where we work and give back locally.</p></article>
          <article className="card"><h3>Teamwork</h3><p>Professional, respectful crews—trained and background-checked.</p></article>
          <article className="card"><h3>Craftsmanship</h3><p>Careful prep, sharp lines, and durable materials.</p></article>
          <article className="card"><h3>Ethics & Safety</h3><p>Up-front pricing, written changes, and safe job sites.</p></article>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="wrap" style={{ margin: "28px 0" }}>
        <p>
          Ready to refresh your space? <Link to="/contact">Request a free quote</Link> or call{" "}
          <a href="tel:+12408765629">(240) 876-5629</a>.
        </p>
      </section>
    </>
  );
}
