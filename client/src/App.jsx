import axios from 'axios'
import './App.css'
import '../src/assets/style/style.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import LoginPage from './components/Auth/LoginPage'
import MoreProduct from './components/common/MoreProduct'
import SignUpPage from './components/Auth/SignUpPage'
import ResetPassword from './components/Auth/ResetPassword'
import "react-toastify/dist/ReactToastify.css";
import { auth } from './components/Auth/firebase'
import { ToastContainer } from 'react-toastify'
import AllCart from './components/AllCart'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} /> 
        {/* <Route path="/" element={ user? <Home /> : <LoginPage></LoginPage>} ></Route> */}
        <Route path="/signin" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/forgotPass" element={<ResetPassword />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/moreProduct/:id" element={<MoreProduct />} />
        <Route path="/cartlist" element={<AllCart />} />

      </Routes>
    </Router>
    <ToastContainer position="top-center" autoClose={3000} />

 
    </>
  )
}

export default App
