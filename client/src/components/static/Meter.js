import React from 'react'

import "./Meter.css"

function Meter(props) {
    return (
        <div>
            <h3>C++</h3>
            <meter max={10} min={0} value={5}></meter>
        </div>
    )
}

export default Meter
