[English](php/README.md) | 🇨🇳中文
# moonquakes

## 🚀 说明
Moonquakes是一个演示项目。它展示了如何在一些web框架中使用jsonrpc协议进行通信，这些web框架是由java、php或golang编写的。

在moonquakes中，java框架用的是springboot，它使用 [jsonrpc4j](https://github.com/sunquakes/jsonrpc4j) 与go和php框架通信；php框架是 [Hyperf](https://github.com/hyperf/hyperf) ，它有自己的 [jsonrpc组件](https://www.hyperf.wiki/3.0/#/en/json-rpc) 来与go和java框架通信；go框架使用 [jsonrpc4go](https://github.com/sunquakes/jsonrpc4go) 与java和php框架通信。

## 📖 开始演示
```shell
# 从dockerhub拉取镜像
docker pull sunquakes/moonquakes:latest
# 启动docker容器
docker run -itd --name moonquakes sunquakes/moonquakes:latest /bin/bash
# 容器完全启动后，查看容器日志
docker logs moonquakes
```