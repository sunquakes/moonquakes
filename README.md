English | [🇨🇳中文](README_ZH.md)
# moonquakes
<p align="center"><a href="https://moonquakes.io" target="_blank" rel="noopener noreferrer"><img width="200" src="https://www.moonquakes.io/images/logo.png" alt="moonquakes logo"></a></p>

## 🚀 Description
Moonquakes is a demo project. It show how to intercommunicate in use of jsonrpc protocol in some web framework, those web framework is written by java, php or golang.

In moonquakes, the java framework is springboot, it use [jsonrpc4j](https://github.com/sunquakes/jsonrpc4j) to communicate with go and php framework; The php framework is [Hyperf](https://github.com/hyperf/hyperf), it has own [jsonrpc component](https://www.hyperf.wiki/3.0/#/en/json-rpc) to communicate with go and java framework; The go framework use [jsonrpc4go](https://github.com/sunquakes/jsonrpc4go) to communicate with java and php framework.

## 📖 Getting started
### IP
- Use ip.(view code: git checkout main) 
```shell
# Pull demo docker images from dockerhub.
docker pull sunquakes/moonquakes:latest
# Run docker container.
docker run -itd --name moonquakes sunquakes/moonquakes:latest /bin/bash
# View container logs after the container started.
docker logs moonquakes -f
```
### Registration & Discovery
- Use consul.(view code: git checkout consul)
```shell
# Pull demo docker images from dockerhub.
docker pull sunquakes/moonquakes-consul:latest
# Run docker container.
docker run -itd --name moonquakes-consul sunquakes/moonquakes-consul:latest /bin/bash
# View container logs after the container started.
docker logs moonquakes-consul -f
```
- Use nacos.(view code: git checkout nacos)
```shell
# Pull demo docker images from dockerhub.
docker pull sunquakes/moonquakes-nacos:latest
# Run docker container.
docker run -itd --name moonquakes-nacos sunquakes/moonquakes-nacos:latest /bin/bash
# View container logs after the container started.
docker logs moonquakes-nacos -f
```

## 🖼️ Preview
![alt preview](preview.gif)