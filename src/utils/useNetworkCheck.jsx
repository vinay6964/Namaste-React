import { useState,useEffect } from "react";

const useNetworkCheck = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine)

    useEffect (()=>{
        window.addEventListener("online", ()=>{
            setIsOffline(false);
        })
        window.addEventListener("offline", ()=>{
            setIsOffline(true);
        })
    },[])

    return isOffline;
}

export default useNetworkCheck;