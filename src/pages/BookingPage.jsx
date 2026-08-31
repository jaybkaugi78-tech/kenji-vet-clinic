import Appointment from '../components/Appointment';

export default function BookingPage() {
  return (
    <>
      <section className="page-hero booking-hero">
        <span className="label">Book a Veterinary Visit</span>
        <h1>Send your appointment details in a few steps.</h1>
        <p>Complete the form, then choose WhatsApp or email. Your details will be prepared automatically for you to send to Kenji Vet Services.</p>
      </section>
      <Appointment />
    </>
  );
}
