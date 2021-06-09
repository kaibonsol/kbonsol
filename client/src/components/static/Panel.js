import React from 'react'
import Meter from './Meter'

import "./Panel.css"

function Panel(props) {
    // note: this && operator is like the ternary operator except only ?
    const contentComponents = props.content && props.content.map(desc => <h2>{desc}</h2>)
    const meterComponents = props.meters && props.meters.map(meter => <Meter head={meter.head} val={meter.value} />)

    return (
        <div className="panel">
            <h2 className="title">{props.title}</h2>
            {contentComponents}
            {props.meters && meterComponents}
        </div>
    )
}

export default Panel
