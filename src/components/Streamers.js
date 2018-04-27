import React from 'react'

import AppleIcon from '../assets/AppleIcon'
import SpotifyIcon from '../assets/SpotifyIcon'
import BandcampIcon from '../assets/BandcampIcon'
import AmazonIcon from '../assets/AmazonIcon'

const Streamers = (props) => {
  return (
    <div className="streamers">
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/smalltimenapoleonband" ><AppleIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/smalltime_napoleon/" ><SpotifyIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/stnapoleonband\" ><BandcampIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/stnapoleonband" ><AmazonIcon /></a>
    </div>
  )
}

export default Streamers