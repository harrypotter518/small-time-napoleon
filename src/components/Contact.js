import React, {Component} from 'react'

import backgroundImage from '../assets/photoSection/jeffSings.jpg'

const backgroundStyle = {
  background: 'url(' + backgroundImage + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default class Contact extends Component {



  render() {
    const {emailSubject, emailDate, changeEmailSubject, changeEmailDate, emailButtonValue, emailEventTitle, changeEmailEventTitle, } = this.props

    let bookingSelections = null
    if (emailSubject === 'Booking') {
      bookingSelections = <div>
        <label>Date:<input onChange={changeEmailDate} type="date" /></label>    
        <br />
        <label>Event Title:<input type="text" value={emailEventTitle} onChange={changeEmailEventTitle} /></label>
      </div>
    }

    return(
      <div className="contact">
        <div className="background" style={backgroundStyle}>
          <div className="darken"></div>
        </div>
        <div className="form">
          <h3>Email</h3>
          <form>
            <label>Subject:
              <select onChange={changeEmailSubject} value={emailSubject}>
                <option value="Booking">Booking</option>
                <option value="General Question">General Questions</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <br />

            {bookingSelections}

            <a href={`mailto:smalltimenapoleonband@gmail.com?Subject=${emailSubject}%20${emailDate !== null ? emailDate : ''}%20${emailEventTitle !== '' ? emailEventTitle : '' }`}>
              {emailButtonValue}
            </a>


          </form>


        </div>
      </div>
    )
  }
}