import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav'
import Main from './components/Main'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: false,
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({
      nav: !this.state.nav,
    })
  }

  render() {
    const { nav } = this.state

    return (
      <div className="App">
        <Nav 
          nav={nav} 
          toggleNav={this.toggleNav} />
        <Main />
      </div>
    );
  }
}
