package io.moonquakes.javatcp;

import com.sunquakes.jsonrpc4j.spring.JsonRpcScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@JsonRpcScan({"io.moonquakes.javatcp"})
public class JavaTcpApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaTcpApplication.class, args);
    }

}
