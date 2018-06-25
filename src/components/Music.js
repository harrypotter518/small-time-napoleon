import React from 'react'

import AlbumDetails from './AlbumDetails'
import Streamers from './Streamers'

import epCover from '../assets/epCover.png'
import jeffDave from '../assets/photoSection/jeffDave.jpg'
import CD from '../assets/CD'

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

const Music = (props) => {

  return (
    <div id="music" className="music">

      <div className="background" style={buildingsBackgroundStyle}>
        <div className="darken"></div>
      </div>
    
      <div className="content">
        <h1>Music</h1>
        <div className="too-big-to-fail" style={epCoverStyle}></div>

        <div className="cd"
          onMouseEnter={props.hoverAlbum} 
          onMouseLeave={props.unhoverAlbum} 
          onClick={props.showMusicDetails}>

          <AlbumDetails album={props.album}/> 
          
          <CD album={props.album} />
        
        </div>

        <div className="tag-line">
          <p>Check out Small Time Napoleon's New EP, "Too Big To Fail".</p>
          <p>Including the single, "Dear L"</p>
        </div>
        
        <Streamers />

      </div>
    </div>
  )
}

export default Music