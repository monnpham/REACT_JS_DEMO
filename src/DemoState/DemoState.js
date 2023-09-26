import React, { Component } from 'react'

export default class DemoState extends Component {
    state = {
        number: 1,
        user: "Mon"
    }
    // this.setState : dùng để  update giá trị  của state, this.setState  là bất đồng bộ 
    Increase = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    Decrease = () => {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }
    }
    // cách 1
    // ChangenBob = () => {
    //     this.setState({
    //         user: "Bob"
    //     })
    // }
    // ChangenMon = () => {
    //     this.setState({
    //         user: "Mon"
    //     })
    // }
    // cách 2
    ChangeName = (name) => {
        this.setState({ user: name })
    }
    render() {
        return (
            <div className='text-center'>
                <button onClick={this.Decrease} className='btn btn-danger'>-</button>
                <span className='display-4 mx-5'> {this.state.number}</span>
                <button onClick={this.Increase} className='btn btn-warning'>+</button>
                <h2 className={`display-1 ${this.state.user === "Mon" ? "text-secondary" : "text-primary"}`}> {this.state.user}</h2>
                {/* // cách 1 */}
                {/* <button onClick={this.ChangenBob} className='btn btn-primary'>change to Bob</button>
                <button onClick={this.ChangenMon} className='btn btn-secondary'>change to Mon</button> */}
                {/* // cách 2 */}
                <button onClick={() => { this.ChangeName("Bob") }} className='btn btn-primary'>change to Bob</button>
                <button onClick={() => { this.ChangeName("Mon") }} className='btn btn-secondary'>change to Mon</button>

            </div>
        )
    }
}
