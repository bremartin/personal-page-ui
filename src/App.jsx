import React, { Component } from 'react';
import logo from './logo.svg';
import background from './stink-pickle-5003-unsplash.jpg'
import './App.css';
import ParagraphFont, {Links, Pronunciation}  from './inject-global-styles'
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <style>
            {<img src={ background } className="Music-background" alt='background'/>}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
      
          </style>
          <div>
            <Links>
              About Me
            </Links>
            <Links>
              Contact
            </Links>
            <Links>
              Work
            </Links>
          </div>
          
          <div>
            <ParagraphFont>
              Breoshshala
            </ParagraphFont>            
            <Pronunciation>
                (Bree-osh-shuh-luh)
            </Pronunciation>
          </div>
        </header>
      </div>
    );
  }
}



export default App;
