import React from 'react'
import './index.css'
import Phone from '../../Images/Benefits/Benefits-phone.png'

function Benefits() {
  return (
    <section>
      <div className='benefits_title'>
        <h1>Easier ordering.</h1>
        <h1>Happier guests.</h1>
        <p>NoTab makes it simple for patrons to easily</p>
      </div>
      <div className='benefits_box'>
        <img src={Phone} alt='$' />  
        <p className='benefits_box item item1'>No more lost or forgotten credit cards</p>
        <p className='benefits_box item item2'>No more lost or forgotten credit cards</p>
        <p className='benefits_box item item3'>No more split your tab</p>
        <p className='benefits_box item item4'>Skip the line</p>
      </div>
    
    </section>
  )
}

export default Benefits