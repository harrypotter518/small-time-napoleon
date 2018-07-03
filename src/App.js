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
// import ContactSuccess from './components/ContactSuccess'
import Footer from './components/Footer'
import MailChimpForm from './components/MailChimpForm';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

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
      // music
      album: false,
      // photos
      enhanceImage: false,
      // contact
      contactDate: null,
      name: '',
      email: '',
      contactButtonMessage: 'Send',
      contactEventTitle: '',
      subject: '',
      message: '',
      clicked: true,
      contactSent: false,
    }
    // window dimensions
    this.updateDimensions = this.updateDimensions.bind(this)
    // navigation
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    // main
    this.increaseQuote = this.increaseQuote.bind(this)
    this.decreaseQuote = this.decreaseQuote.bind(this)
    // music
    this.showMusicDetails = this.showMusicDetails.bind(this)
    // photos
    this.hoverAlbum = this.hoverAlbum.bind(this)
    this.unhoverAlbum = this.unhoverAlbum.bind(this)
    this.expandPhoto = this.expandPhoto.bind(this)
    // contact
    this.handleContactChange = this.handleContactChange.bind(this)
    this.updateContactButton = this.updateContactButton.bind(this)
    this.submitContactForm = this.submitContactForm.bind(this)
    
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
    if (this.state.width < 550) {
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
  

  //MUSIC
  rotateDisc() {
    const tl = new TimelineLite()
    tl
    .to('#label-and-grooves', 5, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1})
    .to('#shine', 30, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 0)
    .to('#grooves', 6.5, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 0)
    .to('#grooves', 1.5, {scale: 1.08, ease:Power2.easeOut, yoyo: true, repeat: -1}, 0)
  }
  hoverAlbum() {
    const tl = new TimelineLite()
    tl
      .to('.cd-disc', .5, {y: '20px', ease:Power2.easeInOut})
  }
  unhoverAlbum() {
    const tl = new TimelineLite()
    tl
      .to('.cd-disc', .5, {y: 0, ease:Power2.easeInOut})
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
  }

  //CONTACT
  handleContactChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }
  updateContactButton() {
    const { name, email, message } = this.state
    if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
      this.setState({
        clicked: false,
      })
    } else {
      this.setState({
        clicked: true,
      })
    }

  }
  submitContactForm(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(this.setState({
        clicked: true,
        contactSent: true,
        contactButtonMessage: 'thanks!',
      }))
      .catch(error => alert(error));
    
    e.preventDefault()
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
    // expand nav is window is larger that 550px
    if (this.state.width >= 550) {
      this.setState({
        nav: true,
      })
    }
    // close nav if window width shrinks below 550px
    if (this.state.width < 550) {
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

    // rotate disc in music section
    this.rotateDisc()
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
    const { nav, width, quote, album, audioSource, enhanceImage, subject, email, contactDate, emailButtonValue, contactEventTitle, message, contactButtonMessage, contactSent, clicked, } = this.state

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

        <MailChimpForm />

        <Music 
          album={album}
          hoverAlbum={this.hoverAlbum}
          unhoverAlbum={this.unhoverAlbum}
          showMusicDetails={this.showMusicDetails}
          audioSource={audioSource} />

        <Video />

        <Pictures 
          enhanceImage={enhanceImage}
          expandPhoto={this.expandPhoto} />

        <Shows />

        <Contact 
          subject={subject}
          contactDate={contactDate}
          changesubject={this.changesubject}
          changecontactDate={this.changecontactDate}
          emailButtonValue={emailButtonValue}
          contactEventTitle={contactEventTitle} 
          email={email}
          message={message}
          handleContactChange={this.handleContactChange}
          submitContactForm={this.submitContactForm} 
          updateContactButton={this.updateContactButton}
          contactButtonMessage={contactButtonMessage}
          contactSent={contactSent}
          clicked={clicked} 
          touchStart={this.touchStart}
          touchEnd={this.touchEnd} />

        <MailChimpForm />

        <Footer />
        
      </div>
    );
  }
}
