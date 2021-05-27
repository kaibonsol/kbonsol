import React from 'react'
import NavbarButton from './NavbarButton'

export default function Navbar() {


    return (
        <div className='navbar'>
            <ul>
                {/* <NavbarButton imgUrl="contactlogo.png" link="" name="Contact"/> */}
                <NavbarButton imgUrl="devlogo.png" link="https://devpost.com/kaibonsol" name="DevPost"/>
                <NavbarButton imgUrl="gitlogo.png" link="https://github.com/kaibonsol" name="GitHub"/>
                <NavbarButton imgUrl="linkedinlogo.png" link="https://www.linkedin.com/in/kai-bonsol/" name="LinkedIn"/>
                <NavbarButton imgUrl="spotifylogo.png" link="https://open.spotify.com/user/12134345729?si=f890f6551cc5410e" name="Spotify"/>
            </ul>
        </div>
    )
}
