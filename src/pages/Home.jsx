import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Animals from '../components/Animals';
import FieldSection from '../components/FieldSection';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Animals />
      <FieldSection />
      <Testimonials />
      <section className="home-cta">
        <div>
          <span className="label light">Ready when you are</span>
          <h2>Need veterinary care at your home or farm?</h2>
          <p>Send your visit details through WhatsApp or email and the Kenji Vet Services team can follow up with you.</p>
        </div>
        <Link className="btn white" to="/booking">Book a Visit <ArrowRight /></Link>
      </section>
    </>
  );
}
