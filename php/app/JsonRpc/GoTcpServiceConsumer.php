<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcClient\AbstractServiceClient;

class GoTcpServiceConsumer extends AbstractServiceClient implements GoServiceInterface
{
    protected string $serviceName = 'GoTcp';

    protected string $protocol = 'jsonrpc';

    public function Add(array $args): array
    {
        return $this->__request(__FUNCTION__, compact('args'));
    }
}
