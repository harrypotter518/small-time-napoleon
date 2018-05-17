import React from 'react'
import PhotoAlbum from './PhotoAlbum'

import zackBackground from '../assets/photoSection/zack.jpg'

const backgroundStyle = {
  background: 'url(' + zackBackground + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}



const Pictures = (props) => {
  return(
    <div id="pictures" className="pictures">
      <div className="background" style={backgroundStyle}>
        <div className="darken"></div>
      </div>
      <PhotoAlbum 
        expandPhoto={props.expandPhoto}
        enhanceImage={props.enhanceImage} />

      

    </div>
  )
}

export default Pictures