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
      changeEmailDate, 
      emailButtonValue, 
      emailEventTitle,
      emailUser,
      handleContactChange, 
      submitContactForm, 
    } = this.props

    let date = <label>Date:<input onChange={changeEmailDate} type="date" name="date" /></label>
    let eventTitle = <label>Event Title:<input type="text" name="emailEventTitle" value={emailEventTitle} onChange={handleContactChange} /></label>

    return(
      <div className="contact" id="contact">
        <div className="background" style={backgroundStyle}>
          <div className="darken"></div>
        </div>

        <div className="form">
          <h3>Contact us</h3>

          <form name="contact" method="POST" netlify-honeypot="bot-field" netlify onSubmit={submitContactForm}>
          <p className="hide">
            <label>Don’t fill this out if you're human: <input name="bot-field" type="text" /></label>
          </p>
            <label>Subject:
              <select name="subject" onChange={changeEmailSubject} value={emailSubject}>
                <option value="Booking">Booking</option>
                <option value="General Question">General Questions</option>
                <option value="Other">Other</option>
              </select>
            </label>

            {emailSubject === "Booking" ? date : null}
            {emailSubject === "Booking" ? eventTitle : null}

            <label>Your Email: <input name="emailUser" type="email" value={emailUser} onChange={handleContactChange} /></label>

            <textarea name="emailBody" placeholder="your message here" onChange={handleContactChange} />


            <button type="submit" >{emailButtonValue}</button>
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