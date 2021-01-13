import React from "react";
import "./Navbar.css";

function EachProject (props) {

  
    console.log("props in each project", props.props.imageSource)


  
  return(
    <div className="column padding-right">
        <div className="card full">
          <div className="card-image">
            <figure className="image is-3by3">
              <img src={props.props.imageSource} alt={{}} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
              </div>
              
                <span className="title is-4">{props.props.title}
                </span>
              
            </div>
            <div className="content ">
              
                {props.props.content}
             
             
                {props.props.content1}
             
              
              <p> 
                <a href={props.props.herokuLink} target="_blank" rel="noreferrer">link to site
                </a>{props.props.text}
              </p>
              <p> 
                <a href={props.props.gitHubLink} target="_blank" rel="noreferrer">link to github repository
                </a>
              </p>
              <p> 
                <a href={props.props.readMeLink} target="_blank" rel="noreferrer">link to ReadMe on github
                </a>
              </p>
            </div>
          </div>
        </div>
        
      </div>


  )
}

export default EachProject;




