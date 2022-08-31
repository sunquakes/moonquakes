package io.moonquakes.javatcp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;

@JsonRpcClient(value = "php_tcp", protocol = JsonRpcProtocol.tcp, url = "localhost:9503")
public interface IPhpTcpClient {
    int add(int a, int b);
}