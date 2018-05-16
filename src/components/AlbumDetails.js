import React from 'react'

import albumBackground from '../assets/buildingsCover.png';
import NameLogo from '../assets/NameLogo'

const albumDetailsStyle = {
  background: 'url(' + albumBackground + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const AlbumDetails = (props) => {
  return(
    <div className={props.album ? "album-details is-expanded" : "album-details"} style={albumDetailsStyle}>
      <div className="darken">
        <div className="contents">

          <div className="spacer"></div>

          <div>
            <NameLogo />
            <h3>Too Big To Fail</h3>
          </div>

          <ul className="track-list">
            <li>Dear L</li>
            <li>Code and Co-Host</li>
            <li>A Certain Shuffle (Easy Climb)</li>
            <li>High Wire</li>
            <li>Cake and Circus</li>
            <li>House Rules</li>
          </ul>

          <ul>
            <li>Dan Hardin: Vocals, Guitar</li>
            <li>Jeff Thomas: Vocals, Guitar</li>
            <li>Dave Neill: Bass</li>
            <li>Zack Kennedy: Drums, Percussion</li>
          </ul>

          <ul>
            <li>Recorded at La La Land in Louisville, KY</li>
            <li>Recording Engineer: Anne Gauthier</li>
            <li>Mixing Engineer: Kevin Ratterman</li>
            <li>© Small Time Napoleon 2017</li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default AlbumDetails