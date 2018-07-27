import React from 'react'
import PhotoAlbum from './PhotoAlbum'

import zackBackground from '../assets/photoSection/zack.jpg'

import FacebookIcon from '../assets/FacebookIcon'
import InstagramIcon from '../assets/InstagramIcon'

const backgroundStyle = {
  background: 'url(' + zackBackground + ') #262355',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}



const Pictures = (props) => {
  return(
    <div id="pictures" className="pictures">
      <div className="background" style={backgroundStyle}>
        <div className="darken"></div>
      </div>

      <div className="photos-container">
        <h1>Photos</h1>
        <PhotoAlbum 
          expandPhoto={props.expandPhoto}
          enhanceImage={props.enhanceImage} />
      
        <div className="for-more-photos">
          {/* <h4>Check out our facebook and instagram for more photos</h4> */}
          <div className="socials">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/smalltimenapoleonband" ><FacebookIcon /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/smalltime_napoleon/" ><InstagramIcon /></a>
          </div>    
        </div>
      </div>




    </div>
  )
}

export default Pictures