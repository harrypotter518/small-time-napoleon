import React from 'react'

import Streamers from './Streamers'

import epCover from '../assets/epCover.png';
import jeffDave from '../assets/jeffDave.jpg';

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

const Music = () => {

  return (
    <div id="music" className="music">

      <div className="background" style={buildingsBackgroundStyle}>
        <div className="darken"></div>
        <div className="content">
          <div className="tag-line">
            <p>Check out Small Time Napoleon's New EP, "Too Big To Fail".</p>
            <p>Including the single, "Dear L"</p>
          </div>
          <div className="too-big-to-fail" style={epCoverStyle}></div>
          </div>
      </div>

      <Streamers />

    </div>
  )
}

export default Music