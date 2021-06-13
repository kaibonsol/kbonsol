import React from 'react'
import Item from './Item'
import Meter from './Meter'

import "./Panel.css"

function Panel(props) {
    // note: this && operator is like the ternary operator except only ?
    const contentComponents = props.content && props.content.map(desc => <h2>{desc}</h2>)
    const meterComponents = props.meters && props.meters.map(meter => <Meter head={meter.head} val={meter.value}/>)
    const itemComponents = props.items && props.items.map(item => <Item data={item}/>)

    return (
        <div className="panel">
            <h2 className="title">{props.title}</h2>
            {props.content && contentComponents}
            <table>
                {props.meters && meterComponents}
            </table>
            <ul>
                {props.items && itemComponents}
            </ul>
        </div>
    )
}

export default Panel
