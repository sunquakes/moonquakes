<?php

namespace App\JsonRpc;

interface GoServiceInterface
{
    public function Add(array $args): array;
}