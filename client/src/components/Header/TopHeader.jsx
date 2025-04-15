  import React from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import { useSelector, useDispatch } from "react-redux";
  import { removeUser } from "../slice/user.slice";
  import { showToast } from "../../helpers/showToast";
  import axios from "axios";

  const TopHeader = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/auth/logout",);

        showToast("success", response.data.message);
        dispatch(removeUser()); // ✅ fixed spelling
        navigate("/"); // ✅ navigate to homepage
      } catch (error) {
        showToast("error", error.response?.data?.message || error.message);
      }
    };

    return (
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b> This week Order Over - $55
            </p>
          </div>

          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">USD &dollar;</option>
              <option value="eur">EUR &euro;</option>
            </select>

            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>

            {!user?.isLoggedIn ? (
              <button className="btn btn-outline-danger">
                <NavLink to="/signin">LogIn</NavLink>
              </button>
            ) : (
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default TopHeader;
