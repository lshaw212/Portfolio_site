import React, { Component } from 'react';
import ProjectList from './ProjectList';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Hello world
        </div>
        <ProjectList/>
        <Contact/>
      </div>
    );
  }
}

export default App;
