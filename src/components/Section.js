import React from 'react'

const Sections = (props) => (
  <div className="section" id={props.sectionId}>
    <div className="background" style={{
      background: 'url(' + props.backgroundImage + ') #262355',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className="darken"></div>
    </div>

    <div className="content">
      <h1>{props.title}</h1>
      {props.children}
    </div>

  </div>
)

export default Sections