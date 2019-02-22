import {
    modifyJson
} from "../config/utils.js";
import {
    combineReducers
} from 'redux';
//注册一个储存对象
const storage = window.sessionStorage;
//缓存浏览器的数据名称
const cacheNameList = ["USER_INFO_TODO", "OTHER_TODO"];
//用户数据
function userInfo(
    state = {
        token: "fsfsfsdfsd"
    }, action) {
    switch (action.type) {
        case 'USER_INFO_TODO':
            if (action.data) {
                var userText = modifyJson(action.data, state);
                storage.setItem('USER_INFO_TODO', JSON.stringify(userText));
                return userText;
            } else {
                return state;
            }
        default:
            return state
    }
};

function other(state = "", action) {
    switch (action.type) {
        case "OTHER_TODO":
            if (action.data) {
                storage.setItem('OTHER_TODO', JSON.stringify(action.data));
                return action.data;
            } else {
                return state;
            }
        default:
            return state
    }
}
export const storeReducer = combineReducers({
    userInfo,
    other
});
export var setCacheData = function () {
    var cacheList = [];
    for (var item of cacheNameList) {
        let getData = storage.getItem(item);
        if (getData) {
            cacheList.push({
                type: item,
                data: JSON.parse(getData)
            });
        }
    }
    return cacheList;
};