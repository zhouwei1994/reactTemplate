import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./navigation.scss";
class Navigation extends React.Component {
    render() {
        var pathName = this.props.location.pathname;
        if (pathName === "/" || /^\/order|\/news|\/my/.test(pathName)) {
            return <nav className="nav">
                <div className="footer_view">
                    <NavLink exact to="/" activeClassName="active">
                        <i></i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink exact to="/order" state={1223}>
                        <i></i>
                        <span>商城</span>
                    </NavLink>
                    <NavLink exact to="/news">
                        <i></i>
                        <span>消息</span>
                    </NavLink>
                    <NavLink exact to="/my">
                        <i></i>
                        <span>我的</span>
                    </NavLink>
                </div>
            </nav>
        } else {
            return "";
        }
    }
}
export default withRouter(Navigation);