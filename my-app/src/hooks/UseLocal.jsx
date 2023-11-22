import React, { useEffect, useState } from 'react'

const UseLocal = (key) => {

const [todo, setTodo] = useState(JSON.parse(localStorage.getItem(key))||[])

useEffect(() => {
    localStorage.setItem(key,JSON.stringify(todo))
}, [todo])

const AddTodo = ()=>{
    setTodo([...todo,"salam"])
}

  return [todo,AddTodo]
}

export default UseLocal