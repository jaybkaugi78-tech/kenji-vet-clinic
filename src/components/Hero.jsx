import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="kicker">Mobile Mixed Veterinary Practice</span>
        <h1>
          Veterinary care, <em>wherever you need it.</em>
        </h1>
        <p>
          Professional care for companion animals, exotic species, livestock and
          selected wildlife cases, delivered directly to homes, farms and field
          locations.
        </p>
        <div className="actions">
          <Link className="btn primary" to="/booking">
            Book a Visit <ArrowRight />
          </Link>
          <a className="btn secondary" href="tel:+254701973149">
            <Phone /> Call Us
          </a>
        </div>
        <div className="checks">
          <span>
            <CheckCircle2 />
            Mobile care
          </span>
          <span>
            <CheckCircle2 />
            Mixed animal practice
          </span>
          <span>
            <CheckCircle2 />
            Emergency support
          </span>
        </div>
      </div>
      <div className="hero-photo">
        <img
          src="/images/actual/giraffe.webp"
          alt="Veterinary team attending to a giraffe in the field"
        />
        <div className="float-card">
          <b>Real field experience</b>
          <span>Care across pets, farms and wildlife cases</span>
        </div>
      </div>
    </section>
  );
}
