import React from 'react'

import backgroundImage from '../assets/photoSection/daveJeff.jpg'

const backgroundStyle = {
  background: 'url(' + backgroundImage + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Shows = (props) => {
  return (
    <div id="shows" className="shows">
      <div className="background" style={backgroundStyle}>
        <div className="darken"></div>
      </div>
      shows
      <br />
      shows 
      <br />
      shows
    </div>
  )
}

export default Shows