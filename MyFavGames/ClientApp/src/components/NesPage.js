import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';
*/

export class NesPage extends Component {
    static displayName = NesPage.name;

    render() {
        return (
            <div>
                <h1 id = "test"> The NES was great and where it all started for me! </h1>
                <h2> Here are my favorite games for this console </h2>
                <ol>

                    <img src={require('../images/SMB3.png')} alt="Mario3 pic" />
                    <li>Super Mario Bros. 3 </li>
                    <img src={require('../images/Zelda1.png')} alt="Zelda1 pic" />
                    <li>The Legend of Zelda </li>
                    <img src={require('../images/Metroid.jpg')} alt="Metroid pic" />
                    <li> Metroid</li>
                    <img src={require('../images/Mario1.png')} alt="Mario1 pic" />
                    <li> Super Mario Bros. </li>
                    <img src={require('../images/MTPObox.jpg')} alt="MTPO pic" />
                    <li> Mike Tyson's PunchOut</li>
                    <img src={require('../images/TSBbox.jpg')} alt="Tecmo pic" />
                    <li> Tecmo Super Bowl</li>
                </ol>

            </div>
        );
    }// End of Render
} //End of Component
export default NesPage;