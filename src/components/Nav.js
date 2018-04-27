import React, { Component } from 'react'

import BlimpIcon from '../assets/BlimpIcon'
import Hamburger from '../assets/Hamburger'
import Socials from './Socials'

export default class Nav extends Component {
  render() {
    const { toggleNav, nav, closeNav } = this.props
    return(
      <div className={nav ? 'nav full' : 'nav'}>

        <div className={nav ? 'nav-bar open' : 'nav-bar'}>
          <a href="#main" onClick={closeNav}><button><BlimpIcon /></button></a>
          <button onClick={toggleNav}><Hamburger /></button>

        </div>  
        
        <div className={nav ? 'nav-buttons' : 'hide'}>
          <a href="#music" onClick={closeNav}><button>music</button></a>
          <a href="#video" onClick={closeNav}><button>video</button></a>
          <a href="#pictures" onClick={closeNav}><button>pictures</button></a>
          <button>shows</button>
          <button>contact</button>
          <Socials />
        </div>
      </div>
    )
  }
}