<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcClient\AbstractServiceClient;

class JsHttpServiceConsumer extends AbstractServiceClient implements JsServiceInterface
{
    protected string $serviceName = 'JsHttpService';

    protected string $protocol = 'jsonrpc-http';

    public function add(array $args): array
    {
        return $this->__request(__FUNCTION__, compact('args'));
    }
}
