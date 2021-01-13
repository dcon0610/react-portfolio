import React, { Component } from "react";
import "./Navbar.css";
import EachProject from "../EachProject";

class Projects extends React.Component {
  constructor() {
  super()
  this.state = {
    firstProject: {
      imageSource: "./assets/original.png",
      title: 'Employee Directory',
      content: `This react app selects a table of random  users from "https://randomuser.me/api/?results=50&nat=au", where it returns 50 people from Australian cities. 
      When the user loads the page, this table renders. The user is able to sort the table alphabetically by first name, last name or city. The table is also able to be filtered
      by first name. When the first name is typed in the box, only the matching names will appear. When the box is cleared by back spacing, all the users reappear and the table resets.`,
      content1 :'',
      herokuLink: 'https://dcon0610.github.io/employee-directory/',
      text: ' (hosted on Github Pages)',
      gitHubLink: 'https://github.com/dcon0610/employee-directory',
      readMeLink: 'https://github.com/dcon0610/employee-directory/blob/main/README.md'

    },
      secondProject: {
        imageSource: "./assets/CoffeeRater.png",
        title: 'Coffee Rater',
        content: `This fullstack MVC Node web application lists coffees, sorted from highest reviews to lowest reviews. New coffees can be added, and reviews can be added for each coffee. 
        The front end was built using express handlebars and Jquery, and the back end was build using Mysql and sequelize, and Node/express. The application was deployed on Heroku. 
        It also makes use of the Cloudinary service for image hosting to allow for shorter loading times. `,
        content1 :'',
        herokuLink: 'https://salty-forest-45628.herokuapp.com/',
        text: ' (hosted on Heroku)',
        gitHubLink: 'https://github.com/dcon0610/Project2',
        readMeLink: 'https://github.com/dcon0610/Project2/blob/main/README.md'

      },
      thirdProject: {
        imageSource: './assets/Burger.png',
        title: 'Burger Logger',
        content: `Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of 
        the page -- waiting to be devoured. Each burger in the waiting area also has a 'Devour it!' button. When the user clicks it, the burger will move to the right side of the page. The app will 
        store every burger in a database, whether devoured or not. `,
        content1: `Technologies used include Node.js, express, express-handlebars and mysql (deployed using JawsDB). `,
        herokuLink: 'https://tranquil-harbor-61441.herokuapp.com/',
        text: ' (hosted on Heroku)',
        gitHubLink: 'https://github.com/dcon0610/Eat-Da-Burger',
        readMeLink: 'https://github.com/dcon0610/Eat-Da-Burger/blob/main/ReadMe.md'

      },
      fourthProject: {
        imageSource: './assets/NoteTaker.png',
        title: 'Note Taker',
        content: `This application can write, save, and delete notes. It uses an Node express backend and saves and retrieves note data from a JSON file. `,
        content1: ' Technologies used include Node.js and express.',
        herokuLink: ' https://arcane-plateau-67419.herokuapp.com/',
        text: ' (hosted on Heroku)',
        gitHubLink: 'https://github.com/dcon0610/note_taker',
        readMeLink: ''

      },
      fifthProject: {
        imageSource: "./assets/Backonline.png",
        title: 'Budget Tracker',
        content: `This app adds functionality to our existing Budget Tracker application to allow for use offline. The user can add expenses and deposits to 
        their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. To accomplish this, 
        this app uses a service worker and the indexed.db in the browser.`,
        content1 :'',
        herokuLink: 'https://cryptic-ocean-45949.herokuapp.com/',
        text: ' (hosted on Heroku)',
        gitHubLink: 'https://github.com/dcon0610/budget-tracker',
        readMeLink: 'https://github.com/dcon0610/budget-tracker/blob/main/README.md'
  
      },
      sixthProject: {
        imageSource: './assets/quiz.png',
        title: 'Coding Quiz',
        content: 'This javascript program goes through a timed quiz and gives a score at the end based on the time and the number of incorrect answers. The javascript creates the DOM for each question and the score.',
        herokuLink: 'https://dcon0610.github.io/coding_quiz/',
        text: '',
        gitHubLink: 'https://github.com/dcon0610/coding_quiz',
        readMeLink: 'https://github.com/dcon0610/coding_quiz/blob/master/README.md'

      },
      };
    }
componentDidMount () {

  console.log("state", this.state)
}

  render () {    
  return (
  <div id="projects" style={{paddingTop: '25vh'}}>
  <div className="columns is-mobile heightLarger">
  <div className="column  is-1">
  </div>
  <div className="column  has-text-white">
    <p className="has-text-white is-size-1 is-bold ">Projects
    </p>
    <br />
    <section className="columns padding-right">
          <EachProject  props = {this.state.firstProject}/>
          <EachProject  props = {this.state.secondProject}/>
          <EachProject  props = {this.state.thirdProject}/>

          <div className="column is-2">
      </div>
    </section>
    <section className="columns padding-right">
    <EachProject  props = {this.state.fourthProject}/>
    <EachProject  props = {this.state.fifthProject}/>
    <EachProject  props = {this.state.sixthProject}/>

     
      <div className="column is-2">
      </div>
    </section>
    <br />
    <br />
  </div>
</div>
</div>
)}}

export default Projects;





