import React from 'react'
import Navigation from '../components/Home/navigation'
import HomeBanner from '../components/Home/HomeBanner'
import ProductCategory from '../components/Home/ProductCategory'
import SideBar from '../components/Home/SideBar'
import HomeMain from '../components/Home/HomeMain'
import Products from '../components/Home/Products'

const Home = () => {
  return (
    <>
    <Navigation/>
    <HomeBanner/>
    <ProductCategory/>
    <HomeMain/>
    </>
  )
}

export default Home