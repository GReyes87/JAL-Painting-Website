import { NavLink, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import "./global.css";
import Contact from "./pages/contact";
import Admin from "./pages/admin";

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="wrap header__row">
          <Link to="/" className="brand">
            <span className="brand__mark">JAL</span>
            <span className="brand__name">Painting</span>
          </Link>

          <nav id="primary-nav" className="site-nav">
            <ul className="nav">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          <div className="header__cta">
            <a className="btn btn--primary" href="tel:+12408765629">
              Call (240) 876-5629
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
          <Route path="/admin" element={<Admin />} />
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
