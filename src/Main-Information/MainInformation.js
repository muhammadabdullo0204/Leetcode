import React from 'react'
import ai from '../images/ai_13191353.png';
import briefcase from '../images/Briefcase.png'
import pngg from '../images/pngegg.png'
import { Link } from 'react-router-dom';
function MainInformation() {

  return (
    
    <div className='Main'>

      <div className='Main-container'>

        <div className="box">

          <div className='box-img'>
            <img width="440px" height="340px" src="https://www.careerhackers.io/employers/images/consultant-dashboard.svg" alt="statistics" />

          </div>

          <div className='box-text'>
            <h1>A New Way to learn</h1>
            <p>Leetcode is ghe best patform to help you enhance skills, expend your knowledge and prepare for technical interviews</p>
            <button className="Account">
             
              <Link to="/Login " style={{ color: '#fff', textDecoration: 'none' }}>Create Account
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24">
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </button>
          </div>

        </div>


        <div className='box-2' id='Explore'>
          <div className='box-text-2'>
            <div className='start-box'>
              <h1>Start Exploring</h1>
              <img width="65px" height="67px" src="https://user-images.githubusercontent.com/107515077/210149454-ede5495c-601b-42b1-90b3-6ec4c105a15c.png" alt="university" />
            </div>

            <p>Explore is a well-organized tool that helps you get the most out of Code by providing structure to guide your progress towards the next step in your programming carrer.</p>
            <div className='get-started'>
              <span>Get Started </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>

            </div>
          </div>


          <div className='box-img-2'>
            <img width="350px" height="300px" src={ai} alt="img" />

          </div>

        </div>

        <div className='box-3'>

          <div className='box-3-mini'>
            <div className='box-3-mini-img'>
              <img  width="67" height="65px" src="https://iiit.pl/wp-content/uploads/Hexagon-Grupa.png" alt="img" />
              <img width="67" height="65px" src="https://files.aptuitivcdn.com/l4gOa2eDBE-756/images/trails/badge/_tour_de_maine_300-image_large.png" alt="img" />
              <img width="67" height="65px" src="https://cdn.prod.website-files.com/64b13f5027d59bf7ca548122/64b58ede807fbd882941e419_Group%20511(6).png" alt="img" />

            </div>
            <div className='box-3-mini-text'>
              <h1>Questions, Communitys & Contests</h1>
              <p>Over 3550 questions for you to practice . Come and join one of the largest tech commnities with hundresds of thousands of active users and practipate in our contests to challenge yourself and earn rewards.</p>
              <div className='view-question'>
                <span>View Questions  </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24">
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div className='box-3-mini' id='Product'>
            <div className='box-3-mini-img'>
              <img width="67" height="65px" src={briefcase} alt="img" />
              <img  width="67" height="65px"src={pngg} alt="img" />
            </div>
            <div className='box-3-mini-text-2'>
              <h1>Companies & Candidates</h1>
              <p>Not only does LeetCode prepare Candidates for technical inteviews , we also help companies indentify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services in businesses.</p>
              <div className='Business-oppotunities'>
                <span>Business Opportunities  </span>

                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24">
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default MainInformation