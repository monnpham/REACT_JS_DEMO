/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class DetaillShoe extends Component {

    render() {
        let { detail } = this.props
        return (
            <div>
                <img width={600} src={detail.image} />
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        detail: state.shoe.detail
    }
}
export default connect(mapStateToProps)(DetaillShoe)
