<?php

namespace App\JsonRpc;

interface JavaServiceInterface
{
    public function add(array $args): array;
}