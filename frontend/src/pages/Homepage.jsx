import React from 'react'
import Header from '../Components/Layout/Header.jsx'
import Hero from '../Components/Routes/Hero/Hero.jsx'
import Categories from '../Components/Routes/Categories/Categories.jsx'
import BestDeals from '../Components/Routes/BestDeals/BestDeals.jsx'
import FeaturedPorduct from '../Components/Routes/FeaturedProduct/FeaturedPorduct.jsx'
import Events from '../Components/Events/Events.jsx'
import Sponsored from '../Components/Routes/Sponsored/Sponsored.jsx'
import Footer from '../Components/Layout/Footer.jsx'
const Homepage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Categories/>
      <BestDeals/>
      <Events/>
      <FeaturedPorduct/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}

export default Homepage
