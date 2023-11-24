import React, { useEffect, useState } from 'react'
import UseFetch from '../UseFetch'
import "./index.css"
import UseDarkMode from '../../hooks/UseDarkMode'

const Tremdyol = () => {
   
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("basket"))||[])
    const [localWhislistData, setlocalWhislistData] = useState(JSON.parse(localStorage.getItem("whishlist"))||[])
    const [data, setData] = useState()

    const [handleChangeThemeToggle,handleChangeTheme,websiteTheme] = UseDarkMode()

    const [isLoading, setIsLoading] = useState(true)
    function handleData(datas) {
        setData(datas)
        setIsLoading(false)
    }

useEffect(() => {
 localStorage.setItem("whishlist", JSON.stringify(localWhislistData))
}, [localWhislistData])


    const handleAddToWhislist = (item)=>{
        setlocalWhislistData([...localWhislistData,item])
    }

    const url = "http://localhost:3000"
    useEffect(() => {
      
        UseFetch(`${url}/products`,handleData)

    }, [])
    
    const handleAddBasket = async(product)=>{
        setLocalData(localData=>[...localData,product])  
        // localData.push(product)
        
        
    }

    useEffect(() => {
        localStorage.setItem('basket',JSON.stringify(localData)) 
    }, [localData])
    
  return (
    <section id='tremdyol'>
    {isLoading? "Loading...":

    


     <div className="container">
        <button onClick={handleChangeThemeToggle}>Dark Light mode</button>
<div className="basket">
   
{localData && localData.map((items)=>{
        return(
            <div className='basket-card'>
                 basket
                <h3>{items.name}</h3>
                <h3>${items.price}</h3>
                <button onClick={()=>handleAddBasket(items)}>Add to basket</button>
                <button onClick={()=> localStorage.setItem('basket',JSON.stringify(localData))}>Set</button>
            </div>
        )
     })}
</div>
<div className="whishlist">
     
{localWhislistData && localWhislistData.map((items)=>{
        return(
            <div className='card'>
                 whishlist
                <h3>{items.name}</h3>
                <h3>${items.price}</h3>
                <button>Buy</button>
            </div>
        )
     })}
</div>



<div className="cards">

     {data && data.map((item)=>{
         return(
             <div className='card'>
                 <p>{item.name}</p>
                 <p>${item.price}</p>
                 <button onClick={()=>handleAddBasket(item)}>Add to basket</button>
                 <button onClick={()=>handleAddToWhislist(item)}>Add to whish list</button>

                 <button onClick={()=>console.log(localWhislistData.includes(item))}> log</button>
             </div>
         )
             
         
     })}
</div>


     </div> 
     
     
     
     
     
     
     
     }
    
    </section>
  )
}

export default Tremdyol