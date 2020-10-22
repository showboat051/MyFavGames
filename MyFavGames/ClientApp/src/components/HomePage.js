import React, { Component } from 'react';
import Nes from './Nes';
import { Link } from 'react-router-dom';


export class HomePage extends Component {
    static displayName = HomePage.name;

    render() {
        return (
            <div>
                <h1 id="headline">Welcome to Video Games! </h1>
                <h2> There's no such thing as a time machine, but we can start with this!</h2>
                <Nes />
                <Link to="/NesPage">Nintendo Entertainment System </Link>
            </div>
        );
    }// End of Render
} //End of Component
