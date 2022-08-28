GOROOT=`go env GOROOT`

PROJECT_DIR=$(cd $(dirname $(dirname $0)); pwd)
echo $PROJECT_DIR

cp $GOROOT/misc/wasm/wasm_exec.js $PROJECT_DIR/src/wasm_exec.js
