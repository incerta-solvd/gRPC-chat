// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_pb = require('./chat_pb.js');

function serialize_chat_EnterChatReply(arg) {
  if (!(arg instanceof chat_pb.EnterChatReply)) {
    throw new Error('Expected argument of type chat.EnterChatReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_EnterChatReply(buffer_arg) {
  return chat_pb.EnterChatReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_EnterChatRequest(arg) {
  if (!(arg instanceof chat_pb.EnterChatRequest)) {
    throw new Error('Expected argument of type chat.EnterChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_EnterChatRequest(buffer_arg) {
  return chat_pb.EnterChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  enterChat: {
    path: '/chat.Chat/enterChat',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.EnterChatRequest,
    responseType: chat_pb.EnterChatReply,
    requestSerialize: serialize_chat_EnterChatRequest,
    requestDeserialize: deserialize_chat_EnterChatRequest,
    responseSerialize: serialize_chat_EnterChatReply,
    responseDeserialize: deserialize_chat_EnterChatReply,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
