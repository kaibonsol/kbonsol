import React from 'react'

export default function NavbarButton(props) {

    return (
        <li><a href={props.link} rel='noreferrer' target='_blank'><img className='img-ico' alt={props.name} src={props.imgUrl}/></a></li>
    )
}
