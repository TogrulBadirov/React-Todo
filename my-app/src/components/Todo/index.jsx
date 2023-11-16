import React, { useState } from 'react'

const Todo = () => {
    const [inputValue, setinputValue] = useState('')
    const [todoArr, setTodoArr] = useState([])
    const handleArr = ()=>{
        setTodoArr([...todoArr,inputValue])
        setinputValue('')
    }
  return (
    <>
    <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}/>
    <button onClick={handleArr}>add</button>

    <ul>
    {todoArr.map((x)=>{
       return (<>
            <li>{x}</li>
            <button onClick={()=>setTodoArr(todoArr.filter(y=> y !== x))}>X</button>
            <button onClick={()=>setinputValue(x)}>Edit</button>
            </>)
    })}
    </ul>
    </>
  )
}

export default Todo