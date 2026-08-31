import { useState } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const VET_PHONE = '254701973149';
const VET_EMAIL = 'drkennedymurimi@gmail.com';

export default function Appointment() {
  const [form, setForm] = useState({ name:'', phone:'', animal:'', service:'', date:'', location:'', details:'' });
  const [error, setError] = useState('');

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const bookingText = () => [
    'New Kenji Vet Appointment Request',
    '',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Animal: ${form.animal || 'Not specified'}`,
    `Service: ${form.service || 'Not specified'}`,
    `Preferred date: ${form.date || 'Not specified'}`,
    `Location: ${form.location || 'Not specified'}`,
    `Details: ${form.details || 'None'}`
  ].join('\n');

  const validate = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please enter your name and phone number first.');
      return false;
    }
    setError('');
    return true;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(`https://wa.me/${VET_PHONE}?text=${encodeURIComponent(bookingText())}`, '_blank', 'noopener,noreferrer');
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = `Veterinary Booking Request — ${form.animal || 'Animal'} — ${form.name}`;
    window.location.href = `mailto:${VET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bookingText())}`;
  };

  return (
    <section className="appointment booking-page-form" id="appointment">
      <div>
        <span className="label light">Booking Options</span>
        <h2>Choose the easiest way to send your request.</h2>
        <p>WhatsApp opens a chat with the booking details already filled in. Email opens your email app with the same details prepared.</p>
        <a href={`tel:+${VET_PHONE}`} className="phone"><Phone /> +254 701 973 149</a>
        <div className="booking-note">For urgent cases, calling directly is faster than waiting for a booking reply.</div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <label>Name<input name="name" value={form.name} onChange={update} required placeholder="Full name" /></label>
          <label>Phone<input name="phone" value={form.phone} onChange={update} required placeholder="+254 7XX XXX XXX" /></label>
        </div>
        <div className="form-row">
          <label>Animal<select name="animal" value={form.animal} onChange={update}><option value="">Select animal</option><option>Dog</option><option>Cat</option><option>Bird</option><option>Rabbit</option><option>Reptile</option><option>Cattle</option><option>Goat / Sheep</option><option>Poultry</option><option>Other</option></select></label>
          <label>Service<select name="service" value={form.service} onChange={update}><option value="">Select service</option><option>General Consultation</option><option>Vaccination</option><option>Farm Visit</option><option>Diagnostics</option><option>Exotic Animal Care</option><option>Procedure / Wound Care</option><option>Emergency Visit</option></select></label>
        </div>
        <div className="form-row">
          <label>Preferred date<input name="date" value={form.date} onChange={update} type="date" /></label>
          <label>Location<input name="location" value={form.location} onChange={update} placeholder="Area or address" /></label>
        </div>
        <label>Details<textarea name="details" value={form.details} onChange={update} rows="5" placeholder="Tell us about the animal or reason for the visit" /></label>
        {error && <div className="form-error">{error}</div>}
        <div className="booking-actions">
          <button className="btn primary" type="button" onClick={sendWhatsApp}><MessageCircle /> Send via WhatsApp</button>
          <button className="btn secondary" type="button" onClick={sendEmail}><Mail /> Send via Email</button>
        </div>
        <p className="form-helper">Your browser will open WhatsApp or your email application. You review the prepared message and press Send.</p>
      </form>
    </section>
  );
}
