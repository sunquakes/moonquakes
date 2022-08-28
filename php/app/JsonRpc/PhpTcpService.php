<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcServer\Annotation\RpcService;

#[RpcService(name: "PhpTcpService", protocol: "jsonrpc-tcp", server: "jsonrpc-tcp")]
class PhpTcpService implements PhpServiceInterface
{
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }
}
