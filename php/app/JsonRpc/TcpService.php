<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcServer\Annotation\RpcService;

#[RpcService(name: "TcpService", protocol: "jsonrpc-tcp", server: "jsonrpc-tcp")]
class TcpService implements CalculatorServiceInterface
{
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }
}
