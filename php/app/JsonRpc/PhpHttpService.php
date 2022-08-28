<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcServer\Annotation\RpcService;

#[RpcService(name: "PhpHttpService", protocol: "jsonrpc-http", server: "jsonrpc-http")]
class PhpHttpService implements PhpServiceInterface
{
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }
}
