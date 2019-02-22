import React, { Component } from 'react';
import "./order.scss";
import Header from "./../../components/header";
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="orderPage">
        <Header text="订单"></Header>
      </div>
    );
  }

  activeValue() {
    //设置状态
    // this.setState((state) => {
    //   return {
    //     a: 33333
    //   }
    // });
    this.setState({
      a: 33333
    });
    //替换状态
    // this.replaceState({
    //   b: 33333
    // });
    //设置属性
    // this.setProps(function (props) {
    //   return {
    //     value: "发送到发大水"
    //   }
    // });
    //替换属性
    // this.setProps(function (props) {
    //   return {
    //     b: 33333
    //   }
    // });
  }
}

export default Order;
