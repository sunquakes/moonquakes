const {NewServer} = require('jsonrpc4js')
const {NewClient} = require('jsonrpc4js')
import * as net from 'net'
import * as http from 'http'

type Args = {
  a: number
  b: number
}

type Result = {
  c: number
}

class JsTcp {
  add(args: Args): Result {
    return {c : args.a + args.b }
  }
}

class JsHttp {
  add(args: Args): Result {
    return {c : args.a + args.b }
  }
}

async function main() {
  await new Promise((resolve) => {
    const port = 7001;
    const server = NewServer('tcp', port)
    server.register(new JsTcp())
    server.start((s: net.Server) => {
      resolve(s)
    })
  })

  await new Promise((resolve) => {
    const port = 7002;
    const server = NewServer('http', port);
    server.register(new JsHttp());
    server.start((s: http.Server) => {
      resolve(s)
    })
  })

  const phpTcpClient = new NewClient('php_tcp', 'tcp', `php:9503`)
  const phpHttpClient = new NewClient('php_http', 'http', `php:9504`)

  const javaTcpClient = new NewClient('java_tcp', 'tcp', `java-tcp:3201`)
  const javaHttpClient = new NewClient('java_http', 'http', `java-http:3202`)

  const goTcpClient = new NewClient('GoTcp', 'tcp', `go:3601`)
  const goHttpClient = new NewClient('GoHttp', 'http', `go:3602`)

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

    await sleep(5000);
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

main();