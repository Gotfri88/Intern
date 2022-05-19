import React from 'react'
import './index.css'
import Person from '../../Images/Scanner_person.png'
import Darker from '../../Images/Scanner_dark.png'
import PhoneLeft from '../../Images/Scanner_phone_left.png'
import PhoneRight from '../../Images/Scanner_phone_right.png'

function Scanner() {
  return (
    <section>
        <div className='container'>
            <img className='container_person' src={Person} alt='$'/>
            <img className='container_person_darker' src={Darker} alt='$'/>

            <div className='container_phone'>
                <img className='container_phone_left' src={PhoneLeft} alt='$'/>
                <img className='container_phone_right' src={PhoneRight} alt='$'/>
            </div>
            <div className='container_text'>
                <h1> ID Scanner</h1>
                <p>Scan, verify, and collect data on each person that walks through your door to humanize your data. You also get a digital 86 list as well as a citywide ban list to keep your venue safe</p>
            </div>
            <div className='container_phone-small'>
                <img className='container_phone_top' src={PhoneLeft} alt='$'/>
                <img className='container_phone_bottom' src={PhoneRight} alt='$'/>
            </div>
        </div>
    </section>
  )
}

export default Scanner