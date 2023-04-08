import React, { useEffect, useState } from 'react'

function useHook() {
    const [online, setOnline] = useState<boolean>(false)
    useEffect(()=>{
        setOnline(true)
    })
    
    if(online){
        return {online, 'Online' :'Offline'}
    }
  return 'Loading ...'
}

export default useHook