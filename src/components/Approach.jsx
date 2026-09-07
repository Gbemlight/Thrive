import React from 'react'

const steps = [
  ['01','SEE','Understand the people and the problem.'],
  ['02','RESEARCH','Study root causes and existing gaps.'],
  ['03','DESIGN','Develop practical, people-centred solutions.'],
  ['04','BUILD','Turn ideas into platforms, programs, systems or interventions.'],
  ['05','PARTNER','Bring together government, private sector, communities, experts and funders.'],
  ['06','DEPLOY','Test solutions in real environments.'],
  ['07','MEASURE','Track outcomes and learn.'],
  ['08','SCALE','Grow what works.']
]

export default function Approach(){
  return (
    <section id="approach" className="container py-20">
      <h2 className="text-2xl font-semibold">From Problem to Possibility.</h2>
      <p className="lead mt-3">We don't stop at identifying problems. We study them, build around them, test what works and help scale solutions.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map(([num, title, desc], i)=> (
          <div key={num} className="p-4 rounded-lg bg-white border border-slate-100 shadow-sm">
            <div className="text-sm font-bold text-primary">{num}</div>
            <h3 className="mt-2 font-semibold">{title}</h3>
            <p className="mt-1 text-slate-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
