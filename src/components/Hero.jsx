import React from 'react'
import BrandLogo from './BrandLogo'

export default function Hero(){
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-inner">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="eyebrow hero-eyebrow reveal" style={{animationDelay:'0s'}}>THRIVE TRIBE / NATION BUILDING + INNOVATION</div>
          <div className="hero-logo-wrap reveal" style={{animationDelay:'0.06s'}}>
            <BrandLogo variant="hero" />
          </div>
          <h2 className="display hero-title mt-4 reveal" style={{animationDelay:'0.18s'}}>
            <span className="block">Nations thrive</span>
            <span className="block hero-title-accent">when people do.</span>
          </h2>
          <p className="lead mt-6 max-w-2xl reveal" style={{animationDelay:'0.24s'}}>Thrive Tribe is a nation-building and innovation organization creating people-centred solutions to the problems that prevent individuals, communities and nations from thriving.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/work" className="hero-button hero-button-primary reveal" style={{animationDelay:'0.42s'}}>Explore Our Work <span aria-hidden="true">↗</span></a>
            <a href="/contact" className="hero-button hero-button-ghost reveal" style={{animationDelay:'0.5s'}}>Partner With Us</a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="hero-panel reveal" style={{animationDelay:'0.6s'}}>
            <div className="hero-visual-card">
              <div className="visual-label">A PEOPLE-FIRST<br/><strong>OPERATING SYSTEM</strong></div>
              <svg className="w-full h-auto" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#0f766e" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.06" />
                  </linearGradient>
                </defs>
                <rect x="30" y="30" width="380" height="240" rx="12" fill="url(#g1)" />
                <rect x="240" y="170" width="420" height="300" rx="14" fill="#0f766e" opacity="0.16" />
                <g className="nodes" fill="#10b981">
                  <circle className="float" cx="170" cy="110" r="6" />
                  <circle className="float" cx="330" cy="210" r="5" />
                  <circle className="float" cx="500" cy="150" r="6" />
                  <circle className="float" cx="620" cy="290" r="5" />
                </g>
                <g stroke="#94a3b8" strokeWidth="2" fill="none" opacity="0.22">
                  <path d="M170 110 C250 70, 350 130, 500 150" />
                  <path d="M330 210 C410 250, 530 250, 620 290" />
                </g>
                <g className="silhouettes" fill="#0b1720" opacity="0.9">
                  <rect x="60" y="260" width="80" height="120" rx="8" />
                  <rect x="140" y="240" width="60" height="140" rx="8" />
                  <rect x="200" y="220" width="40" height="160" rx="8" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
