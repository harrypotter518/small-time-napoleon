import React, { Component } from 'react'

import photosObject from '../data/imageData'

export default class PhotoAlbum extends Component {
  render() {

    const photos = photosObject.map((photo, i) =>
      <img className={`image${i}`} src={photo.source} alt={photo.alt} key={i} onClick={this.props.expandPhoto} />
    )
    
    return(
      <div className="photo-album">
        {photos}
        
  
        {this.props.enhanceImage ? <div className="large-image-background"></div> : null}
      </div>
    )
  }
}