import React, { Component } from 'react'

export default class Sections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow() {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    const { sectionId, backgroundImage, title, children } = this.props
    const { show } = this.state

    return(
      <div className="section" id={sectionId}>
        <div className="background" style={{
          background: 'url(' + backgroundImage + ') #262355',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
          <div className="darken"></div>
        </div>

        <div className={`content ${!show ? "all" : ""}`}>
          <h1>{title}</h1>
          {children}

          <div className={`cover-container ${!show ? "all" : ""}`}>
            <div className="cover"></div>
            <button className="toggle-button" onClick={this.toggleShow}>{`Show ${show ? 'less' : 'more'}`}</button>
          </div>

        </div>
      </div>
    )
  }
}