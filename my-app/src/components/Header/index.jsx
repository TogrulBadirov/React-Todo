import React from 'react'
import './index.css'
import Navbar from '../Navbar'
const Header = () => {
  return (
    <>
    <section id='header'>
    <Navbar/>
    <div className="header-container">
    <div>
    <h1>Food and more <span>.</span></h1>
    <p>By Chef Francis Smith</p>
    </div>
    </div>
    </section>
    </>
  )
}

export default Header