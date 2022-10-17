<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcServer\Annotation\RpcService;

#[RpcService(name: "PhpTcpService", protocol: "jsonrpc-tcp", server: "jsonrpc-tcp")]
class PhpTcpService implements PhpServiceInterface
{
    public function add(array $args): array
    {
        $result = [];
        $result["c"] = $args["a"] + $args["b"];
        return $result;
    }
}
