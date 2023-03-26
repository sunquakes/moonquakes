---
title: Overview 
lang: en-US
---
## Introduction
Moonquakes is a micro-service solution. It composed three parts now. A golang component, a maven repository and a php framework.

Every component composed a server and a client, and use JSON-RPC communicate each other, the server can use tcp or http protocol.  

The requests and responses, sent between client and server.

The request body looks like:
```json
{"id":"1604283212", "jsonrpc":"2.0", "method":"IntRpc/Add", "params":{"a":1,"b":6}}
```
The response body looks like:
```json
{"id":"1604283212", "jsonrpc":"2.0", "result":7}
```
More JSON-RPC detail: [JSON-RPC](https://www.jsonrpc.org/)

## Why JSON-RPC
- It is simple and lightweight(but powerful)
- It is easy to debug and mock
- It add only small overhead

## Get The Demo
### Get Code
- https
```shell
git clone https://github.com/sunquakes/moonquakes.git
```
- ssh
```shell
git clone git@github.com:sunquakes/moonquakes.git
```
### Three Branch
The demo code include three branch: main and consul and nacos. The branch main show how to use node ip to intercommunicate directly in three difference language project. The branch consul and nacos show how to use registration and discovery to intercommunicate in three difference language project. 
#### Branch main
- View The Code
```shell
git checkout main
```
- Preview 
```shell
# Pull demo docker images from dockerhub.
docker pull sunquakes/moonquakes:latest
# Run docker container.
docker run -itd --name moonquakes sunquakes/moonquakes:latest /bin/bash
# View container logs after the container started.
docker logs moonquakes -f
```
#### Branch consul 
- View The Code
```shell
git checkout consul 
```
- Preview
```shell
# Pull demo docker images from dockerhub.
docker pull sunquakes/moonquakes-consul:latest
# Run docker container.
docker run -itd --name moonquakes-consul sunquakes/moonquakes-consul:latest /bin/bash
# View container logs after the container started.
docker logs moonquakes-consul -f
```
#### Branch nacos
- View The Code
```shell
git checkout nacos 
```
- Preview
```shell
# Pull demo docker images from dockerhub.
docker pull sunquakes/moonquakes-nacos:latest
# Run docker container.
docker run -itd --name moonquakes-nacos sunquakes/moonquakes-nacos:latest /bin/bash
# View container logs after the container started.
docker logs moonquakes-nacos -f
```

