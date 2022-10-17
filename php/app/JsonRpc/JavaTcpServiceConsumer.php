<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcClient\AbstractServiceClient;

class JavaTcpServiceConsumer extends AbstractServiceClient implements JavaServiceInterface
{
    protected string $serviceName = 'JavaTcpService';

    protected string $protocol = 'jsonrpc';

    public function add(array $args): array
    {
        return $this->__request(__FUNCTION__, compact('args'));
    }
}
