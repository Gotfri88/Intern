import React, { useState } from 'react'
import './index.css'
import AppStore from '../../Images/Form/AppStore.png'
import GooglePlay from '../../Images/Form/GooglePlay.png'
import Blob from '../../Images/Form/Form-blob.png'
function Form() {
  const [formData, setFormData] = useState(
    {
      firstName:'',
      venueName:'',
      venueCity:'',
      stateCity:'',
      email:'',
      subject:'',
      message:''
    }
  )
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
    
  }


 
  
 function handleChangeFirstName(e){
  setFormData({...formData, firstName: e.target.value })

 }
 function handleChangeVenueName(e){
  setFormData({...formData, venueName: e.target.value })
 }
 function handleChangeVenueCity(e){
  setFormData({...formData, venueCity: e.target.value })
 }
 function handleChangeStateCity(e){
  setFormData({...formData, stateCity: e.target.value })
 }
 function handleChangeEmail(e){
  setFormData({...formData, email: e.target.value })
 }
 function handleChangeSubject(e){
  setFormData({...formData, subject: e.target.value })
 }
 function handleChangeMessage(e){
  setFormData({...formData, message: e.target.value })
 }

  return (
    <section>
      <div className='touch_title'>
        <h1>Get in Touch</h1>
        <p>Have questions about Noble or just want to say hello?</p>
        <p>Drop us a line and a memeber of our team will get to you shortly</p>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <input
            style={{borderColor: submitted && !formData.firstName ? 'red' : '#5C5C5C',}}
            className='full_input'
            type="text"
            placeholder="Name"
            onChange={handleChangeFirstName}
            name="firstName"
            value={formData.firstName}
        />
        {submitted && !formData.firstName ? <span>Please enter the data</span> : ''}
         <input
            style={{borderColor: submitted && !formData.venueName ? 'red' : '#5C5C5C',}}
            className='full_input'
            type="text"
            placeholder="Venue Name"
            onChange={handleChangeVenueName}
            name="venueName"
            value={formData.venueName}
            
        />
        
        <span className='full_half_input'>
            <input
              style={{borderColor: submitted && !formData.venueCity ? 'red' : '#5C5C5C',}}
              className='half_input'
              type="text"
              placeholder="Venue City"
              onChange={handleChangeVenueCity}
              name="venueCity"
              value={formData.venueCity}
          />
            <input
              style={{borderColor: submitted && !formData.stateCity ? 'red' : '#5C5C5C',}}
              className='half_input half_input_right'
              type="text"
              placeholder="State City"
              onChange={handleChangeStateCity}
              name="stateCity"
              value={formData.stateCity}
          />
        </span>
        
         <input
            style={{borderColor: submitted && !formData.email ? 'red' : '#5C5C5C',}}
            className='full_input'
            type="text"
            placeholder="Email"
            onChange={handleChangeEmail}
            name="email"
            value={formData.email}
        />
         <input
            style={{borderColor: submitted && !formData.subject ? 'red' : '#5C5C5C',}}
            className='full_input'
            type="text"
            placeholder="Subject"
            onChange={handleChangeSubject}
            name="subject"
            value={formData.subject}
        />
         <input
            style={{borderColor: submitted && !formData.message ? 'red' : '#5C5C5C',}}
            className='message_input'
            type="text"
            placeholder="Message"
            onChange={handleChangeMessage}
            name="message"
            value={formData.message}
        />
        <button>Send</button>
      </form>
      <div className='touch_title'>
        <h1>DOWNLOAD OUR APP</h1>
        <div className='form_social_img'>
          <img src={AppStore} alt='$'/>
          <img src={GooglePlay} alt='$'/>
        </div>
      </div>
      <div className='form_contact'>
        <div className='form_contact_left'>
          <h1>NOTAB</h1>
          <p>Contact us:</p>
          <p>support@notab.com</p>
          <p>&copy; 2020 - NoTab &reg;</p>
        </div>
        <img className='form_blob_img' src={Blob} alt='#'/>
        <div className='form_contact_right'>
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
      </div>

      <div className='form_contact_small'>
        <div className='form_contact_top'>
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
        <div className='form_contact_bottom'>
          <h1>NOTAB</h1>
          <p>Contact us: support@notab.com</p>
          <p>&copy; 2020 - NoTab &reg;</p>
        </div>
        <img className='form_blob_img' src={Blob} alt='#'/>
        
      </div>
    </section>
  )
}

export default Form