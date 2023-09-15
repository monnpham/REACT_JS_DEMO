import React, { Component } from 'react'

export default class Ex_Car extends Component {
    state = {
        color: "black"
    }
    handleChangeColor = (color) => {
        this.setState({ color: color })
    }
    render() {
        // let color = this.state
        let imgPath = `./resource/CarBasic/products/${this.state.color}-car.jpg`
        return (
            <div className='container'>
                <div className='row'>
                    <img src={imgPath} className='col-6' />
                    <div className='col-6'>
                        {/* // anfn viết tắt */}
                        <button onClick={() => {
                            this.handleChangeColor("red")
                        }} className='btn btn-danger'>Red</button>
                        <button onClick={() => {
                            this.handleChangeColor("black")
                        }} className='btn btn-dark'>Black</button>
                        <button onClick={() => {
                            this.handleChangeColor("silver")
                        }} className='btn btn-secondary'>Silver</button>
                    </div>
                </div>
            </div>
        )
    }
}
