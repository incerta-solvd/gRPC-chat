import * as grpc from '@grpc/grpc-js'
import { addServiceFactory } from './utils'

import { ChatService } from './proto/chat_grpc_pb'
import { EnterChatRequest, EnterChatReply, User } from './proto/chat_pb'

const users = []

const enterChat: grpc.handleUnaryCall<EnterChatRequest, EnterChatReply> = (
  call,
  callback
) => {
  const username = call.request.getUsername()
  const user = new User()

  user.setId('1')
  user.setName(username)

  users.push(user.toObject())

  const reply = new EnterChatReply()

  reply.setUser(user)

  return callback(null, reply)
}

export default addServiceFactory(ChatService, { enterChat })
