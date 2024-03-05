<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcClient\AbstractServiceClient;

class JsTcpServiceConsumer extends AbstractServiceClient implements JsServiceInterface
{
    protected string $serviceName = 'JsTcpService';

    protected string $protocol = 'jsonrpc';

    public function add(array $args): array
    {
        return $this->__request(__FUNCTION__, compact('args'));
    }
}
