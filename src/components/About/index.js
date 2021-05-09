import React from "react";
import "./Navbar.css";

function About () {
  return  <div id="about" style={{paddingTop: '25vh'}}>
    
  <div  className="columns is-mobile height ">
  <div className="column  is-1">
  </div>
  <div className="column  has-text-white">
    <p className="has-text-white is-size-1 is-bold ">About
    </p>
    <section className="is-size-4">
      <p> I am a software engineer working at Lumient, a small software engineering company in Adelaide. 
        My first project was a python/Vue.js fullstack project dealing with sorting and graphing data in python to be displayed in a Vue front end.
      </p>  
      <br />
      <p> Currently, I am working on a C# .NET back end, creating API's for display of job management information on a front end. I am using the Entity framework ORM and LINQ to query 
      the database (Microsoft SQL server), and ASP.NET to set up the API's. 
      </p> 
        
      <p>The course has covered HTML/CSS, javascript, API's, node.js/express/handlebars, mysql, Mongodb, and React. These skills along with my work have given me a good foundation in writing fullstack web applications
      </p>
      <br />
      <p>I will seek to improve my programming skills by writing websites for personal interest, one which will collect large amounts of weather data, and using it to analyse temperature and rainfall trends across australia, and their relationship. This 
        information will be displayed in user friendly form. I will also be building a web interface which will display temperature and humidity in my greenhouses as home so I can access them at any place, and I can also control the two by turning on fans and sprinklers remotely through the same website.
      </p>
      <br />
      <p>In my spare time I enjoy spending time on my property. 
      </p>
    </section>
  </div>
  <div className="column  is-2">
  </div>
</div>
</div>
}

export default About;





