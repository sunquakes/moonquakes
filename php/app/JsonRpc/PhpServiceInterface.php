<?php

namespace App\JsonRpc;

interface PhpServiceInterface
{
    public function add(array $args): array;
}