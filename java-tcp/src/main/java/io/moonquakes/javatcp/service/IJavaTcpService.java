package io.moonquakes.javatcp.service;

import com.sunquakes.jsonrpc4j.JsonRpcService;
import io.moonquakes.javatcp.dto.ArgsDto;
import io.moonquakes.javatcp.dto.ResultDto;

@JsonRpcService(value = "java_tcp")
public interface IJavaTcpService {
    ResultDto add(ArgsDto args);
}