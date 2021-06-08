import React from 'react'

function Panel(props) {
    const contentComponents = props.content.map(desc => <h2>{desc}</h2>)
    return (
        <div>
            {contentComponents}
        </div>
    )
}

export default Panel
