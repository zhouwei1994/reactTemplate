# react
React项目练习案例

# 项目初始化
请完全按照以下步骤启动项目，请完全按照以下步骤启动项目，请完全按照以下步骤启动项目，重要的事情说三遍
```bash
git clone https://github.com/zhouwei1994/reactTemplate

cd reactTemplate

npm install

npm start
```

# 项目打包
```bash
npm run build
```

# 项目结构
```bash
├── config                      // webpack配置
├── node_modules                // 项目依赖包
├── public                      // 项目HTML文件
├── scripts                     // 项目运行、打包等配置文件
├── src                         // Ract Native
│   ├── components              // 所有组件
│   │    ├── common             // 常用组件
│   │    ├── header             // 项目头部组件
│   │    ├── module             // 项目组件
│   │    └── navigation         // 项目底部导航组件
│   ├── config                  // 项目配置文件
│   │    ├── axios.js           // axios配置
│   │    ├── env.js             // 开发环境/生产环境相关信息变更配置
│   │    ├── rem.js             // rem布局配置
│   │    └── utils.js           // 常用方法库
│   ├── images                  // 项目图片
│   │    └── tabIcon            // 底部导航图标
│   ├── router                  // 路由部分
│   │    └── index.js           // 具体页面导航配置
│   ├── stores                  // redux部分
│   │    └── index.js           // redux配置页面
│   ├── style                   // 公共样式
│   │    ├── common.js          // 样式初始化/公共样式
│   │    └── store.js           // scss的minin方法/颜色配置
│   ├── view                    // page模块聚合页
│   └── main.js                 // react配置主文件
├── package.json                // 项目配置信息
├── start.bat                   // 启动项目指令文件，点击即可打开cmd运行npm start
└── README.md                   // help

```