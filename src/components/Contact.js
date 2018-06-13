import React, {Component} from 'react'

// import GoogleForm from './GoogleForm'

import backgroundImage from '../assets/photoSection/jeffSings.jpg'
import PhoneIcon from '../assets/PhoneIcon';
import MailIcon from '../assets/MailIcon';

const backgroundStyle = {
  background: 'url(' + backgroundImage + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default class Contact extends Component {
  
  
  render() {
    const { 
      // contactSubject, 
      // changecontactSubject, 
      // emailButtonValue, 
      // contactEventTitle,
      handleContactChange, 
      submitContactForm, 
      updateContactButton,
      contactButtonMessage,
      contactSent,
      clicked,
      // what's up with these touch events?
      touchStart,
      touchEnd,
    } = this.props

    return(
      <div className="contact" id="contact">
        <div className="background" style={backgroundStyle}>
          <div className="darken"></div>
        </div>

        <div className="form">
          <h1>Contact us</h1>

          <form onSubmit={submitContactForm} onChange={updateContactButton}>
          <p className="hide">
            <label>Don’t fill this out if you're human: <input name="bot-field" type="text" /></label>
          </p>

            <div className={`inputs ${contactSent ? 'sent ': ''}`}>
              <label aria-label="Your Name"><input name="contactName" type="text" placeholder="Your Name..." onChange={handleContactChange} /></label>
              <label aria-label="Your Email"><input name="contactUser" type="email" placeholder="Your Email..." onChange={handleContactChange} /></label>
              <label aria-label="Message Subject"><input name="contactSubject" type="text" placeholder="Subject..." onChange={handleContactChange} /></label>

              <textarea name="contactBody" aria-label="Your message here..." placeholder="Your message here..." onChange={handleContactChange} />
            </div>
            <button className={`contact-button ${clicked ? 'disabled': ''} ${contactSent ? 'btn-sent' : ''}`} type="submit" name="submitButton">{contactButtonMessage}</button>
          </form>

          {/* touch events on link populated througout the app on its own? */}
          <a href="mailto:smalltimenapoleonband@gmail.com?Subject=Hello%20amazing%20band%20I%20love" onTouchStart={touchStart} onTouchEnd={touchEnd} >
            <div className="icon-set">
              <MailIcon />
              <h4>Email</h4>
              <p>smalltimenapoleonband@gmail.com</p>
            </div>
          </a>

          <a href="#contact">
            <div className="icon-set">
              <PhoneIcon />
              <h4>Phone</h4>
              <p>502-439-1974</p>
            </div>
          </a>


        </div>
      </div>
    )
  }
}