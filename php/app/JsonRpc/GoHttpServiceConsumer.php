<?php
declare(strict_types=1);

namespace App\JsonRpc;

use Hyperf\RpcClient\AbstractServiceClient;

class GoHttpServiceConsumer extends AbstractServiceClient implements GoServiceInterface
{
    protected string $serviceName = 'GoHttpService';

    protected string $protocol = 'jsonrpc-http';

    public function Add(int $a, int $b): int
    {
        return $this->__request(__FUNCTION__, compact('a', 'b'));
    }
}
