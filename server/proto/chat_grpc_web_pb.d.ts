import * as grpcWeb from 'grpc-web';

import {
  EnterChatReply,
  EnterChatRequest} from './chat_pb';

export class ChatClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  enterChat(
    request: EnterChatRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: EnterChatReply) => void
  ): grpcWeb.ClientReadableStream<EnterChatReply>;

}

export class ChatPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  enterChat(
    request: EnterChatRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<EnterChatReply>;

}

