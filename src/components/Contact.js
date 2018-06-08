import React, {Component} from 'react'

// import GoogleForm from './GoogleForm'

import backgroundImage from '../assets/photoSection/jeffSings.jpg'

const backgroundStyle = {
  background: 'url(' + backgroundImage + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default class Contact extends Component {



  render() {
    const { 
      emailSubject, 
      changeEmailSubject, 
      emailButtonValue, 
      // emailEventTitle,
      handleContactChange, 
      submitContactForm, 
      clicked,
    } = this.props

    // let date = <label>Date:<input onChange={handleContactChange} type="date" name="emailDate" /></label>
    // let eventTitle = <label>Event Title:<input type="text" name="emailEventTitle" value={emailEventTitle} onChange={handleContactChange} /></label>

    return(
      <div className="contact" id="contact">
        <div className="background" style={backgroundStyle}>
          <div className="darken"></div>
        </div>

        <div className="form">
          <h3>Contact us</h3>

          <form onSubmit={submitContactForm} action="../public/success.html">
          <p className="hide">
            <label>Don’t fill this out if you're human: <input name="bot-field" type="text" /></label>
          </p>

            {/* {emailSubject === "Booking" ? date : null}
            {emailSubject === "Booking" ? eventTitle : null} */}

            <label>Your Name: <input name="emailName" type="text" onChange={handleContactChange} /></label>
            <label>Your Email: <input name="emailUser" type="email" onChange={handleContactChange} /></label>

            <label>Subject:
              <select name="subject" onChange={changeEmailSubject} value={emailSubject}>
                <option value="Booking">Booking</option>
                <option value="General Question">General Questions</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <textarea name="emailBody" placeholder="your message here" onChange={handleContactChange} />


            <button type="submit" name="submitButton" disabled={ clicked ? 'true' : 'false' } >{emailButtonValue}</button>
          </form>

          <h3>Email</h3>
          <a href="mailto:smalltimenapoleonband@gmail.com?Subject=Hello%20amazing%20band%20I%20love">smalltimenapoleonband@gmail.com</a>
          <h3>Phone</h3>
          <a href="#contact">502-439-1974</a>


        </div>
      </div>
    )
  }
}