import React, { Component } from 'react'

export default class Sections extends Component {
  state = {
      show: false,
      // contentHeight: 550,
    }

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    })

    // if (this.state.show) {
    //   this.setState({ contentHeight: this.refs.inner.clientHeight })
    // } else {
    //   this.setState({ contentHeight: 550 })
    // }
  }

  render() {
    const { sectionId, backgroundImage, title, children, width } = this.props
    const { show } = this.state

    const coverToggle = 
      <div className={`cover-container ${!show ? "all" : ""}`}>
        <div className="cover"></div>
        <button className="toggle-button" onClick={this.toggleShow}>{`show ${show ? 'less' : 'more'}`}</button>
      </div>

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

        <div className={`content ${!show ? "all" : ""}`} >
          <h1>{title}</h1>
          {children}

          {width >= 1100 && coverToggle}
        </div>
      </div>
    )
  }
}