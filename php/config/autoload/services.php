<?php

declare(strict_types=1);
/**
 * This file is part of Hyperf.
 *
 * @link     https://www.hyperf.io
 * @document https://hyperf.wiki
 * @contact  group@hyperf.io
 * @license  https://github.com/hyperf/hyperf/blob/master/LICENSE
 */
return [
    'enable' => [
        'discovery' => true,
        'register' => true,
    ],
    'consumers' => [
        [
            'name' => 'GoTcpService',
            'nodes' => [
                ['host' => '127.0.0.1', 'port' => 3601],
            ],
        ],
        [
            'name' => 'GoHttpService',
            'nodes' => [
                ['host' => '127.0.0.1', 'port' => 3602],
            ],
        ],
        [
            'name' => 'java_tcp',
            'registry' => [
                'protocol' => 'consul',
                'address' => 'http://127.0.0.1:8500',
            ],
        ],
        [
            'name' => 'java_http',
            'registry' => [
                'protocol' => 'consul',
                'address' => 'http://127.0.0.1:8500',
            ],
        ]
    ],
    'drivers' => [
        'consul' => [
            'uri' => 'http://localhost:8500',
            'token' => '',
        ]
    ],
];
