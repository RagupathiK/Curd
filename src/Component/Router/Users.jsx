import React from 'react'
import { useParams } from 'react-router-dom'

export default function Users() {
const {id} = useParams()

  return (
    <div>
        <h1>UsersPage</h1>
        <h1>Your User Id is <b>{id}</b> </h1>
    </div>
  )
}
