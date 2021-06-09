import React from 'react'

import "./Panel.css"

function Panel(props) {
    if(props.content)
    {
        const contentComponents = props.content.map(desc => <h2>{desc}</h2>)
        return (
            <div className="panel">
                {contentComponents}
            </div>
        )
    }
    else
    {
       return (<></>)
    }
}

export default Panel
