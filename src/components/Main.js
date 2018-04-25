import React from 'react'

import Socials from './Socials'
import Quotes from './Quotes'

import NameLogo from '../assets/NameLogo'
import epCover from '../assets/epCover.png';
import buildingsCover from '../assets/buildingsCover.png';
import weddingPhoto from '../assets/weddingPhoto.jpg';

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

const outdoorPhotoStyle = {
  background: 'url(' + weddingPhoto + ') #262355',
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Main = (props) => {

  return (
    <div className="main">

      <div className="hero-image" style={outdoorPhotoStyle}>
        <NameLogo />
        <div className="darken"></div>
      </div>

      <Quotes 
        quote={props.quote} 
        increaseQuote={props.increaseQuote}
        decreaseQuote={props.decreaseQuote} />

      <Socials />

      <div className="background" style={buildingsBackgroundStyle}>
        <div className="too-big-to-fail" style={epCoverStyle}></div>
      </div>

      
    </div>
  )
}

export default Main