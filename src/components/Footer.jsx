import React from 'react'
import BrandLogo from './BrandLogo'

export default function Footer(){
  return (
    <footer className="border-t border-slate-100">
      <div className="container py-10 flex flex-col md:flex-row justify-between gap-6 items-start">
        <div>
          <BrandLogo variant="footer" />
          <div className="text-slate-600 mt-2">People make nations. When people thrive, nations thrive.</div>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col text-slate-600">
            <a href="/about" className="hover:text-slate-900">About</a>
            <a href="/work" className="hover:text-slate-900">Our Work</a>
            <a href="/innovations" className="hover:text-slate-900">Innovations</a>
            <a href="/research" className="hover:text-slate-900">Research</a>
            <a href="/blog" className="hover:text-slate-900">Blog</a>
            <a href="/gallery" className="hover:text-slate-900">Gallery</a>
            <a href="/impact" className="hover:text-slate-900">Impact</a>
          </div>
          <div className="flex flex-col text-slate-600">
            <a href="/get-involved" className="hover:text-slate-900">Get Involved</a>
            <a href="/contact" className="hover:text-slate-900">Contact</a>
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
