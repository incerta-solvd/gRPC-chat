/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.EnterChatRequest,
 *   !proto.chat.EnterChatReply>}
 */
const methodDescriptor_Chat_enterChat = new grpc.web.MethodDescriptor(
  '/chat.Chat/enterChat',
  grpc.web.MethodType.UNARY,
  proto.chat.EnterChatRequest,
  proto.chat.EnterChatReply,
  /**
   * @param {!proto.chat.EnterChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.EnterChatReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.EnterChatRequest,
 *   !proto.chat.EnterChatReply>}
 */
const methodInfo_Chat_enterChat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.EnterChatReply,
  /**
   * @param {!proto.chat.EnterChatRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.EnterChatReply.deserializeBinary
);


/**
 * @param {!proto.chat.EnterChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.EnterChatReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.EnterChatReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.enterChat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/enterChat',
      request,
      metadata || {},
      methodDescriptor_Chat_enterChat,
      callback);
};


/**
 * @param {!proto.chat.EnterChatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.EnterChatReply>}
 *     A native promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.enterChat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/enterChat',
      request,
      metadata || {},
      methodDescriptor_Chat_enterChat);
};


module.exports = proto.chat;

