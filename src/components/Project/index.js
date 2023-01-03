import React, { Component } from 'react';
let projectData = [
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
    link: 'https://fathomless-ridge-87847.herokuapp.com/'
},


]
export default class Project extends Component {
  render() {
    return (
      <section id="projects">
      <div class="row">
          <h1>My Work: .</h1>
          <div class="card text-center">
          {
            projectData.map((item)=>{
              return(
                <div>
                  <div>
                    <h4><a href={item.link}>{item.name}</a></h4>
                          <h5>{item.description}</h5>
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