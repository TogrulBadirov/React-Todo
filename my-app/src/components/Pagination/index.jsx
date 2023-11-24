import React, { useEffect, useState } from 'react'
import UseFetch from '../UseFetch'
import UsePagination from '../../hooks/UsePagination'

const Paginationn = () => {
    const [data, setData] = useState([])


    const [pageNumber,pageData,handleCurrentPage] = UsePagination(1,4,data)




    function handleData(datas) {
        setData(datas)
    }



    useEffect(() => {
       
    UseFetch("https://jsonplaceholder.typicode.com/users",handleData)
    }, [])
    
  return (
    <>
    <table>
        <thead></thead>
        <tbody>
    {pageData.map((item)=>{
        return(
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
            </tr>
        )
    })}
    </tbody>
</table>

    {pageNumber.map((item)=>{
        return(
            <button key={item} onClick={()=>handleCurrentPage(item)}>{item}</button>
        )
    })}
    </>
  )
}

export default Paginationn