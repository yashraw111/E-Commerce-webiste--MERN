import React from "react";

const DealOfTheDay = () => {
  return (
    <>
      <div class="product-featured">
        <h2 class="title">Deal of the day</h2>

        <div class="showcase-wrapper has-scrollbar">
          <div class="showcase-container">
            <div class="showcase">
              <div class="showcase-banner">
                <img
                  src="https://i.postimg.cc/wjGDnM81/shampoo.jpg"
                  alt="shampoo, conditioner & facewash packs"
                  class="showcase-img"
                />
              </div>

              <div class="showcase-content">
                <div class="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>

                <a href="#">
                  <h3 class="showcase-title">
                    SHAMPOO, CONDITIONER & FACEWASH PACKS
                  </h3>
                </a>
                <p class="showcase-desc">
                  Old Spice includes a variety of products designed for men's
                  grooming needs, such as deodorants and antiperspirants, body
                  washes, shaving creams, aftershaves and hair and beard care
                </p>

                <div class="price-box">
                  <p class="price">$150.00</p>
                  <del>$200.00</del>
                </div>

                <button class="add-cart-btn">Add to Cart</button>

                <div class="showcase-status">
                  <div class="wrapper">
                    <p>
                      Already Sold: <b>20</b>
                    </p>
                    <p>
                      Available: <b>40</b>
                    </p>
                  </div>

                  <div class="showcase-status-bar"></div>
                </div>

                <div class="countdown-box">
                  <p class="countdown-desc">Hurry up! Offer ends in: </p>

                  <div class="countdown">
                    <div class="countdown-content">
                      <p class="display-number">360</p>
                      <p class="display-text">Days</p>
                    </div>

                    <div class="countdown-content">
                      <p class="display-number">24</p>
                      <p class="display-text">Hours</p>
                    </div>

                    <div class="countdown-content">
                      <p class="display-number">59</p>
                      <p class="display-text">Min</p>
                    </div>

                    <div class="countdown-content">
                      <p class="display-number">00</p>
                      <p class="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="showcase-container">
            <div class="showcase">
              <div class="showcase-banner">
                <img
                  src="https://i.postimg.cc/6qd3mpCv/jewellery-1.jpg"
                  alt="Rose Gold diamonds Earring"
                  class="showcase-img"
                />
              </div>

              <div class="showcase-content">
                <div class="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>

                <a href="#">
                  <h3 class="showcase-title">ROSE GOLD DIAMOND EARRINGS</h3>
                </a>
                <p class="showcase-desc">
                  It's a stylish piece of jewelry that combines the warm tones
                  of rose gold with the brilliance of diamonds. Enjoy a a
                  luxurious and elegant accessory, perfect for enhancing any
                  outfit while adding a touch of sophistication
                </p>

                <div class="price-box">
                  <p class="price">$1990.00</p>
                  <del>$2000.00</del>
                </div>

                <button class="add-cart-btn">Add to Cart</button>

                <div class="showcase-status">
                  <div class="wrapper">
                    <p>
                      Already Sold: <b>15</b>
                    </p>
                    <p>
                      Available: <b>40</b>
                    </p>
                  </div>

                  <div class="showcase-status-bar"></div>
                </div>

                <div class="countdown-box">
                  <p class="countdown-desc">Hurry up! Offer ends in: </p>

                  <div class="countdown">
                    <div class="countdown-content">
                      <p class="display-number">360</p>
                      <p class="display-text">Days</p>
                    </div>

                    <div class="countdown-content">
                      <p class="display-number">24</p>
                      <p class="display-text">Hours</p>
                    </div>

                    <div class="countdown-content">
                      <p class="display-number">59</p>
                      <p class="display-text">Min</p>
                    </div>

                    <div class="countdown-content">
                      <p class="display-number">00</p>
                      <p class="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealOfTheDay;
