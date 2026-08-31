import Services from '../components/Services';
import Animals from '../components/Animals';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero service-page-hero">
        <span className="label">Veterinary Services</span>
        <h1>Comprehensive care for pets, exotic animals and livestock.</h1>
        <p>From preventive consultations and diagnostics to mobile farm visits and specialist animal care.</p>
      </section>
      <Services />
      <Animals />
      <section className="home-cta">
        <div><span className="label light">Need a specific service?</span><h2>Tell us what your animal needs.</h2><p>Use the booking page to share the animal, service, date and location.</p></div>
        <Link className="btn white" to="/booking">Request a Visit <ArrowRight /></Link>
      </section>
    </>
  );
}
