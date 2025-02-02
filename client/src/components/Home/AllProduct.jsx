import React from "react";

const AllProduct = () => {
  return (
    <>
      <div class="product-main">
        <h2 class="title">New Products</h2>

        <div class="product-grid">
        <div class="showcase">
                                <div class="showcase-banner">
                                    <img src="https://i.postimg.cc/jdybNKWJ/jacket-3.jpg" alt="Mens Winter Leathers Jackets" class="product-img default" width="300"/>
                                    <img src="https://i.postimg.cc/pr9cj4HT/jacket-4.jpg" alt="Mens Winter Leathers Jackets" class="product-img hover" width="300"/>

                                    <p class="showcase-badge">15%</p>

                                    <div class="showcase-actions">
                                        <button class="btn-action"><ion-icon name="heart-outline"></ion-icon></button>
                                        <button class="btn-action"><ion-icon name="eye-outline"></ion-icon></button>
                                        <button class="btn-action"><ion-icon name="repeat-outline"></ion-icon></button>
                                        <button class="btn-action"><ion-icon name="bag-add-outline"></ion-icon></button>
                                    </div>
                                </div>

                                <div class="showcase-content">
                                    <a href="#" class="showcase-category">Jacket</a>
                                    <a href="#"><h3 class="showcase-title">Mens Winter Leathers Jackets</h3></a>

                                    <div class="showcase-rating">
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <ion-icon name="star-outline"></ion-icon>
                                    </div>

                                    <div class="price-box">
                                        <p class="price">48.00</p>
                                        <del>$75.00</del>
                                    </div>
                                </div>
                            </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
