import React, { useState } from 'react'
import {Link} from 'react-scroll'


import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const [navbar, SetNavbar] = useState(false)

    const ChangeColor = () => {
        if (window.scrollY >= 80) {
            SetNavbar(true)
        } else {
            SetNavbar(false)
        }
    }

    window.addEventListener('scroll', ChangeColor)

    return (
        <div className={navbar ? 'header active' : 'header'}>
            <nav className='navbar'>
                <ul className={click ? "nav-menu" : "nav-menu"}>
                    <li className={navbar ? 'nav-item1' : 'nav-item1'}>
                        <a href='#ELEVATION WORSHIP' onClick={closeMenu}>ELEVATION WORSHIP</a>
                    </li>
                    <li className={navbar ? 'nav-item' : 'nav-item'}>
                        <a href='#MUSIC' onClick={closeMenu}>MUSIC</a>
                    </li>
                    <li className={navbar ? 'nav-item' : 'nav-item'}>
                        <a href='#RESOURCES' onClick={closeMenu}>RESOURCES</a>
                    </li>
                    <li className={navbar ? 'nav-item' : 'nav-item'}>
                        <a href='#SHOP' onClick={closeMenu}>SHOP</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
