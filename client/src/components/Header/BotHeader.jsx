import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../slice/CartSlice'; // <-- import getCart

const BotHeader = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.user?._id) {
      dispatch(getCart(user?.user?._id));
    }
  }, [dispatch, user?.user?._id]);

  return (
    <>
      <div className="header-main">
        <div className="container">
          <a href="/" className="header-logo">
            <img src="https://i.postimg.cc/XYYNC3X8/logo.png" alt="logo" width="120" height="36" />
          </a>

          <div className="header-search-container">
            <input type="search" name="search" className="search-field" placeholder="Enter your product name" />
            <button className="search-btn"><ion-icon name="search-outline"></ion-icon></button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn"><ion-icon name="person-outline"></ion-icon></button>

            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <NavLink to="/cartlist">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">{cartItems.length}</span> 
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotHeader;
