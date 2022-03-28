import * as jspb from 'google-protobuf'

import * as proto_clarifai_auth_util_extension_pb from '../../../../proto/clarifai/auth/util/extension_pb';
import * as proto_clarifai_api_status_status_code_pb from '../../../../proto/clarifai/api/status/status_code_pb';


export class Status extends jspb.Message {
  getCode(): proto_clarifai_api_status_status_code_pb.StatusCode;
  setCode(value: proto_clarifai_api_status_status_code_pb.StatusCode): Status;

  getDescription(): string;
  setDescription(value: string): Status;

  getDetails(): string;
  setDetails(value: string): Status;

  getStackTraceList(): Array<string>;
  setStackTraceList(value: Array<string>): Status;
  clearStackTraceList(): Status;
  addStackTrace(value: string, index?: number): Status;

  getPercentCompleted(): number;
  setPercentCompleted(value: number): Status;

  getTimeRemaining(): number;
  setTimeRemaining(value: number): Status;

  getReqId(): string;
  setReqId(value: string): Status;

  getInternalDetails(): string;
  setInternalDetails(value: string): Status;

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
  setStatus(value?: Status): BaseResponse;
  hasStatus(): boolean;
  clearStatus(): BaseResponse;

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

