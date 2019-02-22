import React, { Component } from "react";
//404页面
import ErrorPage from '../errorPage/errorPage';
import Spinner from "./../spinner"
import "./index.scss";
export default class Loading extends Component {
    render() {
        if (this.props.error) {
            return <ErrorPage></ErrorPage>;
        } else {
            return <div className="loadingView">
                <div>
                    <Spinner type="android"></Spinner>
                    <p>{this.props.text || '加载中'}</p>
                </div>
            </div>;
        }

    }
}