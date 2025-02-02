import React from 'react'

const HomeBanner = () => {
  return (
    <>
     <div class="banner">
            <div class="container">
                <div class="slider-container has-scrollbar">
                    <div class="slider-item">
                        <img src="https://i.postimg.cc/V6Rrdsk1/banner-1.jpg" alt="women's latest fashion sale" class="banner-img"/>

                        <div class="banner-content">
                            <p class="banner-subtitle">Trending Item</p>
                            <h2 class="banner-title">Women's latest fashion sale</h2>
                            <p class="banner-text">Startting at &dollar; <b>20</b>.00</p>
                            <a href="#" class="banner-btn">Shop Now</a>
                        </div>
                    </div>

                    <div class="slider-item">
                        <img src="https://i.postimg.cc/RFXhvPgZ/banner-2.jpg" alt="modern sunglasses" class="banner-img"/>

                        <div class="banner-content">
                            <p class="banner-subtitle">Trending Accessories</p>
                            <h2 class="banner-title">Modern Sunglasses</h2>
                            <p class="banner-text">Startting at &dollar; <b>15</b>.00</p>
                            <a href="#" class="banner-btn">Shop Now</a>
                        </div>
                    </div>

                    <div class="slider-item">
                        <img src="https://i.postimg.cc/MTKZ37z2/banner-3.jpg" alt="new fashion summer sale" class="banner-img"/>

                        <div class="banner-content">
                            <p class="banner-subtitle">Sale Offer</p>
                            <h2 class="banner-title">New Fashion Summer Sale</h2>
                            <p class="banner-text">Startting at &dollar; <b>29</b>.99</p>
                            <a href="#" class="banner-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeBanner