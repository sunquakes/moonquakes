package io.moonquakes.javatcp.service;

import io.moonquakes.javatcp.dto.ArgsDto;
import io.moonquakes.javatcp.dto.ResultDto;

public class JavaTcpService implements IJavaTcpService {
    public ResultDto add(ArgsDto args) {
        ResultDto resultDto = new ResultDto();
        resultDto.setC(args.getA() + args.getB());
        return resultDto;
    }
}