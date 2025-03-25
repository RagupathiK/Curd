import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Card() {
  const [data, setdata] = useState([])
  const [image, setimage] = useState("")
  const [name, setName] = useState("")
  const [detail, setdetail] = useState("")
  const [update, setupdate] = useState(null)


  const api = "https://677d06a94496848554c8b0e0.mockapi.io/mydatas"

  const details = {
    Image: image,
    Name: name,
    Detail: detail
  }

  useEffect(() => {
    axios.get(api)
      .then((res) => {
        setdata(res.data)
        console.log(res.data);
      })
  }, [])

  const TwoWork = () => {

    if (update) {
      axios.put(`${api}/${update}`, details)
        .then((res) => {
          setdata(data.map((i) => i.id === update ? res.data : i))
        })
    }
    else {

      axios.post(api, details)
        .then((res) => {
          setdata([...data, res.data])
        })
      alert("data added")
      setimage("")
      setName("")
      setdetail("")
    }
  }

  const deldata = (id) => {
    axios.delete(`${api}/${id}`, details)
      .then((res) => {
        setdata(data.filter((i) => i.id !== id))
      })
    alert("data deleted")
  }

  const updatedata = (id) => {
    const passvalue = data.find((i) => i.id === id)
    setimage(passvalue.Image)
    setName(passvalue.Name)
    setdetail(passvalue.detail)
    setupdate(id)
  }

  return (
    <div>
      <h1>Card model</h1>
      <div className='row'>
        <input type="url" className='form-control col' name="image" value={image}
          onChange={(e) => setimage(e.target.value)} />
        <input type="text" className='form-control col' name="name" value={name}
          onChange={(e) => setName(e.target.value)} />
        <input type="text" className='form-control col' name="detail" value={detail}
          onChange={(e) => setdetail(e.target.value)} />
        <button className='btn btn-warning' onClick={TwoWork}>{update ? "UPDATE" : "SUBMIT"}</button>
      </div>



      <div className='row'>
        {
          data.map((i) => (
            <div className='col'>

              <div className='card' style={{width:'18rem'}}>

                <img src={i.Image} className='card-img-top' height={"200px"} alt="" />
                <div className="card-body">
                  <h4 className='card-tittle'>{i.Name}</h4>
                  <p className='card-text'>{i.Detail}</p>
                  <hr /><hr />
                  <button onClick={() => updatedata(i.id)}>Update</button>
                  <button onClick={() => deldata(i.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
