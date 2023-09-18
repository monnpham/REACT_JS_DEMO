/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class ItemShoe extends Component {
    convertNameShoe = (name) => {
        let maxLength = 12
        if (name.length > maxLength) {
            return name.slice(0, maxLength) + "..."
        } else {
            return name
        }
    }
    render() {
        let { image, name } = this.props.item
        return (
            <div className='col-3'>
                <div className="card text-left">
                    <img className="card-img-top" src={image} />
                    <div className="card-body">
                        <h4 className="card-title">{this.convertNameShoe(name)}</h4>
                        <p className="card-text">
                            <button
                                onClick={() => {
                                    this.props.handelDetail(this.props.item)
                                }}
                                className='btn btn-info mr-2'>View</button>
                            <button
                                onMouseOver={() => {
                                    this.props.handelAddToCart(this.props.item)
                                }}
                                className='btn btn-success'>Add
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
