package io.moonquakes.javahttp.service;

import io.moonquakes.javahttp.dto.ArgsDto;
import io.moonquakes.javahttp.dto.ResultDto;

public class JavaHttpService implements IJavaHttpService {
    @Override
    public ResultDto add(ArgsDto args) {
        ResultDto resultDto = new ResultDto();
        resultDto.setC(args.getA() + args.getB());
        return resultDto;
    }
}