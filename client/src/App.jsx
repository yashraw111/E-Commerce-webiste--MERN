import axios from 'axios'
import './App.css'
import '../src/assets/style/style.css'
import { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import LoginPage from './components/Auth/LoginPage'
import MoreProduct from './components/common/MoreProduct'
import SignUpPage from './components/Auth/SignUpPage'
import ResetPassword from './components/Auth/ResetPassword'
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/forgotPass" element={<ResetPassword />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/moreProduct/:id" element={<MoreProduct />} />
      </Routes>
    </Router>
 
    </>
  )
}

export default App
