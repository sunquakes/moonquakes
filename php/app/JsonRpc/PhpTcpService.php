<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcServer\Annotation\RpcService;

#[RpcService(name: "php_tcp", protocol: "jsonrpc", server: "jsonrpc-tcp", publishTo: "consul")]
class PhpTcpService implements PhpServiceInterface
{
    public function add(array $args): array
    {
        $result = [];
        $result["c"] = $args["a"] + $args["b"];
        return $result;
    }
}
