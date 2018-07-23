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
    <div className="album-details-container">
      <div className={props.album ? "album-details is-expanded" : "album-details"} style={albumDetailsStyle}>
        <div className="darken">
          <div className="contents">
            <div>
              <NameLogo />
              <h3>Too Big To Fail</h3>
            </div>

            <ul>
              <li>Dan Hardin: Vocals, Guitar</li>
              <li>Jeff Thomas: Vocals, Guitar</li>
              <li>Dave Neill: Bass</li>
              <li>Zack Kennedy: Drums, Percussion</li>
            </ul>

            <ul>
              <li>with Special Guests:</li>
              <li>Todd Hildtreth: Piano, Rhodes</li>
              <li>Craig Tweddell: Trumpet</li>
              <li>Noah Reed: Tenor Sax, Bari Sax, Clarinet</li>
              <li>Ethan Evans: Trombone</li>
            </ul>

            <ul>
              <li>Produced by Small Time Napoleon</li>
              <li>Recorded at La La Land in Louisville, KY</li>
              <li>Recording Engineer: Anne Gauthier</li>
              <li>Mixing Engineer: Kevin Ratterman</li>
              <li>Mastering at Lurssen Mastering Inc</li>
              <li>Mastering Engineer: Reuben Cohen</li>
              <li>© 2017 Small Time Napoleon, all rights reserved</li>
            </ul>

            <ul>
              <li>Special Thanks to:</li>
              <li>Britt Garrett</li>
              <li>David Neill Sr</li>
              <li>Tim and Nancy Kennedy</li>
            </ul>

            <ul>
              <li>In Memory of:</li>
              <li>Michael Alexander Bennett</li>
              <li>Paige Goodman Neill</li>
              <li>Jeffry Alan Thomas Sr</li>
            </ul>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AlbumDetails