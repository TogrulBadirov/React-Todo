import React, { useEffect, useState } from 'react'

const UseToggle = (logic = true) => {
    const [bool, setBool] = useState(logic)

    function handleBoolean() {
        setBool(!bool)
    }
    
    return [handleBoolean,bool]

}

export default UseToggle