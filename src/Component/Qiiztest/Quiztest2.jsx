import React, { useState } from 'react'

export default function Quiztest2() {
    const [editid, seteditId] = useState("")
   
    const api = "https://677d06a94496848554c8b0e0.mockapi.io/mydatas"

    const find = (id) => {
        const passvalue = data.find((i) => i.id === id)
        // setName(passvalue.Name)
        // setPassword(passvalue.Password)
        seteditId(id)

    }

  return (
    <div>
        <h1>Quiztest2</h1>

    </div>
  )
}

