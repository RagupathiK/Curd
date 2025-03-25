import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AXIOSFull() {

    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [editid, seteditId] = useState(null)


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

    const TwoWork = () => {

        if (editid) {
            axios.put(`${api}/${editid}`, details)
                .then((res) => {
                    setData(data.map((i) => i.id === editid ? res.data : i))
                })
            alert("Updated")
            setName("")
            setPassword("")
            seteditId(null)

        }
        else {


            axios.post(api, details)
                .then((res) => {
                    setData([...data, res.data])
                })
            alert("posted")
            setName("")
            setPassword("")
        }
    }
    const deldata = (id) => {
        axios.delete(`${api}/${id}`, details)
            .then((res) => {
                setData(data.filter((i) => i.id !== id))

            })
        alert("Data Deleted")


    }
    const editdata = (id) => {
        const passvalue = data.find((i) => i.id === id)
        setName(passvalue.Name)
        setPassword(passvalue.Password)
        seteditId(id)

    }

    return (
        <div>
            <h1>AXIOS CRUD</h1>

            <table className='table text-bg-dark table-dark table table-hover'>
                <th>Name</th>
                <th>USERNAME</th>
y
                <tbody>
                    {
                        data.map((i) => (
                            <tr>
                                <td>{i.Name}</td>
                                <td>{i.Password}</td>
                                <td><button className='btn btn-danger' onClick={() => deldata(i.id)}>Delete</button></td>
                                <td><button className='btn btn-primary' onClick={() => editdata(i.id)}>EDIT</button></td>
                            </tr>

                        ))
                    }
                </tbody>

            </table>
            <div className='row'>
                <input type="text" className='form-control col' name="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="" />
                <input type="text" className='form-control col' name="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} id="" />
                <button className='col-auto btn btn-success' onClick={TwoWork}>{editid ? "UPDATE" : "ADD"}</button>
            </div>

        </div>
    )
}
