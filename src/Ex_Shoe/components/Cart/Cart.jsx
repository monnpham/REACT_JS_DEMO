/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class Card extends Component {
    renderTbody = () => {
        let { cart, handelRemove, handelPlus, handelminos } = this.props
        return cart.map((item) => {
            return <tr>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                    <img width={100} src={item.image} />
                </td>
                <td>
                    <button
                        onClick={() => {
                            handelminos(item.id)
                        }}
                        className="btn btn-danger">
                        -
                    </button>
                    <strong>{item.soluong}</strong>
                    <button
                        onClick={() => {
                            handelPlus(item.id)
                        }}
                        className="btn btn-success">
                        +
                    </button>
                </td>
                <td>
                    <button
                        onClick={() => {
                            handelRemove(item.id)
                        }}
                        className="btn btn-danger">Delete</button>
                </td>

            </tr >
        })
    }
    render() {
        return <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>{this.renderTbody()}</tbody>
        </table>
    }
}
