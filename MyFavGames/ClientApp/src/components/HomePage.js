﻿import React, { Component } from 'react';
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
                            <th>Number 1 </th>
                            <th>Number 2 </th>
                        </tr>
                <Nes />
                <Link to="/NesPage"> Nintendo Entertainment System (1985) </Link>
                <Snes />
                        <Link to="./SnesPage">Super Nintendo Entertainment System (1991) </Link>
                        </thead>
                </table>
                <SearchBar />
            </div>
        );
    }// End of Render
} //End of Component
