import React, { Component } from "react";

export default class ItemPhone extends Component {
    render() {
        console.log("Aitem props", this.props.item);
        //
        let { hinhAnh, tenSP } = this.props.item;
        return (
            <div className="card text-left col-4">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">
                        <button
                            onClick={() => {
                                this.props.handleClickView(this.props.item);
                            }}
                            className="btn btn-info"
                        >
                            Xem chi tiết
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}
