import React, { useState } from 'react'
import './index.css'
const Modall = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <>
    <button onClick={()=>setIsActive(!isActive)}>Modal</button>
    <div className={isActive?"modal-active modal":'modal'} >
    <button onClick={()=>setIsActive(false)}>Close</button>
    hi
    </div>
    </>
  )
}

export default Modall

