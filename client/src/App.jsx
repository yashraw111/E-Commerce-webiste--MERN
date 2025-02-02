import axios from 'axios'
import './App.css'
import '../src/assets/style/style.css'
import { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Footer from './pages/footer'
function App() {
  async function show() {
    const res = await axios.get(`http://localhost:8000/product/viewProduct`)
    console.log(res)
  }
  useEffect(()=>{
    show()
  },[])
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
 
    </>
  )
}

export default App
