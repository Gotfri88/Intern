import React from 'react'
import './index.css'
import Hand from '../../Images/QR/QR_Hand.png'
import Glass from '../../Images/QR/QR_glass.png'
import NightLife from '../../Images/QR/QR_Nightlife.png'
import Darker from '../../Images/QR/QR_Darker.png'
import PhoneLeft from '../../Images/QR/QR_Top_phone.png'
import PhoneRight from '../../Images/QR/QR_Bottom_phone.png'
import AppStore from '../../Images/QR/QR_App_store.png'
import GooglePlay from '../../Images/QR/QR_Google_Play.png'
import Blob from '../../Images/QR/QR_blob.png'
import Logo from '../../Images/QR/QR_logo.png'
import PhoneQr from '../../Images/QR/QR_phone.png'
import Arrow from '../../Images/QR/QR_arrow.png'


function QrCode() {
  return (
    <section>
      <div className='containerb'>
            <img className='containerb_hand' src={Hand} alt='$'/> 
            <img className='containerb_glass' src={Glass} alt='$'/> 
            <img className='containerb_night_club' src={NightLife} alt='$'/> 
            <img className='containerb_darker' src={Darker} alt='$'/>
            <img className='containerb_phone_left' src={PhoneLeft} alt='$'/>
            <img className='containerb_phone_right' src={PhoneRight} alt='$'/>

            <div className='containerb_text'>
                <div className='social_info'>
                  <h1> QR code</h1>
                  <p>No more conflict situations due to wrond order. The guest selects the positions, and after thar an individual QR code of his order is generated</p>
                </div>
                
                <div  className='social'>
                  <img className='containerb_app_store' src={AppStore} alt='$'/>
                  <img className='containerb_google_play' src={GooglePlay} alt='$'/>
                </div>
            </div>
            <img className='containerb_blob' src={Blob} alt='$'/>
            <img className='containerb_logo' src={Logo} alt='$'/>
            <img className='containerb_phone' src={PhoneQr} alt='$'/>
            <img className='containerb_arrow' src={Arrow} alt='$'/>
            <p className='containerb_arrow_info'>Scan QR code</p>
            <div className='containerb_instructions'>
              <h1>Generate your QR-code</h1>
              <p>The guest QR code is scanned by the staff and automatically sent</p>
            </div>
        </div>
    </section>
  )
}

export default QrCode