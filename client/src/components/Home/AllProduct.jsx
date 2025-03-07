import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]); // Cart state

  // Fetch products from API
  async function fetchProducts() {
    const res = await axios.get(`http://localhost:8000/product/viewProduct`);
    setProduct(res.data);
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  // Function to handle Add to Cart
  const handleAddToCart = (item) => {
    
  };

  return (
    <>
      <div className="product-main">
        <h2 className="section-title mb-40">All Products</h2>
        <br /><br />
        <div className="product-grid">
          {product.map((product) => (
            <div key={product._id} className="showcase flex flex-col">
              <div className="showcase-banner">
                <img src={product.productImage} alt={product.productName} className="product-img default w-full h-full" width="100%" />
                <img src={product.productImage} alt={product.productName} className="product-img hover w-full" width="100%" />
                <p className="showcase-badge">15%</p>
                <div className="showcase-actions">
                  <button className="btn-action"><ion-icon name="heart-outline"></ion-icon></button>
                  <button className="btn-action"><NavLink to={`moreProduct/${product._id}`}><ion-icon name="eye-outline"></ion-icon></NavLink></button>
                  <button className="btn-action"><ion-icon name="repeat-outline"></ion-icon></button>
                  <button className="btn-action" onClick={() => handleAddToCart(product)}>
                    <ion-icon name="bag-add-outline"></ion-icon>
                  </button>
                </div>
              </div>

              <div className="showcase-content">
                <a href="#" className="showcase-category">{product.CateGory}</a>
                <h3 className="showcase-title">{product.productName}</h3>

                <div className="showcase-rating">
                  {Array(product.rate).fill(0).map((_, i) => (
                    <ion-icon key={i} name="star"></ion-icon>
                  ))}
                  {Array(5 - product.rate).fill(0).map((_, i) => (
                    <ion-icon key={i + product.rate} name="star-outline"></ion-icon>
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
    </>
  );
};

export default AllProduct;
