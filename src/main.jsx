import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
/* react 路由
 * BrowserRouter as Router 路由容器组件
 * Route 路由定义组件
 * Switch 未找到就显示404页面
 * Redirect 路由重定向
*/
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// rem配置文件
import './config/rem.js';
//公共样式scss
import './style/common.scss';
//antd-UI
import 'antd-mobile/dist/antd-mobile.css';
//底部导航
import Navigation from './components/navigation/navigation';
//404页面
import errorPage from './components/common/errorPage/errorPage';
//路由配置页面
import routes from './router';
//请求加载动画
import AxiosLoading from "./config/axios";
//数据商店
import { storeReducer, setCacheData } from "./stores";
//状态管理器加入数据
const store = createStore(storeReducer);
//加载的时候取出缓存数据
setCacheData().forEach(item => {
    store.dispatch(item);
});
render(
    <Provider store={store}>
        <Router basename="/">
            <div className="router-view">
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        ></Route>
                    ))}
                    {/* 404页面 */}
                    <Route component={errorPage}></Route>
                </Switch>
                <Navigation />
                <AxiosLoading></AxiosLoading>
            </div>
        </Router >
    </Provider>,
    document.getElementById('root')
);