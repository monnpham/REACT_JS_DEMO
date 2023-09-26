import React, { Component } from 'react'
import Cart from '../components/Cart/Cart'
import ListShoe from '../components/ListShoe/ListShoe'
import DetaillShoe from '../components/DetaillShoe/DetaillShoe'
import { dataShoe } from '../components/Data/Data'
import { message } from 'antd'

export default class Ex_Shoe extends Component {
    state = {
        dataShoe: dataShoe,
        detail: dataShoe[0],
        cart: []
    }
    handelAdd = (shoe) => {
        // coppy và push
        // var cloneCart = [...this.state.cart, shoe]
        // this.setState({ cart: cloneCart })
        // kiểm tra sp chọn đã có trong cart chưa sau đó giải quyết push update
        // soluong  
        let cloneCart = [...this.state.cart]
        var index = cloneCart.findIndex((item) => {
            return item.id === shoe.id
        })
        if (index === -1) {
            let newShoe = { ...shoe, soluong: 1 }
            cloneCart.push(newShoe)
        } else {
            cloneCart[index].soluong++
        }
        this.setState({
            cart: cloneCart
        })
    }
    handelRemove = (shoeId) => {
        let cloneCart = [...this.state.cart]
        let index = cloneCart.findIndex
            ((item) => item.id === shoeId)

        cloneCart.splice(index, 1)
        this.setState({ cart: cloneCart })
        //thông báo xóa
        message.success("Xóa thành công")
    }
    handelPlus = (shoeId) => {
        let cloneCart = [...this.state.cart]
        let index = cloneCart.findIndex
            ((item) => item.id === shoeId)
        cloneCart[index].soluong++
        this.setState({ cart: cloneCart })
        message.success("Thêm thành công")
    }
    handelminos = (shoeId) => {
        let cloneCart = [...this.state.cart]
        let index = cloneCart.findIndex
            ((item) => item.id === shoeId)
        if (cloneCart[index].soluong === 1) {
            cloneCart.splice(index, 1)
        } else {
            cloneCart[index].soluong--
        }
        this.setState({ cart: cloneCart })
    }
    handelDetail = (shoe) => {
        this.setState({ detail: shoe })
    }
    render() {
        return (
            <div >
                <h1>Shoe Shop</h1>
                <div className="row">
                    <div className='col-6'>
                        <Cart
                            handelPlus={this.handelPlus}
                            handelminos={this.handelminos}
                            handelRemove={this.handelRemove}
                            cart={this.state.cart}
                        />
                    </div>
                    <div className='col-6'>
                        <ListShoe
                            handelDetail={this.handelDetail}
                            handelBuy={this.handelAdd}
                            list={this.state.dataShoe}
                        />
                    </div>
                </div>
                <DetaillShoe detail={this.state.detail} />

            </div>
        )
    }
}
