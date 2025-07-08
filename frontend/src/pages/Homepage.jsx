import React from 'react'
import Header from '../Components/Layout/Header.jsx'
import Hero from '../Components/Routes/Hero/Hero.jsx'
import Categories from '../Components/Routes/Categories/Categories.jsx'
import BestDeals from '../Components/Routes/BestDeals/BestDeals.jsx'
const Homepage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Categories/>
      <BestDeals/>
    </div>
  )
}

export default Homepage
