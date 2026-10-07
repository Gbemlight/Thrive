import React from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const exploreLinks = [
  { label: 'Our work', to: '/work' },
  { label: 'Innovations', to: '/innovations' },
  { label: 'Research', to: '/research' },
  { label: 'Impact', to: '/impact' },
]

const organisationLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Get involved', to: '/get-involved' },
  { label: 'Blog', to: '/blog' },
  { label: 'Gallery', to: '/gallery' },
]

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" aria-label="Thrive Tribe home" className="footer-logo-link">
            <BrandLogo variant="footer" />
          </Link>
          <p>People make nations. When people thrive, nations thrive.</p>
        </div>

        <nav className="footer-links" aria-label="Explore">
          <h2>Explore</h2>
          {exploreLinks.map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </nav>

        <nav className="footer-links" aria-label="Organisation">
          <h2>Organisation</h2>
          {organisationLinks.map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </nav>

        <div className="footer-contact">
          <h2>Let’s build what’s next.</h2>
          <p>Partner with us to create people-centred solutions that help communities thrive.</p>
          <Link to="/contact" className="footer-contact-link">
            Contact our team <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Thrive Tribe. All rights reserved.</span>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  )
}
