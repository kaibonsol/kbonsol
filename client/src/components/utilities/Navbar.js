import React from 'react'
import NavbarButton from './NavbarButton'

export default function Navbar() {


    return (
        <div className='navbar'>
            <ul>
                <NavbarButton imgUrl="contactlogo.png" to=""/>
                <NavbarButton imgUrl="devlogo.png" to=""/>
                <NavbarButton imgUrl="gitlogo.png" to=""/>
                <NavbarButton imgUrl="spotifylogo.png" to=""/>
            </ul>
        </div>
    )
}
