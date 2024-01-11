package main

import (
	"context"
	"fmt"
	"github.com/beego/beego/v2/task"
	"github.com/sunquakes/jsonrpc4go"
	"math/rand"
)

func main() {
	go func() {
		s, _ := jsonrpc4go.NewServer("tcp", 3601)
		s.Register(new(GoTcp))
		s.Start()
	}()
	go func() {
		s, _ := jsonrpc4go.NewServer("http", 3602)
		s.Register(new(GoHttp))
		s.Start()
	}()
	tk := task.NewTask("tk", "*/5 * * * * *", func(ctx context.Context) error {
		result := new(Result)
		phpTcpClient, _ := jsonrpc4go.NewClient("php_tcp", "tcp", "php:9503")
		phpHttpClient, _ := jsonrpc4go.NewClient("php_http", "http", "php:9504")

		javaTcpClient, _ := jsonrpc4go.NewClient("java_tcp", "tcp", "java-tcp:3201")
		javaHttpClient, _ := jsonrpc4go.NewClient("java_http", "http", "java-http:3202")

		a := rand.Intn(100)
		b := rand.Intn(100)
		_ = phpTcpClient.Call("add", Params{Args{a, b}}, result, false)
		fmt.Printf("[tcp] Go asked:\"%d+%d=?\"; PHP answered:\"%d\"\n", a, b, (*result).C)

		a = rand.Intn(100)
		b = rand.Intn(100)
		_ = phpHttpClient.Call("add", Params{Args{a, b}}, result, false)
		fmt.Printf("[http] Go asked:\"%d+%d=?\"; PHP answered:\"%d\"\n", a, b, (*result).C)

		a = rand.Intn(100)
		b = rand.Intn(100)
		_ = javaTcpClient.Call("add", Params{Args{a, b}}, result, false)
		fmt.Printf("[tcp] Go asked:\"%d+%d=?\"; Java answered:\"%d\"\n", a, b, (*result).C)

		a = rand.Intn(100)
		b = rand.Intn(100)
		_ = javaHttpClient.Call("add", Params{Args{a, b}}, result, false)
		fmt.Printf("[http] Go asked:\"%d+%d=?\"; Java answered:\"%d\"\n", a, b, (*result).C)
		return nil
	})
	task.AddTask("tk", tk)
	task.StartTask()
	defer task.StopTask()
	select {}
}
