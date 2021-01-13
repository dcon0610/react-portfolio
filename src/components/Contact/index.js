import React from "react";
import "./Navbar.css";

function Contact () {
  return   (
  <div id="Contact" style={{paddingTop: '30vh'}}>
  <div className="columns is-mobile height">
  <div className="column is-1">
  </div>
  <div className="column  has-text-white">
    <p className="has-text-white is-size-1 is-bold">Contact
    </p>
    <section className="columns is-mobile">
      <div className="column is-2 is-size-4"> Name: 
      </div>
      <div className="column is-size-4"> David Connell
      </div>
    </section>
    <section className="columns is-mobile">
      <div className="column is-2 is-size-4"> Email: 
      </div>
      <div className="column is-size-4"> 
        <a style={{"color":"red"}} href="mailto:davecon88@gmail.com">davecon88@gmail.com
        </a>
      </div>
    </section>
    <section className="columns is-mobile">
      <div className="column is-2 is-size-4"> Phone: 
      </div>
      <div className="column is-size-4"> 0418 660 895
      </div>
    </section>
  </div>
</div>
</div>
  )}

export default Contact;





