<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://hyperf.wiki
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */
namespace App\Controller;

class IndexController extends AbstractController
{
    public function index()
    {
        $cli = new \Swoole\Coroutine\Http\Client('127.0.0.1', 3202);
        $cli->setHeaders([
            'Content-Type' => 'application/json',
        ]);
        $cli->set([ 'timeout' => 10]);
        $cli->post('http://127.0.0.1:3202', [
            'headers' => [
                'Content-Type' => 'application/json',
            ],
            'body' => '{"jsonrpc":"2.0","method":"\/java_http\/add","params":{"a":47,"b":87},"id":"632bea6d8ae79","context":[]}',
        ]);
        echo $cli->body;
        $cli->close();
        return $cli->body;

        $client = new \GuzzleHttp\Client(['base_uri' =>'http://127.0.0.1:3202']);
        $detail = $client->post('', [
            'headers' => [
                'Content-Type' => 'application/json',
            ],
            'body' => '{"jsonrpc":"2.0","method":"\/java_http\/add","params":{"a":47,"b":87},"id":"632bea6d8ae79","context":[]}',
        ]);
        $response = $detail->getStatusCode();
        var_dump($response);
        $user = $this->request->input('user', 'Hyperf');
        $method = $this->request->getMethod();

        return [
            'method' => $method,
            'message' => "Hello {$user}.",
        ];
    }
}
