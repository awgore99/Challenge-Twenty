import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      
      <header id="home">
         <Nav />

         <div>
            <div>
               <h1>Austin Gore</h1>
            </div>
         </div>

      </header>
      </React.Fragment>
    );
  }
}