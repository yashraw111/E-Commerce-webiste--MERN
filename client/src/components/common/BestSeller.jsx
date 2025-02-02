import React from "react";

const BestSeller = () => {
  return (
    <>
      <div class="product-showcase">
        <h3 class="showcase-heading">Best Sellers</h3>

        <div class="showcase-wrapper">
          <div class="showcase-container">
            <div class="showcase">
              <a href="#" class="showcase-img-box">
                <img
                  src="https://i.postimg.cc/kGZn4GL2/1.jpg"
                  alt="baby fabric shoes"
                  class="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div class="showcase-content">
                <a href="#">
                  <h4 class="showcase-title">Baby fabric shoes</h4>
                </a>

                <div class="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <div class="price-box">
                  <del>$5.00</del>
                  <p class="price">$4.00</p>
                </div>
              </div>
            </div>

            <div class="showcase">
              <a href="#" class="showcase-img-box">
                <img
                  src="https://i.postimg.cc/fySG8Kgb/2.jpg"
                  alt="men's hoodies t-shirt"
                  class="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div class="showcase-content">
                <a href="#">
                  <h4 class="showcase-title">Men's hoodies t-shirt</h4>
                </a>

                <div class="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <div class="price-box">
                  <del>$17.00</del>
                  <p class="price">$7.00</p>
                </div>
              </div>
            </div>

            <div class="showcase">
              <a href="#" class="showcase-img-box">
                <img
                  src="https://i.postimg.cc/14xL2qLr/3.jpg"
                  alt="girls t-shirt"
                  class="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div class="showcase-content">
                <a href="#">
                  <h4 class="showcase-title">Girls t-shirt</h4>
                </a>

                <div class="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <div class="price-box">
                  <del>$5.00</del>
                  <p class="price">$3.00</p>
                </div>
              </div>
            </div>

            <div class="showcase">
              <a href="#" class="showcase-img-box">
                <img
                  src="https://i.postimg.cc/y6wxsrKv/4.jpg"
                  alt="woolen hat for men"
                  class="showcase-img"
                  width="75"
                  height="75"
                />
              </a>

              <div class="showcase-content">
                <a href="#">
                  <h4 class="showcase-title">Woolen hat for men</h4>
                </a>

                <div class="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

                <div class="price-box">
                  <del>$15.00</del>
                  <p class="price">$12.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
