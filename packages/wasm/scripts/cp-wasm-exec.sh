GOROOT=`go env GOROOT`

PROJECT_DIR=$(cd $(dirname $(dirname $0)); pwd)
pwd
ls $(pwd)
ls .
ls $PROJECT_DIR

cp $GOROOT/misc/wasm/wasm_exec.js ./src/wasm_exec.js
