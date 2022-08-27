<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcServer\Annotation\RpcService;

#[RpcService(name: "HttpService", protocol: "jsonrpc-http", server: "jsonrpc-http")]
class HttpService implements CalculatorServiceInterface
{
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }
}
