import React from 'react'

import epCover from '../assets/epCover.png';
import buildingsCover from '../assets/buildingsCover.png';

const epCoverStyle = {
  background: 'url(' + epCover + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const buildingsBackgroundStyle = {
  background: 'url(' + buildingsCover + ') #262355',
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Music = () => {

  return (
    <div className="music">

      <div className="background" style={buildingsBackgroundStyle}>
        <div className="too-big-to-fail" style={epCoverStyle}></div>
      </div>

    </div>
  )
}

export default Music