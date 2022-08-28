goroot=`go env GOROOT`
echo $goroot/misc/wasm/wasm_exec.js
cat $goroot/misc/wasm/wasm_exec.js
cp $goroot/misc/wasm/wasm_exec.js ./src/wasm_exec.js
