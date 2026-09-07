import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconHealth, IconLearn, IconWork } from './Icons'
import { motion } from 'framer-motion'

const items = [
  ['THRIVE HEALTH','Healthcare access and health innovation.'],
  ['THRIVE LEARN','E-learning and access to education.'],
  ['THRIVE WORK','Skills, employability and opportunity.'],
  ['THRIVE CIVIC','Civic participation and citizen experience.'],
  ['THRIVE DIGITAL','Digital inclusion, AI and technology for public good.'],
  ['THRIVE LEAD','Leadership and human-capital development.'],
  ['THRIVE CITY','Urban/community systems and quality of life.'],
  ['THRIVE AGRIC','Agricultural innovation and opportunity.']
]

export default function Portfolio(){
  return (
    <section id="innovations" className="container py-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold">Where We Build</h2>
        <p className="mt-3 text-slate-600">National problems rarely exist in isolation. Our innovation portfolio explores the systems, opportunities and experiences that shape how people thrive.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i)=> {
          const icons = [<IconHealth/>,<IconLearn/>,<IconWork/>]
          return (
            <motion.div key={it[0]} whileHover={{ y:-8 }} whileTap={{ scale:0.995 }} className="card-wrap">
              <NavLink to={`/innovations/${it[0].toLowerCase().replace(/\s+/g,'-')}`} className="group block p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition focus-ring" aria-label={it[0]}>
                <div className="card-number">{String(i+1).padStart(2,'0')}</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">{it[0].split(' ')[0]}</div>
                  <div className="text-primary opacity-95">{icons[i%icons.length]}</div>
                </div>
                <h3 className="mt-3 card-title group-hover:text-primary">{it[0]}</h3>
                <p className="mt-2 text-sm text-slate-600">{it[1]}</p>
                <div className="mt-4 text-xs text-slate-400">Innovation • Systems • People</div>
              </NavLink>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
