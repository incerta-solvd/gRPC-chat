import * as grpc from '@grpc/grpc-js'

import chat from './chat'

const services = [chat]

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 8000

const server = new grpc.Server()

services.forEach(s => s(server))

server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(), () =>
  server.start()
)
