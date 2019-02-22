import React, { Component } from "react";
import { connect } from 'react-redux';
class List extends Component {
    componentDidUpdate() {
        // console.log(store.getState().);
    }
    componentWillMount() {
    }
    render() {
        var items = this.props.listData;
        var listHtml = items.map((item, i) => {
            return <li key={i}>{item}</li>
        })
        return (
            <div>
                <ul>
                    {listHtml}
                </ul>
                <button onClick={this.props.onClick}>添加名字</button>
                <br />
                <br />
                <button onClick={this.props.setUserInfo}>修改token</button>
                <p>token:{this.props.userInfo.token}</p>
                <br />
                <button onClick={this.props.setOther}>修改other</button>
                <p>other:{this.props.other}</p>
                <br />
            </div>
        )
    }
}
let USER_INFO_TODO = {
    type: "USER_INFO_TODO",
    data: {
        token: ""
    }
};
let OTHER_TODO = {
    type: "OTHER_TODO",
    data: ""
};
let mapStateToProps = function (state) {
    return {
        userInfo: state.userInfo,
        other: state.other
    }
}
let mapDispatchToProps = function (dispatch) {
    return {
        setUserInfo: () => {
            USER_INFO_TODO.data.token = prompt("请输入token");
            return dispatch(USER_INFO_TODO)
        },
        setOther: () => {
            OTHER_TODO.data = prompt("请输入更多");
            return dispatch(OTHER_TODO)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);