import React from 'react'
import UseToggle from '../../hooks/UseToggle'

const MultipleNav = () => {
    const [handleBoolean,bool] = UseToggle(false)

  return (
    <>

    <button onClick={()=>handleBoolean()}>Plus</button>
    <button >{bool?'a':'b'}</button>
    </>
    )
}

export default MultipleNav