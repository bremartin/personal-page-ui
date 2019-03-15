import React, { Component } from 'react';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={ true } path='/' render={()=> 
            (
              <div className="App">
                <Home />
              </div>
            )}/>

            <Route exact={ true } path='/aboutme' render={ ()=>
            (
              <div className="App">
                <AboutMe />
              </div>
            )}/>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
