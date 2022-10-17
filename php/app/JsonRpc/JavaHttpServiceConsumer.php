<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcClient\AbstractServiceClient;

class JavaHttpServiceConsumer extends AbstractServiceClient implements JavaServiceInterface
{
    protected string $serviceName = 'JavaHttpService';

    protected string $protocol = 'jsonrpc-http';

    public function add(array $args): array
    {
        return $this->__request(__FUNCTION__, compact('args'));
    }
}
