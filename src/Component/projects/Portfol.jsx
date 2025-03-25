import React from 'react'
import phone from '../Images/phone.png'
import Email from '../Images/email.png'
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import google from '../Images/social.png'

export default function Portfol() {
  return (
    <div id="welcome">
    <div className="bg-body-secondary justify-content-center align-content-center" style={{height: 450}}>
      <div className="col-12 text-center">
        <h3>Welcome</h3>
        <h1>I am a Ragupathi</h1>
      </div>
    </div>
    <div className="intro">
      <div className="text-center p-5 ">
        <h1 className="large">ABOUT ME</h1>
        <h2>Know Me More</h2>
      </div>
      <div className="row">
        <div className="col-xl-8">
          <h2>I'm Simone Olivia, a Web Developer</h2>
          <p>
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p>
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="detail col-xl-4 me-0">
          <p><b>Name:</b> k.Ragupathi</p>
          <hr />
          <p><b>Email:</b> ragupathik56@gmail.com</p>
          <hr />
          <p><b>Age:</b> 24</p>
          <hr />
          <p><b>From:</b> Dharumapuri, Tamil Nadu</p>
        </div>
      </div>
      <div className="container px-lg-5" id="Resume">
        <div className="position-relative d-flex text-center mb-5">
          <h1 className="text-light opacity-4 w-100 mb-0">SUMMARY</h1>
          <h2 className=" text-dark position-absolute w-100 align-self-center mb-0">Resume</h2>
        </div>
        <div className="row gx-5">
          <div className="col-md-6">
            <h3 className="text-6 mb-4">My education</h3>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge bg-primary">2017 - 2020</p>
              <h3>Bachelor Degree</h3>
              <p className="text-danger">Periyar University, Salem</p>
              <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
            </div>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge bg-primary">2020 - 2022</p>
              <h3>Master Degree</h3>
              <p className="text-danger">Anna University, Coimbatore</p>
              <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
            </div>
          </div>
        </div>
        <h3 className="text-6 mt-4 mb-4">My Skills</h3>
        <div className="row gx-5">
          <div className="col-md-6">
            <p className="text-dark mb-2">HTML</p>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-primary" style={{width: '100%'}}>100%</div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-dark mb-2 mt-0">CSS</p>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-primary" style={{width: '95%'}}>95%</div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-dark mb-2 mt-2">Bootstrap</p>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-primary" style={{width: '90%'}}>90%</div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-dark mb-2 mt-2">Java Script</p>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-primary" style={{width: '10%'}}>10%</div>
            </div>
          </div>  
          <div className="col-md-6">
            <p className="text-dark mb-2 mt-2">React</p>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-primary" style={{width: '5%'}}>5%</div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-dark mb-2 mt-2">Angular Js</p>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-primary" style={{width: '5%'}}>5%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5 " id="Contact">
        <div className="position-relative d-flex text-center mb-5">
          <h1 className="text-light opacity-4 w-100 mb-0">CONTACT</h1>
          <h2 className=" text-dark position-absolute w-100 align-self-center mb-0">Get in Touch</h2>
        </div>
        <div className="row gy-5">
          <div className="col-md-4 order-1 order-md-0 text-center text-md-start">
            <h3>Address</h3>
            <p className="text-3 ">D.no:2/479-A,
              <br />
              Agharagram (p.o) & (Vill),
              <br />
              Harur (Taluk),Dharumapuri 
              <br />
              636903.
            </p>
            <div>
              <p className="d-flex" style={{wordSpacing: 1}}><img className="socialmedia" src={phone} /><span>(+91) 8940744523</span></p>
              <p className="d-flex"><img className="socialmedia" src={Email} /><span>ragupathik56@gmail.com</span></p>
            </div>
            <div>
              <h5>FOLLOW ME</h5>
              <ul className="d-flex" style={{listStyleType: 'none'}}>
                <li>
                  <a href="https://www.facebook.com/">
                    <img className="socialmedia" data-bs-toggle="tooltip" data-bs-tittle="facebook" src={facebook}/></a>
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
          </div>
          <div className="col-xl-8">
            <h3>Send us a note</h3>
            <br />
            <input type="text" className="form-control w-50" placeholder="Name" />
            <input type="text" className="form-control w-50" placeholder="Email" />
            <div style={{marginTop: 10}}>
              <textarea name="text" style={{width: 550}} id placeholder="Tell us more about your needs....." defaultValue={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
