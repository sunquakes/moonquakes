package main

type GoTcp struct{}

func (i *GoTcp) Add(params *Params, result *Result) error {
	a := params.A + params.B
	*result = interface{}(a).(Result)
	return nil
}

type GoHttp struct{}

func (i *GoHttp) Add(params *Params, result *Result) error {
	a := params.A + params.B
	*result = interface{}(a).(Result)
	return nil
}

type Params struct {
	A int `json:"a"`
	B int `json:"b"`
}

type Result = int