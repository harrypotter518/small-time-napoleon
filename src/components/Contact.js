import React from 'react'

import backgroundImage from '../assets/photoSection/jeffSings.jpg'

const backgroundStyle = {
  background: 'url(' + backgroundImage + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Contact = () => {
  return (
    <div className="contact">
      <div className="background" style={backgroundStyle}>
        <div className="darken"></div>
      </div>
      contact us. we fucking dare you. you piece of shit. kiss my piss.
    </div>
  )
}

export default Contact