import React from 'react'

export default function FinalCTA(){
  return (
    <section className="container py-20">
      <div className="bg-gradient-to-r from-white to-indigo-50 p-10 rounded-xl text-center">
        <h2 className="text-2xl font-semibold">The future of a nation is too important to leave only to conversation.</h2>
        <p className="lead mt-3">Build with us.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a className="px-5 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-white" href="#">Partner With Us</a>
          <a className="px-5 py-3 rounded-md border border-slate-200 text-slate-700" href="#">Support an Innovation</a>
          <a className="px-5 py-3 rounded-md bg-slate-100" href="#">Join the Tribe</a>
        </div>
      </div>
    </section>
  )
}
