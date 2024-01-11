package io.moonquakes.javatcp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;
import io.moonquakes.javatcp.dto.ArgsDto;
import io.moonquakes.javatcp.dto.ResultDto;

@JsonRpcClient(value = "php_tcp", protocol = JsonRpcProtocol.tcp, url = "php:9503")
public interface IPhpTcpClient {
    ResultDto add(ArgsDto args);
}