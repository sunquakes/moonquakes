<?php

namespace App\JsonRpc;

interface GoServiceInterface
{
    public function Add(int $a, int $b): int;
}