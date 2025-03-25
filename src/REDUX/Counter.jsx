import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { decre, incre } from './CounterSlice'

export default function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const disp = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>disp(incre())}>+</button>
        <button onClick={()=>disp(decre())}>-</button>

    </div>
  )
}
