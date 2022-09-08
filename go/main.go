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
	c, err := jsonrpc4go.NewClient("tcp", "127.0.0.1", "9503")
    for {
		fmt.Println(2)
		if err == nil {
			err = c.Call("php_tcp/add", Params{1, 6}, result, false)
			fmt.Println(err) // nil
			fmt.Println(*result) // 7
		} else {
			fmt.Println(err)
		}
		fmt.Println(3)
		if err == nil {
			c, _ = jsonrpc4go.NewClient("http", "127.0.0.1", "9504")
			err = c.Call("php_tcp/add", Params{1, 2}, result, false)
			fmt.Println(err) // nil
			fmt.Println(*result) // 7
		} else {
			fmt.Println(err)
		}
		time.Sleep(time.Duration(1) * time.Second)
    }
}