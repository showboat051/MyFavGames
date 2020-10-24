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
                    <li>Super Mario Bros. 3 </li>
                    <li>The Legend of Zelda </li>
                    <li> Metroid</li>
                    <li> Super Mario Bros. </li>
                    <li> Mike Tyson's PunchOut</li>
                    <li> Tecmo Super Bowl</li>
                </ol>

            </div>
        );
    }// End of Render
} //End of Component
export default SnesPage;