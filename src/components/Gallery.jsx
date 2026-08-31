import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { galleryItems } from "../data/siteData";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = [
    "All",
    ...new Set(galleryItems.map((item) => item.category)),
  ];
  const items =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="section gallery" id="gallery">
      <div className="heading">
        <span className="label">Our Work</span>
        <h2>Real care. Real animals. Real field experience.</h2>
        <p>
          Photographs from Kenji Vet Services covering companion animals,
          livestock, exotic species and field veterinary work.
        </p>
      </div>

      <div className="filters">
        {categories.map((category) => (
          <button
            className={filter === category ? "active" : ""}
            key={category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="masonry">
        {items.map((item, index) => (
          <button
            className={`gallery-item ${index % 5 === 0 ? "tall" : ""}`}
            key={`${item.image}-${index}`}
            onClick={() => setSelected(item)}
            aria-label={`Open ${item.title}`}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="overlay">
              <span>{item.category}</span>
              <b>{item.title}</b>
              <Maximize2 />
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close image"
          >
            <X />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
            <figcaption>
              <span>{selected.category}</span>
              <b>{selected.title}</b>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
