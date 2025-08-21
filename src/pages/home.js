import { Link } from "react-router-dom";

export default function Home() {
  const weeksWork = [
    { title: "Hallway Finish", image: "/images/weekly/hallway-finish.png", alt: "Hallway Finish" },
    { title: "Kitchen Finish", image: "/images/weekly/kitchen-finish.png", alt: "Kitchen Finish" },
    { title: "Living Room Finish", image: "/images/weekly/living-room-finish.png", alt: "Living Room Finish" },
  ];

  const values = [
    "Community","Teamwork","Ethical","Quality",
    "Safety","Eco-Friendly","On-Time","Transparent Pricing"
  ];

  return (
    <>
      {/* Branded, image hero with readable overlay */}
      <section
        className="band band--image"
        style={{ "--hero-img": "url('/images/hero/hero.jpg')" }}
      >
        <div className="wrap band__inner">
          <h1>Pristine Finishes. Honest Service.</h1>
          <p className="muted">
            Interior, exterior, and cabinet refinishing for homes & businesses.
          </p>

          <div className="cta">
            <Link className="btn btn--light" to="/contact">Get a Free Quote</Link>
          </div>

          <ul className="chips" style={{ marginTop: 12 }}>
            <li className="chip">Licensed & Insured</li>
            <li className="chip">Neat Job Sites</li>
            <li className="chip">Low/Zero-VOC</li>
          </ul>
        </div>
      </section>

      {/* This Week’s Work */}
      <section className="wrap" style={{ marginTop: 30 }}>
        <h2>This Week’s Work</h2>
        <div className="grid grid-3">
          {weeksWork.map((w) => (
            <article className="card" key={w.title}>
              <img src={w.image} alt={w.alt || w.title} />
              <h3 style={{ marginTop: 10 }}>{w.title}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="wrap" style={{ marginTop: 28 }}>
        <h2>What We Stand For</h2>
        <ul className="chips" aria-label="Company values">
          {values.map((word) => (
            <li key={word} className="chip">{word}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
