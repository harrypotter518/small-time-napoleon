import React, { Component } from 'react'

import NetlifyForm from 'react-netlify-form'

export default class ContactNetlify extends Component {
  render() {
    return(
      <div>
        <NetlifyForm>{formState => (
            <div>
                { formState.loading && 'Loading...' }
                { formState.error && 'Error.' }
                { formState.success && 'Success.' }
                <input type='text' name='Name' required />
                <textarea name='Message' required />
                <button>Submit</button>
            </div>
        )}</NetlifyForm>
      </div>
    )
  }
}