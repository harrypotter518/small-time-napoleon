import React from 'react'

import FacebookIcon from '../assets/FacebookIcon'
import InstagramIcon from '../assets/InstagramIcon'
import TwitterIcon from '../assets/TwitterIcon'
import YoutubeIcon from '../assets/YoutubeIcon'

const Socials = (props) => {
  return (
    <div className="socials">
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/smalltimenapoleonband" ><FacebookIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/smalltime_napoleon/" ><InstagramIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/stnapoleonband\" ><TwitterIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/stnapoleonband" ><YoutubeIcon /></a>
    </div>
  )
}

export default Socials
