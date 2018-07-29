import React, { Component } from 'react'
import PhotoAlbum from './PhotoAlbum'
import FacebookIcon from '../assets/FacebookIcon'
import InstagramIcon from '../assets/InstagramIcon'

export default class Pictures extends Component {
  constructor(props) {
    super(props)
    this.state= {
      enhanceImage: false
    }
    this.expandPhoto = this.expandPhoto.bind(this)
  }

  expandPhoto(e) {
    this.setState({
      enhanceImage: !this.state.enhanceImage,
    })
    // remove class 'enlarge' if it already has it, add it if not
    if (e.target.classList.contains('enlarge')) {
      e.target.classList.remove('enlarge')
    } else {
      e.target.classList.add('enlarge')
    }
  }

  render() {
    const { enhanceImage } = this.state

    return (
      <div id="pictures" className="pictures">
      <PhotoAlbum 
        expandPhoto={this.expandPhoto}
        enhanceImage={enhanceImage} />
    
      <div className="for-more-photos">
        {/* <h4>Check out our facebook and instagram for more photos</h4> */}
        <div className="socials">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/smalltimenapoleonband" ><FacebookIcon /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/smalltime_napoleon/" ><InstagramIcon /></a>
        </div>    
      </div>
    </div>
    )
  }
}