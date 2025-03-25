import React, { useReducer, useState } from 'react'


function MyFun(state ,action){
    if(action.type === "plus"){
        return state + 1
    }
    else if(action.type === "minus"){
        return state -1

    }

}
export default function UseReducerHook() {

    // const [name ,setName] = useState("")
    const [count , dispatch] = useReducer(MyFun,0)
  return (
    <div>
        <h1>UseReducerHook</h1>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type: "plus"})}>+</button>
        <button onClick={()=>dispatch({type: "minus"})}>-</button>
    </div>
  )
}
