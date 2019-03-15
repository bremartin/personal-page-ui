import React, { Component } from 'react';
import background from '../images/stink-pickle-5003-unsplash.jpg';
import ParagraphFont, {Links, Pronunciation}  from '../inject-global-styles'

export default class Home extends Component
{
    state = {}

    render(){
       return(
        <div className="Home">
            <header className="App-header">
                <style>
                    {<img src={ background } className="Music-background" alt='background'/>}
                </style>

                <div>
                    <Links>
                     <a href="aboutme"> About Me </a>
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
       )
    }
};