---
title: Overview 
lang: en-US
---
## Introduction

Moonquakes is composed three parts now. A golang component, a springboot starter and a php framework.

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

