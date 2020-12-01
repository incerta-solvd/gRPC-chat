import * as grpc from '@grpc/grpc-js'

import { EnterChatRequest, EnterChatReply, User } from './proto/chat_pb'
import { ChatService } from './proto/chat_grpc_pb'

const users = []

const enterChat: grpc.handleUnaryCall<EnterChatRequest, EnterChatReply> = (call, callback) => {
  const username = call.request.getUsername()
  const user = new User()

  user.setId('1')
  user.setName(username)

  users.push(user.toObject())

  const reply = new EnterChatReply()

  reply.setUser(user)

  return callback(null, reply)
}

const server = new grpc.Server()
const PORT = process.env.PORT || 8000

server.addService(ChatService, { enterChat })

server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
  server.start()
})
