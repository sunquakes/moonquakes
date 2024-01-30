---
title: Overview
lang: en-US
---

## Introduction

Moonquakes is a micro-service solution. It composed three parts now. A golang component, a maven repository and a php
framework.

Every component composed a server and a client, and use JSON-RPC communicate each other, the server can use tcp or http
protocol.

The requests and responses, sent between client and server.

The request body looks like:

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

The response body looks like:

```json
{
  "id": "1604283212",
  "jsonrpc": "2.0",
  "result": 7
}
```

More JSON-RPC detail: [JSON-RPC](https://www.jsonrpc.org/)

## Why JSON-RPC

- It is simple and lightweight(but powerful)
- It is easy to debug and mock
- It add only small overhead

## Get The Demo

The demo code include three branch: main and consul and nacos. The branch main show how to use node ip to
intercommunicate directly in three difference language project. The branch consul and nacos show how to use registration
and discovery to intercommunicate in three difference language project.

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
