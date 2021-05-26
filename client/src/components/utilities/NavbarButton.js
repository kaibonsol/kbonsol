import React from 'react'

export default function NavbarButton(props) {
    return (
        <li><a href={props.link}><img alt={props.name} src={props.imgUrl}/></a></li>
    )
}