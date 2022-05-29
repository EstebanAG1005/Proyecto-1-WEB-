import React, { useState } from 'react'
import logo from '../../public/Img/Oveja.jpg'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#Home' onClick={closeMenu}>Music</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Resources' onClick={closeMenu}>Resources</a>
                    </li>
                    <li className='nav-item'>
                        <a href='Shop' onClick={closeMenu}>Shop</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
