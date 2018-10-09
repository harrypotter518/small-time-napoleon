import React, {Component} from 'react'
import PhoneIcon from '../assets/contactIcons/PhoneIcon';
// import TextIcon from '../assets/contactIcons/TextIcon';
import MailIcon from '../assets/contactIcons/MailIcon'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactDate: null,
      name: '',
      email: '',
      contactButtonMessage: 'Send',
      contactEventTitle: '',
      subject: '',
      message: '',
      clicked: true,
      contactSent: false,
    }
    this.handleContactChange = this.handleContactChange.bind(this)
    this.updateContactButton = this.updateContactButton.bind(this)
    this.submitContactForm = this.submitContactForm.bind(this)
  }

  handleContactChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }
  updateContactButton() {
    const { name, email, message } = this.state
    if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
      this.setState({
        clicked: false,
      })
    } else {
      this.setState({
        clicked: true,
      })
    }

  }
  submitContactForm(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(this.setState({
        clicked: true,
        contactSent: true,
        contactButtonMessage: 'thanks!',
      }))
      .catch(error => alert(error));
    
    e.preventDefault()
  }

  render() {
    const { 
      contactButtonMessage,
      contactSent,
      clicked,
    } = this.state

    return(
      <div className="contact">
        <div className="form">
          <form onSubmit={this.submitContactForm} onChange={this.updateContactButton}>
          <p className="hide">
            <label>Don’t fill this out if you're human: <input name="bot-field" type="text" /></label>
          </p>

            <div className={`inputs ${contactSent ? 'sent ': ''}`}>
              <label aria-label="Your Name"><input name="name" type="text" placeholder="Name..." onChange={this.handleContactChange} /></label>
              <label aria-label="Your Email"><input name="email" type="email" placeholder="Email..." onChange={this.handleContactChange} /></label>
              <label aria-label="Message Subject"><input name="subject" type="text" placeholder="Subject..." onChange={this.handleContactChange} /></label>

              <textarea name="message" aria-label="Your message here..." placeholder="Your message here..." onChange={this.handleContactChange} />
            </div>
            <button className={`contact-button ${clicked ? 'disabled': ''} ${contactSent ? 'btn-sent' : ''}`} type="submit" name="submitButton">{contactButtonMessage}</button>
          </form>

          <div className="contact-icons">
            {/* touch events on link populated througout the app on its own? */}
            <a href="tel:+15024391974">
              <div className="icon-set">
                <h4>Call</h4>
                <PhoneIcon />
                {/* <p>502-439-1974</p> */}
              </div>
            </a>

            {/* <a href="sms:5024391974">
              <div className="icon-set">
                <h4>Text</h4>
                <TextIcon />
                <p>502-439-1974</p> 
              </div>
            </a> */}

            <a href="mailto:smalltimenapoleonband@gmail.com?Subject=Hello%20amazing%20band%20I%20love">
              <div className="icon-set">
                <h4>Email</h4>
                <MailIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}