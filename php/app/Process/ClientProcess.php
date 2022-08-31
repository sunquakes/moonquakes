<?php
//declare(strict_types=1);
//
//namespace App\Process;
//
//use Hyperf\Process\AbstractProcess;
//use Hyperf\Process\Annotation\Process;
//use App\JsonRpc\GoHttpServiceConsumer;
//
//#[Process(name: "client_process")]
//class ClientProcess extends AbstractProcess
//{
//    public function handle(): void
//    {
//        $goHttpServiceConsumer = $this->container->get(GoHttpServiceConsumer::class);
//        var_dump($goHttpServiceConsumer->add(1, 2));
//    }
//}