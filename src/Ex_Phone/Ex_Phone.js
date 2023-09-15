import React, { Component } from "react";
import ListPhone from "./ListPhone";
import DetailPhone from "./DetailPhone";
import { phoneArr } from "./Data";

export default class Ex_Phone extends Component {
    state = {
        phoneArr: phoneArr,
        detail: phoneArr[0],
    };
    handleChangeDetail = (phone) => {
        this.setState({ detail: phone });
    };

    render() {
        return (
            <div className="container">
                <h2>Ex_Phone</h2>
                <ListPhone handleViewDetail={this.handleChangeDetail} list={this.state.phoneArr} />
                <DetailPhone data={this.state.detail} />
            </div>
        );
    }
}
