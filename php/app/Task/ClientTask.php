<?php

namespace App\Task;

use Hyperf\Contract\StdoutLoggerInterface;
use Hyperf\Crontab\Annotation\Crontab;
use Hyperf\Di\Annotation\Inject;
use App\JsonRpc\GoHttpServiceConsumer;
use App\JsonRpc\GoTcpServiceConsumer;
use App\JsonRpc\JavaHttpServiceConsumer;
use App\JsonRpc\JavaTcpServiceConsumer;

#[Crontab(name: "ClientTask", rule: "*/5 * * * * *", callback: "execute", memo: "客户端定时任务")]
class ClientTask
{
    #[Inject]
    private StdoutLoggerInterface $logger;

    #[Inject]
    private GoHttpServiceConsumer $goHttpServiceConsumer;

    #[Inject]
    private GoTcpServiceConsumer $goTcpServiceConsumer;

    #[Inject]
    private JavaHttpServiceConsumer $javaHttpServiceConsumer;

    #[Inject]
    private JavaTcpServiceConsumer $javaTcpServiceConsumer;

    public function execute()
    {
        $seed = time();
        srand($seed);

        // go client
        try {
            $a = rand(0, 100);
            $b = rand(0, 100);
            $result = $this->goHttpServiceConsumer->Add(["a" => $a, "b" => $b]);
            $this->logger->info(sprintf("[http] PHP asked:\"%d+%d=?\"; Go answered:\"%d\"", $a, $b, $result["c"]));
        } catch (Exception $e) {
            $this->logger->info($e->getMessage());
        }
        try {
            $a = rand(0, 100);
            $b = rand(0, 100);
            $result = $this->goTcpServiceConsumer->Add(["a" => $a, "b" => $b]);
            $this->logger->info(sprintf("[tcp] PHP asked:\"%d+%d=?\"; Go answered:\"%d\"", $a, $b, $result["c"]));
        } catch (Exception $e) {
            $this->logger->info($e->getMessage());
        }

        // java client
        try {
            $a = rand(0, 100);
            $b = rand(0, 100);
            $result = $this->javaHttpServiceConsumer->add(["a" => $a, "b" => $b]);
            $this->logger->info(sprintf("[http] PHP asked:\"%d+%d=?\"; Java answered:\"%d\"", $a, $b, $result["c"]));
        } catch (Exception $e) {
            $this->logger->info($e->getMessage());
        }
        try {
            $a = rand(0, 100);
            $b = rand(0, 100);
            $result = $this->javaTcpServiceConsumer->add(["a" => $a, "b" => $b]);
            $this->logger->info(sprintf("[tcp] PHP asked:\"%d+%d=?\"; Java answered:\"%d\"", $a, $b, $result["c"]));
        } catch (Exception $e) {
            $this->logger->info($e->getMessage());
        }
    }
}