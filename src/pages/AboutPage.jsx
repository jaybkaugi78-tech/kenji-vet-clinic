import About from '../components/About';
import { CheckCircle2, HeartPulse, Truck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="label">About Kenji Vet Services</span>
        <h1>Veterinary care built around animals and the people who care for them.</h1>
        <p>A mobile mixed veterinary practice focused on accessible, professional and compassionate care across companion, exotic and farm animal medicine.</p>
      </section>
      <About />
      <section className="section soft">
        <div className="heading"><span className="label">Our Approach</span><h2>Practical care, clear communication and thoughtful treatment.</h2></div>
        <div className="value-grid">
          <article><Truck /><h3>Care that travels</h3><p>Home, farm and field visits reduce unnecessary transport stress and help animals receive care in familiar surroundings.</p></article>
          <article><HeartPulse /><h3>Whole-animal wellbeing</h3><p>We consider health, nutrition, environment and management when assessing each animal.</p></article>
          <article><ShieldCheck /><h3>Professional standards</h3><p>Every consultation is guided by careful assessment, responsible treatment and clear next steps.</p></article>
        </div>
      </section>
      <section className="section compact-cta"><CheckCircle2 /><div><h2>Want to speak with the team?</h2><p>Contact Kenji Vet Services or request a visit.</p></div><Link className="btn primary" to="/contact">Contact Us</Link></section>
    </>
  );
}
