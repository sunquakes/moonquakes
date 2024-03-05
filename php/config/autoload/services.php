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
    'consumers' => [
        [
            'name' => 'GoTcpService',
            'nodes' => [
                ['host' => 'go', 'port' => 3601],
            ],
        ],
        [
            'name' => 'GoHttpService',
            'nodes' => [
                ['host' => 'go', 'port' => 3602],
            ],
        ],
        [
            'name' => 'JavaTcpService',
            'nodes' => [
                ['host' => 'java-tcp', 'port' => 3201],
            ],
        ],
        [
            'name' => 'JavaHttpService',
            'nodes' => [
                ['host' => 'java-http', 'port' => 3202],
            ],
        ],
        [
            'name' => 'JsTcpService',
            'nodes' => [
                ['host' => 'typescript', 'port' => 7001],
            ],
        ],
        [
            'name' => 'JsHttpService',
            'nodes' => [
                ['host' => 'typescript', 'port' => 7002],
            ],
        ]
    ],
];
