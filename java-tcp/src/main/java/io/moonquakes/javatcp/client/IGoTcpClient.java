package io.moonquakes.javatcp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;
import io.moonquakes.javatcp.dto.ArgsDto;
import io.moonquakes.javatcp.dto.ResultDto;

@JsonRpcClient(value = "GoTcp", protocol = JsonRpcProtocol.TCP)
public interface IGoTcpClient {
    ResultDto Add(ArgsDto args);
}