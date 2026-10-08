import React from 'react'
import { Link } from 'react-router-dom'

const principles = [
  {
    number: '01',
    title: 'Start with people',
    description: 'Listen to lived experience and understand the needs behind each challenge.',
  },
  {
    number: '02',
    title: 'Follow the evidence',
    description: 'Use research and local insight to find the causes, not just the symptoms.',
  },
  {
    number: '03',
    title: 'Build together',
    description: 'Bring communities and cross-sector partners into the work from the start.',
  },
  {
    number: '04',
    title: 'Make progress last',
    description: 'Test, learn and strengthen solutions so they can deliver lasting impact.',
  },
]

export default function About(){
  return (
    <main className="about-page">
      <section className="container about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow about-eyebrow">THRIVE TRIBE / ABOUT US</p>
          <h1>People make nations. When people thrive, nations thrive.</h1>
          <p className="about-hero-lead">
            We are a nation-building and innovation organisation working to create
            people-centred solutions for stronger communities and systems.
          </p>
          <div className="about-hero-actions">
            <Link to="/work" className="about-button about-button-primary">
              Explore our work <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/contact" className="about-text-link">Partner with us</Link>
          </div>
        </div>

        <figure className="about-hero-image">
          <img
            src="/assets/img2.jpeg"
            alt="A speaker sharing ideas at a community event"
          />
          <figcaption>
            <span className="about-image-dot" aria-hidden="true" />
            Better systems begin by listening to people.
          </figcaption>
        </figure>
      </section>

      <section className="about-purpose">
        <div className="container about-purpose-inner">
          <div className="about-purpose-label">
            <p className="eyebrow about-eyebrow">OUR PURPOSE</p>
            <h2>Progress should be felt in everyday life.</h2>
          </div>
          <div className="about-purpose-copy">
            <p>
              Thrive Tribe works at the intersection of research, human development,
              innovation, partnerships and implementation. We focus on the systems people
              rely on every day, including healthcare, education, mobility and digital
              inclusion.
            </p>
            <p>
              We believe a nation’s strongest story is the real experience of its people.
              That is why we work alongside communities and partners to turn insight into
              practical action.
            </p>
          </div>
        </div>
      </section>

      <section className="container about-principles">
        <div className="about-section-heading">
          <p className="eyebrow about-eyebrow">HOW WE WORK</p>
          <h2>From understanding to meaningful change.</h2>
          <p>
            We connect evidence, human-centred design and collaboration to help good ideas
            work in the real world.
          </p>
        </div>

        <div className="about-principle-grid">
          {principles.map((principle) => (
            <article className="about-principle" key={principle.number}>
              <span className="about-principle-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta-section">
        <div className="container about-cta-inner">
          <div>
            <p className="eyebrow">LET’S MOVE FORWARD, TOGETHER</p>
            <h2>Better futures are built together.</h2>
          </div>
          <Link to="/contact" className="about-button about-button-light">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
