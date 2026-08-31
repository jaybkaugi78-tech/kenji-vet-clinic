import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="section split" id="about">
      <div className="image-card"><img src="/images/actual/dog4.webp" alt="Veterinary care during a dog consultation" /></div>
      <div>
        <span className="label">About Us</span>
        <h2>A practice built around thoughtful animal care.</h2>
        <p>Kenji Vet Services is a mobile mixed veterinary practice serving household pets, exotic companions, livestock and selected field cases through professional visits at homes, farms and animal facilities.</p>
        <div className="feature-list">
          <span><CheckCircle2 />Convenient mobile consultations</span>
          <span><CheckCircle2 />Companion, exotic, livestock and field care</span>
          <span><CheckCircle2 />Clear, personalised treatment guidance</span>
        </div>
        <Link className="text-link" to="/about">Learn more about the practice</Link>
      </div>
    </section>
  );
}
