import React, { Component } from 'react';
import './App.css';
import { TimelineLite, Power2 } from 'gsap'

import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import MailChimpForm from './components/MailChimpForm';
import Section from './components/Section'

import sectionsData from './data/sectionsData';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // window dimensions
      width: window.innerWidth,
      height: window.innerHeight,
      // navigation
      nav: false,
      // main
      quote: 1,
    }
    // window dimensions
    this.updateDimensions = this.updateDimensions.bind(this)
    // navigation
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    // main
    this.increaseQuote = this.increaseQuote.bind(this)
    this.decreaseQuote = this.decreaseQuote.bind(this)
    
    // ? What are those ! V
    this.touchStart = this.touchStart.bind(this)
    this.touchEnd = this.touchEnd.bind(this)
    this.handleSwipe = this.handleSwipe.bind(this)
  }

  //NAV
  toggleNav() {
    this.setState({
      nav: !this.state.nav,
    })
  }
  closeNav() {
    if (this.state.width < 1000) {
      this.setState({
        nav: false,
      })
    }
  }

  //QUOTES
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
  handleSwipe(direction) {
    switch (direction) {
      case "up":
        break
      case "down":
        break
      case "left": 
        this.increaseQuote()
        break
      case "right": 
        this.decreaseQuote()
        break
      default:
        break

    }
  }
  // hamburger menu animation
  crossBuns() {
    const tl = new TimelineLite();
    tl
      //turn hamburger to cross
      .to("#hamburger", .4, {scale: .8, ease:Power2.easeOut})
      .to("#top", .4, {y: '30px'}, 0)
      .to("#bottom", .4, {y: '-30px'}, 0)
      .to("#top", .2, {rotation: 135, transformOrigin: 'center', ease:Power2.easeOut}, .2)
      .to("#bottom", .2, {rotation: 45, transformOrigin: 'center', ease:Power2.easeOut}, .2)
      .to("#middle", .1, {autoAlpha: 0}, .2)


  }
  uncrossBuns() {
    const tl = new TimelineLite();
    tl
      //return buns to burger
      .to("#hamburger", .3, {scale: 1, ease:Power2.easeOut})
      .to("#top", .3, {rotation: 0}, 0)
      .to("#bottom", .3, {rotation: 0}, 0)
      .to("#top", .3, {y: 0}, .3)
      .to("#bottom", .3, {y: 0}, .3)
      .to("#middle", .5, {autoAlpha: 1}, .2)
  }

  // ? not so sure about these touch events
  touchStart(e) {
    console.log('touchStarted')
  }
  touchEnd(e) {
    console.log('touchEnded')
  }
  
  // update window dimensions
  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    // expand nav is window is larger that 1000px
    if (this.state.width >= 1000) {
      this.setState({
        nav: true,
      })
    }
    // close nav if window width shrinks below 1000px
    if (this.state.width < 1000) {
      this.setState({
        nav: false,
      })
    }
  }

  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    // listen for window resizes
    window.addEventListener('resize', this.updateDimensions)

    // advance quote every 10sec
    setInterval(() => {
      this.increaseQuote()
    }, 10000)
  }

  componentDidUpdate() {
    // handle hamburger icon
    if (this.state.nav) {
      this.crossBuns()
    } else {
      this.uncrossBuns()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }
  


  render() {
    const { nav, width, quote } = this.state
    const sections = sectionsData.map((data, i) => 
      <Section key={i} sectionId={data.sectionId} backgroundImage={data.backgroundImage} title={data.title}>{data.children}</Section>
    )


    return (
      <div className="App">
        <Nav 
          nav={nav} 
          toggleNav={this.toggleNav}
          closeNav={this.closeNav}
          width={width} />

        <Main
          quote={quote}
          increaseQuote={this.increaseQuote}
          decreaseQuote={this.decreaseQuote}
          handleSwipe={this.handleSwipe} />

        <div className="grid-container">

          {sections}
        
        </div>

        <MailChimpForm />

        <Footer />
        
      </div>
    );
  }
}
