import React, { Component } from 'react'
import Cart from '../components/Cart/Cart'
import ListShoe from '../components/ListShoe/ListShoe'
import DetaillShoe from '../components/DetaillShoe/DetaillShoe'


export default class Ex_ShoeRedux extends Component {

    render() {
        return (
            <div >
                <h1>Shoe Shop</h1>
                <div className="row">
                    <div className='col-6'>
                        <Cart />

                    </div>
                    <div className='col-6'>
                        <ListShoe />
                    </div>
                </div>
                <DetaillShoe />

            </div>
        )
    }
}
