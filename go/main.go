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
		s, _ := jsonrpc4go.NewServer("tcp", "127.0.0.1", "3601")
		s.Register(new(GoTcp))
		s.Start()
	}()
	go func() {
		s, _ := jsonrpc4go.NewServer("http", "127.0.0.1", "3602")
		s.Register(new(GoHttp))
		s.Start()
	}()
	tk := task.NewTask("tk", "*/5 * * * * *", func(ctx context.Context) error {
		result := new(Result)
		phpTcpClient, _ := jsonrpc4go.NewClient("tcp", "127.0.0.1", "9503")
		phpHttpClient, _ := jsonrpc4go.NewClient("http", "127.0.0.1", "9504")

		javaTcpClient, _ := jsonrpc4go.NewClient("tcp", "127.0.0.1", "3201")
		javaHttpClient, _ := jsonrpc4go.NewClient("http", "127.0.0.1", "3202")

		a := rand.Intn(100)
		b := rand.Intn(100)
		_ = phpTcpClient.Call("php_tcp/add", Params{Args{a, b}}, result, false)
		fmt.Printf("[tcp] Go asked:\"%d+%d=?\"; PHP answered:\"%d\"\n", a, b, (*result).C)

		a = rand.Intn(100)
		b = rand.Intn(100)
		_ = phpHttpClient.Call("php_http/add", Params{Args{a, b}}, result, false)
		fmt.Printf("[http] Go asked:\"%d+%d=?\"; PHP answered:\"%d\"\n", a, b, (*result).C)

		a = rand.Intn(100)
		b = rand.Intn(100)
		_ = javaTcpClient.Call("java_tcp/add", Params{Args{a, b}}, result, false)
		fmt.Printf("[tcp] Go asked:\"%d+%d=?\"; Java answered:\"%d\"\n", a, b, (*result).C)

		a = rand.Intn(100)
		b = rand.Intn(100)
		_ = javaHttpClient.Call("java_http/add", Params{Args{a, b}}, result, false)
		fmt.Printf("[http] Go asked:\"%d+%d=?\"; Java answered:\"%d\"\n", a, b, (*result).C)
		return nil
	})
	task.AddTask("tk", tk)
	task.StartTask()
	defer task.StopTask()
	select {}
}
