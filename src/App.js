import React, { Component } from 'react';
import './App.css';
import { TimelineLite, Power2, Power0 } from 'gsap'

import Nav from './components/Nav'
import Main from './components/Main'
import Music from './components/Music'
import Video from './components/Video'
import Pictures from './components/Pictures'
import Shows from './components/Shows'
import Contact from './components/Contact'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: false,
      quote: 1,
      album: false,
      enhanceImage: false,
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.increaseQuote = this.increaseQuote.bind(this)
    this.decreaseQuote = this.decreaseQuote.bind(this)
    this.showMusicDetails = this.showMusicDetails.bind(this)
    this.hoverAlbum = this.hoverAlbum.bind(this)
    this.unhoverAlbum = this.unhoverAlbum.bind(this)
    this.expandPhoto = this.expandPhoto.bind(this)
  }

  //NAV
  toggleNav() {
    this.setState({
      nav: !this.state.nav,
    })
  }
  closeNav() {
    this.setState({
      nav: false,
    })
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

  //MUSIC
  rotateDisc() {
    const tl = new TimelineLite()
    tl
    .to('#label-and-grooves', 5, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1})
    .to('#grooves', 6.5, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 0)
    .to('#grooves', 1.5, {scale: 1.08, ease:Power2.easeOut, yoyo: true, repeat: -1}, 0)
  }
  hoverAlbum() {
    const tl = new TimelineLite()
    tl
      .to('.cd', .5, {y: '20px', ease:Power2.easeInOut})
  }
  unhoverAlbum() {
    const tl = new TimelineLite()
    tl
      .to('.cd', .5, {y: 0, ease:Power2.easeInOut})
  }

  showMusicDetails() {
    this.setState({
      album: !this.state.album,
    })
  }

  //PHOTOS
  expandPhoto(e) {
    this.setState({
      enhanceImage: !this.state.enhanceImage,
    })
    // remove class 'enlarge' if it already has it, add it if not
    if (e.target.classList.contains('enlarge')) {
      e.target.classList.remove('enlarge')
    } else {
      e.target.classList.add('enlarge')
    }

    // make next click remove 'enlarge' class
    if (this.state.enhanceImage) {
      console.log('enhance')
    }
  }
  
  componentDidMount() {
    // advance quote every 10sec
    setInterval(() => {
      this.increaseQuote()
    }, 10000)

    // rotate disc in music section
    this.rotateDisc()
  }

  componentDidUpdate() {
    if (this.state.nav) {
      this.crossBuns()
    } else {
      this.uncrossBuns()
    }
  }

  render() {
    const { nav, quote, album, enhanceImage, } = this.state

    return (
      <div className="App">
        <Nav 
          nav={nav} 
          toggleNav={this.toggleNav}
          closeNav={this.closeNav} />
        <Main
          quote={quote}
          increaseQuote={this.increaseQuote}
          decreaseQuote={this.decreaseQuote} />
        <Music 
          album={album}
          hoverAlbum={this.hoverAlbum}
          unhoverAlbum={this.unhoverAlbum}
          showMusicDetails={this.showMusicDetails} />
        <Video />
        <Pictures 
          enhanceImage={enhanceImage}
          expandPhoto={this.expandPhoto} />
        <Shows />
        <Contact />
        
      </div>
    );
  }
}
