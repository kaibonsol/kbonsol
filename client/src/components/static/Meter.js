import React from 'react'

import "./Meter.css"

function Meter(props) {
    console.log(props)
    return (
        <div>
            <h3>{props.head}</h3>
            <meter max={10} min={0} value={props.val}></meter>
        </div>
    )
}

export default Meter
