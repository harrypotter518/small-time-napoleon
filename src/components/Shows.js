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

      <div className="content">
        <h1>Shows</h1>
        shows
        <br />
        shows 
        <br />
        shows
      </div>
    </div>
  )
}

export default Shows