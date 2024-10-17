package io.moonquakes.javahttp.client;

import com.sunquakes.jsonrpc4j.JsonRpcClient;
import com.sunquakes.jsonrpc4j.JsonRpcProtocol;
import io.moonquakes.javahttp.dto.ArgsDto;
import io.moonquakes.javahttp.dto.ResultDto;

@JsonRpcClient(value = "GoHttp", protocol = JsonRpcProtocol.HTTP, url = "go:3602")
public interface IGoHttpClient {
    ResultDto Add(ArgsDto args);
}