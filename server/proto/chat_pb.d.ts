import * as jspb from "google-protobuf"

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getName(): string;
  setName(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class EnterChatRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): EnterChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnterChatRequest): EnterChatRequest.AsObject;
  static serializeBinaryToWriter(message: EnterChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterChatRequest;
  static deserializeBinaryFromReader(message: EnterChatRequest, reader: jspb.BinaryReader): EnterChatRequest;
}

export namespace EnterChatRequest {
  export type AsObject = {
    username: string,
  }
}

export class EnterChatReply extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): EnterChatReply;
  hasUser(): boolean;
  clearUser(): EnterChatReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnterChatReply.AsObject;
  static toObject(includeInstance: boolean, msg: EnterChatReply): EnterChatReply.AsObject;
  static serializeBinaryToWriter(message: EnterChatReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnterChatReply;
  static deserializeBinaryFromReader(message: EnterChatReply, reader: jspb.BinaryReader): EnterChatReply;
}

export namespace EnterChatReply {
  export type AsObject = {
    user?: User.AsObject,
  }
}

