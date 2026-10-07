import React from 'react'

const galleryEntries = [
  { title: 'People-first systems', category: 'Field work' },
  { title: 'Health innovation', category: 'Research' },
  { title: 'Learning ecosystems', category: 'Education' },
  { title: 'Urban futures', category: 'Cities' },
  { title: 'Work & opportunity', category: 'Employment' },
  { title: 'Community voices', category: 'Storytelling' },
]

const galleryItems = Array.from({ length: 25 }, (_, index) => {
  const entry = galleryEntries[index % galleryEntries.length]

  return {
    ...entry,
    image: `/assets/img${index + 1}.jpeg`,
  }
})

export default function Gallery(){
  return (
    <div className="gallery-page">
      <section className="container gallery-intro">
        <div className="eyebrow">THRIVE TRIBE / VISUALS</div>
        <h1 className="display gallery-heading">Gallery</h1>
        <p className="lead gallery-copy">
          A snapshot of the people, ideas and places shaping a nation that works for everyone.
        </p>
      </section>

      <section className="container pb-20">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article key={item.title} className={`gallery-card ${index % 2 === 0 ? 'is-tall' : ''}`}>
              <div
                className="gallery-image"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(9,9,9,0.04), rgba(9,9,9,0.5)), url(${item.image})` }}
              >
                <span>{item.category}</span>
              </div>
              <div className="gallery-content">
                <h2>{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
