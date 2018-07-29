import React, { Component } from 'react'
import Streamers from './Streamers'
import epCover from '../assets/epCover.png'
import CD from '../assets/CD'
import bandcampData from '../data/bandcampData';
import { TimelineLite, Power2, Power0 } from 'gsap'

const epCoverStyle = {
  background: 'url(' + epCover + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

// get random number for bandcampAudio to have random tune from Too Big To Fail
let randomNumber = Math.floor(Math.random() * 6)
const bandcampAudio = <iframe title={bandcampData[randomNumber].title} style={{border: 0, width: '90%', height: 120}} src={bandcampData[randomNumber].src} seamless><a href="http://smalltimenapoleon.bandcamp.com/album/too-big-to-fail">{bandcampData[randomNumber].title}</a></iframe>

export default class Music extends Component {

  rotateDisc() {
    const tl = new TimelineLite()
    tl
    .to('#label-and-grooves', 5, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1})
    .to('#shine', 30, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 0)
    .to('#grooves', 6.5, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 0)
    .to('#grooves', 1.5, {scale: 1.08, ease:Power2.easeOut, yoyo: true, repeat: -1}, 0)
  }

  componentDidMount() {
    this.rotateDisc()
  }

  render() {
    return(
      <div className="music">
        <div className="cd-and-case">
          <div className="too-big-to-fail" style={epCoverStyle}></div>
          <div className="cd">
            <CD />    
          </div>

        </div>

        {bandcampAudio}

        <div className="tag-line">
          {/* <p>Check out Small Time Napoleon's New EP, "Too Big To Fail".</p>
          <p>Including the single, "Dear L"</p> */}
          <p>Stream the new record anywhere you see fit.</p>
        </div>
        
        <Streamers />
      </div>
    )
  }
}