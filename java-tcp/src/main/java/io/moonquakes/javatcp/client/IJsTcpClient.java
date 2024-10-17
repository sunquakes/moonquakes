package io.moonquakes.javatcp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;
import io.moonquakes.javatcp.dto.ArgsDto;
import io.moonquakes.javatcp.dto.ResultDto;

@JsonRpcClient(value = "js_tcp", protocol = JsonRpcProtocol.TCP, url = "typescript:7001")
public interface IJsTcpClient {
    ResultDto add(ArgsDto args);
}