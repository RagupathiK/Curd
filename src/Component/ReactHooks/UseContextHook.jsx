import React, { createContext, useContext } from 'react'

const CreateValue = createContext()

export default function UseContextHook() {

    const Name = "Ragu"

    return (
        <div>

            <h1>UseContextHook</h1>

            <CreateValue.Provider value={Name}>
                <Component1 />

            </CreateValue.Provider>

        </div>
    )
}

function Component1() {
    const data = useContext(CreateValue)
    return (
        <div>
            <h1>{data}</h1>
            

        </div>
    )
}
