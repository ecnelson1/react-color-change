import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <div style= {{
                background: this.props.colorChoice,
                height: '500px',
                width: '500px',
            }}>
            </div>
        )
    }
}

