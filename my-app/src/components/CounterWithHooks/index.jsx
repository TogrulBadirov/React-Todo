import React, { useState } from 'react'
import UseCounter from '../../hooks/UseCounter'

const CounterWithHooks = () => {
    const [count1,increase1,decrease1] = UseCounter(1)
    const [count2,increase2,decrease2] = UseCounter(2)
    // const [count1, setCount1] = useState(0)
    // const [count2, setCount2] = useState(0)

    // const increase1 = ()=>{
    //     setCount1(count1=>count1+1)
    // }
    // const decrease1 = ()=>{
    //     setCount1(count1=>count1-1)
    // }
    // const increase2 = ()=>{
    //     setCount2(count2=>count2+1)
    // }
    // const decrease2 = ()=>{
    //     setCount2(count1=>count1-1)
    // }

  return (
    <div>
        CounterWithHooks
        <p></p>
        <button onClick={()=>increase1()}>+</button>
        <p>{count1}</p>
        <button onClick={()=>decrease1()}>-</button>
        <p></p>


        <button onClick={()=>increase2()}>+</button>
        <p>{count2}</p>
        <button onClick={()=>decrease2()}>-</button>

    </div>
  )
}

export default CounterWithHooks