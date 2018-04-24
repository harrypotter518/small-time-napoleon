import React from 'react'

// import NameLogo from '../assets/NameLogo'
import Socials from './Socials'
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

const Main = (props) => {
  return (
    <div className="main">
      <div className="background" style={buildingsBackgroundStyle}>
        {/* <NameLogo /> */}
        
      </div>
      <div className="too-big-to-fail" style={epCoverStyle}></div>

      <Socials />
    </div>
  )
}

export default Main