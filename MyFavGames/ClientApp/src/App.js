import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { HomePage } from './components/HomePage';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import NesPage from './components/NesPage';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/NesPage' component={NesPage} />
        </Layout>
     );
  }
}
