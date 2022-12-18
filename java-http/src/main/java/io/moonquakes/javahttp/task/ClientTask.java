package io.moonquakes.javahttp.task;

import io.moonquakes.javahttp.client.IGoHttpClient;
import io.moonquakes.javahttp.client.IPhpHttpClient;
import io.moonquakes.javahttp.dto.ArgsDto;
import io.moonquakes.javahttp.dto.ResultDto;
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
    private IPhpHttpClient phpHttpClient;

    @Resource
    private IGoHttpClient goHttpClient;

    @Scheduled(fixedDelay = 10000)
    public void run() {
        ArgsDto args = new ArgsDto();
        try {
            int a = (int) (Math.random() * 100);
            int b = (int) (Math.random() * 100);
            args.setA(a);
            args.setB(b);
            ResultDto resultDto = phpHttpClient.add(args);
            log.info(String.format("[http] Java asked:\"%d+%d=?\"; PHP answered:\"%d\"", a, b, resultDto.getC()));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        try {
            int a = (int) (Math.random() * 100);
            int b = (int) (Math.random() * 100);
            args.setA(a);
            args.setB(b);
            ResultDto resultDto = goHttpClient.Add(args);
            log.info(String.format("[http] Java asked:\"%d+%d=?\"; Go answered:\"%d\"", a, b, resultDto.getC()));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}