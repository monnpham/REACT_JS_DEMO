/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class DetaillShoe extends Component {

    render() {
        let { image, id } = this.props.detail
        return (
            <div>

                <img width={600} src={image} />


            </div>
        )
    }
}
