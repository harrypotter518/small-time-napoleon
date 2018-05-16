import React, { Component } from 'react'

import dan from '../assets/photoSection/dan.jpg'
import danSings from '../assets/photoSection/danSings.jpg'
import daveJeff from '../assets/photoSection/daveJeff.jpg'
import jeffSings from '../assets/photoSection/jeffSings.jpg'
import newTrio from '../assets/photoSection/newTrio.jpg'
import oldQuartet from '../assets/photoSection/oldQuartet.jpg'
import trio from '../assets/photoSection/trio.jpg'
import wedding1 from '../assets/photoSection/wedding1.jpg'
import wedding2 from '../assets/photoSection/wedding2.jpg'
import wedding3 from '../assets/photoSection/wedding3.jpg'
import wedding4 from '../assets/photoSection/wedding4.jpg'
import zack from '../assets/photoSection/zack.jpg'

const photosArray = [
  daveJeff,
  wedding3,
  oldQuartet,
  danSings,
  wedding2,
  jeffSings,
  wedding4,
  trio,
  zack,
  newTrio,
  wedding1,
  dan,
]

export default class PhotoAlbum extends Component {
  render() {

    const photos = photosArray.map((photo, i) =>
      <img className={"image" + i} src={photo} alt={photo} key={i} onClick={this.props.expandPhoto}/>
    )
    
    return(
      <div className="photo-album">
        {photos}
  
        {this.props.enhanceImage ? <div className="large-image-background"></div> : null}
      </div>
    )
  }
}