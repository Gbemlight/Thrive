import React from 'react'

const metrics = ['People reached','Communities reached','Solutions built','Projects deployed','Strategic partnerships','Volunteers / fellows']

export default function Impact(){
  return (
    <section id="impact" className="container py-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold">Measure What Matters.</h2>
        <p className="mt-3 text-slate-600">Good intentions are not enough. We track outcomes, learn from implementation and use evidence to understand what works.</p>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
        {metrics.map(m=> (
          <div key={m} className="p-5 rounded-lg bg-white border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary">—</div>
            <div className="mt-2 text-slate-600 text-sm">{m}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 font-semibold text-slate-600">EVIDENCE BEFORE ASSUMPTION.</div>
    </section>
  )
}
