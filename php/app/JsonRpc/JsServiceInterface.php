<?php

namespace App\JsonRpc;

interface JsServiceInterface
{
    public function add(array $args): array;
}