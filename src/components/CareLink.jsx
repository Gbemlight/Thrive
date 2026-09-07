import React from 'react'

export default function CareLink(){
  return (
    <section id="carelink" className="container py-20">
      <div className="eyebrow">FEATURED INNOVATION</div>
      <div className="mt-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold">Healthcare should be closer to the people who need it.</h2>
          <p className="lead mt-3">Care Link is a telehealth initiative exploring how digital tools, USSD, medical professionals, referrals and strategic partnerships can reduce barriers to healthcare access.</p>
          <div className="inline-block mt-4 px-3 py-1 rounded-md bg-indigo-50 text-indigo-600 font-semibold">EMERGING INNOVATION</div>
          <div className="mt-6 flex gap-3">
            <a className="px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-white" href="#">Explore Care Link</a>
            <a className="px-4 py-2 rounded-md border border-slate-200 text-slate-700" href="#">Learn More</a>
          </div>
          <p className="text-xs text-slate-500 mt-4">Care Link is an emerging initiative and is not a substitute for emergency medical care.</p>
        </div>
        <div className="" aria-hidden>
          <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <linearGradient id="cg" x1="0" x2="1">
                <stop offset="0%" stopColor="#0ea5a3" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0f766e" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <g fontFamily="sans-serif" fontSize="12" fill="#0f172a">
              <rect x="40" y="30" width="160" height="56" rx="8" fill="#fff" stroke="#e6eef2"/>
              <text x="120" y="66" textAnchor="middle">CITIZEN</text>
              <rect x="260" y="30" width="160" height="56" rx="8" fill="url(#cg)"/>
              <text x="340" y="66" textAnchor="middle" fill="#fff">CARE LINK</text>
              <rect x="480" y="30" width="160" height="56" rx="8" fill="#fff" stroke="#e6eef2"/>
              <text x="560" y="66" textAnchor="middle">MEDICAL PROFESSIONAL</text>
              <rect x="260" y="140" width="160" height="56" rx="8" fill="#fff" stroke="#e6eef2"/>
              <text x="340" y="176" textAnchor="middle">HEALTHCARE FACILITY</text>

              <g stroke="#9ca3af" strokeWidth="2" fill="none" opacity="0.5">
                <path d="M200 58 L260 58" />
                <path d="M420 58 L480 58" />
                <path d="M340 86 L340 140" />
              </g>

              <g fill="#0f172a" opacity="0.7">
                <text x="20" y="260">TELECOM</text>
                <text x="680" y="260">LOGISTICS</text>
                <text x="340" y="300" textAnchor="middle">STRATEGIC PARTNERS</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
