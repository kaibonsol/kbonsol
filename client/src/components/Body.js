import React, { Component } from 'react'
import Panel from './static/Panel'

import './Body.css'
import FadeInSection from './utilities/FadeInSection'

export class Body extends Component {
    
    constructor() {
        super()
        this.state = {
            loading: true,
            resume: {
                "panels":[{"content":[]}]
            }
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("/resume/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading:false,
                    resume: data
                })
            })
    }
    
    render() {
        if(this.state.loading) {
            return (
                <div className="body">
                    <h1>Loading...</h1>
                </div> 
            )
        }

        const resume = this.state.resume
        const panelComponents = resume.panels.map(panel => {
            return <FadeInSection><Panel title={panel.title} content={panel.desc} meters={panel.meters} items={panel.items}/></FadeInSection> 
        })

        return (
            <div className="body">
                <h1>{resume.welcomeMessage}</h1>
                <h2>{resume.welcomeMessage2}</h2>
                {panelComponents}
            </div>
        )
    }
}

export default Body
