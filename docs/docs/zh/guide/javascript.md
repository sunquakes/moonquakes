---
title: Javascript
lang: en-US
---

## 安装

```bash
pnpm add jsonrpc4js
```

## 快速开始

### 服务端

```ts
const {NewServer} = require('jsonrpc4js')

class TcpRpc {
  add(a: number, b: number): number {
    return a + b
  }
}

const port = 3200
const server = NewServer('tcp', port)
server.register(new TcpRpc())
server.start()
```

### 客户端

```ts
const {TcpClient} = require('jsonrpc4js')

const client = new TcpClient('TcpRpc', `localhost:3200`)
let res = await client.call('add', 1, 2) // 3
```

## 服务注册发现

### consul

```ts
const {Consul} = require('jsonrpc4js')

const discovery = new jsonrpc4js.Consul('http://localhost:8500')

// 设置服务端和客户端注册中心
// const server = NewServer('tcp', port, discovery)
// const client = NewClient('TcpRpc', 'tcp', discovery)
```

### nacos

```ts
const {Nacos} = require('jsonrpc4js')

const discovery = new jsonrpc4js.Nacos('http://localhost:8848')

// 设置服务端和客户端注册中心
// const server = NewServer('tcp', port, discovery)
// const client = NewClient('TcpRpc', 'tcp', discovery)
```

### 测试

```bash
pnpm test
```
