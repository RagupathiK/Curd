import React from 'react'
import Task2 from './Task2'
import img1 from '../Images/download (1).jpeg'

export default function Task1() {
  return (
    <div>
        <h1>Task1</h1>
        <img src={img1} alt="" />
        <Task2/>
    </div>
  )
}
