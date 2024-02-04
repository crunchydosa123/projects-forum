import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
  return (
    <div>
    <div>
      <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
        <div>
            <Footer />
        </div>
    </div>

  )
}

export default Home
