import React, { Component } from 'react'

import './Body.css'

export class Body extends Component {
    
    constructor() {
        super()
        this.state = {
            loading: false,
            resume: {}
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
        const resume = this.state.resume
        return (
            <div className="body">
                <h1>{resume.welcomeMessage}</h1>
                <h2>{resume.welcomeMessage2}</h2>
            </div>
        )
    }
}

export default Body
