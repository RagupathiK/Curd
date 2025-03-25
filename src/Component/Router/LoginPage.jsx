import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
//    const navi = useNavigate()

    function submitdata(){


        // window.location.href = '/LibraryNew.jsx'

        // navi('/')
    }
  return (
    <div>
        <h1>LoginPage</h1>
       <Link to={'/'}>  <button onClick={submitdata}>Submit</button> </Link>
    </div>
  )
}
