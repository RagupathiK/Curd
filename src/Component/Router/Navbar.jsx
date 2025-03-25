import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='container-fluid bg-info m-0 d-flex'>
        
        <div style={{listStyleType:'none', gap:'500px', justifyItems:'center'}} className='d-flex'>
        <li classname="nav-item dropdown" >
        <a className='nav-link dropdown-toggle' href="#" data-bs-toggle="dropdown">Bike</a>
        <ul className='dropdown-menu'>
            {/* <li><Link className='dropdown-item' to={'/'}>navbar</Link></li> */}
            <li><Link className='dropdown-item' to={'/Bike1'}>Bike 1</Link></li>
            <li><Link className='dropdown-item' to={'/Bike2'}>Bike 2</Link></li>
            <li><Link className='dropdown-item' to={'/Bike3'}>Bike 3</Link></li>
        </ul>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#">Car</a>
            <ul className='dropdown-menu'>
            <li><Link className='dropdown-item' to={'/Car'}>Car</Link></li>
            </ul>
        </li>
        </div>
       
    </div>
  )
}
