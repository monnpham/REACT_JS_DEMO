import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Foodter from './Foodter'
import Navigate from './Navigate'

export default class Ex_Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='row'>
                    <div className='col-4 p-0'>
                        <Navigate />
                    </div>
                    <div className='col-8 p-0'>
                        <Content />
                    </div>
                </div>

                <Foodter />

            </div>
        )
    }
}
// rcc