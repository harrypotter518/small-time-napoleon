import React from 'react'

import AppleIcon from '../assets/AppleIcon'
import SpotifyIcon from '../assets/SpotifyIcon'
import BandcampIcon from '../assets/BandcampIcon'
import AmazonIcon from '../assets/AmazonIcon'

const Streamers = (props) => {
  return (
    <div className="streamers">
      <a target="_blank" rel="noopener noreferrer" href="https://geo.itunes.apple.com/us/album/too-big-to-fail-ep/1254499820?mt=1&app=music" ><AppleIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/0mNtsUTeDK3Tnewy9tuD2b" ><SpotifyIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://smalltimenapoleon.bandcamp.com/" ><BandcampIcon /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/Too-Fail-Small-Time-Napoleon/dp/B073PRSLCB/ref=sr_1_2_twi_mus_1?ie=UTF8&qid=1528214595&sr=8-2&keywords=small+time+napoleon" ><AmazonIcon /></a>
    </div>
  )
}

export default Streamers