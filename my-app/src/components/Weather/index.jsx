import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [weatherArr, setWeatherArr] = useState([])
    const [search, setsearch] = useState(false)
    const [value, setValue] = useState('Istanbul')


        const getData = async ()=>{
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=4f36a31473ad5d2fea13e240bb79ee98&q=${value}`)
            .then((data)=> data.json())
            console.log(response);
            // setWeatherArr([...weatherArr,response])
            setWeatherArr(response)
        } catch (error) {
            console.log(error);
        }
        }
        
        

  return (
    <>
    {/* {search && weatherArr[0].map((item)=>{
        <li>{item.visibility}</li>
    })} */}
    {search && 
    <ul>
    <li>Visibility: {weatherArr.visibility}</li>
    <li>Clouds: {weatherArr.clouds.all}</li>
    <li>Cod: {weatherArr.cod}</li>
    <li>Cod lat: {weatherArr.coord.lat}</li>
    <li>Cod lon: {weatherArr.cod.lon}</li>
    <li>feels_like: {weatherArr.main.feels_like -273}</li>
    </ul>
    
    }

    <button onClick={()=>{
        getData()
        setsearch(true)
        
        }}>Show</button>
    {/* <button onClick={()=>console.log(value)}>log</button> */}
    <input type="text" onChange={(e)=>{setValue(e.target.value)}} />
    {/* <button onClick={()=>}>get</button> */}
    </>
  )
}

export default Weather

//https://api.openweathermap.org/data/2.5/weather?appid=32d783b8044a29ccfb5164819602138f&q=Istanbul
//https://api.openweathermap.org/data/2.5/weather?appid=3bf2d55cd09c7115222f67de1568a55a&q=Istanbul
//https://api.openweathermap.org/data/2.5/weather?appid=4f36a31473ad5d2fea13e240bb79ee98&q=Istanbul