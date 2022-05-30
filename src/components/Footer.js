import React from 'react'
import Logo from '../../public/Img/Logo.png'
import Church from '../../public/Img/Church.png'
import './Footer.css'
//import { BsYoutube } from 'react-icons/fa/';

const Footer = () => {

    return(
        <div className='Footer'>
            <img className='Logo' src={Logo} alt="Logo" />
            <button className='About1' >ABOUT</button>
            <button className='BOOKING' >BOOKING</button>
            <h2 className='Copy'>© 2022 Elevation Worship • All right reserved •</h2>
            <button className='policy' >Privacy Policy</button>
            
        </div>
        
    )
}

export default Footer

