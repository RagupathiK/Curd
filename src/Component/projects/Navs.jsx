import React from 'react'
import '../Styles/Portfolio.css'
import img1 from '../Images/ragu.jpg' 
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import google from '../Images/social.png'
import Portfol from './Portfol'

export default function Navs() {
  return (
    <div id="sidemenu" className="bg-dark p-4 pt-5">
      <nav className="navbar navbar-expand-lg">
           <div>
       <img className="rounded-pill" src={img1} width="180px" height="180px" />
          <h3 className="navbar-brand text-center"><a href="#">K.Ragupathi</a></h3>
         </div>
       </nav>
       <div className="" style={{lineHeight:3 }} >
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About Me</a></li>
           <li><a href="#">Resume</a></li>
           <li><a href="#">Contact</a></li>
         </ul>
         <ul className="d-flex" style={{listStyleType: 'none'}}>
           <li>
             <a href="https://www.facebook.com/">
               <img className="socialmedia" data-bs-toggle="tooltip" data-bs-tittle="facebook" src={facebook} /></a>
           </li>&nbsp;
           <li>
             <a href="https://x.com/">
               <img className="socialmedia" data-bs-toggle="tooltip" data-bs-tittle="twitter" src={twitter} /></a>
           </li>&nbsp;
           <li>
             <a href="https://www.google.com/">
               <img className="socialmedia" data-bs-toggle="tooltip" data-bs-tittle="google" src={google} /></a>
           </li>
         </ul>
       </div>
       <Portfol/>
     </div>
  )
}
