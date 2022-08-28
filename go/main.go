package main

import (
	"github.com/sunquakes/jsonrpc4go"
	"time"
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
    for {
		//result := new(Result)
		//c, _ := jsonrpc4go.NewClient("tcp", "127.0.0.1", "9503")
		//err := c.Call("php_tcp/add", Params{1, 6}, result, false)
		//fmt.Println(err) // nil
		//fmt.Println(*result) // 7
		//c, _ = jsonrpc4go.NewClient("http", "127.0.0.1", "9504")
		//err = c.Call("php_http/add", Params{1, 2}, result, false)
		//fmt.Println(err) // nil
		//fmt.Println(*result) // 7
		time.Sleep(time.Duration(1) * time.Second)
    }
}