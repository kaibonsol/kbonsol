import React from 'react'

import "./Meter.css"

function Meter(props) {
    console.log(props)
    const styles = {
        width:"12%"
    }
    return (
        <tr>
            <td style={styles}><h3>{props.head}</h3></td>
            <td><meter max={10} min={0} value={props.val}></meter></td>
        </tr>
    )
}

export default Meter
