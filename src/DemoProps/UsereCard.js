import React, { Component } from 'react'

export default class UsereCard extends Component {
    // this.props nhận data được truyền từ BÊN NGOÀI vào component
    render() {
        //faker.js npm
        console.log(this.props)
        return (
            < div >
                <div className="card text-left">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text display-4">{this.props.userData}</p>
                        <button
                            onClick={this.props.handleChange}
                            className='btn btn-danger'>Change username to Bob</button>
                    </div>
                </div>
            </div >
        )
    }
}
