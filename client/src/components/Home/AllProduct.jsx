import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ViewList } from "../slice/UserSlice";
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from "../slice/CartSlice";
import { toast } from 'react-toastify';


const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]); // Cart state

  const{ProductList} = useSelector((state)=>state.product)
  const dispatch = useDispatch()
  console.log("slice",ProductList)


  useEffect(() => {
      dispatch(ViewList())
  }, [dispatch]);

   const user = useSelector((state) => state.user);

   const handleAddToCart = (productId) => {
    if (!user?.user?._id) return toast.warn("Please login first");
  
    dispatch(addToCart({
      userId: user?.user?._id,
      productId,
      quantity: 1,
    }))
      .unwrap()
      .then((res) => {
        toast.success("Item added to cart!");
        console.log("Cart Response:", res);
      })
      .catch((err) => {
        toast.error(err?.message || "Something went wrong");
        console.log("Cart Error:", err);
      });
  };
  


  return (
    <>
      <div className="product-main">
        <h2 className="section-title mb-10">All Products</h2>
        <div className="product-grid">
          {ProductList.map((product) => (
            <div key={product._id} className="showcase flex flex-col">
              <div className="showcase-banner">
                <img src={product.productImage} alt={product.productName} className="product-img default w-full h-full"  />
                <img src={product.productImage} alt={product.productName} className="product-img hover w-full"  />
                <p className="showcase-badge">{product?.discount}%</p>
                <div className="showcase-actions">
                  <button className="btn-action"><ion-icon name="heart-outline"></ion-icon></button>
                  <button className="btn-action"><NavLink to={`moreProduct/${product._id}`}><ion-icon name="eye-outline"></ion-icon></NavLink></button>
                  <button className="btn-action"><ion-icon name="repeat-outline"></ion-icon></button>
                  <button className="btn-action" onClick={() => handleAddToCart(product._id)}>
                    <ion-icon name="bag-add-outline"></ion-icon>
                  </button>
                </div>
              </div>

              <div className="showcase-content">
                <a href="#" className="showcase-category">{product.CateGory.cat_name}</a>
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
