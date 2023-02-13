<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcClient\AbstractServiceClient;

class GoHttpServiceConsumer extends AbstractServiceClient implements GoServiceInterface
{
    protected string $serviceName = 'GoHttp';

    protected string $protocol = 'jsonrpc-http';

    public function Add(array $args): array
    {
        return $this->__request(__FUNCTION__, compact('args'));
    }
}
