---
title: 概览
lang: zh-CN
---
## 介绍
moonquakes是一个微服务解决方案。由3部分组成。一个golang组件、一个maven依赖和一个php框架。

每部分都包含一个服务端和客户端，消息体是JSON-RPC协议，服务端可以用http协议或tcp协议进行通信。 

通过客户端请求服务端的方式。

请求的消息体例：
```json
{"id":"1604283212", "jsonrpc":"2.0", "method":"IntRpc/Add", "params":{"a":1,"b":6}}
```
响应的消息体例：
```json
{"id":"1604283212", "jsonrpc":"2.0", "result":7}
```
更多关于JSON-RPC协议的见: [JSON-RPC](https://www.jsonrpc.org/)

## 为什么用JSON-RPC
- 简单并且轻量级（但功能强大）
- 易于调试
- 网络开消小

## 获取demo
### 获取代码
- https
```shell
git clone https://github.com/sunquakes/moonquakes.git
```
- ssh
```shell
git clone git@github.com:sunquakes/moonquakes.git
```
### 3个分支
demo包含3个分支： main分支、consul分支和nacos分支。main分支展示了如何用节点ip在3种语言的项目间进行直接通信。consul分支和nacos分支展示了如何用注册发现在3种语言的项目间进行通信。
#### main分支
- 获取代码
```shell
git checkout main
```
- 预览 
```shell
# 从dockerhub拉取镜像
docker pull sunquakes/moonquakes:latest
# 启动docker容器
docker run -itd --name moonquakes sunquakes/moonquakes:latest /bin/bash
# 容器完全启动后，查看容器日志
docker logs moonquakes -f
```
#### consul分支 
- 获取代码
```shell
git checkout consul 
```
- 预览
```shell
# 从dockerhub拉取镜像
docker pull sunquakes/moonquakes-consul:latest
# 启动docker容器
docker run -itd --name moonquakes-consul sunquakes/moonquakes-consul:latest /bin/bash
# 容器完全启动后，查看容器日志
docker logs moonquakes-consul -f
```
#### nacos分支
- 获取代码
```shell
git checkout nacos 
```
- 预览
```shell
# 从dockerhub拉取镜像
docker pull sunquakes/moonquakes-nacos:latest
# 启动docker容器
docker run -itd --name moonquakes-nacos sunquakes/moonquakes-nacos:latest /bin/bash
# 容器完全启动后，查看容器日志
docker logs moonquakes-nacos -f
```

