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
            'name' => 'GoTcp',
            'registry' => [
                'protocol' => 'nacos',
                'address' => 'http://127.0.0.1:8848',
            ],
        ],
        [
            'name' => 'GoHttp',
            'registry' => [
                'protocol' => 'nacos',
                'address' => 'http://127.0.0.1:8848',
            ],
        ],
        [
            'name' => 'java_tcp',
            'registry' => [
                'protocol' => 'nacos',
                'address' => 'http://127.0.0.1:8848',
            ],
        ],
        [
            'name' => 'java_http',
            'registry' => [
                'protocol' => 'nacos',
                'address' => 'http://127.0.0.1:8848',
            ],
        ]
    ],
    'drivers' => [
        'nacos' => [
            // nacos server url like https://nacos.hyperf.io, Priority is higher than host:port
            // 'url' => '',
            // The nacos host info
            'host' => '127.0.0.1',
            'port' => 8848,
            // The nacos account info
            'username' => 'nacos',
            'password' => 'nacos',
            'guzzle' => [
                'config' => null,
            ],
            'ephemeral' => false,
            'group_name' => null,
            'namespace_id' => null,
            'heartbeat' => 5,
        ],
    ],
];
