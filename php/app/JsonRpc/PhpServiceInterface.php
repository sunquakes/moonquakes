<?php

namespace App\JsonRpc;

interface PhpServiceInterface
{
    public function add(int $a, int $b): int;
}