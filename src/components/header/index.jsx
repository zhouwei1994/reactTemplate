import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.backPage = this.backPage.bind(this);
    }
    backPage() {
        this.props.history.goBack();
    }
    componentDidMount() {
    }
    render() {
        return <header>
            <div className="header_view">
                <div className="backIcon" onClick={this.backPage}>
                    <svg viewBox="0 0 1024 1024" v-if="!back">
                        <path d="M256 512.064c0 8.192 3.136 16.384 9.344 22.656l384 351.936a32 32 0 0 0 45.248-45.248L333.248 512.064l361.344-329.472a32 32 0 0 0-45.248-45.248l-384 352.064A32.128 32.128 0 0 0 256 512.064z"></path>
                    </svg>
                </div>
                <div className="title">
                    {this.props.text}
                </div>
                <div className="features">
                    {this.props.children}
                </div>
            </div>
        </header >
    }
}
export default withRouter(Header);