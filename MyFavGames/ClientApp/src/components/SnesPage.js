import React, { Component } from 'react';
/*import { Helmet } from "react-helmet";
*//*import './SNESpage.css';*/
import { Link } from 'react-router-dom';

const css = require('./SNESpage.css').toString();

export class SnesPage extends Component {
/*    static displayName = SnesPage.name;
*/
    render() {
        return (
            <div>
                
                
                <h1> The SNES was great! </h1>
                <h2> Here are the main games for this console </h2>
                <ol>
                    <img src={require('../images/MarioWorld.png')} alt="MarioWorld pic" />
                    <li><a href = "https://en.wikipedia.org/wiki/Super_Mario_World"> Super Mario World </a></li>

                    <img src={require('../images/ZeldaSnes.jpg')} alt="ZeldaSnes pic" />
                    <li><a href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past">The Legend of Zelda: A Link to the Past </a> </li>

                    <img src={require('../images/superMetroid.jpg')} alt="SuperMetroid pic" />
                    <li><a href="https://en.wikipedia.org/wiki/Super_Metroid"> Super Metroid </a></li>

                    <img src={require('../images/DKC.jpg')} alt="DKC pic" />
                    <li><a href="https://en.wikipedia.org/wiki/Donkey_Kong_Country"> Donkey Kong Country </a></li>

                    <img src={require('../images/Superpunchoutbox.jpg')} alt="SPO pic" />
                    <li><a href="https://en.wikipedia.org/wiki/Super_Punch-Out!!">  Super PunchOut </a></li>

                    <img src={require('../images/marioKart.jpg')} alt="MarioKart pic" />
                    <li><a href="https://en.wikipedia.org/wiki/Super_Mario_Kart"> Super Mario Kart </a> </li>
                </ol>

            </div>
        );
    }// End of Render
} //End of Component
export default SnesPage;