import React from 'react'

import albumBackground from '../assets/buildingsCover.png';

const albumDetailsStyle = {
  background: 'url(' + albumBackground + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const AlbumDetails = () => {
  return(
    <div className="album-details" style={albumDetailsStyle}>
      <div className="darken"></div>

      <div className="contents">
        <div>
          <h1>Small Time Napoleon</h1>
          <h3>Too Big To Fail</h3>
        </div>

        <ol>
          <li>Dear L</li>
          <li>Code and Co-Host</li>
          <li>A Certain Shuffle (Easy Climb)</li>
          <li>High Wire</li>
          <li>Cake and Circus</li>
          <li>House Rules</li>
        </ol>

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
  )
}

export default AlbumDetails