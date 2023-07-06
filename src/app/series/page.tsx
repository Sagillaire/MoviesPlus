'use client'
import { log } from 'console'
import { useState, useEffect } from 'react'

import React from 'react'

const serie = () => {
  return (
    <div>Serie</div>
  )
}

export default serie

/* const series = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect');
    return () => { 
      console.log('salio');
    }
  }, [count])
  
  return (
    <div>{count}
      <button onClick={() => setCount (count + 1)}></button>
      <button onClick={() => setCount (count - 1)}></button>
    </div>
  )
}
*/
