package io.moonquakes.javahttp.service;

import com.sunquakes.jsonrpc4j.JsonRpcService;
import io.moonquakes.javahttp.dto.ArgsDto;
import io.moonquakes.javahttp.dto.ResultDto;

@JsonRpcService(value = "java_http")
public interface IJavaHttpService {
    ResultDto add(ArgsDto args);
}