import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { baseUrl } from "./env";
import Loading from "./../components/common/loading";
import {
    prompt,
    $alert
} from "./utils";
global.$http = axios.create({
    baseURL: baseUrl + '/needle/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

class axiosLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //当前请求数
            requestNum: 0
        };
        this.setRequestNum = this.setRequestNum.bind(this);
    }
    setRequestNum(num) {
        this.setState({
            requestNum: this.state.requestNum + num
        });
    }
    componentDidMount() {
        const _this = this;
        // 添加一个请求拦截器
        global.$http.interceptors.request.use(function (config) {
            // 在请求发送之前做某事
            _this.setRequestNum(1);
            return config;
        }, function (error) {
            // 用请求错误做某事
            prompt("请求错误");
            _this.setRequestNum(-1);
            return Promise.reject(error);
        });
        // 添加一个响应拦截器
        global.$http.interceptors.response.use(function (response) {
            // 用响应数据做某事
            _this.setRequestNum(-1);
            if (response.data.success) {
                return response.data.data;
            } else if (parseInt(response.data.code) === 1000 || parseInt(response.data.code) === 1001) {
                $alert("您还未登录，请先登录", { type: 1 }, (res) => {
                    if (res.confirm) {
                        _this.props.history.push("/")
                    }
                })
                return undefined;
            } else if (prompt) {
                prompt(response.data.info);
                return undefined;
            }
        }, function (error) {
            // 用响应错误做某事
            _this.setRequestNum(-1);
            prompt("网络错误");
            return Promise.reject(error);
        });
    }
    render() {
        if (this.state.requestNum > 0) {
            return <Loading></Loading>
        } else {
            return "";
        }
    }
}

export default withRouter(axiosLoading);