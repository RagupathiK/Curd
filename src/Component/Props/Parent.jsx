import React from 'react'
import Child from './Child'

export default function Parent() {
    const users = [
        {
            id:1,
            Name:"Ragu",
        },
        {
            id:2,
            Name:"Babu",
        },
        {
            id:3,
            Name:"Raja",
        },
        {
            id:4,
            Name:"mani",
        }
    ]
    
  return (
    <div>
        <h1>Parent</h1>
        <ul>
            {
                users.map((user, index)=>(
                    <li key={index}>
                        {user.Name}
                    </li>
                ))
            }

        </ul>
        <Child data={{users}}/>
    </div>
  )
}
