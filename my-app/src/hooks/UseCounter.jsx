import React, { useState } from 'react'

const UseCounter = (initialValue=0) => {

    const [count, setCount] = useState(initialValue)


    const increase = ()=>{
        setCount(count=>count+1)
    }
    const decrease = ()=>{
        setCount(count=>count-1)
    }

  return [count,increase,decrease]
}

export default UseCounter