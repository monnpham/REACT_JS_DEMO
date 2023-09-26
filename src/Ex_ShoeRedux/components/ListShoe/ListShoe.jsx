import React, { Component } from 'react'
import ItemShoe from '../ItemShoe/ItemShoe'
import { connect } from 'react-redux'

class ListShoe extends Component {
    renderList = () => {
        return this.props.shoeArr.map((item, index) => {
            return <ItemShoe
                // handelDetail={this.props.handelDetail}
                key={index} item={item} />
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderList()}
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        shoeArr: state.shoe.dataShoe
    }
}

export default connect(mapStateToProps)(ListShoe)