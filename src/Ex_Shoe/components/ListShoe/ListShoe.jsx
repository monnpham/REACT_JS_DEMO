import React, { Component } from 'react'
import ItemShoe from '../ItemShoe/ItemShoe'

export default class ListShoe extends Component {
    renderList = () => {
        return this.props.list.map((item, index) => {
            return <ItemShoe
                handelAddToCart={this.props.handelBuy}
                handelDetail={this.props.handelDetail}
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
