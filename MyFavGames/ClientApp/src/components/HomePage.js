import React, { Component } from 'react';
import Nes from './Nes';
import { Link } from 'react-router-dom';
import Snes from './Snes';
import SearchBar from './SearchBar';


export class HomePage extends Component {
    static displayName = HomePage.name;

    render() {
        return (
            <div>
                <h1 id="headline">Welcome to Video Games! </h1>
                <h2> There's no such thing as a time machine, but we can start with this!</h2>
                <table id="sysHolder">
                    <thead>
                        <tr>
                            <th> <Nes />
                                <Link to="/NesPage"> Nintendo Entertainment System (1985) </Link> </th>
                            <th><Snes />
                                <Link to="./SnesPage">Super Nintendo Entertainment System (1991) </Link> </th>
                        </tr>
               
                
                        </thead>
                </table>
                <SearchBar />
            </div>
        );
    }// End of Render
} //End of Component
