const {NewServer} = require('jsonrpc4js')
const {NewClient} = require('jsonrpc4js')
const {Consul} = require('jsonrpc4js')
import * as net from 'net'
import * as http from 'http'

class TcpRpc {
  add(a: number, b: number): number {
    return a + b
  }
}

async function main() {
  const discovery = new Consul('http://consul-server:8500?check=true&instanceId=1')

  await new Promise((resolve) => {
    const port = 7001;
    const server = NewServer('tcp', port, discovery)
    server.register(new TcpRpc())
    server.start((s: net.Server) => {
      resolve(s)
    })
  })

  await new Promise((resolve) => {
    const port = 7002;
    const server = NewServer('tcp', port, discovery);
    server.register(new TcpRpc());
    server.start((s: http.Server) => {
      resolve(s)
    })
  })

  const phpTcpClient = new NewClient('php_tcp', 'tcp', discovery)
  const phpHttpClient = new NewClient('php_http', 'http', discovery)

  const javaTcpClient = new NewClient('java_tcp', 'tcp', discovery)
  const javaHttpClient = new NewClient('java_http', 'http', discovery)

  const goTcpClient = new NewClient('GoTcp', 'tcp', discovery)
  const goHttpClient = new NewClient('GoHttp', 'http', discovery)

  while (true) {
    let a, b, res

    try {
      a = getRandomInt(0, 100)
      b = getRandomInt(0, 100)
      res = await phpTcpClient.call('add', {a, b})
      console.info(`[tcp] Typescript asked:\"${a}+${b}=?\"; PHP answered:\"${res.c}\"`)

      a = getRandomInt(0, 100)
      b = getRandomInt(0, 100)
      res = await phpHttpClient.call('add', {a, b})
      console.info(`[http] Typescript asked:\"${a}+${b}=?\"; PHP answered:\"${res.c}\"`)

      a = getRandomInt(0, 100)
      b = getRandomInt(0, 100)
      res = await javaTcpClient.call('add', {a, b})
      console.info(`[tcp] Typescript asked:\"${a}+${b}=?\"; Java answered:\"${res.c}\"`)

      a = getRandomInt(0, 100)
      b = getRandomInt(0, 100)
      res = await javaHttpClient.call('add', {a, b})
      console.info(`[http] Typescript asked:\"${a}+${b}=?\"; Java answered:\"${res.c}\"`)

      a = getRandomInt(0, 100)
      b = getRandomInt(0, 100)
      res = await goTcpClient.call('Add', {a, b})
      console.info(`[tcp] Typescript asked:\"${a}+${b}=?\"; Go answered:\"${res.c}\"`)

      a = getRandomInt(0, 100)
      b = getRandomInt(0, 100)
      res = await goHttpClient.call('Add', {a, b})
      console.info(`[http] Typescript asked:\"${a}+${b}=?\"; Go answered:\"${res.c}\"`)
    } catch (error) {
      console.error(error)
    }

    await sleep(1000);
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

main();