package io.moonquakes.javatcp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;

@JsonRpcClient(value = "GoTcp", protocol = JsonRpcProtocol.tcp, url = "localhost:3601")
public interface IGoTcpClient {
    int Add(int a, int b);
}