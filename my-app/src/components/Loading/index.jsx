import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Loading = () => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const getProduct = async () =>{
        const res =  await axios.get("http://localhost:3000/posts")
        setData(res.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getProduct()
    }, [])
    
  return (
    <>                                          
    <div>
        {isLoading ? (<h1>Loading</h1>):(
            data.map((x)=>{
            return(
            <div>{x.id}</div>
            )
        }))}
    </div>
    </>
  )
}

export default Loading

//props card
//weather