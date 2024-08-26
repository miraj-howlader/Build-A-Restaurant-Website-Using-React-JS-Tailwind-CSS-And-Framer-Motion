import React from 'react'

import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' h-full bg-pattern bg-no-repeat max-w-[1800px]
     mx-auto'>
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
     
    </div>
  )
}

export default App
