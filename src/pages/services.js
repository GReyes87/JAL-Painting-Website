import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Drywall Repair",
      slug: "drywall-repair",
      image: "/images/services/drywall.jpeg",
      description:
        "Clean patches, seam taping, texture match, and priming so paint lays perfectly.",
      alt: "Drywall repair and skim coat close-up",
    },
    {
      title: "General Painting",
      slug: "general-painting",
      image: "/images/services/general.jpeg",
      description:
        "Walls, ceilings, trim, and doors—neat lines, smooth finishes, tidy cleanup.",
      alt: "Freshly painted living room with clean trim lines",
    },
    {
      title: "Exterior & Interior Painting",
      slug: "exterior-interior",
      image: "/images/services/exterior-interior.jpeg",
      description:
        "Full-service prep and repaint: power-wash, scrape, sand, prime, and durable coats.",
      alt: "Two-story home exterior repaint",
    },
    {
      title: "Power Washing",
      slug: "power-washing",
      image: "/images/services/powerwash.jpeg",
      description:
        "Siding, decks, walkways, and driveways—remove dirt and mildew; prep for paint.",
      alt: "Power washing siding before repainting",
    },
  ];

  return (
    <>
      <header style={{ margin: "6px 0 18px" }}>
        <h1>Our Services</h1>
        <p className="muted">Professional prep, premium materials, and clean finishes—inside and out.</p>
      </header>

      <section className="grid grid-3">
        {services.map((s) => (
          <article className="card" key={s.slug}>
            <img src={s.image} alt={s.alt} />
            <h3 style={{ marginTop: 10 }}>{s.title}</h3>
            <p className="muted" style={{ marginBottom: 12 }}>{s.description}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                className="btn"
                to={`/contact?service=${encodeURIComponent(s.title)}`}
                aria-label={`Reserve ${s.title}`}
              >
                Reserve
              </Link>
              <a className="btn" href="tel:+12408765629">Call (240) 876-5629</a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
