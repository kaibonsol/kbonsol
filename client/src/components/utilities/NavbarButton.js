import React from 'react'

export default function NavbarButton(props) {

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

    const browserStyle = {
        display: "inline-block"
    }

    const mobileStyle = {
        display: "inline-block"
    }

    return (
        <li style={dimensions.width < 1026 ? mobileStyle : browserStyle}><a href={props.link} rel='noreferrer' target='_blank'><img className='img-ico' alt={props.name} src={props.imgUrl}/></a></li>
    )
}
