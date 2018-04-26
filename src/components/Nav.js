import React, { Component } from 'react'

import BlimpIcon from '../assets/BlimpIcon'
import Hamburger from '../assets/Hamburger'
import Socials from './Socials'

export default class Nav extends Component {
  render() {
    const { toggleNav, nav } = this.props
    return(
      <div className={nav ? 'nav full' : 'nav'}>

        <div className={nav ? 'nav-bar open' : 'nav-bar'}>
          <button><BlimpIcon /></button>
          <button onClick={toggleNav}><Hamburger /></button>

        </div>  
        
        <div className={nav ? 'nav-buttons' : 'hide'}>
          <button>music</button>
          <button>video</button>
          <button>shows</button>
          <button>contact</button>
          <Socials />
        </div>
      </div>
    )
  }
}