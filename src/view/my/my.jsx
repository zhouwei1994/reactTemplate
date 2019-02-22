import React, { Component } from "react";
import "./my.scss";
import Header from "./../../components/header";
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header text="我的"></Header>
                我的
                {/* <Loading></Loading> */}
            </div>
        );
    }
} 