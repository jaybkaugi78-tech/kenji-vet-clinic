const animals = [
  ['Companion Animals', 'Dogs, cats and household companions.', '/images/actual/conned-dog2.webp'],
  ['Exotic Animals', 'Birds, reptiles and other exotic companions.', '/images/actual/tortoise2.webp'],
  ['Farm & Field Animals', 'Livestock and selected wildlife field cases.', '/images/actual/mountain-bongo2.webp']
];

export default function Animals() {
  return (
    <section className="section" id="animals">
      <div className="heading"><span className="label">Animals We Care For</span><h2>One practice. Many species.</h2></div>
      <div className="animal-grid">
        {animals.map((animal) => (
          <article className="animal" key={animal[0]}>
            <img src={animal[2]} alt={animal[0]} />
            <div><h3>{animal[0]}</h3><p>{animal[1]}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
