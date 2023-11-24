import React, { useEffect, useState } from 'react'

const UseDarkMode = () => {

    const [websiteTheme, setWebsiteTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false)

    useEffect(() => {

        localStorage.setItem('theme',JSON.stringify(websiteTheme))
        handleChangeTheme(websiteTheme)

    }, [websiteTheme])
    


    function handleChangeThemeToggle() {
        setWebsiteTheme(!websiteTheme)
    }
    function handleChangeTheme(bool= websiteTheme) {
        document.body.classList.toggle("dark", bool)

        

    }

    
  return ([handleChangeThemeToggle,handleChangeTheme,websiteTheme])


}

export default UseDarkMode