import React from 'react'

import './Footer.css'
import External from './utilities/External'

export default function Footer() {
    return (

        <footer>
            <div className="wrap">
                <h1>Website designed by Kai Bonsol</h1>
                <h2>Interested in seeing the code for this? <br/>Check <External to='https://github.com/kaibonsol/kbonsol' text='this repository'/>.</h2>
            </div>
        </footer>
    )
}
