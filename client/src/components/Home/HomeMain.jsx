import React from 'react'
import SideBar from './SideBar'
import Products from './Products'
import DealOfTheDay from '../common/DealOfTheDay'

const HomeMain = () => {
  return (
    <>
       <div class="product-container">
       <div class="container">
        <SideBar/>
        <Products/>
       </div>
       </div>
    
    </>
  )
}

export default HomeMain