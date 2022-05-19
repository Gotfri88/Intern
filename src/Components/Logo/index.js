import React from 'react'
import './index.css'
import LogoBackgroundImg from '../../Images/Logo/Logo_background.png'
import LogoPhoneImg from '../../Images/Logo/Logo_phone.png'
import LogoPhoneBackgroundImg from '../../Images/Logo/Logo_phone_back.png'
function Logo() {
  return (
    <section>
        <div className='logo_box'>
            <img className='logo_background_img' src={LogoBackgroundImg} alt=''/>
            <img className='logo_phone_img' src={LogoPhoneImg} alt=''/>
            <img className='logo_phone_background_img' src={LogoPhoneBackgroundImg} alt=''/>
        </div>
    </section>
  )
}

export default Logo