import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero hero--home"
        aria-label="JAL Painting hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.35)), url('/images/hero/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero__content wrap">
          <h1 className="hero__title">Pristine Finishes. Honest Service.</h1>
          <p className="hero__subtitle">
            Interior, exterior, and cabinet refinishing for homes & businesses.
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Get a Free Quote
            </Link>
            <a href="tel:+15551234567" className="btn btn--ghost">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* THIS WEEK'S WORK */}
      <section className="wrap" style={{ marginTop: "40px" }}>
        <h2>This Week’s Work</h2>

        <div className="grid grid-3">
          <article className="card">
            <img src="/images/weekly/hallway-finish.png" alt="Hallway Finish" />
            <h3 style={{ marginTop: "10px" }}>Hallway Finish</h3>
          </article>

          <article className="card">
            <img src="/images/weekly/kitchen-finish.png" alt="Kitchen Finish" />
            <h3 style={{ marginTop: "10px" }}>Kitchen Finish</h3>
          </article>

          <article className="card">
            <img src="/images/weekly/living-room-finish.png" alt="Living Room Finish" />
            <h3 style={{ marginTop: "10px" }}>Living Room Finish</h3>
          </article>
        </div>
      </section>

      {/* VALUES */}
      <section className="wrap" style={{ marginTop: "28px" }}>
        <h2>What We Stand For</h2>
        <ul className="chips" aria-label="Company values">
          {[
            "Community",
            "Teamwork",
            "Ethical",
            "Quality",
            "Safety",
            "Eco-Friendly",
            "On-Time",
            "Transparent Pricing"
          ].map((word) => (
            <li key={word} className="chip">{word}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
