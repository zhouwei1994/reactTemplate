import React, { Component } from "react";
import Header from "./../../components/header";
import "./home.scss";
import { Prompt } from "react-router-dom";
import List from "./../../components/module/list/list";
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptWhen: false,
            listData: ["小明", "小周", "小王", "老宋"]
        };
        this.getWhen = this.getWhen.bind(this);
        this.addListName = this.addListName.bind(this);
        this.historyJump = this.historyJump.bind(this);
        this.getRequest = this.getRequest.bind(this);
    }
    getWhen() {
        this.setState({
            promptWhen: !this.state.promptWhen
        });
    }
    addListName() {
        var listData = this.state.listData;
        var name = prompt("请输入你要添加的名字");
        this.setState({
            listData: [...listData, name]
        });
    }
    historyJump() {
        this.props.history.push("/list")
    }
    getRequest() {
        global.$http.get('common/ad?page=1100')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="homePage">
                <Header text="首页">
                    <button>确定</button>
                </Header>
                <Prompt message="确定要离开吗？" when={this.state.promptWhen}></Prompt>
                <p>首页首页首页首页首页首页首页首页首页首页</p>
                <button onClick={this.getWhen}>{
                    this.state.promptWhen ? "提示弹窗" : "不提示弹窗"
                }</button>
                <List onClick={this.addListName} listData={this.state.listData}></List>
                <button onClick={this.historyJump}>跳转到消息页</button>
                <br />
                <button onClick={this.getRequest}>请求接口</button>
            </div>
        );
    }
} 