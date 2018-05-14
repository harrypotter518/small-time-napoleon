import React from 'react'

import AlbumDetails from './AlbumDetails'
import Streamers from './Streamers'

import epCover from '../assets/epCover.png'
import jeffDave from '../assets/jeffDave.jpg'
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
        <div className="darken">
    
          <div className="content">
            <div className="tag-line">
              <p>Check out Small Time Napoleon's New EP, "Too Big To Fail".</p>
              <p>Including the single, "Dear L"</p>
            </div>
            <div className="too-big-to-fail" style={epCoverStyle}>
            </div>
            <div className="cd" 
              onMouseEnter={props.hoverAlbum} 
              onMouseLeave={props.unhoverAlbum} 
              onClick={props.showMusicDetails}>

              {props.album? <AlbumDetails /> : null}
              <CD />

            </div>
            
          </div>

        </div>
      </div>

      <Streamers />

    </div>
  )
}

export default Music