import React, { useState } from 'react'

export default function UseStateHook() {

    const [name, setName] = useState("ragupathi")
    const [num, setNum] = useState(0)
    const [obj, setobj] = useState({
        name: "ragu"
    })

    // const Name = "Ragupathi"

    function show() {
        setName("Sharavanan")
    }

    function minus() {
        setNum(num - 1)

    }
    return (
        <div>
            <h1>UseStateHook</h1>
            {/* <h1>{Name}</h1> */}
            <h1>{name}</h1>
            {/* <button onClick={()=>setName("Sharavanan")}>Change</button> */}
            <button onClick={show}>Change</button>

            <h1>{obj.name}</h1>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}
