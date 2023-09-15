import React, { Component } from "react";

export default class DetailPhone extends Component {
    render() {
        let { tenSP, hinhAnh, manHinh, giaBan } = this.props.data;
        return (
            <div className="row p-5 border ">
                <img src={hinhAnh} alt="" className="col-4" />
                <div className="col-8">
                    <h3>Tên :{tenSP}</h3>
                    <h3>Màn hình :{manHinh}</h3>
                    <h3>Giá bán :{giaBan}</h3>
                </div>
            </div>
        );
    }
}
