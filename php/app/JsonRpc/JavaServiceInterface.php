<?php

namespace App\JsonRpc;

interface JavaServiceInterface
{
    public function add(int $a, int $b): int;
}