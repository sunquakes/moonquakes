package io.moonquakes.javahttp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;
import io.moonquakes.javahttp.dto.ArgsDto;
import io.moonquakes.javahttp.dto.ResultDto;

@JsonRpcClient(value = "js_http", protocol = JsonRpcProtocol.http, url = "typescript:7002")
public interface IJsHttpClient {
    ResultDto add(ArgsDto args);
}