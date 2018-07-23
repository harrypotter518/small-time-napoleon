import React from 'react'

import jeffDave from '../assets/photoSection/jeffDave.jpg'

const buildingsBackgroundStyle = {
  background: 'url(' + jeffDave + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const About = () => (
  <div id="about" className="about">
    <div className="background" style={buildingsBackgroundStyle}>
      <div className="darken"></div>
    </div>

    <div className="content">
      <h1>About</h1>

      this is the about section.
      who we are
      pics of each of us
      bio
    </div>
  </div>
)

export default About