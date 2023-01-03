import React, { Component } from 'react';
export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar">
            <ul id="nav" className="nav">
               <li><a href="#home">Home</a></li>
               <li><a href="#project">Projects</a></li>
               <li><a href="#aboutme">About Me</a></li>
            </ul>
         </nav>
    );
  }
}