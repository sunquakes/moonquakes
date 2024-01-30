---
title: 概览
lang: zh-CN
---

## 介绍

Moonquakes是一个微服务解决方案。由3部分组成。一个golang组件、一个maven依赖和一个php框架。

每部分都包含一个服务端和客户端，消息体是JSON-RPC协议，服务端可以用http协议或tcp协议进行通信。

通过客户端请求服务端的方式。

请求的消息体例：

```json
{
  "id": "1604283212",
  "jsonrpc": "2.0",
  "method": "IntRpc/Add",
  "params": {
    "a": 1,
    "b": 6
  }
}
```

响应的消息体例：

```json
{
  "id": "1604283212",
  "jsonrpc": "2.0",
  "result": 7
}
```

更多关于JSON-RPC协议的见: [JSON-RPC](https://www.jsonrpc.org/)

## 为什么用JSON-RPC

- 简单并且轻量级（但功能强大）
- 易于调试
- 网络开消小

## 获取demo

demo包含3个分支： main分支、consul分支和nacos分支。main分支展示了如何用节点ip在3种语言的项目间进行直接通信。consul分支和nacos分支展示了如何用注册发现在3种语言的项目间进行通信。

### 直接使用ip

- 使用ip

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

### 服务和发现

- 使用注册中心consul

```shell
# 克隆代码
git clone git@github.com:sunquakes/moonquakes.git

cd moonquakes

# 切换到consul分支
git switch consul

# 编译镜像
docker-compose build

# 启动容器
docker-compose up
```

- 使用注册中心nacos

```shell
# 克隆代码
git clone git@github.com:sunquakes/moonquakes.git

cd moonquakes

# 切换到nacos分支
git switch nacos

# 编译镜像
docker-compose build

# 启动容器
docker-compose up
```
