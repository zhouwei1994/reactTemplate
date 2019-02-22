/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = '';
let imgBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = "https://www.zhenwang.so";
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = "https://www.zhenwang.so";
}
export {
    baseUrl,
    imgBaseUrl,
}