import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import AboutMe from './components/About Me';
import Resume from './components/About Me';
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <AboutMe />
      <Project />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
