import React from 'react'
import Header from '../Components/Layout/Header.jsx'
import Hero from '../Components/Routes/Hero/Hero.jsx'
import Categories from '../Components/Routes/Categories/Categories.jsx'
import BestDeals from '../Components/Routes/BestDeals/BestDeals.jsx'
import FeaturedPorduct from '../Components/Routes/FeaturedProduct/FeaturedPorduct.jsx'
const Homepage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Categories/>
      <BestDeals/>
      <FeaturedPorduct/>
    </div>
  )
}

export default Homepage
