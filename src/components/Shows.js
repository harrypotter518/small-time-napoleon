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
        <div className="calendar-container">
          <iframe title="calendar" src="https://feed.mikle.com/widget/v2/84035/" height="402px" width="100%" className="fw-iframe" scrolling="no" frameBorder="0"></iframe>
        </div>

        <p>Check back often as our calendar is updated regularly.</p>

      </div>
    </div>
  )
}

export default Shows