<?php

namespace App\JsonRpc;

use Hyperf\RpcServer\Annotation\RpcService;

@RpcService(name="CalculatorService", protocol="jsonrpc-tcp", server="jsonrpc-tcp")
class CalculatorService
{
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }
}
