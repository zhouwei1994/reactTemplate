// 组件拆分加载工具
import Loadable from "react-loadable";
//加载中组件
import Loading from "../components/common/loading";
export default [
    {
        path: "/",
        name: "首页",
        exact: true,
        component: Loadable({
            loader: () => import('../view/home/home'),
            loading: Loading
        })
    },
    {
        path: "/order",
        name: "订单",
        exact: true,
        component: Loadable({
            loader: () => import('../view/order/order'),
            loading: Loading
        })
    },
    {
        path: "/news",
        name: "消息",
        exact: true,
        component: Loadable({
            loader: () => import('../view/news/news'),
            loading: Loading
        })
    },
    {
        path: "/my",
        name: "我的",
        exact: true,
        component: Loadable({
            loader: () => import('../view/my/my'),
            loading: Loading
        })
    },
    {
        path: "/list",
        name: "列表",
        exact: true,
        component: Loadable({
            loader: () => import('../view/list/list'),
            loading: Loading
        })
    },
]