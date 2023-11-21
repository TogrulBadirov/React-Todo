import React, { useReducer } from 'react'

const Reducer = () => {

    function Reducer(state,action){
        console.log(state.count2);
        switch (action.type) {
            case "increment":
                return {...state, res:state.first-state.second}
            case "decrement":
                return { ...state, res: parseInt(state.first) + parseInt(state.second) }

            case "multiply":
                return { ...state, res: parseInt(state.first) * parseInt(state.second) }
            case "divide":
                return { ...state, res: parseInt(state.first) / parseInt(state.second) }
        
            default:
                break;
        }
    }

    const [state,setState] = useReducer(Reducer,{first:0,second:0,res:0})
    const handleInputFirst = (e)=>{
        state.first = e.target.value
        console.log(state.first);
    }
    const handleInputSecond = (e)=>{
        state.second = e.target.value
        console.log(state.second);
    }
  return (
    <>
    <div>
        {state.res}
        <button onClick={()=>setState({type:"increment"})}>-</button>
        <button onClick={()=>setState({type:"decrement"})}>+</button>
        <button onClick={()=>setState({type:"multiply"})}>*</button>
        <button onClick={()=>setState({type:"divide"})}>/</button>
    </div>
    <div>
        <input type="text" onChange={handleInputFirst} />
        <input type="text" onChange={handleInputSecond} />
    </div>
    </>
  )
}

export default Reducer
