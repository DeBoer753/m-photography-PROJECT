// REACT:
import React from 'react'

// COMPONENTS:
import IntroBackground from "../../components/1-IntroBackground/IntroBackground"
import Services from "../../components/2-Services/Services"
import RecentWork from "../../components/3-RecentWork/RecentWork"
import Reviews from "../../components/4-Reviews/Reviews"
import Footer from "../../components/5-Footer/Footer"

// HOME:
export default function Home() {

  return (
    <main>

      <section> 
        <IntroBackground />
      </section>
      <section>
        <Services /> 
      </section>
      <section >
        <RecentWork />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <Footer />
      </section>

    </main>
)
}