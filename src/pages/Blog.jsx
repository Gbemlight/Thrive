import React from 'react'
import { Link } from 'react-router-dom'

const stories = [
  { category: 'Perspective', date: '07 Sep 2026', title: 'The experience of a nation is its most powerful brand', excerpt: 'Why the work of nation building starts with listening to the people who live inside the story.', tone: 'story-teal' },
  { category: 'Field Notes', date: '28 Aug 2026', title: 'Designing access for the last mile', excerpt: 'What Care Link is teaching us about proximity, trust and the small systems that make care possible.', tone: 'story-coral' },
  { category: 'Research', date: '14 Aug 2026', title: 'From good intentions to measurable change', excerpt: 'A practical view of evidence, iteration and building programs that can stand up in the real world.', tone: 'story-ink' },
]

export default function Blog(){
  return <div className="blog-page">
    {/* <section className="blog-intro container">
      <div className="eyebrow">THE THRIVE JOURNAL / IDEAS IN MOTION</div>
      <h1>Notes on making<br/><em>progress</em> real.</h1>
      <p>Perspectives, field notes and research from the work of building systems where people can thrive.</p>
    </section>
    <section className="container blog-grid" aria-label="Latest stories">
      {stories.map((story, index) => <article className={`story-card ${index === 0 ? 'story-featured' : ''}`} key={story.title}>
        <div className={`story-art ${story.tone}`}><span>TT / {String(index + 1).padStart(2,'0')}</span><strong>{index === 0 ? <>PEOPLE<br/>FIRST</> : index === 1 ? <>CLOSER<br/>TO CARE</> : <>EVIDENCE<br/>MATTERS</>}</strong></div>
        <div className="story-copy"><div className="story-meta">{story.category} <span>{story.date}</span></div><h2>{story.title}</h2><p>{story.excerpt}</p><Link to="/contact" className="story-link">Read the story <span aria-hidden="true">↗</span></Link></div>
      </article>)}
    </section> */}
  </div>
}