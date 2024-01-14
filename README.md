English | [🇨🇳中文](README_ZH.md)
# moonquakes

<p align="center"><a href="https://moonquakes.io/" target="_blank" rel="noopener noreferrer"><img width="200" src="https://www.moonquakes.io/images/logo.png" alt="moonquakes logo"></a></p>
<p align="center">
    <a href="https://github.com/sunquakes/jsonrpc4go"><img alt="GitHub go.mod Go version (subdirectory of monorepo)" src="https://img.shields.io/github/go-mod/go-version/sunquakes/moonquakes?filename=go%2Fgo.mod"></a>
    <a href="https://github.com/sunquakes/jsonrpc4j"><img alt="Maven Central" src="https://img.shields.io/maven-central/v/com.sunquakes/jsonrpc4j"></a>
    <a href="https://github.com/hyperf/hyperf"><img src="https://img.shields.io/badge/hyperf-%3E=3.0-brightgreen.svg?maxAge=2592000" alt="Php Version"></a>
    <img alt="GitHub" src="https://img.shields.io/github/license/sunquakes/moonquakes?color=blue">
    <img alt="Docker Image Version (latest by date)" src="https://img.shields.io/docker/v/sunquakes/moonquakes?color=green">
</p> 

## Documentation
Visit [moonquakes.io](https://moonquakes.io).

## Description
Moonquakes is a demo project. It show how to intercommunicate in use of jsonrpc protocol in some web framework, those web framework is written by java, php or golang.

In moonquakes, the java framework is springboot, it use [jsonrpc4j](https://github.com/sunquakes/jsonrpc4j) to communicate with go and php framework; The php framework is [Hyperf](https://github.com/hyperf/hyperf), it has own [jsonrpc component](https://www.hyperf.wiki/3.0/#/en/json-rpc) to communicate with go and java framework; The go framework use [jsonrpc4go](https://github.com/sunquakes/jsonrpc4go) to communicate with java and php framework.

## Getting started
### IP
- Use ip. 
```shell
# Clone code.
git clone git@github.com:sunquakes/moonquakes.git

cd moonquakes

# Switch to branch main.
git switch main

# Build image.
docker-compose build

# Run docker container.
docker-compose up
```
### Registration & Discovery
- Use consul.
```shell
# Clone code.
git clone git@github.com:sunquakes/moonquakes.git

cd moonquakes

# Switch to branch consul.
git switch consul

# Build image.
docker-compose build

# Run docker container.
docker-compose up
```
- Use nacos.
```shell
# Clone code.
git clone git@github.com:sunquakes/moonquakes.git

cd moonquakes

# Switch to branch nacos.
git switch nacos

# Build image.
docker-compose build

# Run docker container.
docker-compose up
```
