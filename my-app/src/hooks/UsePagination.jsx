import React, { useState } from 'react'

const UsePagination = (curPage,itemPPage,data) => {

    const [currentPage, setCurrentPage] = useState(curPage)
    const [itemPerPage, setitemPerPage] = useState(itemPPage)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(data.length/itemPerPage); i++) {
        pageNumbers.push(i)
    }
    const  lastElement = currentPage*itemPerPage
    const firstElement  = lastElement - itemPerPage

    const pageData = data.slice(firstElement,lastElement)

    function handleCurrentPage(item) {
        setCurrentPage(item)
    }

  return ( [pageNumbers,pageData,handleCurrentPage] )
}

export default UsePagination