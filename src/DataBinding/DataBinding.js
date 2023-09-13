import React, { Component } from 'react'

export default class DataBinding extends Component {
    user = "Mon Pham"
    renderCard = () => {
        return (
            <div className="card text-left w-25">
                <img className="card-img-top" src="./logo192.png" alt />
                <div className="card-body">
                    <h4 className="card-title">{this.user}</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>
        )
    }
    render() {
        let titel = "wc to BC-56"
        return (
            <div>
                <h2>DataBinding</h2>
                <h3>{titel}</h3>
                <h2>{this.user}</h2>
                <div>{this.renderCard()}</div>
            </div>
        )
    }
}
