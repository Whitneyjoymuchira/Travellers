import React from 'react'
import '../Styles/ContactUs.css'

const ContactUs = () => {
  return (
 <div className="form-container">
  <h1>Send us a Message</h1>
  <form>
  <input placeholder='Name' /> 
  <input placeholder='Email' />
 <input placeholder='Subject' />
 <textarea placeholder="Message" rows="4"></textarea>
<button>Send Message</button>
  </form>

 </div>
  )
}

export default ContactUs