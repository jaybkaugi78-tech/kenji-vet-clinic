import Gallery from '../components/Gallery';
import FieldSection from '../components/FieldSection';

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <span className="label">Our Gallery</span>
        <h1>Care in action, from homes to farms.</h1>
        <p>A visual look at the kinds of animals, visits and environments Kenji Vet Services works with.</p>
      </section>
      <Gallery />
      <FieldSection />
    </>
  );
}
