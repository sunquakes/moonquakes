---
home: true
heroImage: /images/logo.png
actionText: 快速开始 →
actionLink: /zh/guide/
features:
  - title: 跨语言
    details: 现在支持golang/java/javascript/php, 后续会支持更多语言。
  - title: 轻量
    details: 每种语言的框架中只需要引入一个组件, 用 http 或 tcp 协议进行通信.
  - title: 标准化
    details: 实现了JSON-RPC协议
footer: Apache-2.0 Licensed | Copyright © 2023-present Shing Rui
---

---

## 快速开始

```shell
# 克隆代码
git clone git@github.com:sunquakes/moonquakes.git

cd moonquakes

# 切换到main分支
git switch main

# 编译镜像
docker-compose build

# 启动容器
docker-compose up
```
