import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeFromCart } from "./slice/CartSlice";
import { toast } from "react-toastify";
import "./AllCart.css"; // CSS file import karo
import Header from "../pages/Header";

const AllCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.user?.user?._id);

  
  useEffect(() => {
    if (userId) {
      dispatch(getCart(userId));
    }
  }, [dispatch, userId]);

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ userId, productId }))
      .unwrap()
      .then(() => toast.success("Item removed"))
      .catch((err) => toast.error(err?.message || "Error"));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.productId.productPrice * item.quantity;
    }, 0);
  };


  return (
    <>
    <Header/>
    
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.productId._id} className="cart-item">
              <img
                src={item?.productId?.productImage}
                alt={item?.productId?.productName}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.productId?.productName}</h3>
                <p>{item.productId?.CateGory?.cat_name}</p>
                <p>Quantity: {item?.quantity}</p>
                <p className="cart-price">
                  ${item?.productId?.productPrice * item?.quantity}
                </p>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemove(item.productId._id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ${getTotal()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
                </>
  );
};

export default AllCart;
