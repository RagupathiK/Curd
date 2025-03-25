import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {

    const [num, setNum] = useState(0)
    const [data, setData] = useState([])

    console.log("renter");
    

    useEffect(()=>{
        // setNum(num+1)
        console.log("Useeffect render");
        
        // setTimeout(() => {
        //     setNum(num+1)
        // }, 1000);
    },[])

    return (
        <div>

            <h1>UseEffectHook</h1>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)}>+</button>
            <button onClick={() => setNum(num - 1)}>-</button>

        </div>
    )
}
