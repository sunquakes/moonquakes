package main

import (
	"fmt"
	"github.com/sunquakes/jsonrpc4go"
)

type Params struct {
	A int `json:"a"`
	B int `json:"b"`
}

type Result = int

type Result2 struct {
	C int `json:"c"`
}

func main() {
	result := new(Result)
	c, _ := jsonrpc4go.NewClient("tcp", "127.0.0.1", "9503") // the protocol is http
	err := c.Call("tcp/add", Params{1, 6}, result, false) // The following routes are supported: "int_rpc/Add", "int_rpc.Add", "IntRpc.Add"
	// data sent: {"id":"1604283212", "jsonrpc":"2.0", "method":"IntRpc/Add", "params":{"a":1,"b":6}}
	// data received: {"id":"1604283212", "jsonrpc":"2.0", "result":7}
	fmt.Println(err) // nil
	fmt.Println(*result) // 7
}