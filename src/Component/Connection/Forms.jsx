import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Forms() {
    const [title, setTitle] = useState('')
    const [para, setPara] = useState('')
    const [img, setImg] = useState(null)
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(null)

    function addData(event) {
        event.preventDefault();
        const formData = new FormData()
        formData.append("title", title)
        formData.append("para", para)
        formData.append("img", img)

        axios.post('http://localhost:2600/file/post', formData)
            .then((res) => {
                setData([...data, res.data])
            })
            .catch((err) => {
                console.log("Error: " + err);
            })
    }

    function fetchData() {
        axios.get('http://localhost:2600/file/get')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log("Error: " + err);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    function deletedata(id) {
        axios.delete(`http://localhost:2600/file/delete/${id}`)
            .then((res) => {
                setData(data.filter((i) => i._id !== id))
                alert("Data Deleted")
            })
            .catch((err) => {
                console.log("Error: " + err);
            })
    }

    const editdata = (id) => {
        const values = data.find((i) => i._id === id)
        setTitle(values.Title)
        setPara(values.Para)
        setEdit(id)
    }

    const updatedata = () => {
        const formData = new FormData()
        formData.append("title", title)
        formData.append("para", para)
        formData.append("img", img)

        axios.put(`http://localhost:2600/file/put/${edit}`, formData)
            .then((res) => {
                setData(data.map((i) => i._id === edit ? res.data : i))
                alert("Updated")
                setEdit(null)
                setTitle('')
                setPara('')
                setImg(null)
            })
            window.location.reload()
            .catch((err) => {
                console.log("Error: " + err);
            })
    }

    return (
        <div>
            <h1>BackEnd Connection</h1>

            <form onSubmit={addData}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br /><br />
                <label htmlFor="para">Para</label>
                <input
                    id="para"
                    type="text"
                    value={para}
                    onChange={(e) => setPara(e.target.value)}
                />
                <br /><br />
                <label htmlFor="img">Img</label>
                <input
                    id="img"
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                />
                <br /><br />
                <button className='btn btn-success' type="submit">{edit ? "UPDATE" : "ADD DATA"}</button>
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Para</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((i, index) => (
                        <tr key={index}>
                            <td>{i.Title}</td>
                            <td>{i.Para}</td>
                            <td>
                                <img
                                    src={`http://localhost:2600/file/images/${i.File.FileName}`}
                                    alt={i.Title}
                                    width="100"
                                />
                            </td>
                            <td><button className='btn btn-danger' onClick={() => deletedata(i._id)}>Delete</button></td>
                            <td><button className='btn btn-primary' data-bs-toggle='modal' data-bs-target="#examplemodal" onClick={() => editdata(i._id)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for editing */}
            <div className='modal' id='examplemodal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" value={title}
                             onChange={(e) => setTitle(e.target.value)}/>   
                        <br /><br />
                        <label htmlFor="para">Para</label>
                        <input id="para" type="text" value={para}
                             onChange={(e) => setPara(e.target.value)}/>
                        <br /><br />
                        <label htmlFor="img">Img</label>
                        <input id="img" type="file"
                             onChange={(e) => setImg(e.target.files[0])}/>
                        <br /><br />
                        <div className='modal-footer'>
                            <button type='button' data-bs-dismiss="modal">Close</button>
                            <button className='btn btn-success' onClick={updatedata} type="button">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
