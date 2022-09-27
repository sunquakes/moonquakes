package io.moonquakes.javahttp.service;

import com.sunquakes.jsonrpc4j.JsonRpcService;

@JsonRpcService(value = "java_http")
public interface IJavaTcpService {
    int add(int a, int b);
}