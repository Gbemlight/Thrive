import React from 'react'

export default function BigIdea(){
  return (
    <section id="about" className="container py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold">A nation is not only what the world sees.<br/>It is what its people experience.</h2>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gradient-to-b from-white/60 to-transparent p-6 rounded-lg">
            <div>
              <h3 className="text-slate-700 font-semibold">What the world sees</h3>
              <ul className="mt-3 text-slate-600 space-y-2">
                <li>Perception</li>
                <li>Investment</li>
                <li>Tourism</li>
                <li>Manufacturing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-700 font-semibold">What people experience</h3>
              <ul className="mt-3 text-slate-600 space-y-2">
                <li>Healthcare</li>
                <li>Education</li>
                <li>Opportunity</li>
                <li>Digital access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
