package io.moonquakes.javahttp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;

@JsonRpcClient(value = "php_http", protocol = JsonRpcProtocol.http, url = "localhost:9504")
public interface IPhpHttpClient {
    int add(int a, int b);
}