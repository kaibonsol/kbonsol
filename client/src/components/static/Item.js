import React from 'react'
import External from '../utilities/External'

import './Item.css'

function Item(props) {
    
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


    const data = props.data
    const src = data.src && <External to={data.src} text="Source" />
    const desc = data.desc && <div className="desc">{props.data.desc}. <div>{src}</div></div> 

    // if tbl is set then set li style to display:inline-block
    const style = data.tbl ? {display: "inline-block", marginRight:"10%", marginBottom:"5%"} : 
                           dimensions.width >= 528 ? {display: "block"} : {margin:"auto", marginLeft:"-10%", display:"block"}


    return (
        <li style={style}>
            <div className="name">{data.name}</div>
            {desc}
        </li>
    )
}

export default Item
