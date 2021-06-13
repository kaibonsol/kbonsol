/*
File: External.js
Author: Kai Bonsol
Purpose: Link element to external site that opens a new tab.
         props.to is the href and props.text is text of link element.
*/

import React from 'react'

export default function External(props) {
    return (
        <a href={props.to} rel='noreferrer' target='_blank'>{props.text}</a>
    )
}
