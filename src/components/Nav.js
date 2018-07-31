import React, { Component } from 'react'

import BlimpIcon from '../assets/BlimpIcon'
import Hamburger from '../assets/Hamburger'
import Socials from './Socials'

export default class Nav extends Component {
  render() {
    const { 
      toggleNav, 
      nav, 
      closeNav, 
      width 
    } = this.props

    let hamburger = <button onClick={toggleNav}><Hamburger /></button>

    return(
      <div className={nav ? 'nav full' : 'nav'}>

        <div className={nav ? 'nav-bar open' : 'nav-bar'}>
          <a href="#main" onClick={closeNav}><BlimpIcon /></a>
          { width < 1000 ? hamburger : null }
          {/* <button onClick={toggleNav}><Hamburger /></button> */}

        </div>  
        
        <div className={nav ? 'nav-buttons' : 'hide'}>
          <a href="#music" onClick={closeNav}>
            <h4>music</h4>
          </a>
          <a href="#video" onClick={closeNav}>
            <h4>video</h4>
          </a>
          <a href="#pictures" onClick={closeNav}>
            <h4>pictures</h4>
          </a>
          <a href="#shows" onClick={closeNav}>
            <h4>shows</h4>
          </a>
          <a href="#about" onClick={closeNav}>
            <h4>about</h4>
          </a>
          <a href="#contact" onClick={closeNav}>
            <h4>contact</h4>
          </a>

          { width < 550 ? <Socials /> : null }

        </div>
      </div>
    )
  }
}
