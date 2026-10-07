import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import BrandLogo from './BrandLogo'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY>20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`site-header ${scrolled? 'is-scrolled':''}`}>
      <div className="nav-shell">
        <NavLink to="/" className="brand" aria-label="Thrive Tribe home">
          <BrandLogo variant="header" />
        </NavLink>
        <nav role="navigation" aria-label="Main" className="hidden md:flex nav-links">
          <NavLink to="/about" className={({isActive})=>isActive?'active':''}>About</NavLink>
          <NavLink to="/work" className={({isActive})=>isActive?'active':''}>Our Work</NavLink>
          <NavLink to="/innovations" className={({isActive})=>isActive?'active':''}>Innovations</NavLink>
          <NavLink to="/research" className={({isActive})=>isActive?'active':''}>Research</NavLink>
          <NavLink to="/blog" className={({isActive})=>isActive?'active':''}>Blog</NavLink>
          <NavLink to="/gallery" className={({isActive})=>isActive?'active':''}>Gallery</NavLink>
          <NavLink to="/impact" className={({isActive})=>isActive?'active':''}>Impact</NavLink>
        </nav>
        <div className="nav-actions hidden md:flex">
          <NavLink to="/contact" className="nav-secondary">Build With Us</NavLink>
          <NavLink to="/contact" className="nav-primary">Partner With Us <span aria-hidden="true">↗</span></NavLink>
        </div>
          <button className="menu-button md:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="mobile-menu md:hidden">
          <div className="mobile-menu-inner">
            <NavLink to="/about" onClick={()=>setOpen(false)} className="py-2">About</NavLink>
            <NavLink to="/work" onClick={()=>setOpen(false)} className="py-2">Our Work</NavLink>
            <NavLink to="/innovations" onClick={()=>setOpen(false)} className="py-2">Innovations</NavLink>
            <NavLink to="/research" onClick={()=>setOpen(false)} className="py-2">Research</NavLink>
            <NavLink to="/impact" onClick={()=>setOpen(false)} className="py-2">Impact</NavLink>
            <NavLink to="/blog" onClick={()=>setOpen(false)} className="py-2">Blog</NavLink>
            <NavLink to="/gallery" onClick={()=>setOpen(false)} className="py-2">Gallery</NavLink>
            <div className="pt-2 border-t border-slate-100">
              <button className="w-full py-2 mb-2 rounded-md bg-gradient-to-r from-primary to-accent text-white focus-ring">Partner With Us</button>
              <button className="w-full py-2 rounded-md border border-slate-200 focus-ring">Build With Us</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
