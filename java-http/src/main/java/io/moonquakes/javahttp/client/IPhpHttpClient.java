package io.moonquakes.javahttp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;
import io.moonquakes.javahttp.dto.ArgsDto;
import io.moonquakes.javahttp.dto.ResultDto;

@JsonRpcClient(value = "php_http", protocol = JsonRpcProtocol.http, url = "localhost:9504")
public interface IPhpHttpClient {
    ResultDto add(ArgsDto args);
}