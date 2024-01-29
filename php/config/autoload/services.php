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
                'protocol' => 'consul',
                'address' => 'http://consul-server:8500',
            ],
        ],
        [
            'name' => 'GoHttp',
            'registry' => [
                'protocol' => 'consul',
                'address' => 'http://consul-server:8500',
            ],
        ],
        [
            'name' => 'java_tcp',
            'registry' => [
                'protocol' => 'consul',
                'address' => 'http://consul-server:8500',
            ],
        ],
        [
            'name' => 'java_http',
            'registry' => [
                'protocol' => 'consul',
                'address' => 'http://consul-server:8500',
            ],
        ]
    ],
    'drivers' => [
        'consul' => [
            'uri' => 'http://consul-server:8500',
            'token' => '',
        ]
    ],
];
