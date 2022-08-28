<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcClient\AbstractServiceClient;

class GoTcpServiceConsumer extends AbstractServiceClient implements GoServiceInterface
{
    protected string $serviceName = 'GoTcpService';

    protected string $protocol = 'jsonrpc-tcp';

    public function Add(int $a, int $b): int
    {
        return $this->__request(__FUNCTION__, compact('a', 'b'));
    }
}
