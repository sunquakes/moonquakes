---
title: PHP 
lang: en-US
---
## Introduction
Moonquakes's php part use a php framework named hyperf. Hyperf's micro-service components support JSON-RPC primitively, so it can intercommunicate with Moonquakes' golang and java components easily.

## What Is Hyperf 
Hyperf is an extremely performant and flexible PHP CLI framework, powered by a state-of-the-art coroutine server and a large number of battle-tested components. Aside from decisively beating PHP-FPM frameworks in benchmarks, Hyperf is unique in its focus on flexibility and composition. Hyperf ships with an AOP-enabling (aspect-oriented programming) dependency injector to ensure components and classes are pluggable and meta-programmable. All of Hyperf's core components strictly follow [PSR](https://www.php-fig.org/psr) standards and can be used in other frameworks.

Hyperf's architecture is built using a combination of `Coroutines`, `Dependency injection`, `Events`, `Annotations`, and `AOP`. In addition to providing `MySQL`, `Redis` and other common coroutine clients, `Hyperf` also provides coroutine compatible versions of `WebSocket server / client`, `JSON RPC server / client`, `gRPC server / client`, `Zipkin/Jaeger (OpenTracing) client`, `Guzzle HTTP client`, `Elasticsearch client`, `Consul client`, `ETCD client`, `AMQP component`, `Apollo configuration center`, `Aliyun ACM`, `ETCD configuration center`, `Token bucket algorithm-based limiter`, `Universal connection pool`, `Circuit breaker`, `Swagger`, `Swoole Tracker`, `Snowflake`, `Simply Redis MQ`, `RabbitMQ`, `NSQ`, `Nats`, `Seconds level crontab`, `Custom Processes`, etc. Therefore, developers can entirely avoid implementing coroutine compatible versions of these libraries.

Rest assured, Hyperf is still a PHP framework. Hyperf provides all the packages you expect: `Middleware`, `Event Manager`, `Coroutine-optimized Eloquent ORM` (and Model Cache!), `Translation`, `Validation`, `View engine (Blade/Smarty/Twig/Plates/ThinkTemplate)` and more.

## More About Hyperf
[Hyperf Docs](https://hyperf.wiki/3.0/#/en/)
