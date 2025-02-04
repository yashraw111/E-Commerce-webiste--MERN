import React from 'react'
import NewArrivals from './NewArrivals'
import Trending from '../common/Trending'
import TopRated from '../common/TopRated'
import DealOfTheDay from '../common/DealOfTheDay'
import AllProduct from './AllProduct'

const Products = () => {
  return (
    <>
    <div class="product-box">
    <div class="product-minimal">
        <NewArrivals/>
        <Trending/>
        <TopRated/>
        <DealOfTheDay/>
        <AllProduct/>
</div>

    </div>
    
    </>
  )
}

export default Products