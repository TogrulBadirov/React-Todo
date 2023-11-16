import React, { useState } from 'react'
import './index.css'
const ToggleNav = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <>
    <button onClick={()=>setIsActive(!isActive)}>Nav</button>
    <nav className={isActive?"active":''}>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
        </ul>
    </nav>
    </>
  )
}

export default ToggleNav