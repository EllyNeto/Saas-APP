import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { Button } from '@base-ui/react'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1> Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1" 
          name="Neura the Nrainy Explorer"
          topic="Neural Network of the Brain"
          subject="science "
          duration={45}
          color ="#E2D5FF" />
        <CompanionCard
          id="2" 
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color ="#FFE074" />        
          <CompanionCard
          id="3" 
          name="Verbal the Vocabulary Builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color ="#C2EBFF" />
      </section>

      <section className="home-section">
        <CompanionList 
          title="Recently completed sessions"
          companions = {recentSessions}
          classNames = "w-2/3 mx-lg:w-full"
          />
        <CTA />

      </section>
    </main>
  )
}

export default Page
