import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { INNOVATIONS } from '../data/innovations'

export default function InnovationDetail(){
  const { id } = useParams()
  const item = INNOVATIONS.find(i=> i.id === id)
  if(!item) return (
    <section className="container py-24"><h2 className="text-2xl font-semibold">Innovation not found</h2><p className="mt-3 text-slate-600">Return to <Link to="/innovations" className="text-primary">Innovations</Link>.</p></section>
  )

  return (
    // <section className="container py-24">
    //   <div className="max-w-4xl">
    //     <div className="eyebrow">FEATURED INNOVATION</div>
    //     <h1 className="text-3xl font-bold mt-2">{item.title}</h1>
    //     <p className="mt-4 text-slate-600">{item.description}</p>
    //     <div className="mt-6">
    //       <strong>Status:</strong> <span className="text-slate-700">{item.status}</span>
    //     </div>
    //     <div className="mt-8">
    //       <Link to="/innovations" className="text-primary">← Back to innovations</Link>
    //     </div>
    //   </div>
    // </section>
     <div>
      
    </div>
  )
}
