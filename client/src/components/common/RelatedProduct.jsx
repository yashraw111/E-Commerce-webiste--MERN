import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const RelatedProduct = () => {
  const [product, setProduct] = useState([]);
  async function AllProduct() {
    const res = await axios.get(`http://localhost:8000/product/viewProduct`);
    setProduct(res.data);
  }
  console.log(product);
  useEffect(() => {
    AllProduct();
  }, []);
  return (
    <>
      <div className="container">
        <div className="product-main">
          <h2 className="section-title mb-40">Related Products</h2>
          <br />
          <br />
          <div className="product-grid">
            {product.map((product, index) => (
              <div className="showcase flex flex-col">
                <div className="showcase-banner">
                  <img
                    src={product.productImage}
                    alt="Mens Winter Leathers Jackets"
                    className="product-img default w-full h-full"
                    width="100%"
                  />
                  <img
                    src={product.productImage}
                    alt="Mens Winter Leathers Jackets"
                    className="product-img hover w-full"
                    width="100%"
                  />
                  <p className="showcase-badge">15%</p>
                  <div className="showcase-actions">
                    <button className="btn-action">
                      {" "}
                      <a href="#">
                        <ion-icon name="heart-outline"></ion-icon>
                      </a>{" "}
                    </button>
                    <button className="btn-action">
                      {" "}
                      <NavLink to={`moreProduct/${product._id}`}>
                        {" "}
                        <ion-icon name="eye-outline"></ion-icon>
                      </NavLink>
                    </button>
                    <button className="btn-action">
                      {" "}
                      <a href="#">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </a>{" "}
                    </button>
                    <button className="btn-action">
                      <a href="#">
                        <ion-icon name="bag-add-outline"></ion-icon>
                      </a>
                    </button>
                  </div>
                </div>
<br />
                <div className="showcase-content p-5 mt-4">
                  <a href="#" className="showcase-category">
                    {product.CateGory}
                  </a>
                  <a href="#">
                    <h3 className="showcase-title">{product.productName}</h3>
                  </a>

                  <div className="showcase-rating">
                    {Array(product.rate)
                      .fill(0)
                      .map((_, i) => (
                        <ion-icon key={i} name="star"></ion-icon>
                      ))}
                    {Array(5 - product.rate)
                      .fill(0)
                      .map((_, i) => (
                        <ion-icon
                          key={i + product.rate}
                          name="star-outline"
                        ></ion-icon>
                      ))}
                  </div>

                  <div className="price-box">
                    <p className="price">${product.productPrice}</p>
                    <del>${product.WithoutDiscountPrice}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
