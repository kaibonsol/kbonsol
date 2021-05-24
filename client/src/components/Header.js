import React from 'react'
import Logo from './static/Logo'
import Navbar from './utilities/Navbar'
import './Header.css'

export default function Header() {
    return (
        <header>
            <Logo />
            <Navbar />
        </header>
    )
}
