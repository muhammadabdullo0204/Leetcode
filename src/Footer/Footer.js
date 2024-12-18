import React from 'react'
import facebook from '../images/facebook-5.svg'
import apple  from '../images/apple-11.svg'
import leap from '../images/leap-motion.svg'
import jet from '../images/jet-4.svg'
import intel from '../images/intel.svg'
import amazon from '../images/logo-amazon.svg'
import bankamerica from '../images/bank-of-america.svg'
import pinterest from '../images/pinterest-2-1.svg'
import cisco from '../images/cisco-2.svg'
import stripe from '../images/stripe-3.svg'
import yandex from '../images/yandex-2.svg'
import uber from '../images/uber-2.svg'
import logo from '../images/sf.png'


function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-container'>
        <div className='Footer-box'>
          <div className='footer-logo'>
            <img width="67px" height="65px" src="https://d3373sevsv1jc.cloudfront.net/uploads/communities_production/community/logo/172/097c2d38-74a7-4166-ba40-9efd1f6a1392.png" alt="logo" />
            <h1>   Made With ❤️ in SF</h1>
         
          </div>

          <p>At LeetCode, our mission is to help you imporve yourself and land your dream job . We have a sizable repository of interview resources for many companies. In the past few years , our users have landed jobs at top companies around the world. </p>


        </div>
        <div className='Footer-box-2'>
          <img width="132px" height="60px" src={facebook} alt="Facebook" />
          <img  width="83px" height="40px"  src={leap} alt="leap" />
          <img  width="100px" height="40px"  src={apple} alt="apple" />
          <img  width="72px" height="21px"  src={uber} alt="uber" />
          <img  width="100px" height="40px"  src={yandex} alt="yandex" />
          <img  width="61px" height="25px"  src={jet} alt="jet" />
          <img  width="60px" height="40px"  src={intel} alt="intel" />
          <img  width="91px" height="28px"  src={amazon} alt="amazon" />
          <img  width="197px" height="25px"  src={bankamerica} alt="bankamerica" />
          <img  width="99px" height="25px"  src={pinterest} alt="prenterest" />
          <img  width="70px" height="40px"  src={cisco} alt="cisco" />
          <img  width="67px" height="28px"  src={stripe} alt="stripe" />
   
        </div>


        <div className='join-team'>
          <p>If your are passionate about tackling some of the most interesting problems around, we would love to hear from you.</p>

          <div className='join-team-button'>
            <span>Join Our Team</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24">
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </div>

        </div>

      </div>

      <div className='copyright'>
        <p> Copyright © 2024 Muhammadabdullo</p>

        <div className='help-center'>
          <a href="#Navbar"> <p>Help Center</p></a>
          <a href="#Navbar">         <p>Jobs</p></a>
          <a href="#Navbar">   <p>Bug Bounty </p></a>
          <a href="#Navbar"> <p>Students</p></a>
          <a href="#Navbar">      <p>Terms</p></a>

          <a href="#Navbar">      <p>Privacy Policy</p></a>

          <a href="#Navbar">  
            <span>
            <img width="15" height="15" src="https://img.icons8.com/color/48/usa-circular.png" alt="usa-circular"/>
            Unites States
            </span>
          
        
          </a>




        </div>

      </div>

    </div>
  )
}

export default Footer