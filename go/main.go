package main

import (
	"context"
	"fmt"
	"github.com/beego/beego/v2/task"
	"github.com/sunquakes/jsonrpc4go"
	"github.com/sunquakes/jsonrpc4go/discovery/consul"
	"math/rand"
)

func main() {
	dc, _ := consul.NewConsul("http://localhost:8500?check=true&instanceId=1")
	go func() {
		s, _ := jsonrpc4go.NewServer("tcp", "", 3601)
		s.SetDiscovery(dc)
		s.Register(new(GoTcp))
		s.Start()
	}()
	go func() {
		s, _ := jsonrpc4go.NewServer("http", "", 3602)
		s.SetDiscovery(dc)
		s.Register(new(GoHttp))
		s.Start()
	}()
	tk := task.NewTask("tk", "*/5 * * * * *", func(ctx context.Context) error {
		result := new(Result)
		phpTcpClient, _ := jsonrpc4go.NewClient("php_tcp", "tcp", dc)
		phpHttpClient, _ := jsonrpc4go.NewClient("php_http", "http", dc)

		javaTcpClient, _ := jsonrpc4go.NewClient("java_tcp", "tcp", dc)
		javaHttpClient, _ := jsonrpc4go.NewClient("java_http", "http", dc)

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
