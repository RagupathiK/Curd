import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Quiztest() {
    const[name, setname] = useState("")
    const[password,setpassword]=useState("")
    const [data, setData] = useState([])
    

    const api = "https://677d06a94496848554c8b0e0.mockapi.io/mydatas"

    const details={
        Name:name,
        Password:password,
    }

    useEffect(()=>{
        axios.get(api)
        .then((res)=>{
            setData(res.data)
        })
    },[])

    const deldata=(id)=>{
        axios.delete(`${api}/${id},details`)
        .then((res)=>{
            setData(data.filter((i)=>i.id !==id))
        })
        alert("data deleted")
    }

  return (
    <div>

        <div>

        <label for="">Username</label>
        <input type="text" className='form-control control'/>
        <br/><br/>
        <label for="">Password</label>
        <input type="text" id="id2"/>
        <br/><br/>
        <button onclick="get()">Get</button>
    
        </div>
    </div>
  )
}
