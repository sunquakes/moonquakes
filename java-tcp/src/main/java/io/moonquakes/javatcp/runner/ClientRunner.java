package io.moonquakes.javatcp.runner;

import io.moonquakes.javatcp.client.IGoTcpClient;
import io.moonquakes.javatcp.client.IPhpTcpClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class ClientRunner implements ApplicationRunner {

    @Autowired(required = false)
    private IPhpTcpClient phpTcpClient;

    @Autowired(required = false)
    private IGoTcpClient goTcpClient;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        while (true) {
            int res = phpTcpClient.add((int) (Math.random() * 100), (int) (Math.random() * 100));
            System.out.println(res);
            res = goTcpClient.Add((int) (Math.random() * 100), (int) (Math.random() * 100));
            System.out.println(res);
            Thread.sleep(1000);
        }
    }
}