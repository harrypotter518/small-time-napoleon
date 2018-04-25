import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav'
import Main from './components/Main'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: false,
      quote: 1,
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.increaseQuote = this.increaseQuote.bind(this)
    this.decreaseQuote = this.decreaseQuote.bind(this)
  }

  toggleNav() {
    this.setState({
      nav: !this.state.nav,
    })
  }

  increaseQuote() {
    if (this.state.quote < 3) {
      const newQuote = this.state.quote + 1
      this.setState({
        quote: newQuote,
      })
    } else {
      this.setState({
        quote: 1,
      })
    }
  }
  decreaseQuote() {
    if (this.state.quote > 1) {
      const newQuote = this.state.quote - 1
      this.setState({
        quote: newQuote,
      })
    } else {
      this.setState({
        quote: 3,
      })
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.increaseQuote()
    }, 10000)
  }


  render() {
    const { nav, quote } = this.state

    return (
      <div className="App">
        <Nav 
          nav={nav} 
          toggleNav={this.toggleNav} />
        <Main
          quote={quote}
          increaseQuote={this.increaseQuote}
          decreaseQuote={this.decreaseQuote} />
      </div>
    );
  }
}
