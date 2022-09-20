package io.moonquakes.javatcp.task;

import io.moonquakes.javatcp.client.IGoTcpClient;
import io.moonquakes.javatcp.client.IPhpTcpClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@EnableScheduling
@Component
public class ClientTask {

    @Autowired(required = false)
    private IPhpTcpClient phpTcpClient;

    @Autowired(required = false)
    private IGoTcpClient goTcpClient;

    @Scheduled(fixedDelay = 10000)
    public void run() {
        try {
            int res = phpTcpClient.add((int) (Math.random() * 100), (int) (Math.random() * 100));
            System.out.println(res);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        try {
            int res = goTcpClient.Add((int) (Math.random() * 100), (int) (Math.random() * 100));
            System.out.println(res);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}