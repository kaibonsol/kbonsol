import React from 'react'
import Logo from './static/Logo'
import Navbar from './utilities/Navbar'
import './Header.css'

function Header() {

    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })

    React.useEffect(() => {

        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        
        }

        // add and remove resize event listener

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }

    })

    // conditional styles
    const browserStyle = {
        display: "flex",
        justifyContent: "space-between"
    }

    const navbarPush = {
        marginRight: "10%",
    }
    const navbarPush2 = {
        marginRight: "20%",
    }


    return (
        <>
        <header style={dimensions.width < 1042 ? {} : browserStyle}>
            <Logo />
            <Navbar style={dimensions.width < 528 ? navbarPush2 : navbarPush}/>
        </header>
        <div>Rendered at {dimensions.width} x {dimensions.height}</div>
        </>
    )
}

export default Header

