package io.moonquakes.javahttp;

import com.sunquakes.jsonrpc4j.spring.JsonRpcScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@JsonRpcScan({"io.moonquakes.javahttp"})
public class JavaHttpApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaHttpApplication.class, args);
    }

}
