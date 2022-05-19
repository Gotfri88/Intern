import React from 'react'
import './index.css'
import CubeImg from '../../Images/Landing_cube.png'
import HeaderPerson from '../../Images/Landing_headerPerson.png'
import Stick from '../../Images/Landing_stick.png'
import LandingPhone from '../../Images/Landing_phone.png'   
import AppStore from '../../Images/AppStore.png'   
import GooglePlay from '../../Images/GooglePlay.png' 
// import Blob from '../../Images/blob.png'
function Landing() {
  return (
    <div className='container'>

        <section className="landing_sec">
            <header className="landing_header">
                <div className="header_flex">
                    <img className="cube_img" src={CubeImg} alt="#"/>
                    <h2>NoTab</h2>  
                </div>
                <div className="landing_header landing_header_right">
                        <img className="person_img" src={HeaderPerson} alt="#"/>
                        <p className='landing_login'>Login</p>  
                </div>
            
            </header>

            <div className="landing_flex">
                <div className="left">
                    <h1>A platform that works smarter</h1>
                    <div className="box">
                        <img className="stick" src={Stick} alt="#"/>
                        <p>NoTab allows bars & nightclubs to manage, understand, and grow their buisiness from a single dashboard</p>
                    </div>
                </div>
                <img className="right" src={LandingPhone} alt="#"/>
                
            </div>
            <footer>
                <h1>DOWNLOAD OUR APP</h1>
                <div className="footer_links">
                    <img src={AppStore} alt="#"/>
                    <img src={GooglePlay} alt="#"/>
                </div>
            </footer>
        </section>
    </div>  
    
  )
}

export default Landing