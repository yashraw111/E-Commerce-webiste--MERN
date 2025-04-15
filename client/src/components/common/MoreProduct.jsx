import React, { useEffect, useState } from "react";
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedProduct from "./RelatedProduct";
const MoreProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  async function AllProduct() {
    const res = await axios.get(`http://localhost:8000/product/viewProduct`);
    setProduct(res.data);
  }

  useEffect(() => {
    AllProduct();
  }, []);

  const singleProduct = product.find((ele) => ele._id === id);

  return (
    <>
      <Header />
      <div class="product-featured">
        <div class="showcase-wrapper has-scrollbar">
          <div class="showcase-container">
            <div class="showcase">
              <div class="showcase-banner">
                <img
                  src={singleProduct?.productImage}
                  alt="shampoo, conditioner & facewash packs"
                  class="showcase-img"
                />
              </div>

              <div class="showcase-content">
                <div className="showcase-rating">
                  {Array(singleProduct?.rate)
                    .fill(0)
                    .map((_, i) => (
                      <ion-icon key={i} name="star"></ion-icon>
                    ))}
                  {Array( singleProduct?.rate)
                    .fill(0)
                    .map((_, i) => (
                      <ion-icon
                        key={i + singleProduct?.rate}
                        name="star-outline"
                      ></ion-icon>
                    ))}
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>

                  <ion-icon name="star-outline"></ion-icon>
                </div>

                <a href="#">
                  <h3 class="showcase-title">{singleProduct?.productName}</h3>
                </a>
                <p class="showcase-desc">{singleProduct?.description}</p>

                <div class="price-box">
                  <p class="price">{singleProduct?.productPrice}</p>
                  <del>{singleProduct?.WithoutDiscountPrice}</del>
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
        </div>
      </div>
      <h1>skks</h1>
      <RelatedProduct />
      <Footer />
    </>
  );
};

export default MoreProduct;
