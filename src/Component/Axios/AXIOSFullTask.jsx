import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AXIOSFullTask() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const api = "https://677d06a94496848554c8b0e0.mockapi.io/mydatas"

  const details = {
    Name: name,
    Password: password
  }

  useEffect(() => {
    axios.get(api)
      .then((res) => {
        setData(res.data)
        console.log(res.data);
      })

  }, [])
    const adddata=()=> {
      axios.post(api,details)
      .then((res)=>{
        setData([...data , res.data])
      })
      alert("posted")
    }

  return (
    <div>
      <h1>AXIOSFullTask</h1>

      <table className='table text-bg-dark table-dark table table-hover'>
        <th>Name</th>
        <th>UserName</th>
        <tbody>
          {
            data.map((i) => (
              <tr>
                <td>{i.Name}</td>
                <td>{i.Password}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='row'>
        <input type="text" name="name" value={name} className='form-control col'
        onChange={(e) => setName(e.target.value)} id="" />
        <input type="text" name="password" value={password} className='form-control col'
        onChange={(e) => setPassword(e.target.value)} id="" />
        <button className='col-auto btn btn-info' onClick={adddata}>ADD</button>
      </div>
    </div>
  )
}
