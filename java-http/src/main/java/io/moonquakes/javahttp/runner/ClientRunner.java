package io.moonquakes.javahttp.runner;

import io.moonquakes.javahttp.client.IGoHttpClient;
import io.moonquakes.javahttp.client.IPhpHttpClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class ClientRunner implements ApplicationRunner {

    @Autowired(required = false)
    private IPhpHttpClient phpHttpClient;

    @Autowired(required = false)
    private IGoHttpClient goHttpClient;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        while (true) {
            int res = phpHttpClient.add((int) (Math.random() * 100), (int) (Math.random() * 100));
            System.out.println(res);
            res = goHttpClient.Add((int) (Math.random() * 100), (int) (Math.random() * 100));
            System.out.println(res);
            Thread.sleep(1000);
        }
    }
}