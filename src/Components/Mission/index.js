import React from 'react'
import './index.css'
import MissionPhone from '../../Images/Mission_phone.png'
import MissionPhoneSmall from '../../Images/Mission_phone_small.png'

function Mission() {
  return (
    <section className='section_mission'>
        <div className='boxes_info'>
            <div className='box_info '>
                <div className='box_left'>
                    <h3>Would like to become a member, please contact us</h3> 
                    <p>support@notab.com</p>
                </div>
            </div>
            <div className='box_info '>
                <div className='box_right'>
                    <h3>Already a partner?</h3>
                    <p>Login</p> 
                </div>
                
            </div>
        </div>
        <div className='box_mission'>
            <img className='mission_phone' src={MissionPhone} alt='#'/> 
            <div className='mission_info'>
                <h1>Our mission and vision</h1>
                <p>While technology is our sweet spot, we've developed our vision alongside our customers to ensure your everyday problems are solved through simplistic tools. And as your buisiness grows, we'll grow right alongside with you.</p>
            </div>
        </div>
        <img className='mission_phone-small' src={MissionPhoneSmall} alt='#'/> 
    </section>
  )
}

export default Mission