import React, { useEffect, useState } from 'react'

export default function UseEffect() {

  const [data, setData] = useState([])


    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>res.json())
      .then((resul)=>{
        setData(resul)
        console.log(resul);
        
      })  
    }, [])

  return (
    <div>
      <h1>UseEffect</h1>
        <div>
          {
            data.map((i)=>
              <ul>
                <li>{i.name}</li>
              </ul>

            )
          }
        </div>
    </div>
  )
}
