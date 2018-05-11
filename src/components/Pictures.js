import React from 'react'
import PhotoAlbum from './PhotoAlbum'

import zackBackground from '../assets/zack.jpg'

const backgroundStyle = {
  background: 'url(' + zackBackground + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Pictures = () => {
  return(
    <div id="pictures" className="pictures">
      <div className="background" style={backgroundStyle}>
        <div className="darken">
          {/* throw in a quote */}
        </div>
      </div>
      <PhotoAlbum />

    </div>
  )
}

export default Pictures