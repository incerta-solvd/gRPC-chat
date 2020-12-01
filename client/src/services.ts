import { ChatClient } from './proto/ChatServiceClientPb'
import { EnterChatRequest } from './proto/chat_pb'

const SERVER_PROXY_URL = 'http://localhost:8080'

const chatService = new ChatClient(SERVER_PROXY_URL)
const chat = {
  enterChat: async (p: { username: string }) => {
    const request = new EnterChatRequest()
    request.setUsername(p.username)

    const reply = (await chatService.enterChat(request, { 'custom-header-1': 'test_value' })).toObject()
    
    if (!reply.user) {
      throw Error('Bad request')
    }

    return reply.user
  }
}

export { chat }
