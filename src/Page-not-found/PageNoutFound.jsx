import React from 'react'
import { Link } from 'react-router-dom'; 

function PageNoutFound() {
  return (
    <div className="error-page">
      <h1>404 Error Page #2</h1>
   
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/Main"
          className="more-link"
        >
           Home
      
       
        </Link>
      </div>
    </div>
  )
}

export default PageNoutFound