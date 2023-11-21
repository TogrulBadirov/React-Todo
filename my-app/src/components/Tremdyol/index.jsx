import React, { useEffect, useState } from 'react'
import UseFetch from '../UseFetch'
import "./index.css"

const Tremdyol = () => {
   
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("basket"))||[])
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    function handleData(datas) {
        setData(datas)
        setIsLoading(false)
    }

    const url = "http://localhost:3000"
    useEffect(() => {
      
        UseFetch(`${url}/products`,handleData)

    }, [])
    
    const handleAddBasket = async(product)=>{
        setLocalData(localData=>[...localData,product])  
        // localData.push(product)
        localStorage.setItem('basket',JSON.stringify(localData)) 
    }

  return (
    <section id='tremdyol'>
    {isLoading? "Loading...":



     <div className="cards">
     {data && data.map((item)=>{
         return(
             <div className='card'>
                 <p>{item.name}</p>
                 <p>${item.price}</p>
                 <button onClick={()=>handleAddBasket(item)}>Add to basket</button>
                 <button onClick={()=> localStorage.setItem('basket',JSON.stringify(localData))}>Set</button>
             </div>
         )
             
         
     })}

     {localData && localData.map((items)=>{
        return(
            <div className='card'>
                <h3>{items.name}</h3>
                <h3>${items.price}</h3>
                <button onClick={()=>handleAddBasket(items)}>Add to basket</button>
                <button onClick={()=> localStorage.setItem('basket',JSON.stringify(localData))}>Set</button>
            </div>
        )
     })}
     </div> 
     
     
     
     
     
     
     
     }
    
    </section>
  )
}

export default Tremdyol