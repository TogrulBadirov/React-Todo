import React, { useEffect, useState } from 'react'
import UseLocal from '../../hooks/UseLocal'

const LocalHooks = () => {

    const [todo,AddTodo] = UseLocal('all')
    const [todo2,AddTodo2] = UseLocal('todo2')


  return (
    <div>
        LocalHooks
        <br />
        <button onClick={()=>AddTodo()}>Add</button>
        {todo && todo.map((item)=>{
            return(
                <div className="test">{item}</div>
            )
        })}

        <br />
        <button onClick={()=>AddTodo2()}>Add</button>
        {todo2 && todo2.map((item)=>{
            return(
                <div className="test">{item}</div>
            )
        })}


        </div>
  )
}

export default LocalHooks