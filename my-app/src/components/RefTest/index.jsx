import React, { useReducer, useRef } from 'react'

const RefTest = () => {
    const inp = useRef()
    const btn = useRef()
    function reducer(state,action) {
        switch (action.type) {
            case "increment":
                
                return ({count: state.count + action.payload})
            case "decrement":
                
                return ({count: state.count - 1})
        
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, {count:1})
  return (
    <>
    <input type="`text`" ref={inp}/>
    <button ref={btn}>hello</button>
    <button onClick={()=>{
        console.log(inp.current.value)
        console.log(btn.current.textContent)        
    }}>Show</button>
    <button onClick={()=>dispatch({type:"increment",payload:2})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <div>deyer: {state.count}</div>
    </>
  )
}

export default RefTest