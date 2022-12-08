import { useState, useEffect } from "react";

export function useScreenSize() {
    const [width, setWidth] = useState(window.innerWidth)

    function handleResize() {
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
    
         window.addEventListener('resize', handleResize);
         return () => {
              window.removeEventListener('resize', handleResize)
         }
    },[])
    
    const isSmallScreen = width <= 576

    return { width, isSmallScreen }
}