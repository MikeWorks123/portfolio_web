import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import About from './components/About'

const App = () => {
  return (
    <>
      <About/>
      <ParticleBackground />
      <Navbar />
      <Hero />
    </>
  )
}

export default App