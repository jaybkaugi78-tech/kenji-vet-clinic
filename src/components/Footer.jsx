import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link className="brand footerbrand" to="/">
            <img
              src="/images/kenji-vet-logo.png"
              alt="Kenji Vet Services"
              className="footer-logo"
            />

            <span>
              <b>Kenji Vet Services</b>
              <small>Mixed Veterinary Practice</small>
            </span>
          </Link>

          <p>
            Professional, compassionate veterinary care for pets,
            exotic animals and livestock.
          </p>
        </div>

        <div>
          <h4>Explore</h4>

          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/booking">Book a Visit</Link>
        </div>

        <div>
          <h4>Contact</h4>

          <a href="tel:+254701973149">
            +254 701 973 149
          </a>

          <a href="mailto:drkennedymurimi@gmail.com">
            drkennedymurimi@gmail.com
          </a>

          <span>Nairobi, Kenya</span>
        </div>
      </div>

      <div className="copyright">
        © 2026 Kenji Vet Services. All rights reserved.
      </div>
    </footer>
  );
}