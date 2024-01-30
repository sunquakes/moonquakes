---
title: Javascript
lang: en-US
---

## Installing

```bash
pnpm add jsonrpc4js
```

## Quick Start

### Server

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

### Client

```ts
const {TcpClient} = require('jsonrpc4js')

const client = new TcpClient('TcpRpc', `localhost:3200`)
let res = await client.call('add', 1, 2) // 3
```

## Service registration & discovery

### consul

```ts
const {Consul} = require('jsonrpc4js')

const discovery = new Consul('http://localhost:8500')

// Set discovery in server and client.
// const server = NewServer('tcp', port, discovery)
// const client = NewClient('TcpRpc', 'tcp', discovery)
```

### nacos

```ts
const {Nacos} = require('jsonrpc4js')

const discovery = new Nacos('http://localhost:8848')

// Set discovery in server and client.
// const server = NewServer('tcp', port, discovery)
// const client = NewClient('TcpRpc', 'tcp', discovery)
```

## Test

```bash
pnpm test
```