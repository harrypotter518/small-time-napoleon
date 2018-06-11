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
      contactSubject, 
      changecontactSubject, 
      // emailButtonValue, 
      // contactEventTitle,
      handleContactChange, 
      submitContactForm, 
      updateContactButton,
      contactButtonMessage,
      contactSent,
      clicked,
    } = this.props

    return(
      <div className="contact" id="contact">
        <div className="background" style={backgroundStyle}>
          <div className="darken"></div>
        </div>

        <div className="form">
          <h3>Contact us</h3>

          <form onSubmit={submitContactForm} onChange={updateContactButton}>
          <p className="hide">
            <label>Don’t fill this out if you're human: <input name="bot-field" type="text" /></label>
          </p>

            <div className={`inputs ${contactSent ? 'sent ': ''}`}>
              <label>Your Name: <input name="contactName" type="text" onChange={handleContactChange} /></label>
              <label>Your Email: <input name="contactUser" type="email" onChange={handleContactChange} /></label>

              <label>Subject:
                <select name="subject" onChange={changecontactSubject} value={contactSubject}>
                  <option value="Booking">Booking</option>
                  <option value="General Question">General Questions</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <textarea name="contactBody" placeholder="your message here" onChange={handleContactChange} />
            </div>
            <button className={`contact-button ${clicked ? 'disabled': ''} ${contactSent ? 'btn-sent' : ''}`} type="submit" name="submitButton">{contactButtonMessage}</button>
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