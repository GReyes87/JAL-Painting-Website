import { Link } from "react-router-dom";

export default function Home() {
  const weeksWork = [
    { title: "Hallway Finish", image: "/images/weekly/hallway-finish.png", alt: "Hallway Finish" },
    { title: "Kitchen Finish", image: "/images/weekly/kitchen-finish.png", alt: "Kitchen Finish" },
    { title: "Living Room Finish", image: "/images/weekly/living-room-finish.png", alt: "Living Room Finish" },
  ];

  const values = [
    "Community", "Teamwork", "Ethical", "Quality",
    "Safety", "Eco-Friendly", "On-Time", "Transparent Pricing"
  ];

  const reviews = [
    {
      name: "Sarah M.",
      text: "JAL Painting did an amazing job on our living room and hallway. Everything looked clean, sharp, and professionally done."
    },
    {
      name: "James R.",
      text: "Very easy to work with, showed up on time, and the final result came out better than we expected. I would definitely recommend them."
    },
    {
      name: "Linda T.",
      text: "They painted our kitchen cabinets and made the whole space feel brand new. Super professional and detail-oriented from start to finish."
    },
  ];

  return (
    <>
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
            <Link className="btn btn--light" to="/contact">
              Get a Free Quote
            </Link>
          </div>

          <ul className="chips" style={{ marginTop: 12 }}>
            <li className="chip">Licensed & Insured</li>
            <li className="chip">Neat Job Sites</li>
            <li className="chip">Low/Zero-VOC</li>
          </ul>
        </div>
      </section>

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

      <section className="wrap" style={{ marginTop: 28 }}>
        <h2>What We Stand For</h2>
        <ul className="chips" aria-label="Company values">
          {values.map((word) => (
            <li key={word} className="chip">
              {word}
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap reviews-section">
        <div className="reviews-header">
          <h2>What Our Customers Say</h2>
          <p className="muted">
            We take pride in delivering clean, high-quality painting work with honest service every step of the way.
          </p>
        </div>

        <div className="grid grid-3">
          {reviews.map((review) => (
            <article className="card review-card" key={review.name}>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">“{review.text}”</p>
              <h3 className="review-name">{review.name}</h3>
            </article>
          ))}
        </div>

        <div className="review-form-wrap">
          <div className="review-form-header">
            <h3>Leave a Review</h3>
            <p className="muted">
              Share your experience with JAL Painting.
            </p>
          </div>

          <form className="card review-form">
            <div className="two-up">
              <div className="field">
                <label htmlFor="reviewName">Name</label>
                <input
                  id="reviewName"
                  name="reviewName"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="field">
                <label htmlFor="reviewRating">Rating</label>
                <select id="reviewRating" name="reviewRating" defaultValue="">
                  <option value="" disabled>Select rating</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="reviewMessage">Review</label>
              <textarea
                id="reviewMessage"
                name="reviewMessage"
                rows="5"
                placeholder="Tell us about your experience"
              ></textarea>
            </div>

            <div className="actions">
              <button type="submit" className="btn btn--primary">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}