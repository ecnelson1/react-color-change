import React, { Component } from 'react'
import Display from '../components/Display';

export default class RandomColor extends Component {
    state = {
        displayColor: '#19F319',
        colors: ['#671BCC','#08F1E6', '#020202', '#FFFA00', '#0009FF' ]
    };

    colorSelector = () =>{
        const colors = this.state.colors;
        const selectedColor = Math.floor(Math.random() * colors.length);
        this.setState({displayColor: colors[selectedColor]})
    };

    componentDidMount = async() => {
        await setInterval(this.colorSelector, 1000);
    };

    render() {
        return (
            <div>
                <Display colorChoice = {this.state.displayColor}/>
            </div>
        )
    }
}

