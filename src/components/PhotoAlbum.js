import React from 'react'

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
  oldQuartet,
  danSings,
  wedding2,
  jeffSings,
  wedding4,
  trio,
  zack,
  newTrio,
  dan,
  wedding1,
  wedding3,
  daveJeff,
]

const photos = photosArray.map((photo, i) =>
  <img className={"image" + i} src={photo} alt={photo} key={i}/>
)

const PhotoAlbum = () => {
  return(
    <div className="photo-album">
      {photos}
    </div>
  )
}

export default PhotoAlbum