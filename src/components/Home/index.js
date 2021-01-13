import React from "react";
import "./Navbar.css";

function Home () {
  return  <section className="section">
  <div className="columns height is-centered">
    <div className="column is-1 ">
    </div>
    <div className="column has-text-white is-10"> 
      <div className=" padding is-size-1">Hi, I'm David.
        <p>I am a fullstack web developer located in Adelaide, Australia.
        </p> 
        <p> 
          <a style={{"color":"red"}} href="./assets/resume.pdf" target="_blank" rel="noreferrer">View Resume
          </a> 
        </p> 
      </div> 
    </div>
    <div className="column "> 
      <a href="https://www.github.com/dcon0610" target="_blank" rel="noreferrer" className="front position padding1 has-text-white">
        <i className="fab fa-github fa-4x">
        </i>
      </a>
      <a href="https://www.linkedin.com/in/david-connell88/" target="_blank" rel="noreferrer" className="second position padding2 has-text-white">
        <i className="fab fa-linkedin fa-4x">
        </i>
      </a>
    </div>   
  </div>
</section>
}

export default Home;





