package main

import (
	"github.com/sunquakes/jsonrpc4go"
	"time"
	"fmt"
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
	result := new(Result)
	phpTcpClient, err := jsonrpc4go.NewClient("tcp", "127.0.0.1", "9503")
	phpHttpClient, err := jsonrpc4go.NewClient("http", "127.0.0.1", "9504")

	javaTcpClient, err := jsonrpc4go.NewClient("tcp", "127.0.0.1", "3201")
    for {
		err = phpTcpClient.Call("php_tcp/add", Params{1, 6}, result, false)
		fmt.Println(err) // nil
		fmt.Println(*result) // 7

		err = phpHttpClient.Call("php_http/add", Params{1, 2}, result, false)
		fmt.Println(err) // nil
		fmt.Println(*result) // 3

		err = javaTcpClient.Call("JavaTcp/add", Params{2, 3}, result, false)
		fmt.Println(err) // nil
		fmt.Println(*result) // 5
		time.Sleep(time.Duration(1) * time.Second)
    }
}