import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="hero hero--home"
      aria-label="JAL Painting hero"
      style={{
        // Use the image from public/ at runtime (no import needed)
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
  );
}
