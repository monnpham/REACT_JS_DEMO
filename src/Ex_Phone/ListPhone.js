import React, { Component } from "react";
import ItemPhone from "./ItemPhone";
export default class ListPhone extends Component {
    renderList = () => {
        // renderList trả về danh sách comoponent <ItemPhone/>
        return this.props.list.map((item, index) => {
            return <ItemPhone handleClickView={this.props.handleViewDetail} item={item} key={index} />;
        });
    };
    render() {
        return <div className="row">{this.renderList()}</div>;
    }
}
