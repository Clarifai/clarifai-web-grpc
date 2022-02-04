import * as jspb from "google-protobuf"

import * as proto_clarifai_auth_util_extension_pb from '../../../../proto/clarifai/auth/util/extension_pb';
import * as proto_clarifai_api_status_status_code_pb from '../../../../proto/clarifai/api/status/status_code_pb';

export class Status extends jspb.Message {
  getCode(): proto_clarifai_api_status_status_code_pb.StatusCode;
  setCode(value: proto_clarifai_api_status_status_code_pb.StatusCode): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDetails(): string;
  setDetails(value: string): void;

  getStackTraceList(): Array<string>;
  setStackTraceList(value: Array<string>): void;
  clearStackTraceList(): void;
  addStackTrace(value: string, index?: number): void;

  getPercentCompleted(): number;
  setPercentCompleted(value: number): void;

  getTimeRemaining(): number;
  setTimeRemaining(value: number): void;

  getReqId(): string;
  setReqId(value: string): void;

  getInternalDetails(): string;
  setInternalDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: proto_clarifai_api_status_status_code_pb.StatusCode,
    description: string,
    details: string,
    stackTraceList: Array<string>,
    percentCompleted: number,
    timeRemaining: number,
    reqId: string,
    internalDetails: string,
  }
}

export class BaseResponse extends jspb.Message {
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BaseResponse): BaseResponse.AsObject;
  static serializeBinaryToWriter(message: BaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseResponse;
  static deserializeBinaryFromReader(message: BaseResponse, reader: jspb.BinaryReader): BaseResponse;
}

export namespace BaseResponse {
  export type AsObject = {
    status?: Status.AsObject,
  }
}

