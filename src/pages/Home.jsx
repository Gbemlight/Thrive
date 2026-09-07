import React from 'react'
import Hero from '../components/Hero'
import BigIdea from '../components/BigIdea'
import Why from '../components/Why'
import Approach from '../components/Approach'
import Portfolio from '../components/Portfolio'
import CareLink from '../components/CareLink'
import Impact from '../components/Impact'
import FinalCTA from '../components/FinalCTA'

export default function Home(){
  return (
    <div>
      <Hero />
      <BigIdea />
      <Why />
      <Approach />
      <Portfolio />
      <CareLink />
      <Impact />
      <FinalCTA />
    </div>
  )
}
