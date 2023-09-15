import React, { Component } from 'react'
import { listMovie } from './data'

export default class RenderWithMap extends Component {
    renderListmovie = () => {
        return (
            listMovie.map((item, index) => {
                return <div key={index} className='col-3'>
                    <div className="card text-left">
                        <img style={{ height: "300px", borderRadius: "20px" }} className="card-img-top" src={item.hinhAnh} alt />
                        <div className="card-body">
                            <p className="card-text">{item.tenPhim}</p>
                        </div>
                    </div>
                </div>
            })
        )
    }
    render() {
        return (
            <div className='container'>
                <h2>RenderWithMap</h2>
                <div className='row'>{this.renderListmovie()}</div>
            </div>
        )
    }
}
