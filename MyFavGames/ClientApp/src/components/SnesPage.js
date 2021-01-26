import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';
*/

export class SnesPage extends Component {
    static displayName = SnesPage.name;

    render() {
        return (
            <div>
                <h1> The SNES was great! </h1>
                <h2> Here are the main games for this console </h2>
                <ol>
                    <img src={require('../images/MarioWorld.png')} alt="MarioWorld pic" />
                    <li>Super Mario World </li>
                    <img src={require('../images/ZeldaSnes.jpg')} alt="ZeldaSnes pic" />
                    <li>The Legend of Zelda: A Link to the Past </li>
                    <img src={require('../images/superMetroid.jpg')} alt="SuperMetroid pic" />
                    <li> Super Metroid</li>
                    <img src={require('../images/DKC.jpg')} alt="DKC pic" />
                    <li> Donkey Kong Country </li>

                    <img src={require('../images/Superpunchoutbox.jpg')} alt="SPO pic" />
                    <li> Super PunchOut</li>
                    <img src={require('../images/marioKart.jpg')} alt="MarioKart pic" />
                    <li> Super Mario Kart</li>
                </ol>

            </div>
        );
    }// End of Render
} //End of Component
export default SnesPage;