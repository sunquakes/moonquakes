package main

type GoTcp struct{}

func (i *GoTcp) Add(params *Params, result *Result) error {
	args := params.Args
	c := args.A + args.B
	*result = interface{}(Result{c}).(Result)
	return nil
}

type GoHttp struct{}

func (i *GoHttp) Add(params *Params, result *Result) error {
	args := params.Args
	c := args.A + args.B
	*result = interface{}(Result{c}).(Result)
	return nil
}

type Params struct {
	Args Args `json:"args"`
}

type Args struct {
	A int `json:"a"`
	B int `json:"b"`
}

type Result struct {
	C int `json:"c"`
}