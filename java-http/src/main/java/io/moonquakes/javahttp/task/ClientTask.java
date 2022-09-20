package io.moonquakes.javahttp.task;

import io.moonquakes.javahttp.client.IGoHttpClient;
import io.moonquakes.javahttp.client.IPhpHttpClient;
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
    private IPhpHttpClient phpHttpClient;

    @Autowired(required = false)
    private IGoHttpClient goHttpClient;

    @Scheduled(fixedDelay = 10000)
    public void run() {
        try {
            int res = phpHttpClient.add((int) (Math.random() * 100), (int) (Math.random() * 100));
            System.out.println(res);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        try {
            int res = goHttpClient.Add((int) (Math.random() * 100), (int) (Math.random() * 100));
            System.out.println(res);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}