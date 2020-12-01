#!/usr/bin/env bash
# IMPORTANT: "proc" and "protoc-gen-grpc-web" should be in the $PATH (npm i grpc-tools protoc-gen-grpc-web)

PROTO_FILES_DIR_PATH='./proto'
OUT_DIR_PATH_SERVER='./server/proto'
OUT_DIR_PATH_CLIENT='./client/src/proto'

# Create output dir if not exist
if [ ! -d ./$OUT_DIR_PATH_SERVER ]; then
  mkdir -p ./$OUT_DIR_PATH_SERVER
fi

if [ ! -d ./$OUT_DIR_PATH_CLIENT ]; then
  mkdir -p ./$OUT_DIR_PATH_CLIENT
fi

# Clean before generate (in case some *.proto files was deleted/renamed)
rm ./$OUT_DIR_PATH_SERVER/*.js ./$OUT_DIR_PATH_SERVER/*.ts
rm ./$OUT_DIR_PATH_CLIENT/*.js ./$OUT_DIR_PATH_CLIENT/*.ts

# Generate static modules from *.proc files (including rpc services)
node_modules/.bin/grpc_tools_node_protoc \
  -I $PROTO_FILES_DIR_PATH $PROTO_FILES_DIR_PATH/*.proto \
  --js_out=import_style=commonjs,binary:$OUT_DIR_PATH_SERVER \
  --grpc_out=grpc_js:$OUT_DIR_PATH_SERVER

# Specifically for client
node_modules/.bin/grpc_tools_node_protoc \
  -I $PROTO_FILES_DIR_PATH $PROTO_FILES_DIR_PATH/*.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR_PATH_CLIENT \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR_PATH_CLIENT

echo "Gen *.proto files done $(date)"
