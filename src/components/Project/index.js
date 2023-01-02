import React, { Component } from 'react';
export default class Project extends Component {
    projectData = [{
        name: "Accesibility",
        description: "Added semantics and accesability to the app",
        link: 'https://awgore99.github.io/ChallengeOne/'
    },
    {
        name: "Password Generator",
        description: "Generates a random password",
        link: 'https://awgore99.github.io/ChallengeThree/'
    },
    {
        name: "Javascript Quiz",
        description: "Timed javascript quiz to test your knowledge!",
        link: 'https://awgore99.github.io/ChallengeFour/'
    },
    {
        name: "Workday Scheduler",
        description: "Easy weeky planner to track tasks!",
        link: 'https://awgore99.github.io/ChallengeFive/'
    },
    {
        name: "Weather Forecaster",
        description: "5 day weather forecaster",
        link: 'https://awgore99.github.io/ChallengeSix/'
    },
    {
        name: "ReadMe Generator",
        description: "Generates a ReadME for an application",
        link: 'https://github.com/awgore99/Challenge-Nine'
    },
    {
        name: "Employee Manager",
        description: "Allows a user to add employees to a database to keep track of them",
        link: 'https://github.com/awgore99/Challenge-Ten'
    },
    {
        name: "Note Taker",
        description: "Saves and tracks notes from a user",
        link: ''
    },
    {
        name: "Employee Database",
        description: "Saves and tracks employees in a database",
        link: 'https://github.com/awgore99/Challenge-Twelve'
    },
    {
        name: "E-Commerce Website",
        description: "Application to keep track of finance",
        link: 'https://github.com/awgore99/Challenge-Thirteen'
    },
    {
        name: "Social Media Website",
        description: "Working local social media website",
        link: 'https://github.com/awgore99/Challenge-Eighteen'
    },
    {
        name: "Text Editor-PWA",
        description: "Text editor but using PWA concepts",
        link: ''
    },
    

    ]
  render() {
    return (
      <section id="projects">
      <div class="row">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">
          {
            projectData.map((item)=>{
              return(
                <div>
                  <div>
                    <a href={item.link}>
        
                      <div>
                        <div>
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
  </section>
        );
  }
}