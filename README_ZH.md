[English](README.md) | 🇨🇳中文
# moonquakes

<p align="center"><a href="https://moonquakes.io/zh/" target="_blank" rel="noopener noreferrer"><img width="200" src="https://www.moonquakes.io/images/logo.png" alt="moonquakes logo"></a></p>
<p align="center">
    <a href="https://github.com/sunquakes/jsonrpc4go"><img alt="GitHub go.mod Go version (subdirectory of monorepo)" src="https://img.shields.io/github/go-mod/go-version/sunquakes/moonquakes?filename=go%2Fgo.mod"></a>
    <a href="https://github.com/sunquakes/jsonrpc4j"><img alt="Maven Central" src="https://img.shields.io/maven-central/v/com.sunquakes/jsonrpc4j"></a>
    <a href="https://github.com/hyperf/hyperf"><img src="https://img.shields.io/badge/hyperf-%3E=3.0-brightgreen.svg?maxAge=2592000" alt="Php Version"></a>
    <img alt="GitHub" src="https://img.shields.io/github/license/sunquakes/moonquakes?color=blue">
    <img alt="Docker Image Version (latest by date)" src="https://img.shields.io/docker/v/sunquakes/moonquakes?color=green">
</p> 

## 说明
Moonquakes是一个演示项目。它展示了如何在一些web框架中使用jsonrpc协议进行通信，这些web框架是由java、php或golang编写的。

在moonquakes中，java框架用的是springboot，它使用 [jsonrpc4j](https://github.com/sunquakes/jsonrpc4j) 与go和php框架通信；php框架是 [Hyperf](https://github.com/hyperf/hyperf) ，它有自己的 [jsonrpc组件](https://www.hyperf.wiki/3.0/#/en/json-rpc) 来与go和java框架通信；go框架使用 [jsonrpc4go](https://github.com/sunquakes/jsonrpc4go) 与java和php框架通信。

## 文档 
查看 [moonquakes.io](https://moonquakes.io/zh/).

## 开始演示
### 直接使用ip
- 使用ip
```shell
# 克隆代码
git clone git@github.com:sunquakes/moonquakes.git
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
# 切换到nacos分支
git switch nacos
# 编译镜像
docker-compose build
# 启动容器
docker-compose up
```
