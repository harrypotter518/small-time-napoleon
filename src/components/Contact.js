import React, {Component} from 'react'

import GoogleForm from './GoogleForm'

import backgroundImage from '../assets/photoSection/jeffSings.jpg'

const backgroundStyle = {
  background: 'url(' + backgroundImage + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default class Contact extends Component {



  render() {
    const {emailSubject, emailDate, changeEmailSubject, changeEmailDate, emailButtonValue, emailEventTitle, changeEmailEventTitle, emailBody, changeEmailBody} = this.props

    let bookingSelections = null
    if (emailSubject === 'Booking') {
      bookingSelections = <div>
        <label>Date:<input onChange={changeEmailDate} type="date" /></label>    
        <br />
        <label>Event Title:<input type="text" value={emailEventTitle} onChange={changeEmailEventTitle} /></label>
      </div>
    }

    return(
      <div className="contact" id="contact">
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

            <br />

            <textarea name="message" placeholder="your message here" onChange={changeEmailBody} />


            <a href={`mailto:smalltimenapoleonband@gmail.com?Subject=${emailSubject}${emailDate !== null ? '%20-%20'+emailDate : ''}${emailEventTitle !== '' ? '%20-%20'+emailEventTitle : '' }&body=${emailBody}`}>
              {emailButtonValue}
            </a>
          </form>


          {/* <GoogleForm /> */}


        </div>
      </div>
    )
  }
}