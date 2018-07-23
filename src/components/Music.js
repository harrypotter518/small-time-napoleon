import React from 'react'

// import AlbumDetails from './AlbumDetails'
import Streamers from './Streamers'

import epCover from '../assets/epCover.png'
import jeffDave from '../assets/photoSection/jeffDave.jpg'
import CD from '../assets/CD'
import bandcampData from '../data/bandcampData';

const epCoverStyle = {
  background: 'url(' + epCover + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const buildingsBackgroundStyle = {
  background: 'url(' + jeffDave + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

// get random number for bandcampAudio to have random tune from Too Big To Fail
let randomNumber = Math.floor(Math.random() * 6)
const bandcampAudio = <iframe title={bandcampData[randomNumber].title} style={{border: 0, width: '90%', height: 120}} src={bandcampData[randomNumber].src} seamless><a href="http://smalltimenapoleon.bandcamp.com/album/too-big-to-fail">{bandcampData[randomNumber].title}</a></iframe>


const Music = (props) => {

  return (
    <div id="music" className="music">

      <div className="background" style={buildingsBackgroundStyle}>
        <div className="darken"></div>
      </div>
    
      <div className="content">
        <h1>Music</h1>
        <div className="cd-and-case">
          <div className="too-big-to-fail" style={epCoverStyle} onClick={props.showMusicDetails}></div>
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
    </div>
  )
}

export default Music