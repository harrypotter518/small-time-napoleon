import React from 'react'

import danBackground from '../assets/danBackground.jpg'
import vidThumbNail1 from '../assets/vidThumbNail1.png'
import vidThumbNail2 from '../assets/vidThumbNail2.png'
import vidThumbNail3 from '../assets/vidThumbNail3.png'

const danBackgroundStyle = {
  background: 'url(' + danBackground + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const vidThumbNail1Background = {
  background: 'url(' + vidThumbNail1 + ')',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}
const vidThumbNail2Background = {
  background: 'url(' + vidThumbNail2 + ')',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}
const vidThumbNail3Background = {
  background: 'url(' + vidThumbNail3 + ')',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Video = () => {
  return (
    <div id="video" className="video">
      <div className="background" style={danBackgroundStyle}>
        <div className="darken">
        
          <div className="content">
            <div className="iframe-container">
              <iframe className="iframe" title="youtube video" width="335.5" height="188.7" src="https://www.youtube.com/embed/E0_Gw1Bcpb8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
          
        </div>
      </div>

      <div className="video-links">
        <p className="for-more-videos">For more videos...</p>

        <div className="more-videos">
          <a href="https://www.youtube.com/watch?v=VjgxdyrrdA0" target="_blank" rel="noopener noreferrer"><div className="video-thumbnail" style={vidThumbNail1Background}></div></a>
          <a href="https://www.youtube.com/watch?v=05I8EkZXHug" target="_blank" rel="noopener noreferrer"><div className="video-thumbnail" style={vidThumbNail2Background}></div></a>
          <a href="https://www.youtube.com/watch?v=z1tHgByDajo" target="_blank" rel="noopener noreferrer"><div className="video-thumbnail" style={vidThumbNail3Background}></div></a>
        </div>

        <div className="subscribe">
          <p>...head to our youtube channel and subscribe</p>
          <a href="https://www.youtube.com/user/stnapoleonband/?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><button className="button-red">subscribe</button></a>
        </div>
      </div>
    </div>
  )
}

export default Video