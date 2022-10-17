package io.moonquakes.javatcp.task;

import io.moonquakes.javatcp.client.IGoTcpClient;
import io.moonquakes.javatcp.client.IPhpTcpClient;
import io.moonquakes.javatcp.dto.ArgsDto;
import io.moonquakes.javatcp.dto.ResultDto;
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
        ArgsDto args = new ArgsDto();
        try {
            int a = (int) (Math.random() * 100);
            int b = (int) (Math.random() * 100);
            args.setA(a);
            args.setB(b);
            ResultDto resultDto = phpTcpClient.add(args);
            log.info(String.format("[tcp] Java asked:\"%d+%d=?\"; PHP answered:\"%d\"", a, b, resultDto.getC()));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        try {
            int a = (int) (Math.random() * 100);
            int b = (int) (Math.random() * 100);
            args.setA(a);
            args.setB(b);
            ResultDto resultDto = goTcpClient.Add(args);
            log.info(String.format("[tcp] Java asked:\"%d+%d=?\"; Go answered:\"%d\"", a, b, resultDto.getC()));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}