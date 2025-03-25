import React from 'react'
import ChildPage from './ChildPage'

export default function ParentPage() {

    const Name  = "Ragupathi"
    const Arr = ["Ragu" , "CBE" , "TamilNadu"]

  return (
    <div>
        <h1>ParentPage</h1>
        <h1>{Name}</h1>
        <div>
            <ul>
            {
                Arr.map((Arr , index)=>{
                    <li key={index}>{Name}</li>
                })
            }
            </ul>
        </div>

        <ChildPage data = {{Name,Arr}} />
    </div>
  )
}
