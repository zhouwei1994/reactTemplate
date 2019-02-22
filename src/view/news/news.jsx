import React, { Component } from "react";
import "./news.scss";
import Header from "./../../components/header";
import { Button, Popover, Icon, Tabs, WhiteSpace, Badge } from 'antd-mobile';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const tabs = [
    { title: <Badge text={'3'}>待付款</Badge> },
    { title: <Badge dot>待发货</Badge> },
    { title: <Badge dot>待收货</Badge> },
    { title: <Badge dot>待评价</Badge> },
    { title: <Badge dot>售后中</Badge> },
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: '',
        };
    };
    onSelect = (opt) => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    render() {
        return (
            <div>
                <Header text="消息消息消息消息消息消息消息消息消息消息消息">
                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={[
                            (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                            (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                            (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                <span style={{ marginRight: 5 }}>疑问</span>
                            </Item>),
                        ]}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    >
                        <Icon type="ellipsis" style={{
                            height: '100%',
                            paddingRight: "0.6rem",
                            marginRight: '-0.60rem',
                            display: 'flex',
                            alignItems: 'center',
                        }} />
                    </Popover>
                </Header>
                <WhiteSpace />
                <Tabs tabs={tabs}
                    initalPage={'t2'}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        订单列表
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        订单列表
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        订单列表
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        订单列表
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        订单列表
                    </div>
                </Tabs>
                <Button>Start</Button>
            </div>
        );
    }
}