---
title: PHP
lang: zh-CN
---

## 介绍

Moonquakes的php部分用了一个名叫hyperf框架。hyperf的微服务组件原生支持JSON-RPC，因此能很容易的跟Moonquakes的golang和java组件。

## hyperf是什么

Hyperf 是一个高性能、高灵活性的渐进式 PHP 协程框架，内置协程服务器及大量常用的组件，性能较传统基于 `PHP-FPM`
的框架有质的提升，提供超高性能的同时，也保持着极其灵活的可扩展性，标准组件均基于 [PSR 标准](https://www.php-fig.org/psr)
实现，基于强大的依赖注入设计，保证了绝大部分组件或类都是 `可替换` 与 `可复用` 的。

框架组件库除了常见的协程版的 `MySQL 客户端`、`Redis 客户端`
，还为您准备了协程版的 `Eloquent ORM`、`WebSocket 服务端及客户端`、`JSON RPC 服务端及客户端`、`GRPC 服务端及客户端`、`Zipkin/Jaeger (OpenTracing) 客户端`、`Guzzle HTTP 客户端`、`Elasticsearch 客户端`、`Consul 客户端`、`ETCD 客户端`、`AMQP 组件`、`Apollo 配置中心`、`阿里云 ACM 应用配置管理`、`ETCD 配置中心`、`基于令牌桶算法的限流器`、`通用连接池`、`熔断器`、`Swagger 文档生成`、`Swoole Tracker`、`视图引擎`、`Snowflake 全局 ID 生成器`
等组件，省去了自己实现对应协程版本的麻烦。

Hyperf
还提供了 `基于 PSR-11 的依赖注入容器`、`注解`、`AOP 面向切面编程`、`基于 PSR-15 的中间件`、`自定义进程`、`基于 PSR-14 的事件管理器`、`Redis/RabbitMQ 消息队列`、`自动模型缓存`、`基于 PSR-16 的缓存`、`Crontab 秒级定时任务`、`国际化`、`Validation 表单验证器`
等非常便捷的功能，满足丰富的技术场景和业务场景，开箱即用。

## 更多关于hyperf

[hyperf文档](https://hyperf.wiki/3.0/)
