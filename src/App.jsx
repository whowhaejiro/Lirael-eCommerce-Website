import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shops from './pages/Shops'
import OurStory from './pages/OurStory'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import PasswordReset from './pages/PasswordReset'
import OTP from './pages/OTP'

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/shop' element={<Shops />} />
         <Route path='/ourStory' element={<OurStory />} />
         <Route path='/blog' element={<Blog />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/signUp' element={<SignUp />} />
         <Route path='/login' element={<Login />} />
         <Route path='/passwordReset' element={<PasswordReset />} />
         <Route path='/otp' element={<OTP />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/productdetails' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
