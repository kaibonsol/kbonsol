import React from 'react'
import External from '../utilities/External'

import './Item.css'

function Item(props) {
    const data = props.data
    const src = data.src && <External to={data.src} text="Source" />
    const desc = data.desc && <div className="desc">{props.data.desc}. <div>{src}</div></div> 

    // if tbl is set then set li style to display:inline-block
    const style = data.tbl ? {display: "inline-block", marginRight:"10%", marginBottom:"5%"} : {display: "block"}

    return (
        <li style={style}>
            <div className="name">{data.name}</div>
            {desc}
        </li>
    )
}

export default Item
