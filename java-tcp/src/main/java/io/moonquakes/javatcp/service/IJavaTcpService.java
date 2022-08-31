package io.moonquakes.javatcp.service;

import com.sunquakes.jsonrpc4j.JsonRpcService;

@JsonRpcService(value = "JavaTcp")
public interface IJavaTcpService {
    int add(int a, int b);
}