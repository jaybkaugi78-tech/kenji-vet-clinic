import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FieldSection() {
  return (
    <section className="field">
      <div className="field-photo"><img src="/images/actual/farm3.webp" alt="Mobile veterinary farm visit" /></div>
      <div className="field-copy">
        <span className="label light">From the Field</span>
        <h2>Veterinary care beyond the clinic.</h2>
        <p>Professional veterinary support delivered directly to homes, farms and animal facilities.</p>
        <div className="field-list">
          <span><CheckCircle2 />Farm and herd visits</span>
          <span><CheckCircle2 />Home consultations</span>
          <span><CheckCircle2 />Vaccination programmes</span>
        </div>
        <Link className="btn white" to="/booking">Request a Mobile Visit <ArrowRight /></Link>
      </div>
    </section>
  );
}
