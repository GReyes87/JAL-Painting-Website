import { useState } from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import "./global.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="wrap header__row">
          <Link to="/" className="brand" onClick={closeMenu}>
            <span className="brand__mark">JAL</span>
            <span className="brand__name">Painting</span>
          </Link>

          <button
            className="nav-toggle"
            aria-expanded={open ? "true" : "false"}
            aria-controls="primary-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>

          <nav id="primary-nav" className={`site-nav ${open ? "is-open" : ""}`}>
            <ul className="nav" onClick={closeMenu}>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          <div className="header__cta">
            <a className="btn btn--primary" href="tel:+15551234567">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </header>

      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <small>© {new Date().getFullYear()} JAL Painting — All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
