import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoRedux extends Component {
    render() {
        return (
            < div >
                <button
                    onClick={this.props.handelDescrease}
                    className="btn btn-danger">
                    -
                </button>
                <strong className="display-4 mx-5">{this.props.number}</strong>
                <button
                    onClick={this.props.handelIncrease}
                    className="btn btn-primary">
                    +
                </button>

            </div >
        )
    }
}
//lấy data từ redux chuyển thành props của component
let mapStateToProps = (state) => {
    //state : đến từ Store của redux
    return {
        number: state.soLuong,
    }
}
// đẩy data từ component len reducer của store (update data state của redux)
let mapDispathchToProps = (dispathch) => {
    return {
        handelIncrease: () => {
            let action = {
                type: "TANG",
            }
            dispathch(action)
        },
        handelDescrease: () => {
            let action = {
                type: "GIAM",
                payload: 10
            }
            dispathch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispathchToProps)(DemoRedux)