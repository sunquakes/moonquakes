package io.moonquakes.javatcp.task;

import io.moonquakes.javatcp.client.IGoTcpClient;
import io.moonquakes.javatcp.client.IJsTcpClient;
import io.moonquakes.javatcp.client.IPhpTcpClient;
import io.moonquakes.javatcp.dto.ArgsDto;
import io.moonquakes.javatcp.dto.ResultDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Slf4j
@EnableScheduling
@Component
public class ClientTask {

    @Resource
    private IPhpTcpClient phpTcpClient;

    @Resource
    private IGoTcpClient goTcpClient;

    @Resource
    private IJsTcpClient jsTcpClient;

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
        try {
            int a = (int) (Math.random() * 100);
            int b = (int) (Math.random() * 100);
            args.setA(a);
            args.setB(b);
            ResultDto resultDto = jsTcpClient.add(args);
            log.info(String.format("[tcp] Java asked:\"%d+%d=?\"; Typescript answered:\"%d\"", a, b, resultDto.getC()));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}