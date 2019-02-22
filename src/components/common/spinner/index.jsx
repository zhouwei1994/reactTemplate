import React, { Component } from "react";
import "./index.scss";
import SpinnerJs from './spinner'
const types = ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral'];

export default class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type || "android"
        };
        this.spinnerName = this.spinnerName.bind(this);
    }

    componentDidMount() {
        SpinnerJs(this.refs.spinner, this.state.type);
    }
    spinnerName() {
        var type = this.props.type || "android";
        let rs = "";
        for (let i = 0; i < types.length; i++) {
            rs = "vux-spinner-" + type
        }
        return rs
    }

    render() {
        return (
            <span ref='spinner' className={
                "vux-spinner vux-spinner-" + this.state.type
            }></span >
        )
    }
}