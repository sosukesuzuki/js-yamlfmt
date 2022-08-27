package main

import (
	"syscall/js"

	"github.com/google/yamlfmt"
	"github.com/google/yamlfmt/formatters/basic"
)

var global = js.Global().Get("global")

func main() {
	js.Global().Set("runYamlFmt", js.FuncOf(runYamlFmt))
	select {}
}

func fail(err error, when string) {
	global.Call("throwError", err.Error()+" on "+when)
}

func runYamlFmt(this js.Value, args []js.Value) interface{} {
	source := args[0].String()
	result, err := run(getFullRegistry(), []byte(source))
	if err != nil {
		fail(err, "format failed")
	}
	return string(result)
}

func run(registry *yamlfmt.Registry, source []byte) ([]byte, error) {
	factory, err := registry.GetDefaultFactory()
	if err != nil {
		return nil, err
	}
	formatter := factory.NewDefault()
	return formatter.Format(source)
}

func getFullRegistry() *yamlfmt.Registry {
	return yamlfmt.NewFormatterRegistry(&basic.BasicFormatterFactory{})
}
