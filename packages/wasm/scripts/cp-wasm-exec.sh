GOROOT=`go env GOROOT`

ls $(pwd)/src

cp $GOROOT/misc/wasm/wasm_exec.js $(pwd)/src/wasm_exec.js
