import React from 'react'

export default function About(){
  return (
     <section className="container py-24">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold">About Thrive Tribe</h1>
         <p className="mt-6 text-slate-600">Thrive Tribe is a nation-building and innovation organisation working at the intersection of research, human development, innovation, partnerships and implementation. Our work focuses on designing people-centred systems that improve everyday experiences across healthcare, education, mobility and digital inclusion.</p>
       <h2 className="mt-8 text-xl font-semibold">Our Philosophy</h2>
       <p className="mt-3 text-slate-600">People make nations. When people thrive, nations thrive. We believe the strongest nation brand is the honest experience of its people — not just its image.</p>
       <h2 className="mt-8 text-xl font-semibold">How We Work</h2>
        <ul className="mt-3 list-disc ml-6 text-slate-600 space-y-2">
         <li>Research and evidence generation</li>
          <li>Human-centred design and prototyping</li>
         <li>Strategic partnerships for implementation</li>
         <li>Rigorous measurement and scaling</li>
        </ul>
      </div>
     </section>
    
  )
}
