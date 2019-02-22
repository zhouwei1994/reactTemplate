import React, { Component } from "react";
import "./errorPage.scss";
import { NavLink } from "react-router-dom";
import Header from "./../../header";
export default class ErrorPage extends Component {
    render() {
        return (
            <div className="errorPage">
                <Header text="页面丢失了"></Header>
                <h1>404页面</h1>
                <br />
                <NavLink exact to="/">返回首页</NavLink>
            </div>
        );
    }
} 