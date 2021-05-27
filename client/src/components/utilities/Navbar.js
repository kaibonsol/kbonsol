import React from 'react'
import NavbarButton from './NavbarButton'

export default function Navbar() {


    return (
        <div className='navbar'>
            <ul>
                <NavbarButton imgUrl="contactlogo.png" link="/" name="Contact"/>
                <NavbarButton imgUrl="devlogo.png" link="/" name="DevPost"/>
                <NavbarButton imgUrl="gitlogo.png" link="/" name="GitHub"/>
                <NavbarButton imgUrl="spotifylogo.png" link="/" name="Spotify"/>
            </ul>
        </div>
    )
}
