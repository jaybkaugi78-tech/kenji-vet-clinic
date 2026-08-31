import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const navClass = ({ isActive }) => (isActive ? "active-link" : undefined);

  return (
    <header className="navbar">
      <Link className="brand" to="/" onClick={close}>
        <img
          src="/images/kenji-vet-logo.png"
          alt="Kenji Vet Services"
          className="nav-logo"
        />

        <span>
          <b>Kenji Vet Services</b>
          <small>Mixed Veterinary Practice</small>
        </span>
      </Link>

      <nav className={open ? "navlinks open" : "navlinks"}>
        <NavLink className={navClass} to="/" onClick={close}>
          Home
        </NavLink>
        <NavLink className={navClass} to="/about" onClick={close}>
          About
        </NavLink>
        <NavLink className={navClass} to="/services" onClick={close}>
          Services
        </NavLink>
        <NavLink className={navClass} to="/gallery" onClick={close}>
          Gallery
        </NavLink>
        <NavLink className={navClass} to="/contact" onClick={close}>
          Contact
        </NavLink>
        <Link className="btn primary navcta" to="/booking" onClick={close}>
          Book a Visit
        </Link>
      </nav>

      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
