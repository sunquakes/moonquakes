package io.moonquakes.javahttp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;

@JsonRpcClient(value = "GoHttp", protocol = JsonRpcProtocol.http, url = "localhost:3602")
public interface IGoHttpClient {
    int Add(int a, int b);
}