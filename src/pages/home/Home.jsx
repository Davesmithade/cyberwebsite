import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import NewsLetter from '../../components/newsletter/NewsLetter'

const Home = () => {
  return (
    <div className=' overflow-hidden'>
        <Navbar />
        <Hero />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Home