import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbarpage() {
  return (
    <div>
        <h1>Navbarpage</h1>
        <Link to={'/foot'}>Footer</Link>
    </div>
  )
}
