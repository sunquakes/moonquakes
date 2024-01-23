"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { NewServer, NewClient, Nacos } = require('jsonrpc4js');
class TcpRpc {
    add(a, b) {
        return a + b;
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => {
            const port = 7001;
            const server = NewServer('tcp', port);
            server.register(new TcpRpc());
            server.start((s) => {
                resolve(s);
            });
        });
        yield new Promise((resolve) => {
            const port = 7002;
            const server = NewServer('tcp', port);
            server.register(new TcpRpc());
            server.start((s) => {
                resolve(s);
            });
        });
        const discovery = new Nacos('http://localhost:8848');
        const phpTcpClient = new NewClient('php_tcp', 'tcp', discovery);
        const phpHttpClient = new NewClient('php_http', 'http', discovery);
        //
        // const javaTcpClient = new NewClient('java_tcp', 'tcp', discovery)
        // const javaHttpClient = new NewClient('java_http', 'http', discovery)
        //
        // const goTcpClient = new NewClient('GoTcp', 'tcp', discovery)
        // const goHttpClient = new NewClient('GoHttp', 'http', discovery)
        while (true) {
            let a, b, res;
            try {
                a = getRandomInt(0, 100);
                b = getRandomInt(0, 100);
                res = yield phpTcpClient.call('add', { a, b });
                console.info(`[tcp] Typescript asked:\"${a}+${b}=?\"; PHP answered:\"${res.c}\"`);
                a = getRandomInt(0, 100);
                b = getRandomInt(0, 100);
                res = yield phpHttpClient.call('add', { a, b });
                console.info(`[http] Typescript asked:\"${a}+${b}=?\"; PHP answered:\"${res.c}\"`);
                // a = getRandomInt(0, 100)
                // b = getRandomInt(0, 100)
                // res = await javaTcpClient.call('add', {a, b})
                // console.info(`[tcp] Typescript asked:\"${a}+${b}=?\"; Java answered:\"${res.c}\"`)
                //
                // a = getRandomInt(0, 100)
                // b = getRandomInt(0, 100)
                // res = await javaHttpClient.call('add', {a, b})
                // console.info(`[http] Typescript asked:\"${a}+${b}=?\"; Java answered:\"${res.c}\"`)
                //
                // a = getRandomInt(0, 100)
                // b = getRandomInt(0, 100)
                // res = await goTcpClient.call('Add', {a, b})
                // console.info(`[tcp] Typescript asked:\"${a}+${b}=?\"; Go answered:\"${res.c}\"`)
                //
                // a = getRandomInt(0, 100)
                // b = getRandomInt(0, 100)
                // res = await goHttpClient.call('Add', {a, b})
                // console.info(`[http] Typescript asked:\"${a}+${b}=?\"; Go answered:\"${res.c}\"`)
            }
            catch (error) {
                console.error(error);
            }
            yield sleep(5000);
        }
    });
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
main();
