import React, { Component } from "react";
import "./list.scss";
import Header from "./../../components/header";
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header text="列表">
                    <button>确定</button>
                </Header>
                列表
            </div>
        );
    }
} 