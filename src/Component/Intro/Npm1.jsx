import React from 'react'
import Npm2 from './Npm2'
import '../Styles/Npm1.css'

export default function Npm1() {
  return (
    <div className='container-fluid'>
      <div className=' container-fluid d-flex justify-content-between bg-black align-items-center'>
        <div>
          <a href="https://www.npmjs.com/"><h1 className='logo'>NPM</h1></a>

        </div>
        <div>
          <input type="search" placeholder='Search Packages' /><button id='search'>search</button>

        </div>
        <div>
          <button id='signup'> Sign Up</button>
          <button id='signin'> Sign In</button>

        </div>
      </div>
      <div style={{backgroundColor:'yellow'}} className='p-10'>
        <div>
          <h1>Build amazing things</h1>
        </div>
        <div>
          <p>We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</p>
        </div>
        <div>
          <h3>Take your JavaScript development up a notch</h3>
        </div>
        <div>
        <p>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</p>
        </div>
        <br /><br />
        <div className='justify-content-between'>
        <button>Sign up for free</button>
        <button>Learn about Pro</button>
        </div>
      </div>
      <Npm2 />
    </div>
  )
}
