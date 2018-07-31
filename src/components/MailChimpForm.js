import React, { Component } from 'react'

export default class MailChimpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: '',
    }
  }

  render() {
    return(
      <div className="mailchimp">
        <h3>Sign up for our mailing list</h3>
        
        <form action="https://smalltimenapoleon.us18.list-manage.com/subscribe/post?u=7c33c3e77efd6946e75d92b3a&amp;id=0c40709758" method="POST" target="_blank" noValidate>
          <input type="hidden" name="u" value="7c33c3e77efd6946e75d92b3a" />
          <input type="hidden" name="id" value="0c40709758" />
          <div className='inputs'>

            <label htmlFor="MERGE0">
              {/* email */}
              <input
                placeholder="Your email address..."
                type='email'
                name='EMAIL'
                id='MERGE0'
                value={this.state.emailValue}
                onChange={ (e) => {this.setState({emailValue: e.target.value})} }
                autoCapitalize="off"
                autoCorrect="off"
              />
            </label>
            
            <input className="contact-button" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />

          </div>
          

          {/* for bots */}
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
              <label htmlFor="b_name">Name: </label>
              <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

              <label htmlFor="b_email">Email: </label>
              <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

              <label htmlFor="b_comment">Comment: </label>
              <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
          </div>
        </form>
      </div>
    )
  }
}

// import MailchimpSubscribe from 'react-mailchimp-subscribe'

// const url = "https://smalltimenapoleon.us18.list-manage.com/subscribe/post?u=7c33c3e77efd6946e75d92b3a&amp;id=0c40709758"

// const MailChimpForm = () => {
//   return(
//     <div id="mc_embed_signup">
//       <form action="https://smalltimenapoleon.us18.list-manage.com/subscribe/post?u=7c33c3e77efd6946e75d92b3a&amp;id=0c40709758" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
//           <div id="mc_embed_signup_scroll">
//         <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
//         <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
//           {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
//           <div style={{position: 'absolute', left: -5000}} aria-hidden="true"><input type="text" name="b_7c33c3e77efd6946e75d92b3a_0c40709758" tabIndex="-1" value="" /></div>
//           <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
//           </div>
//       </form>
//     </div>
//   )
// }

// export default MailChimpForm

//  <label htmlFor="MERGE1">
//   {/* first name */}
//   <input 
//     type='text'
//     name='FNAME'
//     id='MERGE1'
//     value={this.state.fNameValue}
//     onChange={ (e) => {this.setState({fNameValue: e.target.value})} }
//   />
// </label>
// <label htmlFor="<MERGE2">
//   {/* last name */}
//   <input 
//     type='text'
//     name='LNAME'
//     id='MERGE2'
//     value={this.state.lNameValue}
//     onChange={ (e) => {this.setState({lNameValue: e.target.value})} }
//   />
// </label> */}