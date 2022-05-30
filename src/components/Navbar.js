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
                    <li className={'nav-item1'}>
                        <a href='#ELEVATION WORSHIP' onClick={closeMenu}>ELEVATION WORSHIP</a>
                    </li>
                    <li className={'nav-item'}>
                        <a href='#MUSIC' onClick={closeMenu}>MUSIC</a>
                    </li>
                    <li className={'nav-item'}>
                        <a href='#RESOURCES' onClick={closeMenu}>RESOURCES</a>
                    </li>
                    <li className={'nav-item'}>
                        <a href='#SHOP' onClick={closeMenu}>SHOP</a>
                    </li>
                    <svg className='Carrito' aria-hidden="true" focusable="false" data-prefix="far" data-icon="cart-shopping" class="svg-inline--fa fa-cart-shopping w-5 hover:text-white target:text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM475.6 240L520.6 80H131.1L161.6 240H475.6zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"></path></svg>
                </ul>
                <svg className='Lupa' aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass hover:text-white target:text-white w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"></path></svg>
            </nav>
            
        </div>
    )
}

export default Navbar
