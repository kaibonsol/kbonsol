import React from 'react'
import Meter from './Meter'

import "./Panel.css"

function Panel(props) {
    if(props.content)
    {
        const contentComponents = props.content.map(desc => <h2>{desc}</h2>)
        return (
            <div className="panel">
                <h2 className="title">{props.title}</h2>
                {contentComponents}
                <Meter />
            </div>
        )
    }
    else
    {
       return (<></>)
    }
}

export default Panel
