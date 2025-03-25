
import React, { useEffect, useRef, useState } from 'react'


export default function UseRefhook() {
    const [name, setname] = useState("")

    // const inputValue = useRef(0)
    const inputValue = useRef()
    useEffect(() => {
        // inputValue.current = inputValue.current + 1
        inputValue.current = name
    },[name])
    const FocusInp = useRef()




    const focus = () => {
        FocusInp.current.focus()

    }

    return (
        <div>


            <input type="text" name="" id=""
                onChange={(e) => setname(e.target.value)}
            />
            <h1>Useref  : {inputValue.current}</h1>
            <h1> state : {name}</h1>


            <h1>UseRefhook</h1>
            <input type="text" name="" ref={FocusInp} id="" />
            <button onClick={focus}>Focus</button>
        </div>
    )
}
