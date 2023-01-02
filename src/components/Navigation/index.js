import React, { Component } from 'react';
export default class Nav extends Component {
  render() {
    return (
      <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li><a href="#home">Home</a></li>
               <li><a href="#project">Projects</a></li>
            </ul>
         </nav>
    );
  }
}