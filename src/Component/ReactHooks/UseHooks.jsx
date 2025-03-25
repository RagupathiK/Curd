import React, { useState } from 'react'

export default function UseHooks() {

   const [name , setname]= useState ("Value")
   const [num , setnum]=useState (0)

   function minus() {
    setnum(num-1)
    
   }
   function reset() {
    setnum(0)
   }
  return (
    <div>
        <h1>UseHooks</h1>
        <h1>{name}</h1>
        <br />
        <button onClick={minus}>minus</button><h1>{num}</h1><button onClick={ ()=> setnum(num+1)}>add</button>

        <br /><br />

        <button onClick={reset}>Reset</button> 

    </div>
  )
}
