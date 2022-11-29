import * as jspb from 'google-protobuf'

import * as proto_clarifai_api_resources_pb from '../../../proto/clarifai/api/resources_pb';
import * as proto_clarifai_api_status_status_pb from '../../../proto/clarifai/api/status/status_pb';
import * as proto_clarifai_api_utils_extensions_pb from '../../../proto/clarifai/api/utils/extensions_pb';
import * as proto_clarifai_auth_scope_scope_pb from '../../../proto/clarifai/auth/scope/scope_pb';
import * as proto_clarifai_auth_util_extension_pb from '../../../proto/clarifai/auth/util/extension_pb';
import * as proto_clarifai_commands_commands_pb from '../../../proto/clarifai/commands/commands_pb';
import * as proto_clarifai_api_status_status_code_pb from '../../../proto/clarifai/api/status/status_code_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TestMessage extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): TestMessage;
  hasStatus(): boolean;
  clearStatus(): TestMessage;

  getValue(): string;
  setValue(value: string): TestMessage;

  getByts(): Uint8Array | string;
  getByts_asU8(): Uint8Array;
  getByts_asB64(): string;
  setByts(value: Uint8Array | string): TestMessage;

  getInt32(): number;
  setInt32(value: number): TestMessage;

  getInt64(): number;
  setInt64(value: number): TestMessage;

  getF32(): number;
  setF32(value: number): TestMessage;

  getF64(): number;
  setF64(value: number): TestMessage;

  getS(): google_protobuf_struct_pb.Struct | undefined;
  setS(value?: google_protobuf_struct_pb.Struct): TestMessage;
  hasS(): boolean;
  clearS(): TestMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TestMessage): TestMessage.AsObject;
  static serializeBinaryToWriter(message: TestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestMessage;
  static deserializeBinaryFromReader(message: TestMessage, reader: jspb.BinaryReader): TestMessage;
}

export namespace TestMessage {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    value: string,
    byts: Uint8Array | string,
    int32: number,
    int64: number,
    f32: number,
    f64: number,
    s?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): Pagination;

  getPerPage(): number;
  setPerPage(value: number): Pagination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    page: number,
    perPage: number,
  }
}

export class GetAnnotationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAnnotationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetAnnotationRequest;

  getAnnotationId(): string;
  setAnnotationId(value: string): GetAnnotationRequest;

  getInputId(): string;
  setInputId(value: string): GetAnnotationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotationRequest): GetAnnotationRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnnotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotationRequest;
  static deserializeBinaryFromReader(message: GetAnnotationRequest, reader: jspb.BinaryReader): GetAnnotationRequest;
}

export namespace GetAnnotationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    annotationId: string,
    inputId: string,
  }
}

export class ListAnnotationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAnnotationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListAnnotationsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAnnotationsRequest;
  clearIdsList(): ListAnnotationsRequest;
  addIds(value: string, index?: number): ListAnnotationsRequest;

  getInputIdsList(): Array<string>;
  setInputIdsList(value: Array<string>): ListAnnotationsRequest;
  clearInputIdsList(): ListAnnotationsRequest;
  addInputIds(value: string, index?: number): ListAnnotationsRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListAnnotationsRequest;
  clearUserIdsList(): ListAnnotationsRequest;
  addUserIds(value: string, index?: number): ListAnnotationsRequest;

  getModelVersionIdsList(): Array<string>;
  setModelVersionIdsList(value: Array<string>): ListAnnotationsRequest;
  clearModelVersionIdsList(): ListAnnotationsRequest;
  addModelVersionIds(value: string, index?: number): ListAnnotationsRequest;

  getStatusesList(): Array<proto_clarifai_api_status_status_pb.Status>;
  setStatusesList(value: Array<proto_clarifai_api_status_status_pb.Status>): ListAnnotationsRequest;
  clearStatusesList(): ListAnnotationsRequest;
  addStatuses(value?: proto_clarifai_api_status_status_pb.Status, index?: number): proto_clarifai_api_status_status_pb.Status;

  getListAllAnnotations(): boolean;
  setListAllAnnotations(value: boolean): ListAnnotationsRequest;

  getReturnModelOutput(): boolean;
  setReturnModelOutput(value: boolean): ListAnnotationsRequest;

  getPage(): number;
  setPage(value: number): ListAnnotationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListAnnotationsRequest;

  getTaskId(): string;
  setTaskId(value: string): ListAnnotationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotationsRequest): ListAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotationsRequest;
  static deserializeBinaryFromReader(message: ListAnnotationsRequest, reader: jspb.BinaryReader): ListAnnotationsRequest;
}

export namespace ListAnnotationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
    inputIdsList: Array<string>,
    userIdsList: Array<string>,
    modelVersionIdsList: Array<string>,
    statusesList: Array<proto_clarifai_api_status_status_pb.Status.AsObject>,
    listAllAnnotations: boolean,
    returnModelOutput: boolean,
    page: number,
    perPage: number,
    taskId: string,
  }
}

export class PostAnnotationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAnnotationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAnnotationsRequest;

  getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
  setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): PostAnnotationsRequest;
  clearAnnotationsList(): PostAnnotationsRequest;
  addAnnotations(value?: proto_clarifai_api_resources_pb.Annotation, index?: number): proto_clarifai_api_resources_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAnnotationsRequest): PostAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: PostAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAnnotationsRequest;
  static deserializeBinaryFromReader(message: PostAnnotationsRequest, reader: jspb.BinaryReader): PostAnnotationsRequest;
}

export namespace PostAnnotationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    annotationsList: Array<proto_clarifai_api_resources_pb.Annotation.AsObject>,
  }
}

export class PatchAnnotationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAnnotationsRequest;

  getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
  setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): PatchAnnotationsRequest;
  clearAnnotationsList(): PatchAnnotationsRequest;
  addAnnotations(value?: proto_clarifai_api_resources_pb.Annotation, index?: number): proto_clarifai_api_resources_pb.Annotation;

  getAction(): string;
  setAction(value: string): PatchAnnotationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAnnotationsRequest): PatchAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAnnotationsRequest;
  static deserializeBinaryFromReader(message: PatchAnnotationsRequest, reader: jspb.BinaryReader): PatchAnnotationsRequest;
}

export namespace PatchAnnotationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    annotationsList: Array<proto_clarifai_api_resources_pb.Annotation.AsObject>,
    action: string,
  }
}

export class PatchAnnotationsStatusRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationsStatusRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAnnotationsStatusRequest;

  getStatusCode(): proto_clarifai_api_status_status_code_pb.StatusCode;
  setStatusCode(value: proto_clarifai_api_status_status_code_pb.StatusCode): PatchAnnotationsStatusRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): PatchAnnotationsStatusRequest;
  clearUserIdsList(): PatchAnnotationsStatusRequest;
  addUserIds(value: string, index?: number): PatchAnnotationsStatusRequest;

  getTaskId(): string;
  setTaskId(value: string): PatchAnnotationsStatusRequest;

  getAction(): string;
  setAction(value: string): PatchAnnotationsStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAnnotationsStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAnnotationsStatusRequest): PatchAnnotationsStatusRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAnnotationsStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAnnotationsStatusRequest;
  static deserializeBinaryFromReader(message: PatchAnnotationsStatusRequest, reader: jspb.BinaryReader): PatchAnnotationsStatusRequest;
}

export namespace PatchAnnotationsStatusRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    statusCode: proto_clarifai_api_status_status_code_pb.StatusCode,
    userIdsList: Array<string>,
    taskId: string,
    action: string,
  }
}

export class PatchAnnotationsStatusResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PatchAnnotationsStatusResponse;
  hasStatus(): boolean;
  clearStatus(): PatchAnnotationsStatusResponse;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): PatchAnnotationsStatusResponse;
  clearUserIdsList(): PatchAnnotationsStatusResponse;
  addUserIds(value: string, index?: number): PatchAnnotationsStatusResponse;

  getUpdatedCount(): number;
  setUpdatedCount(value: number): PatchAnnotationsStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAnnotationsStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAnnotationsStatusResponse): PatchAnnotationsStatusResponse.AsObject;
  static serializeBinaryToWriter(message: PatchAnnotationsStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAnnotationsStatusResponse;
  static deserializeBinaryFromReader(message: PatchAnnotationsStatusResponse, reader: jspb.BinaryReader): PatchAnnotationsStatusResponse;
}

export namespace PatchAnnotationsStatusResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    userIdsList: Array<string>,
    updatedCount: number,
  }
}

export class DeleteAnnotationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAnnotationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteAnnotationRequest;

  getInputId(): string;
  setInputId(value: string): DeleteAnnotationRequest;

  getAnnotationId(): string;
  setAnnotationId(value: string): DeleteAnnotationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnnotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnnotationRequest): DeleteAnnotationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAnnotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnnotationRequest;
  static deserializeBinaryFromReader(message: DeleteAnnotationRequest, reader: jspb.BinaryReader): DeleteAnnotationRequest;
}

export namespace DeleteAnnotationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    inputId: string,
    annotationId: string,
  }
}

export class DeleteAnnotationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAnnotationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteAnnotationsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteAnnotationsRequest;
  clearIdsList(): DeleteAnnotationsRequest;
  addIds(value: string, index?: number): DeleteAnnotationsRequest;

  getInputIdsList(): Array<string>;
  setInputIdsList(value: Array<string>): DeleteAnnotationsRequest;
  clearInputIdsList(): DeleteAnnotationsRequest;
  addInputIds(value: string, index?: number): DeleteAnnotationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnnotationsRequest): DeleteAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnnotationsRequest;
  static deserializeBinaryFromReader(message: DeleteAnnotationsRequest, reader: jspb.BinaryReader): DeleteAnnotationsRequest;
}

export namespace DeleteAnnotationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
    inputIdsList: Array<string>,
  }
}

export class SingleAnnotationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleAnnotationResponse;
  hasStatus(): boolean;
  clearStatus(): SingleAnnotationResponse;

  getAnnotation(): proto_clarifai_api_resources_pb.Annotation | undefined;
  setAnnotation(value?: proto_clarifai_api_resources_pb.Annotation): SingleAnnotationResponse;
  hasAnnotation(): boolean;
  clearAnnotation(): SingleAnnotationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleAnnotationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleAnnotationResponse): SingleAnnotationResponse.AsObject;
  static serializeBinaryToWriter(message: SingleAnnotationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleAnnotationResponse;
  static deserializeBinaryFromReader(message: SingleAnnotationResponse, reader: jspb.BinaryReader): SingleAnnotationResponse;
}

export namespace SingleAnnotationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    annotation?: proto_clarifai_api_resources_pb.Annotation.AsObject,
  }
}

export class MultiAnnotationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAnnotationResponse;
  hasStatus(): boolean;
  clearStatus(): MultiAnnotationResponse;

  getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
  setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): MultiAnnotationResponse;
  clearAnnotationsList(): MultiAnnotationResponse;
  addAnnotations(value?: proto_clarifai_api_resources_pb.Annotation, index?: number): proto_clarifai_api_resources_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAnnotationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAnnotationResponse): MultiAnnotationResponse.AsObject;
  static serializeBinaryToWriter(message: MultiAnnotationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAnnotationResponse;
  static deserializeBinaryFromReader(message: MultiAnnotationResponse, reader: jspb.BinaryReader): MultiAnnotationResponse;
}

export namespace MultiAnnotationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    annotationsList: Array<proto_clarifai_api_resources_pb.Annotation.AsObject>,
  }
}

export class GetAppRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAppRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetAppRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): GetAppRequest;
  clearAdditionalFieldsList(): GetAppRequest;
  addAdditionalFields(value: string, index?: number): GetAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppRequest): GetAppRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppRequest;
  static deserializeBinaryFromReader(message: GetAppRequest, reader: jspb.BinaryReader): GetAppRequest;
}

export namespace GetAppRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    additionalFieldsList: Array<string>,
  }
}

export class ListAppsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAppsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListAppsRequest;

  getPage(): number;
  setPage(value: number): ListAppsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListAppsRequest;

  getSortAscending(): boolean;
  setSortAscending(value: boolean): ListAppsRequest;

  getSortByName(): boolean;
  setSortByName(value: boolean): ListAppsRequest;

  getSortByModifiedAt(): boolean;
  setSortByModifiedAt(value: boolean): ListAppsRequest;

  getQuery(): string;
  setQuery(value: string): ListAppsRequest;

  getName(): string;
  setName(value: string): ListAppsRequest;

  getFeaturedOnly(): boolean;
  setFeaturedOnly(value: boolean): ListAppsRequest;

  getStarredOnly(): boolean;
  setStarredOnly(value: boolean): ListAppsRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): ListAppsRequest;
  clearAdditionalFieldsList(): ListAppsRequest;
  addAdditionalFields(value: string, index?: number): ListAppsRequest;

  getSortByCase(): ListAppsRequest.SortByCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppsRequest): ListAppsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppsRequest;
  static deserializeBinaryFromReader(message: ListAppsRequest, reader: jspb.BinaryReader): ListAppsRequest;
}

export namespace ListAppsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
    sortAscending: boolean,
    sortByName: boolean,
    sortByModifiedAt: boolean,
    query: string,
    name: string,
    featuredOnly: boolean,
    starredOnly: boolean,
    additionalFieldsList: Array<string>,
  }

  export enum SortByCase { 
    SORT_BY_NOT_SET = 0,
    SORT_BY_NAME = 6,
    SORT_BY_MODIFIED_AT = 7,
  }
}

export class PostAppsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAppsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAppsRequest;

  getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
  setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): PostAppsRequest;
  clearAppsList(): PostAppsRequest;
  addApps(value?: proto_clarifai_api_resources_pb.App, index?: number): proto_clarifai_api_resources_pb.App;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAppsRequest): PostAppsRequest.AsObject;
  static serializeBinaryToWriter(message: PostAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAppsRequest;
  static deserializeBinaryFromReader(message: PostAppsRequest, reader: jspb.BinaryReader): PostAppsRequest;
}

export namespace PostAppsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    appsList: Array<proto_clarifai_api_resources_pb.App.AsObject>,
  }
}

export class DeleteAppRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAppRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAppRequest): DeleteAppRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAppRequest;
  static deserializeBinaryFromReader(message: DeleteAppRequest, reader: jspb.BinaryReader): DeleteAppRequest;
}

export namespace DeleteAppRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PatchAppsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAppsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAppsRequest;

  getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
  setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): PatchAppsRequest;
  clearAppsList(): PatchAppsRequest;
  addApps(value?: proto_clarifai_api_resources_pb.App, index?: number): proto_clarifai_api_resources_pb.App;

  getAction(): string;
  setAction(value: string): PatchAppsRequest;

  getMetadataAction(): proto_clarifai_api_resources_pb.PatchAction | undefined;
  setMetadataAction(value?: proto_clarifai_api_resources_pb.PatchAction): PatchAppsRequest;
  hasMetadataAction(): boolean;
  clearMetadataAction(): PatchAppsRequest;

  getReindex(): boolean;
  setReindex(value: boolean): PatchAppsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAppsRequest): PatchAppsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAppsRequest;
  static deserializeBinaryFromReader(message: PatchAppsRequest, reader: jspb.BinaryReader): PatchAppsRequest;
}

export namespace PatchAppsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    appsList: Array<proto_clarifai_api_resources_pb.App.AsObject>,
    action: string,
    metadataAction?: proto_clarifai_api_resources_pb.PatchAction.AsObject,
    reindex: boolean,
  }
}

export class PatchAppRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAppRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAppRequest;

  getApp(): proto_clarifai_api_resources_pb.App | undefined;
  setApp(value?: proto_clarifai_api_resources_pb.App): PatchAppRequest;
  hasApp(): boolean;
  clearApp(): PatchAppRequest;

  getAction(): string;
  setAction(value: string): PatchAppRequest;

  getMetadataAction(): proto_clarifai_api_resources_pb.PatchAction | undefined;
  setMetadataAction(value?: proto_clarifai_api_resources_pb.PatchAction): PatchAppRequest;
  hasMetadataAction(): boolean;
  clearMetadataAction(): PatchAppRequest;

  getReindex(): boolean;
  setReindex(value: boolean): PatchAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAppRequest): PatchAppRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAppRequest;
  static deserializeBinaryFromReader(message: PatchAppRequest, reader: jspb.BinaryReader): PatchAppRequest;
}

export namespace PatchAppRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    app?: proto_clarifai_api_resources_pb.App.AsObject,
    action: string,
    metadataAction?: proto_clarifai_api_resources_pb.PatchAction.AsObject,
    reindex: boolean,
  }
}

export class PatchAppOwnerRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAppOwnerRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAppOwnerRequest;

  getNewOwnerId(): string;
  setNewOwnerId(value: string): PatchAppOwnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAppOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAppOwnerRequest): PatchAppOwnerRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAppOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAppOwnerRequest;
  static deserializeBinaryFromReader(message: PatchAppOwnerRequest, reader: jspb.BinaryReader): PatchAppOwnerRequest;
}

export namespace PatchAppOwnerRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    newOwnerId: string,
  }
}

export class PatchAppsIdsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAppsIdsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAppsIdsRequest;

  getIdsList(): Array<IdUpdateSource>;
  setIdsList(value: Array<IdUpdateSource>): PatchAppsIdsRequest;
  clearIdsList(): PatchAppsIdsRequest;
  addIds(value?: IdUpdateSource, index?: number): IdUpdateSource;

  getAction(): string;
  setAction(value: string): PatchAppsIdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAppsIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAppsIdsRequest): PatchAppsIdsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAppsIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAppsIdsRequest;
  static deserializeBinaryFromReader(message: PatchAppsIdsRequest, reader: jspb.BinaryReader): PatchAppsIdsRequest;
}

export namespace PatchAppsIdsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<IdUpdateSource.AsObject>,
    action: string,
  }
}

export class PostAppsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAppsSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAppsSearchesRequest;

  getAppQuery(): proto_clarifai_api_resources_pb.AppQuery | undefined;
  setAppQuery(value?: proto_clarifai_api_resources_pb.AppQuery): PostAppsSearchesRequest;
  hasAppQuery(): boolean;
  clearAppQuery(): PostAppsSearchesRequest;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostAppsSearchesRequest;
  hasPagination(): boolean;
  clearPagination(): PostAppsSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAppsSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAppsSearchesRequest): PostAppsSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PostAppsSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAppsSearchesRequest;
  static deserializeBinaryFromReader(message: PostAppsSearchesRequest, reader: jspb.BinaryReader): PostAppsSearchesRequest;
}

export namespace PostAppsSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    appQuery?: proto_clarifai_api_resources_pb.AppQuery.AsObject,
    pagination?: Pagination.AsObject,
  }
}

export class SingleAppResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleAppResponse;
  hasStatus(): boolean;
  clearStatus(): SingleAppResponse;

  getApp(): proto_clarifai_api_resources_pb.App | undefined;
  setApp(value?: proto_clarifai_api_resources_pb.App): SingleAppResponse;
  hasApp(): boolean;
  clearApp(): SingleAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleAppResponse): SingleAppResponse.AsObject;
  static serializeBinaryToWriter(message: SingleAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleAppResponse;
  static deserializeBinaryFromReader(message: SingleAppResponse, reader: jspb.BinaryReader): SingleAppResponse;
}

export namespace SingleAppResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    app?: proto_clarifai_api_resources_pb.App.AsObject,
  }
}

export class MultiAppResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAppResponse;
  hasStatus(): boolean;
  clearStatus(): MultiAppResponse;

  getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
  setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): MultiAppResponse;
  clearAppsList(): MultiAppResponse;
  addApps(value?: proto_clarifai_api_resources_pb.App, index?: number): proto_clarifai_api_resources_pb.App;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAppResponse): MultiAppResponse.AsObject;
  static serializeBinaryToWriter(message: MultiAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAppResponse;
  static deserializeBinaryFromReader(message: MultiAppResponse, reader: jspb.BinaryReader): MultiAppResponse;
}

export namespace MultiAppResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    appsList: Array<proto_clarifai_api_resources_pb.App.AsObject>,
  }
}

export class ListCollaboratorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListCollaboratorsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListCollaboratorsRequest;

  getListAllCollaborators(): boolean;
  setListAllCollaborators(value: boolean): ListCollaboratorsRequest;

  getPage(): number;
  setPage(value: number): ListCollaboratorsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListCollaboratorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollaboratorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollaboratorsRequest): ListCollaboratorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCollaboratorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollaboratorsRequest;
  static deserializeBinaryFromReader(message: ListCollaboratorsRequest, reader: jspb.BinaryReader): ListCollaboratorsRequest;
}

export namespace ListCollaboratorsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    listAllCollaborators: boolean,
    page: number,
    perPage: number,
  }
}

export class PostCollaboratorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostCollaboratorsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostCollaboratorsRequest;

  getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
  setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): PostCollaboratorsRequest;
  clearCollaboratorsList(): PostCollaboratorsRequest;
  addCollaborators(value?: proto_clarifai_api_resources_pb.Collaborator, index?: number): proto_clarifai_api_resources_pb.Collaborator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostCollaboratorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostCollaboratorsRequest): PostCollaboratorsRequest.AsObject;
  static serializeBinaryToWriter(message: PostCollaboratorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostCollaboratorsRequest;
  static deserializeBinaryFromReader(message: PostCollaboratorsRequest, reader: jspb.BinaryReader): PostCollaboratorsRequest;
}

export namespace PostCollaboratorsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    collaboratorsList: Array<proto_clarifai_api_resources_pb.Collaborator.AsObject>,
  }
}

export class PatchCollaboratorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchCollaboratorsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchCollaboratorsRequest;

  getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
  setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): PatchCollaboratorsRequest;
  clearCollaboratorsList(): PatchCollaboratorsRequest;
  addCollaborators(value?: proto_clarifai_api_resources_pb.Collaborator, index?: number): proto_clarifai_api_resources_pb.Collaborator;

  getAction(): string;
  setAction(value: string): PatchCollaboratorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchCollaboratorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchCollaboratorsRequest): PatchCollaboratorsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchCollaboratorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchCollaboratorsRequest;
  static deserializeBinaryFromReader(message: PatchCollaboratorsRequest, reader: jspb.BinaryReader): PatchCollaboratorsRequest;
}

export namespace PatchCollaboratorsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    collaboratorsList: Array<proto_clarifai_api_resources_pb.Collaborator.AsObject>,
    action: string,
  }
}

export class DeleteCollaboratorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteCollaboratorsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteCollaboratorsRequest;

  getCollaboratorIdsList(): Array<string>;
  setCollaboratorIdsList(value: Array<string>): DeleteCollaboratorsRequest;
  clearCollaboratorIdsList(): DeleteCollaboratorsRequest;
  addCollaboratorIds(value: string, index?: number): DeleteCollaboratorsRequest;

  getUserEmailsList(): Array<string>;
  setUserEmailsList(value: Array<string>): DeleteCollaboratorsRequest;
  clearUserEmailsList(): DeleteCollaboratorsRequest;
  addUserEmails(value: string, index?: number): DeleteCollaboratorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollaboratorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollaboratorsRequest): DeleteCollaboratorsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCollaboratorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollaboratorsRequest;
  static deserializeBinaryFromReader(message: DeleteCollaboratorsRequest, reader: jspb.BinaryReader): DeleteCollaboratorsRequest;
}

export namespace DeleteCollaboratorsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    collaboratorIdsList: Array<string>,
    userEmailsList: Array<string>,
  }
}

export class MultiCollaboratorsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiCollaboratorsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiCollaboratorsResponse;

  getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
  setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): MultiCollaboratorsResponse;
  clearCollaboratorsList(): MultiCollaboratorsResponse;
  addCollaborators(value?: proto_clarifai_api_resources_pb.Collaborator, index?: number): proto_clarifai_api_resources_pb.Collaborator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiCollaboratorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiCollaboratorsResponse): MultiCollaboratorsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiCollaboratorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiCollaboratorsResponse;
  static deserializeBinaryFromReader(message: MultiCollaboratorsResponse, reader: jspb.BinaryReader): MultiCollaboratorsResponse;
}

export namespace MultiCollaboratorsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    collaboratorsList: Array<proto_clarifai_api_resources_pb.Collaborator.AsObject>,
  }
}

export class ListCollaborationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListCollaborationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListCollaborationsRequest;

  getPage(): number;
  setPage(value: number): ListCollaborationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListCollaborationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollaborationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollaborationsRequest): ListCollaborationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCollaborationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollaborationsRequest;
  static deserializeBinaryFromReader(message: ListCollaborationsRequest, reader: jspb.BinaryReader): ListCollaborationsRequest;
}

export namespace ListCollaborationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class MultiCollaborationsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiCollaborationsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiCollaborationsResponse;

  getCollaborationsList(): Array<proto_clarifai_api_resources_pb.Collaboration>;
  setCollaborationsList(value: Array<proto_clarifai_api_resources_pb.Collaboration>): MultiCollaborationsResponse;
  clearCollaborationsList(): MultiCollaborationsResponse;
  addCollaborations(value?: proto_clarifai_api_resources_pb.Collaboration, index?: number): proto_clarifai_api_resources_pb.Collaboration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiCollaborationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiCollaborationsResponse): MultiCollaborationsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiCollaborationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiCollaborationsResponse;
  static deserializeBinaryFromReader(message: MultiCollaborationsResponse, reader: jspb.BinaryReader): MultiCollaborationsResponse;
}

export namespace MultiCollaborationsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    collaborationsList: Array<proto_clarifai_api_resources_pb.Collaboration.AsObject>,
  }
}

export class PostVerifyEmailRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): PostVerifyEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostVerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostVerifyEmailRequest): PostVerifyEmailRequest.AsObject;
  static serializeBinaryToWriter(message: PostVerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostVerifyEmailRequest;
  static deserializeBinaryFromReader(message: PostVerifyEmailRequest, reader: jspb.BinaryReader): PostVerifyEmailRequest;
}

export namespace PostVerifyEmailRequest {
  export type AsObject = {
    key: string,
  }
}

export class SingleVerifyEmailResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleVerifyEmailResponse;
  hasStatus(): boolean;
  clearStatus(): SingleVerifyEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleVerifyEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleVerifyEmailResponse): SingleVerifyEmailResponse.AsObject;
  static serializeBinaryToWriter(message: SingleVerifyEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleVerifyEmailResponse;
  static deserializeBinaryFromReader(message: SingleVerifyEmailResponse, reader: jspb.BinaryReader): SingleVerifyEmailResponse;
}

export namespace SingleVerifyEmailResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class ListAuthMethodsRequest extends jspb.Message {
  getRecoveryPath(): string;
  setRecoveryPath(value: string): ListAuthMethodsRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAuthMethodsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListAuthMethodsRequest;

  getDryRun(): boolean;
  setDryRun(value: boolean): ListAuthMethodsRequest;

  getAuthorizePat(): string;
  setAuthorizePat(value: string): ListAuthMethodsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthMethodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthMethodsRequest): ListAuthMethodsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAuthMethodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthMethodsRequest;
  static deserializeBinaryFromReader(message: ListAuthMethodsRequest, reader: jspb.BinaryReader): ListAuthMethodsRequest;
}

export namespace ListAuthMethodsRequest {
  export type AsObject = {
    recoveryPath: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    dryRun: boolean,
    authorizePat: string,
  }
}

export class PostLinkIdpUserRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostLinkIdpUserRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostLinkIdpUserRequest;

  getLoginId(): string;
  setLoginId(value: string): PostLinkIdpUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostLinkIdpUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostLinkIdpUserRequest): PostLinkIdpUserRequest.AsObject;
  static serializeBinaryToWriter(message: PostLinkIdpUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostLinkIdpUserRequest;
  static deserializeBinaryFromReader(message: PostLinkIdpUserRequest, reader: jspb.BinaryReader): PostLinkIdpUserRequest;
}

export namespace PostLinkIdpUserRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    loginId: string,
  }
}

export class GetLoginInfoRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetLoginInfoRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetLoginInfoRequest;

  getLoginId(): string;
  setLoginId(value: string): GetLoginInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLoginInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLoginInfoRequest): GetLoginInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetLoginInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLoginInfoRequest;
  static deserializeBinaryFromReader(message: GetLoginInfoRequest, reader: jspb.BinaryReader): GetLoginInfoRequest;
}

export namespace GetLoginInfoRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    loginId: string,
  }
}

export class GetLoginInfoResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): GetLoginInfoResponse;
  hasStatus(): boolean;
  clearStatus(): GetLoginInfoResponse;

  getSubjectEmail(): string;
  setSubjectEmail(value: string): GetLoginInfoResponse;

  getIdpName(): string;
  setIdpName(value: string): GetLoginInfoResponse;

  getIdpId(): string;
  setIdpId(value: string): GetLoginInfoResponse;

  getIsLinkedToSubject(): boolean;
  setIsLinkedToSubject(value: boolean): GetLoginInfoResponse;

  getSubjectAuthorizedAtIdp(): boolean;
  setSubjectAuthorizedAtIdp(value: boolean): GetLoginInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLoginInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLoginInfoResponse): GetLoginInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetLoginInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLoginInfoResponse;
  static deserializeBinaryFromReader(message: GetLoginInfoResponse, reader: jspb.BinaryReader): GetLoginInfoResponse;
}

export namespace GetLoginInfoResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    subjectEmail: string,
    idpName: string,
    idpId: string,
    isLinkedToSubject: boolean,
    subjectAuthorizedAtIdp: boolean,
  }
}

export class PostLinkIdpUserResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostLinkIdpUserResponse;
  hasStatus(): boolean;
  clearStatus(): PostLinkIdpUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostLinkIdpUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostLinkIdpUserResponse): PostLinkIdpUserResponse.AsObject;
  static serializeBinaryToWriter(message: PostLinkIdpUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostLinkIdpUserResponse;
  static deserializeBinaryFromReader(message: PostLinkIdpUserResponse, reader: jspb.BinaryReader): PostLinkIdpUserResponse;
}

export namespace PostLinkIdpUserResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class PostIdLoginFinalizerRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostIdLoginFinalizerRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostIdLoginFinalizerRequest;

  getLoginId(): string;
  setLoginId(value: string): PostIdLoginFinalizerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostIdLoginFinalizerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostIdLoginFinalizerRequest): PostIdLoginFinalizerRequest.AsObject;
  static serializeBinaryToWriter(message: PostIdLoginFinalizerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostIdLoginFinalizerRequest;
  static deserializeBinaryFromReader(message: PostIdLoginFinalizerRequest, reader: jspb.BinaryReader): PostIdLoginFinalizerRequest;
}

export namespace PostIdLoginFinalizerRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    loginId: string,
  }
}

export class PostIdLoginFinalizerResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostIdLoginFinalizerResponse;
  hasStatus(): boolean;
  clearStatus(): PostIdLoginFinalizerResponse;

  getRecoveryPath(): string;
  setRecoveryPath(value: string): PostIdLoginFinalizerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostIdLoginFinalizerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostIdLoginFinalizerResponse): PostIdLoginFinalizerResponse.AsObject;
  static serializeBinaryToWriter(message: PostIdLoginFinalizerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostIdLoginFinalizerResponse;
  static deserializeBinaryFromReader(message: PostIdLoginFinalizerResponse, reader: jspb.BinaryReader): PostIdLoginFinalizerResponse;
}

export namespace PostIdLoginFinalizerResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    recoveryPath: string,
  }
}

export class ListAuthMethodsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ListAuthMethodsResponse;
  hasStatus(): boolean;
  clearStatus(): ListAuthMethodsResponse;

  getAuthMethodsList(): Array<proto_clarifai_api_resources_pb.AuthMethod>;
  setAuthMethodsList(value: Array<proto_clarifai_api_resources_pb.AuthMethod>): ListAuthMethodsResponse;
  clearAuthMethodsList(): ListAuthMethodsResponse;
  addAuthMethods(value?: proto_clarifai_api_resources_pb.AuthMethod, index?: number): proto_clarifai_api_resources_pb.AuthMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthMethodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthMethodsResponse): ListAuthMethodsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAuthMethodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthMethodsResponse;
  static deserializeBinaryFromReader(message: ListAuthMethodsResponse, reader: jspb.BinaryReader): ListAuthMethodsResponse;
}

export namespace ListAuthMethodsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    authMethodsList: Array<proto_clarifai_api_resources_pb.AuthMethod.AsObject>,
  }
}

export class List2FAMethodsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): List2FAMethodsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): List2FAMethodsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List2FAMethodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: List2FAMethodsRequest): List2FAMethodsRequest.AsObject;
  static serializeBinaryToWriter(message: List2FAMethodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List2FAMethodsRequest;
  static deserializeBinaryFromReader(message: List2FAMethodsRequest, reader: jspb.BinaryReader): List2FAMethodsRequest;
}

export namespace List2FAMethodsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class List2FAMethodsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): List2FAMethodsResponse;
  hasStatus(): boolean;
  clearStatus(): List2FAMethodsResponse;

  getTwoFactorAuthMethodsList(): Array<proto_clarifai_api_resources_pb.TwoFactorAuthMethod>;
  setTwoFactorAuthMethodsList(value: Array<proto_clarifai_api_resources_pb.TwoFactorAuthMethod>): List2FAMethodsResponse;
  clearTwoFactorAuthMethodsList(): List2FAMethodsResponse;
  addTwoFactorAuthMethods(value?: proto_clarifai_api_resources_pb.TwoFactorAuthMethod, index?: number): proto_clarifai_api_resources_pb.TwoFactorAuthMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List2FAMethodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: List2FAMethodsResponse): List2FAMethodsResponse.AsObject;
  static serializeBinaryToWriter(message: List2FAMethodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List2FAMethodsResponse;
  static deserializeBinaryFromReader(message: List2FAMethodsResponse, reader: jspb.BinaryReader): List2FAMethodsResponse;
}

export namespace List2FAMethodsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    twoFactorAuthMethodsList: Array<proto_clarifai_api_resources_pb.TwoFactorAuthMethod.AsObject>,
  }
}

export class PostAuth2FATotpRegisterEnableRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAuth2FATotpRegisterEnableRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAuth2FATotpRegisterEnableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpRegisterEnableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpRegisterEnableRequest): PostAuth2FATotpRegisterEnableRequest.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpRegisterEnableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpRegisterEnableRequest;
  static deserializeBinaryFromReader(message: PostAuth2FATotpRegisterEnableRequest, reader: jspb.BinaryReader): PostAuth2FATotpRegisterEnableRequest;
}

export namespace PostAuth2FATotpRegisterEnableRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostAuth2FATotpRegisterEnableResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostAuth2FATotpRegisterEnableResponse;
  hasStatus(): boolean;
  clearStatus(): PostAuth2FATotpRegisterEnableResponse;

  getSecret(): string;
  setSecret(value: string): PostAuth2FATotpRegisterEnableResponse;

  getQrCode(): string;
  setQrCode(value: string): PostAuth2FATotpRegisterEnableResponse;

  getState(): string;
  setState(value: string): PostAuth2FATotpRegisterEnableResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpRegisterEnableResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpRegisterEnableResponse): PostAuth2FATotpRegisterEnableResponse.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpRegisterEnableResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpRegisterEnableResponse;
  static deserializeBinaryFromReader(message: PostAuth2FATotpRegisterEnableResponse, reader: jspb.BinaryReader): PostAuth2FATotpRegisterEnableResponse;
}

export namespace PostAuth2FATotpRegisterEnableResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    secret: string,
    qrCode: string,
    state: string,
  }
}

export class PostAuth2FATotpDisableRequest extends jspb.Message {
  getPasscode(): string;
  setPasscode(value: string): PostAuth2FATotpDisableRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAuth2FATotpDisableRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAuth2FATotpDisableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpDisableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpDisableRequest): PostAuth2FATotpDisableRequest.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpDisableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpDisableRequest;
  static deserializeBinaryFromReader(message: PostAuth2FATotpDisableRequest, reader: jspb.BinaryReader): PostAuth2FATotpDisableRequest;
}

export namespace PostAuth2FATotpDisableRequest {
  export type AsObject = {
    passcode: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostAuth2FATotpDisableResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostAuth2FATotpDisableResponse;
  hasStatus(): boolean;
  clearStatus(): PostAuth2FATotpDisableResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpDisableResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpDisableResponse): PostAuth2FATotpDisableResponse.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpDisableResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpDisableResponse;
  static deserializeBinaryFromReader(message: PostAuth2FATotpDisableResponse, reader: jspb.BinaryReader): PostAuth2FATotpDisableResponse;
}

export namespace PostAuth2FATotpDisableResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class PostAuth2FATotpRegisterVerifyRequest extends jspb.Message {
  getPasscode(): string;
  setPasscode(value: string): PostAuth2FATotpRegisterVerifyRequest;

  getState(): string;
  setState(value: string): PostAuth2FATotpRegisterVerifyRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAuth2FATotpRegisterVerifyRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAuth2FATotpRegisterVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpRegisterVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpRegisterVerifyRequest): PostAuth2FATotpRegisterVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpRegisterVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpRegisterVerifyRequest;
  static deserializeBinaryFromReader(message: PostAuth2FATotpRegisterVerifyRequest, reader: jspb.BinaryReader): PostAuth2FATotpRegisterVerifyRequest;
}

export namespace PostAuth2FATotpRegisterVerifyRequest {
  export type AsObject = {
    passcode: string,
    state: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostAuth2FATotpRegisterVerifyResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostAuth2FATotpRegisterVerifyResponse;
  hasStatus(): boolean;
  clearStatus(): PostAuth2FATotpRegisterVerifyResponse;

  getRecoveryKey(): string;
  setRecoveryKey(value: string): PostAuth2FATotpRegisterVerifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpRegisterVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpRegisterVerifyResponse): PostAuth2FATotpRegisterVerifyResponse.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpRegisterVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpRegisterVerifyResponse;
  static deserializeBinaryFromReader(message: PostAuth2FATotpRegisterVerifyResponse, reader: jspb.BinaryReader): PostAuth2FATotpRegisterVerifyResponse;
}

export namespace PostAuth2FATotpRegisterVerifyResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    recoveryKey: string,
  }
}

export class PostAuth2FATotpLoginRequest extends jspb.Message {
  getPasscode(): string;
  setPasscode(value: string): PostAuth2FATotpLoginRequest;

  getState(): string;
  setState(value: string): PostAuth2FATotpLoginRequest;

  getUserId(): string;
  setUserId(value: string): PostAuth2FATotpLoginRequest;

  getLongLived(): boolean;
  setLongLived(value: boolean): PostAuth2FATotpLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpLoginRequest): PostAuth2FATotpLoginRequest.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpLoginRequest;
  static deserializeBinaryFromReader(message: PostAuth2FATotpLoginRequest, reader: jspb.BinaryReader): PostAuth2FATotpLoginRequest;
}

export namespace PostAuth2FATotpLoginRequest {
  export type AsObject = {
    passcode: string,
    state: string,
    userId: string,
    longLived: boolean,
  }
}

export class PostAuth2FATotpRecoverRequest extends jspb.Message {
  getState(): string;
  setState(value: string): PostAuth2FATotpRecoverRequest;

  getRecoveryCode(): string;
  setRecoveryCode(value: string): PostAuth2FATotpRecoverRequest;

  getUserId(): string;
  setUserId(value: string): PostAuth2FATotpRecoverRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpRecoverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpRecoverRequest): PostAuth2FATotpRecoverRequest.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpRecoverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpRecoverRequest;
  static deserializeBinaryFromReader(message: PostAuth2FATotpRecoverRequest, reader: jspb.BinaryReader): PostAuth2FATotpRecoverRequest;
}

export namespace PostAuth2FATotpRecoverRequest {
  export type AsObject = {
    state: string,
    recoveryCode: string,
    userId: string,
  }
}

export class PostAuth2FATotpRecoverResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostAuth2FATotpRecoverResponse;
  hasStatus(): boolean;
  clearStatus(): PostAuth2FATotpRecoverResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAuth2FATotpRecoverResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostAuth2FATotpRecoverResponse): PostAuth2FATotpRecoverResponse.AsObject;
  static serializeBinaryToWriter(message: PostAuth2FATotpRecoverResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAuth2FATotpRecoverResponse;
  static deserializeBinaryFromReader(message: PostAuth2FATotpRecoverResponse, reader: jspb.BinaryReader): PostAuth2FATotpRecoverResponse;
}

export namespace PostAuth2FATotpRecoverResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class GetAuth2FATotpRecoverConfirmRequest extends jspb.Message {
  getState(): string;
  setState(value: string): GetAuth2FATotpRecoverConfirmRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuth2FATotpRecoverConfirmRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuth2FATotpRecoverConfirmRequest): GetAuth2FATotpRecoverConfirmRequest.AsObject;
  static serializeBinaryToWriter(message: GetAuth2FATotpRecoverConfirmRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuth2FATotpRecoverConfirmRequest;
  static deserializeBinaryFromReader(message: GetAuth2FATotpRecoverConfirmRequest, reader: jspb.BinaryReader): GetAuth2FATotpRecoverConfirmRequest;
}

export namespace GetAuth2FATotpRecoverConfirmRequest {
  export type AsObject = {
    state: string,
  }
}

export class GetAuth2FATotpRecoverConfirmResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): GetAuth2FATotpRecoverConfirmResponse;
  hasStatus(): boolean;
  clearStatus(): GetAuth2FATotpRecoverConfirmResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuth2FATotpRecoverConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuth2FATotpRecoverConfirmResponse): GetAuth2FATotpRecoverConfirmResponse.AsObject;
  static serializeBinaryToWriter(message: GetAuth2FATotpRecoverConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuth2FATotpRecoverConfirmResponse;
  static deserializeBinaryFromReader(message: GetAuth2FATotpRecoverConfirmResponse, reader: jspb.BinaryReader): GetAuth2FATotpRecoverConfirmResponse;
}

export namespace GetAuth2FATotpRecoverConfirmResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class RequestResetPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RequestResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestResetPasswordRequest): RequestResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: RequestResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestResetPasswordRequest;
  static deserializeBinaryFromReader(message: RequestResetPasswordRequest, reader: jspb.BinaryReader): RequestResetPasswordRequest;
}

export namespace RequestResetPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class CompleteResetPasswordRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): CompleteResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): CompleteResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteResetPasswordRequest): CompleteResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResetPasswordRequest;
  static deserializeBinaryFromReader(message: CompleteResetPasswordRequest, reader: jspb.BinaryReader): CompleteResetPasswordRequest;
}

export namespace CompleteResetPasswordRequest {
  export type AsObject = {
    key: string,
    newPassword: string,
  }
}

export class PostLoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): PostLoginRequest;

  getPassword(): string;
  setPassword(value: string): PostLoginRequest;

  getLongLived(): boolean;
  setLongLived(value: boolean): PostLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostLoginRequest): PostLoginRequest.AsObject;
  static serializeBinaryToWriter(message: PostLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostLoginRequest;
  static deserializeBinaryFromReader(message: PostLoginRequest, reader: jspb.BinaryReader): PostLoginRequest;
}

export namespace PostLoginRequest {
  export type AsObject = {
    email: string,
    password: string,
    longLived: boolean,
  }
}

export class PostSignupRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): PostSignupRequest;

  getPassword(): string;
  setPassword(value: string): PostSignupRequest;

  getFirstName(): string;
  setFirstName(value: string): PostSignupRequest;

  getLastName(): string;
  setLastName(value: string): PostSignupRequest;

  getCompanyName(): string;
  setCompanyName(value: string): PostSignupRequest;

  getCaptchaResponseToken(): string;
  setCaptchaResponseToken(value: string): PostSignupRequest;

  getCaptchaResponseTokenV3(): string;
  setCaptchaResponseTokenV3(value: string): PostSignupRequest;

  getAwsRegistrationToken(): string;
  setAwsRegistrationToken(value: string): PostSignupRequest;

  getGdprConsent(): boolean;
  setGdprConsent(value: boolean): PostSignupRequest;

  getTosConsent(): boolean;
  setTosConsent(value: boolean): PostSignupRequest;

  getMarketingConsent(): boolean;
  setMarketingConsent(value: boolean): PostSignupRequest;

  getJobTitle(): string;
  setJobTitle(value: string): PostSignupRequest;

  getJobRole(): string;
  setJobRole(value: string): PostSignupRequest;

  getUtm(): Utm | undefined;
  setUtm(value?: Utm): PostSignupRequest;
  hasUtm(): boolean;
  clearUtm(): PostSignupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostSignupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostSignupRequest): PostSignupRequest.AsObject;
  static serializeBinaryToWriter(message: PostSignupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostSignupRequest;
  static deserializeBinaryFromReader(message: PostSignupRequest, reader: jspb.BinaryReader): PostSignupRequest;
}

export namespace PostSignupRequest {
  export type AsObject = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    companyName: string,
    captchaResponseToken: string,
    captchaResponseTokenV3: string,
    awsRegistrationToken: string,
    gdprConsent: boolean,
    tosConsent: boolean,
    marketingConsent: boolean,
    jobTitle: string,
    jobRole: string,
    utm?: Utm.AsObject,
  }
}

export class Utm extends jspb.Message {
  getSource(): string;
  setSource(value: string): Utm;

  getMedium(): string;
  setMedium(value: string): Utm;

  getCampaign(): string;
  setCampaign(value: string): Utm;

  getTerm(): string;
  setTerm(value: string): Utm;

  getContent(): string;
  setContent(value: string): Utm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Utm.AsObject;
  static toObject(includeInstance: boolean, msg: Utm): Utm.AsObject;
  static serializeBinaryToWriter(message: Utm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Utm;
  static deserializeBinaryFromReader(message: Utm, reader: jspb.BinaryReader): Utm;
}

export namespace Utm {
  export type AsObject = {
    source: string,
    medium: string,
    campaign: string,
    term: string,
    content: string,
  }
}

export class SingleLoginResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleLoginResponse;
  hasStatus(): boolean;
  clearStatus(): SingleLoginResponse;

  getEmail(): string;
  setEmail(value: string): SingleLoginResponse;

  getFirstName(): string;
  setFirstName(value: string): SingleLoginResponse;

  getLastName(): string;
  setLastName(value: string): SingleLoginResponse;

  getCompanyName(): string;
  setCompanyName(value: string): SingleLoginResponse;

  getDateJoined(): string;
  setDateJoined(value: string): SingleLoginResponse;

  getEmailAddressesList(): Array<proto_clarifai_api_resources_pb.EmailAddress>;
  setEmailAddressesList(value: Array<proto_clarifai_api_resources_pb.EmailAddress>): SingleLoginResponse;
  clearEmailAddressesList(): SingleLoginResponse;
  addEmailAddresses(value?: proto_clarifai_api_resources_pb.EmailAddress, index?: number): proto_clarifai_api_resources_pb.EmailAddress;

  getSessionToken(): string;
  setSessionToken(value: string): SingleLoginResponse;

  getTokenExpires(): string;
  setTokenExpires(value: string): SingleLoginResponse;

  getV2UserId(): string;
  setV2UserId(value: string): SingleLoginResponse;

  getDateGdprConsent(): string;
  setDateGdprConsent(value: string): SingleLoginResponse;

  getDateTosConsent(): string;
  setDateTosConsent(value: string): SingleLoginResponse;

  getDateMarketingConsent(): string;
  setDateMarketingConsent(value: string): SingleLoginResponse;

  getPasswordExpiredAt(): string;
  setPasswordExpiredAt(value: string): SingleLoginResponse;

  getIsNewUser(): boolean;
  setIsNewUser(value: boolean): SingleLoginResponse;

  getTwoFactorAuthEnabled(): boolean;
  setTwoFactorAuthEnabled(value: boolean): SingleLoginResponse;

  getState(): string;
  setState(value: string): SingleLoginResponse;

  getUserId(): string;
  setUserId(value: string): SingleLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleLoginResponse): SingleLoginResponse.AsObject;
  static serializeBinaryToWriter(message: SingleLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleLoginResponse;
  static deserializeBinaryFromReader(message: SingleLoginResponse, reader: jspb.BinaryReader): SingleLoginResponse;
}

export namespace SingleLoginResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    email: string,
    firstName: string,
    lastName: string,
    companyName: string,
    dateJoined: string,
    emailAddressesList: Array<proto_clarifai_api_resources_pb.EmailAddress.AsObject>,
    sessionToken: string,
    tokenExpires: string,
    v2UserId: string,
    dateGdprConsent: string,
    dateTosConsent: string,
    dateMarketingConsent: string,
    passwordExpiredAt: string,
    isNewUser: boolean,
    twoFactorAuthEnabled: boolean,
    state: string,
    userId: string,
  }
}

export class PostLogoutRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostLogoutRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostLogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostLogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostLogoutRequest): PostLogoutRequest.AsObject;
  static serializeBinaryToWriter(message: PostLogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostLogoutRequest;
  static deserializeBinaryFromReader(message: PostLogoutRequest, reader: jspb.BinaryReader): PostLogoutRequest;
}

export namespace PostLogoutRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class SingleLogoutResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleLogoutResponse;
  hasStatus(): boolean;
  clearStatus(): SingleLogoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleLogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleLogoutResponse): SingleLogoutResponse.AsObject;
  static serializeBinaryToWriter(message: SingleLogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleLogoutResponse;
  static deserializeBinaryFromReader(message: SingleLogoutResponse, reader: jspb.BinaryReader): SingleLogoutResponse;
}

export namespace SingleLogoutResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class GetBillingUsageRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetBillingUsageRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetBillingUsageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingUsageRequest): GetBillingUsageRequest.AsObject;
  static serializeBinaryToWriter(message: GetBillingUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingUsageRequest;
  static deserializeBinaryFromReader(message: GetBillingUsageRequest, reader: jspb.BinaryReader): GetBillingUsageRequest;
}

export namespace GetBillingUsageRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class GetBillingUsageResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): GetBillingUsageResponse;
  hasStatus(): boolean;
  clearStatus(): GetBillingUsageResponse;

  getInvoiceItemsList(): Array<proto_clarifai_api_resources_pb.InvoiceItem>;
  setInvoiceItemsList(value: Array<proto_clarifai_api_resources_pb.InvoiceItem>): GetBillingUsageResponse;
  clearInvoiceItemsList(): GetBillingUsageResponse;
  addInvoiceItems(value?: proto_clarifai_api_resources_pb.InvoiceItem, index?: number): proto_clarifai_api_resources_pb.InvoiceItem;

  getBillingCycle(): proto_clarifai_api_resources_pb.BillingCycle | undefined;
  setBillingCycle(value?: proto_clarifai_api_resources_pb.BillingCycle): GetBillingUsageResponse;
  hasBillingCycle(): boolean;
  clearBillingCycle(): GetBillingUsageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingUsageResponse): GetBillingUsageResponse.AsObject;
  static serializeBinaryToWriter(message: GetBillingUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingUsageResponse;
  static deserializeBinaryFromReader(message: GetBillingUsageResponse, reader: jspb.BinaryReader): GetBillingUsageResponse;
}

export namespace GetBillingUsageResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    invoiceItemsList: Array<proto_clarifai_api_resources_pb.InvoiceItem.AsObject>,
    billingCycle?: proto_clarifai_api_resources_pb.BillingCycle.AsObject,
  }
}

export class GetStatusCodeRequest extends jspb.Message {
  getStatusCodeId(): string;
  setStatusCodeId(value: string): GetStatusCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusCodeRequest): GetStatusCodeRequest.AsObject;
  static serializeBinaryToWriter(message: GetStatusCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusCodeRequest;
  static deserializeBinaryFromReader(message: GetStatusCodeRequest, reader: jspb.BinaryReader): GetStatusCodeRequest;
}

export namespace GetStatusCodeRequest {
  export type AsObject = {
    statusCodeId: string,
  }
}

export class ListStatusCodesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStatusCodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStatusCodesRequest): ListStatusCodesRequest.AsObject;
  static serializeBinaryToWriter(message: ListStatusCodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStatusCodesRequest;
  static deserializeBinaryFromReader(message: ListStatusCodesRequest, reader: jspb.BinaryReader): ListStatusCodesRequest;
}

export namespace ListStatusCodesRequest {
  export type AsObject = {
  }
}

export class SingleStatusCodeResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleStatusCodeResponse;
  hasStatus(): boolean;
  clearStatus(): SingleStatusCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleStatusCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleStatusCodeResponse): SingleStatusCodeResponse.AsObject;
  static serializeBinaryToWriter(message: SingleStatusCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleStatusCodeResponse;
  static deserializeBinaryFromReader(message: SingleStatusCodeResponse, reader: jspb.BinaryReader): SingleStatusCodeResponse;
}

export namespace SingleStatusCodeResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class MultiStatusCodeResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiStatusCodeResponse;
  hasStatus(): boolean;
  clearStatus(): MultiStatusCodeResponse;

  getStatusesList(): Array<proto_clarifai_api_status_status_pb.Status>;
  setStatusesList(value: Array<proto_clarifai_api_status_status_pb.Status>): MultiStatusCodeResponse;
  clearStatusesList(): MultiStatusCodeResponse;
  addStatuses(value?: proto_clarifai_api_status_status_pb.Status, index?: number): proto_clarifai_api_status_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiStatusCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiStatusCodeResponse): MultiStatusCodeResponse.AsObject;
  static serializeBinaryToWriter(message: MultiStatusCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiStatusCodeResponse;
  static deserializeBinaryFromReader(message: MultiStatusCodeResponse, reader: jspb.BinaryReader): MultiStatusCodeResponse;
}

export namespace MultiStatusCodeResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    statusesList: Array<proto_clarifai_api_status_status_pb.Status.AsObject>,
  }
}

export class GetConceptRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetConceptRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetConceptRequest;

  getConceptId(): string;
  setConceptId(value: string): GetConceptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConceptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConceptRequest): GetConceptRequest.AsObject;
  static serializeBinaryToWriter(message: GetConceptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConceptRequest;
  static deserializeBinaryFromReader(message: GetConceptRequest, reader: jspb.BinaryReader): GetConceptRequest;
}

export namespace GetConceptRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
  }
}

export class ListConceptsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListConceptsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListConceptsRequest;

  getPage(): number;
  setPage(value: number): ListConceptsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListConceptsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConceptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConceptsRequest): ListConceptsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConceptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConceptsRequest;
  static deserializeBinaryFromReader(message: ListConceptsRequest, reader: jspb.BinaryReader): ListConceptsRequest;
}

export namespace ListConceptsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class ListModelConceptsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelConceptsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModelConceptsRequest;

  getModelId(): string;
  setModelId(value: string): ListModelConceptsRequest;

  getVersionId(): string;
  setVersionId(value: string): ListModelConceptsRequest;

  getPage(): number;
  setPage(value: number): ListModelConceptsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModelConceptsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelConceptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelConceptsRequest): ListModelConceptsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelConceptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelConceptsRequest;
  static deserializeBinaryFromReader(message: ListModelConceptsRequest, reader: jspb.BinaryReader): ListModelConceptsRequest;
}

export namespace ListModelConceptsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    versionId: string,
    page: number,
    perPage: number,
  }
}

export class PostConceptsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptsSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostConceptsSearchesRequest;

  getConceptQuery(): proto_clarifai_api_resources_pb.ConceptQuery | undefined;
  setConceptQuery(value?: proto_clarifai_api_resources_pb.ConceptQuery): PostConceptsSearchesRequest;
  hasConceptQuery(): boolean;
  clearConceptQuery(): PostConceptsSearchesRequest;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostConceptsSearchesRequest;
  hasPagination(): boolean;
  clearPagination(): PostConceptsSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConceptsSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostConceptsSearchesRequest): PostConceptsSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PostConceptsSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConceptsSearchesRequest;
  static deserializeBinaryFromReader(message: PostConceptsSearchesRequest, reader: jspb.BinaryReader): PostConceptsSearchesRequest;
}

export namespace PostConceptsSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptQuery?: proto_clarifai_api_resources_pb.ConceptQuery.AsObject,
    pagination?: Pagination.AsObject,
  }
}

export class PostConceptsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostConceptsRequest;

  getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
  setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): PostConceptsRequest;
  clearConceptsList(): PostConceptsRequest;
  addConcepts(value?: proto_clarifai_api_resources_pb.Concept, index?: number): proto_clarifai_api_resources_pb.Concept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConceptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostConceptsRequest): PostConceptsRequest.AsObject;
  static serializeBinaryToWriter(message: PostConceptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConceptsRequest;
  static deserializeBinaryFromReader(message: PostConceptsRequest, reader: jspb.BinaryReader): PostConceptsRequest;
}

export namespace PostConceptsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptsList: Array<proto_clarifai_api_resources_pb.Concept.AsObject>,
  }
}

export class PatchConceptsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchConceptsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchConceptsRequest;

  getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
  setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): PatchConceptsRequest;
  clearConceptsList(): PatchConceptsRequest;
  addConcepts(value?: proto_clarifai_api_resources_pb.Concept, index?: number): proto_clarifai_api_resources_pb.Concept;

  getAction(): string;
  setAction(value: string): PatchConceptsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchConceptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchConceptsRequest): PatchConceptsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchConceptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchConceptsRequest;
  static deserializeBinaryFromReader(message: PatchConceptsRequest, reader: jspb.BinaryReader): PatchConceptsRequest;
}

export namespace PatchConceptsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptsList: Array<proto_clarifai_api_resources_pb.Concept.AsObject>,
    action: string,
  }
}

export class GetConceptCountsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetConceptCountsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetConceptCountsRequest;

  getPage(): number;
  setPage(value: number): GetConceptCountsRequest;

  getPerPage(): number;
  setPerPage(value: number): GetConceptCountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConceptCountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConceptCountsRequest): GetConceptCountsRequest.AsObject;
  static serializeBinaryToWriter(message: GetConceptCountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConceptCountsRequest;
  static deserializeBinaryFromReader(message: GetConceptCountsRequest, reader: jspb.BinaryReader): GetConceptCountsRequest;
}

export namespace GetConceptCountsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class SingleConceptResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleConceptResponse;
  hasStatus(): boolean;
  clearStatus(): SingleConceptResponse;

  getConcept(): proto_clarifai_api_resources_pb.Concept | undefined;
  setConcept(value?: proto_clarifai_api_resources_pb.Concept): SingleConceptResponse;
  hasConcept(): boolean;
  clearConcept(): SingleConceptResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleConceptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleConceptResponse): SingleConceptResponse.AsObject;
  static serializeBinaryToWriter(message: SingleConceptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleConceptResponse;
  static deserializeBinaryFromReader(message: SingleConceptResponse, reader: jspb.BinaryReader): SingleConceptResponse;
}

export namespace SingleConceptResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    concept?: proto_clarifai_api_resources_pb.Concept.AsObject,
  }
}

export class MultiConceptResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptResponse;
  hasStatus(): boolean;
  clearStatus(): MultiConceptResponse;

  getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
  setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): MultiConceptResponse;
  clearConceptsList(): MultiConceptResponse;
  addConcepts(value?: proto_clarifai_api_resources_pb.Concept, index?: number): proto_clarifai_api_resources_pb.Concept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiConceptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiConceptResponse): MultiConceptResponse.AsObject;
  static serializeBinaryToWriter(message: MultiConceptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiConceptResponse;
  static deserializeBinaryFromReader(message: MultiConceptResponse, reader: jspb.BinaryReader): MultiConceptResponse;
}

export namespace MultiConceptResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptsList: Array<proto_clarifai_api_resources_pb.Concept.AsObject>,
  }
}

export class MultiConceptCountResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptCountResponse;
  hasStatus(): boolean;
  clearStatus(): MultiConceptCountResponse;

  getConceptCountsList(): Array<proto_clarifai_api_resources_pb.ConceptCount>;
  setConceptCountsList(value: Array<proto_clarifai_api_resources_pb.ConceptCount>): MultiConceptCountResponse;
  clearConceptCountsList(): MultiConceptCountResponse;
  addConceptCounts(value?: proto_clarifai_api_resources_pb.ConceptCount, index?: number): proto_clarifai_api_resources_pb.ConceptCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiConceptCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiConceptCountResponse): MultiConceptCountResponse.AsObject;
  static serializeBinaryToWriter(message: MultiConceptCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiConceptCountResponse;
  static deserializeBinaryFromReader(message: MultiConceptCountResponse, reader: jspb.BinaryReader): MultiConceptCountResponse;
}

export namespace MultiConceptCountResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptCountsList: Array<proto_clarifai_api_resources_pb.ConceptCount.AsObject>,
  }
}

export class ListConceptRelationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListConceptRelationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListConceptRelationsRequest;

  getConceptId(): string;
  setConceptId(value: string): ListConceptRelationsRequest;

  getPredicate(): string;
  setPredicate(value: string): ListConceptRelationsRequest;

  getKnowledgeGraphId(): string;
  setKnowledgeGraphId(value: string): ListConceptRelationsRequest;

  getPage(): number;
  setPage(value: number): ListConceptRelationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListConceptRelationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConceptRelationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConceptRelationsRequest): ListConceptRelationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConceptRelationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConceptRelationsRequest;
  static deserializeBinaryFromReader(message: ListConceptRelationsRequest, reader: jspb.BinaryReader): ListConceptRelationsRequest;
}

export namespace ListConceptRelationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
    predicate: string,
    knowledgeGraphId: string,
    page: number,
    perPage: number,
  }
}

export class PostConceptRelationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptRelationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostConceptRelationsRequest;

  getConceptId(): string;
  setConceptId(value: string): PostConceptRelationsRequest;

  getConceptRelationsList(): Array<proto_clarifai_api_resources_pb.ConceptRelation>;
  setConceptRelationsList(value: Array<proto_clarifai_api_resources_pb.ConceptRelation>): PostConceptRelationsRequest;
  clearConceptRelationsList(): PostConceptRelationsRequest;
  addConceptRelations(value?: proto_clarifai_api_resources_pb.ConceptRelation, index?: number): proto_clarifai_api_resources_pb.ConceptRelation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConceptRelationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostConceptRelationsRequest): PostConceptRelationsRequest.AsObject;
  static serializeBinaryToWriter(message: PostConceptRelationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConceptRelationsRequest;
  static deserializeBinaryFromReader(message: PostConceptRelationsRequest, reader: jspb.BinaryReader): PostConceptRelationsRequest;
}

export namespace PostConceptRelationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
    conceptRelationsList: Array<proto_clarifai_api_resources_pb.ConceptRelation.AsObject>,
  }
}

export class DeleteConceptRelationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteConceptRelationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteConceptRelationsRequest;

  getConceptId(): string;
  setConceptId(value: string): DeleteConceptRelationsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteConceptRelationsRequest;
  clearIdsList(): DeleteConceptRelationsRequest;
  addIds(value: string, index?: number): DeleteConceptRelationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConceptRelationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConceptRelationsRequest): DeleteConceptRelationsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConceptRelationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConceptRelationsRequest;
  static deserializeBinaryFromReader(message: DeleteConceptRelationsRequest, reader: jspb.BinaryReader): DeleteConceptRelationsRequest;
}

export namespace DeleteConceptRelationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
    idsList: Array<string>,
  }
}

export class ListKnowledgeGraphsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListKnowledgeGraphsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListKnowledgeGraphsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKnowledgeGraphsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKnowledgeGraphsRequest): ListKnowledgeGraphsRequest.AsObject;
  static serializeBinaryToWriter(message: ListKnowledgeGraphsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKnowledgeGraphsRequest;
  static deserializeBinaryFromReader(message: ListKnowledgeGraphsRequest, reader: jspb.BinaryReader): ListKnowledgeGraphsRequest;
}

export namespace ListKnowledgeGraphsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostKnowledgeGraphsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostKnowledgeGraphsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostKnowledgeGraphsRequest;

  getKnowledgeGraphsList(): Array<proto_clarifai_api_resources_pb.KnowledgeGraph>;
  setKnowledgeGraphsList(value: Array<proto_clarifai_api_resources_pb.KnowledgeGraph>): PostKnowledgeGraphsRequest;
  clearKnowledgeGraphsList(): PostKnowledgeGraphsRequest;
  addKnowledgeGraphs(value?: proto_clarifai_api_resources_pb.KnowledgeGraph, index?: number): proto_clarifai_api_resources_pb.KnowledgeGraph;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostKnowledgeGraphsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostKnowledgeGraphsRequest): PostKnowledgeGraphsRequest.AsObject;
  static serializeBinaryToWriter(message: PostKnowledgeGraphsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostKnowledgeGraphsRequest;
  static deserializeBinaryFromReader(message: PostKnowledgeGraphsRequest, reader: jspb.BinaryReader): PostKnowledgeGraphsRequest;
}

export namespace PostKnowledgeGraphsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    knowledgeGraphsList: Array<proto_clarifai_api_resources_pb.KnowledgeGraph.AsObject>,
  }
}

export class ListConceptMappingsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListConceptMappingsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListConceptMappingsRequest;

  getPage(): number;
  setPage(value: number): ListConceptMappingsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListConceptMappingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConceptMappingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConceptMappingsRequest): ListConceptMappingsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConceptMappingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConceptMappingsRequest;
  static deserializeBinaryFromReader(message: ListConceptMappingsRequest, reader: jspb.BinaryReader): ListConceptMappingsRequest;
}

export namespace ListConceptMappingsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class PostConceptMappingsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptMappingsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostConceptMappingsRequest;

  getConceptMappingsList(): Array<proto_clarifai_api_resources_pb.ConceptMapping>;
  setConceptMappingsList(value: Array<proto_clarifai_api_resources_pb.ConceptMapping>): PostConceptMappingsRequest;
  clearConceptMappingsList(): PostConceptMappingsRequest;
  addConceptMappings(value?: proto_clarifai_api_resources_pb.ConceptMapping, index?: number): proto_clarifai_api_resources_pb.ConceptMapping;

  getKnowledgeGraph(): proto_clarifai_api_resources_pb.KnowledgeGraph | undefined;
  setKnowledgeGraph(value?: proto_clarifai_api_resources_pb.KnowledgeGraph): PostConceptMappingsRequest;
  hasKnowledgeGraph(): boolean;
  clearKnowledgeGraph(): PostConceptMappingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConceptMappingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostConceptMappingsRequest): PostConceptMappingsRequest.AsObject;
  static serializeBinaryToWriter(message: PostConceptMappingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConceptMappingsRequest;
  static deserializeBinaryFromReader(message: PostConceptMappingsRequest, reader: jspb.BinaryReader): PostConceptMappingsRequest;
}

export namespace PostConceptMappingsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptMappingsList: Array<proto_clarifai_api_resources_pb.ConceptMapping.AsObject>,
    knowledgeGraph?: proto_clarifai_api_resources_pb.KnowledgeGraph.AsObject,
  }
}

export class PostConceptMappingJobsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptMappingJobsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostConceptMappingJobsRequest;

  getConceptMappingJobsList(): Array<proto_clarifai_api_resources_pb.ConceptMappingJob>;
  setConceptMappingJobsList(value: Array<proto_clarifai_api_resources_pb.ConceptMappingJob>): PostConceptMappingJobsRequest;
  clearConceptMappingJobsList(): PostConceptMappingJobsRequest;
  addConceptMappingJobs(value?: proto_clarifai_api_resources_pb.ConceptMappingJob, index?: number): proto_clarifai_api_resources_pb.ConceptMappingJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConceptMappingJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostConceptMappingJobsRequest): PostConceptMappingJobsRequest.AsObject;
  static serializeBinaryToWriter(message: PostConceptMappingJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConceptMappingJobsRequest;
  static deserializeBinaryFromReader(message: PostConceptMappingJobsRequest, reader: jspb.BinaryReader): PostConceptMappingJobsRequest;
}

export namespace PostConceptMappingJobsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptMappingJobsList: Array<proto_clarifai_api_resources_pb.ConceptMappingJob.AsObject>,
  }
}

export class SingleConceptRelationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleConceptRelationResponse;
  hasStatus(): boolean;
  clearStatus(): SingleConceptRelationResponse;

  getConceptRelation(): proto_clarifai_api_resources_pb.ConceptRelation | undefined;
  setConceptRelation(value?: proto_clarifai_api_resources_pb.ConceptRelation): SingleConceptRelationResponse;
  hasConceptRelation(): boolean;
  clearConceptRelation(): SingleConceptRelationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleConceptRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleConceptRelationResponse): SingleConceptRelationResponse.AsObject;
  static serializeBinaryToWriter(message: SingleConceptRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleConceptRelationResponse;
  static deserializeBinaryFromReader(message: SingleConceptRelationResponse, reader: jspb.BinaryReader): SingleConceptRelationResponse;
}

export namespace SingleConceptRelationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptRelation?: proto_clarifai_api_resources_pb.ConceptRelation.AsObject,
  }
}

export class MultiConceptRelationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptRelationResponse;
  hasStatus(): boolean;
  clearStatus(): MultiConceptRelationResponse;

  getConceptRelationsList(): Array<proto_clarifai_api_resources_pb.ConceptRelation>;
  setConceptRelationsList(value: Array<proto_clarifai_api_resources_pb.ConceptRelation>): MultiConceptRelationResponse;
  clearConceptRelationsList(): MultiConceptRelationResponse;
  addConceptRelations(value?: proto_clarifai_api_resources_pb.ConceptRelation, index?: number): proto_clarifai_api_resources_pb.ConceptRelation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiConceptRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiConceptRelationResponse): MultiConceptRelationResponse.AsObject;
  static serializeBinaryToWriter(message: MultiConceptRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiConceptRelationResponse;
  static deserializeBinaryFromReader(message: MultiConceptRelationResponse, reader: jspb.BinaryReader): MultiConceptRelationResponse;
}

export namespace MultiConceptRelationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptRelationsList: Array<proto_clarifai_api_resources_pb.ConceptRelation.AsObject>,
  }
}

export class SingleKnowledgeGraphResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleKnowledgeGraphResponse;
  hasStatus(): boolean;
  clearStatus(): SingleKnowledgeGraphResponse;

  getKnowledgeGraph(): proto_clarifai_api_resources_pb.KnowledgeGraph | undefined;
  setKnowledgeGraph(value?: proto_clarifai_api_resources_pb.KnowledgeGraph): SingleKnowledgeGraphResponse;
  hasKnowledgeGraph(): boolean;
  clearKnowledgeGraph(): SingleKnowledgeGraphResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleKnowledgeGraphResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleKnowledgeGraphResponse): SingleKnowledgeGraphResponse.AsObject;
  static serializeBinaryToWriter(message: SingleKnowledgeGraphResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleKnowledgeGraphResponse;
  static deserializeBinaryFromReader(message: SingleKnowledgeGraphResponse, reader: jspb.BinaryReader): SingleKnowledgeGraphResponse;
}

export namespace SingleKnowledgeGraphResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    knowledgeGraph?: proto_clarifai_api_resources_pb.KnowledgeGraph.AsObject,
  }
}

export class MultiKnowledgeGraphResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiKnowledgeGraphResponse;
  hasStatus(): boolean;
  clearStatus(): MultiKnowledgeGraphResponse;

  getKnowledgeGraphsList(): Array<proto_clarifai_api_resources_pb.KnowledgeGraph>;
  setKnowledgeGraphsList(value: Array<proto_clarifai_api_resources_pb.KnowledgeGraph>): MultiKnowledgeGraphResponse;
  clearKnowledgeGraphsList(): MultiKnowledgeGraphResponse;
  addKnowledgeGraphs(value?: proto_clarifai_api_resources_pb.KnowledgeGraph, index?: number): proto_clarifai_api_resources_pb.KnowledgeGraph;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiKnowledgeGraphResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiKnowledgeGraphResponse): MultiKnowledgeGraphResponse.AsObject;
  static serializeBinaryToWriter(message: MultiKnowledgeGraphResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiKnowledgeGraphResponse;
  static deserializeBinaryFromReader(message: MultiKnowledgeGraphResponse, reader: jspb.BinaryReader): MultiKnowledgeGraphResponse;
}

export namespace MultiKnowledgeGraphResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    knowledgeGraphsList: Array<proto_clarifai_api_resources_pb.KnowledgeGraph.AsObject>,
  }
}

export class SingleConceptMappingResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleConceptMappingResponse;
  hasStatus(): boolean;
  clearStatus(): SingleConceptMappingResponse;

  getConceptMapping(): proto_clarifai_api_resources_pb.ConceptMapping | undefined;
  setConceptMapping(value?: proto_clarifai_api_resources_pb.ConceptMapping): SingleConceptMappingResponse;
  hasConceptMapping(): boolean;
  clearConceptMapping(): SingleConceptMappingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleConceptMappingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleConceptMappingResponse): SingleConceptMappingResponse.AsObject;
  static serializeBinaryToWriter(message: SingleConceptMappingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleConceptMappingResponse;
  static deserializeBinaryFromReader(message: SingleConceptMappingResponse, reader: jspb.BinaryReader): SingleConceptMappingResponse;
}

export namespace SingleConceptMappingResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptMapping?: proto_clarifai_api_resources_pb.ConceptMapping.AsObject,
  }
}

export class MultiConceptMappingResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptMappingResponse;
  hasStatus(): boolean;
  clearStatus(): MultiConceptMappingResponse;

  getConceptMappingsList(): Array<proto_clarifai_api_resources_pb.ConceptMapping>;
  setConceptMappingsList(value: Array<proto_clarifai_api_resources_pb.ConceptMapping>): MultiConceptMappingResponse;
  clearConceptMappingsList(): MultiConceptMappingResponse;
  addConceptMappings(value?: proto_clarifai_api_resources_pb.ConceptMapping, index?: number): proto_clarifai_api_resources_pb.ConceptMapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiConceptMappingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiConceptMappingResponse): MultiConceptMappingResponse.AsObject;
  static serializeBinaryToWriter(message: MultiConceptMappingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiConceptMappingResponse;
  static deserializeBinaryFromReader(message: MultiConceptMappingResponse, reader: jspb.BinaryReader): MultiConceptMappingResponse;
}

export namespace MultiConceptMappingResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptMappingsList: Array<proto_clarifai_api_resources_pb.ConceptMapping.AsObject>,
  }
}

export class SingleConceptMappingJobResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleConceptMappingJobResponse;
  hasStatus(): boolean;
  clearStatus(): SingleConceptMappingJobResponse;

  getId(): string;
  setId(value: string): SingleConceptMappingJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleConceptMappingJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleConceptMappingJobResponse): SingleConceptMappingJobResponse.AsObject;
  static serializeBinaryToWriter(message: SingleConceptMappingJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleConceptMappingJobResponse;
  static deserializeBinaryFromReader(message: SingleConceptMappingJobResponse, reader: jspb.BinaryReader): SingleConceptMappingJobResponse;
}

export namespace SingleConceptMappingJobResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    id: string,
  }
}

export class MultiConceptMappingJobResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptMappingJobResponse;
  hasStatus(): boolean;
  clearStatus(): MultiConceptMappingJobResponse;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): MultiConceptMappingJobResponse;
  clearIdsList(): MultiConceptMappingJobResponse;
  addIds(value: string, index?: number): MultiConceptMappingJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiConceptMappingJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiConceptMappingJobResponse): MultiConceptMappingJobResponse.AsObject;
  static serializeBinaryToWriter(message: MultiConceptMappingJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiConceptMappingJobResponse;
  static deserializeBinaryFromReader(message: MultiConceptMappingJobResponse, reader: jspb.BinaryReader): MultiConceptMappingJobResponse;
}

export namespace MultiConceptMappingJobResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    idsList: Array<string>,
  }
}

export class GetConceptLanguageRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetConceptLanguageRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetConceptLanguageRequest;

  getConceptId(): string;
  setConceptId(value: string): GetConceptLanguageRequest;

  getLanguage(): string;
  setLanguage(value: string): GetConceptLanguageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConceptLanguageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConceptLanguageRequest): GetConceptLanguageRequest.AsObject;
  static serializeBinaryToWriter(message: GetConceptLanguageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConceptLanguageRequest;
  static deserializeBinaryFromReader(message: GetConceptLanguageRequest, reader: jspb.BinaryReader): GetConceptLanguageRequest;
}

export namespace GetConceptLanguageRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
    language: string,
  }
}

export class ListConceptLanguagesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListConceptLanguagesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListConceptLanguagesRequest;

  getConceptId(): string;
  setConceptId(value: string): ListConceptLanguagesRequest;

  getPage(): number;
  setPage(value: number): ListConceptLanguagesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListConceptLanguagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConceptLanguagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConceptLanguagesRequest): ListConceptLanguagesRequest.AsObject;
  static serializeBinaryToWriter(message: ListConceptLanguagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConceptLanguagesRequest;
  static deserializeBinaryFromReader(message: ListConceptLanguagesRequest, reader: jspb.BinaryReader): ListConceptLanguagesRequest;
}

export namespace ListConceptLanguagesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
    page: number,
    perPage: number,
  }
}

export class PatchConceptLanguagesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchConceptLanguagesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchConceptLanguagesRequest;

  getConceptId(): string;
  setConceptId(value: string): PatchConceptLanguagesRequest;

  getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
  setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): PatchConceptLanguagesRequest;
  clearConceptLanguagesList(): PatchConceptLanguagesRequest;
  addConceptLanguages(value?: proto_clarifai_api_resources_pb.ConceptLanguage, index?: number): proto_clarifai_api_resources_pb.ConceptLanguage;

  getAction(): string;
  setAction(value: string): PatchConceptLanguagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchConceptLanguagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchConceptLanguagesRequest): PatchConceptLanguagesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchConceptLanguagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchConceptLanguagesRequest;
  static deserializeBinaryFromReader(message: PatchConceptLanguagesRequest, reader: jspb.BinaryReader): PatchConceptLanguagesRequest;
}

export namespace PatchConceptLanguagesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
    conceptLanguagesList: Array<proto_clarifai_api_resources_pb.ConceptLanguage.AsObject>,
    action: string,
  }
}

export class PostConceptLanguagesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptLanguagesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostConceptLanguagesRequest;

  getConceptId(): string;
  setConceptId(value: string): PostConceptLanguagesRequest;

  getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
  setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): PostConceptLanguagesRequest;
  clearConceptLanguagesList(): PostConceptLanguagesRequest;
  addConceptLanguages(value?: proto_clarifai_api_resources_pb.ConceptLanguage, index?: number): proto_clarifai_api_resources_pb.ConceptLanguage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConceptLanguagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostConceptLanguagesRequest): PostConceptLanguagesRequest.AsObject;
  static serializeBinaryToWriter(message: PostConceptLanguagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConceptLanguagesRequest;
  static deserializeBinaryFromReader(message: PostConceptLanguagesRequest, reader: jspb.BinaryReader): PostConceptLanguagesRequest;
}

export namespace PostConceptLanguagesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
    conceptLanguagesList: Array<proto_clarifai_api_resources_pb.ConceptLanguage.AsObject>,
  }
}

export class SingleConceptLanguageResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleConceptLanguageResponse;
  hasStatus(): boolean;
  clearStatus(): SingleConceptLanguageResponse;

  getConceptLanguage(): proto_clarifai_api_resources_pb.ConceptLanguage | undefined;
  setConceptLanguage(value?: proto_clarifai_api_resources_pb.ConceptLanguage): SingleConceptLanguageResponse;
  hasConceptLanguage(): boolean;
  clearConceptLanguage(): SingleConceptLanguageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleConceptLanguageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleConceptLanguageResponse): SingleConceptLanguageResponse.AsObject;
  static serializeBinaryToWriter(message: SingleConceptLanguageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleConceptLanguageResponse;
  static deserializeBinaryFromReader(message: SingleConceptLanguageResponse, reader: jspb.BinaryReader): SingleConceptLanguageResponse;
}

export namespace SingleConceptLanguageResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptLanguage?: proto_clarifai_api_resources_pb.ConceptLanguage.AsObject,
  }
}

export class MultiConceptLanguageResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptLanguageResponse;
  hasStatus(): boolean;
  clearStatus(): MultiConceptLanguageResponse;

  getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
  setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): MultiConceptLanguageResponse;
  clearConceptLanguagesList(): MultiConceptLanguageResponse;
  addConceptLanguages(value?: proto_clarifai_api_resources_pb.ConceptLanguage, index?: number): proto_clarifai_api_resources_pb.ConceptLanguage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiConceptLanguageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiConceptLanguageResponse): MultiConceptLanguageResponse.AsObject;
  static serializeBinaryToWriter(message: MultiConceptLanguageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiConceptLanguageResponse;
  static deserializeBinaryFromReader(message: MultiConceptLanguageResponse, reader: jspb.BinaryReader): MultiConceptLanguageResponse;
}

export namespace MultiConceptLanguageResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptLanguagesList: Array<proto_clarifai_api_resources_pb.ConceptLanguage.AsObject>,
  }
}

export class ListConceptReferencesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListConceptReferencesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListConceptReferencesRequest;

  getConceptId(): string;
  setConceptId(value: string): ListConceptReferencesRequest;

  getPage(): number;
  setPage(value: number): ListConceptReferencesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListConceptReferencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConceptReferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConceptReferencesRequest): ListConceptReferencesRequest.AsObject;
  static serializeBinaryToWriter(message: ListConceptReferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConceptReferencesRequest;
  static deserializeBinaryFromReader(message: ListConceptReferencesRequest, reader: jspb.BinaryReader): ListConceptReferencesRequest;
}

export namespace ListConceptReferencesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    conceptId: string,
    page: number,
    perPage: number,
  }
}

export class SingleConceptReferenceResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleConceptReferenceResponse;
  hasStatus(): boolean;
  clearStatus(): SingleConceptReferenceResponse;

  getConceptReference(): proto_clarifai_api_resources_pb.ConceptReference | undefined;
  setConceptReference(value?: proto_clarifai_api_resources_pb.ConceptReference): SingleConceptReferenceResponse;
  hasConceptReference(): boolean;
  clearConceptReference(): SingleConceptReferenceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleConceptReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleConceptReferenceResponse): SingleConceptReferenceResponse.AsObject;
  static serializeBinaryToWriter(message: SingleConceptReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleConceptReferenceResponse;
  static deserializeBinaryFromReader(message: SingleConceptReferenceResponse, reader: jspb.BinaryReader): SingleConceptReferenceResponse;
}

export namespace SingleConceptReferenceResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptReference?: proto_clarifai_api_resources_pb.ConceptReference.AsObject,
  }
}

export class MultiConceptReferenceResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptReferenceResponse;
  hasStatus(): boolean;
  clearStatus(): MultiConceptReferenceResponse;

  getConceptReferencesList(): Array<proto_clarifai_api_resources_pb.ConceptReference>;
  setConceptReferencesList(value: Array<proto_clarifai_api_resources_pb.ConceptReference>): MultiConceptReferenceResponse;
  clearConceptReferencesList(): MultiConceptReferenceResponse;
  addConceptReferences(value?: proto_clarifai_api_resources_pb.ConceptReference, index?: number): proto_clarifai_api_resources_pb.ConceptReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiConceptReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiConceptReferenceResponse): MultiConceptReferenceResponse.AsObject;
  static serializeBinaryToWriter(message: MultiConceptReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiConceptReferenceResponse;
  static deserializeBinaryFromReader(message: MultiConceptReferenceResponse, reader: jspb.BinaryReader): MultiConceptReferenceResponse;
}

export namespace MultiConceptReferenceResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    conceptReferencesList: Array<proto_clarifai_api_resources_pb.ConceptReference.AsObject>,
  }
}

export class GetHealthzRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHealthzRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHealthzRequest): GetHealthzRequest.AsObject;
  static serializeBinaryToWriter(message: GetHealthzRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHealthzRequest;
  static deserializeBinaryFromReader(message: GetHealthzRequest, reader: jspb.BinaryReader): GetHealthzRequest;
}

export namespace GetHealthzRequest {
  export type AsObject = {
  }
}

export class GetHealthzResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): GetHealthzResponse;
  hasStatus(): boolean;
  clearStatus(): GetHealthzResponse;

  getTime(): string;
  setTime(value: string): GetHealthzResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHealthzResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHealthzResponse): GetHealthzResponse.AsObject;
  static serializeBinaryToWriter(message: GetHealthzResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHealthzResponse;
  static deserializeBinaryFromReader(message: GetHealthzResponse, reader: jspb.BinaryReader): GetHealthzResponse;
}

export namespace GetHealthzResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    time: string,
  }
}

export class GetInputRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetInputRequest;

  getInputId(): string;
  setInputId(value: string): GetInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInputRequest): GetInputRequest.AsObject;
  static serializeBinaryToWriter(message: GetInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInputRequest;
  static deserializeBinaryFromReader(message: GetInputRequest, reader: jspb.BinaryReader): GetInputRequest;
}

export namespace GetInputRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    inputId: string,
  }
}

export class GetInputSamplesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputSamplesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetInputSamplesRequest;

  getTaskId(): string;
  setTaskId(value: string): GetInputSamplesRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): GetInputSamplesRequest;
  clearUserIdsList(): GetInputSamplesRequest;
  addUserIds(value: string, index?: number): GetInputSamplesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInputSamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInputSamplesRequest): GetInputSamplesRequest.AsObject;
  static serializeBinaryToWriter(message: GetInputSamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInputSamplesRequest;
  static deserializeBinaryFromReader(message: GetInputSamplesRequest, reader: jspb.BinaryReader): GetInputSamplesRequest;
}

export namespace GetInputSamplesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    taskId: string,
    userIdsList: Array<string>,
  }
}

export class ListInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListInputsRequest;

  getPage(): number;
  setPage(value: number): ListInputsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListInputsRequest;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ListInputsRequest;
  hasStatus(): boolean;
  clearStatus(): ListInputsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListInputsRequest;
  clearIdsList(): ListInputsRequest;
  addIds(value: string, index?: number): ListInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInputsRequest): ListInputsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInputsRequest;
  static deserializeBinaryFromReader(message: ListInputsRequest, reader: jspb.BinaryReader): ListInputsRequest;
}

export namespace ListInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    idsList: Array<string>,
  }
}

export class StreamInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): StreamInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): StreamInputsRequest;

  getPerPage(): number;
  setPerPage(value: number): StreamInputsRequest;

  getLastId(): string;
  setLastId(value: string): StreamInputsRequest;

  getOrderById(): boolean;
  setOrderById(value: boolean): StreamInputsRequest;

  getDescending(): boolean;
  setDescending(value: boolean): StreamInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamInputsRequest): StreamInputsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamInputsRequest;
  static deserializeBinaryFromReader(message: StreamInputsRequest, reader: jspb.BinaryReader): StreamInputsRequest;
}

export namespace StreamInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    perPage: number,
    lastId: string,
    orderById: boolean,
    descending: boolean,
  }
}

export class PostInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostInputsRequest;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostInputsRequest;
  clearInputsList(): PostInputsRequest;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getInputsAddJobId(): string;
  setInputsAddJobId(value: string): PostInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostInputsRequest): PostInputsRequest.AsObject;
  static serializeBinaryToWriter(message: PostInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInputsRequest;
  static deserializeBinaryFromReader(message: PostInputsRequest, reader: jspb.BinaryReader): PostInputsRequest;
}

export namespace PostInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
    inputsAddJobId: string,
  }
}

export class PostInputsFileRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsFileRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostInputsFileRequest;

  getUrl(): string;
  setUrl(value: string): PostInputsFileRequest;

  getFiletype(): string;
  setFiletype(value: string): PostInputsFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInputsFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostInputsFileRequest): PostInputsFileRequest.AsObject;
  static serializeBinaryToWriter(message: PostInputsFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInputsFileRequest;
  static deserializeBinaryFromReader(message: PostInputsFileRequest, reader: jspb.BinaryReader): PostInputsFileRequest;
}

export namespace PostInputsFileRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    url: string,
    filetype: string,
  }
}

export class PostInputsNiFiRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsNiFiRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostInputsNiFiRequest;

  getUrls(): google_protobuf_struct_pb.ListValue | undefined;
  setUrls(value?: google_protobuf_struct_pb.ListValue): PostInputsNiFiRequest;
  hasUrls(): boolean;
  clearUrls(): PostInputsNiFiRequest;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): PostInputsNiFiRequest;
  hasMetadata(): boolean;
  clearMetadata(): PostInputsNiFiRequest;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): PostInputsNiFiRequest;
  hasParams(): boolean;
  clearParams(): PostInputsNiFiRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInputsNiFiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostInputsNiFiRequest): PostInputsNiFiRequest.AsObject;
  static serializeBinaryToWriter(message: PostInputsNiFiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInputsNiFiRequest;
  static deserializeBinaryFromReader(message: PostInputsNiFiRequest, reader: jspb.BinaryReader): PostInputsNiFiRequest;
}

export namespace PostInputsNiFiRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    urls?: google_protobuf_struct_pb.ListValue.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    params?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PostInputsDocumentRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsDocumentRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostInputsDocumentRequest;

  getBody(): PostInputsDocumentRequestBody | undefined;
  setBody(value?: PostInputsDocumentRequestBody): PostInputsDocumentRequest;
  hasBody(): boolean;
  clearBody(): PostInputsDocumentRequest;

  getStatuscallbackurl(): string;
  setStatuscallbackurl(value: string): PostInputsDocumentRequest;

  getEntitycallbackurl(): string;
  setEntitycallbackurl(value: string): PostInputsDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInputsDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostInputsDocumentRequest): PostInputsDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: PostInputsDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInputsDocumentRequest;
  static deserializeBinaryFromReader(message: PostInputsDocumentRequest, reader: jspb.BinaryReader): PostInputsDocumentRequest;
}

export namespace PostInputsDocumentRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    body?: PostInputsDocumentRequestBody.AsObject,
    statuscallbackurl: string,
    entitycallbackurl: string,
  }
}

export class PostInputsDocumentRequestBody extends jspb.Message {
  getBatchidT(): string;
  setBatchidT(value: string): PostInputsDocumentRequestBody;

  getDocument(): google_protobuf_struct_pb.ListValue | undefined;
  setDocument(value?: google_protobuf_struct_pb.ListValue): PostInputsDocumentRequestBody;
  hasDocument(): boolean;
  clearDocument(): PostInputsDocumentRequestBody;

  getComplete(): google_protobuf_struct_pb.Struct | undefined;
  setComplete(value?: google_protobuf_struct_pb.Struct): PostInputsDocumentRequestBody;
  hasComplete(): boolean;
  clearComplete(): PostInputsDocumentRequestBody;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): PostInputsDocumentRequestBody;
  hasMetadata(): boolean;
  clearMetadata(): PostInputsDocumentRequestBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInputsDocumentRequestBody.AsObject;
  static toObject(includeInstance: boolean, msg: PostInputsDocumentRequestBody): PostInputsDocumentRequestBody.AsObject;
  static serializeBinaryToWriter(message: PostInputsDocumentRequestBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInputsDocumentRequestBody;
  static deserializeBinaryFromReader(message: PostInputsDocumentRequestBody, reader: jspb.BinaryReader): PostInputsDocumentRequestBody;
}

export namespace PostInputsDocumentRequestBody {
  export type AsObject = {
    batchidT: string,
    document?: google_protobuf_struct_pb.ListValue.AsObject,
    complete?: google_protobuf_struct_pb.Struct.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PatchInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchInputsRequest;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PatchInputsRequest;
  clearInputsList(): PatchInputsRequest;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getAction(): string;
  setAction(value: string): PatchInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchInputsRequest): PatchInputsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchInputsRequest;
  static deserializeBinaryFromReader(message: PatchInputsRequest, reader: jspb.BinaryReader): PatchInputsRequest;
}

export namespace PatchInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
    action: string,
  }
}

export class DeleteInputRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteInputRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteInputRequest;

  getInputId(): string;
  setInputId(value: string): DeleteInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInputRequest): DeleteInputRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInputRequest;
  static deserializeBinaryFromReader(message: DeleteInputRequest, reader: jspb.BinaryReader): DeleteInputRequest;
}

export namespace DeleteInputRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    inputId: string,
  }
}

export class DeleteInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteInputsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteInputsRequest;
  clearIdsList(): DeleteInputsRequest;
  addIds(value: string, index?: number): DeleteInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInputsRequest): DeleteInputsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInputsRequest;
  static deserializeBinaryFromReader(message: DeleteInputsRequest, reader: jspb.BinaryReader): DeleteInputsRequest;
}

export namespace DeleteInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class SingleInputResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInputResponse;
  hasStatus(): boolean;
  clearStatus(): SingleInputResponse;

  getInput(): proto_clarifai_api_resources_pb.Input | undefined;
  setInput(value?: proto_clarifai_api_resources_pb.Input): SingleInputResponse;
  hasInput(): boolean;
  clearInput(): SingleInputResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleInputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleInputResponse): SingleInputResponse.AsObject;
  static serializeBinaryToWriter(message: SingleInputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleInputResponse;
  static deserializeBinaryFromReader(message: SingleInputResponse, reader: jspb.BinaryReader): SingleInputResponse;
}

export namespace SingleInputResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    input?: proto_clarifai_api_resources_pb.Input.AsObject,
  }
}

export class MultiInputResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInputResponse;
  hasStatus(): boolean;
  clearStatus(): MultiInputResponse;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): MultiInputResponse;
  clearInputsList(): MultiInputResponse;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getInputsAddJob(): proto_clarifai_api_resources_pb.InputsAddJob | undefined;
  setInputsAddJob(value?: proto_clarifai_api_resources_pb.InputsAddJob): MultiInputResponse;
  hasInputsAddJob(): boolean;
  clearInputsAddJob(): MultiInputResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiInputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiInputResponse): MultiInputResponse.AsObject;
  static serializeBinaryToWriter(message: MultiInputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiInputResponse;
  static deserializeBinaryFromReader(message: MultiInputResponse, reader: jspb.BinaryReader): MultiInputResponse;
}

export namespace MultiInputResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
    inputsAddJob?: proto_clarifai_api_resources_pb.InputsAddJob.AsObject,
  }
}

export class MultiInputAnnotationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInputAnnotationResponse;
  hasStatus(): boolean;
  clearStatus(): MultiInputAnnotationResponse;

  getHitsList(): Array<proto_clarifai_api_resources_pb.Hit>;
  setHitsList(value: Array<proto_clarifai_api_resources_pb.Hit>): MultiInputAnnotationResponse;
  clearHitsList(): MultiInputAnnotationResponse;
  addHits(value?: proto_clarifai_api_resources_pb.Hit, index?: number): proto_clarifai_api_resources_pb.Hit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiInputAnnotationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiInputAnnotationResponse): MultiInputAnnotationResponse.AsObject;
  static serializeBinaryToWriter(message: MultiInputAnnotationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiInputAnnotationResponse;
  static deserializeBinaryFromReader(message: MultiInputAnnotationResponse, reader: jspb.BinaryReader): MultiInputAnnotationResponse;
}

export namespace MultiInputAnnotationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    hitsList: Array<proto_clarifai_api_resources_pb.Hit.AsObject>,
  }
}

export class SingleInputCountResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInputCountResponse;
  hasStatus(): boolean;
  clearStatus(): SingleInputCountResponse;

  getCounts(): proto_clarifai_api_resources_pb.InputCount | undefined;
  setCounts(value?: proto_clarifai_api_resources_pb.InputCount): SingleInputCountResponse;
  hasCounts(): boolean;
  clearCounts(): SingleInputCountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleInputCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleInputCountResponse): SingleInputCountResponse.AsObject;
  static serializeBinaryToWriter(message: SingleInputCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleInputCountResponse;
  static deserializeBinaryFromReader(message: SingleInputCountResponse, reader: jspb.BinaryReader): SingleInputCountResponse;
}

export namespace SingleInputCountResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    counts?: proto_clarifai_api_resources_pb.InputCount.AsObject,
  }
}

export class GetInputCountRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputCountRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetInputCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInputCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInputCountRequest): GetInputCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetInputCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInputCountRequest;
  static deserializeBinaryFromReader(message: GetInputCountRequest, reader: jspb.BinaryReader): GetInputCountRequest;
}

export namespace GetInputCountRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class ListDatasetsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListDatasetsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListDatasetsRequest;

  getPage(): number;
  setPage(value: number): ListDatasetsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsRequest): ListDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsRequest;
  static deserializeBinaryFromReader(message: ListDatasetsRequest, reader: jspb.BinaryReader): ListDatasetsRequest;
}

export namespace ListDatasetsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class GetDatasetRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetDatasetRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetDatasetRequest;

  getDatasetId(): string;
  setDatasetId(value: string): GetDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
  static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
  }
}

export class PostDatasetsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostDatasetsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostDatasetsRequest;

  getDatasetsList(): Array<proto_clarifai_api_resources_pb.Dataset>;
  setDatasetsList(value: Array<proto_clarifai_api_resources_pb.Dataset>): PostDatasetsRequest;
  clearDatasetsList(): PostDatasetsRequest;
  addDatasets(value?: proto_clarifai_api_resources_pb.Dataset, index?: number): proto_clarifai_api_resources_pb.Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDatasetsRequest): PostDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: PostDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDatasetsRequest;
  static deserializeBinaryFromReader(message: PostDatasetsRequest, reader: jspb.BinaryReader): PostDatasetsRequest;
}

export namespace PostDatasetsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetsList: Array<proto_clarifai_api_resources_pb.Dataset.AsObject>,
  }
}

export class PatchDatasetsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchDatasetsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchDatasetsRequest;

  getDatasetsList(): Array<proto_clarifai_api_resources_pb.Dataset>;
  setDatasetsList(value: Array<proto_clarifai_api_resources_pb.Dataset>): PatchDatasetsRequest;
  clearDatasetsList(): PatchDatasetsRequest;
  addDatasets(value?: proto_clarifai_api_resources_pb.Dataset, index?: number): proto_clarifai_api_resources_pb.Dataset;

  getAction(): string;
  setAction(value: string): PatchDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchDatasetsRequest): PatchDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchDatasetsRequest;
  static deserializeBinaryFromReader(message: PatchDatasetsRequest, reader: jspb.BinaryReader): PatchDatasetsRequest;
}

export namespace PatchDatasetsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetsList: Array<proto_clarifai_api_resources_pb.Dataset.AsObject>,
    action: string,
  }
}

export class PatchDatasetIdsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchDatasetIdsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchDatasetIdsRequest;

  getIdsList(): Array<IdUpdateSource>;
  setIdsList(value: Array<IdUpdateSource>): PatchDatasetIdsRequest;
  clearIdsList(): PatchDatasetIdsRequest;
  addIds(value?: IdUpdateSource, index?: number): IdUpdateSource;

  getAction(): string;
  setAction(value: string): PatchDatasetIdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchDatasetIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchDatasetIdsRequest): PatchDatasetIdsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchDatasetIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchDatasetIdsRequest;
  static deserializeBinaryFromReader(message: PatchDatasetIdsRequest, reader: jspb.BinaryReader): PatchDatasetIdsRequest;
}

export namespace PatchDatasetIdsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<IdUpdateSource.AsObject>,
    action: string,
  }
}

export class DeleteDatasetsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteDatasetsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteDatasetsRequest;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): DeleteDatasetsRequest;
  clearDatasetIdsList(): DeleteDatasetsRequest;
  addDatasetIds(value: string, index?: number): DeleteDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetsRequest): DeleteDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetsRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetsRequest, reader: jspb.BinaryReader): DeleteDatasetsRequest;
}

export namespace DeleteDatasetsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetIdsList: Array<string>,
  }
}

export class MultiDatasetResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetResponse;
  hasStatus(): boolean;
  clearStatus(): MultiDatasetResponse;

  getDatasetsList(): Array<proto_clarifai_api_resources_pb.Dataset>;
  setDatasetsList(value: Array<proto_clarifai_api_resources_pb.Dataset>): MultiDatasetResponse;
  clearDatasetsList(): MultiDatasetResponse;
  addDatasets(value?: proto_clarifai_api_resources_pb.Dataset, index?: number): proto_clarifai_api_resources_pb.Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiDatasetResponse): MultiDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: MultiDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiDatasetResponse;
  static deserializeBinaryFromReader(message: MultiDatasetResponse, reader: jspb.BinaryReader): MultiDatasetResponse;
}

export namespace MultiDatasetResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    datasetsList: Array<proto_clarifai_api_resources_pb.Dataset.AsObject>,
  }
}

export class SingleDatasetResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleDatasetResponse;
  hasStatus(): boolean;
  clearStatus(): SingleDatasetResponse;

  getDataset(): proto_clarifai_api_resources_pb.Dataset | undefined;
  setDataset(value?: proto_clarifai_api_resources_pb.Dataset): SingleDatasetResponse;
  hasDataset(): boolean;
  clearDataset(): SingleDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleDatasetResponse): SingleDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: SingleDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleDatasetResponse;
  static deserializeBinaryFromReader(message: SingleDatasetResponse, reader: jspb.BinaryReader): SingleDatasetResponse;
}

export namespace SingleDatasetResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    dataset?: proto_clarifai_api_resources_pb.Dataset.AsObject,
  }
}

export class ListDatasetInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListDatasetInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListDatasetInputsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): ListDatasetInputsRequest;

  getPage(): number;
  setPage(value: number): ListDatasetInputsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListDatasetInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetInputsRequest): ListDatasetInputsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetInputsRequest;
  static deserializeBinaryFromReader(message: ListDatasetInputsRequest, reader: jspb.BinaryReader): ListDatasetInputsRequest;
}

export namespace ListDatasetInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    page: number,
    perPage: number,
  }
}

export class GetDatasetInputRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetDatasetInputRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetDatasetInputRequest;

  getDatasetId(): string;
  setDatasetId(value: string): GetDatasetInputRequest;

  getInputId(): string;
  setInputId(value: string): GetDatasetInputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetInputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetInputRequest): GetDatasetInputRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetInputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetInputRequest;
  static deserializeBinaryFromReader(message: GetDatasetInputRequest, reader: jspb.BinaryReader): GetDatasetInputRequest;
}

export namespace GetDatasetInputRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    inputId: string,
  }
}

export class PostDatasetInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostDatasetInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostDatasetInputsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): PostDatasetInputsRequest;

  getDatasetInputsList(): Array<proto_clarifai_api_resources_pb.DatasetInput>;
  setDatasetInputsList(value: Array<proto_clarifai_api_resources_pb.DatasetInput>): PostDatasetInputsRequest;
  clearDatasetInputsList(): PostDatasetInputsRequest;
  addDatasetInputs(value?: proto_clarifai_api_resources_pb.DatasetInput, index?: number): proto_clarifai_api_resources_pb.DatasetInput;

  getSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setSearch(value?: proto_clarifai_api_resources_pb.Search): PostDatasetInputsRequest;
  hasSearch(): boolean;
  clearSearch(): PostDatasetInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDatasetInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDatasetInputsRequest): PostDatasetInputsRequest.AsObject;
  static serializeBinaryToWriter(message: PostDatasetInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDatasetInputsRequest;
  static deserializeBinaryFromReader(message: PostDatasetInputsRequest, reader: jspb.BinaryReader): PostDatasetInputsRequest;
}

export namespace PostDatasetInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    datasetInputsList: Array<proto_clarifai_api_resources_pb.DatasetInput.AsObject>,
    search?: proto_clarifai_api_resources_pb.Search.AsObject,
  }
}

export class DeleteDatasetInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteDatasetInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteDatasetInputsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): DeleteDatasetInputsRequest;

  getInputIdsList(): Array<string>;
  setInputIdsList(value: Array<string>): DeleteDatasetInputsRequest;
  clearInputIdsList(): DeleteDatasetInputsRequest;
  addInputIds(value: string, index?: number): DeleteDatasetInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetInputsRequest): DeleteDatasetInputsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetInputsRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetInputsRequest, reader: jspb.BinaryReader): DeleteDatasetInputsRequest;
}

export namespace DeleteDatasetInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    inputIdsList: Array<string>,
  }
}

export class MultiDatasetInputResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetInputResponse;
  hasStatus(): boolean;
  clearStatus(): MultiDatasetInputResponse;

  getDatasetInputsList(): Array<proto_clarifai_api_resources_pb.DatasetInput>;
  setDatasetInputsList(value: Array<proto_clarifai_api_resources_pb.DatasetInput>): MultiDatasetInputResponse;
  clearDatasetInputsList(): MultiDatasetInputResponse;
  addDatasetInputs(value?: proto_clarifai_api_resources_pb.DatasetInput, index?: number): proto_clarifai_api_resources_pb.DatasetInput;

  getDatasetInputsSearchAddJob(): proto_clarifai_api_resources_pb.DatasetInputsSearchAddJob | undefined;
  setDatasetInputsSearchAddJob(value?: proto_clarifai_api_resources_pb.DatasetInputsSearchAddJob): MultiDatasetInputResponse;
  hasDatasetInputsSearchAddJob(): boolean;
  clearDatasetInputsSearchAddJob(): MultiDatasetInputResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiDatasetInputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiDatasetInputResponse): MultiDatasetInputResponse.AsObject;
  static serializeBinaryToWriter(message: MultiDatasetInputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiDatasetInputResponse;
  static deserializeBinaryFromReader(message: MultiDatasetInputResponse, reader: jspb.BinaryReader): MultiDatasetInputResponse;
}

export namespace MultiDatasetInputResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    datasetInputsList: Array<proto_clarifai_api_resources_pb.DatasetInput.AsObject>,
    datasetInputsSearchAddJob?: proto_clarifai_api_resources_pb.DatasetInputsSearchAddJob.AsObject,
  }
}

export class SingleDatasetInputResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleDatasetInputResponse;
  hasStatus(): boolean;
  clearStatus(): SingleDatasetInputResponse;

  getDatasetInput(): proto_clarifai_api_resources_pb.DatasetInput | undefined;
  setDatasetInput(value?: proto_clarifai_api_resources_pb.DatasetInput): SingleDatasetInputResponse;
  hasDatasetInput(): boolean;
  clearDatasetInput(): SingleDatasetInputResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleDatasetInputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleDatasetInputResponse): SingleDatasetInputResponse.AsObject;
  static serializeBinaryToWriter(message: SingleDatasetInputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleDatasetInputResponse;
  static deserializeBinaryFromReader(message: SingleDatasetInputResponse, reader: jspb.BinaryReader): SingleDatasetInputResponse;
}

export namespace SingleDatasetInputResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    datasetInput?: proto_clarifai_api_resources_pb.DatasetInput.AsObject,
  }
}

export class ListDatasetVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListDatasetVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListDatasetVersionsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): ListDatasetVersionsRequest;

  getPage(): number;
  setPage(value: number): ListDatasetVersionsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListDatasetVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetVersionsRequest): ListDatasetVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetVersionsRequest;
  static deserializeBinaryFromReader(message: ListDatasetVersionsRequest, reader: jspb.BinaryReader): ListDatasetVersionsRequest;
}

export namespace ListDatasetVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    page: number,
    perPage: number,
  }
}

export class GetDatasetVersionRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetDatasetVersionRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetDatasetVersionRequest;

  getDatasetId(): string;
  setDatasetId(value: string): GetDatasetVersionRequest;

  getDatasetVersionId(): string;
  setDatasetVersionId(value: string): GetDatasetVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetVersionRequest): GetDatasetVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetVersionRequest;
  static deserializeBinaryFromReader(message: GetDatasetVersionRequest, reader: jspb.BinaryReader): GetDatasetVersionRequest;
}

export namespace GetDatasetVersionRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    datasetVersionId: string,
  }
}

export class ListDatasetVersionMetricsGroupsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListDatasetVersionMetricsGroupsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListDatasetVersionMetricsGroupsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): ListDatasetVersionMetricsGroupsRequest;

  getDatasetVersionId(): string;
  setDatasetVersionId(value: string): ListDatasetVersionMetricsGroupsRequest;

  getPage(): number;
  setPage(value: number): ListDatasetVersionMetricsGroupsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListDatasetVersionMetricsGroupsRequest;

  getParentPathsList(): Array<string>;
  setParentPathsList(value: Array<string>): ListDatasetVersionMetricsGroupsRequest;
  clearParentPathsList(): ListDatasetVersionMetricsGroupsRequest;
  addParentPaths(value: string, index?: number): ListDatasetVersionMetricsGroupsRequest;

  getTypesList(): Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType>;
  setTypesList(value: Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType>): ListDatasetVersionMetricsGroupsRequest;
  clearTypesList(): ListDatasetVersionMetricsGroupsRequest;
  addTypes(value: proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType, index?: number): ListDatasetVersionMetricsGroupsRequest;

  getValuesList(): Array<google_protobuf_struct_pb.Value>;
  setValuesList(value: Array<google_protobuf_struct_pb.Value>): ListDatasetVersionMetricsGroupsRequest;
  clearValuesList(): ListDatasetVersionMetricsGroupsRequest;
  addValues(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetVersionMetricsGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetVersionMetricsGroupsRequest): ListDatasetVersionMetricsGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetVersionMetricsGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetVersionMetricsGroupsRequest;
  static deserializeBinaryFromReader(message: ListDatasetVersionMetricsGroupsRequest, reader: jspb.BinaryReader): ListDatasetVersionMetricsGroupsRequest;
}

export namespace ListDatasetVersionMetricsGroupsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    datasetVersionId: string,
    page: number,
    perPage: number,
    parentPathsList: Array<string>,
    typesList: Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType>,
    valuesList: Array<google_protobuf_struct_pb.Value.AsObject>,
  }
}

export class PostDatasetVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostDatasetVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostDatasetVersionsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): PostDatasetVersionsRequest;

  getDatasetVersionsList(): Array<proto_clarifai_api_resources_pb.DatasetVersion>;
  setDatasetVersionsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersion>): PostDatasetVersionsRequest;
  clearDatasetVersionsList(): PostDatasetVersionsRequest;
  addDatasetVersions(value?: proto_clarifai_api_resources_pb.DatasetVersion, index?: number): proto_clarifai_api_resources_pb.DatasetVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDatasetVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDatasetVersionsRequest): PostDatasetVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: PostDatasetVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDatasetVersionsRequest;
  static deserializeBinaryFromReader(message: PostDatasetVersionsRequest, reader: jspb.BinaryReader): PostDatasetVersionsRequest;
}

export namespace PostDatasetVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    datasetVersionsList: Array<proto_clarifai_api_resources_pb.DatasetVersion.AsObject>,
  }
}

export class PatchDatasetVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchDatasetVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchDatasetVersionsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): PatchDatasetVersionsRequest;

  getDatasetVersionsList(): Array<proto_clarifai_api_resources_pb.DatasetVersion>;
  setDatasetVersionsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersion>): PatchDatasetVersionsRequest;
  clearDatasetVersionsList(): PatchDatasetVersionsRequest;
  addDatasetVersions(value?: proto_clarifai_api_resources_pb.DatasetVersion, index?: number): proto_clarifai_api_resources_pb.DatasetVersion;

  getAction(): string;
  setAction(value: string): PatchDatasetVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchDatasetVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchDatasetVersionsRequest): PatchDatasetVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchDatasetVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchDatasetVersionsRequest;
  static deserializeBinaryFromReader(message: PatchDatasetVersionsRequest, reader: jspb.BinaryReader): PatchDatasetVersionsRequest;
}

export namespace PatchDatasetVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    datasetVersionsList: Array<proto_clarifai_api_resources_pb.DatasetVersion.AsObject>,
    action: string,
  }
}

export class DeleteDatasetVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteDatasetVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteDatasetVersionsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): DeleteDatasetVersionsRequest;

  getDatasetVersionIdsList(): Array<string>;
  setDatasetVersionIdsList(value: Array<string>): DeleteDatasetVersionsRequest;
  clearDatasetVersionIdsList(): DeleteDatasetVersionsRequest;
  addDatasetVersionIds(value: string, index?: number): DeleteDatasetVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetVersionsRequest): DeleteDatasetVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetVersionsRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetVersionsRequest, reader: jspb.BinaryReader): DeleteDatasetVersionsRequest;
}

export namespace DeleteDatasetVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    datasetVersionIdsList: Array<string>,
  }
}

export class PutDatasetVersionExportsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PutDatasetVersionExportsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PutDatasetVersionExportsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): PutDatasetVersionExportsRequest;

  getDatasetVersionId(): string;
  setDatasetVersionId(value: string): PutDatasetVersionExportsRequest;

  getExportsList(): Array<proto_clarifai_api_resources_pb.DatasetVersionExport>;
  setExportsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersionExport>): PutDatasetVersionExportsRequest;
  clearExportsList(): PutDatasetVersionExportsRequest;
  addExports(value?: proto_clarifai_api_resources_pb.DatasetVersionExport, index?: number): proto_clarifai_api_resources_pb.DatasetVersionExport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDatasetVersionExportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutDatasetVersionExportsRequest): PutDatasetVersionExportsRequest.AsObject;
  static serializeBinaryToWriter(message: PutDatasetVersionExportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDatasetVersionExportsRequest;
  static deserializeBinaryFromReader(message: PutDatasetVersionExportsRequest, reader: jspb.BinaryReader): PutDatasetVersionExportsRequest;
}

export namespace PutDatasetVersionExportsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    datasetId: string,
    datasetVersionId: string,
    exportsList: Array<proto_clarifai_api_resources_pb.DatasetVersionExport.AsObject>,
  }
}

export class MultiDatasetVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetVersionResponse;
  hasStatus(): boolean;
  clearStatus(): MultiDatasetVersionResponse;

  getDatasetVersionsList(): Array<proto_clarifai_api_resources_pb.DatasetVersion>;
  setDatasetVersionsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersion>): MultiDatasetVersionResponse;
  clearDatasetVersionsList(): MultiDatasetVersionResponse;
  addDatasetVersions(value?: proto_clarifai_api_resources_pb.DatasetVersion, index?: number): proto_clarifai_api_resources_pb.DatasetVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiDatasetVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiDatasetVersionResponse): MultiDatasetVersionResponse.AsObject;
  static serializeBinaryToWriter(message: MultiDatasetVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiDatasetVersionResponse;
  static deserializeBinaryFromReader(message: MultiDatasetVersionResponse, reader: jspb.BinaryReader): MultiDatasetVersionResponse;
}

export namespace MultiDatasetVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    datasetVersionsList: Array<proto_clarifai_api_resources_pb.DatasetVersion.AsObject>,
  }
}

export class MultiDatasetVersionExportResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetVersionExportResponse;
  hasStatus(): boolean;
  clearStatus(): MultiDatasetVersionExportResponse;

  getExportsList(): Array<proto_clarifai_api_resources_pb.DatasetVersionExport>;
  setExportsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersionExport>): MultiDatasetVersionExportResponse;
  clearExportsList(): MultiDatasetVersionExportResponse;
  addExports(value?: proto_clarifai_api_resources_pb.DatasetVersionExport, index?: number): proto_clarifai_api_resources_pb.DatasetVersionExport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiDatasetVersionExportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiDatasetVersionExportResponse): MultiDatasetVersionExportResponse.AsObject;
  static serializeBinaryToWriter(message: MultiDatasetVersionExportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiDatasetVersionExportResponse;
  static deserializeBinaryFromReader(message: MultiDatasetVersionExportResponse, reader: jspb.BinaryReader): MultiDatasetVersionExportResponse;
}

export namespace MultiDatasetVersionExportResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    exportsList: Array<proto_clarifai_api_resources_pb.DatasetVersionExport.AsObject>,
  }
}

export class MultiDatasetVersionMetricsGroupResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetVersionMetricsGroupResponse;
  hasStatus(): boolean;
  clearStatus(): MultiDatasetVersionMetricsGroupResponse;

  getDatasetVersionMetricsGroupsList(): Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup>;
  setDatasetVersionMetricsGroupsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup>): MultiDatasetVersionMetricsGroupResponse;
  clearDatasetVersionMetricsGroupsList(): MultiDatasetVersionMetricsGroupResponse;
  addDatasetVersionMetricsGroups(value?: proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup, index?: number): proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiDatasetVersionMetricsGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiDatasetVersionMetricsGroupResponse): MultiDatasetVersionMetricsGroupResponse.AsObject;
  static serializeBinaryToWriter(message: MultiDatasetVersionMetricsGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiDatasetVersionMetricsGroupResponse;
  static deserializeBinaryFromReader(message: MultiDatasetVersionMetricsGroupResponse, reader: jspb.BinaryReader): MultiDatasetVersionMetricsGroupResponse;
}

export namespace MultiDatasetVersionMetricsGroupResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    datasetVersionMetricsGroupsList: Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup.AsObject>,
  }
}

export class SingleDatasetVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleDatasetVersionResponse;
  hasStatus(): boolean;
  clearStatus(): SingleDatasetVersionResponse;

  getDatasetVersion(): proto_clarifai_api_resources_pb.DatasetVersion | undefined;
  setDatasetVersion(value?: proto_clarifai_api_resources_pb.DatasetVersion): SingleDatasetVersionResponse;
  hasDatasetVersion(): boolean;
  clearDatasetVersion(): SingleDatasetVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleDatasetVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleDatasetVersionResponse): SingleDatasetVersionResponse.AsObject;
  static serializeBinaryToWriter(message: SingleDatasetVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleDatasetVersionResponse;
  static deserializeBinaryFromReader(message: SingleDatasetVersionResponse, reader: jspb.BinaryReader): SingleDatasetVersionResponse;
}

export namespace SingleDatasetVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    datasetVersion?: proto_clarifai_api_resources_pb.DatasetVersion.AsObject,
  }
}

export class GetDatasetInputsSearchAddJobRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetDatasetInputsSearchAddJobRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetDatasetInputsSearchAddJobRequest;

  getJobId(): string;
  setJobId(value: string): GetDatasetInputsSearchAddJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetInputsSearchAddJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetInputsSearchAddJobRequest): GetDatasetInputsSearchAddJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetInputsSearchAddJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetInputsSearchAddJobRequest;
  static deserializeBinaryFromReader(message: GetDatasetInputsSearchAddJobRequest, reader: jspb.BinaryReader): GetDatasetInputsSearchAddJobRequest;
}

export namespace GetDatasetInputsSearchAddJobRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    jobId: string,
  }
}

export class SingleDatasetInputsSearchAddJobResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleDatasetInputsSearchAddJobResponse;
  hasStatus(): boolean;
  clearStatus(): SingleDatasetInputsSearchAddJobResponse;

  getJob(): proto_clarifai_api_resources_pb.DatasetInputsSearchAddJob | undefined;
  setJob(value?: proto_clarifai_api_resources_pb.DatasetInputsSearchAddJob): SingleDatasetInputsSearchAddJobResponse;
  hasJob(): boolean;
  clearJob(): SingleDatasetInputsSearchAddJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleDatasetInputsSearchAddJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleDatasetInputsSearchAddJobResponse): SingleDatasetInputsSearchAddJobResponse.AsObject;
  static serializeBinaryToWriter(message: SingleDatasetInputsSearchAddJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleDatasetInputsSearchAddJobResponse;
  static deserializeBinaryFromReader(message: SingleDatasetInputsSearchAddJobResponse, reader: jspb.BinaryReader): SingleDatasetInputsSearchAddJobResponse;
}

export namespace SingleDatasetInputsSearchAddJobResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    job?: proto_clarifai_api_resources_pb.DatasetInputsSearchAddJob.AsObject,
  }
}

export class PostModelOutputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelOutputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelOutputsRequest;

  getModelId(): string;
  setModelId(value: string): PostModelOutputsRequest;

  getVersionId(): string;
  setVersionId(value: string): PostModelOutputsRequest;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostModelOutputsRequest;
  clearInputsList(): PostModelOutputsRequest;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getModel(): proto_clarifai_api_resources_pb.Model | undefined;
  setModel(value?: proto_clarifai_api_resources_pb.Model): PostModelOutputsRequest;
  hasModel(): boolean;
  clearModel(): PostModelOutputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelOutputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelOutputsRequest): PostModelOutputsRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelOutputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelOutputsRequest;
  static deserializeBinaryFromReader(message: PostModelOutputsRequest, reader: jspb.BinaryReader): PostModelOutputsRequest;
}

export namespace PostModelOutputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    versionId: string,
    inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
    model?: proto_clarifai_api_resources_pb.Model.AsObject,
  }
}

export class ListModelInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelInputsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModelInputsRequest;

  getModelId(): string;
  setModelId(value: string): ListModelInputsRequest;

  getVersionId(): string;
  setVersionId(value: string): ListModelInputsRequest;

  getPage(): number;
  setPage(value: number): ListModelInputsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModelInputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelInputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelInputsRequest): ListModelInputsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelInputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelInputsRequest;
  static deserializeBinaryFromReader(message: ListModelInputsRequest, reader: jspb.BinaryReader): ListModelInputsRequest;
}

export namespace ListModelInputsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    versionId: string,
    page: number,
    perPage: number,
  }
}

export class GetKeyRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetKeyRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetKeyRequest;

  getKeyId(): string;
  setKeyId(value: string): GetKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyRequest): GetKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyRequest;
  static deserializeBinaryFromReader(message: GetKeyRequest, reader: jspb.BinaryReader): GetKeyRequest;
}

export namespace GetKeyRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    keyId: string,
  }
}

export class ListKeysRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListKeysRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListKeysRequest;

  getPage(): number;
  setPage(value: number): ListKeysRequest;

  getPerPage(): number;
  setPerPage(value: number): ListKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeysRequest): ListKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeysRequest;
  static deserializeBinaryFromReader(message: ListKeysRequest, reader: jspb.BinaryReader): ListKeysRequest;
}

export namespace ListKeysRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class ListAppKeysRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAppKeysRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListAppKeysRequest;

  getPage(): number;
  setPage(value: number): ListAppKeysRequest;

  getPerPage(): number;
  setPerPage(value: number): ListAppKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppKeysRequest): ListAppKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListAppKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppKeysRequest;
  static deserializeBinaryFromReader(message: ListAppKeysRequest, reader: jspb.BinaryReader): ListAppKeysRequest;
}

export namespace ListAppKeysRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class PostKeysRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostKeysRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostKeysRequest;

  getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
  setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): PostKeysRequest;
  clearKeysList(): PostKeysRequest;
  addKeys(value?: proto_clarifai_api_resources_pb.Key, index?: number): proto_clarifai_api_resources_pb.Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostKeysRequest): PostKeysRequest.AsObject;
  static serializeBinaryToWriter(message: PostKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostKeysRequest;
  static deserializeBinaryFromReader(message: PostKeysRequest, reader: jspb.BinaryReader): PostKeysRequest;
}

export namespace PostKeysRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    keysList: Array<proto_clarifai_api_resources_pb.Key.AsObject>,
  }
}

export class DeleteKeyRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteKeyRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteKeyRequest;

  getKeyId(): string;
  setKeyId(value: string): DeleteKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKeyRequest): DeleteKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKeyRequest;
  static deserializeBinaryFromReader(message: DeleteKeyRequest, reader: jspb.BinaryReader): DeleteKeyRequest;
}

export namespace DeleteKeyRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    keyId: string,
  }
}

export class PatchKeysRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchKeysRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchKeysRequest;

  getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
  setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): PatchKeysRequest;
  clearKeysList(): PatchKeysRequest;
  addKeys(value?: proto_clarifai_api_resources_pb.Key, index?: number): proto_clarifai_api_resources_pb.Key;

  getAction(): string;
  setAction(value: string): PatchKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchKeysRequest): PatchKeysRequest.AsObject;
  static serializeBinaryToWriter(message: PatchKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchKeysRequest;
  static deserializeBinaryFromReader(message: PatchKeysRequest, reader: jspb.BinaryReader): PatchKeysRequest;
}

export namespace PatchKeysRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    keysList: Array<proto_clarifai_api_resources_pb.Key.AsObject>,
    action: string,
  }
}

export class SingleKeyResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleKeyResponse;
  hasStatus(): boolean;
  clearStatus(): SingleKeyResponse;

  getKey(): proto_clarifai_api_resources_pb.Key | undefined;
  setKey(value?: proto_clarifai_api_resources_pb.Key): SingleKeyResponse;
  hasKey(): boolean;
  clearKey(): SingleKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleKeyResponse): SingleKeyResponse.AsObject;
  static serializeBinaryToWriter(message: SingleKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleKeyResponse;
  static deserializeBinaryFromReader(message: SingleKeyResponse, reader: jspb.BinaryReader): SingleKeyResponse;
}

export namespace SingleKeyResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    key?: proto_clarifai_api_resources_pb.Key.AsObject,
  }
}

export class MultiKeyResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiKeyResponse;
  hasStatus(): boolean;
  clearStatus(): MultiKeyResponse;

  getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
  setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): MultiKeyResponse;
  clearKeysList(): MultiKeyResponse;
  addKeys(value?: proto_clarifai_api_resources_pb.Key, index?: number): proto_clarifai_api_resources_pb.Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiKeyResponse): MultiKeyResponse.AsObject;
  static serializeBinaryToWriter(message: MultiKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiKeyResponse;
  static deserializeBinaryFromReader(message: MultiKeyResponse, reader: jspb.BinaryReader): MultiKeyResponse;
}

export namespace MultiKeyResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    keysList: Array<proto_clarifai_api_resources_pb.Key.AsObject>,
  }
}

export class FetchLicenseRequest extends jspb.Message {
  getLicenseId(): string;
  setLicenseId(value: string): FetchLicenseRequest;

  getPublicKey(): string;
  setPublicKey(value: string): FetchLicenseRequest;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): FetchLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchLicenseRequest): FetchLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: FetchLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchLicenseRequest;
  static deserializeBinaryFromReader(message: FetchLicenseRequest, reader: jspb.BinaryReader): FetchLicenseRequest;
}

export namespace FetchLicenseRequest {
  export type AsObject = {
    licenseId: string,
    publicKey: string,
    signature: Uint8Array | string,
  }
}

export class FetchLicenseResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): FetchLicenseResponse;
  hasStatus(): boolean;
  clearStatus(): FetchLicenseResponse;

  getEncryptedBytes(): Uint8Array | string;
  getEncryptedBytes_asU8(): Uint8Array;
  getEncryptedBytes_asB64(): string;
  setEncryptedBytes(value: Uint8Array | string): FetchLicenseResponse;

  getActivatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActivatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FetchLicenseResponse;
  hasActivatedAt(): boolean;
  clearActivatedAt(): FetchLicenseResponse;

  getPublicKey(): string;
  setPublicKey(value: string): FetchLicenseResponse;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): FetchLicenseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchLicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchLicenseResponse): FetchLicenseResponse.AsObject;
  static serializeBinaryToWriter(message: FetchLicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchLicenseResponse;
  static deserializeBinaryFromReader(message: FetchLicenseResponse, reader: jspb.BinaryReader): FetchLicenseResponse;
}

export namespace FetchLicenseResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    encryptedBytes: Uint8Array | string,
    activatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publicKey: string,
    signature: Uint8Array | string,
  }
}

export class ValidateLicenseRequest extends jspb.Message {
  getLicenseId(): string;
  setLicenseId(value: string): ValidateLicenseRequest;

  getRequestId(): string;
  setRequestId(value: string): ValidateLicenseRequest;

  getActivatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActivatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ValidateLicenseRequest;
  hasActivatedAt(): boolean;
  clearActivatedAt(): ValidateLicenseRequest;

  getPublicKey(): string;
  setPublicKey(value: string): ValidateLicenseRequest;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): ValidateLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateLicenseRequest): ValidateLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateLicenseRequest;
  static deserializeBinaryFromReader(message: ValidateLicenseRequest, reader: jspb.BinaryReader): ValidateLicenseRequest;
}

export namespace ValidateLicenseRequest {
  export type AsObject = {
    licenseId: string,
    requestId: string,
    activatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publicKey: string,
    signature: Uint8Array | string,
  }
}

export class ValidateLicenseResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ValidateLicenseResponse;
  hasStatus(): boolean;
  clearStatus(): ValidateLicenseResponse;

  getRequestId(): string;
  setRequestId(value: string): ValidateLicenseResponse;

  getLimitsList(): Array<proto_clarifai_api_resources_pb.LicenseLimit>;
  setLimitsList(value: Array<proto_clarifai_api_resources_pb.LicenseLimit>): ValidateLicenseResponse;
  clearLimitsList(): ValidateLicenseResponse;
  addLimits(value?: proto_clarifai_api_resources_pb.LicenseLimit, index?: number): proto_clarifai_api_resources_pb.LicenseLimit;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): ValidateLicenseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateLicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateLicenseResponse): ValidateLicenseResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateLicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateLicenseResponse;
  static deserializeBinaryFromReader(message: ValidateLicenseResponse, reader: jspb.BinaryReader): ValidateLicenseResponse;
}

export namespace ValidateLicenseResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    requestId: string,
    limitsList: Array<proto_clarifai_api_resources_pb.LicenseLimit.AsObject>,
    signature: Uint8Array | string,
  }
}

export class ListLicensesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListLicensesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListLicensesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLicensesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLicensesRequest): ListLicensesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLicensesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLicensesRequest;
  static deserializeBinaryFromReader(message: ListLicensesRequest, reader: jspb.BinaryReader): ListLicensesRequest;
}

export namespace ListLicensesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class GetLicenseRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetLicenseRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetLicenseRequest;

  getLicenseId(): string;
  setLicenseId(value: string): GetLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicenseRequest): GetLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: GetLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicenseRequest;
  static deserializeBinaryFromReader(message: GetLicenseRequest, reader: jspb.BinaryReader): GetLicenseRequest;
}

export namespace GetLicenseRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    licenseId: string,
  }
}

export class SingleLicenseResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleLicenseResponse;
  hasStatus(): boolean;
  clearStatus(): SingleLicenseResponse;

  getLicense(): proto_clarifai_api_resources_pb.License | undefined;
  setLicense(value?: proto_clarifai_api_resources_pb.License): SingleLicenseResponse;
  hasLicense(): boolean;
  clearLicense(): SingleLicenseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleLicenseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleLicenseResponse): SingleLicenseResponse.AsObject;
  static serializeBinaryToWriter(message: SingleLicenseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleLicenseResponse;
  static deserializeBinaryFromReader(message: SingleLicenseResponse, reader: jspb.BinaryReader): SingleLicenseResponse;
}

export namespace SingleLicenseResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    license?: proto_clarifai_api_resources_pb.License.AsObject,
  }
}

export class MultipleLicensesResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultipleLicensesResponse;
  hasStatus(): boolean;
  clearStatus(): MultipleLicensesResponse;

  getLicensesList(): Array<proto_clarifai_api_resources_pb.License>;
  setLicensesList(value: Array<proto_clarifai_api_resources_pb.License>): MultipleLicensesResponse;
  clearLicensesList(): MultipleLicensesResponse;
  addLicenses(value?: proto_clarifai_api_resources_pb.License, index?: number): proto_clarifai_api_resources_pb.License;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleLicensesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleLicensesResponse): MultipleLicensesResponse.AsObject;
  static serializeBinaryToWriter(message: MultipleLicensesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleLicensesResponse;
  static deserializeBinaryFromReader(message: MultipleLicensesResponse, reader: jspb.BinaryReader): MultipleLicensesResponse;
}

export namespace MultipleLicensesResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    licensesList: Array<proto_clarifai_api_resources_pb.License.AsObject>,
  }
}

export class GetModelRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetModelRequest;

  getModelId(): string;
  setModelId(value: string): GetModelRequest;

  getVersionId(): string;
  setVersionId(value: string): GetModelRequest;

  getLanguage(): string;
  setLanguage(value: string): GetModelRequest;

  getTrainedBefore(): boolean;
  setTrainedBefore(value: boolean): GetModelRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): GetModelRequest;
  clearAdditionalFieldsList(): GetModelRequest;
  addAdditionalFields(value: string, index?: number): GetModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    versionId: string,
    language: string,
    trainedBefore: boolean,
    additionalFieldsList: Array<string>,
  }
}

export class ListModelsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModelsRequest;

  getPage(): number;
  setPage(value: number): ListModelsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModelsRequest;

  getSortAscending(): boolean;
  setSortAscending(value: boolean): ListModelsRequest;

  getSortByName(): boolean;
  setSortByName(value: boolean): ListModelsRequest;

  getSortByNumInputs(): boolean;
  setSortByNumInputs(value: boolean): ListModelsRequest;

  getSortByModifiedAt(): boolean;
  setSortByModifiedAt(value: boolean): ListModelsRequest;

  getQuery(): string;
  setQuery(value: string): ListModelsRequest;

  getName(): string;
  setName(value: string): ListModelsRequest;

  getFilterByUserId(): boolean;
  setFilterByUserId(value: boolean): ListModelsRequest;

  getModelTypeId(): string;
  setModelTypeId(value: string): ListModelsRequest;

  getTrainedOnly(): boolean;
  setTrainedOnly(value: boolean): ListModelsRequest;

  getInputFieldsList(): Array<string>;
  setInputFieldsList(value: Array<string>): ListModelsRequest;
  clearInputFieldsList(): ListModelsRequest;
  addInputFields(value: string, index?: number): ListModelsRequest;

  getOutputFieldsList(): Array<string>;
  setOutputFieldsList(value: Array<string>): ListModelsRequest;
  clearOutputFieldsList(): ListModelsRequest;
  addOutputFields(value: string, index?: number): ListModelsRequest;

  getLicense(): string;
  setLicense(value: string): ListModelsRequest;

  getFeaturedOnly(): boolean;
  setFeaturedOnly(value: boolean): ListModelsRequest;

  getStarredOnly(): boolean;
  setStarredOnly(value: boolean): ListModelsRequest;

  getToolkitsList(): Array<string>;
  setToolkitsList(value: Array<string>): ListModelsRequest;
  clearToolkitsList(): ListModelsRequest;
  addToolkits(value: string, index?: number): ListModelsRequest;

  getUseCasesList(): Array<string>;
  setUseCasesList(value: Array<string>): ListModelsRequest;
  clearUseCasesList(): ListModelsRequest;
  addUseCases(value: string, index?: number): ListModelsRequest;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): ListModelsRequest;
  clearLanguagesList(): ListModelsRequest;
  addLanguages(value: string, index?: number): ListModelsRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): ListModelsRequest;
  clearAdditionalFieldsList(): ListModelsRequest;
  addAdditionalFields(value: string, index?: number): ListModelsRequest;

  getSortByCase(): ListModelsRequest.SortByCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
    sortAscending: boolean,
    sortByName: boolean,
    sortByNumInputs: boolean,
    sortByModifiedAt: boolean,
    query: string,
    name: string,
    filterByUserId: boolean,
    modelTypeId: string,
    trainedOnly: boolean,
    inputFieldsList: Array<string>,
    outputFieldsList: Array<string>,
    license: string,
    featuredOnly: boolean,
    starredOnly: boolean,
    toolkitsList: Array<string>,
    useCasesList: Array<string>,
    languagesList: Array<string>,
    additionalFieldsList: Array<string>,
  }

  export enum SortByCase { 
    SORT_BY_NOT_SET = 0,
    SORT_BY_NAME = 11,
    SORT_BY_NUM_INPUTS = 12,
    SORT_BY_MODIFIED_AT = 13,
  }
}

export class PatchModelToolkitsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelToolkitsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchModelToolkitsRequest;

  getModelId(): string;
  setModelId(value: string): PatchModelToolkitsRequest;

  getToolkitsList(): Array<string>;
  setToolkitsList(value: Array<string>): PatchModelToolkitsRequest;
  clearToolkitsList(): PatchModelToolkitsRequest;
  addToolkits(value: string, index?: number): PatchModelToolkitsRequest;

  getAction(): string;
  setAction(value: string): PatchModelToolkitsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModelToolkitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModelToolkitsRequest): PatchModelToolkitsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchModelToolkitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModelToolkitsRequest;
  static deserializeBinaryFromReader(message: PatchModelToolkitsRequest, reader: jspb.BinaryReader): PatchModelToolkitsRequest;
}

export namespace PatchModelToolkitsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    toolkitsList: Array<string>,
    action: string,
  }
}

export class PatchModelCheckConsentsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelCheckConsentsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchModelCheckConsentsRequest;

  getModelId(): string;
  setModelId(value: string): PatchModelCheckConsentsRequest;

  getCheckConsentsList(): Array<string>;
  setCheckConsentsList(value: Array<string>): PatchModelCheckConsentsRequest;
  clearCheckConsentsList(): PatchModelCheckConsentsRequest;
  addCheckConsents(value: string, index?: number): PatchModelCheckConsentsRequest;

  getAction(): string;
  setAction(value: string): PatchModelCheckConsentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModelCheckConsentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModelCheckConsentsRequest): PatchModelCheckConsentsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchModelCheckConsentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModelCheckConsentsRequest;
  static deserializeBinaryFromReader(message: PatchModelCheckConsentsRequest, reader: jspb.BinaryReader): PatchModelCheckConsentsRequest;
}

export namespace PatchModelCheckConsentsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    checkConsentsList: Array<string>,
    action: string,
  }
}

export class PatchModelUseCasesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelUseCasesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchModelUseCasesRequest;

  getModelId(): string;
  setModelId(value: string): PatchModelUseCasesRequest;

  getUsecasesList(): Array<string>;
  setUsecasesList(value: Array<string>): PatchModelUseCasesRequest;
  clearUsecasesList(): PatchModelUseCasesRequest;
  addUsecases(value: string, index?: number): PatchModelUseCasesRequest;

  getAction(): string;
  setAction(value: string): PatchModelUseCasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModelUseCasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModelUseCasesRequest): PatchModelUseCasesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchModelUseCasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModelUseCasesRequest;
  static deserializeBinaryFromReader(message: PatchModelUseCasesRequest, reader: jspb.BinaryReader): PatchModelUseCasesRequest;
}

export namespace PatchModelUseCasesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    usecasesList: Array<string>,
    action: string,
  }
}

export class PatchModelLanguagesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelLanguagesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchModelLanguagesRequest;

  getModelId(): string;
  setModelId(value: string): PatchModelLanguagesRequest;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): PatchModelLanguagesRequest;
  clearLanguagesList(): PatchModelLanguagesRequest;
  addLanguages(value: string, index?: number): PatchModelLanguagesRequest;

  getAction(): string;
  setAction(value: string): PatchModelLanguagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModelLanguagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModelLanguagesRequest): PatchModelLanguagesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchModelLanguagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModelLanguagesRequest;
  static deserializeBinaryFromReader(message: PatchModelLanguagesRequest, reader: jspb.BinaryReader): PatchModelLanguagesRequest;
}

export namespace PatchModelLanguagesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    languagesList: Array<string>,
    action: string,
  }
}

export class MultiModelToolkitResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelToolkitResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelToolkitResponse;

  getToolkitsList(): Array<string>;
  setToolkitsList(value: Array<string>): MultiModelToolkitResponse;
  clearToolkitsList(): MultiModelToolkitResponse;
  addToolkits(value: string, index?: number): MultiModelToolkitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelToolkitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelToolkitResponse): MultiModelToolkitResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelToolkitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelToolkitResponse;
  static deserializeBinaryFromReader(message: MultiModelToolkitResponse, reader: jspb.BinaryReader): MultiModelToolkitResponse;
}

export namespace MultiModelToolkitResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    toolkitsList: Array<string>,
  }
}

export class MultiModelCheckConsentResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelCheckConsentResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelCheckConsentResponse;

  getCheckConsentsList(): Array<string>;
  setCheckConsentsList(value: Array<string>): MultiModelCheckConsentResponse;
  clearCheckConsentsList(): MultiModelCheckConsentResponse;
  addCheckConsents(value: string, index?: number): MultiModelCheckConsentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelCheckConsentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelCheckConsentResponse): MultiModelCheckConsentResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelCheckConsentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelCheckConsentResponse;
  static deserializeBinaryFromReader(message: MultiModelCheckConsentResponse, reader: jspb.BinaryReader): MultiModelCheckConsentResponse;
}

export namespace MultiModelCheckConsentResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    checkConsentsList: Array<string>,
  }
}

export class MultiModelUseCaseResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelUseCaseResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelUseCaseResponse;

  getUsecasesList(): Array<string>;
  setUsecasesList(value: Array<string>): MultiModelUseCaseResponse;
  clearUsecasesList(): MultiModelUseCaseResponse;
  addUsecases(value: string, index?: number): MultiModelUseCaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelUseCaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelUseCaseResponse): MultiModelUseCaseResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelUseCaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelUseCaseResponse;
  static deserializeBinaryFromReader(message: MultiModelUseCaseResponse, reader: jspb.BinaryReader): MultiModelUseCaseResponse;
}

export namespace MultiModelUseCaseResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    usecasesList: Array<string>,
  }
}

export class MultiModelLanguageResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelLanguageResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelLanguageResponse;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): MultiModelLanguageResponse;
  clearLanguagesList(): MultiModelLanguageResponse;
  addLanguages(value: string, index?: number): MultiModelLanguageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelLanguageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelLanguageResponse): MultiModelLanguageResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelLanguageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelLanguageResponse;
  static deserializeBinaryFromReader(message: MultiModelLanguageResponse, reader: jspb.BinaryReader): MultiModelLanguageResponse;
}

export namespace MultiModelLanguageResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    languagesList: Array<string>,
  }
}

export class PostModelsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelsRequest;

  getModel(): proto_clarifai_api_resources_pb.Model | undefined;
  setModel(value?: proto_clarifai_api_resources_pb.Model): PostModelsRequest;
  hasModel(): boolean;
  clearModel(): PostModelsRequest;

  getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
  setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): PostModelsRequest;
  clearModelsList(): PostModelsRequest;
  addModels(value?: proto_clarifai_api_resources_pb.Model, index?: number): proto_clarifai_api_resources_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelsRequest): PostModelsRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelsRequest;
  static deserializeBinaryFromReader(message: PostModelsRequest, reader: jspb.BinaryReader): PostModelsRequest;
}

export namespace PostModelsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    model?: proto_clarifai_api_resources_pb.Model.AsObject,
    modelsList: Array<proto_clarifai_api_resources_pb.Model.AsObject>,
  }
}

export class PatchModelsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchModelsRequest;

  getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
  setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): PatchModelsRequest;
  clearModelsList(): PatchModelsRequest;
  addModels(value?: proto_clarifai_api_resources_pb.Model, index?: number): proto_clarifai_api_resources_pb.Model;

  getAction(): string;
  setAction(value: string): PatchModelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModelsRequest): PatchModelsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModelsRequest;
  static deserializeBinaryFromReader(message: PatchModelsRequest, reader: jspb.BinaryReader): PatchModelsRequest;
}

export namespace PatchModelsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelsList: Array<proto_clarifai_api_resources_pb.Model.AsObject>,
    action: string,
  }
}

export class IdUpdateSource extends jspb.Message {
  getId(): string;
  setId(value: string): IdUpdateSource;

  getNewId(): string;
  setNewId(value: string): IdUpdateSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdUpdateSource.AsObject;
  static toObject(includeInstance: boolean, msg: IdUpdateSource): IdUpdateSource.AsObject;
  static serializeBinaryToWriter(message: IdUpdateSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdUpdateSource;
  static deserializeBinaryFromReader(message: IdUpdateSource, reader: jspb.BinaryReader): IdUpdateSource;
}

export namespace IdUpdateSource {
  export type AsObject = {
    id: string,
    newId: string,
  }
}

export class PatchModelIdsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelIdsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchModelIdsRequest;

  getIdsList(): Array<IdUpdateSource>;
  setIdsList(value: Array<IdUpdateSource>): PatchModelIdsRequest;
  clearIdsList(): PatchModelIdsRequest;
  addIds(value?: IdUpdateSource, index?: number): IdUpdateSource;

  getAction(): string;
  setAction(value: string): PatchModelIdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModelIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModelIdsRequest): PatchModelIdsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchModelIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModelIdsRequest;
  static deserializeBinaryFromReader(message: PatchModelIdsRequest, reader: jspb.BinaryReader): PatchModelIdsRequest;
}

export namespace PatchModelIdsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<IdUpdateSource.AsObject>,
    action: string,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteModelRequest;

  getModelId(): string;
  setModelId(value: string): DeleteModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
  }
}

export class DeleteModelsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteModelsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteModelsRequest;
  clearIdsList(): DeleteModelsRequest;
  addIds(value: string, index?: number): DeleteModelsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): DeleteModelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelsRequest): DeleteModelsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelsRequest;
  static deserializeBinaryFromReader(message: DeleteModelsRequest, reader: jspb.BinaryReader): DeleteModelsRequest;
}

export namespace DeleteModelsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
    deleteAll: boolean,
  }
}

export class PostModelsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelsSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelsSearchesRequest;

  getModelQuery(): proto_clarifai_api_resources_pb.ModelQuery | undefined;
  setModelQuery(value?: proto_clarifai_api_resources_pb.ModelQuery): PostModelsSearchesRequest;
  hasModelQuery(): boolean;
  clearModelQuery(): PostModelsSearchesRequest;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostModelsSearchesRequest;
  hasPagination(): boolean;
  clearPagination(): PostModelsSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelsSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelsSearchesRequest): PostModelsSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelsSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelsSearchesRequest;
  static deserializeBinaryFromReader(message: PostModelsSearchesRequest, reader: jspb.BinaryReader): PostModelsSearchesRequest;
}

export namespace PostModelsSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelQuery?: proto_clarifai_api_resources_pb.ModelQuery.AsObject,
    pagination?: Pagination.AsObject,
  }
}

export class SingleModelResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModelResponse;
  hasStatus(): boolean;
  clearStatus(): SingleModelResponse;

  getModel(): proto_clarifai_api_resources_pb.Model | undefined;
  setModel(value?: proto_clarifai_api_resources_pb.Model): SingleModelResponse;
  hasModel(): boolean;
  clearModel(): SingleModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleModelResponse): SingleModelResponse.AsObject;
  static serializeBinaryToWriter(message: SingleModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleModelResponse;
  static deserializeBinaryFromReader(message: SingleModelResponse, reader: jspb.BinaryReader): SingleModelResponse;
}

export namespace SingleModelResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    model?: proto_clarifai_api_resources_pb.Model.AsObject,
  }
}

export class MultiModelResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelResponse;

  getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
  setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): MultiModelResponse;
  clearModelsList(): MultiModelResponse;
  addModels(value?: proto_clarifai_api_resources_pb.Model, index?: number): proto_clarifai_api_resources_pb.Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelResponse): MultiModelResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelResponse;
  static deserializeBinaryFromReader(message: MultiModelResponse, reader: jspb.BinaryReader): MultiModelResponse;
}

export namespace MultiModelResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelsList: Array<proto_clarifai_api_resources_pb.Model.AsObject>,
  }
}

export class PatchModelVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchModelVersionsRequest;

  getModelId(): string;
  setModelId(value: string): PatchModelVersionsRequest;

  getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
  setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): PatchModelVersionsRequest;
  clearModelVersionsList(): PatchModelVersionsRequest;
  addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;

  getAction(): string;
  setAction(value: string): PatchModelVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModelVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModelVersionsRequest): PatchModelVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchModelVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModelVersionsRequest;
  static deserializeBinaryFromReader(message: PatchModelVersionsRequest, reader: jspb.BinaryReader): PatchModelVersionsRequest;
}

export namespace PatchModelVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    modelVersionsList: Array<proto_clarifai_api_resources_pb.ModelVersion.AsObject>,
    action: string,
  }
}

export class GetModelVersionRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelVersionRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetModelVersionRequest;

  getModelId(): string;
  setModelId(value: string): GetModelVersionRequest;

  getVersionId(): string;
  setVersionId(value: string): GetModelVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelVersionRequest): GetModelVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelVersionRequest;
  static deserializeBinaryFromReader(message: GetModelVersionRequest, reader: jspb.BinaryReader): GetModelVersionRequest;
}

export namespace GetModelVersionRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    versionId: string,
  }
}

export class ListModelVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModelVersionsRequest;

  getModelId(): string;
  setModelId(value: string): ListModelVersionsRequest;

  getPage(): number;
  setPage(value: number): ListModelVersionsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModelVersionsRequest;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): ListModelVersionsRequest;
  clearConceptIdsList(): ListModelVersionsRequest;
  addConceptIds(value: string, index?: number): ListModelVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelVersionsRequest): ListModelVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelVersionsRequest;
  static deserializeBinaryFromReader(message: ListModelVersionsRequest, reader: jspb.BinaryReader): ListModelVersionsRequest;
}

export namespace ListModelVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    page: number,
    perPage: number,
    conceptIdsList: Array<string>,
  }
}

export class DeleteModelVersionRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelVersionRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteModelVersionRequest;

  getModelId(): string;
  setModelId(value: string): DeleteModelVersionRequest;

  getVersionId(): string;
  setVersionId(value: string): DeleteModelVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelVersionRequest): DeleteModelVersionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelVersionRequest;
  static deserializeBinaryFromReader(message: DeleteModelVersionRequest, reader: jspb.BinaryReader): DeleteModelVersionRequest;
}

export namespace DeleteModelVersionRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    versionId: string,
  }
}

export class SingleModelVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModelVersionResponse;
  hasStatus(): boolean;
  clearStatus(): SingleModelVersionResponse;

  getModelVersion(): proto_clarifai_api_resources_pb.ModelVersion | undefined;
  setModelVersion(value?: proto_clarifai_api_resources_pb.ModelVersion): SingleModelVersionResponse;
  hasModelVersion(): boolean;
  clearModelVersion(): SingleModelVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleModelVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleModelVersionResponse): SingleModelVersionResponse.AsObject;
  static serializeBinaryToWriter(message: SingleModelVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleModelVersionResponse;
  static deserializeBinaryFromReader(message: SingleModelVersionResponse, reader: jspb.BinaryReader): SingleModelVersionResponse;
}

export namespace SingleModelVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelVersion?: proto_clarifai_api_resources_pb.ModelVersion.AsObject,
  }
}

export class MultiModelVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelVersionResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelVersionResponse;

  getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
  setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): MultiModelVersionResponse;
  clearModelVersionsList(): MultiModelVersionResponse;
  addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelVersionResponse): MultiModelVersionResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelVersionResponse;
  static deserializeBinaryFromReader(message: MultiModelVersionResponse, reader: jspb.BinaryReader): MultiModelVersionResponse;
}

export namespace MultiModelVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelVersionsList: Array<proto_clarifai_api_resources_pb.ModelVersion.AsObject>,
  }
}

export class PostModelVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelVersionsRequest;

  getModelId(): string;
  setModelId(value: string): PostModelVersionsRequest;

  getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
  setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): PostModelVersionsRequest;
  clearModelVersionsList(): PostModelVersionsRequest;
  addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;

  getSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionsRequest;
  hasSearch(): boolean;
  clearSearch(): PostModelVersionsRequest;

  getTrainSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setTrainSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionsRequest;
  hasTrainSearch(): boolean;
  clearTrainSearch(): PostModelVersionsRequest;

  getTestSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setTestSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionsRequest;
  hasTestSearch(): boolean;
  clearTestSearch(): PostModelVersionsRequest;

  getEvaluateAfterTraining(): boolean;
  setEvaluateAfterTraining(value: boolean): PostModelVersionsRequest;

  getDescription(): string;
  setDescription(value: string): PostModelVersionsRequest;

  getDatasetVersion(): proto_clarifai_api_resources_pb.DatasetVersion | undefined;
  setDatasetVersion(value?: proto_clarifai_api_resources_pb.DatasetVersion): PostModelVersionsRequest;
  hasDatasetVersion(): boolean;
  clearDatasetVersion(): PostModelVersionsRequest;

  getEvalInfo(): proto_clarifai_api_resources_pb.EvalInfo | undefined;
  setEvalInfo(value?: proto_clarifai_api_resources_pb.EvalInfo): PostModelVersionsRequest;
  hasEvalInfo(): boolean;
  clearEvalInfo(): PostModelVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelVersionsRequest): PostModelVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelVersionsRequest;
  static deserializeBinaryFromReader(message: PostModelVersionsRequest, reader: jspb.BinaryReader): PostModelVersionsRequest;
}

export namespace PostModelVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    modelVersionsList: Array<proto_clarifai_api_resources_pb.ModelVersion.AsObject>,
    search?: proto_clarifai_api_resources_pb.Search.AsObject,
    trainSearch?: proto_clarifai_api_resources_pb.Search.AsObject,
    testSearch?: proto_clarifai_api_resources_pb.Search.AsObject,
    evaluateAfterTraining: boolean,
    description: string,
    datasetVersion?: proto_clarifai_api_resources_pb.DatasetVersion.AsObject,
    evalInfo?: proto_clarifai_api_resources_pb.EvalInfo.AsObject,
  }
}

export class PostWorkflowVersionsUnPublishRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowVersionsUnPublishRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostWorkflowVersionsUnPublishRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): PostWorkflowVersionsUnPublishRequest;

  getPublicationsList(): Array<WorkflowVersionUnPublishRequest>;
  setPublicationsList(value: Array<WorkflowVersionUnPublishRequest>): PostWorkflowVersionsUnPublishRequest;
  clearPublicationsList(): PostWorkflowVersionsUnPublishRequest;
  addPublications(value?: WorkflowVersionUnPublishRequest, index?: number): WorkflowVersionUnPublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowVersionsUnPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowVersionsUnPublishRequest): PostWorkflowVersionsUnPublishRequest.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowVersionsUnPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowVersionsUnPublishRequest;
  static deserializeBinaryFromReader(message: PostWorkflowVersionsUnPublishRequest, reader: jspb.BinaryReader): PostWorkflowVersionsUnPublishRequest;
}

export namespace PostWorkflowVersionsUnPublishRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    publicationsList: Array<WorkflowVersionUnPublishRequest.AsObject>,
  }
}

export class PostWorkflowVersionsPublishRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowVersionsPublishRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostWorkflowVersionsPublishRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): PostWorkflowVersionsPublishRequest;

  getPublicationsList(): Array<WorkflowVersionPublishRequest>;
  setPublicationsList(value: Array<WorkflowVersionPublishRequest>): PostWorkflowVersionsPublishRequest;
  clearPublicationsList(): PostWorkflowVersionsPublishRequest;
  addPublications(value?: WorkflowVersionPublishRequest, index?: number): WorkflowVersionPublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowVersionsPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowVersionsPublishRequest): PostWorkflowVersionsPublishRequest.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowVersionsPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowVersionsPublishRequest;
  static deserializeBinaryFromReader(message: PostWorkflowVersionsPublishRequest, reader: jspb.BinaryReader): PostWorkflowVersionsPublishRequest;
}

export namespace PostWorkflowVersionsPublishRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    publicationsList: Array<WorkflowVersionPublishRequest.AsObject>,
  }
}

export class WorkflowVersionPublishRequest extends jspb.Message {
  getVersionId(): string;
  setVersionId(value: string): WorkflowVersionPublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowVersionPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowVersionPublishRequest): WorkflowVersionPublishRequest.AsObject;
  static serializeBinaryToWriter(message: WorkflowVersionPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowVersionPublishRequest;
  static deserializeBinaryFromReader(message: WorkflowVersionPublishRequest, reader: jspb.BinaryReader): WorkflowVersionPublishRequest;
}

export namespace WorkflowVersionPublishRequest {
  export type AsObject = {
    versionId: string,
  }
}

export class WorkflowVersionUnPublishRequest extends jspb.Message {
  getVersionId(): string;
  setVersionId(value: string): WorkflowVersionUnPublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowVersionUnPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowVersionUnPublishRequest): WorkflowVersionUnPublishRequest.AsObject;
  static serializeBinaryToWriter(message: WorkflowVersionUnPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowVersionUnPublishRequest;
  static deserializeBinaryFromReader(message: WorkflowVersionUnPublishRequest, reader: jspb.BinaryReader): WorkflowVersionUnPublishRequest;
}

export namespace WorkflowVersionUnPublishRequest {
  export type AsObject = {
    versionId: string,
  }
}

export class ModelVersionPublishRequest extends jspb.Message {
  getVersionId(): string;
  setVersionId(value: string): ModelVersionPublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelVersionPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelVersionPublishRequest): ModelVersionPublishRequest.AsObject;
  static serializeBinaryToWriter(message: ModelVersionPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelVersionPublishRequest;
  static deserializeBinaryFromReader(message: ModelVersionPublishRequest, reader: jspb.BinaryReader): ModelVersionPublishRequest;
}

export namespace ModelVersionPublishRequest {
  export type AsObject = {
    versionId: string,
  }
}

export class PostModelVersionsPublishRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionsPublishRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelVersionsPublishRequest;

  getModelId(): string;
  setModelId(value: string): PostModelVersionsPublishRequest;

  getPublicationsList(): Array<ModelVersionPublishRequest>;
  setPublicationsList(value: Array<ModelVersionPublishRequest>): PostModelVersionsPublishRequest;
  clearPublicationsList(): PostModelVersionsPublishRequest;
  addPublications(value?: ModelVersionPublishRequest, index?: number): ModelVersionPublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelVersionsPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelVersionsPublishRequest): PostModelVersionsPublishRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelVersionsPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelVersionsPublishRequest;
  static deserializeBinaryFromReader(message: PostModelVersionsPublishRequest, reader: jspb.BinaryReader): PostModelVersionsPublishRequest;
}

export namespace PostModelVersionsPublishRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    publicationsList: Array<ModelVersionPublishRequest.AsObject>,
  }
}

export class ModelVersionUnpublishRequest extends jspb.Message {
  getVersionId(): string;
  setVersionId(value: string): ModelVersionUnpublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelVersionUnpublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModelVersionUnpublishRequest): ModelVersionUnpublishRequest.AsObject;
  static serializeBinaryToWriter(message: ModelVersionUnpublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelVersionUnpublishRequest;
  static deserializeBinaryFromReader(message: ModelVersionUnpublishRequest, reader: jspb.BinaryReader): ModelVersionUnpublishRequest;
}

export namespace ModelVersionUnpublishRequest {
  export type AsObject = {
    versionId: string,
  }
}

export class PostModelVersionsUnPublishRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionsUnPublishRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelVersionsUnPublishRequest;

  getModelId(): string;
  setModelId(value: string): PostModelVersionsUnPublishRequest;

  getPublicationsList(): Array<ModelVersionUnpublishRequest>;
  setPublicationsList(value: Array<ModelVersionUnpublishRequest>): PostModelVersionsUnPublishRequest;
  clearPublicationsList(): PostModelVersionsUnPublishRequest;
  addPublications(value?: ModelVersionUnpublishRequest, index?: number): ModelVersionUnpublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelVersionsUnPublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelVersionsUnPublishRequest): PostModelVersionsUnPublishRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelVersionsUnPublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelVersionsUnPublishRequest;
  static deserializeBinaryFromReader(message: PostModelVersionsUnPublishRequest, reader: jspb.BinaryReader): PostModelVersionsUnPublishRequest;
}

export namespace PostModelVersionsUnPublishRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    publicationsList: Array<ModelVersionUnpublishRequest.AsObject>,
  }
}

export class PostModelVersionMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelVersionMetricsRequest;

  getModelId(): string;
  setModelId(value: string): PostModelVersionMetricsRequest;

  getVersionId(): string;
  setVersionId(value: string): PostModelVersionMetricsRequest;

  getMaxExamples(): number;
  setMaxExamples(value: number): PostModelVersionMetricsRequest;

  getTestSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setTestSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionMetricsRequest;
  hasTestSearch(): boolean;
  clearTestSearch(): PostModelVersionMetricsRequest;

  getEvalInfo(): proto_clarifai_api_resources_pb.EvalInfo | undefined;
  setEvalInfo(value?: proto_clarifai_api_resources_pb.EvalInfo): PostModelVersionMetricsRequest;
  hasEvalInfo(): boolean;
  clearEvalInfo(): PostModelVersionMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelVersionMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelVersionMetricsRequest): PostModelVersionMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelVersionMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelVersionMetricsRequest;
  static deserializeBinaryFromReader(message: PostModelVersionMetricsRequest, reader: jspb.BinaryReader): PostModelVersionMetricsRequest;
}

export namespace PostModelVersionMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    versionId: string,
    maxExamples: number,
    testSearch?: proto_clarifai_api_resources_pb.Search.AsObject,
    evalInfo?: proto_clarifai_api_resources_pb.EvalInfo.AsObject,
  }
}

export class GetModelVersionMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelVersionMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetModelVersionMetricsRequest;

  getModelId(): string;
  setModelId(value: string): GetModelVersionMetricsRequest;

  getVersionId(): string;
  setVersionId(value: string): GetModelVersionMetricsRequest;

  getFields(): proto_clarifai_api_resources_pb.FieldsValue | undefined;
  setFields(value?: proto_clarifai_api_resources_pb.FieldsValue): GetModelVersionMetricsRequest;
  hasFields(): boolean;
  clearFields(): GetModelVersionMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelVersionMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelVersionMetricsRequest): GetModelVersionMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelVersionMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelVersionMetricsRequest;
  static deserializeBinaryFromReader(message: GetModelVersionMetricsRequest, reader: jspb.BinaryReader): GetModelVersionMetricsRequest;
}

export namespace GetModelVersionMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    versionId: string,
    fields?: proto_clarifai_api_resources_pb.FieldsValue.AsObject,
  }
}

export class GetModelTypeRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelTypeRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetModelTypeRequest;

  getModelTypeId(): string;
  setModelTypeId(value: string): GetModelTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelTypeRequest): GetModelTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelTypeRequest;
  static deserializeBinaryFromReader(message: GetModelTypeRequest, reader: jspb.BinaryReader): GetModelTypeRequest;
}

export namespace GetModelTypeRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelTypeId: string,
  }
}

export class ListModelTypesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelTypesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModelTypesRequest;

  getPage(): number;
  setPage(value: number): ListModelTypesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModelTypesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelTypesRequest): ListModelTypesRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelTypesRequest;
  static deserializeBinaryFromReader(message: ListModelTypesRequest, reader: jspb.BinaryReader): ListModelTypesRequest;
}

export namespace ListModelTypesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class ListOpenSourceLicensesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOpenSourceLicensesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOpenSourceLicensesRequest): ListOpenSourceLicensesRequest.AsObject;
  static serializeBinaryToWriter(message: ListOpenSourceLicensesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOpenSourceLicensesRequest;
  static deserializeBinaryFromReader(message: ListOpenSourceLicensesRequest, reader: jspb.BinaryReader): ListOpenSourceLicensesRequest;
}

export namespace ListOpenSourceLicensesRequest {
  export type AsObject = {
  }
}

export class ListOpenSourceLicensesResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ListOpenSourceLicensesResponse;
  hasStatus(): boolean;
  clearStatus(): ListOpenSourceLicensesResponse;

  getLicensesList(): Array<string>;
  setLicensesList(value: Array<string>): ListOpenSourceLicensesResponse;
  clearLicensesList(): ListOpenSourceLicensesResponse;
  addLicenses(value: string, index?: number): ListOpenSourceLicensesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOpenSourceLicensesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOpenSourceLicensesResponse): ListOpenSourceLicensesResponse.AsObject;
  static serializeBinaryToWriter(message: ListOpenSourceLicensesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOpenSourceLicensesResponse;
  static deserializeBinaryFromReader(message: ListOpenSourceLicensesResponse, reader: jspb.BinaryReader): ListOpenSourceLicensesResponse;
}

export namespace ListOpenSourceLicensesResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    licensesList: Array<string>,
  }
}

export class SingleModelTypeResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModelTypeResponse;
  hasStatus(): boolean;
  clearStatus(): SingleModelTypeResponse;

  getModelType(): proto_clarifai_api_resources_pb.ModelType | undefined;
  setModelType(value?: proto_clarifai_api_resources_pb.ModelType): SingleModelTypeResponse;
  hasModelType(): boolean;
  clearModelType(): SingleModelTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleModelTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleModelTypeResponse): SingleModelTypeResponse.AsObject;
  static serializeBinaryToWriter(message: SingleModelTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleModelTypeResponse;
  static deserializeBinaryFromReader(message: SingleModelTypeResponse, reader: jspb.BinaryReader): SingleModelTypeResponse;
}

export namespace SingleModelTypeResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelType?: proto_clarifai_api_resources_pb.ModelType.AsObject,
  }
}

export class MultiModelTypeResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelTypeResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelTypeResponse;

  getModelTypesList(): Array<proto_clarifai_api_resources_pb.ModelType>;
  setModelTypesList(value: Array<proto_clarifai_api_resources_pb.ModelType>): MultiModelTypeResponse;
  clearModelTypesList(): MultiModelTypeResponse;
  addModelTypes(value?: proto_clarifai_api_resources_pb.ModelType, index?: number): proto_clarifai_api_resources_pb.ModelType;

  getModelImporters(): proto_clarifai_api_resources_pb.ModelTypeField | undefined;
  setModelImporters(value?: proto_clarifai_api_resources_pb.ModelTypeField): MultiModelTypeResponse;
  hasModelImporters(): boolean;
  clearModelImporters(): MultiModelTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelTypeResponse): MultiModelTypeResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelTypeResponse;
  static deserializeBinaryFromReader(message: MultiModelTypeResponse, reader: jspb.BinaryReader): MultiModelTypeResponse;
}

export namespace MultiModelTypeResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelTypesList: Array<proto_clarifai_api_resources_pb.ModelType.AsObject>,
    modelImporters?: proto_clarifai_api_resources_pb.ModelTypeField.AsObject,
  }
}

export class GetModelVersionInputExampleRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelVersionInputExampleRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetModelVersionInputExampleRequest;

  getModelId(): string;
  setModelId(value: string): GetModelVersionInputExampleRequest;

  getModelVersionId(): string;
  setModelVersionId(value: string): GetModelVersionInputExampleRequest;

  getExampleId(): string;
  setExampleId(value: string): GetModelVersionInputExampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelVersionInputExampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelVersionInputExampleRequest): GetModelVersionInputExampleRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelVersionInputExampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelVersionInputExampleRequest;
  static deserializeBinaryFromReader(message: GetModelVersionInputExampleRequest, reader: jspb.BinaryReader): GetModelVersionInputExampleRequest;
}

export namespace GetModelVersionInputExampleRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    modelVersionId: string,
    exampleId: string,
  }
}

export class ListModelVersionInputExamplesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelVersionInputExamplesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModelVersionInputExamplesRequest;

  getModelId(): string;
  setModelId(value: string): ListModelVersionInputExamplesRequest;

  getModelVersionId(): string;
  setModelVersionId(value: string): ListModelVersionInputExamplesRequest;

  getPage(): number;
  setPage(value: number): ListModelVersionInputExamplesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModelVersionInputExamplesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelVersionInputExamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelVersionInputExamplesRequest): ListModelVersionInputExamplesRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelVersionInputExamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelVersionInputExamplesRequest;
  static deserializeBinaryFromReader(message: ListModelVersionInputExamplesRequest, reader: jspb.BinaryReader): ListModelVersionInputExamplesRequest;
}

export namespace ListModelVersionInputExamplesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    modelVersionId: string,
    page: number,
    perPage: number,
  }
}

export class PostModelVersionInputExamplesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionInputExamplesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelVersionInputExamplesRequest;

  getModelId(): string;
  setModelId(value: string): PostModelVersionInputExamplesRequest;

  getModelVersionId(): string;
  setModelVersionId(value: string): PostModelVersionInputExamplesRequest;

  getModelVersionInputExamplesList(): Array<proto_clarifai_api_resources_pb.ModelVersionInputExample>;
  setModelVersionInputExamplesList(value: Array<proto_clarifai_api_resources_pb.ModelVersionInputExample>): PostModelVersionInputExamplesRequest;
  clearModelVersionInputExamplesList(): PostModelVersionInputExamplesRequest;
  addModelVersionInputExamples(value?: proto_clarifai_api_resources_pb.ModelVersionInputExample, index?: number): proto_clarifai_api_resources_pb.ModelVersionInputExample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelVersionInputExamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelVersionInputExamplesRequest): PostModelVersionInputExamplesRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelVersionInputExamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelVersionInputExamplesRequest;
  static deserializeBinaryFromReader(message: PostModelVersionInputExamplesRequest, reader: jspb.BinaryReader): PostModelVersionInputExamplesRequest;
}

export namespace PostModelVersionInputExamplesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    modelVersionId: string,
    modelVersionInputExamplesList: Array<proto_clarifai_api_resources_pb.ModelVersionInputExample.AsObject>,
  }
}

export class DeleteModelVersionInputExamplesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelVersionInputExamplesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteModelVersionInputExamplesRequest;

  getModelId(): string;
  setModelId(value: string): DeleteModelVersionInputExamplesRequest;

  getModelVersionId(): string;
  setModelVersionId(value: string): DeleteModelVersionInputExamplesRequest;

  getExampleIdsList(): Array<string>;
  setExampleIdsList(value: Array<string>): DeleteModelVersionInputExamplesRequest;
  clearExampleIdsList(): DeleteModelVersionInputExamplesRequest;
  addExampleIds(value: string, index?: number): DeleteModelVersionInputExamplesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelVersionInputExamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelVersionInputExamplesRequest): DeleteModelVersionInputExamplesRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelVersionInputExamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelVersionInputExamplesRequest;
  static deserializeBinaryFromReader(message: DeleteModelVersionInputExamplesRequest, reader: jspb.BinaryReader): DeleteModelVersionInputExamplesRequest;
}

export namespace DeleteModelVersionInputExamplesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    modelVersionId: string,
    exampleIdsList: Array<string>,
  }
}

export class SingleModelVersionInputExampleResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModelVersionInputExampleResponse;
  hasStatus(): boolean;
  clearStatus(): SingleModelVersionInputExampleResponse;

  getModelVersionInputExample(): proto_clarifai_api_resources_pb.ModelVersionInputExample | undefined;
  setModelVersionInputExample(value?: proto_clarifai_api_resources_pb.ModelVersionInputExample): SingleModelVersionInputExampleResponse;
  hasModelVersionInputExample(): boolean;
  clearModelVersionInputExample(): SingleModelVersionInputExampleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleModelVersionInputExampleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleModelVersionInputExampleResponse): SingleModelVersionInputExampleResponse.AsObject;
  static serializeBinaryToWriter(message: SingleModelVersionInputExampleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleModelVersionInputExampleResponse;
  static deserializeBinaryFromReader(message: SingleModelVersionInputExampleResponse, reader: jspb.BinaryReader): SingleModelVersionInputExampleResponse;
}

export namespace SingleModelVersionInputExampleResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelVersionInputExample?: proto_clarifai_api_resources_pb.ModelVersionInputExample.AsObject,
  }
}

export class MultiModelVersionInputExampleResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelVersionInputExampleResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelVersionInputExampleResponse;

  getModelVersionInputExamplesList(): Array<proto_clarifai_api_resources_pb.ModelVersionInputExample>;
  setModelVersionInputExamplesList(value: Array<proto_clarifai_api_resources_pb.ModelVersionInputExample>): MultiModelVersionInputExampleResponse;
  clearModelVersionInputExamplesList(): MultiModelVersionInputExampleResponse;
  addModelVersionInputExamples(value?: proto_clarifai_api_resources_pb.ModelVersionInputExample, index?: number): proto_clarifai_api_resources_pb.ModelVersionInputExample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelVersionInputExampleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelVersionInputExampleResponse): MultiModelVersionInputExampleResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelVersionInputExampleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelVersionInputExampleResponse;
  static deserializeBinaryFromReader(message: MultiModelVersionInputExampleResponse, reader: jspb.BinaryReader): MultiModelVersionInputExampleResponse;
}

export namespace MultiModelVersionInputExampleResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelVersionInputExamplesList: Array<proto_clarifai_api_resources_pb.ModelVersionInputExample.AsObject>,
  }
}

export class ListModelReferencesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelReferencesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModelReferencesRequest;

  getModelId(): string;
  setModelId(value: string): ListModelReferencesRequest;

  getPage(): number;
  setPage(value: number): ListModelReferencesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModelReferencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelReferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelReferencesRequest): ListModelReferencesRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelReferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelReferencesRequest;
  static deserializeBinaryFromReader(message: ListModelReferencesRequest, reader: jspb.BinaryReader): ListModelReferencesRequest;
}

export namespace ListModelReferencesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    page: number,
    perPage: number,
  }
}

export class PostModelReferencesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelReferencesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelReferencesRequest;

  getModelId(): string;
  setModelId(value: string): PostModelReferencesRequest;

  getModelReferencesList(): Array<proto_clarifai_api_resources_pb.ModelReference>;
  setModelReferencesList(value: Array<proto_clarifai_api_resources_pb.ModelReference>): PostModelReferencesRequest;
  clearModelReferencesList(): PostModelReferencesRequest;
  addModelReferences(value?: proto_clarifai_api_resources_pb.ModelReference, index?: number): proto_clarifai_api_resources_pb.ModelReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelReferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelReferencesRequest): PostModelReferencesRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelReferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelReferencesRequest;
  static deserializeBinaryFromReader(message: PostModelReferencesRequest, reader: jspb.BinaryReader): PostModelReferencesRequest;
}

export namespace PostModelReferencesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    modelReferencesList: Array<proto_clarifai_api_resources_pb.ModelReference.AsObject>,
  }
}

export class DeleteModelReferencesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelReferencesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteModelReferencesRequest;

  getModelId(): string;
  setModelId(value: string): DeleteModelReferencesRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteModelReferencesRequest;
  clearIdsList(): DeleteModelReferencesRequest;
  addIds(value: string, index?: number): DeleteModelReferencesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelReferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelReferencesRequest): DeleteModelReferencesRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelReferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelReferencesRequest;
  static deserializeBinaryFromReader(message: DeleteModelReferencesRequest, reader: jspb.BinaryReader): DeleteModelReferencesRequest;
}

export namespace DeleteModelReferencesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    idsList: Array<string>,
  }
}

export class MultiModelReferenceResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelReferenceResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelReferenceResponse;

  getModelReferencesList(): Array<proto_clarifai_api_resources_pb.ModelReference>;
  setModelReferencesList(value: Array<proto_clarifai_api_resources_pb.ModelReference>): MultiModelReferenceResponse;
  clearModelReferencesList(): MultiModelReferenceResponse;
  addModelReferences(value?: proto_clarifai_api_resources_pb.ModelReference, index?: number): proto_clarifai_api_resources_pb.ModelReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelReferenceResponse): MultiModelReferenceResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelReferenceResponse;
  static deserializeBinaryFromReader(message: MultiModelReferenceResponse, reader: jspb.BinaryReader): MultiModelReferenceResponse;
}

export namespace MultiModelReferenceResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelReferencesList: Array<proto_clarifai_api_resources_pb.ModelReference.AsObject>,
  }
}

export class MultiOutputResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiOutputResponse;
  hasStatus(): boolean;
  clearStatus(): MultiOutputResponse;

  getOutputsList(): Array<proto_clarifai_api_resources_pb.Output>;
  setOutputsList(value: Array<proto_clarifai_api_resources_pb.Output>): MultiOutputResponse;
  clearOutputsList(): MultiOutputResponse;
  addOutputs(value?: proto_clarifai_api_resources_pb.Output, index?: number): proto_clarifai_api_resources_pb.Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiOutputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiOutputResponse): MultiOutputResponse.AsObject;
  static serializeBinaryToWriter(message: MultiOutputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiOutputResponse;
  static deserializeBinaryFromReader(message: MultiOutputResponse, reader: jspb.BinaryReader): MultiOutputResponse;
}

export namespace MultiOutputResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    outputsList: Array<proto_clarifai_api_resources_pb.Output.AsObject>,
  }
}

export class ListScopesRequest extends jspb.Message {
  getKeyType(): string;
  setKeyType(value: string): ListScopesRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListScopesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListScopesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScopesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScopesRequest): ListScopesRequest.AsObject;
  static serializeBinaryToWriter(message: ListScopesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScopesRequest;
  static deserializeBinaryFromReader(message: ListScopesRequest, reader: jspb.BinaryReader): ListScopesRequest;
}

export namespace ListScopesRequest {
  export type AsObject = {
    keyType: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MyScopesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): MyScopesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): MyScopesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyScopesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MyScopesRequest): MyScopesRequest.AsObject;
  static serializeBinaryToWriter(message: MyScopesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyScopesRequest;
  static deserializeBinaryFromReader(message: MyScopesRequest, reader: jspb.BinaryReader): MyScopesRequest;
}

export namespace MyScopesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MyScopesUserRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): MyScopesUserRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): MyScopesUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyScopesUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MyScopesUserRequest): MyScopesUserRequest.AsObject;
  static serializeBinaryToWriter(message: MyScopesUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyScopesUserRequest;
  static deserializeBinaryFromReader(message: MyScopesUserRequest, reader: jspb.BinaryReader): MyScopesUserRequest;
}

export namespace MyScopesUserRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MyScopesRootRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyScopesRootRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MyScopesRootRequest): MyScopesRootRequest.AsObject;
  static serializeBinaryToWriter(message: MyScopesRootRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyScopesRootRequest;
  static deserializeBinaryFromReader(message: MyScopesRootRequest, reader: jspb.BinaryReader): MyScopesRootRequest;
}

export namespace MyScopesRootRequest {
  export type AsObject = {
  }
}

export class MultiScopeDepsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiScopeDepsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiScopeDepsResponse;

  getScopeDepsList(): Array<proto_clarifai_api_resources_pb.ScopeDeps>;
  setScopeDepsList(value: Array<proto_clarifai_api_resources_pb.ScopeDeps>): MultiScopeDepsResponse;
  clearScopeDepsList(): MultiScopeDepsResponse;
  addScopeDeps(value?: proto_clarifai_api_resources_pb.ScopeDeps, index?: number): proto_clarifai_api_resources_pb.ScopeDeps;

  getEndpointDepsList(): Array<proto_clarifai_api_resources_pb.EndpointDeps>;
  setEndpointDepsList(value: Array<proto_clarifai_api_resources_pb.EndpointDeps>): MultiScopeDepsResponse;
  clearEndpointDepsList(): MultiScopeDepsResponse;
  addEndpointDeps(value?: proto_clarifai_api_resources_pb.EndpointDeps, index?: number): proto_clarifai_api_resources_pb.EndpointDeps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiScopeDepsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiScopeDepsResponse): MultiScopeDepsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiScopeDepsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiScopeDepsResponse;
  static deserializeBinaryFromReader(message: MultiScopeDepsResponse, reader: jspb.BinaryReader): MultiScopeDepsResponse;
}

export namespace MultiScopeDepsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    scopeDepsList: Array<proto_clarifai_api_resources_pb.ScopeDeps.AsObject>,
    endpointDepsList: Array<proto_clarifai_api_resources_pb.EndpointDeps.AsObject>,
  }
}

export class MultiScopeResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiScopeResponse;
  hasStatus(): boolean;
  clearStatus(): MultiScopeResponse;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): MultiScopeResponse;
  clearScopesList(): MultiScopeResponse;
  addScopes(value: string, index?: number): MultiScopeResponse;

  getApp(): proto_clarifai_api_resources_pb.App | undefined;
  setApp(value?: proto_clarifai_api_resources_pb.App): MultiScopeResponse;
  hasApp(): boolean;
  clearApp(): MultiScopeResponse;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): MultiScopeResponse;
  clearEndpointsList(): MultiScopeResponse;
  addEndpoints(value: string, index?: number): MultiScopeResponse;

  getUserFeatureFlags(): string;
  setUserFeatureFlags(value: string): MultiScopeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiScopeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiScopeResponse): MultiScopeResponse.AsObject;
  static serializeBinaryToWriter(message: MultiScopeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiScopeResponse;
  static deserializeBinaryFromReader(message: MultiScopeResponse, reader: jspb.BinaryReader): MultiScopeResponse;
}

export namespace MultiScopeResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    scopesList: Array<string>,
    app?: proto_clarifai_api_resources_pb.App.AsObject,
    endpointsList: Array<string>,
    userFeatureFlags: string,
  }
}

export class MultiScopeUserResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiScopeUserResponse;
  hasStatus(): boolean;
  clearStatus(): MultiScopeUserResponse;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): MultiScopeUserResponse;
  clearScopesList(): MultiScopeUserResponse;
  addScopes(value: string, index?: number): MultiScopeUserResponse;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): MultiScopeUserResponse;
  clearEndpointsList(): MultiScopeUserResponse;
  addEndpoints(value: string, index?: number): MultiScopeUserResponse;

  getUserFeatureFlags(): string;
  setUserFeatureFlags(value: string): MultiScopeUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiScopeUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiScopeUserResponse): MultiScopeUserResponse.AsObject;
  static serializeBinaryToWriter(message: MultiScopeUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiScopeUserResponse;
  static deserializeBinaryFromReader(message: MultiScopeUserResponse, reader: jspb.BinaryReader): MultiScopeUserResponse;
}

export namespace MultiScopeUserResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    scopesList: Array<string>,
    endpointsList: Array<string>,
    userFeatureFlags: string,
  }
}

export class MultiScopeRootResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiScopeRootResponse;
  hasStatus(): boolean;
  clearStatus(): MultiScopeRootResponse;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): MultiScopeRootResponse;
  clearScopesList(): MultiScopeRootResponse;
  addScopes(value: string, index?: number): MultiScopeRootResponse;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): MultiScopeRootResponse;
  clearEndpointsList(): MultiScopeRootResponse;
  addEndpoints(value: string, index?: number): MultiScopeRootResponse;

  getUserFeatureFlags(): string;
  setUserFeatureFlags(value: string): MultiScopeRootResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiScopeRootResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiScopeRootResponse): MultiScopeRootResponse.AsObject;
  static serializeBinaryToWriter(message: MultiScopeRootResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiScopeRootResponse;
  static deserializeBinaryFromReader(message: MultiScopeRootResponse, reader: jspb.BinaryReader): MultiScopeRootResponse;
}

export namespace MultiScopeRootResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    scopesList: Array<string>,
    endpointsList: Array<string>,
    userFeatureFlags: string,
  }
}

export class GetSearchRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetSearchRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetSearchRequest;

  getId(): string;
  setId(value: string): GetSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSearchRequest): GetSearchRequest.AsObject;
  static serializeBinaryToWriter(message: GetSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSearchRequest;
  static deserializeBinaryFromReader(message: GetSearchRequest, reader: jspb.BinaryReader): GetSearchRequest;
}

export namespace GetSearchRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class ListSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListSearchesRequest;

  getPage(): number;
  setPage(value: number): ListSearchesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSearchesRequest): ListSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: ListSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSearchesRequest;
  static deserializeBinaryFromReader(message: ListSearchesRequest, reader: jspb.BinaryReader): ListSearchesRequest;
}

export namespace ListSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class PostSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostSearchesRequest;

  getQuery(): proto_clarifai_api_resources_pb.Query | undefined;
  setQuery(value?: proto_clarifai_api_resources_pb.Query): PostSearchesRequest;
  hasQuery(): boolean;
  clearQuery(): PostSearchesRequest;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PostSearchesRequest;
  clearSearchesList(): PostSearchesRequest;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostSearchesRequest;
  hasPagination(): boolean;
  clearPagination(): PostSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostSearchesRequest): PostSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PostSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostSearchesRequest;
  static deserializeBinaryFromReader(message: PostSearchesRequest, reader: jspb.BinaryReader): PostSearchesRequest;
}

export namespace PostSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    query?: proto_clarifai_api_resources_pb.Query.AsObject,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
    pagination?: Pagination.AsObject,
  }
}

export class PatchInputsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchInputsSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchInputsSearchesRequest;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PatchInputsSearchesRequest;
  clearSearchesList(): PatchInputsSearchesRequest;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getAction(): string;
  setAction(value: string): PatchInputsSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchInputsSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchInputsSearchesRequest): PatchInputsSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchInputsSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchInputsSearchesRequest;
  static deserializeBinaryFromReader(message: PatchInputsSearchesRequest, reader: jspb.BinaryReader): PatchInputsSearchesRequest;
}

export namespace PatchInputsSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
    action: string,
  }
}

export class PatchAnnotationsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationsSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAnnotationsSearchesRequest;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PatchAnnotationsSearchesRequest;
  clearSearchesList(): PatchAnnotationsSearchesRequest;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getAction(): string;
  setAction(value: string): PatchAnnotationsSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAnnotationsSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAnnotationsSearchesRequest): PatchAnnotationsSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAnnotationsSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAnnotationsSearchesRequest;
  static deserializeBinaryFromReader(message: PatchAnnotationsSearchesRequest, reader: jspb.BinaryReader): PatchAnnotationsSearchesRequest;
}

export namespace PatchAnnotationsSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
    action: string,
  }
}

export class PatchSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchSearchesRequest;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PatchSearchesRequest;
  clearSearchesList(): PatchSearchesRequest;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getAction(): string;
  setAction(value: string): PatchSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchSearchesRequest): PatchSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchSearchesRequest;
  static deserializeBinaryFromReader(message: PatchSearchesRequest, reader: jspb.BinaryReader): PatchSearchesRequest;
}

export namespace PatchSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
    action: string,
  }
}

export class PostSearchesByIDRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostSearchesByIDRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostSearchesByIDRequest;

  getId(): string;
  setId(value: string): PostSearchesByIDRequest;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostSearchesByIDRequest;
  hasPagination(): boolean;
  clearPagination(): PostSearchesByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostSearchesByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostSearchesByIDRequest): PostSearchesByIDRequest.AsObject;
  static serializeBinaryToWriter(message: PostSearchesByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostSearchesByIDRequest;
  static deserializeBinaryFromReader(message: PostSearchesByIDRequest, reader: jspb.BinaryReader): PostSearchesByIDRequest;
}

export namespace PostSearchesByIDRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
    pagination?: Pagination.AsObject,
  }
}

export class DeleteSearchRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteSearchRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteSearchRequest;

  getId(): string;
  setId(value: string): DeleteSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSearchRequest): DeleteSearchRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSearchRequest;
  static deserializeBinaryFromReader(message: DeleteSearchRequest, reader: jspb.BinaryReader): DeleteSearchRequest;
}

export namespace DeleteSearchRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class PostAttributeSearchRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAttributeSearchRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAttributeSearchRequest;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostAttributeSearchRequest;
  hasPagination(): boolean;
  clearPagination(): PostAttributeSearchRequest;

  getBruteForce(): boolean;
  setBruteForce(value: boolean): PostAttributeSearchRequest;

  getAttributeQuery(): proto_clarifai_api_resources_pb.AttributeQuery | undefined;
  setAttributeQuery(value?: proto_clarifai_api_resources_pb.AttributeQuery): PostAttributeSearchRequest;
  hasAttributeQuery(): boolean;
  clearAttributeQuery(): PostAttributeSearchRequest;

  getMinValue(): number;
  setMinValue(value: number): PostAttributeSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAttributeSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAttributeSearchRequest): PostAttributeSearchRequest.AsObject;
  static serializeBinaryToWriter(message: PostAttributeSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAttributeSearchRequest;
  static deserializeBinaryFromReader(message: PostAttributeSearchRequest, reader: jspb.BinaryReader): PostAttributeSearchRequest;
}

export namespace PostAttributeSearchRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    pagination?: Pagination.AsObject,
    bruteForce: boolean,
    attributeQuery?: proto_clarifai_api_resources_pb.AttributeQuery.AsObject,
    minValue: number,
  }
}

export class PostAnnotationsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAnnotationsSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAnnotationsSearchesRequest;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PostAnnotationsSearchesRequest;
  clearSearchesList(): PostAnnotationsSearchesRequest;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostAnnotationsSearchesRequest;
  hasPagination(): boolean;
  clearPagination(): PostAnnotationsSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAnnotationsSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAnnotationsSearchesRequest): PostAnnotationsSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PostAnnotationsSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAnnotationsSearchesRequest;
  static deserializeBinaryFromReader(message: PostAnnotationsSearchesRequest, reader: jspb.BinaryReader): PostAnnotationsSearchesRequest;
}

export namespace PostAnnotationsSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
    pagination?: Pagination.AsObject,
  }
}

export class DeleteAnnotationSearchMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAnnotationSearchMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteAnnotationSearchMetricsRequest;

  getId(): string;
  setId(value: string): DeleteAnnotationSearchMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnnotationSearchMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnnotationSearchMetricsRequest): DeleteAnnotationSearchMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAnnotationSearchMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnnotationSearchMetricsRequest;
  static deserializeBinaryFromReader(message: DeleteAnnotationSearchMetricsRequest, reader: jspb.BinaryReader): DeleteAnnotationSearchMetricsRequest;
}

export namespace DeleteAnnotationSearchMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class PostInputsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostInputsSearchesRequest;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PostInputsSearchesRequest;
  clearSearchesList(): PostInputsSearchesRequest;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostInputsSearchesRequest;
  hasPagination(): boolean;
  clearPagination(): PostInputsSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInputsSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostInputsSearchesRequest): PostInputsSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PostInputsSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInputsSearchesRequest;
  static deserializeBinaryFromReader(message: PostInputsSearchesRequest, reader: jspb.BinaryReader): PostInputsSearchesRequest;
}

export namespace PostInputsSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
    pagination?: Pagination.AsObject,
  }
}

export class SingleSearchResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleSearchResponse;
  hasStatus(): boolean;
  clearStatus(): SingleSearchResponse;

  getSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setSearch(value?: proto_clarifai_api_resources_pb.Search): SingleSearchResponse;
  hasSearch(): boolean;
  clearSearch(): SingleSearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleSearchResponse): SingleSearchResponse.AsObject;
  static serializeBinaryToWriter(message: SingleSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleSearchResponse;
  static deserializeBinaryFromReader(message: SingleSearchResponse, reader: jspb.BinaryReader): SingleSearchResponse;
}

export namespace SingleSearchResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    search?: proto_clarifai_api_resources_pb.Search.AsObject,
  }
}

export class MultiSearchResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiSearchResponse;
  hasStatus(): boolean;
  clearStatus(): MultiSearchResponse;

  getId(): string;
  setId(value: string): MultiSearchResponse;

  getHitsList(): Array<proto_clarifai_api_resources_pb.Hit>;
  setHitsList(value: Array<proto_clarifai_api_resources_pb.Hit>): MultiSearchResponse;
  clearHitsList(): MultiSearchResponse;
  addHits(value?: proto_clarifai_api_resources_pb.Hit, index?: number): proto_clarifai_api_resources_pb.Hit;

  getQuery(): proto_clarifai_api_resources_pb.Query | undefined;
  setQuery(value?: proto_clarifai_api_resources_pb.Query): MultiSearchResponse;
  hasQuery(): boolean;
  clearQuery(): MultiSearchResponse;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): MultiSearchResponse;
  clearSearchesList(): MultiSearchResponse;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSearchResponse): MultiSearchResponse.AsObject;
  static serializeBinaryToWriter(message: MultiSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSearchResponse;
  static deserializeBinaryFromReader(message: MultiSearchResponse, reader: jspb.BinaryReader): MultiSearchResponse;
}

export namespace MultiSearchResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    id: string,
    hitsList: Array<proto_clarifai_api_resources_pb.Hit.AsObject>,
    query?: proto_clarifai_api_resources_pb.Query.AsObject,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
  }
}

export class PostAnnotationSearchMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAnnotationSearchMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAnnotationSearchMetricsRequest;

  getId(): string;
  setId(value: string): PostAnnotationSearchMetricsRequest;

  getGroundTruth(): proto_clarifai_api_resources_pb.Search | undefined;
  setGroundTruth(value?: proto_clarifai_api_resources_pb.Search): PostAnnotationSearchMetricsRequest;
  hasGroundTruth(): boolean;
  clearGroundTruth(): PostAnnotationSearchMetricsRequest;

  getSearchToEval(): proto_clarifai_api_resources_pb.Search | undefined;
  setSearchToEval(value?: proto_clarifai_api_resources_pb.Search): PostAnnotationSearchMetricsRequest;
  hasSearchToEval(): boolean;
  clearSearchToEval(): PostAnnotationSearchMetricsRequest;

  getData(): proto_clarifai_api_resources_pb.Data | undefined;
  setData(value?: proto_clarifai_api_resources_pb.Data): PostAnnotationSearchMetricsRequest;
  hasData(): boolean;
  clearData(): PostAnnotationSearchMetricsRequest;

  getEvaluationType(): proto_clarifai_api_resources_pb.EvaluationType;
  setEvaluationType(value: proto_clarifai_api_resources_pb.EvaluationType): PostAnnotationSearchMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAnnotationSearchMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAnnotationSearchMetricsRequest): PostAnnotationSearchMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: PostAnnotationSearchMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAnnotationSearchMetricsRequest;
  static deserializeBinaryFromReader(message: PostAnnotationSearchMetricsRequest, reader: jspb.BinaryReader): PostAnnotationSearchMetricsRequest;
}

export namespace PostAnnotationSearchMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
    groundTruth?: proto_clarifai_api_resources_pb.Search.AsObject,
    searchToEval?: proto_clarifai_api_resources_pb.Search.AsObject,
    data?: proto_clarifai_api_resources_pb.Data.AsObject,
    evaluationType: proto_clarifai_api_resources_pb.EvaluationType,
  }
}

export class GetAnnotationSearchMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAnnotationSearchMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetAnnotationSearchMetricsRequest;

  getId(): string;
  setId(value: string): GetAnnotationSearchMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotationSearchMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotationSearchMetricsRequest): GetAnnotationSearchMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnnotationSearchMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotationSearchMetricsRequest;
  static deserializeBinaryFromReader(message: GetAnnotationSearchMetricsRequest, reader: jspb.BinaryReader): GetAnnotationSearchMetricsRequest;
}

export namespace GetAnnotationSearchMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class ListAnnotationSearchMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAnnotationSearchMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListAnnotationSearchMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotationSearchMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotationSearchMetricsRequest): ListAnnotationSearchMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAnnotationSearchMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotationSearchMetricsRequest;
  static deserializeBinaryFromReader(message: ListAnnotationSearchMetricsRequest, reader: jspb.BinaryReader): ListAnnotationSearchMetricsRequest;
}

export namespace ListAnnotationSearchMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MultiAnnotationSearchMetricsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAnnotationSearchMetricsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiAnnotationSearchMetricsResponse;

  getAnnotationSearchMetricsList(): Array<proto_clarifai_api_resources_pb.AnnotationSearchMetrics>;
  setAnnotationSearchMetricsList(value: Array<proto_clarifai_api_resources_pb.AnnotationSearchMetrics>): MultiAnnotationSearchMetricsResponse;
  clearAnnotationSearchMetricsList(): MultiAnnotationSearchMetricsResponse;
  addAnnotationSearchMetrics(value?: proto_clarifai_api_resources_pb.AnnotationSearchMetrics, index?: number): proto_clarifai_api_resources_pb.AnnotationSearchMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAnnotationSearchMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAnnotationSearchMetricsResponse): MultiAnnotationSearchMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiAnnotationSearchMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAnnotationSearchMetricsResponse;
  static deserializeBinaryFromReader(message: MultiAnnotationSearchMetricsResponse, reader: jspb.BinaryReader): MultiAnnotationSearchMetricsResponse;
}

export namespace MultiAnnotationSearchMetricsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    annotationSearchMetricsList: Array<proto_clarifai_api_resources_pb.AnnotationSearchMetrics.AsObject>,
  }
}

export class ListAnnotationFiltersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAnnotationFiltersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListAnnotationFiltersRequest;

  getPage(): number;
  setPage(value: number): ListAnnotationFiltersRequest;

  getPerPage(): number;
  setPerPage(value: number): ListAnnotationFiltersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotationFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotationFiltersRequest): ListAnnotationFiltersRequest.AsObject;
  static serializeBinaryToWriter(message: ListAnnotationFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotationFiltersRequest;
  static deserializeBinaryFromReader(message: ListAnnotationFiltersRequest, reader: jspb.BinaryReader): ListAnnotationFiltersRequest;
}

export namespace ListAnnotationFiltersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class GetAnnotationFilterRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAnnotationFilterRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetAnnotationFilterRequest;

  getAnnotationFilterId(): string;
  setAnnotationFilterId(value: string): GetAnnotationFilterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotationFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotationFilterRequest): GetAnnotationFilterRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnnotationFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotationFilterRequest;
  static deserializeBinaryFromReader(message: GetAnnotationFilterRequest, reader: jspb.BinaryReader): GetAnnotationFilterRequest;
}

export namespace GetAnnotationFilterRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    annotationFilterId: string,
  }
}

export class PostAnnotationFiltersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAnnotationFiltersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAnnotationFiltersRequest;

  getAnnotationFiltersList(): Array<proto_clarifai_api_resources_pb.AnnotationFilter>;
  setAnnotationFiltersList(value: Array<proto_clarifai_api_resources_pb.AnnotationFilter>): PostAnnotationFiltersRequest;
  clearAnnotationFiltersList(): PostAnnotationFiltersRequest;
  addAnnotationFilters(value?: proto_clarifai_api_resources_pb.AnnotationFilter, index?: number): proto_clarifai_api_resources_pb.AnnotationFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAnnotationFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAnnotationFiltersRequest): PostAnnotationFiltersRequest.AsObject;
  static serializeBinaryToWriter(message: PostAnnotationFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAnnotationFiltersRequest;
  static deserializeBinaryFromReader(message: PostAnnotationFiltersRequest, reader: jspb.BinaryReader): PostAnnotationFiltersRequest;
}

export namespace PostAnnotationFiltersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    annotationFiltersList: Array<proto_clarifai_api_resources_pb.AnnotationFilter.AsObject>,
  }
}

export class PatchAnnotationFiltersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationFiltersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAnnotationFiltersRequest;

  getAnnotationFiltersList(): Array<proto_clarifai_api_resources_pb.AnnotationFilter>;
  setAnnotationFiltersList(value: Array<proto_clarifai_api_resources_pb.AnnotationFilter>): PatchAnnotationFiltersRequest;
  clearAnnotationFiltersList(): PatchAnnotationFiltersRequest;
  addAnnotationFilters(value?: proto_clarifai_api_resources_pb.AnnotationFilter, index?: number): proto_clarifai_api_resources_pb.AnnotationFilter;

  getAction(): string;
  setAction(value: string): PatchAnnotationFiltersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAnnotationFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAnnotationFiltersRequest): PatchAnnotationFiltersRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAnnotationFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAnnotationFiltersRequest;
  static deserializeBinaryFromReader(message: PatchAnnotationFiltersRequest, reader: jspb.BinaryReader): PatchAnnotationFiltersRequest;
}

export namespace PatchAnnotationFiltersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    annotationFiltersList: Array<proto_clarifai_api_resources_pb.AnnotationFilter.AsObject>,
    action: string,
  }
}

export class DeleteAnnotationFiltersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAnnotationFiltersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteAnnotationFiltersRequest;

  getAnnotationFilterIdsList(): Array<string>;
  setAnnotationFilterIdsList(value: Array<string>): DeleteAnnotationFiltersRequest;
  clearAnnotationFilterIdsList(): DeleteAnnotationFiltersRequest;
  addAnnotationFilterIds(value: string, index?: number): DeleteAnnotationFiltersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnnotationFiltersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnnotationFiltersRequest): DeleteAnnotationFiltersRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAnnotationFiltersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnnotationFiltersRequest;
  static deserializeBinaryFromReader(message: DeleteAnnotationFiltersRequest, reader: jspb.BinaryReader): DeleteAnnotationFiltersRequest;
}

export namespace DeleteAnnotationFiltersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    annotationFilterIdsList: Array<string>,
  }
}

export class MultiAnnotationFilterResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAnnotationFilterResponse;
  hasStatus(): boolean;
  clearStatus(): MultiAnnotationFilterResponse;

  getAnnotationFiltersList(): Array<proto_clarifai_api_resources_pb.AnnotationFilter>;
  setAnnotationFiltersList(value: Array<proto_clarifai_api_resources_pb.AnnotationFilter>): MultiAnnotationFilterResponse;
  clearAnnotationFiltersList(): MultiAnnotationFilterResponse;
  addAnnotationFilters(value?: proto_clarifai_api_resources_pb.AnnotationFilter, index?: number): proto_clarifai_api_resources_pb.AnnotationFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAnnotationFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAnnotationFilterResponse): MultiAnnotationFilterResponse.AsObject;
  static serializeBinaryToWriter(message: MultiAnnotationFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAnnotationFilterResponse;
  static deserializeBinaryFromReader(message: MultiAnnotationFilterResponse, reader: jspb.BinaryReader): MultiAnnotationFilterResponse;
}

export namespace MultiAnnotationFilterResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    annotationFiltersList: Array<proto_clarifai_api_resources_pb.AnnotationFilter.AsObject>,
  }
}

export class SingleAnnotationFilterResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleAnnotationFilterResponse;
  hasStatus(): boolean;
  clearStatus(): SingleAnnotationFilterResponse;

  getAnnotationFilter(): proto_clarifai_api_resources_pb.AnnotationFilter | undefined;
  setAnnotationFilter(value?: proto_clarifai_api_resources_pb.AnnotationFilter): SingleAnnotationFilterResponse;
  hasAnnotationFilter(): boolean;
  clearAnnotationFilter(): SingleAnnotationFilterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleAnnotationFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleAnnotationFilterResponse): SingleAnnotationFilterResponse.AsObject;
  static serializeBinaryToWriter(message: SingleAnnotationFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleAnnotationFilterResponse;
  static deserializeBinaryFromReader(message: SingleAnnotationFilterResponse, reader: jspb.BinaryReader): SingleAnnotationFilterResponse;
}

export namespace SingleAnnotationFilterResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    annotationFilter?: proto_clarifai_api_resources_pb.AnnotationFilter.AsObject,
  }
}

export class ListClustersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListClustersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListClustersRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListClustersRequest;
  clearIdsList(): ListClustersRequest;
  addIds(value: string, index?: number): ListClustersRequest;

  getPage(): number;
  setPage(value: number): ListClustersRequest;

  getPerPage(): number;
  setPerPage(value: number): ListClustersRequest;

  getAnnotationsPerCluster(): number;
  setAnnotationsPerCluster(value: number): ListClustersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
  static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
  static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
    page: number,
    perPage: number,
    annotationsPerCluster: number,
  }
}

export class ListAnnotationsForClusterRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAnnotationsForClusterRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListAnnotationsForClusterRequest;

  getClusterId(): string;
  setClusterId(value: string): ListAnnotationsForClusterRequest;

  getPage(): number;
  setPage(value: number): ListAnnotationsForClusterRequest;

  getPerPage(): number;
  setPerPage(value: number): ListAnnotationsForClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotationsForClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotationsForClusterRequest): ListAnnotationsForClusterRequest.AsObject;
  static serializeBinaryToWriter(message: ListAnnotationsForClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotationsForClusterRequest;
  static deserializeBinaryFromReader(message: ListAnnotationsForClusterRequest, reader: jspb.BinaryReader): ListAnnotationsForClusterRequest;
}

export namespace ListAnnotationsForClusterRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    clusterId: string,
    page: number,
    perPage: number,
  }
}

export class PostClustersSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostClustersSearchesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostClustersSearchesRequest;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PostClustersSearchesRequest;
  clearSearchesList(): PostClustersSearchesRequest;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): PostClustersSearchesRequest;
  hasPagination(): boolean;
  clearPagination(): PostClustersSearchesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostClustersSearchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostClustersSearchesRequest): PostClustersSearchesRequest.AsObject;
  static serializeBinaryToWriter(message: PostClustersSearchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostClustersSearchesRequest;
  static deserializeBinaryFromReader(message: PostClustersSearchesRequest, reader: jspb.BinaryReader): PostClustersSearchesRequest;
}

export namespace PostClustersSearchesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
    pagination?: Pagination.AsObject,
  }
}

export class MultiClusterResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiClusterResponse;
  hasStatus(): boolean;
  clearStatus(): MultiClusterResponse;

  getClustersList(): Array<proto_clarifai_api_resources_pb.Cluster>;
  setClustersList(value: Array<proto_clarifai_api_resources_pb.Cluster>): MultiClusterResponse;
  clearClustersList(): MultiClusterResponse;
  addClusters(value?: proto_clarifai_api_resources_pb.Cluster, index?: number): proto_clarifai_api_resources_pb.Cluster;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): MultiClusterResponse;
  clearSearchesList(): MultiClusterResponse;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiClusterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiClusterResponse): MultiClusterResponse.AsObject;
  static serializeBinaryToWriter(message: MultiClusterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiClusterResponse;
  static deserializeBinaryFromReader(message: MultiClusterResponse, reader: jspb.BinaryReader): MultiClusterResponse;
}

export namespace MultiClusterResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    clustersList: Array<proto_clarifai_api_resources_pb.Cluster.AsObject>,
    searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
  }
}

export class GetSubscriptionRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetSubscriptionRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionRequest): GetSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: GetSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetSubscriptionRequest, reader: jspb.BinaryReader): GetSubscriptionRequest;
}

export namespace GetSubscriptionRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostSubscriptionRequest extends jspb.Message {
  getSignupCode(): string;
  setSignupCode(value: string): PostSubscriptionRequest;

  getPlan(): proto_clarifai_api_resources_pb.Plan | undefined;
  setPlan(value?: proto_clarifai_api_resources_pb.Plan): PostSubscriptionRequest;
  hasPlan(): boolean;
  clearPlan(): PostSubscriptionRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostSubscriptionRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostSubscriptionRequest): PostSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: PostSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostSubscriptionRequest;
  static deserializeBinaryFromReader(message: PostSubscriptionRequest, reader: jspb.BinaryReader): PostSubscriptionRequest;
}

export namespace PostSubscriptionRequest {
  export type AsObject = {
    signupCode: string,
    plan?: proto_clarifai_api_resources_pb.Plan.AsObject,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class SingleSubscriptionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleSubscriptionResponse;
  hasStatus(): boolean;
  clearStatus(): SingleSubscriptionResponse;

  getPlan(): proto_clarifai_api_resources_pb.Plan | undefined;
  setPlan(value?: proto_clarifai_api_resources_pb.Plan): SingleSubscriptionResponse;
  hasPlan(): boolean;
  clearPlan(): SingleSubscriptionResponse;

  getSignupCode(): string;
  setSignupCode(value: string): SingleSubscriptionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleSubscriptionResponse): SingleSubscriptionResponse.AsObject;
  static serializeBinaryToWriter(message: SingleSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleSubscriptionResponse;
  static deserializeBinaryFromReader(message: SingleSubscriptionResponse, reader: jspb.BinaryReader): SingleSubscriptionResponse;
}

export namespace SingleSubscriptionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    plan?: proto_clarifai_api_resources_pb.Plan.AsObject,
    signupCode: string,
  }
}

export class ListCreditCardsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListCreditCardsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListCreditCardsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCreditCardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCreditCardsRequest): ListCreditCardsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCreditCardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCreditCardsRequest;
  static deserializeBinaryFromReader(message: ListCreditCardsRequest, reader: jspb.BinaryReader): ListCreditCardsRequest;
}

export namespace ListCreditCardsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MultipleCreditCardResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultipleCreditCardResponse;
  hasStatus(): boolean;
  clearStatus(): MultipleCreditCardResponse;

  getCardsList(): Array<proto_clarifai_api_resources_pb.CreditCard>;
  setCardsList(value: Array<proto_clarifai_api_resources_pb.CreditCard>): MultipleCreditCardResponse;
  clearCardsList(): MultipleCreditCardResponse;
  addCards(value?: proto_clarifai_api_resources_pb.CreditCard, index?: number): proto_clarifai_api_resources_pb.CreditCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleCreditCardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleCreditCardResponse): MultipleCreditCardResponse.AsObject;
  static serializeBinaryToWriter(message: MultipleCreditCardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleCreditCardResponse;
  static deserializeBinaryFromReader(message: MultipleCreditCardResponse, reader: jspb.BinaryReader): MultipleCreditCardResponse;
}

export namespace MultipleCreditCardResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    cardsList: Array<proto_clarifai_api_resources_pb.CreditCard.AsObject>,
  }
}

export class PostCreditCardRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostCreditCardRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostCreditCardRequest;

  getSource(): string;
  setSource(value: string): PostCreditCardRequest;

  getCard(): proto_clarifai_api_resources_pb.CreditCard | undefined;
  setCard(value?: proto_clarifai_api_resources_pb.CreditCard): PostCreditCardRequest;
  hasCard(): boolean;
  clearCard(): PostCreditCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostCreditCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostCreditCardRequest): PostCreditCardRequest.AsObject;
  static serializeBinaryToWriter(message: PostCreditCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostCreditCardRequest;
  static deserializeBinaryFromReader(message: PostCreditCardRequest, reader: jspb.BinaryReader): PostCreditCardRequest;
}

export namespace PostCreditCardRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    source: string,
    card?: proto_clarifai_api_resources_pb.CreditCard.AsObject,
  }
}

export class SingleCreditCardResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleCreditCardResponse;
  hasStatus(): boolean;
  clearStatus(): SingleCreditCardResponse;

  getCard(): proto_clarifai_api_resources_pb.CreditCard | undefined;
  setCard(value?: proto_clarifai_api_resources_pb.CreditCard): SingleCreditCardResponse;
  hasCard(): boolean;
  clearCard(): SingleCreditCardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleCreditCardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleCreditCardResponse): SingleCreditCardResponse.AsObject;
  static serializeBinaryToWriter(message: SingleCreditCardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleCreditCardResponse;
  static deserializeBinaryFromReader(message: SingleCreditCardResponse, reader: jspb.BinaryReader): SingleCreditCardResponse;
}

export namespace SingleCreditCardResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    card?: proto_clarifai_api_resources_pb.CreditCard.AsObject,
  }
}

export class DeleteCreditCardRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteCreditCardRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteCreditCardRequest;

  getCard(): proto_clarifai_api_resources_pb.CreditCard | undefined;
  setCard(value?: proto_clarifai_api_resources_pb.CreditCard): DeleteCreditCardRequest;
  hasCard(): boolean;
  clearCard(): DeleteCreditCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCreditCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCreditCardRequest): DeleteCreditCardRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCreditCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCreditCardRequest;
  static deserializeBinaryFromReader(message: DeleteCreditCardRequest, reader: jspb.BinaryReader): DeleteCreditCardRequest;
}

export namespace DeleteCreditCardRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    card?: proto_clarifai_api_resources_pb.CreditCard.AsObject,
  }
}

export class PatchCreditCardsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchCreditCardsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchCreditCardsRequest;

  getCardsList(): Array<proto_clarifai_api_resources_pb.CreditCard>;
  setCardsList(value: Array<proto_clarifai_api_resources_pb.CreditCard>): PatchCreditCardsRequest;
  clearCardsList(): PatchCreditCardsRequest;
  addCards(value?: proto_clarifai_api_resources_pb.CreditCard, index?: number): proto_clarifai_api_resources_pb.CreditCard;

  getAction(): proto_clarifai_api_resources_pb.PatchAction | undefined;
  setAction(value?: proto_clarifai_api_resources_pb.PatchAction): PatchCreditCardsRequest;
  hasAction(): boolean;
  clearAction(): PatchCreditCardsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchCreditCardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchCreditCardsRequest): PatchCreditCardsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchCreditCardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchCreditCardsRequest;
  static deserializeBinaryFromReader(message: PatchCreditCardsRequest, reader: jspb.BinaryReader): PatchCreditCardsRequest;
}

export namespace PatchCreditCardsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    cardsList: Array<proto_clarifai_api_resources_pb.CreditCard.AsObject>,
    action?: proto_clarifai_api_resources_pb.PatchAction.AsObject,
  }
}

export class GetShippingAddressRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetShippingAddressRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetShippingAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShippingAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetShippingAddressRequest): GetShippingAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetShippingAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShippingAddressRequest;
  static deserializeBinaryFromReader(message: GetShippingAddressRequest, reader: jspb.BinaryReader): GetShippingAddressRequest;
}

export namespace GetShippingAddressRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PutShippingAddressRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PutShippingAddressRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PutShippingAddressRequest;

  getShippingAddress(): proto_clarifai_api_resources_pb.ShippingAddress | undefined;
  setShippingAddress(value?: proto_clarifai_api_resources_pb.ShippingAddress): PutShippingAddressRequest;
  hasShippingAddress(): boolean;
  clearShippingAddress(): PutShippingAddressRequest;

  getAction(): proto_clarifai_api_resources_pb.PatchAction | undefined;
  setAction(value?: proto_clarifai_api_resources_pb.PatchAction): PutShippingAddressRequest;
  hasAction(): boolean;
  clearAction(): PutShippingAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutShippingAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutShippingAddressRequest): PutShippingAddressRequest.AsObject;
  static serializeBinaryToWriter(message: PutShippingAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutShippingAddressRequest;
  static deserializeBinaryFromReader(message: PutShippingAddressRequest, reader: jspb.BinaryReader): PutShippingAddressRequest;
}

export namespace PutShippingAddressRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    shippingAddress?: proto_clarifai_api_resources_pb.ShippingAddress.AsObject,
    action?: proto_clarifai_api_resources_pb.PatchAction.AsObject,
  }
}

export class SingleShippingAddressResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleShippingAddressResponse;
  hasStatus(): boolean;
  clearStatus(): SingleShippingAddressResponse;

  getShippingAddress(): proto_clarifai_api_resources_pb.ShippingAddress | undefined;
  setShippingAddress(value?: proto_clarifai_api_resources_pb.ShippingAddress): SingleShippingAddressResponse;
  hasShippingAddress(): boolean;
  clearShippingAddress(): SingleShippingAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleShippingAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleShippingAddressResponse): SingleShippingAddressResponse.AsObject;
  static serializeBinaryToWriter(message: SingleShippingAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleShippingAddressResponse;
  static deserializeBinaryFromReader(message: SingleShippingAddressResponse, reader: jspb.BinaryReader): SingleShippingAddressResponse;
}

export namespace SingleShippingAddressResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    shippingAddress?: proto_clarifai_api_resources_pb.ShippingAddress.AsObject,
  }
}

export class ListPlansRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListPlansRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListPlansRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlansRequest): ListPlansRequest.AsObject;
  static serializeBinaryToWriter(message: ListPlansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlansRequest;
  static deserializeBinaryFromReader(message: ListPlansRequest, reader: jspb.BinaryReader): ListPlansRequest;
}

export namespace ListPlansRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MultiPlanResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiPlanResponse;
  hasStatus(): boolean;
  clearStatus(): MultiPlanResponse;

  getPlansList(): Array<proto_clarifai_api_resources_pb.Plan>;
  setPlansList(value: Array<proto_clarifai_api_resources_pb.Plan>): MultiPlanResponse;
  clearPlansList(): MultiPlanResponse;
  addPlans(value?: proto_clarifai_api_resources_pb.Plan, index?: number): proto_clarifai_api_resources_pb.Plan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiPlanResponse): MultiPlanResponse.AsObject;
  static serializeBinaryToWriter(message: MultiPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiPlanResponse;
  static deserializeBinaryFromReader(message: MultiPlanResponse, reader: jspb.BinaryReader): MultiPlanResponse;
}

export namespace MultiPlanResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    plansList: Array<proto_clarifai_api_resources_pb.Plan.AsObject>,
  }
}

export class GetHistoricalUsageRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetHistoricalUsageRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetHistoricalUsageRequest;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): GetHistoricalUsageRequest;
  hasStartDate(): boolean;
  clearStartDate(): GetHistoricalUsageRequest;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): GetHistoricalUsageRequest;
  hasEndDate(): boolean;
  clearEndDate(): GetHistoricalUsageRequest;

  getBrokenDownPerApp(): boolean;
  setBrokenDownPerApp(value: boolean): GetHistoricalUsageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoricalUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoricalUsageRequest): GetHistoricalUsageRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoricalUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoricalUsageRequest;
  static deserializeBinaryFromReader(message: GetHistoricalUsageRequest, reader: jspb.BinaryReader): GetHistoricalUsageRequest;
}

export namespace GetHistoricalUsageRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brokenDownPerApp: boolean,
  }
}

export class GetHistoricalUsageResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): GetHistoricalUsageResponse;
  hasStatus(): boolean;
  clearStatus(): GetHistoricalUsageResponse;

  getUsageList(): Array<proto_clarifai_api_resources_pb.OpCountByDate>;
  setUsageList(value: Array<proto_clarifai_api_resources_pb.OpCountByDate>): GetHistoricalUsageResponse;
  clearUsageList(): GetHistoricalUsageResponse;
  addUsage(value?: proto_clarifai_api_resources_pb.OpCountByDate, index?: number): proto_clarifai_api_resources_pb.OpCountByDate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoricalUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoricalUsageResponse): GetHistoricalUsageResponse.AsObject;
  static serializeBinaryToWriter(message: GetHistoricalUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoricalUsageResponse;
  static deserializeBinaryFromReader(message: GetHistoricalUsageResponse, reader: jspb.BinaryReader): GetHistoricalUsageResponse;
}

export namespace GetHistoricalUsageResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    usageList: Array<proto_clarifai_api_resources_pb.OpCountByDate.AsObject>,
  }
}

export class PostHistoricalUsageRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostHistoricalUsageRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostHistoricalUsageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostHistoricalUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostHistoricalUsageRequest): PostHistoricalUsageRequest.AsObject;
  static serializeBinaryToWriter(message: PostHistoricalUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostHistoricalUsageRequest;
  static deserializeBinaryFromReader(message: PostHistoricalUsageRequest, reader: jspb.BinaryReader): PostHistoricalUsageRequest;
}

export namespace PostHistoricalUsageRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostHistoricalUsageResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostHistoricalUsageResponse;
  hasStatus(): boolean;
  clearStatus(): PostHistoricalUsageResponse;

  getInterval(): google_protobuf_duration_pb.Duration | undefined;
  setInterval(value?: google_protobuf_duration_pb.Duration): PostHistoricalUsageResponse;
  hasInterval(): boolean;
  clearInterval(): PostHistoricalUsageResponse;

  getUsageList(): Array<proto_clarifai_api_resources_pb.DimensionList>;
  setUsageList(value: Array<proto_clarifai_api_resources_pb.DimensionList>): PostHistoricalUsageResponse;
  clearUsageList(): PostHistoricalUsageResponse;
  addUsage(value?: proto_clarifai_api_resources_pb.DimensionList, index?: number): proto_clarifai_api_resources_pb.DimensionList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostHistoricalUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostHistoricalUsageResponse): PostHistoricalUsageResponse.AsObject;
  static serializeBinaryToWriter(message: PostHistoricalUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostHistoricalUsageResponse;
  static deserializeBinaryFromReader(message: PostHistoricalUsageResponse, reader: jspb.BinaryReader): PostHistoricalUsageResponse;
}

export namespace PostHistoricalUsageResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    interval?: google_protobuf_duration_pb.Duration.AsObject,
    usageList: Array<proto_clarifai_api_resources_pb.DimensionList.AsObject>,
  }
}

export class GetRealtimeUsageRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetRealtimeUsageRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetRealtimeUsageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRealtimeUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRealtimeUsageRequest): GetRealtimeUsageRequest.AsObject;
  static serializeBinaryToWriter(message: GetRealtimeUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRealtimeUsageRequest;
  static deserializeBinaryFromReader(message: GetRealtimeUsageRequest, reader: jspb.BinaryReader): GetRealtimeUsageRequest;
}

export namespace GetRealtimeUsageRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class GetRealtimeUsageResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): GetRealtimeUsageResponse;
  hasStatus(): boolean;
  clearStatus(): GetRealtimeUsageResponse;

  getRealtimeUsageList(): Array<proto_clarifai_api_resources_pb.RealtimeCount>;
  setRealtimeUsageList(value: Array<proto_clarifai_api_resources_pb.RealtimeCount>): GetRealtimeUsageResponse;
  clearRealtimeUsageList(): GetRealtimeUsageResponse;
  addRealtimeUsage(value?: proto_clarifai_api_resources_pb.RealtimeCount, index?: number): proto_clarifai_api_resources_pb.RealtimeCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRealtimeUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRealtimeUsageResponse): GetRealtimeUsageResponse.AsObject;
  static serializeBinaryToWriter(message: GetRealtimeUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRealtimeUsageResponse;
  static deserializeBinaryFromReader(message: GetRealtimeUsageResponse, reader: jspb.BinaryReader): GetRealtimeUsageResponse;
}

export namespace GetRealtimeUsageResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    realtimeUsageList: Array<proto_clarifai_api_resources_pb.RealtimeCount.AsObject>,
  }
}

export class ListUsageIntervalsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsageIntervalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsageIntervalsRequest): ListUsageIntervalsRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsageIntervalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsageIntervalsRequest;
  static deserializeBinaryFromReader(message: ListUsageIntervalsRequest, reader: jspb.BinaryReader): ListUsageIntervalsRequest;
}

export namespace ListUsageIntervalsRequest {
  export type AsObject = {
  }
}

export class ListUsageIntervalsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ListUsageIntervalsResponse;
  hasStatus(): boolean;
  clearStatus(): ListUsageIntervalsResponse;

  getUsageIntervalsList(): Array<proto_clarifai_api_resources_pb.UsageInterval>;
  setUsageIntervalsList(value: Array<proto_clarifai_api_resources_pb.UsageInterval>): ListUsageIntervalsResponse;
  clearUsageIntervalsList(): ListUsageIntervalsResponse;
  addUsageIntervals(value?: proto_clarifai_api_resources_pb.UsageInterval, index?: number): proto_clarifai_api_resources_pb.UsageInterval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsageIntervalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsageIntervalsResponse): ListUsageIntervalsResponse.AsObject;
  static serializeBinaryToWriter(message: ListUsageIntervalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsageIntervalsResponse;
  static deserializeBinaryFromReader(message: ListUsageIntervalsResponse, reader: jspb.BinaryReader): ListUsageIntervalsResponse;
}

export namespace ListUsageIntervalsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    usageIntervalsList: Array<proto_clarifai_api_resources_pb.UsageInterval.AsObject>,
  }
}

export class ListUserBillingCyclesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListUserBillingCyclesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListUserBillingCyclesRequest;

  getPage(): number;
  setPage(value: number): ListUserBillingCyclesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListUserBillingCyclesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserBillingCyclesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserBillingCyclesRequest): ListUserBillingCyclesRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserBillingCyclesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserBillingCyclesRequest;
  static deserializeBinaryFromReader(message: ListUserBillingCyclesRequest, reader: jspb.BinaryReader): ListUserBillingCyclesRequest;
}

export namespace ListUserBillingCyclesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class ListUserCyclesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListUserCyclesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListUserCyclesRequest;

  getCycleNumber(): number;
  setCycleNumber(value: number): ListUserCyclesRequest;

  getBeforeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeforeDate(value?: google_protobuf_timestamp_pb.Timestamp): ListUserCyclesRequest;
  hasBeforeDate(): boolean;
  clearBeforeDate(): ListUserCyclesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserCyclesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserCyclesRequest): ListUserCyclesRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserCyclesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserCyclesRequest;
  static deserializeBinaryFromReader(message: ListUserCyclesRequest, reader: jspb.BinaryReader): ListUserCyclesRequest;
}

export namespace ListUserCyclesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    cycleNumber: number,
    beforeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListUserBillingCyclesResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ListUserBillingCyclesResponse;
  hasStatus(): boolean;
  clearStatus(): ListUserBillingCyclesResponse;

  getBillingCyclesList(): Array<proto_clarifai_api_resources_pb.BillingCycle>;
  setBillingCyclesList(value: Array<proto_clarifai_api_resources_pb.BillingCycle>): ListUserBillingCyclesResponse;
  clearBillingCyclesList(): ListUserBillingCyclesResponse;
  addBillingCycles(value?: proto_clarifai_api_resources_pb.BillingCycle, index?: number): proto_clarifai_api_resources_pb.BillingCycle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserBillingCyclesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserBillingCyclesResponse): ListUserBillingCyclesResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserBillingCyclesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserBillingCyclesResponse;
  static deserializeBinaryFromReader(message: ListUserBillingCyclesResponse, reader: jspb.BinaryReader): ListUserBillingCyclesResponse;
}

export namespace ListUserBillingCyclesResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    billingCyclesList: Array<proto_clarifai_api_resources_pb.BillingCycle.AsObject>,
  }
}

export class ListUserCyclesResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ListUserCyclesResponse;
  hasStatus(): boolean;
  clearStatus(): ListUserCyclesResponse;

  getUsageCyclesList(): Array<proto_clarifai_api_resources_pb.UsageCycle>;
  setUsageCyclesList(value: Array<proto_clarifai_api_resources_pb.UsageCycle>): ListUserCyclesResponse;
  clearUsageCyclesList(): ListUserCyclesResponse;
  addUsageCycles(value?: proto_clarifai_api_resources_pb.UsageCycle, index?: number): proto_clarifai_api_resources_pb.UsageCycle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserCyclesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserCyclesResponse): ListUserCyclesResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserCyclesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserCyclesResponse;
  static deserializeBinaryFromReader(message: ListUserCyclesResponse, reader: jspb.BinaryReader): ListUserCyclesResponse;
}

export namespace ListUserCyclesResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    usageCyclesList: Array<proto_clarifai_api_resources_pb.UsageCycle.AsObject>,
  }
}

export class PostUsageRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostUsageRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostUsageRequest;

  getEventsCollectionsList(): Array<proto_clarifai_api_resources_pb.EventsCollection>;
  setEventsCollectionsList(value: Array<proto_clarifai_api_resources_pb.EventsCollection>): PostUsageRequest;
  clearEventsCollectionsList(): PostUsageRequest;
  addEventsCollections(value?: proto_clarifai_api_resources_pb.EventsCollection, index?: number): proto_clarifai_api_resources_pb.EventsCollection;

  getPublicKey(): string;
  setPublicKey(value: string): PostUsageRequest;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): PostUsageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostUsageRequest): PostUsageRequest.AsObject;
  static serializeBinaryToWriter(message: PostUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostUsageRequest;
  static deserializeBinaryFromReader(message: PostUsageRequest, reader: jspb.BinaryReader): PostUsageRequest;
}

export namespace PostUsageRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    eventsCollectionsList: Array<proto_clarifai_api_resources_pb.EventsCollection.AsObject>,
    publicKey: string,
    signature: Uint8Array | string,
  }
}

export class PostUsageResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostUsageResponse;
  hasStatus(): boolean;
  clearStatus(): PostUsageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostUsageResponse): PostUsageResponse.AsObject;
  static serializeBinaryToWriter(message: PostUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostUsageResponse;
  static deserializeBinaryFromReader(message: PostUsageResponse, reader: jspb.BinaryReader): PostUsageResponse;
}

export namespace PostUsageResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class GetUserRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetUserRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetUserRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): GetUserRequest;
  clearAdditionalFieldsList(): GetUserRequest;
  addAdditionalFields(value: string, index?: number): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    additionalFieldsList: Array<string>,
  }
}

export class ListUsersRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListUsersRequest;

  getPerPage(): number;
  setPerPage(value: number): ListUsersRequest;

  getSortAscending(): boolean;
  setSortAscending(value: boolean): ListUsersRequest;

  getSortById(): boolean;
  setSortById(value: boolean): ListUsersRequest;

  getSortByFirstName(): boolean;
  setSortByFirstName(value: boolean): ListUsersRequest;

  getSortByLastName(): boolean;
  setSortByLastName(value: boolean): ListUsersRequest;

  getSortByCreatedAt(): boolean;
  setSortByCreatedAt(value: boolean): ListUsersRequest;

  getQuery(): string;
  setQuery(value: string): ListUsersRequest;

  getStarredOnly(): boolean;
  setStarredOnly(value: boolean): ListUsersRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): ListUsersRequest;
  clearAdditionalFieldsList(): ListUsersRequest;
  addAdditionalFields(value: string, index?: number): ListUsersRequest;

  getSortByCase(): ListUsersRequest.SortByCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    sortAscending: boolean,
    sortById: boolean,
    sortByFirstName: boolean,
    sortByLastName: boolean,
    sortByCreatedAt: boolean,
    query: string,
    starredOnly: boolean,
    additionalFieldsList: Array<string>,
  }

  export enum SortByCase { 
    SORT_BY_NOT_SET = 0,
    SORT_BY_ID = 5,
    SORT_BY_FIRST_NAME = 6,
    SORT_BY_LAST_NAME = 7,
    SORT_BY_CREATED_AT = 8,
  }
}

export class PostUserConsentRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostUserConsentRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostUserConsentRequest;

  getConsent(): boolean;
  setConsent(value: boolean): PostUserConsentRequest;

  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): PostUserConsentRequest;
  clearFieldsList(): PostUserConsentRequest;
  addFields(value: string, index?: number): PostUserConsentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostUserConsentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostUserConsentRequest): PostUserConsentRequest.AsObject;
  static serializeBinaryToWriter(message: PostUserConsentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostUserConsentRequest;
  static deserializeBinaryFromReader(message: PostUserConsentRequest, reader: jspb.BinaryReader): PostUserConsentRequest;
}

export namespace PostUserConsentRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    consent: boolean,
    fieldsList: Array<string>,
  }
}

export class SingleUserResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleUserResponse;
  hasStatus(): boolean;
  clearStatus(): SingleUserResponse;

  getUser(): proto_clarifai_api_resources_pb.User | undefined;
  setUser(value?: proto_clarifai_api_resources_pb.User): SingleUserResponse;
  hasUser(): boolean;
  clearUser(): SingleUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleUserResponse): SingleUserResponse.AsObject;
  static serializeBinaryToWriter(message: SingleUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleUserResponse;
  static deserializeBinaryFromReader(message: SingleUserResponse, reader: jspb.BinaryReader): SingleUserResponse;
}

export namespace SingleUserResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    user?: proto_clarifai_api_resources_pb.User.AsObject,
  }
}

export class MultiUserResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiUserResponse;
  hasStatus(): boolean;
  clearStatus(): MultiUserResponse;

  getUsersList(): Array<proto_clarifai_api_resources_pb.User>;
  setUsersList(value: Array<proto_clarifai_api_resources_pb.User>): MultiUserResponse;
  clearUsersList(): MultiUserResponse;
  addUsers(value?: proto_clarifai_api_resources_pb.User, index?: number): proto_clarifai_api_resources_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiUserResponse): MultiUserResponse.AsObject;
  static serializeBinaryToWriter(message: MultiUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiUserResponse;
  static deserializeBinaryFromReader(message: MultiUserResponse, reader: jspb.BinaryReader): MultiUserResponse;
}

export namespace MultiUserResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    usersList: Array<proto_clarifai_api_resources_pb.User.AsObject>,
  }
}

export class PatchUserRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchUserRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchUserRequest;

  getInfo(): proto_clarifai_api_resources_pb.UserInfo | undefined;
  setInfo(value?: proto_clarifai_api_resources_pb.UserInfo): PatchUserRequest;
  hasInfo(): boolean;
  clearInfo(): PatchUserRequest;

  getPass(): proto_clarifai_api_resources_pb.UserPassword | undefined;
  setPass(value?: proto_clarifai_api_resources_pb.UserPassword): PatchUserRequest;
  hasPass(): boolean;
  clearPass(): PatchUserRequest;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): PatchUserRequest;
  hasMetadata(): boolean;
  clearMetadata(): PatchUserRequest;

  getAction(): proto_clarifai_api_resources_pb.PatchAction | undefined;
  setAction(value?: proto_clarifai_api_resources_pb.PatchAction): PatchUserRequest;
  hasAction(): boolean;
  clearAction(): PatchUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchUserRequest): PatchUserRequest.AsObject;
  static serializeBinaryToWriter(message: PatchUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchUserRequest;
  static deserializeBinaryFromReader(message: PatchUserRequest, reader: jspb.BinaryReader): PatchUserRequest;
}

export namespace PatchUserRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    info?: proto_clarifai_api_resources_pb.UserInfo.AsObject,
    pass?: proto_clarifai_api_resources_pb.UserPassword.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    action?: proto_clarifai_api_resources_pb.PatchAction.AsObject,
  }
}

export class PostUserAccessRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostUserAccessRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostUserAccessRequest;

  getAccessList(): Array<proto_clarifai_api_resources_pb.UserAccess>;
  setAccessList(value: Array<proto_clarifai_api_resources_pb.UserAccess>): PostUserAccessRequest;
  clearAccessList(): PostUserAccessRequest;
  addAccess(value?: proto_clarifai_api_resources_pb.UserAccess, index?: number): proto_clarifai_api_resources_pb.UserAccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostUserAccessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostUserAccessRequest): PostUserAccessRequest.AsObject;
  static serializeBinaryToWriter(message: PostUserAccessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostUserAccessRequest;
  static deserializeBinaryFromReader(message: PostUserAccessRequest, reader: jspb.BinaryReader): PostUserAccessRequest;
}

export namespace PostUserAccessRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    accessList: Array<proto_clarifai_api_resources_pb.UserAccess.AsObject>,
  }
}

export class GetUserAccessRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetUserAccessRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetUserAccessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserAccessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserAccessRequest): GetUserAccessRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserAccessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserAccessRequest;
  static deserializeBinaryFromReader(message: GetUserAccessRequest, reader: jspb.BinaryReader): GetUserAccessRequest;
}

export namespace GetUserAccessRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MultiUserAccessResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiUserAccessResponse;
  hasStatus(): boolean;
  clearStatus(): MultiUserAccessResponse;

  getAccessList(): Array<proto_clarifai_api_resources_pb.UserAccess>;
  setAccessList(value: Array<proto_clarifai_api_resources_pb.UserAccess>): MultiUserAccessResponse;
  clearAccessList(): MultiUserAccessResponse;
  addAccess(value?: proto_clarifai_api_resources_pb.UserAccess, index?: number): proto_clarifai_api_resources_pb.UserAccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiUserAccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiUserAccessResponse): MultiUserAccessResponse.AsObject;
  static serializeBinaryToWriter(message: MultiUserAccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiUserAccessResponse;
  static deserializeBinaryFromReader(message: MultiUserAccessResponse, reader: jspb.BinaryReader): MultiUserAccessResponse;
}

export namespace MultiUserAccessResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    accessList: Array<proto_clarifai_api_resources_pb.UserAccess.AsObject>,
  }
}

export class SingleUserAccessResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleUserAccessResponse;
  hasStatus(): boolean;
  clearStatus(): SingleUserAccessResponse;

  getAccess(): proto_clarifai_api_resources_pb.UserAccess | undefined;
  setAccess(value?: proto_clarifai_api_resources_pb.UserAccess): SingleUserAccessResponse;
  hasAccess(): boolean;
  clearAccess(): SingleUserAccessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleUserAccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleUserAccessResponse): SingleUserAccessResponse.AsObject;
  static serializeBinaryToWriter(message: SingleUserAccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleUserAccessResponse;
  static deserializeBinaryFromReader(message: SingleUserAccessResponse, reader: jspb.BinaryReader): SingleUserAccessResponse;
}

export namespace SingleUserAccessResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    access?: proto_clarifai_api_resources_pb.UserAccess.AsObject,
  }
}

export class PostEmailsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostEmailsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostEmailsRequest;

  getEmailsList(): Array<string>;
  setEmailsList(value: Array<string>): PostEmailsRequest;
  clearEmailsList(): PostEmailsRequest;
  addEmails(value: string, index?: number): PostEmailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostEmailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostEmailsRequest): PostEmailsRequest.AsObject;
  static serializeBinaryToWriter(message: PostEmailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostEmailsRequest;
  static deserializeBinaryFromReader(message: PostEmailsRequest, reader: jspb.BinaryReader): PostEmailsRequest;
}

export namespace PostEmailsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    emailsList: Array<string>,
  }
}

export class SingleEmailResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleEmailResponse;
  hasStatus(): boolean;
  clearStatus(): SingleEmailResponse;

  getEmail(): proto_clarifai_api_resources_pb.EmailAddress | undefined;
  setEmail(value?: proto_clarifai_api_resources_pb.EmailAddress): SingleEmailResponse;
  hasEmail(): boolean;
  clearEmail(): SingleEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleEmailResponse): SingleEmailResponse.AsObject;
  static serializeBinaryToWriter(message: SingleEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleEmailResponse;
  static deserializeBinaryFromReader(message: SingleEmailResponse, reader: jspb.BinaryReader): SingleEmailResponse;
}

export namespace SingleEmailResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    email?: proto_clarifai_api_resources_pb.EmailAddress.AsObject,
  }
}

export class MultipleEmailResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultipleEmailResponse;
  hasStatus(): boolean;
  clearStatus(): MultipleEmailResponse;

  getEmailsList(): Array<proto_clarifai_api_resources_pb.EmailAddress>;
  setEmailsList(value: Array<proto_clarifai_api_resources_pb.EmailAddress>): MultipleEmailResponse;
  clearEmailsList(): MultipleEmailResponse;
  addEmails(value?: proto_clarifai_api_resources_pb.EmailAddress, index?: number): proto_clarifai_api_resources_pb.EmailAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleEmailResponse): MultipleEmailResponse.AsObject;
  static serializeBinaryToWriter(message: MultipleEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleEmailResponse;
  static deserializeBinaryFromReader(message: MultipleEmailResponse, reader: jspb.BinaryReader): MultipleEmailResponse;
}

export namespace MultipleEmailResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    emailsList: Array<proto_clarifai_api_resources_pb.EmailAddress.AsObject>,
  }
}

export class ListEmailsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListEmailsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListEmailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEmailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEmailsRequest): ListEmailsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEmailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEmailsRequest;
  static deserializeBinaryFromReader(message: ListEmailsRequest, reader: jspb.BinaryReader): ListEmailsRequest;
}

export namespace ListEmailsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostResendVerifyRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostResendVerifyRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostResendVerifyRequest;

  getEmail(): string;
  setEmail(value: string): PostResendVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostResendVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostResendVerifyRequest): PostResendVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: PostResendVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostResendVerifyRequest;
  static deserializeBinaryFromReader(message: PostResendVerifyRequest, reader: jspb.BinaryReader): PostResendVerifyRequest;
}

export namespace PostResendVerifyRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    email: string,
  }
}

export class SingleResendVerifyResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleResendVerifyResponse;
  hasStatus(): boolean;
  clearStatus(): SingleResendVerifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleResendVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleResendVerifyResponse): SingleResendVerifyResponse.AsObject;
  static serializeBinaryToWriter(message: SingleResendVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleResendVerifyResponse;
  static deserializeBinaryFromReader(message: SingleResendVerifyResponse, reader: jspb.BinaryReader): SingleResendVerifyResponse;
}

export namespace SingleResendVerifyResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class DeleteEmailRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteEmailRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteEmailRequest;

  getEmail(): string;
  setEmail(value: string): DeleteEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmailRequest): DeleteEmailRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmailRequest;
  static deserializeBinaryFromReader(message: DeleteEmailRequest, reader: jspb.BinaryReader): DeleteEmailRequest;
}

export namespace DeleteEmailRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    email: string,
  }
}

export class PostPrimaryEmailRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostPrimaryEmailRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostPrimaryEmailRequest;

  getEmail(): string;
  setEmail(value: string): PostPrimaryEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostPrimaryEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostPrimaryEmailRequest): PostPrimaryEmailRequest.AsObject;
  static serializeBinaryToWriter(message: PostPrimaryEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostPrimaryEmailRequest;
  static deserializeBinaryFromReader(message: PostPrimaryEmailRequest, reader: jspb.BinaryReader): PostPrimaryEmailRequest;
}

export namespace PostPrimaryEmailRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    email: string,
  }
}

export class PostValidatePasswordRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostValidatePasswordRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostValidatePasswordRequest;

  getPassword(): proto_clarifai_api_resources_pb.Password | undefined;
  setPassword(value?: proto_clarifai_api_resources_pb.Password): PostValidatePasswordRequest;
  hasPassword(): boolean;
  clearPassword(): PostValidatePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostValidatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostValidatePasswordRequest): PostValidatePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: PostValidatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostValidatePasswordRequest;
  static deserializeBinaryFromReader(message: PostValidatePasswordRequest, reader: jspb.BinaryReader): PostValidatePasswordRequest;
}

export namespace PostValidatePasswordRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    password?: proto_clarifai_api_resources_pb.Password.AsObject,
  }
}

export class SinglePasswordValidationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SinglePasswordValidationResponse;
  hasStatus(): boolean;
  clearStatus(): SinglePasswordValidationResponse;

  getPasswordViolations(): proto_clarifai_api_resources_pb.PasswordViolations | undefined;
  setPasswordViolations(value?: proto_clarifai_api_resources_pb.PasswordViolations): SinglePasswordValidationResponse;
  hasPasswordViolations(): boolean;
  clearPasswordViolations(): SinglePasswordValidationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SinglePasswordValidationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SinglePasswordValidationResponse): SinglePasswordValidationResponse.AsObject;
  static serializeBinaryToWriter(message: SinglePasswordValidationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SinglePasswordValidationResponse;
  static deserializeBinaryFromReader(message: SinglePasswordValidationResponse, reader: jspb.BinaryReader): SinglePasswordValidationResponse;
}

export namespace SinglePasswordValidationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    passwordViolations?: proto_clarifai_api_resources_pb.PasswordViolations.AsObject,
  }
}

export class ListGlobalPasswordPoliciesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGlobalPasswordPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGlobalPasswordPoliciesRequest): ListGlobalPasswordPoliciesRequest.AsObject;
  static serializeBinaryToWriter(message: ListGlobalPasswordPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGlobalPasswordPoliciesRequest;
  static deserializeBinaryFromReader(message: ListGlobalPasswordPoliciesRequest, reader: jspb.BinaryReader): ListGlobalPasswordPoliciesRequest;
}

export namespace ListGlobalPasswordPoliciesRequest {
  export type AsObject = {
  }
}

export class ListPasswordPoliciesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListPasswordPoliciesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListPasswordPoliciesRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListPasswordPoliciesRequest;
  clearUserIdsList(): ListPasswordPoliciesRequest;
  addUserIds(value: string, index?: number): ListPasswordPoliciesRequest;

  getOrganizationIdsList(): Array<string>;
  setOrganizationIdsList(value: Array<string>): ListPasswordPoliciesRequest;
  clearOrganizationIdsList(): ListPasswordPoliciesRequest;
  addOrganizationIds(value: string, index?: number): ListPasswordPoliciesRequest;

  getPage(): number;
  setPage(value: number): ListPasswordPoliciesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListPasswordPoliciesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPasswordPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPasswordPoliciesRequest): ListPasswordPoliciesRequest.AsObject;
  static serializeBinaryToWriter(message: ListPasswordPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPasswordPoliciesRequest;
  static deserializeBinaryFromReader(message: ListPasswordPoliciesRequest, reader: jspb.BinaryReader): ListPasswordPoliciesRequest;
}

export namespace ListPasswordPoliciesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    userIdsList: Array<string>,
    organizationIdsList: Array<string>,
    page: number,
    perPage: number,
  }
}

export class PostPasswordPoliciesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostPasswordPoliciesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostPasswordPoliciesRequest;

  getPasswordPoliciesList(): Array<proto_clarifai_api_resources_pb.PasswordPolicy>;
  setPasswordPoliciesList(value: Array<proto_clarifai_api_resources_pb.PasswordPolicy>): PostPasswordPoliciesRequest;
  clearPasswordPoliciesList(): PostPasswordPoliciesRequest;
  addPasswordPolicies(value?: proto_clarifai_api_resources_pb.PasswordPolicy, index?: number): proto_clarifai_api_resources_pb.PasswordPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostPasswordPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostPasswordPoliciesRequest): PostPasswordPoliciesRequest.AsObject;
  static serializeBinaryToWriter(message: PostPasswordPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostPasswordPoliciesRequest;
  static deserializeBinaryFromReader(message: PostPasswordPoliciesRequest, reader: jspb.BinaryReader): PostPasswordPoliciesRequest;
}

export namespace PostPasswordPoliciesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    passwordPoliciesList: Array<proto_clarifai_api_resources_pb.PasswordPolicy.AsObject>,
  }
}

export class PatchPasswordPoliciesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchPasswordPoliciesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchPasswordPoliciesRequest;

  getPasswordPoliciesList(): Array<proto_clarifai_api_resources_pb.PasswordPolicy>;
  setPasswordPoliciesList(value: Array<proto_clarifai_api_resources_pb.PasswordPolicy>): PatchPasswordPoliciesRequest;
  clearPasswordPoliciesList(): PatchPasswordPoliciesRequest;
  addPasswordPolicies(value?: proto_clarifai_api_resources_pb.PasswordPolicy, index?: number): proto_clarifai_api_resources_pb.PasswordPolicy;

  getAction(): string;
  setAction(value: string): PatchPasswordPoliciesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchPasswordPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchPasswordPoliciesRequest): PatchPasswordPoliciesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchPasswordPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchPasswordPoliciesRequest;
  static deserializeBinaryFromReader(message: PatchPasswordPoliciesRequest, reader: jspb.BinaryReader): PatchPasswordPoliciesRequest;
}

export namespace PatchPasswordPoliciesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    passwordPoliciesList: Array<proto_clarifai_api_resources_pb.PasswordPolicy.AsObject>,
    action: string,
  }
}

export class DeletePasswordPoliciesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeletePasswordPoliciesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeletePasswordPoliciesRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeletePasswordPoliciesRequest;
  clearIdsList(): DeletePasswordPoliciesRequest;
  addIds(value: string, index?: number): DeletePasswordPoliciesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePasswordPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePasswordPoliciesRequest): DeletePasswordPoliciesRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePasswordPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePasswordPoliciesRequest;
  static deserializeBinaryFromReader(message: DeletePasswordPoliciesRequest, reader: jspb.BinaryReader): DeletePasswordPoliciesRequest;
}

export namespace DeletePasswordPoliciesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class MultiplePasswordPoliciesResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiplePasswordPoliciesResponse;
  hasStatus(): boolean;
  clearStatus(): MultiplePasswordPoliciesResponse;

  getPasswordPoliciesList(): Array<proto_clarifai_api_resources_pb.PasswordPolicy>;
  setPasswordPoliciesList(value: Array<proto_clarifai_api_resources_pb.PasswordPolicy>): MultiplePasswordPoliciesResponse;
  clearPasswordPoliciesList(): MultiplePasswordPoliciesResponse;
  addPasswordPolicies(value?: proto_clarifai_api_resources_pb.PasswordPolicy, index?: number): proto_clarifai_api_resources_pb.PasswordPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiplePasswordPoliciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiplePasswordPoliciesResponse): MultiplePasswordPoliciesResponse.AsObject;
  static serializeBinaryToWriter(message: MultiplePasswordPoliciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiplePasswordPoliciesResponse;
  static deserializeBinaryFromReader(message: MultiplePasswordPoliciesResponse, reader: jspb.BinaryReader): MultiplePasswordPoliciesResponse;
}

export namespace MultiplePasswordPoliciesResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    passwordPoliciesList: Array<proto_clarifai_api_resources_pb.PasswordPolicy.AsObject>,
  }
}

export class UserFeatureConfigRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): UserFeatureConfigRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): UserFeatureConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFeatureConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserFeatureConfigRequest): UserFeatureConfigRequest.AsObject;
  static serializeBinaryToWriter(message: UserFeatureConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFeatureConfigRequest;
  static deserializeBinaryFromReader(message: UserFeatureConfigRequest, reader: jspb.BinaryReader): UserFeatureConfigRequest;
}

export namespace UserFeatureConfigRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class SingleUserFeatureConfigResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleUserFeatureConfigResponse;
  hasStatus(): boolean;
  clearStatus(): SingleUserFeatureConfigResponse;

  getConfig(): string;
  setConfig(value: string): SingleUserFeatureConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleUserFeatureConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleUserFeatureConfigResponse): SingleUserFeatureConfigResponse.AsObject;
  static serializeBinaryToWriter(message: SingleUserFeatureConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleUserFeatureConfigResponse;
  static deserializeBinaryFromReader(message: SingleUserFeatureConfigResponse, reader: jspb.BinaryReader): SingleUserFeatureConfigResponse;
}

export namespace SingleUserFeatureConfigResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    config: string,
  }
}

export class PostOrganizationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostOrganizationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostOrganizationsRequest;

  getOrganizationsList(): Array<proto_clarifai_api_resources_pb.Organization>;
  setOrganizationsList(value: Array<proto_clarifai_api_resources_pb.Organization>): PostOrganizationsRequest;
  clearOrganizationsList(): PostOrganizationsRequest;
  addOrganizations(value?: proto_clarifai_api_resources_pb.Organization, index?: number): proto_clarifai_api_resources_pb.Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrganizationsRequest): PostOrganizationsRequest.AsObject;
  static serializeBinaryToWriter(message: PostOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrganizationsRequest;
  static deserializeBinaryFromReader(message: PostOrganizationsRequest, reader: jspb.BinaryReader): PostOrganizationsRequest;
}

export namespace PostOrganizationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    organizationsList: Array<proto_clarifai_api_resources_pb.Organization.AsObject>,
  }
}

export class ListOrganizationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListOrganizationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListOrganizationsRequest;

  getPage(): number;
  setPage(value: number): ListOrganizationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListOrganizationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsRequest): ListOrganizationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationsRequest, reader: jspb.BinaryReader): ListOrganizationsRequest;
}

export namespace ListOrganizationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class ListUsersOrganizationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListUsersOrganizationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListUsersOrganizationsRequest;

  getPage(): number;
  setPage(value: number): ListUsersOrganizationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListUsersOrganizationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersOrganizationsRequest): ListUsersOrganizationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsersOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListUsersOrganizationsRequest, reader: jspb.BinaryReader): ListUsersOrganizationsRequest;
}

export namespace ListUsersOrganizationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class DeleteRequestingUserFromOrganizationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteRequestingUserFromOrganizationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteRequestingUserFromOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequestingUserFromOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequestingUserFromOrganizationRequest): DeleteRequestingUserFromOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequestingUserFromOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequestingUserFromOrganizationRequest;
  static deserializeBinaryFromReader(message: DeleteRequestingUserFromOrganizationRequest, reader: jspb.BinaryReader): DeleteRequestingUserFromOrganizationRequest;
}

export namespace DeleteRequestingUserFromOrganizationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostAcceptOrganizationInvitationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): PostAcceptOrganizationInvitationRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAcceptOrganizationInvitationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAcceptOrganizationInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAcceptOrganizationInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAcceptOrganizationInvitationRequest): PostAcceptOrganizationInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: PostAcceptOrganizationInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAcceptOrganizationInvitationRequest;
  static deserializeBinaryFromReader(message: PostAcceptOrganizationInvitationRequest, reader: jspb.BinaryReader): PostAcceptOrganizationInvitationRequest;
}

export namespace PostAcceptOrganizationInvitationRequest {
  export type AsObject = {
    id: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostDeclineOrganizationInvitationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): PostDeclineOrganizationInvitationRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostDeclineOrganizationInvitationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostDeclineOrganizationInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDeclineOrganizationInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDeclineOrganizationInvitationRequest): PostDeclineOrganizationInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: PostDeclineOrganizationInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDeclineOrganizationInvitationRequest;
  static deserializeBinaryFromReader(message: PostDeclineOrganizationInvitationRequest, reader: jspb.BinaryReader): PostDeclineOrganizationInvitationRequest;
}

export namespace PostDeclineOrganizationInvitationRequest {
  export type AsObject = {
    id: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class GetOrganizationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetOrganizationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PatchOrganizationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchOrganizationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchOrganizationRequest;

  getOrganizationsList(): Array<proto_clarifai_api_resources_pb.Organization>;
  setOrganizationsList(value: Array<proto_clarifai_api_resources_pb.Organization>): PatchOrganizationRequest;
  clearOrganizationsList(): PatchOrganizationRequest;
  addOrganizations(value?: proto_clarifai_api_resources_pb.Organization, index?: number): proto_clarifai_api_resources_pb.Organization;

  getAction(): string;
  setAction(value: string): PatchOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchOrganizationRequest): PatchOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: PatchOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchOrganizationRequest;
  static deserializeBinaryFromReader(message: PatchOrganizationRequest, reader: jspb.BinaryReader): PatchOrganizationRequest;
}

export namespace PatchOrganizationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    organizationsList: Array<proto_clarifai_api_resources_pb.Organization.AsObject>,
    action: string,
  }
}

export class DeleteOrganizationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteOrganizationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationRequest): DeleteOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationRequest, reader: jspb.BinaryReader): DeleteOrganizationRequest;
}

export namespace DeleteOrganizationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class SingleOrganizationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleOrganizationResponse;
  hasStatus(): boolean;
  clearStatus(): SingleOrganizationResponse;

  getOrganization(): proto_clarifai_api_resources_pb.Organization | undefined;
  setOrganization(value?: proto_clarifai_api_resources_pb.Organization): SingleOrganizationResponse;
  hasOrganization(): boolean;
  clearOrganization(): SingleOrganizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleOrganizationResponse): SingleOrganizationResponse.AsObject;
  static serializeBinaryToWriter(message: SingleOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleOrganizationResponse;
  static deserializeBinaryFromReader(message: SingleOrganizationResponse, reader: jspb.BinaryReader): SingleOrganizationResponse;
}

export namespace SingleOrganizationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    organization?: proto_clarifai_api_resources_pb.Organization.AsObject,
  }
}

export class MultiOrganizationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiOrganizationResponse;
  hasStatus(): boolean;
  clearStatus(): MultiOrganizationResponse;

  getOrganizationsList(): Array<proto_clarifai_api_resources_pb.Organization>;
  setOrganizationsList(value: Array<proto_clarifai_api_resources_pb.Organization>): MultiOrganizationResponse;
  clearOrganizationsList(): MultiOrganizationResponse;
  addOrganizations(value?: proto_clarifai_api_resources_pb.Organization, index?: number): proto_clarifai_api_resources_pb.Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiOrganizationResponse): MultiOrganizationResponse.AsObject;
  static serializeBinaryToWriter(message: MultiOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiOrganizationResponse;
  static deserializeBinaryFromReader(message: MultiOrganizationResponse, reader: jspb.BinaryReader): MultiOrganizationResponse;
}

export namespace MultiOrganizationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    organizationsList: Array<proto_clarifai_api_resources_pb.Organization.AsObject>,
  }
}

export class MultiUsersOrganizationsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiUsersOrganizationsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiUsersOrganizationsResponse;

  getOrganizationsList(): Array<MultiUsersOrganizationsResponse.UserOrganization>;
  setOrganizationsList(value: Array<MultiUsersOrganizationsResponse.UserOrganization>): MultiUsersOrganizationsResponse;
  clearOrganizationsList(): MultiUsersOrganizationsResponse;
  addOrganizations(value?: MultiUsersOrganizationsResponse.UserOrganization, index?: number): MultiUsersOrganizationsResponse.UserOrganization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiUsersOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiUsersOrganizationsResponse): MultiUsersOrganizationsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiUsersOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiUsersOrganizationsResponse;
  static deserializeBinaryFromReader(message: MultiUsersOrganizationsResponse, reader: jspb.BinaryReader): MultiUsersOrganizationsResponse;
}

export namespace MultiUsersOrganizationsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    organizationsList: Array<MultiUsersOrganizationsResponse.UserOrganization.AsObject>,
  }

  export class UserOrganization extends jspb.Message {
    getOrganization(): proto_clarifai_api_resources_pb.Organization | undefined;
    setOrganization(value?: proto_clarifai_api_resources_pb.Organization): UserOrganization;
    hasOrganization(): boolean;
    clearOrganization(): UserOrganization;

    getRole(): proto_clarifai_api_resources_pb.Role | undefined;
    setRole(value?: proto_clarifai_api_resources_pb.Role): UserOrganization;
    hasRole(): boolean;
    clearRole(): UserOrganization;

    getFeatureFlagConfigs(): string;
    setFeatureFlagConfigs(value: string): UserOrganization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserOrganization.AsObject;
    static toObject(includeInstance: boolean, msg: UserOrganization): UserOrganization.AsObject;
    static serializeBinaryToWriter(message: UserOrganization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserOrganization;
    static deserializeBinaryFromReader(message: UserOrganization, reader: jspb.BinaryReader): UserOrganization;
  }

  export namespace UserOrganization {
    export type AsObject = {
      organization?: proto_clarifai_api_resources_pb.Organization.AsObject,
      role?: proto_clarifai_api_resources_pb.Role.AsObject,
      featureFlagConfigs: string,
    }
  }

}

export class ListOrganizationAppMembersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListOrganizationAppMembersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListOrganizationAppMembersRequest;

  getRequiredScopesList(): Array<proto_clarifai_auth_scope_scope_pb.S>;
  setRequiredScopesList(value: Array<proto_clarifai_auth_scope_scope_pb.S>): ListOrganizationAppMembersRequest;
  clearRequiredScopesList(): ListOrganizationAppMembersRequest;
  addRequiredScopes(value: proto_clarifai_auth_scope_scope_pb.S, index?: number): ListOrganizationAppMembersRequest;

  getPage(): number;
  setPage(value: number): ListOrganizationAppMembersRequest;

  getPerPage(): number;
  setPerPage(value: number): ListOrganizationAppMembersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationAppMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationAppMembersRequest): ListOrganizationAppMembersRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationAppMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationAppMembersRequest;
  static deserializeBinaryFromReader(message: ListOrganizationAppMembersRequest, reader: jspb.BinaryReader): ListOrganizationAppMembersRequest;
}

export namespace ListOrganizationAppMembersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    requiredScopesList: Array<proto_clarifai_auth_scope_scope_pb.S>,
    page: number,
    perPage: number,
  }
}

export class ListOrganizationMembersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListOrganizationMembersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListOrganizationMembersRequest;

  getPage(): number;
  setPage(value: number): ListOrganizationMembersRequest;

  getPerPage(): number;
  setPerPage(value: number): ListOrganizationMembersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationMembersRequest): ListOrganizationMembersRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationMembersRequest;
  static deserializeBinaryFromReader(message: ListOrganizationMembersRequest, reader: jspb.BinaryReader): ListOrganizationMembersRequest;
}

export namespace ListOrganizationMembersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class PostOrganizationInvitationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostOrganizationInvitationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostOrganizationInvitationsRequest;

  getInvitationsList(): Array<proto_clarifai_api_resources_pb.OrganizationInvitation>;
  setInvitationsList(value: Array<proto_clarifai_api_resources_pb.OrganizationInvitation>): PostOrganizationInvitationsRequest;
  clearInvitationsList(): PostOrganizationInvitationsRequest;
  addInvitations(value?: proto_clarifai_api_resources_pb.OrganizationInvitation, index?: number): proto_clarifai_api_resources_pb.OrganizationInvitation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrganizationInvitationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrganizationInvitationsRequest): PostOrganizationInvitationsRequest.AsObject;
  static serializeBinaryToWriter(message: PostOrganizationInvitationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrganizationInvitationsRequest;
  static deserializeBinaryFromReader(message: PostOrganizationInvitationsRequest, reader: jspb.BinaryReader): PostOrganizationInvitationsRequest;
}

export namespace PostOrganizationInvitationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    invitationsList: Array<proto_clarifai_api_resources_pb.OrganizationInvitation.AsObject>,
  }
}

export class PatchOrganizationInvitationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchOrganizationInvitationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchOrganizationInvitationsRequest;

  getAction(): string;
  setAction(value: string): PatchOrganizationInvitationsRequest;

  getInvitationsList(): Array<proto_clarifai_api_resources_pb.OrganizationInvitation>;
  setInvitationsList(value: Array<proto_clarifai_api_resources_pb.OrganizationInvitation>): PatchOrganizationInvitationsRequest;
  clearInvitationsList(): PatchOrganizationInvitationsRequest;
  addInvitations(value?: proto_clarifai_api_resources_pb.OrganizationInvitation, index?: number): proto_clarifai_api_resources_pb.OrganizationInvitation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchOrganizationInvitationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchOrganizationInvitationsRequest): PatchOrganizationInvitationsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchOrganizationInvitationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchOrganizationInvitationsRequest;
  static deserializeBinaryFromReader(message: PatchOrganizationInvitationsRequest, reader: jspb.BinaryReader): PatchOrganizationInvitationsRequest;
}

export namespace PatchOrganizationInvitationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    action: string,
    invitationsList: Array<proto_clarifai_api_resources_pb.OrganizationInvitation.AsObject>,
  }
}

export class ListOrganizationInvitationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListOrganizationInvitationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListOrganizationInvitationsRequest;

  getPage(): number;
  setPage(value: number): ListOrganizationInvitationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListOrganizationInvitationsRequest;

  getStatus(): OrganizationInvitationStatus;
  setStatus(value: OrganizationInvitationStatus): ListOrganizationInvitationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationInvitationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationInvitationsRequest): ListOrganizationInvitationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationInvitationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationInvitationsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationInvitationsRequest, reader: jspb.BinaryReader): ListOrganizationInvitationsRequest;
}

export namespace ListOrganizationInvitationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
    status: OrganizationInvitationStatus,
  }
}

export class GetOrganizationInvitationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetOrganizationInvitationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetOrganizationInvitationRequest;

  getId(): string;
  setId(value: string): GetOrganizationInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationInvitationRequest): GetOrganizationInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrganizationInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationInvitationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationInvitationRequest, reader: jspb.BinaryReader): GetOrganizationInvitationRequest;
}

export namespace GetOrganizationInvitationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class GetOrganizationInvitationPublicRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetOrganizationInvitationPublicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationInvitationPublicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationInvitationPublicRequest): GetOrganizationInvitationPublicRequest.AsObject;
  static serializeBinaryToWriter(message: GetOrganizationInvitationPublicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationInvitationPublicRequest;
  static deserializeBinaryFromReader(message: GetOrganizationInvitationPublicRequest, reader: jspb.BinaryReader): GetOrganizationInvitationPublicRequest;
}

export namespace GetOrganizationInvitationPublicRequest {
  export type AsObject = {
    id: string,
  }
}

export class SingleOrganizationInvitationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleOrganizationInvitationResponse;
  hasStatus(): boolean;
  clearStatus(): SingleOrganizationInvitationResponse;

  getInvitation(): proto_clarifai_api_resources_pb.OrganizationInvitation | undefined;
  setInvitation(value?: proto_clarifai_api_resources_pb.OrganizationInvitation): SingleOrganizationInvitationResponse;
  hasInvitation(): boolean;
  clearInvitation(): SingleOrganizationInvitationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleOrganizationInvitationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleOrganizationInvitationResponse): SingleOrganizationInvitationResponse.AsObject;
  static serializeBinaryToWriter(message: SingleOrganizationInvitationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleOrganizationInvitationResponse;
  static deserializeBinaryFromReader(message: SingleOrganizationInvitationResponse, reader: jspb.BinaryReader): SingleOrganizationInvitationResponse;
}

export namespace SingleOrganizationInvitationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    invitation?: proto_clarifai_api_resources_pb.OrganizationInvitation.AsObject,
  }
}

export class MultiOrganizationInvitationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiOrganizationInvitationResponse;
  hasStatus(): boolean;
  clearStatus(): MultiOrganizationInvitationResponse;

  getInvitationsList(): Array<proto_clarifai_api_resources_pb.OrganizationInvitation>;
  setInvitationsList(value: Array<proto_clarifai_api_resources_pb.OrganizationInvitation>): MultiOrganizationInvitationResponse;
  clearInvitationsList(): MultiOrganizationInvitationResponse;
  addInvitations(value?: proto_clarifai_api_resources_pb.OrganizationInvitation, index?: number): proto_clarifai_api_resources_pb.OrganizationInvitation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiOrganizationInvitationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiOrganizationInvitationResponse): MultiOrganizationInvitationResponse.AsObject;
  static serializeBinaryToWriter(message: MultiOrganizationInvitationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiOrganizationInvitationResponse;
  static deserializeBinaryFromReader(message: MultiOrganizationInvitationResponse, reader: jspb.BinaryReader): MultiOrganizationInvitationResponse;
}

export namespace MultiOrganizationInvitationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    invitationsList: Array<proto_clarifai_api_resources_pb.OrganizationInvitation.AsObject>,
  }
}

export class PatchOrganizationMembersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchOrganizationMembersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchOrganizationMembersRequest;

  getAction(): string;
  setAction(value: string): PatchOrganizationMembersRequest;

  getOrganizationMembersList(): Array<PatchOrganizationMembersRequest.PatchOrganizationMember>;
  setOrganizationMembersList(value: Array<PatchOrganizationMembersRequest.PatchOrganizationMember>): PatchOrganizationMembersRequest;
  clearOrganizationMembersList(): PatchOrganizationMembersRequest;
  addOrganizationMembers(value?: PatchOrganizationMembersRequest.PatchOrganizationMember, index?: number): PatchOrganizationMembersRequest.PatchOrganizationMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchOrganizationMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchOrganizationMembersRequest): PatchOrganizationMembersRequest.AsObject;
  static serializeBinaryToWriter(message: PatchOrganizationMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchOrganizationMembersRequest;
  static deserializeBinaryFromReader(message: PatchOrganizationMembersRequest, reader: jspb.BinaryReader): PatchOrganizationMembersRequest;
}

export namespace PatchOrganizationMembersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    action: string,
    organizationMembersList: Array<PatchOrganizationMembersRequest.PatchOrganizationMember.AsObject>,
  }

  export class PatchOrganizationMember extends jspb.Message {
    getId(): string;
    setId(value: string): PatchOrganizationMember;

    getRoleId(): string;
    setRoleId(value: string): PatchOrganizationMember;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchOrganizationMember.AsObject;
    static toObject(includeInstance: boolean, msg: PatchOrganizationMember): PatchOrganizationMember.AsObject;
    static serializeBinaryToWriter(message: PatchOrganizationMember, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchOrganizationMember;
    static deserializeBinaryFromReader(message: PatchOrganizationMember, reader: jspb.BinaryReader): PatchOrganizationMember;
  }

  export namespace PatchOrganizationMember {
    export type AsObject = {
      id: string,
      roleId: string,
    }
  }

}

export class PostOrganizationMemberRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostOrganizationMemberRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostOrganizationMemberRequest;

  getMemberId(): string;
  setMemberId(value: string): PostOrganizationMemberRequest;

  getRoleId(): string;
  setRoleId(value: string): PostOrganizationMemberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrganizationMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrganizationMemberRequest): PostOrganizationMemberRequest.AsObject;
  static serializeBinaryToWriter(message: PostOrganizationMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrganizationMemberRequest;
  static deserializeBinaryFromReader(message: PostOrganizationMemberRequest, reader: jspb.BinaryReader): PostOrganizationMemberRequest;
}

export namespace PostOrganizationMemberRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    memberId: string,
    roleId: string,
  }
}

export class DeleteOrganizationMemberRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteOrganizationMemberRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteOrganizationMemberRequest;

  getMemberId(): string;
  setMemberId(value: string): DeleteOrganizationMemberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationMemberRequest): DeleteOrganizationMemberRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationMemberRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationMemberRequest, reader: jspb.BinaryReader): DeleteOrganizationMemberRequest;
}

export namespace DeleteOrganizationMemberRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    memberId: string,
  }
}

export class MultiOrganizationMemberResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiOrganizationMemberResponse;
  hasStatus(): boolean;
  clearStatus(): MultiOrganizationMemberResponse;

  getOrganizationMembersList(): Array<proto_clarifai_api_resources_pb.OrganizationMember>;
  setOrganizationMembersList(value: Array<proto_clarifai_api_resources_pb.OrganizationMember>): MultiOrganizationMemberResponse;
  clearOrganizationMembersList(): MultiOrganizationMemberResponse;
  addOrganizationMembers(value?: proto_clarifai_api_resources_pb.OrganizationMember, index?: number): proto_clarifai_api_resources_pb.OrganizationMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiOrganizationMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiOrganizationMemberResponse): MultiOrganizationMemberResponse.AsObject;
  static serializeBinaryToWriter(message: MultiOrganizationMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiOrganizationMemberResponse;
  static deserializeBinaryFromReader(message: MultiOrganizationMemberResponse, reader: jspb.BinaryReader): MultiOrganizationMemberResponse;
}

export namespace MultiOrganizationMemberResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    organizationMembersList: Array<proto_clarifai_api_resources_pb.OrganizationMember.AsObject>,
  }
}

export class PostIdentityProvidersRequest extends jspb.Message {
  getIdentityProvidersList(): Array<proto_clarifai_api_resources_pb.IdentityProvider>;
  setIdentityProvidersList(value: Array<proto_clarifai_api_resources_pb.IdentityProvider>): PostIdentityProvidersRequest;
  clearIdentityProvidersList(): PostIdentityProvidersRequest;
  addIdentityProviders(value?: proto_clarifai_api_resources_pb.IdentityProvider, index?: number): proto_clarifai_api_resources_pb.IdentityProvider;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostIdentityProvidersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostIdentityProvidersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostIdentityProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostIdentityProvidersRequest): PostIdentityProvidersRequest.AsObject;
  static serializeBinaryToWriter(message: PostIdentityProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostIdentityProvidersRequest;
  static deserializeBinaryFromReader(message: PostIdentityProvidersRequest, reader: jspb.BinaryReader): PostIdentityProvidersRequest;
}

export namespace PostIdentityProvidersRequest {
  export type AsObject = {
    identityProvidersList: Array<proto_clarifai_api_resources_pb.IdentityProvider.AsObject>,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class ListIdentityProvidersRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListIdentityProvidersRequest;

  getPerPage(): number;
  setPerPage(value: number): ListIdentityProvidersRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListIdentityProvidersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListIdentityProvidersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIdentityProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIdentityProvidersRequest): ListIdentityProvidersRequest.AsObject;
  static serializeBinaryToWriter(message: ListIdentityProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIdentityProvidersRequest;
  static deserializeBinaryFromReader(message: ListIdentityProvidersRequest, reader: jspb.BinaryReader): ListIdentityProvidersRequest;
}

export namespace ListIdentityProvidersRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class GetIdentityProviderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetIdentityProviderRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetIdentityProviderRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetIdentityProviderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityProviderRequest): GetIdentityProviderRequest.AsObject;
  static serializeBinaryToWriter(message: GetIdentityProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityProviderRequest;
  static deserializeBinaryFromReader(message: GetIdentityProviderRequest, reader: jspb.BinaryReader): GetIdentityProviderRequest;
}

export namespace GetIdentityProviderRequest {
  export type AsObject = {
    id: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PatchIdentityProvidersRequest extends jspb.Message {
  getIdentityProvidersList(): Array<proto_clarifai_api_resources_pb.IdentityProvider>;
  setIdentityProvidersList(value: Array<proto_clarifai_api_resources_pb.IdentityProvider>): PatchIdentityProvidersRequest;
  clearIdentityProvidersList(): PatchIdentityProvidersRequest;
  addIdentityProviders(value?: proto_clarifai_api_resources_pb.IdentityProvider, index?: number): proto_clarifai_api_resources_pb.IdentityProvider;

  getAction(): string;
  setAction(value: string): PatchIdentityProvidersRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchIdentityProvidersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchIdentityProvidersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchIdentityProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchIdentityProvidersRequest): PatchIdentityProvidersRequest.AsObject;
  static serializeBinaryToWriter(message: PatchIdentityProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchIdentityProvidersRequest;
  static deserializeBinaryFromReader(message: PatchIdentityProvidersRequest, reader: jspb.BinaryReader): PatchIdentityProvidersRequest;
}

export namespace PatchIdentityProvidersRequest {
  export type AsObject = {
    identityProvidersList: Array<proto_clarifai_api_resources_pb.IdentityProvider.AsObject>,
    action: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class DeleteIdentityProvidersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteIdentityProvidersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteIdentityProvidersRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteIdentityProvidersRequest;
  clearIdsList(): DeleteIdentityProvidersRequest;
  addIds(value: string, index?: number): DeleteIdentityProvidersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIdentityProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIdentityProvidersRequest): DeleteIdentityProvidersRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteIdentityProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIdentityProvidersRequest;
  static deserializeBinaryFromReader(message: DeleteIdentityProvidersRequest, reader: jspb.BinaryReader): DeleteIdentityProvidersRequest;
}

export namespace DeleteIdentityProvidersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class SingleIdentityProviderResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleIdentityProviderResponse;
  hasStatus(): boolean;
  clearStatus(): SingleIdentityProviderResponse;

  getIdentityProvider(): proto_clarifai_api_resources_pb.IdentityProvider | undefined;
  setIdentityProvider(value?: proto_clarifai_api_resources_pb.IdentityProvider): SingleIdentityProviderResponse;
  hasIdentityProvider(): boolean;
  clearIdentityProvider(): SingleIdentityProviderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleIdentityProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleIdentityProviderResponse): SingleIdentityProviderResponse.AsObject;
  static serializeBinaryToWriter(message: SingleIdentityProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleIdentityProviderResponse;
  static deserializeBinaryFromReader(message: SingleIdentityProviderResponse, reader: jspb.BinaryReader): SingleIdentityProviderResponse;
}

export namespace SingleIdentityProviderResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    identityProvider?: proto_clarifai_api_resources_pb.IdentityProvider.AsObject,
  }
}

export class MultiIdentityProviderResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiIdentityProviderResponse;
  hasStatus(): boolean;
  clearStatus(): MultiIdentityProviderResponse;

  getIdentityProvidersList(): Array<proto_clarifai_api_resources_pb.IdentityProvider>;
  setIdentityProvidersList(value: Array<proto_clarifai_api_resources_pb.IdentityProvider>): MultiIdentityProviderResponse;
  clearIdentityProvidersList(): MultiIdentityProviderResponse;
  addIdentityProviders(value?: proto_clarifai_api_resources_pb.IdentityProvider, index?: number): proto_clarifai_api_resources_pb.IdentityProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiIdentityProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiIdentityProviderResponse): MultiIdentityProviderResponse.AsObject;
  static serializeBinaryToWriter(message: MultiIdentityProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiIdentityProviderResponse;
  static deserializeBinaryFromReader(message: MultiIdentityProviderResponse, reader: jspb.BinaryReader): MultiIdentityProviderResponse;
}

export namespace MultiIdentityProviderResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    identityProvidersList: Array<proto_clarifai_api_resources_pb.IdentityProvider.AsObject>,
  }
}

export class PostTeamsRequest extends jspb.Message {
  getTeamsList(): Array<PostTeamsRequest.PostTeam>;
  setTeamsList(value: Array<PostTeamsRequest.PostTeam>): PostTeamsRequest;
  clearTeamsList(): PostTeamsRequest;
  addTeams(value?: PostTeamsRequest.PostTeam, index?: number): PostTeamsRequest.PostTeam;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostTeamsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostTeamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTeamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostTeamsRequest): PostTeamsRequest.AsObject;
  static serializeBinaryToWriter(message: PostTeamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTeamsRequest;
  static deserializeBinaryFromReader(message: PostTeamsRequest, reader: jspb.BinaryReader): PostTeamsRequest;
}

export namespace PostTeamsRequest {
  export type AsObject = {
    teamsList: Array<PostTeamsRequest.PostTeam.AsObject>,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }

  export class PostTeam extends jspb.Message {
    getId(): string;
    setId(value: string): PostTeam;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PostTeam;
    hasCreatedAt(): boolean;
    clearCreatedAt(): PostTeam;

    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): PostTeam;
    hasModifiedAt(): boolean;
    clearModifiedAt(): PostTeam;

    getName(): string;
    setName(value: string): PostTeam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostTeam.AsObject;
    static toObject(includeInstance: boolean, msg: PostTeam): PostTeam.AsObject;
    static serializeBinaryToWriter(message: PostTeam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostTeam;
    static deserializeBinaryFromReader(message: PostTeam, reader: jspb.BinaryReader): PostTeam;
  }

  export namespace PostTeam {
    export type AsObject = {
      id: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      name: string,
    }
  }

}

export class ListTeamsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListTeamsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListTeamsRequest;

  getQuery(): string;
  setQuery(value: string): ListTeamsRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListTeamsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListTeamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTeamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTeamsRequest): ListTeamsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTeamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTeamsRequest;
  static deserializeBinaryFromReader(message: ListTeamsRequest, reader: jspb.BinaryReader): ListTeamsRequest;
}

export namespace ListTeamsRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    query: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class GetTeamRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetTeamRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetTeamRequest;

  getId(): string;
  setId(value: string): GetTeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTeamRequest): GetTeamRequest.AsObject;
  static serializeBinaryToWriter(message: GetTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTeamRequest;
  static deserializeBinaryFromReader(message: GetTeamRequest, reader: jspb.BinaryReader): GetTeamRequest;
}

export namespace GetTeamRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class PatchTeamsRequest extends jspb.Message {
  getTeamsList(): Array<proto_clarifai_api_resources_pb.Team>;
  setTeamsList(value: Array<proto_clarifai_api_resources_pb.Team>): PatchTeamsRequest;
  clearTeamsList(): PatchTeamsRequest;
  addTeams(value?: proto_clarifai_api_resources_pb.Team, index?: number): proto_clarifai_api_resources_pb.Team;

  getAction(): string;
  setAction(value: string): PatchTeamsRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchTeamsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchTeamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchTeamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchTeamsRequest): PatchTeamsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchTeamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchTeamsRequest;
  static deserializeBinaryFromReader(message: PatchTeamsRequest, reader: jspb.BinaryReader): PatchTeamsRequest;
}

export namespace PatchTeamsRequest {
  export type AsObject = {
    teamsList: Array<proto_clarifai_api_resources_pb.Team.AsObject>,
    action: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class DeleteTeamsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteTeamsRequest;
  clearIdsList(): DeleteTeamsRequest;
  addIds(value: string, index?: number): DeleteTeamsRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteTeamsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteTeamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTeamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTeamsRequest): DeleteTeamsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTeamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTeamsRequest;
  static deserializeBinaryFromReader(message: DeleteTeamsRequest, reader: jspb.BinaryReader): DeleteTeamsRequest;
}

export namespace DeleteTeamsRequest {
  export type AsObject = {
    idsList: Array<string>,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class SingleTeamResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleTeamResponse;
  hasStatus(): boolean;
  clearStatus(): SingleTeamResponse;

  getTeam(): proto_clarifai_api_resources_pb.Team | undefined;
  setTeam(value?: proto_clarifai_api_resources_pb.Team): SingleTeamResponse;
  hasTeam(): boolean;
  clearTeam(): SingleTeamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleTeamResponse): SingleTeamResponse.AsObject;
  static serializeBinaryToWriter(message: SingleTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleTeamResponse;
  static deserializeBinaryFromReader(message: SingleTeamResponse, reader: jspb.BinaryReader): SingleTeamResponse;
}

export namespace SingleTeamResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    team?: proto_clarifai_api_resources_pb.Team.AsObject,
  }
}

export class MultiTeamResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTeamResponse;
  hasStatus(): boolean;
  clearStatus(): MultiTeamResponse;

  getTeamsList(): Array<proto_clarifai_api_resources_pb.Team>;
  setTeamsList(value: Array<proto_clarifai_api_resources_pb.Team>): MultiTeamResponse;
  clearTeamsList(): MultiTeamResponse;
  addTeams(value?: proto_clarifai_api_resources_pb.Team, index?: number): proto_clarifai_api_resources_pb.Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTeamResponse): MultiTeamResponse.AsObject;
  static serializeBinaryToWriter(message: MultiTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTeamResponse;
  static deserializeBinaryFromReader(message: MultiTeamResponse, reader: jspb.BinaryReader): MultiTeamResponse;
}

export namespace MultiTeamResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    teamsList: Array<proto_clarifai_api_resources_pb.Team.AsObject>,
  }
}

export class AppIdentity extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): AppIdentity;

  getAppId(): string;
  setAppId(value: string): AppIdentity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: AppIdentity): AppIdentity.AsObject;
  static serializeBinaryToWriter(message: AppIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppIdentity;
  static deserializeBinaryFromReader(message: AppIdentity, reader: jspb.BinaryReader): AppIdentity;
}

export namespace AppIdentity {
  export type AsObject = {
    userId: string,
    appId: string,
  }
}

export class ListTeamAppsRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): ListTeamAppsRequest;

  getPage(): number;
  setPage(value: number): ListTeamAppsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListTeamAppsRequest;

  getQuery(): string;
  setQuery(value: string): ListTeamAppsRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListTeamAppsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListTeamAppsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTeamAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTeamAppsRequest): ListTeamAppsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTeamAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTeamAppsRequest;
  static deserializeBinaryFromReader(message: ListTeamAppsRequest, reader: jspb.BinaryReader): ListTeamAppsRequest;
}

export namespace ListTeamAppsRequest {
  export type AsObject = {
    teamId: string,
    page: number,
    perPage: number,
    query: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostTeamAppsRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): PostTeamAppsRequest;

  getAppsList(): Array<PostTeamAppsRequest.TeamApp>;
  setAppsList(value: Array<PostTeamAppsRequest.TeamApp>): PostTeamAppsRequest;
  clearAppsList(): PostTeamAppsRequest;
  addApps(value?: PostTeamAppsRequest.TeamApp, index?: number): PostTeamAppsRequest.TeamApp;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostTeamAppsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostTeamAppsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTeamAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostTeamAppsRequest): PostTeamAppsRequest.AsObject;
  static serializeBinaryToWriter(message: PostTeamAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTeamAppsRequest;
  static deserializeBinaryFromReader(message: PostTeamAppsRequest, reader: jspb.BinaryReader): PostTeamAppsRequest;
}

export namespace PostTeamAppsRequest {
  export type AsObject = {
    teamId: string,
    appsList: Array<PostTeamAppsRequest.TeamApp.AsObject>,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }

  export class TeamApp extends jspb.Message {
    getAppId(): string;
    setAppId(value: string): TeamApp;

    getRoleId(): string;
    setRoleId(value: string): TeamApp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeamApp.AsObject;
    static toObject(includeInstance: boolean, msg: TeamApp): TeamApp.AsObject;
    static serializeBinaryToWriter(message: TeamApp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeamApp;
    static deserializeBinaryFromReader(message: TeamApp, reader: jspb.BinaryReader): TeamApp;
  }

  export namespace TeamApp {
    export type AsObject = {
      appId: string,
      roleId: string,
    }
  }

}

export class DeleteTeamAppsRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): DeleteTeamAppsRequest;

  getAppIdsList(): Array<string>;
  setAppIdsList(value: Array<string>): DeleteTeamAppsRequest;
  clearAppIdsList(): DeleteTeamAppsRequest;
  addAppIds(value: string, index?: number): DeleteTeamAppsRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteTeamAppsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteTeamAppsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTeamAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTeamAppsRequest): DeleteTeamAppsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTeamAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTeamAppsRequest;
  static deserializeBinaryFromReader(message: DeleteTeamAppsRequest, reader: jspb.BinaryReader): DeleteTeamAppsRequest;
}

export namespace DeleteTeamAppsRequest {
  export type AsObject = {
    teamId: string,
    appIdsList: Array<string>,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MultiTeamAppsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTeamAppsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiTeamAppsResponse;

  getAppsList(): Array<MultiTeamAppsResponse.TeamApp>;
  setAppsList(value: Array<MultiTeamAppsResponse.TeamApp>): MultiTeamAppsResponse;
  clearAppsList(): MultiTeamAppsResponse;
  addApps(value?: MultiTeamAppsResponse.TeamApp, index?: number): MultiTeamAppsResponse.TeamApp;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): MultiTeamAppsResponse;
  hasUserAppId(): boolean;
  clearUserAppId(): MultiTeamAppsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTeamAppsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTeamAppsResponse): MultiTeamAppsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiTeamAppsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTeamAppsResponse;
  static deserializeBinaryFromReader(message: MultiTeamAppsResponse, reader: jspb.BinaryReader): MultiTeamAppsResponse;
}

export namespace MultiTeamAppsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    appsList: Array<MultiTeamAppsResponse.TeamApp.AsObject>,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }

  export class TeamApp extends jspb.Message {
    getTeamId(): string;
    setTeamId(value: string): TeamApp;

    getRoleId(): string;
    setRoleId(value: string): TeamApp;

    getApp(): AppIdentity | undefined;
    setApp(value?: AppIdentity): TeamApp;
    hasApp(): boolean;
    clearApp(): TeamApp;

    getAppName(): string;
    setAppName(value: string): TeamApp;

    getRoleName(): string;
    setRoleName(value: string): TeamApp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeamApp.AsObject;
    static toObject(includeInstance: boolean, msg: TeamApp): TeamApp.AsObject;
    static serializeBinaryToWriter(message: TeamApp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeamApp;
    static deserializeBinaryFromReader(message: TeamApp, reader: jspb.BinaryReader): TeamApp;
  }

  export namespace TeamApp {
    export type AsObject = {
      teamId: string,
      roleId: string,
      app?: AppIdentity.AsObject,
      appName: string,
      roleName: string,
    }
  }

}

export class PostTeamUsersRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): PostTeamUsersRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): PostTeamUsersRequest;
  clearUserIdsList(): PostTeamUsersRequest;
  addUserIds(value: string, index?: number): PostTeamUsersRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostTeamUsersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostTeamUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTeamUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostTeamUsersRequest): PostTeamUsersRequest.AsObject;
  static serializeBinaryToWriter(message: PostTeamUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTeamUsersRequest;
  static deserializeBinaryFromReader(message: PostTeamUsersRequest, reader: jspb.BinaryReader): PostTeamUsersRequest;
}

export namespace PostTeamUsersRequest {
  export type AsObject = {
    teamId: string,
    userIdsList: Array<string>,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class ListTeamUsersRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): ListTeamUsersRequest;

  getPage(): number;
  setPage(value: number): ListTeamUsersRequest;

  getPerPage(): number;
  setPerPage(value: number): ListTeamUsersRequest;

  getQuery(): string;
  setQuery(value: string): ListTeamUsersRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListTeamUsersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListTeamUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTeamUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTeamUsersRequest): ListTeamUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListTeamUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTeamUsersRequest;
  static deserializeBinaryFromReader(message: ListTeamUsersRequest, reader: jspb.BinaryReader): ListTeamUsersRequest;
}

export namespace ListTeamUsersRequest {
  export type AsObject = {
    teamId: string,
    page: number,
    perPage: number,
    query: string,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class DeleteTeamUsersRequest extends jspb.Message {
  getTeamId(): string;
  setTeamId(value: string): DeleteTeamUsersRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): DeleteTeamUsersRequest;
  clearUserIdsList(): DeleteTeamUsersRequest;
  addUserIds(value: string, index?: number): DeleteTeamUsersRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteTeamUsersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteTeamUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTeamUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTeamUsersRequest): DeleteTeamUsersRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTeamUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTeamUsersRequest;
  static deserializeBinaryFromReader(message: DeleteTeamUsersRequest, reader: jspb.BinaryReader): DeleteTeamUsersRequest;
}

export namespace DeleteTeamUsersRequest {
  export type AsObject = {
    teamId: string,
    userIdsList: Array<string>,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class MultiTeamUserResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTeamUserResponse;
  hasStatus(): boolean;
  clearStatus(): MultiTeamUserResponse;

  getTeamUsersList(): Array<proto_clarifai_api_resources_pb.TeamUser>;
  setTeamUsersList(value: Array<proto_clarifai_api_resources_pb.TeamUser>): MultiTeamUserResponse;
  clearTeamUsersList(): MultiTeamUserResponse;
  addTeamUsers(value?: proto_clarifai_api_resources_pb.TeamUser, index?: number): proto_clarifai_api_resources_pb.TeamUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTeamUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTeamUserResponse): MultiTeamUserResponse.AsObject;
  static serializeBinaryToWriter(message: MultiTeamUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTeamUserResponse;
  static deserializeBinaryFromReader(message: MultiTeamUserResponse, reader: jspb.BinaryReader): MultiTeamUserResponse;
}

export namespace MultiTeamUserResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    teamUsersList: Array<proto_clarifai_api_resources_pb.TeamUser.AsObject>,
  }
}

export class ListRolesRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListRolesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListRolesRequest;

  getTypesList(): Array<proto_clarifai_api_resources_pb.RoleType>;
  setTypesList(value: Array<proto_clarifai_api_resources_pb.RoleType>): ListRolesRequest;
  clearTypesList(): ListRolesRequest;
  addTypes(value: proto_clarifai_api_resources_pb.RoleType, index?: number): ListRolesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRolesRequest): ListRolesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRolesRequest;
  static deserializeBinaryFromReader(message: ListRolesRequest, reader: jspb.BinaryReader): ListRolesRequest;
}

export namespace ListRolesRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    typesList: Array<proto_clarifai_api_resources_pb.RoleType>,
  }
}

export class GetRoleRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoleRequest): GetRoleRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoleRequest;
  static deserializeBinaryFromReader(message: GetRoleRequest, reader: jspb.BinaryReader): GetRoleRequest;
}

export namespace GetRoleRequest {
  export type AsObject = {
    id: string,
  }
}

export class SingleRoleResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleRoleResponse;
  hasStatus(): boolean;
  clearStatus(): SingleRoleResponse;

  getRole(): proto_clarifai_api_resources_pb.Role | undefined;
  setRole(value?: proto_clarifai_api_resources_pb.Role): SingleRoleResponse;
  hasRole(): boolean;
  clearRole(): SingleRoleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleRoleResponse): SingleRoleResponse.AsObject;
  static serializeBinaryToWriter(message: SingleRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleRoleResponse;
  static deserializeBinaryFromReader(message: SingleRoleResponse, reader: jspb.BinaryReader): SingleRoleResponse;
}

export namespace SingleRoleResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    role?: proto_clarifai_api_resources_pb.Role.AsObject,
  }
}

export class MultiRoleResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiRoleResponse;
  hasStatus(): boolean;
  clearStatus(): MultiRoleResponse;

  getRolesList(): Array<proto_clarifai_api_resources_pb.Role>;
  setRolesList(value: Array<proto_clarifai_api_resources_pb.Role>): MultiRoleResponse;
  clearRolesList(): MultiRoleResponse;
  addRoles(value?: proto_clarifai_api_resources_pb.Role, index?: number): proto_clarifai_api_resources_pb.Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiRoleResponse): MultiRoleResponse.AsObject;
  static serializeBinaryToWriter(message: MultiRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiRoleResponse;
  static deserializeBinaryFromReader(message: MultiRoleResponse, reader: jspb.BinaryReader): MultiRoleResponse;
}

export namespace MultiRoleResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    rolesList: Array<proto_clarifai_api_resources_pb.Role.AsObject>,
  }
}

export class GetVocabRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetVocabRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetVocabRequest;

  getVocabId(): string;
  setVocabId(value: string): GetVocabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVocabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVocabRequest): GetVocabRequest.AsObject;
  static serializeBinaryToWriter(message: GetVocabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVocabRequest;
  static deserializeBinaryFromReader(message: GetVocabRequest, reader: jspb.BinaryReader): GetVocabRequest;
}

export namespace GetVocabRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    vocabId: string,
  }
}

export class ListVocabsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListVocabsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListVocabsRequest;

  getPage(): number;
  setPage(value: number): ListVocabsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListVocabsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVocabsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVocabsRequest): ListVocabsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVocabsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVocabsRequest;
  static deserializeBinaryFromReader(message: ListVocabsRequest, reader: jspb.BinaryReader): ListVocabsRequest;
}

export namespace ListVocabsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class PostVocabsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostVocabsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostVocabsRequest;

  getVocabsList(): Array<proto_clarifai_api_resources_pb.Vocab>;
  setVocabsList(value: Array<proto_clarifai_api_resources_pb.Vocab>): PostVocabsRequest;
  clearVocabsList(): PostVocabsRequest;
  addVocabs(value?: proto_clarifai_api_resources_pb.Vocab, index?: number): proto_clarifai_api_resources_pb.Vocab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostVocabsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostVocabsRequest): PostVocabsRequest.AsObject;
  static serializeBinaryToWriter(message: PostVocabsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostVocabsRequest;
  static deserializeBinaryFromReader(message: PostVocabsRequest, reader: jspb.BinaryReader): PostVocabsRequest;
}

export namespace PostVocabsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    vocabsList: Array<proto_clarifai_api_resources_pb.Vocab.AsObject>,
  }
}

export class PatchVocabsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchVocabsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchVocabsRequest;

  getVocabsList(): Array<proto_clarifai_api_resources_pb.Vocab>;
  setVocabsList(value: Array<proto_clarifai_api_resources_pb.Vocab>): PatchVocabsRequest;
  clearVocabsList(): PatchVocabsRequest;
  addVocabs(value?: proto_clarifai_api_resources_pb.Vocab, index?: number): proto_clarifai_api_resources_pb.Vocab;

  getAction(): string;
  setAction(value: string): PatchVocabsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchVocabsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchVocabsRequest): PatchVocabsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchVocabsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchVocabsRequest;
  static deserializeBinaryFromReader(message: PatchVocabsRequest, reader: jspb.BinaryReader): PatchVocabsRequest;
}

export namespace PatchVocabsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    vocabsList: Array<proto_clarifai_api_resources_pb.Vocab.AsObject>,
    action: string,
  }
}

export class DeleteVocabRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteVocabRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteVocabRequest;

  getVocabId(): string;
  setVocabId(value: string): DeleteVocabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVocabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVocabRequest): DeleteVocabRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVocabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVocabRequest;
  static deserializeBinaryFromReader(message: DeleteVocabRequest, reader: jspb.BinaryReader): DeleteVocabRequest;
}

export namespace DeleteVocabRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    vocabId: string,
  }
}

export class DeleteVocabsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteVocabsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteVocabsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteVocabsRequest;
  clearIdsList(): DeleteVocabsRequest;
  addIds(value: string, index?: number): DeleteVocabsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): DeleteVocabsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVocabsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVocabsRequest): DeleteVocabsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVocabsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVocabsRequest;
  static deserializeBinaryFromReader(message: DeleteVocabsRequest, reader: jspb.BinaryReader): DeleteVocabsRequest;
}

export namespace DeleteVocabsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
    deleteAll: boolean,
  }
}

export class ListVocabConceptsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListVocabConceptsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListVocabConceptsRequest;

  getVocabId(): string;
  setVocabId(value: string): ListVocabConceptsRequest;

  getPage(): number;
  setPage(value: number): ListVocabConceptsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListVocabConceptsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVocabConceptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVocabConceptsRequest): ListVocabConceptsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVocabConceptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVocabConceptsRequest;
  static deserializeBinaryFromReader(message: ListVocabConceptsRequest, reader: jspb.BinaryReader): ListVocabConceptsRequest;
}

export namespace ListVocabConceptsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    vocabId: string,
    page: number,
    perPage: number,
  }
}

export class PostVocabConceptsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostVocabConceptsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostVocabConceptsRequest;

  getVocabId(): string;
  setVocabId(value: string): PostVocabConceptsRequest;

  getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
  setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): PostVocabConceptsRequest;
  clearConceptsList(): PostVocabConceptsRequest;
  addConcepts(value?: proto_clarifai_api_resources_pb.Concept, index?: number): proto_clarifai_api_resources_pb.Concept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostVocabConceptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostVocabConceptsRequest): PostVocabConceptsRequest.AsObject;
  static serializeBinaryToWriter(message: PostVocabConceptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostVocabConceptsRequest;
  static deserializeBinaryFromReader(message: PostVocabConceptsRequest, reader: jspb.BinaryReader): PostVocabConceptsRequest;
}

export namespace PostVocabConceptsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    vocabId: string,
    conceptsList: Array<proto_clarifai_api_resources_pb.Concept.AsObject>,
  }
}

export class DeleteVocabConceptRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteVocabConceptRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteVocabConceptRequest;

  getVocabId(): string;
  setVocabId(value: string): DeleteVocabConceptRequest;

  getConceptId(): string;
  setConceptId(value: string): DeleteVocabConceptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVocabConceptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVocabConceptRequest): DeleteVocabConceptRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVocabConceptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVocabConceptRequest;
  static deserializeBinaryFromReader(message: DeleteVocabConceptRequest, reader: jspb.BinaryReader): DeleteVocabConceptRequest;
}

export namespace DeleteVocabConceptRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    vocabId: string,
    conceptId: string,
  }
}

export class DeleteVocabConceptsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteVocabConceptsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteVocabConceptsRequest;

  getVocabId(): string;
  setVocabId(value: string): DeleteVocabConceptsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteVocabConceptsRequest;
  clearIdsList(): DeleteVocabConceptsRequest;
  addIds(value: string, index?: number): DeleteVocabConceptsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): DeleteVocabConceptsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVocabConceptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVocabConceptsRequest): DeleteVocabConceptsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVocabConceptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVocabConceptsRequest;
  static deserializeBinaryFromReader(message: DeleteVocabConceptsRequest, reader: jspb.BinaryReader): DeleteVocabConceptsRequest;
}

export namespace DeleteVocabConceptsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    vocabId: string,
    idsList: Array<string>,
    deleteAll: boolean,
  }
}

export class SingleVocabResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleVocabResponse;
  hasStatus(): boolean;
  clearStatus(): SingleVocabResponse;

  getVocab(): proto_clarifai_api_resources_pb.Vocab | undefined;
  setVocab(value?: proto_clarifai_api_resources_pb.Vocab): SingleVocabResponse;
  hasVocab(): boolean;
  clearVocab(): SingleVocabResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleVocabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleVocabResponse): SingleVocabResponse.AsObject;
  static serializeBinaryToWriter(message: SingleVocabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleVocabResponse;
  static deserializeBinaryFromReader(message: SingleVocabResponse, reader: jspb.BinaryReader): SingleVocabResponse;
}

export namespace SingleVocabResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    vocab?: proto_clarifai_api_resources_pb.Vocab.AsObject,
  }
}

export class MultiVocabResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiVocabResponse;
  hasStatus(): boolean;
  clearStatus(): MultiVocabResponse;

  getVocabsList(): Array<proto_clarifai_api_resources_pb.Vocab>;
  setVocabsList(value: Array<proto_clarifai_api_resources_pb.Vocab>): MultiVocabResponse;
  clearVocabsList(): MultiVocabResponse;
  addVocabs(value?: proto_clarifai_api_resources_pb.Vocab, index?: number): proto_clarifai_api_resources_pb.Vocab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiVocabResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiVocabResponse): MultiVocabResponse.AsObject;
  static serializeBinaryToWriter(message: MultiVocabResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiVocabResponse;
  static deserializeBinaryFromReader(message: MultiVocabResponse, reader: jspb.BinaryReader): MultiVocabResponse;
}

export namespace MultiVocabResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    vocabsList: Array<proto_clarifai_api_resources_pb.Vocab.AsObject>,
  }
}

export class GetWorkflowRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetWorkflowRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetWorkflowRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): GetWorkflowRequest;

  getFavorClarifaiWorkflows(): boolean;
  setFavorClarifaiWorkflows(value: boolean): GetWorkflowRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): GetWorkflowRequest;
  clearAdditionalFieldsList(): GetWorkflowRequest;
  addAdditionalFields(value: string, index?: number): GetWorkflowRequest;

  getExcludeClarifaiWorkflows(): boolean;
  setExcludeClarifaiWorkflows(value: boolean): GetWorkflowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowRequest): GetWorkflowRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkflowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowRequest;
  static deserializeBinaryFromReader(message: GetWorkflowRequest, reader: jspb.BinaryReader): GetWorkflowRequest;
}

export namespace GetWorkflowRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    favorClarifaiWorkflows: boolean,
    additionalFieldsList: Array<string>,
    excludeClarifaiWorkflows: boolean,
  }
}

export class ListWorkflowsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListWorkflowsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListWorkflowsRequest;

  getPage(): number;
  setPage(value: number): ListWorkflowsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListWorkflowsRequest;

  getSortAscending(): boolean;
  setSortAscending(value: boolean): ListWorkflowsRequest;

  getSortById(): boolean;
  setSortById(value: boolean): ListWorkflowsRequest;

  getSortByModifiedAt(): boolean;
  setSortByModifiedAt(value: boolean): ListWorkflowsRequest;

  getQuery(): string;
  setQuery(value: string): ListWorkflowsRequest;

  getId(): string;
  setId(value: string): ListWorkflowsRequest;

  getFeaturedOnly(): boolean;
  setFeaturedOnly(value: boolean): ListWorkflowsRequest;

  getStarredOnly(): boolean;
  setStarredOnly(value: boolean): ListWorkflowsRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): ListWorkflowsRequest;
  clearAdditionalFieldsList(): ListWorkflowsRequest;
  addAdditionalFields(value: string, index?: number): ListWorkflowsRequest;

  getSearchTerm(): string;
  setSearchTerm(value: string): ListWorkflowsRequest;

  getSortByCase(): ListWorkflowsRequest.SortByCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowsRequest): ListWorkflowsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkflowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowsRequest;
  static deserializeBinaryFromReader(message: ListWorkflowsRequest, reader: jspb.BinaryReader): ListWorkflowsRequest;
}

export namespace ListWorkflowsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
    sortAscending: boolean,
    sortById: boolean,
    sortByModifiedAt: boolean,
    query: string,
    id: string,
    featuredOnly: boolean,
    starredOnly: boolean,
    additionalFieldsList: Array<string>,
    searchTerm: string,
  }

  export enum SortByCase { 
    SORT_BY_NOT_SET = 0,
    SORT_BY_ID = 6,
    SORT_BY_MODIFIED_AT = 7,
  }
}

export class ListPublicWorkflowsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListPublicWorkflowsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListPublicWorkflowsRequest;

  getOnlyBase(): boolean;
  setOnlyBase(value: boolean): ListPublicWorkflowsRequest;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListPublicWorkflowsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListPublicWorkflowsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicWorkflowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicWorkflowsRequest): ListPublicWorkflowsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPublicWorkflowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicWorkflowsRequest;
  static deserializeBinaryFromReader(message: ListPublicWorkflowsRequest, reader: jspb.BinaryReader): ListPublicWorkflowsRequest;
}

export namespace ListPublicWorkflowsRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    onlyBase: boolean,
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
  }
}

export class PostWorkflowsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostWorkflowsRequest;

  getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
  setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): PostWorkflowsRequest;
  clearWorkflowsList(): PostWorkflowsRequest;
  addWorkflows(value?: proto_clarifai_api_resources_pb.Workflow, index?: number): proto_clarifai_api_resources_pb.Workflow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowsRequest): PostWorkflowsRequest.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowsRequest;
  static deserializeBinaryFromReader(message: PostWorkflowsRequest, reader: jspb.BinaryReader): PostWorkflowsRequest;
}

export namespace PostWorkflowsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowsList: Array<proto_clarifai_api_resources_pb.Workflow.AsObject>,
  }
}

export class PatchWorkflowsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchWorkflowsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchWorkflowsRequest;

  getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
  setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): PatchWorkflowsRequest;
  clearWorkflowsList(): PatchWorkflowsRequest;
  addWorkflows(value?: proto_clarifai_api_resources_pb.Workflow, index?: number): proto_clarifai_api_resources_pb.Workflow;

  getAction(): string;
  setAction(value: string): PatchWorkflowsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchWorkflowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchWorkflowsRequest): PatchWorkflowsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchWorkflowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchWorkflowsRequest;
  static deserializeBinaryFromReader(message: PatchWorkflowsRequest, reader: jspb.BinaryReader): PatchWorkflowsRequest;
}

export namespace PatchWorkflowsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowsList: Array<proto_clarifai_api_resources_pb.Workflow.AsObject>,
    action: string,
  }
}

export class PatchWorkflowIdsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchWorkflowIdsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchWorkflowIdsRequest;

  getIdsList(): Array<IdUpdateSource>;
  setIdsList(value: Array<IdUpdateSource>): PatchWorkflowIdsRequest;
  clearIdsList(): PatchWorkflowIdsRequest;
  addIds(value?: IdUpdateSource, index?: number): IdUpdateSource;

  getAction(): string;
  setAction(value: string): PatchWorkflowIdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchWorkflowIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchWorkflowIdsRequest): PatchWorkflowIdsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchWorkflowIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchWorkflowIdsRequest;
  static deserializeBinaryFromReader(message: PatchWorkflowIdsRequest, reader: jspb.BinaryReader): PatchWorkflowIdsRequest;
}

export namespace PatchWorkflowIdsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<IdUpdateSource.AsObject>,
    action: string,
  }
}

export class DeleteWorkflowRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWorkflowRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteWorkflowRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): DeleteWorkflowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowRequest): DeleteWorkflowRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkflowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowRequest, reader: jspb.BinaryReader): DeleteWorkflowRequest;
}

export namespace DeleteWorkflowRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
  }
}

export class DeleteWorkflowsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWorkflowsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteWorkflowsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteWorkflowsRequest;
  clearIdsList(): DeleteWorkflowsRequest;
  addIds(value: string, index?: number): DeleteWorkflowsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): DeleteWorkflowsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowsRequest): DeleteWorkflowsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkflowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowsRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowsRequest, reader: jspb.BinaryReader): DeleteWorkflowsRequest;
}

export namespace DeleteWorkflowsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
    deleteAll: boolean,
  }
}

export class SingleWorkflowResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleWorkflowResponse;
  hasStatus(): boolean;
  clearStatus(): SingleWorkflowResponse;

  getWorkflow(): proto_clarifai_api_resources_pb.Workflow | undefined;
  setWorkflow(value?: proto_clarifai_api_resources_pb.Workflow): SingleWorkflowResponse;
  hasWorkflow(): boolean;
  clearWorkflow(): SingleWorkflowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleWorkflowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleWorkflowResponse): SingleWorkflowResponse.AsObject;
  static serializeBinaryToWriter(message: SingleWorkflowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleWorkflowResponse;
  static deserializeBinaryFromReader(message: SingleWorkflowResponse, reader: jspb.BinaryReader): SingleWorkflowResponse;
}

export namespace SingleWorkflowResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflow?: proto_clarifai_api_resources_pb.Workflow.AsObject,
  }
}

export class MultiWorkflowResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWorkflowResponse;
  hasStatus(): boolean;
  clearStatus(): MultiWorkflowResponse;

  getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
  setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): MultiWorkflowResponse;
  clearWorkflowsList(): MultiWorkflowResponse;
  addWorkflows(value?: proto_clarifai_api_resources_pb.Workflow, index?: number): proto_clarifai_api_resources_pb.Workflow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiWorkflowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiWorkflowResponse): MultiWorkflowResponse.AsObject;
  static serializeBinaryToWriter(message: MultiWorkflowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiWorkflowResponse;
  static deserializeBinaryFromReader(message: MultiWorkflowResponse, reader: jspb.BinaryReader): MultiWorkflowResponse;
}

export namespace MultiWorkflowResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflowsList: Array<proto_clarifai_api_resources_pb.Workflow.AsObject>,
  }
}

export class PostWorkflowResultsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowResultsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostWorkflowResultsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): PostWorkflowResultsRequest;

  getVersionId(): string;
  setVersionId(value: string): PostWorkflowResultsRequest;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostWorkflowResultsRequest;
  clearInputsList(): PostWorkflowResultsRequest;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getOutputConfig(): proto_clarifai_api_resources_pb.OutputConfig | undefined;
  setOutputConfig(value?: proto_clarifai_api_resources_pb.OutputConfig): PostWorkflowResultsRequest;
  hasOutputConfig(): boolean;
  clearOutputConfig(): PostWorkflowResultsRequest;

  getFavorClarifaiWorkflows(): boolean;
  setFavorClarifaiWorkflows(value: boolean): PostWorkflowResultsRequest;

  getWorkflowState(): proto_clarifai_api_resources_pb.WorkflowState | undefined;
  setWorkflowState(value?: proto_clarifai_api_resources_pb.WorkflowState): PostWorkflowResultsRequest;
  hasWorkflowState(): boolean;
  clearWorkflowState(): PostWorkflowResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowResultsRequest): PostWorkflowResultsRequest.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowResultsRequest;
  static deserializeBinaryFromReader(message: PostWorkflowResultsRequest, reader: jspb.BinaryReader): PostWorkflowResultsRequest;
}

export namespace PostWorkflowResultsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    versionId: string,
    inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
    outputConfig?: proto_clarifai_api_resources_pb.OutputConfig.AsObject,
    favorClarifaiWorkflows: boolean,
    workflowState?: proto_clarifai_api_resources_pb.WorkflowState.AsObject,
  }
}

export class PostWorkflowResultsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostWorkflowResultsResponse;
  hasStatus(): boolean;
  clearStatus(): PostWorkflowResultsResponse;

  getWorkflow(): proto_clarifai_api_resources_pb.Workflow | undefined;
  setWorkflow(value?: proto_clarifai_api_resources_pb.Workflow): PostWorkflowResultsResponse;
  hasWorkflow(): boolean;
  clearWorkflow(): PostWorkflowResultsResponse;

  getResultsList(): Array<proto_clarifai_api_resources_pb.WorkflowResult>;
  setResultsList(value: Array<proto_clarifai_api_resources_pb.WorkflowResult>): PostWorkflowResultsResponse;
  clearResultsList(): PostWorkflowResultsResponse;
  addResults(value?: proto_clarifai_api_resources_pb.WorkflowResult, index?: number): proto_clarifai_api_resources_pb.WorkflowResult;

  getWorkflowState(): proto_clarifai_api_resources_pb.WorkflowState | undefined;
  setWorkflowState(value?: proto_clarifai_api_resources_pb.WorkflowState): PostWorkflowResultsResponse;
  hasWorkflowState(): boolean;
  clearWorkflowState(): PostWorkflowResultsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowResultsResponse): PostWorkflowResultsResponse.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowResultsResponse;
  static deserializeBinaryFromReader(message: PostWorkflowResultsResponse, reader: jspb.BinaryReader): PostWorkflowResultsResponse;
}

export namespace PostWorkflowResultsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflow?: proto_clarifai_api_resources_pb.Workflow.AsObject,
    resultsList: Array<proto_clarifai_api_resources_pb.WorkflowResult.AsObject>,
    workflowState?: proto_clarifai_api_resources_pb.WorkflowState.AsObject,
  }
}

export class PostWorkflowResultsSimilarityRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowResultsSimilarityRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostWorkflowResultsSimilarityRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): PostWorkflowResultsSimilarityRequest;

  getVersionId(): string;
  setVersionId(value: string): PostWorkflowResultsSimilarityRequest;

  getModelVersionId(): string;
  setModelVersionId(value: string): PostWorkflowResultsSimilarityRequest;

  getProbeInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setProbeInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostWorkflowResultsSimilarityRequest;
  clearProbeInputsList(): PostWorkflowResultsSimilarityRequest;
  addProbeInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getPoolInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setPoolInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostWorkflowResultsSimilarityRequest;
  clearPoolInputsList(): PostWorkflowResultsSimilarityRequest;
  addPoolInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getFavorClarifaiWorkflows(): boolean;
  setFavorClarifaiWorkflows(value: boolean): PostWorkflowResultsSimilarityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowResultsSimilarityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowResultsSimilarityRequest): PostWorkflowResultsSimilarityRequest.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowResultsSimilarityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowResultsSimilarityRequest;
  static deserializeBinaryFromReader(message: PostWorkflowResultsSimilarityRequest, reader: jspb.BinaryReader): PostWorkflowResultsSimilarityRequest;
}

export namespace PostWorkflowResultsSimilarityRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    versionId: string,
    modelVersionId: string,
    probeInputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
    poolInputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
    favorClarifaiWorkflows: boolean,
  }
}

export class PostWorkflowResultsSimilarityResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostWorkflowResultsSimilarityResponse;
  hasStatus(): boolean;
  clearStatus(): PostWorkflowResultsSimilarityResponse;

  getResultsList(): Array<proto_clarifai_api_resources_pb.WorkflowResultsSimilarity>;
  setResultsList(value: Array<proto_clarifai_api_resources_pb.WorkflowResultsSimilarity>): PostWorkflowResultsSimilarityResponse;
  clearResultsList(): PostWorkflowResultsSimilarityResponse;
  addResults(value?: proto_clarifai_api_resources_pb.WorkflowResultsSimilarity, index?: number): proto_clarifai_api_resources_pb.WorkflowResultsSimilarity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowResultsSimilarityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowResultsSimilarityResponse): PostWorkflowResultsSimilarityResponse.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowResultsSimilarityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowResultsSimilarityResponse;
  static deserializeBinaryFromReader(message: PostWorkflowResultsSimilarityResponse, reader: jspb.BinaryReader): PostWorkflowResultsSimilarityResponse;
}

export namespace PostWorkflowResultsSimilarityResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    resultsList: Array<proto_clarifai_api_resources_pb.WorkflowResultsSimilarity.AsObject>,
  }
}

export class ListWorkflowVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListWorkflowVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListWorkflowVersionsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): ListWorkflowVersionsRequest;

  getPage(): number;
  setPage(value: number): ListWorkflowVersionsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListWorkflowVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowVersionsRequest): ListWorkflowVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkflowVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowVersionsRequest;
  static deserializeBinaryFromReader(message: ListWorkflowVersionsRequest, reader: jspb.BinaryReader): ListWorkflowVersionsRequest;
}

export namespace ListWorkflowVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    page: number,
    perPage: number,
  }
}

export class GetWorkflowVersionRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetWorkflowVersionRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetWorkflowVersionRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): GetWorkflowVersionRequest;

  getWorkflowVersionId(): string;
  setWorkflowVersionId(value: string): GetWorkflowVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowVersionRequest): GetWorkflowVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkflowVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowVersionRequest;
  static deserializeBinaryFromReader(message: GetWorkflowVersionRequest, reader: jspb.BinaryReader): GetWorkflowVersionRequest;
}

export namespace GetWorkflowVersionRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    workflowVersionId: string,
  }
}

export class DeleteWorkflowVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWorkflowVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteWorkflowVersionsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): DeleteWorkflowVersionsRequest;

  getWorkflowVersionIdsList(): Array<string>;
  setWorkflowVersionIdsList(value: Array<string>): DeleteWorkflowVersionsRequest;
  clearWorkflowVersionIdsList(): DeleteWorkflowVersionsRequest;
  addWorkflowVersionIds(value: string, index?: number): DeleteWorkflowVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowVersionsRequest): DeleteWorkflowVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkflowVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowVersionsRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowVersionsRequest, reader: jspb.BinaryReader): DeleteWorkflowVersionsRequest;
}

export namespace DeleteWorkflowVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    workflowVersionIdsList: Array<string>,
  }
}

export class PatchWorkflowVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchWorkflowVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchWorkflowVersionsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): PatchWorkflowVersionsRequest;

  getWorkflowVersionsList(): Array<proto_clarifai_api_resources_pb.WorkflowVersion>;
  setWorkflowVersionsList(value: Array<proto_clarifai_api_resources_pb.WorkflowVersion>): PatchWorkflowVersionsRequest;
  clearWorkflowVersionsList(): PatchWorkflowVersionsRequest;
  addWorkflowVersions(value?: proto_clarifai_api_resources_pb.WorkflowVersion, index?: number): proto_clarifai_api_resources_pb.WorkflowVersion;

  getAction(): string;
  setAction(value: string): PatchWorkflowVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchWorkflowVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchWorkflowVersionsRequest): PatchWorkflowVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchWorkflowVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchWorkflowVersionsRequest;
  static deserializeBinaryFromReader(message: PatchWorkflowVersionsRequest, reader: jspb.BinaryReader): PatchWorkflowVersionsRequest;
}

export namespace PatchWorkflowVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    workflowVersionsList: Array<proto_clarifai_api_resources_pb.WorkflowVersion.AsObject>,
    action: string,
  }
}

export class MultiWorkflowVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWorkflowVersionResponse;
  hasStatus(): boolean;
  clearStatus(): MultiWorkflowVersionResponse;

  getWorkflowVersionsList(): Array<proto_clarifai_api_resources_pb.WorkflowVersion>;
  setWorkflowVersionsList(value: Array<proto_clarifai_api_resources_pb.WorkflowVersion>): MultiWorkflowVersionResponse;
  clearWorkflowVersionsList(): MultiWorkflowVersionResponse;
  addWorkflowVersions(value?: proto_clarifai_api_resources_pb.WorkflowVersion, index?: number): proto_clarifai_api_resources_pb.WorkflowVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiWorkflowVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiWorkflowVersionResponse): MultiWorkflowVersionResponse.AsObject;
  static serializeBinaryToWriter(message: MultiWorkflowVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiWorkflowVersionResponse;
  static deserializeBinaryFromReader(message: MultiWorkflowVersionResponse, reader: jspb.BinaryReader): MultiWorkflowVersionResponse;
}

export namespace MultiWorkflowVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflowVersionsList: Array<proto_clarifai_api_resources_pb.WorkflowVersion.AsObject>,
  }
}

export class SingleWorkflowVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleWorkflowVersionResponse;
  hasStatus(): boolean;
  clearStatus(): SingleWorkflowVersionResponse;

  getWorkflowVersion(): proto_clarifai_api_resources_pb.WorkflowVersion | undefined;
  setWorkflowVersion(value?: proto_clarifai_api_resources_pb.WorkflowVersion): SingleWorkflowVersionResponse;
  hasWorkflowVersion(): boolean;
  clearWorkflowVersion(): SingleWorkflowVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleWorkflowVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleWorkflowVersionResponse): SingleWorkflowVersionResponse.AsObject;
  static serializeBinaryToWriter(message: SingleWorkflowVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleWorkflowVersionResponse;
  static deserializeBinaryFromReader(message: SingleWorkflowVersionResponse, reader: jspb.BinaryReader): SingleWorkflowVersionResponse;
}

export namespace SingleWorkflowVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflowVersion?: proto_clarifai_api_resources_pb.WorkflowVersion.AsObject,
  }
}

export class PostWorkflowMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostWorkflowMetricsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): PostWorkflowMetricsRequest;

  getWorkflowMetricsList(): Array<proto_clarifai_api_resources_pb.WorkflowMetrics>;
  setWorkflowMetricsList(value: Array<proto_clarifai_api_resources_pb.WorkflowMetrics>): PostWorkflowMetricsRequest;
  clearWorkflowMetricsList(): PostWorkflowMetricsRequest;
  addWorkflowMetrics(value?: proto_clarifai_api_resources_pb.WorkflowMetrics, index?: number): proto_clarifai_api_resources_pb.WorkflowMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowMetricsRequest): PostWorkflowMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowMetricsRequest;
  static deserializeBinaryFromReader(message: PostWorkflowMetricsRequest, reader: jspb.BinaryReader): PostWorkflowMetricsRequest;
}

export namespace PostWorkflowMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    workflowMetricsList: Array<proto_clarifai_api_resources_pb.WorkflowMetrics.AsObject>,
  }
}

export class GetWorkflowMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetWorkflowMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetWorkflowMetricsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): GetWorkflowMetricsRequest;

  getMetricsId(): string;
  setMetricsId(value: string): GetWorkflowMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowMetricsRequest): GetWorkflowMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkflowMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowMetricsRequest;
  static deserializeBinaryFromReader(message: GetWorkflowMetricsRequest, reader: jspb.BinaryReader): GetWorkflowMetricsRequest;
}

export namespace GetWorkflowMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    metricsId: string,
  }
}

export class GetWorkflowNodeMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetWorkflowNodeMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetWorkflowNodeMetricsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): GetWorkflowNodeMetricsRequest;

  getMetricsId(): string;
  setMetricsId(value: string): GetWorkflowNodeMetricsRequest;

  getNodeId(): string;
  setNodeId(value: string): GetWorkflowNodeMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowNodeMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowNodeMetricsRequest): GetWorkflowNodeMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkflowNodeMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowNodeMetricsRequest;
  static deserializeBinaryFromReader(message: GetWorkflowNodeMetricsRequest, reader: jspb.BinaryReader): GetWorkflowNodeMetricsRequest;
}

export namespace GetWorkflowNodeMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    metricsId: string,
    nodeId: string,
  }
}

export class ListWorkflowMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListWorkflowMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListWorkflowMetricsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): ListWorkflowMetricsRequest;

  getPage(): number;
  setPage(value: number): ListWorkflowMetricsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListWorkflowMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowMetricsRequest): ListWorkflowMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkflowMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowMetricsRequest;
  static deserializeBinaryFromReader(message: ListWorkflowMetricsRequest, reader: jspb.BinaryReader): ListWorkflowMetricsRequest;
}

export namespace ListWorkflowMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    page: number,
    perPage: number,
  }
}

export class DeleteWorkflowMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWorkflowMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteWorkflowMetricsRequest;

  getWorkflowId(): string;
  setWorkflowId(value: string): DeleteWorkflowMetricsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteWorkflowMetricsRequest;
  clearIdsList(): DeleteWorkflowMetricsRequest;
  addIds(value: string, index?: number): DeleteWorkflowMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowMetricsRequest): DeleteWorkflowMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkflowMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowMetricsRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowMetricsRequest, reader: jspb.BinaryReader): DeleteWorkflowMetricsRequest;
}

export namespace DeleteWorkflowMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowId: string,
    idsList: Array<string>,
  }
}

export class SingleWorkflowMetricsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleWorkflowMetricsResponse;
  hasStatus(): boolean;
  clearStatus(): SingleWorkflowMetricsResponse;

  getWorkflowMetrics(): proto_clarifai_api_resources_pb.WorkflowMetrics | undefined;
  setWorkflowMetrics(value?: proto_clarifai_api_resources_pb.WorkflowMetrics): SingleWorkflowMetricsResponse;
  hasWorkflowMetrics(): boolean;
  clearWorkflowMetrics(): SingleWorkflowMetricsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleWorkflowMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleWorkflowMetricsResponse): SingleWorkflowMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: SingleWorkflowMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleWorkflowMetricsResponse;
  static deserializeBinaryFromReader(message: SingleWorkflowMetricsResponse, reader: jspb.BinaryReader): SingleWorkflowMetricsResponse;
}

export namespace SingleWorkflowMetricsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflowMetrics?: proto_clarifai_api_resources_pb.WorkflowMetrics.AsObject,
  }
}

export class SingleWorkflowNodeMetricsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleWorkflowNodeMetricsResponse;
  hasStatus(): boolean;
  clearStatus(): SingleWorkflowNodeMetricsResponse;

  getNodeMetrics(): proto_clarifai_api_resources_pb.EvalMetrics | undefined;
  setNodeMetrics(value?: proto_clarifai_api_resources_pb.EvalMetrics): SingleWorkflowNodeMetricsResponse;
  hasNodeMetrics(): boolean;
  clearNodeMetrics(): SingleWorkflowNodeMetricsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleWorkflowNodeMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleWorkflowNodeMetricsResponse): SingleWorkflowNodeMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: SingleWorkflowNodeMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleWorkflowNodeMetricsResponse;
  static deserializeBinaryFromReader(message: SingleWorkflowNodeMetricsResponse, reader: jspb.BinaryReader): SingleWorkflowNodeMetricsResponse;
}

export namespace SingleWorkflowNodeMetricsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    nodeMetrics?: proto_clarifai_api_resources_pb.EvalMetrics.AsObject,
  }
}

export class MultiWorkflowMetricsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWorkflowMetricsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiWorkflowMetricsResponse;

  getWorkflowMetricsList(): Array<proto_clarifai_api_resources_pb.WorkflowMetrics>;
  setWorkflowMetricsList(value: Array<proto_clarifai_api_resources_pb.WorkflowMetrics>): MultiWorkflowMetricsResponse;
  clearWorkflowMetricsList(): MultiWorkflowMetricsResponse;
  addWorkflowMetrics(value?: proto_clarifai_api_resources_pb.WorkflowMetrics, index?: number): proto_clarifai_api_resources_pb.WorkflowMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiWorkflowMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiWorkflowMetricsResponse): MultiWorkflowMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiWorkflowMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiWorkflowMetricsResponse;
  static deserializeBinaryFromReader(message: MultiWorkflowMetricsResponse, reader: jspb.BinaryReader): MultiWorkflowMetricsResponse;
}

export namespace MultiWorkflowMetricsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflowMetricsList: Array<proto_clarifai_api_resources_pb.WorkflowMetrics.AsObject>,
  }
}

export class PostAppDuplicationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAppDuplicationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAppDuplicationsRequest;

  getAppDuplicationsList(): Array<proto_clarifai_api_resources_pb.AppDuplication>;
  setAppDuplicationsList(value: Array<proto_clarifai_api_resources_pb.AppDuplication>): PostAppDuplicationsRequest;
  clearAppDuplicationsList(): PostAppDuplicationsRequest;
  addAppDuplications(value?: proto_clarifai_api_resources_pb.AppDuplication, index?: number): proto_clarifai_api_resources_pb.AppDuplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAppDuplicationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAppDuplicationsRequest): PostAppDuplicationsRequest.AsObject;
  static serializeBinaryToWriter(message: PostAppDuplicationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAppDuplicationsRequest;
  static deserializeBinaryFromReader(message: PostAppDuplicationsRequest, reader: jspb.BinaryReader): PostAppDuplicationsRequest;
}

export namespace PostAppDuplicationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    appDuplicationsList: Array<proto_clarifai_api_resources_pb.AppDuplication.AsObject>,
  }
}

export class GetAppDuplicationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAppDuplicationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetAppDuplicationRequest;

  getAppDuplicationId(): string;
  setAppDuplicationId(value: string): GetAppDuplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppDuplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppDuplicationRequest): GetAppDuplicationRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppDuplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppDuplicationRequest;
  static deserializeBinaryFromReader(message: GetAppDuplicationRequest, reader: jspb.BinaryReader): GetAppDuplicationRequest;
}

export namespace GetAppDuplicationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    appDuplicationId: string,
  }
}

export class ListAppDuplicationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAppDuplicationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListAppDuplicationsRequest;

  getPage(): number;
  setPage(value: number): ListAppDuplicationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListAppDuplicationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppDuplicationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppDuplicationsRequest): ListAppDuplicationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAppDuplicationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppDuplicationsRequest;
  static deserializeBinaryFromReader(message: ListAppDuplicationsRequest, reader: jspb.BinaryReader): ListAppDuplicationsRequest;
}

export namespace ListAppDuplicationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class MultiAppDuplicationsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAppDuplicationsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiAppDuplicationsResponse;

  getAppDuplicationsList(): Array<proto_clarifai_api_resources_pb.AppDuplication>;
  setAppDuplicationsList(value: Array<proto_clarifai_api_resources_pb.AppDuplication>): MultiAppDuplicationsResponse;
  clearAppDuplicationsList(): MultiAppDuplicationsResponse;
  addAppDuplications(value?: proto_clarifai_api_resources_pb.AppDuplication, index?: number): proto_clarifai_api_resources_pb.AppDuplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAppDuplicationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAppDuplicationsResponse): MultiAppDuplicationsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiAppDuplicationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAppDuplicationsResponse;
  static deserializeBinaryFromReader(message: MultiAppDuplicationsResponse, reader: jspb.BinaryReader): MultiAppDuplicationsResponse;
}

export namespace MultiAppDuplicationsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    appDuplicationsList: Array<proto_clarifai_api_resources_pb.AppDuplication.AsObject>,
  }
}

export class SingleAppDuplicationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleAppDuplicationResponse;
  hasStatus(): boolean;
  clearStatus(): SingleAppDuplicationResponse;

  getAppDuplication(): proto_clarifai_api_resources_pb.AppDuplication | undefined;
  setAppDuplication(value?: proto_clarifai_api_resources_pb.AppDuplication): SingleAppDuplicationResponse;
  hasAppDuplication(): boolean;
  clearAppDuplication(): SingleAppDuplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleAppDuplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleAppDuplicationResponse): SingleAppDuplicationResponse.AsObject;
  static serializeBinaryToWriter(message: SingleAppDuplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleAppDuplicationResponse;
  static deserializeBinaryFromReader(message: SingleAppDuplicationResponse, reader: jspb.BinaryReader): SingleAppDuplicationResponse;
}

export namespace SingleAppDuplicationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    appDuplication?: proto_clarifai_api_resources_pb.AppDuplication.AsObject,
  }
}

export class PostTasksRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostTasksRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostTasksRequest;

  getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
  setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): PostTasksRequest;
  clearTasksList(): PostTasksRequest;
  addTasks(value?: proto_clarifai_api_resources_pb.Task, index?: number): proto_clarifai_api_resources_pb.Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostTasksRequest): PostTasksRequest.AsObject;
  static serializeBinaryToWriter(message: PostTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTasksRequest;
  static deserializeBinaryFromReader(message: PostTasksRequest, reader: jspb.BinaryReader): PostTasksRequest;
}

export namespace PostTasksRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    tasksList: Array<proto_clarifai_api_resources_pb.Task.AsObject>,
  }
}

export class GetTaskRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetTaskRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetTaskRequest;

  getTaskId(): string;
  setTaskId(value: string): GetTaskRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): GetTaskRequest;
  clearAdditionalFieldsList(): GetTaskRequest;
  addAdditionalFields(value: string, index?: number): GetTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
  static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    taskId: string,
    additionalFieldsList: Array<string>,
  }
}

export class ListTasksRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListTasksRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListTasksRequest;

  getPage(): number;
  setPage(value: number): ListTasksRequest;

  getPerPage(): number;
  setPerPage(value: number): ListTasksRequest;

  getWorkerUserIdsList(): Array<string>;
  setWorkerUserIdsList(value: Array<string>): ListTasksRequest;
  clearWorkerUserIdsList(): ListTasksRequest;
  addWorkerUserIds(value: string, index?: number): ListTasksRequest;

  getReviewUserIdsList(): Array<string>;
  setReviewUserIdsList(value: Array<string>): ListTasksRequest;
  clearReviewUserIdsList(): ListTasksRequest;
  addReviewUserIds(value: string, index?: number): ListTasksRequest;

  getLabelOrderIdsList(): Array<string>;
  setLabelOrderIdsList(value: Array<string>): ListTasksRequest;
  clearLabelOrderIdsList(): ListTasksRequest;
  addLabelOrderIds(value: string, index?: number): ListTasksRequest;

  getIncludingLabelOrderTasks(): boolean;
  setIncludingLabelOrderTasks(value: boolean): ListTasksRequest;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): ListTasksRequest;
  clearAdditionalFieldsList(): ListTasksRequest;
  addAdditionalFields(value: string, index?: number): ListTasksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksRequest): ListTasksRequest.AsObject;
  static serializeBinaryToWriter(message: ListTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksRequest;
  static deserializeBinaryFromReader(message: ListTasksRequest, reader: jspb.BinaryReader): ListTasksRequest;
}

export namespace ListTasksRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
    workerUserIdsList: Array<string>,
    reviewUserIdsList: Array<string>,
    labelOrderIdsList: Array<string>,
    includingLabelOrderTasks: boolean,
    additionalFieldsList: Array<string>,
  }
}

export class PatchTasksRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchTasksRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchTasksRequest;

  getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
  setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): PatchTasksRequest;
  clearTasksList(): PatchTasksRequest;
  addTasks(value?: proto_clarifai_api_resources_pb.Task, index?: number): proto_clarifai_api_resources_pb.Task;

  getAction(): string;
  setAction(value: string): PatchTasksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchTasksRequest): PatchTasksRequest.AsObject;
  static serializeBinaryToWriter(message: PatchTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchTasksRequest;
  static deserializeBinaryFromReader(message: PatchTasksRequest, reader: jspb.BinaryReader): PatchTasksRequest;
}

export namespace PatchTasksRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    tasksList: Array<proto_clarifai_api_resources_pb.Task.AsObject>,
    action: string,
  }
}

export class DeleteTasksRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteTasksRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteTasksRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteTasksRequest;
  clearIdsList(): DeleteTasksRequest;
  addIds(value: string, index?: number): DeleteTasksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTasksRequest): DeleteTasksRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTasksRequest;
  static deserializeBinaryFromReader(message: DeleteTasksRequest, reader: jspb.BinaryReader): DeleteTasksRequest;
}

export namespace DeleteTasksRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class MultiTaskResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTaskResponse;
  hasStatus(): boolean;
  clearStatus(): MultiTaskResponse;

  getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
  setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): MultiTaskResponse;
  clearTasksList(): MultiTaskResponse;
  addTasks(value?: proto_clarifai_api_resources_pb.Task, index?: number): proto_clarifai_api_resources_pb.Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTaskResponse): MultiTaskResponse.AsObject;
  static serializeBinaryToWriter(message: MultiTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTaskResponse;
  static deserializeBinaryFromReader(message: MultiTaskResponse, reader: jspb.BinaryReader): MultiTaskResponse;
}

export namespace MultiTaskResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    tasksList: Array<proto_clarifai_api_resources_pb.Task.AsObject>,
  }
}

export class SingleTaskResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleTaskResponse;
  hasStatus(): boolean;
  clearStatus(): SingleTaskResponse;

  getTask(): proto_clarifai_api_resources_pb.Task | undefined;
  setTask(value?: proto_clarifai_api_resources_pb.Task): SingleTaskResponse;
  hasTask(): boolean;
  clearTask(): SingleTaskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleTaskResponse): SingleTaskResponse.AsObject;
  static serializeBinaryToWriter(message: SingleTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleTaskResponse;
  static deserializeBinaryFromReader(message: SingleTaskResponse, reader: jspb.BinaryReader): SingleTaskResponse;
}

export namespace SingleTaskResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    task?: proto_clarifai_api_resources_pb.Task.AsObject,
  }
}

export class GetTaskCountRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetTaskCountRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetTaskCountRequest;

  getTaskId(): string;
  setTaskId(value: string): GetTaskCountRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): GetTaskCountRequest;
  clearUserIdsList(): GetTaskCountRequest;
  addUserIds(value: string, index?: number): GetTaskCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskCountRequest): GetTaskCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskCountRequest;
  static deserializeBinaryFromReader(message: GetTaskCountRequest, reader: jspb.BinaryReader): GetTaskCountRequest;
}

export namespace GetTaskCountRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    taskId: string,
    userIdsList: Array<string>,
  }
}

export class SingleTaskCountResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleTaskCountResponse;
  hasStatus(): boolean;
  clearStatus(): SingleTaskCountResponse;

  getAppId(): string;
  setAppId(value: string): SingleTaskCountResponse;

  getTaskId(): string;
  setTaskId(value: string): SingleTaskCountResponse;

  getCountsList(): Array<proto_clarifai_api_resources_pb.TaskStatusCountPerUser>;
  setCountsList(value: Array<proto_clarifai_api_resources_pb.TaskStatusCountPerUser>): SingleTaskCountResponse;
  clearCountsList(): SingleTaskCountResponse;
  addCounts(value?: proto_clarifai_api_resources_pb.TaskStatusCountPerUser, index?: number): proto_clarifai_api_resources_pb.TaskStatusCountPerUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleTaskCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleTaskCountResponse): SingleTaskCountResponse.AsObject;
  static serializeBinaryToWriter(message: SingleTaskCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleTaskCountResponse;
  static deserializeBinaryFromReader(message: SingleTaskCountResponse, reader: jspb.BinaryReader): SingleTaskCountResponse;
}

export namespace SingleTaskCountResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    appId: string,
    taskId: string,
    countsList: Array<proto_clarifai_api_resources_pb.TaskStatusCountPerUser.AsObject>,
  }
}

export class PatchAnnotationCountsRollupRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationCountsRollupRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchAnnotationCountsRollupRequest;

  getTaskId(): string;
  setTaskId(value: string): PatchAnnotationCountsRollupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAnnotationCountsRollupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAnnotationCountsRollupRequest): PatchAnnotationCountsRollupRequest.AsObject;
  static serializeBinaryToWriter(message: PatchAnnotationCountsRollupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAnnotationCountsRollupRequest;
  static deserializeBinaryFromReader(message: PatchAnnotationCountsRollupRequest, reader: jspb.BinaryReader): PatchAnnotationCountsRollupRequest;
}

export namespace PatchAnnotationCountsRollupRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    taskId: string,
  }
}

export class PostLabelOrdersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostLabelOrdersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostLabelOrdersRequest;

  getLabelOrdersList(): Array<proto_clarifai_api_resources_pb.LabelOrder>;
  setLabelOrdersList(value: Array<proto_clarifai_api_resources_pb.LabelOrder>): PostLabelOrdersRequest;
  clearLabelOrdersList(): PostLabelOrdersRequest;
  addLabelOrders(value?: proto_clarifai_api_resources_pb.LabelOrder, index?: number): proto_clarifai_api_resources_pb.LabelOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostLabelOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostLabelOrdersRequest): PostLabelOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: PostLabelOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostLabelOrdersRequest;
  static deserializeBinaryFromReader(message: PostLabelOrdersRequest, reader: jspb.BinaryReader): PostLabelOrdersRequest;
}

export namespace PostLabelOrdersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    labelOrdersList: Array<proto_clarifai_api_resources_pb.LabelOrder.AsObject>,
  }
}

export class GetLabelOrderRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetLabelOrderRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetLabelOrderRequest;

  getLabelOrderId(): string;
  setLabelOrderId(value: string): GetLabelOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelOrderRequest): GetLabelOrderRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelOrderRequest;
  static deserializeBinaryFromReader(message: GetLabelOrderRequest, reader: jspb.BinaryReader): GetLabelOrderRequest;
}

export namespace GetLabelOrderRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    labelOrderId: string,
  }
}

export class ListLabelOrdersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListLabelOrdersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListLabelOrdersRequest;

  getPage(): number;
  setPage(value: number): ListLabelOrdersRequest;

  getPerPage(): number;
  setPerPage(value: number): ListLabelOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelOrdersRequest): ListLabelOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabelOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelOrdersRequest;
  static deserializeBinaryFromReader(message: ListLabelOrdersRequest, reader: jspb.BinaryReader): ListLabelOrdersRequest;
}

export namespace ListLabelOrdersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class PatchLabelOrdersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchLabelOrdersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchLabelOrdersRequest;

  getLabelOrdersList(): Array<proto_clarifai_api_resources_pb.LabelOrder>;
  setLabelOrdersList(value: Array<proto_clarifai_api_resources_pb.LabelOrder>): PatchLabelOrdersRequest;
  clearLabelOrdersList(): PatchLabelOrdersRequest;
  addLabelOrders(value?: proto_clarifai_api_resources_pb.LabelOrder, index?: number): proto_clarifai_api_resources_pb.LabelOrder;

  getAction(): string;
  setAction(value: string): PatchLabelOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchLabelOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchLabelOrdersRequest): PatchLabelOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: PatchLabelOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchLabelOrdersRequest;
  static deserializeBinaryFromReader(message: PatchLabelOrdersRequest, reader: jspb.BinaryReader): PatchLabelOrdersRequest;
}

export namespace PatchLabelOrdersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    labelOrdersList: Array<proto_clarifai_api_resources_pb.LabelOrder.AsObject>,
    action: string,
  }
}

export class DeleteLabelOrdersRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteLabelOrdersRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteLabelOrdersRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteLabelOrdersRequest;
  clearIdsList(): DeleteLabelOrdersRequest;
  addIds(value: string, index?: number): DeleteLabelOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelOrdersRequest): DeleteLabelOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLabelOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelOrdersRequest;
  static deserializeBinaryFromReader(message: DeleteLabelOrdersRequest, reader: jspb.BinaryReader): DeleteLabelOrdersRequest;
}

export namespace DeleteLabelOrdersRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class MultiLabelOrderResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiLabelOrderResponse;
  hasStatus(): boolean;
  clearStatus(): MultiLabelOrderResponse;

  getLabelOrdersList(): Array<proto_clarifai_api_resources_pb.LabelOrder>;
  setLabelOrdersList(value: Array<proto_clarifai_api_resources_pb.LabelOrder>): MultiLabelOrderResponse;
  clearLabelOrdersList(): MultiLabelOrderResponse;
  addLabelOrders(value?: proto_clarifai_api_resources_pb.LabelOrder, index?: number): proto_clarifai_api_resources_pb.LabelOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiLabelOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiLabelOrderResponse): MultiLabelOrderResponse.AsObject;
  static serializeBinaryToWriter(message: MultiLabelOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiLabelOrderResponse;
  static deserializeBinaryFromReader(message: MultiLabelOrderResponse, reader: jspb.BinaryReader): MultiLabelOrderResponse;
}

export namespace MultiLabelOrderResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    labelOrdersList: Array<proto_clarifai_api_resources_pb.LabelOrder.AsObject>,
  }
}

export class SingleLabelOrderResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleLabelOrderResponse;
  hasStatus(): boolean;
  clearStatus(): SingleLabelOrderResponse;

  getLabelOrder(): proto_clarifai_api_resources_pb.LabelOrder | undefined;
  setLabelOrder(value?: proto_clarifai_api_resources_pb.LabelOrder): SingleLabelOrderResponse;
  hasLabelOrder(): boolean;
  clearLabelOrder(): SingleLabelOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleLabelOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleLabelOrderResponse): SingleLabelOrderResponse.AsObject;
  static serializeBinaryToWriter(message: SingleLabelOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleLabelOrderResponse;
  static deserializeBinaryFromReader(message: SingleLabelOrderResponse, reader: jspb.BinaryReader): SingleLabelOrderResponse;
}

export namespace SingleLabelOrderResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    labelOrder?: proto_clarifai_api_resources_pb.LabelOrder.AsObject,
  }
}

export class PostCollectorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostCollectorsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostCollectorsRequest;

  getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
  setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): PostCollectorsRequest;
  clearCollectorsList(): PostCollectorsRequest;
  addCollectors(value?: proto_clarifai_api_resources_pb.Collector, index?: number): proto_clarifai_api_resources_pb.Collector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostCollectorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostCollectorsRequest): PostCollectorsRequest.AsObject;
  static serializeBinaryToWriter(message: PostCollectorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostCollectorsRequest;
  static deserializeBinaryFromReader(message: PostCollectorsRequest, reader: jspb.BinaryReader): PostCollectorsRequest;
}

export namespace PostCollectorsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    collectorsList: Array<proto_clarifai_api_resources_pb.Collector.AsObject>,
  }
}

export class PatchCollectorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchCollectorsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchCollectorsRequest;

  getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
  setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): PatchCollectorsRequest;
  clearCollectorsList(): PatchCollectorsRequest;
  addCollectors(value?: proto_clarifai_api_resources_pb.Collector, index?: number): proto_clarifai_api_resources_pb.Collector;

  getAction(): string;
  setAction(value: string): PatchCollectorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchCollectorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchCollectorsRequest): PatchCollectorsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchCollectorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchCollectorsRequest;
  static deserializeBinaryFromReader(message: PatchCollectorsRequest, reader: jspb.BinaryReader): PatchCollectorsRequest;
}

export namespace PatchCollectorsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    collectorsList: Array<proto_clarifai_api_resources_pb.Collector.AsObject>,
    action: string,
  }
}

export class DeleteCollectorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteCollectorsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteCollectorsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteCollectorsRequest;
  clearIdsList(): DeleteCollectorsRequest;
  addIds(value: string, index?: number): DeleteCollectorsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): DeleteCollectorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectorsRequest): DeleteCollectorsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCollectorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectorsRequest;
  static deserializeBinaryFromReader(message: DeleteCollectorsRequest, reader: jspb.BinaryReader): DeleteCollectorsRequest;
}

export namespace DeleteCollectorsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
    deleteAll: boolean,
  }
}

export class GetCollectorRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetCollectorRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetCollectorRequest;

  getCollectorId(): string;
  setCollectorId(value: string): GetCollectorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectorRequest): GetCollectorRequest.AsObject;
  static serializeBinaryToWriter(message: GetCollectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectorRequest;
  static deserializeBinaryFromReader(message: GetCollectorRequest, reader: jspb.BinaryReader): GetCollectorRequest;
}

export namespace GetCollectorRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    collectorId: string,
  }
}

export class ListCollectorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListCollectorsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListCollectorsRequest;

  getPage(): number;
  setPage(value: number): ListCollectorsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListCollectorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectorsRequest): ListCollectorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCollectorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectorsRequest;
  static deserializeBinaryFromReader(message: ListCollectorsRequest, reader: jspb.BinaryReader): ListCollectorsRequest;
}

export namespace ListCollectorsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class MultiCollectorResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiCollectorResponse;
  hasStatus(): boolean;
  clearStatus(): MultiCollectorResponse;

  getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
  setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): MultiCollectorResponse;
  clearCollectorsList(): MultiCollectorResponse;
  addCollectors(value?: proto_clarifai_api_resources_pb.Collector, index?: number): proto_clarifai_api_resources_pb.Collector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiCollectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiCollectorResponse): MultiCollectorResponse.AsObject;
  static serializeBinaryToWriter(message: MultiCollectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiCollectorResponse;
  static deserializeBinaryFromReader(message: MultiCollectorResponse, reader: jspb.BinaryReader): MultiCollectorResponse;
}

export namespace MultiCollectorResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    collectorsList: Array<proto_clarifai_api_resources_pb.Collector.AsObject>,
  }
}

export class SingleCollectorResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleCollectorResponse;
  hasStatus(): boolean;
  clearStatus(): SingleCollectorResponse;

  getCollector(): proto_clarifai_api_resources_pb.Collector | undefined;
  setCollector(value?: proto_clarifai_api_resources_pb.Collector): SingleCollectorResponse;
  hasCollector(): boolean;
  clearCollector(): SingleCollectorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleCollectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleCollectorResponse): SingleCollectorResponse.AsObject;
  static serializeBinaryToWriter(message: SingleCollectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleCollectorResponse;
  static deserializeBinaryFromReader(message: SingleCollectorResponse, reader: jspb.BinaryReader): SingleCollectorResponse;
}

export namespace SingleCollectorResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    collector?: proto_clarifai_api_resources_pb.Collector.AsObject,
  }
}

export class PostStatValuesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostStatValuesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostStatValuesRequest;

  getStatValuesList(): Array<proto_clarifai_api_resources_pb.StatValue>;
  setStatValuesList(value: Array<proto_clarifai_api_resources_pb.StatValue>): PostStatValuesRequest;
  clearStatValuesList(): PostStatValuesRequest;
  addStatValues(value?: proto_clarifai_api_resources_pb.StatValue, index?: number): proto_clarifai_api_resources_pb.StatValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostStatValuesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostStatValuesRequest): PostStatValuesRequest.AsObject;
  static serializeBinaryToWriter(message: PostStatValuesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostStatValuesRequest;
  static deserializeBinaryFromReader(message: PostStatValuesRequest, reader: jspb.BinaryReader): PostStatValuesRequest;
}

export namespace PostStatValuesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    statValuesList: Array<proto_clarifai_api_resources_pb.StatValue.AsObject>,
  }
}

export class MultiStatValueResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiStatValueResponse;
  hasStatus(): boolean;
  clearStatus(): MultiStatValueResponse;

  getStatValuesList(): Array<proto_clarifai_api_resources_pb.StatValue>;
  setStatValuesList(value: Array<proto_clarifai_api_resources_pb.StatValue>): MultiStatValueResponse;
  clearStatValuesList(): MultiStatValueResponse;
  addStatValues(value?: proto_clarifai_api_resources_pb.StatValue, index?: number): proto_clarifai_api_resources_pb.StatValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiStatValueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiStatValueResponse): MultiStatValueResponse.AsObject;
  static serializeBinaryToWriter(message: MultiStatValueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiStatValueResponse;
  static deserializeBinaryFromReader(message: MultiStatValueResponse, reader: jspb.BinaryReader): MultiStatValueResponse;
}

export namespace MultiStatValueResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    statValuesList: Array<proto_clarifai_api_resources_pb.StatValue.AsObject>,
  }
}

export class PostStatValuesAggregateRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostStatValuesAggregateRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostStatValuesAggregateRequest;

  getStatValueAggregateQueriesList(): Array<proto_clarifai_api_resources_pb.StatValueAggregateQuery>;
  setStatValueAggregateQueriesList(value: Array<proto_clarifai_api_resources_pb.StatValueAggregateQuery>): PostStatValuesAggregateRequest;
  clearStatValueAggregateQueriesList(): PostStatValuesAggregateRequest;
  addStatValueAggregateQueries(value?: proto_clarifai_api_resources_pb.StatValueAggregateQuery, index?: number): proto_clarifai_api_resources_pb.StatValueAggregateQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostStatValuesAggregateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostStatValuesAggregateRequest): PostStatValuesAggregateRequest.AsObject;
  static serializeBinaryToWriter(message: PostStatValuesAggregateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostStatValuesAggregateRequest;
  static deserializeBinaryFromReader(message: PostStatValuesAggregateRequest, reader: jspb.BinaryReader): PostStatValuesAggregateRequest;
}

export namespace PostStatValuesAggregateRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    statValueAggregateQueriesList: Array<proto_clarifai_api_resources_pb.StatValueAggregateQuery.AsObject>,
  }
}

export class MultiStatValueAggregateResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiStatValueAggregateResponse;
  hasStatus(): boolean;
  clearStatus(): MultiStatValueAggregateResponse;

  getStatValueAggregateResultsList(): Array<proto_clarifai_api_resources_pb.StatValueAggregateResult>;
  setStatValueAggregateResultsList(value: Array<proto_clarifai_api_resources_pb.StatValueAggregateResult>): MultiStatValueAggregateResponse;
  clearStatValueAggregateResultsList(): MultiStatValueAggregateResponse;
  addStatValueAggregateResults(value?: proto_clarifai_api_resources_pb.StatValueAggregateResult, index?: number): proto_clarifai_api_resources_pb.StatValueAggregateResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiStatValueAggregateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiStatValueAggregateResponse): MultiStatValueAggregateResponse.AsObject;
  static serializeBinaryToWriter(message: MultiStatValueAggregateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiStatValueAggregateResponse;
  static deserializeBinaryFromReader(message: MultiStatValueAggregateResponse, reader: jspb.BinaryReader): MultiStatValueAggregateResponse;
}

export namespace MultiStatValueAggregateResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    statValueAggregateResultsList: Array<proto_clarifai_api_resources_pb.StatValueAggregateResult.AsObject>,
  }
}

export class PostAnalyticsRequest extends jspb.Message {
  getBatchUniqueIdentifier(): string;
  setBatchUniqueIdentifier(value: string): PostAnalyticsRequest;

  getDeviceInfo(): proto_clarifai_api_resources_pb.DeviceInfo | undefined;
  setDeviceInfo(value?: proto_clarifai_api_resources_pb.DeviceInfo): PostAnalyticsRequest;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): PostAnalyticsRequest;

  getEventsCollectionList(): Array<proto_clarifai_api_resources_pb.SDKEventsCollection>;
  setEventsCollectionList(value: Array<proto_clarifai_api_resources_pb.SDKEventsCollection>): PostAnalyticsRequest;
  clearEventsCollectionList(): PostAnalyticsRequest;
  addEventsCollection(value?: proto_clarifai_api_resources_pb.SDKEventsCollection, index?: number): proto_clarifai_api_resources_pb.SDKEventsCollection;

  getHostAppInfo(): proto_clarifai_api_resources_pb.HostAppInfo | undefined;
  setHostAppInfo(value?: proto_clarifai_api_resources_pb.HostAppInfo): PostAnalyticsRequest;
  hasHostAppInfo(): boolean;
  clearHostAppInfo(): PostAnalyticsRequest;

  getOperatingSystem(): proto_clarifai_api_resources_pb.OperatingSystem | undefined;
  setOperatingSystem(value?: proto_clarifai_api_resources_pb.OperatingSystem): PostAnalyticsRequest;
  hasOperatingSystem(): boolean;
  clearOperatingSystem(): PostAnalyticsRequest;

  getState(): proto_clarifai_api_resources_pb.State | undefined;
  setState(value?: proto_clarifai_api_resources_pb.State): PostAnalyticsRequest;
  hasState(): boolean;
  clearState(): PostAnalyticsRequest;

  getSystemUuid(): string;
  setSystemUuid(value: string): PostAnalyticsRequest;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): PostAnalyticsRequest;
  hasTimestamp(): boolean;
  clearTimestamp(): PostAnalyticsRequest;

  getSdk(): proto_clarifai_api_resources_pb.SDK | undefined;
  setSdk(value?: proto_clarifai_api_resources_pb.SDK): PostAnalyticsRequest;
  hasSdk(): boolean;
  clearSdk(): PostAnalyticsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAnalyticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAnalyticsRequest): PostAnalyticsRequest.AsObject;
  static serializeBinaryToWriter(message: PostAnalyticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAnalyticsRequest;
  static deserializeBinaryFromReader(message: PostAnalyticsRequest, reader: jspb.BinaryReader): PostAnalyticsRequest;
}

export namespace PostAnalyticsRequest {
  export type AsObject = {
    batchUniqueIdentifier: string,
    deviceInfo?: proto_clarifai_api_resources_pb.DeviceInfo.AsObject,
    eventsCollectionList: Array<proto_clarifai_api_resources_pb.SDKEventsCollection.AsObject>,
    hostAppInfo?: proto_clarifai_api_resources_pb.HostAppInfo.AsObject,
    operatingSystem?: proto_clarifai_api_resources_pb.OperatingSystem.AsObject,
    state?: proto_clarifai_api_resources_pb.State.AsObject,
    systemUuid: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sdk?: proto_clarifai_api_resources_pb.SDK.AsObject,
  }
}

export class PostAnalyticsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostAnalyticsResponse;
  hasStatus(): boolean;
  clearStatus(): PostAnalyticsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAnalyticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostAnalyticsResponse): PostAnalyticsResponse.AsObject;
  static serializeBinaryToWriter(message: PostAnalyticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAnalyticsResponse;
  static deserializeBinaryFromReader(message: PostAnalyticsResponse, reader: jspb.BinaryReader): PostAnalyticsResponse;
}

export namespace PostAnalyticsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class PostSDKBillingRequest extends jspb.Message {
  getBatchUniqueIdentifier(): string;
  setBatchUniqueIdentifier(value: string): PostSDKBillingRequest;

  getDeviceInfo(): proto_clarifai_api_resources_pb.DeviceInfo | undefined;
  setDeviceInfo(value?: proto_clarifai_api_resources_pb.DeviceInfo): PostSDKBillingRequest;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): PostSDKBillingRequest;

  getCycle(): proto_clarifai_api_resources_pb.SDKBillingCycle | undefined;
  setCycle(value?: proto_clarifai_api_resources_pb.SDKBillingCycle): PostSDKBillingRequest;
  hasCycle(): boolean;
  clearCycle(): PostSDKBillingRequest;

  getHostAppInfo(): proto_clarifai_api_resources_pb.HostAppInfo | undefined;
  setHostAppInfo(value?: proto_clarifai_api_resources_pb.HostAppInfo): PostSDKBillingRequest;
  hasHostAppInfo(): boolean;
  clearHostAppInfo(): PostSDKBillingRequest;

  getOperatingSystem(): proto_clarifai_api_resources_pb.OperatingSystem | undefined;
  setOperatingSystem(value?: proto_clarifai_api_resources_pb.OperatingSystem): PostSDKBillingRequest;
  hasOperatingSystem(): boolean;
  clearOperatingSystem(): PostSDKBillingRequest;

  getState(): proto_clarifai_api_resources_pb.State | undefined;
  setState(value?: proto_clarifai_api_resources_pb.State): PostSDKBillingRequest;
  hasState(): boolean;
  clearState(): PostSDKBillingRequest;

  getSystemUuid(): string;
  setSystemUuid(value: string): PostSDKBillingRequest;

  getSdk(): proto_clarifai_api_resources_pb.SDK | undefined;
  setSdk(value?: proto_clarifai_api_resources_pb.SDK): PostSDKBillingRequest;
  hasSdk(): boolean;
  clearSdk(): PostSDKBillingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostSDKBillingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostSDKBillingRequest): PostSDKBillingRequest.AsObject;
  static serializeBinaryToWriter(message: PostSDKBillingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostSDKBillingRequest;
  static deserializeBinaryFromReader(message: PostSDKBillingRequest, reader: jspb.BinaryReader): PostSDKBillingRequest;
}

export namespace PostSDKBillingRequest {
  export type AsObject = {
    batchUniqueIdentifier: string,
    deviceInfo?: proto_clarifai_api_resources_pb.DeviceInfo.AsObject,
    cycle?: proto_clarifai_api_resources_pb.SDKBillingCycle.AsObject,
    hostAppInfo?: proto_clarifai_api_resources_pb.HostAppInfo.AsObject,
    operatingSystem?: proto_clarifai_api_resources_pb.OperatingSystem.AsObject,
    state?: proto_clarifai_api_resources_pb.State.AsObject,
    systemUuid: string,
    sdk?: proto_clarifai_api_resources_pb.SDK.AsObject,
  }
}

export class PostSDKBillingResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostSDKBillingResponse;
  hasStatus(): boolean;
  clearStatus(): PostSDKBillingResponse;

  getCommands(): proto_clarifai_commands_commands_pb.Commands | undefined;
  setCommands(value?: proto_clarifai_commands_commands_pb.Commands): PostSDKBillingResponse;
  hasCommands(): boolean;
  clearCommands(): PostSDKBillingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostSDKBillingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostSDKBillingResponse): PostSDKBillingResponse.AsObject;
  static serializeBinaryToWriter(message: PostSDKBillingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostSDKBillingResponse;
  static deserializeBinaryFromReader(message: PostSDKBillingResponse, reader: jspb.BinaryReader): PostSDKBillingResponse;
}

export namespace PostSDKBillingResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    commands?: proto_clarifai_commands_commands_pb.Commands.AsObject,
  }
}

export class MultiFindDuplicateAnnotationsJobResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiFindDuplicateAnnotationsJobResponse;
  hasStatus(): boolean;
  clearStatus(): MultiFindDuplicateAnnotationsJobResponse;

  getFindDuplicateAnnotationsJobsList(): Array<proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob>;
  setFindDuplicateAnnotationsJobsList(value: Array<proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob>): MultiFindDuplicateAnnotationsJobResponse;
  clearFindDuplicateAnnotationsJobsList(): MultiFindDuplicateAnnotationsJobResponse;
  addFindDuplicateAnnotationsJobs(value?: proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob, index?: number): proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiFindDuplicateAnnotationsJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiFindDuplicateAnnotationsJobResponse): MultiFindDuplicateAnnotationsJobResponse.AsObject;
  static serializeBinaryToWriter(message: MultiFindDuplicateAnnotationsJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiFindDuplicateAnnotationsJobResponse;
  static deserializeBinaryFromReader(message: MultiFindDuplicateAnnotationsJobResponse, reader: jspb.BinaryReader): MultiFindDuplicateAnnotationsJobResponse;
}

export namespace MultiFindDuplicateAnnotationsJobResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    findDuplicateAnnotationsJobsList: Array<proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob.AsObject>,
  }
}

export class SingleFindDuplicateAnnotationsJobResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleFindDuplicateAnnotationsJobResponse;
  hasStatus(): boolean;
  clearStatus(): SingleFindDuplicateAnnotationsJobResponse;

  getFindDuplicateAnnotationsJob(): proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob | undefined;
  setFindDuplicateAnnotationsJob(value?: proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob): SingleFindDuplicateAnnotationsJobResponse;
  hasFindDuplicateAnnotationsJob(): boolean;
  clearFindDuplicateAnnotationsJob(): SingleFindDuplicateAnnotationsJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleFindDuplicateAnnotationsJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleFindDuplicateAnnotationsJobResponse): SingleFindDuplicateAnnotationsJobResponse.AsObject;
  static serializeBinaryToWriter(message: SingleFindDuplicateAnnotationsJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleFindDuplicateAnnotationsJobResponse;
  static deserializeBinaryFromReader(message: SingleFindDuplicateAnnotationsJobResponse, reader: jspb.BinaryReader): SingleFindDuplicateAnnotationsJobResponse;
}

export namespace SingleFindDuplicateAnnotationsJobResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    findDuplicateAnnotationsJob?: proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob.AsObject,
  }
}

export class PostFindDuplicateAnnotationsJobsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostFindDuplicateAnnotationsJobsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostFindDuplicateAnnotationsJobsRequest;

  getFindDuplicateAnnotationsJobsList(): Array<proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob>;
  setFindDuplicateAnnotationsJobsList(value: Array<proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob>): PostFindDuplicateAnnotationsJobsRequest;
  clearFindDuplicateAnnotationsJobsList(): PostFindDuplicateAnnotationsJobsRequest;
  addFindDuplicateAnnotationsJobs(value?: proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob, index?: number): proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostFindDuplicateAnnotationsJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostFindDuplicateAnnotationsJobsRequest): PostFindDuplicateAnnotationsJobsRequest.AsObject;
  static serializeBinaryToWriter(message: PostFindDuplicateAnnotationsJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostFindDuplicateAnnotationsJobsRequest;
  static deserializeBinaryFromReader(message: PostFindDuplicateAnnotationsJobsRequest, reader: jspb.BinaryReader): PostFindDuplicateAnnotationsJobsRequest;
}

export namespace PostFindDuplicateAnnotationsJobsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    findDuplicateAnnotationsJobsList: Array<proto_clarifai_api_resources_pb.FindDuplicateAnnotationsJob.AsObject>,
  }
}

export class GetFindDuplicateAnnotationsJobRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetFindDuplicateAnnotationsJobRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetFindDuplicateAnnotationsJobRequest;

  getId(): string;
  setId(value: string): GetFindDuplicateAnnotationsJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFindDuplicateAnnotationsJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFindDuplicateAnnotationsJobRequest): GetFindDuplicateAnnotationsJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetFindDuplicateAnnotationsJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFindDuplicateAnnotationsJobRequest;
  static deserializeBinaryFromReader(message: GetFindDuplicateAnnotationsJobRequest, reader: jspb.BinaryReader): GetFindDuplicateAnnotationsJobRequest;
}

export namespace GetFindDuplicateAnnotationsJobRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class ListFindDuplicateAnnotationsJobsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListFindDuplicateAnnotationsJobsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListFindDuplicateAnnotationsJobsRequest;

  getPage(): number;
  setPage(value: number): ListFindDuplicateAnnotationsJobsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListFindDuplicateAnnotationsJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFindDuplicateAnnotationsJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFindDuplicateAnnotationsJobsRequest): ListFindDuplicateAnnotationsJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFindDuplicateAnnotationsJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFindDuplicateAnnotationsJobsRequest;
  static deserializeBinaryFromReader(message: ListFindDuplicateAnnotationsJobsRequest, reader: jspb.BinaryReader): ListFindDuplicateAnnotationsJobsRequest;
}

export namespace ListFindDuplicateAnnotationsJobsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class DeleteFindDuplicateAnnotationsJobsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteFindDuplicateAnnotationsJobsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteFindDuplicateAnnotationsJobsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteFindDuplicateAnnotationsJobsRequest;
  clearIdsList(): DeleteFindDuplicateAnnotationsJobsRequest;
  addIds(value: string, index?: number): DeleteFindDuplicateAnnotationsJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFindDuplicateAnnotationsJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFindDuplicateAnnotationsJobsRequest): DeleteFindDuplicateAnnotationsJobsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFindDuplicateAnnotationsJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFindDuplicateAnnotationsJobsRequest;
  static deserializeBinaryFromReader(message: DeleteFindDuplicateAnnotationsJobsRequest, reader: jspb.BinaryReader): DeleteFindDuplicateAnnotationsJobsRequest;
}

export namespace DeleteFindDuplicateAnnotationsJobsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class PostTrendingMetricsViewRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostTrendingMetricsViewRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostTrendingMetricsViewRequest;

  getViewType(): string;
  setViewType(value: string): PostTrendingMetricsViewRequest;

  getObjectId(): string;
  setObjectId(value: string): PostTrendingMetricsViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTrendingMetricsViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostTrendingMetricsViewRequest): PostTrendingMetricsViewRequest.AsObject;
  static serializeBinaryToWriter(message: PostTrendingMetricsViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTrendingMetricsViewRequest;
  static deserializeBinaryFromReader(message: PostTrendingMetricsViewRequest, reader: jspb.BinaryReader): PostTrendingMetricsViewRequest;
}

export namespace PostTrendingMetricsViewRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    viewType: string,
    objectId: string,
  }
}

export class ListTrendingMetricsViewsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListTrendingMetricsViewsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListTrendingMetricsViewsRequest;

  getViewType(): string;
  setViewType(value: string): ListTrendingMetricsViewsRequest;

  getPage(): number;
  setPage(value: number): ListTrendingMetricsViewsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListTrendingMetricsViewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTrendingMetricsViewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTrendingMetricsViewsRequest): ListTrendingMetricsViewsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTrendingMetricsViewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTrendingMetricsViewsRequest;
  static deserializeBinaryFromReader(message: ListTrendingMetricsViewsRequest, reader: jspb.BinaryReader): ListTrendingMetricsViewsRequest;
}

export namespace ListTrendingMetricsViewsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    viewType: string,
    page: number,
    perPage: number,
  }
}

export class MultiTrendingMetricsViewResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTrendingMetricsViewResponse;
  hasStatus(): boolean;
  clearStatus(): MultiTrendingMetricsViewResponse;

  getMetricsList(): Array<proto_clarifai_api_resources_pb.TrendingMetric>;
  setMetricsList(value: Array<proto_clarifai_api_resources_pb.TrendingMetric>): MultiTrendingMetricsViewResponse;
  clearMetricsList(): MultiTrendingMetricsViewResponse;
  addMetrics(value?: proto_clarifai_api_resources_pb.TrendingMetric, index?: number): proto_clarifai_api_resources_pb.TrendingMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTrendingMetricsViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTrendingMetricsViewResponse): MultiTrendingMetricsViewResponse.AsObject;
  static serializeBinaryToWriter(message: MultiTrendingMetricsViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTrendingMetricsViewResponse;
  static deserializeBinaryFromReader(message: MultiTrendingMetricsViewResponse, reader: jspb.BinaryReader): MultiTrendingMetricsViewResponse;
}

export namespace MultiTrendingMetricsViewResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    metricsList: Array<proto_clarifai_api_resources_pb.TrendingMetric.AsObject>,
  }
}

export class PostIdValidationRequest extends jspb.Message {
  getValidationsList(): Array<proto_clarifai_api_resources_pb.Validation>;
  setValidationsList(value: Array<proto_clarifai_api_resources_pb.Validation>): PostIdValidationRequest;
  clearValidationsList(): PostIdValidationRequest;
  addValidations(value?: proto_clarifai_api_resources_pb.Validation, index?: number): proto_clarifai_api_resources_pb.Validation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostIdValidationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostIdValidationRequest): PostIdValidationRequest.AsObject;
  static serializeBinaryToWriter(message: PostIdValidationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostIdValidationRequest;
  static deserializeBinaryFromReader(message: PostIdValidationRequest, reader: jspb.BinaryReader): PostIdValidationRequest;
}

export namespace PostIdValidationRequest {
  export type AsObject = {
    validationsList: Array<proto_clarifai_api_resources_pb.Validation.AsObject>,
  }
}

export class MultiIdValidationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiIdValidationResponse;
  hasStatus(): boolean;
  clearStatus(): MultiIdValidationResponse;

  getValidationResultsList(): Array<proto_clarifai_api_resources_pb.ValidationResult>;
  setValidationResultsList(value: Array<proto_clarifai_api_resources_pb.ValidationResult>): MultiIdValidationResponse;
  clearValidationResultsList(): MultiIdValidationResponse;
  addValidationResults(value?: proto_clarifai_api_resources_pb.ValidationResult, index?: number): proto_clarifai_api_resources_pb.ValidationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiIdValidationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiIdValidationResponse): MultiIdValidationResponse.AsObject;
  static serializeBinaryToWriter(message: MultiIdValidationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiIdValidationResponse;
  static deserializeBinaryFromReader(message: MultiIdValidationResponse, reader: jspb.BinaryReader): MultiIdValidationResponse;
}

export namespace MultiIdValidationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    validationResultsList: Array<proto_clarifai_api_resources_pb.ValidationResult.AsObject>,
  }
}

export class ListTagCategoriesRequest extends jspb.Message {
  getObjectType(): string;
  setObjectType(value: string): ListTagCategoriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagCategoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagCategoriesRequest): ListTagCategoriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListTagCategoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagCategoriesRequest;
  static deserializeBinaryFromReader(message: ListTagCategoriesRequest, reader: jspb.BinaryReader): ListTagCategoriesRequest;
}

export namespace ListTagCategoriesRequest {
  export type AsObject = {
    objectType: string,
  }
}

export class MultiTagCategoryResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTagCategoryResponse;
  hasStatus(): boolean;
  clearStatus(): MultiTagCategoryResponse;

  getCategoriesList(): Array<proto_clarifai_api_resources_pb.TagCategory>;
  setCategoriesList(value: Array<proto_clarifai_api_resources_pb.TagCategory>): MultiTagCategoryResponse;
  clearCategoriesList(): MultiTagCategoryResponse;
  addCategories(value?: proto_clarifai_api_resources_pb.TagCategory, index?: number): proto_clarifai_api_resources_pb.TagCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTagCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTagCategoryResponse): MultiTagCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: MultiTagCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTagCategoryResponse;
  static deserializeBinaryFromReader(message: MultiTagCategoryResponse, reader: jspb.BinaryReader): MultiTagCategoryResponse;
}

export namespace MultiTagCategoryResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    categoriesList: Array<proto_clarifai_api_resources_pb.TagCategory.AsObject>,
  }
}

export class PostModelStarsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelStarsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModelStarsRequest;

  getModelStarsList(): Array<proto_clarifai_api_resources_pb.ModelStar>;
  setModelStarsList(value: Array<proto_clarifai_api_resources_pb.ModelStar>): PostModelStarsRequest;
  clearModelStarsList(): PostModelStarsRequest;
  addModelStars(value?: proto_clarifai_api_resources_pb.ModelStar, index?: number): proto_clarifai_api_resources_pb.ModelStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModelStarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModelStarsRequest): PostModelStarsRequest.AsObject;
  static serializeBinaryToWriter(message: PostModelStarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModelStarsRequest;
  static deserializeBinaryFromReader(message: PostModelStarsRequest, reader: jspb.BinaryReader): PostModelStarsRequest;
}

export namespace PostModelStarsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelStarsList: Array<proto_clarifai_api_resources_pb.ModelStar.AsObject>,
  }
}

export class MultiModelStarResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelStarResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModelStarResponse;

  getModelStarsList(): Array<proto_clarifai_api_resources_pb.ModelStar>;
  setModelStarsList(value: Array<proto_clarifai_api_resources_pb.ModelStar>): MultiModelStarResponse;
  clearModelStarsList(): MultiModelStarResponse;
  addModelStars(value?: proto_clarifai_api_resources_pb.ModelStar, index?: number): proto_clarifai_api_resources_pb.ModelStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModelStarResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModelStarResponse): MultiModelStarResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModelStarResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModelStarResponse;
  static deserializeBinaryFromReader(message: MultiModelStarResponse, reader: jspb.BinaryReader): MultiModelStarResponse;
}

export namespace MultiModelStarResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelStarsList: Array<proto_clarifai_api_resources_pb.ModelStar.AsObject>,
  }
}

export class DeleteModelStarsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelStarsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteModelStarsRequest;

  getModelIdsList(): Array<string>;
  setModelIdsList(value: Array<string>): DeleteModelStarsRequest;
  clearModelIdsList(): DeleteModelStarsRequest;
  addModelIds(value: string, index?: number): DeleteModelStarsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelStarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelStarsRequest): DeleteModelStarsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelStarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelStarsRequest;
  static deserializeBinaryFromReader(message: DeleteModelStarsRequest, reader: jspb.BinaryReader): DeleteModelStarsRequest;
}

export namespace DeleteModelStarsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelIdsList: Array<string>,
  }
}

export class DeleteModelStarsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): DeleteModelStarsResponse;
  hasStatus(): boolean;
  clearStatus(): DeleteModelStarsResponse;

  getModelIdsList(): Array<string>;
  setModelIdsList(value: Array<string>): DeleteModelStarsResponse;
  clearModelIdsList(): DeleteModelStarsResponse;
  addModelIds(value: string, index?: number): DeleteModelStarsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelStarsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelStarsResponse): DeleteModelStarsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteModelStarsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelStarsResponse;
  static deserializeBinaryFromReader(message: DeleteModelStarsResponse, reader: jspb.BinaryReader): DeleteModelStarsResponse;
}

export namespace DeleteModelStarsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modelIdsList: Array<string>,
  }
}

export class PostUserStarsRequest extends jspb.Message {
  getUserStarsList(): Array<proto_clarifai_api_resources_pb.UserStar>;
  setUserStarsList(value: Array<proto_clarifai_api_resources_pb.UserStar>): PostUserStarsRequest;
  clearUserStarsList(): PostUserStarsRequest;
  addUserStars(value?: proto_clarifai_api_resources_pb.UserStar, index?: number): proto_clarifai_api_resources_pb.UserStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostUserStarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostUserStarsRequest): PostUserStarsRequest.AsObject;
  static serializeBinaryToWriter(message: PostUserStarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostUserStarsRequest;
  static deserializeBinaryFromReader(message: PostUserStarsRequest, reader: jspb.BinaryReader): PostUserStarsRequest;
}

export namespace PostUserStarsRequest {
  export type AsObject = {
    userStarsList: Array<proto_clarifai_api_resources_pb.UserStar.AsObject>,
  }
}

export class MultiUserStarResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiUserStarResponse;
  hasStatus(): boolean;
  clearStatus(): MultiUserStarResponse;

  getUserStarsList(): Array<proto_clarifai_api_resources_pb.UserStar>;
  setUserStarsList(value: Array<proto_clarifai_api_resources_pb.UserStar>): MultiUserStarResponse;
  clearUserStarsList(): MultiUserStarResponse;
  addUserStars(value?: proto_clarifai_api_resources_pb.UserStar, index?: number): proto_clarifai_api_resources_pb.UserStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiUserStarResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiUserStarResponse): MultiUserStarResponse.AsObject;
  static serializeBinaryToWriter(message: MultiUserStarResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiUserStarResponse;
  static deserializeBinaryFromReader(message: MultiUserStarResponse, reader: jspb.BinaryReader): MultiUserStarResponse;
}

export namespace MultiUserStarResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    userStarsList: Array<proto_clarifai_api_resources_pb.UserStar.AsObject>,
  }
}

export class DeleteUserStarsRequest extends jspb.Message {
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): DeleteUserStarsRequest;
  clearUserIdsList(): DeleteUserStarsRequest;
  addUserIds(value: string, index?: number): DeleteUserStarsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserStarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserStarsRequest): DeleteUserStarsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserStarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserStarsRequest;
  static deserializeBinaryFromReader(message: DeleteUserStarsRequest, reader: jspb.BinaryReader): DeleteUserStarsRequest;
}

export namespace DeleteUserStarsRequest {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class DeleteUserStarsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): DeleteUserStarsResponse;
  hasStatus(): boolean;
  clearStatus(): DeleteUserStarsResponse;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): DeleteUserStarsResponse;
  clearUserIdsList(): DeleteUserStarsResponse;
  addUserIds(value: string, index?: number): DeleteUserStarsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserStarsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserStarsResponse): DeleteUserStarsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserStarsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserStarsResponse;
  static deserializeBinaryFromReader(message: DeleteUserStarsResponse, reader: jspb.BinaryReader): DeleteUserStarsResponse;
}

export namespace DeleteUserStarsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    userIdsList: Array<string>,
  }
}

export class PostAppStarsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAppStarsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostAppStarsRequest;

  getAppStarsList(): Array<proto_clarifai_api_resources_pb.AppStar>;
  setAppStarsList(value: Array<proto_clarifai_api_resources_pb.AppStar>): PostAppStarsRequest;
  clearAppStarsList(): PostAppStarsRequest;
  addAppStars(value?: proto_clarifai_api_resources_pb.AppStar, index?: number): proto_clarifai_api_resources_pb.AppStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAppStarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAppStarsRequest): PostAppStarsRequest.AsObject;
  static serializeBinaryToWriter(message: PostAppStarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAppStarsRequest;
  static deserializeBinaryFromReader(message: PostAppStarsRequest, reader: jspb.BinaryReader): PostAppStarsRequest;
}

export namespace PostAppStarsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    appStarsList: Array<proto_clarifai_api_resources_pb.AppStar.AsObject>,
  }
}

export class MultiAppStarResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAppStarResponse;
  hasStatus(): boolean;
  clearStatus(): MultiAppStarResponse;

  getAppStarsList(): Array<proto_clarifai_api_resources_pb.AppStar>;
  setAppStarsList(value: Array<proto_clarifai_api_resources_pb.AppStar>): MultiAppStarResponse;
  clearAppStarsList(): MultiAppStarResponse;
  addAppStars(value?: proto_clarifai_api_resources_pb.AppStar, index?: number): proto_clarifai_api_resources_pb.AppStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiAppStarResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiAppStarResponse): MultiAppStarResponse.AsObject;
  static serializeBinaryToWriter(message: MultiAppStarResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiAppStarResponse;
  static deserializeBinaryFromReader(message: MultiAppStarResponse, reader: jspb.BinaryReader): MultiAppStarResponse;
}

export namespace MultiAppStarResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    appStarsList: Array<proto_clarifai_api_resources_pb.AppStar.AsObject>,
  }
}

export class DeleteAppStarsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAppStarsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteAppStarsRequest;

  getAppIdsList(): Array<string>;
  setAppIdsList(value: Array<string>): DeleteAppStarsRequest;
  clearAppIdsList(): DeleteAppStarsRequest;
  addAppIds(value: string, index?: number): DeleteAppStarsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAppStarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAppStarsRequest): DeleteAppStarsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAppStarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAppStarsRequest;
  static deserializeBinaryFromReader(message: DeleteAppStarsRequest, reader: jspb.BinaryReader): DeleteAppStarsRequest;
}

export namespace DeleteAppStarsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    appIdsList: Array<string>,
  }
}

export class DeleteAppStarsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): DeleteAppStarsResponse;
  hasStatus(): boolean;
  clearStatus(): DeleteAppStarsResponse;

  getAppIdsList(): Array<string>;
  setAppIdsList(value: Array<string>): DeleteAppStarsResponse;
  clearAppIdsList(): DeleteAppStarsResponse;
  addAppIds(value: string, index?: number): DeleteAppStarsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAppStarsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAppStarsResponse): DeleteAppStarsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAppStarsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAppStarsResponse;
  static deserializeBinaryFromReader(message: DeleteAppStarsResponse, reader: jspb.BinaryReader): DeleteAppStarsResponse;
}

export namespace DeleteAppStarsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    appIdsList: Array<string>,
  }
}

export class PostWorkflowStarsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowStarsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostWorkflowStarsRequest;

  getWorkflowStarsList(): Array<proto_clarifai_api_resources_pb.WorkflowStar>;
  setWorkflowStarsList(value: Array<proto_clarifai_api_resources_pb.WorkflowStar>): PostWorkflowStarsRequest;
  clearWorkflowStarsList(): PostWorkflowStarsRequest;
  addWorkflowStars(value?: proto_clarifai_api_resources_pb.WorkflowStar, index?: number): proto_clarifai_api_resources_pb.WorkflowStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWorkflowStarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostWorkflowStarsRequest): PostWorkflowStarsRequest.AsObject;
  static serializeBinaryToWriter(message: PostWorkflowStarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWorkflowStarsRequest;
  static deserializeBinaryFromReader(message: PostWorkflowStarsRequest, reader: jspb.BinaryReader): PostWorkflowStarsRequest;
}

export namespace PostWorkflowStarsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowStarsList: Array<proto_clarifai_api_resources_pb.WorkflowStar.AsObject>,
  }
}

export class MultiWorkflowStarResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWorkflowStarResponse;
  hasStatus(): boolean;
  clearStatus(): MultiWorkflowStarResponse;

  getWorkflowStarsList(): Array<proto_clarifai_api_resources_pb.WorkflowStar>;
  setWorkflowStarsList(value: Array<proto_clarifai_api_resources_pb.WorkflowStar>): MultiWorkflowStarResponse;
  clearWorkflowStarsList(): MultiWorkflowStarResponse;
  addWorkflowStars(value?: proto_clarifai_api_resources_pb.WorkflowStar, index?: number): proto_clarifai_api_resources_pb.WorkflowStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiWorkflowStarResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiWorkflowStarResponse): MultiWorkflowStarResponse.AsObject;
  static serializeBinaryToWriter(message: MultiWorkflowStarResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiWorkflowStarResponse;
  static deserializeBinaryFromReader(message: MultiWorkflowStarResponse, reader: jspb.BinaryReader): MultiWorkflowStarResponse;
}

export namespace MultiWorkflowStarResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflowStarsList: Array<proto_clarifai_api_resources_pb.WorkflowStar.AsObject>,
  }
}

export class DeleteWorkflowStarsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWorkflowStarsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteWorkflowStarsRequest;

  getWorkflowIdsList(): Array<string>;
  setWorkflowIdsList(value: Array<string>): DeleteWorkflowStarsRequest;
  clearWorkflowIdsList(): DeleteWorkflowStarsRequest;
  addWorkflowIds(value: string, index?: number): DeleteWorkflowStarsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowStarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowStarsRequest): DeleteWorkflowStarsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkflowStarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowStarsRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowStarsRequest, reader: jspb.BinaryReader): DeleteWorkflowStarsRequest;
}

export namespace DeleteWorkflowStarsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    workflowIdsList: Array<string>,
  }
}

export class DeleteWorkflowStarsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): DeleteWorkflowStarsResponse;
  hasStatus(): boolean;
  clearStatus(): DeleteWorkflowStarsResponse;

  getWorkflowIdsList(): Array<string>;
  setWorkflowIdsList(value: Array<string>): DeleteWorkflowStarsResponse;
  clearWorkflowIdsList(): DeleteWorkflowStarsResponse;
  addWorkflowIds(value: string, index?: number): DeleteWorkflowStarsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowStarsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowStarsResponse): DeleteWorkflowStarsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkflowStarsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowStarsResponse;
  static deserializeBinaryFromReader(message: DeleteWorkflowStarsResponse, reader: jspb.BinaryReader): DeleteWorkflowStarsResponse;
}

export namespace DeleteWorkflowStarsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    workflowIdsList: Array<string>,
  }
}

export class ListWebNotificationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListWebNotificationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListWebNotificationsRequest;

  getUnreadOnly(): boolean;
  setUnreadOnly(value: boolean): ListWebNotificationsRequest;

  getPage(): number;
  setPage(value: number): ListWebNotificationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListWebNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebNotificationsRequest): ListWebNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebNotificationsRequest;
  static deserializeBinaryFromReader(message: ListWebNotificationsRequest, reader: jspb.BinaryReader): ListWebNotificationsRequest;
}

export namespace ListWebNotificationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    unreadOnly: boolean,
    page: number,
    perPage: number,
  }
}

export class GetWebNotificationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetWebNotificationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetWebNotificationRequest;

  getNotificationId(): string;
  setNotificationId(value: string): GetWebNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebNotificationRequest): GetWebNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebNotificationRequest;
  static deserializeBinaryFromReader(message: GetWebNotificationRequest, reader: jspb.BinaryReader): GetWebNotificationRequest;
}

export namespace GetWebNotificationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    notificationId: string,
  }
}

export class DeleteWebNotificationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWebNotificationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteWebNotificationsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteWebNotificationsRequest;
  clearIdsList(): DeleteWebNotificationsRequest;
  addIds(value: string, index?: number): DeleteWebNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebNotificationsRequest): DeleteWebNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebNotificationsRequest;
  static deserializeBinaryFromReader(message: DeleteWebNotificationsRequest, reader: jspb.BinaryReader): DeleteWebNotificationsRequest;
}

export namespace DeleteWebNotificationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class PatchWebNotificationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchWebNotificationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchWebNotificationsRequest;

  getNotificationsList(): Array<proto_clarifai_api_resources_pb.PatchWebNotification>;
  setNotificationsList(value: Array<proto_clarifai_api_resources_pb.PatchWebNotification>): PatchWebNotificationsRequest;
  clearNotificationsList(): PatchWebNotificationsRequest;
  addNotifications(value?: proto_clarifai_api_resources_pb.PatchWebNotification, index?: number): proto_clarifai_api_resources_pb.PatchWebNotification;

  getAction(): string;
  setAction(value: string): PatchWebNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchWebNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchWebNotificationsRequest): PatchWebNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: PatchWebNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchWebNotificationsRequest;
  static deserializeBinaryFromReader(message: PatchWebNotificationsRequest, reader: jspb.BinaryReader): PatchWebNotificationsRequest;
}

export namespace PatchWebNotificationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    notificationsList: Array<proto_clarifai_api_resources_pb.PatchWebNotification.AsObject>,
    action: string,
  }
}

export class MultiWebNotificationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWebNotificationResponse;
  hasStatus(): boolean;
  clearStatus(): MultiWebNotificationResponse;

  getNotificationsList(): Array<proto_clarifai_api_resources_pb.WebNotification>;
  setNotificationsList(value: Array<proto_clarifai_api_resources_pb.WebNotification>): MultiWebNotificationResponse;
  clearNotificationsList(): MultiWebNotificationResponse;
  addNotifications(value?: proto_clarifai_api_resources_pb.WebNotification, index?: number): proto_clarifai_api_resources_pb.WebNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiWebNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiWebNotificationResponse): MultiWebNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: MultiWebNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiWebNotificationResponse;
  static deserializeBinaryFromReader(message: MultiWebNotificationResponse, reader: jspb.BinaryReader): MultiWebNotificationResponse;
}

export namespace MultiWebNotificationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    notificationsList: Array<proto_clarifai_api_resources_pb.WebNotification.AsObject>,
  }
}

export class SingleWebNotificationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleWebNotificationResponse;
  hasStatus(): boolean;
  clearStatus(): SingleWebNotificationResponse;

  getNotification(): proto_clarifai_api_resources_pb.WebNotification | undefined;
  setNotification(value?: proto_clarifai_api_resources_pb.WebNotification): SingleWebNotificationResponse;
  hasNotification(): boolean;
  clearNotification(): SingleWebNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleWebNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleWebNotificationResponse): SingleWebNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: SingleWebNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleWebNotificationResponse;
  static deserializeBinaryFromReader(message: SingleWebNotificationResponse, reader: jspb.BinaryReader): SingleWebNotificationResponse;
}

export namespace SingleWebNotificationResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    notification?: proto_clarifai_api_resources_pb.WebNotification.AsObject,
  }
}

export class GetModuleRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModuleRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetModuleRequest;

  getModuleId(): string;
  setModuleId(value: string): GetModuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleRequest): GetModuleRequest.AsObject;
  static serializeBinaryToWriter(message: GetModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleRequest;
  static deserializeBinaryFromReader(message: GetModuleRequest, reader: jspb.BinaryReader): GetModuleRequest;
}

export namespace GetModuleRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    moduleId: string,
  }
}

export class ListModulesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModulesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModulesRequest;

  getPage(): number;
  setPage(value: number): ListModulesRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModulesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModulesRequest): ListModulesRequest.AsObject;
  static serializeBinaryToWriter(message: ListModulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModulesRequest;
  static deserializeBinaryFromReader(message: ListModulesRequest, reader: jspb.BinaryReader): ListModulesRequest;
}

export namespace ListModulesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class PostModulesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModulesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModulesRequest;

  getModulesList(): Array<proto_clarifai_api_resources_pb.Module>;
  setModulesList(value: Array<proto_clarifai_api_resources_pb.Module>): PostModulesRequest;
  clearModulesList(): PostModulesRequest;
  addModules(value?: proto_clarifai_api_resources_pb.Module, index?: number): proto_clarifai_api_resources_pb.Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModulesRequest): PostModulesRequest.AsObject;
  static serializeBinaryToWriter(message: PostModulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModulesRequest;
  static deserializeBinaryFromReader(message: PostModulesRequest, reader: jspb.BinaryReader): PostModulesRequest;
}

export namespace PostModulesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modulesList: Array<proto_clarifai_api_resources_pb.Module.AsObject>,
  }
}

export class PatchModulesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModulesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PatchModulesRequest;

  getModulesList(): Array<proto_clarifai_api_resources_pb.Module>;
  setModulesList(value: Array<proto_clarifai_api_resources_pb.Module>): PatchModulesRequest;
  clearModulesList(): PatchModulesRequest;
  addModules(value?: proto_clarifai_api_resources_pb.Module, index?: number): proto_clarifai_api_resources_pb.Module;

  getAction(): string;
  setAction(value: string): PatchModulesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchModulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchModulesRequest): PatchModulesRequest.AsObject;
  static serializeBinaryToWriter(message: PatchModulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchModulesRequest;
  static deserializeBinaryFromReader(message: PatchModulesRequest, reader: jspb.BinaryReader): PatchModulesRequest;
}

export namespace PatchModulesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modulesList: Array<proto_clarifai_api_resources_pb.Module.AsObject>,
    action: string,
  }
}

export class DeleteModulesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModulesRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteModulesRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteModulesRequest;
  clearIdsList(): DeleteModulesRequest;
  addIds(value: string, index?: number): DeleteModulesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModulesRequest): DeleteModulesRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModulesRequest;
  static deserializeBinaryFromReader(message: DeleteModulesRequest, reader: jspb.BinaryReader): DeleteModulesRequest;
}

export namespace DeleteModulesRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class SingleModuleResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModuleResponse;
  hasStatus(): boolean;
  clearStatus(): SingleModuleResponse;

  getModule(): proto_clarifai_api_resources_pb.Module | undefined;
  setModule(value?: proto_clarifai_api_resources_pb.Module): SingleModuleResponse;
  hasModule(): boolean;
  clearModule(): SingleModuleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleModuleResponse): SingleModuleResponse.AsObject;
  static serializeBinaryToWriter(message: SingleModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleModuleResponse;
  static deserializeBinaryFromReader(message: SingleModuleResponse, reader: jspb.BinaryReader): SingleModuleResponse;
}

export namespace SingleModuleResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    module?: proto_clarifai_api_resources_pb.Module.AsObject,
  }
}

export class MultiModuleResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModuleResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModuleResponse;

  getModulesList(): Array<proto_clarifai_api_resources_pb.Module>;
  setModulesList(value: Array<proto_clarifai_api_resources_pb.Module>): MultiModuleResponse;
  clearModulesList(): MultiModuleResponse;
  addModules(value?: proto_clarifai_api_resources_pb.Module, index?: number): proto_clarifai_api_resources_pb.Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModuleResponse): MultiModuleResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModuleResponse;
  static deserializeBinaryFromReader(message: MultiModuleResponse, reader: jspb.BinaryReader): MultiModuleResponse;
}

export namespace MultiModuleResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    modulesList: Array<proto_clarifai_api_resources_pb.Module.AsObject>,
  }
}

export class GetModuleVersionRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModuleVersionRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetModuleVersionRequest;

  getModuleId(): string;
  setModuleId(value: string): GetModuleVersionRequest;

  getModuleVersionId(): string;
  setModuleVersionId(value: string): GetModuleVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleVersionRequest): GetModuleVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetModuleVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleVersionRequest;
  static deserializeBinaryFromReader(message: GetModuleVersionRequest, reader: jspb.BinaryReader): GetModuleVersionRequest;
}

export namespace GetModuleVersionRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    moduleId: string,
    moduleVersionId: string,
  }
}

export class ListModuleVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModuleVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListModuleVersionsRequest;

  getModuleId(): string;
  setModuleId(value: string): ListModuleVersionsRequest;

  getPage(): number;
  setPage(value: number): ListModuleVersionsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListModuleVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModuleVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModuleVersionsRequest): ListModuleVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModuleVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModuleVersionsRequest;
  static deserializeBinaryFromReader(message: ListModuleVersionsRequest, reader: jspb.BinaryReader): ListModuleVersionsRequest;
}

export namespace ListModuleVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    moduleId: string,
    page: number,
    perPage: number,
  }
}

export class PostModuleVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModuleVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostModuleVersionsRequest;

  getModuleId(): string;
  setModuleId(value: string): PostModuleVersionsRequest;

  getModuleVersionsList(): Array<proto_clarifai_api_resources_pb.ModuleVersion>;
  setModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.ModuleVersion>): PostModuleVersionsRequest;
  clearModuleVersionsList(): PostModuleVersionsRequest;
  addModuleVersions(value?: proto_clarifai_api_resources_pb.ModuleVersion, index?: number): proto_clarifai_api_resources_pb.ModuleVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostModuleVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostModuleVersionsRequest): PostModuleVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: PostModuleVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostModuleVersionsRequest;
  static deserializeBinaryFromReader(message: PostModuleVersionsRequest, reader: jspb.BinaryReader): PostModuleVersionsRequest;
}

export namespace PostModuleVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    moduleId: string,
    moduleVersionsList: Array<proto_clarifai_api_resources_pb.ModuleVersion.AsObject>,
  }
}

export class DeleteModuleVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModuleVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteModuleVersionsRequest;

  getModuleId(): string;
  setModuleId(value: string): DeleteModuleVersionsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteModuleVersionsRequest;
  clearIdsList(): DeleteModuleVersionsRequest;
  addIds(value: string, index?: number): DeleteModuleVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModuleVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModuleVersionsRequest): DeleteModuleVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModuleVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModuleVersionsRequest;
  static deserializeBinaryFromReader(message: DeleteModuleVersionsRequest, reader: jspb.BinaryReader): DeleteModuleVersionsRequest;
}

export namespace DeleteModuleVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    moduleId: string,
    idsList: Array<string>,
  }
}

export class SingleModuleVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModuleVersionResponse;
  hasStatus(): boolean;
  clearStatus(): SingleModuleVersionResponse;

  getModuleVersion(): proto_clarifai_api_resources_pb.ModuleVersion | undefined;
  setModuleVersion(value?: proto_clarifai_api_resources_pb.ModuleVersion): SingleModuleVersionResponse;
  hasModuleVersion(): boolean;
  clearModuleVersion(): SingleModuleVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleModuleVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleModuleVersionResponse): SingleModuleVersionResponse.AsObject;
  static serializeBinaryToWriter(message: SingleModuleVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleModuleVersionResponse;
  static deserializeBinaryFromReader(message: SingleModuleVersionResponse, reader: jspb.BinaryReader): SingleModuleVersionResponse;
}

export namespace SingleModuleVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    moduleVersion?: proto_clarifai_api_resources_pb.ModuleVersion.AsObject,
  }
}

export class MultiModuleVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModuleVersionResponse;
  hasStatus(): boolean;
  clearStatus(): MultiModuleVersionResponse;

  getModuleVersionsList(): Array<proto_clarifai_api_resources_pb.ModuleVersion>;
  setModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.ModuleVersion>): MultiModuleVersionResponse;
  clearModuleVersionsList(): MultiModuleVersionResponse;
  addModuleVersions(value?: proto_clarifai_api_resources_pb.ModuleVersion, index?: number): proto_clarifai_api_resources_pb.ModuleVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiModuleVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiModuleVersionResponse): MultiModuleVersionResponse.AsObject;
  static serializeBinaryToWriter(message: MultiModuleVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiModuleVersionResponse;
  static deserializeBinaryFromReader(message: MultiModuleVersionResponse, reader: jspb.BinaryReader): MultiModuleVersionResponse;
}

export namespace MultiModuleVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    moduleVersionsList: Array<proto_clarifai_api_resources_pb.ModuleVersion.AsObject>,
  }
}

export class GetInstalledModuleVersionRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInstalledModuleVersionRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetInstalledModuleVersionRequest;

  getInstalledModuleVersionId(): string;
  setInstalledModuleVersionId(value: string): GetInstalledModuleVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstalledModuleVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstalledModuleVersionRequest): GetInstalledModuleVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstalledModuleVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstalledModuleVersionRequest;
  static deserializeBinaryFromReader(message: GetInstalledModuleVersionRequest, reader: jspb.BinaryReader): GetInstalledModuleVersionRequest;
}

export namespace GetInstalledModuleVersionRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    installedModuleVersionId: string,
  }
}

export class ListInstalledModuleVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListInstalledModuleVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListInstalledModuleVersionsRequest;

  getPage(): number;
  setPage(value: number): ListInstalledModuleVersionsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListInstalledModuleVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstalledModuleVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstalledModuleVersionsRequest): ListInstalledModuleVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstalledModuleVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstalledModuleVersionsRequest;
  static deserializeBinaryFromReader(message: ListInstalledModuleVersionsRequest, reader: jspb.BinaryReader): ListInstalledModuleVersionsRequest;
}

export namespace ListInstalledModuleVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class PostInstalledModuleVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInstalledModuleVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostInstalledModuleVersionsRequest;

  getInstalledModuleVersionsList(): Array<proto_clarifai_api_resources_pb.InstalledModuleVersion>;
  setInstalledModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.InstalledModuleVersion>): PostInstalledModuleVersionsRequest;
  clearInstalledModuleVersionsList(): PostInstalledModuleVersionsRequest;
  addInstalledModuleVersions(value?: proto_clarifai_api_resources_pb.InstalledModuleVersion, index?: number): proto_clarifai_api_resources_pb.InstalledModuleVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInstalledModuleVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostInstalledModuleVersionsRequest): PostInstalledModuleVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: PostInstalledModuleVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInstalledModuleVersionsRequest;
  static deserializeBinaryFromReader(message: PostInstalledModuleVersionsRequest, reader: jspb.BinaryReader): PostInstalledModuleVersionsRequest;
}

export namespace PostInstalledModuleVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    installedModuleVersionsList: Array<proto_clarifai_api_resources_pb.InstalledModuleVersion.AsObject>,
  }
}

export class PostInstalledModuleVersionsKeyRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInstalledModuleVersionsKeyRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostInstalledModuleVersionsKeyRequest;

  getInstalledModuleVersionId(): string;
  setInstalledModuleVersionId(value: string): PostInstalledModuleVersionsKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInstalledModuleVersionsKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostInstalledModuleVersionsKeyRequest): PostInstalledModuleVersionsKeyRequest.AsObject;
  static serializeBinaryToWriter(message: PostInstalledModuleVersionsKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInstalledModuleVersionsKeyRequest;
  static deserializeBinaryFromReader(message: PostInstalledModuleVersionsKeyRequest, reader: jspb.BinaryReader): PostInstalledModuleVersionsKeyRequest;
}

export namespace PostInstalledModuleVersionsKeyRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    installedModuleVersionId: string,
  }
}

export class DeleteInstalledModuleVersionsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteInstalledModuleVersionsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteInstalledModuleVersionsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteInstalledModuleVersionsRequest;
  clearIdsList(): DeleteInstalledModuleVersionsRequest;
  addIds(value: string, index?: number): DeleteInstalledModuleVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInstalledModuleVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInstalledModuleVersionsRequest): DeleteInstalledModuleVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInstalledModuleVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInstalledModuleVersionsRequest;
  static deserializeBinaryFromReader(message: DeleteInstalledModuleVersionsRequest, reader: jspb.BinaryReader): DeleteInstalledModuleVersionsRequest;
}

export namespace DeleteInstalledModuleVersionsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class SingleInstalledModuleVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInstalledModuleVersionResponse;
  hasStatus(): boolean;
  clearStatus(): SingleInstalledModuleVersionResponse;

  getInstalledModuleVersion(): proto_clarifai_api_resources_pb.InstalledModuleVersion | undefined;
  setInstalledModuleVersion(value?: proto_clarifai_api_resources_pb.InstalledModuleVersion): SingleInstalledModuleVersionResponse;
  hasInstalledModuleVersion(): boolean;
  clearInstalledModuleVersion(): SingleInstalledModuleVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleInstalledModuleVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleInstalledModuleVersionResponse): SingleInstalledModuleVersionResponse.AsObject;
  static serializeBinaryToWriter(message: SingleInstalledModuleVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleInstalledModuleVersionResponse;
  static deserializeBinaryFromReader(message: SingleInstalledModuleVersionResponse, reader: jspb.BinaryReader): SingleInstalledModuleVersionResponse;
}

export namespace SingleInstalledModuleVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    installedModuleVersion?: proto_clarifai_api_resources_pb.InstalledModuleVersion.AsObject,
  }
}

export class MultiInstalledModuleVersionResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInstalledModuleVersionResponse;
  hasStatus(): boolean;
  clearStatus(): MultiInstalledModuleVersionResponse;

  getInstalledModuleVersionsList(): Array<proto_clarifai_api_resources_pb.InstalledModuleVersion>;
  setInstalledModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.InstalledModuleVersion>): MultiInstalledModuleVersionResponse;
  clearInstalledModuleVersionsList(): MultiInstalledModuleVersionResponse;
  addInstalledModuleVersions(value?: proto_clarifai_api_resources_pb.InstalledModuleVersion, index?: number): proto_clarifai_api_resources_pb.InstalledModuleVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiInstalledModuleVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiInstalledModuleVersionResponse): MultiInstalledModuleVersionResponse.AsObject;
  static serializeBinaryToWriter(message: MultiInstalledModuleVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiInstalledModuleVersionResponse;
  static deserializeBinaryFromReader(message: MultiInstalledModuleVersionResponse, reader: jspb.BinaryReader): MultiInstalledModuleVersionResponse;
}

export namespace MultiInstalledModuleVersionResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    installedModuleVersionsList: Array<proto_clarifai_api_resources_pb.InstalledModuleVersion.AsObject>,
  }
}

export class ListNextTaskAssignmentsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListNextTaskAssignmentsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListNextTaskAssignmentsRequest;

  getTaskId(): string;
  setTaskId(value: string): ListNextTaskAssignmentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNextTaskAssignmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNextTaskAssignmentsRequest): ListNextTaskAssignmentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNextTaskAssignmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNextTaskAssignmentsRequest;
  static deserializeBinaryFromReader(message: ListNextTaskAssignmentsRequest, reader: jspb.BinaryReader): ListNextTaskAssignmentsRequest;
}

export namespace ListNextTaskAssignmentsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    taskId: string,
  }
}

export class PostBulkOperationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostBulkOperationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostBulkOperationsRequest;

  getBulkOperationsList(): Array<proto_clarifai_api_resources_pb.BulkOperation>;
  setBulkOperationsList(value: Array<proto_clarifai_api_resources_pb.BulkOperation>): PostBulkOperationsRequest;
  clearBulkOperationsList(): PostBulkOperationsRequest;
  addBulkOperations(value?: proto_clarifai_api_resources_pb.BulkOperation, index?: number): proto_clarifai_api_resources_pb.BulkOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostBulkOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostBulkOperationsRequest): PostBulkOperationsRequest.AsObject;
  static serializeBinaryToWriter(message: PostBulkOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostBulkOperationsRequest;
  static deserializeBinaryFromReader(message: PostBulkOperationsRequest, reader: jspb.BinaryReader): PostBulkOperationsRequest;
}

export namespace PostBulkOperationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    bulkOperationsList: Array<proto_clarifai_api_resources_pb.BulkOperation.AsObject>,
  }
}

export class ListBulkOperationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListBulkOperationsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListBulkOperationsRequest;

  getPage(): number;
  setPage(value: number): ListBulkOperationsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListBulkOperationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBulkOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBulkOperationsRequest): ListBulkOperationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBulkOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBulkOperationsRequest;
  static deserializeBinaryFromReader(message: ListBulkOperationsRequest, reader: jspb.BinaryReader): ListBulkOperationsRequest;
}

export namespace ListBulkOperationsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class GetBulkOperationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetBulkOperationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetBulkOperationRequest;

  getId(): string;
  setId(value: string): GetBulkOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBulkOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBulkOperationRequest): GetBulkOperationRequest.AsObject;
  static serializeBinaryToWriter(message: GetBulkOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBulkOperationRequest;
  static deserializeBinaryFromReader(message: GetBulkOperationRequest, reader: jspb.BinaryReader): GetBulkOperationRequest;
}

export namespace GetBulkOperationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class CancelBulkOperationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): CancelBulkOperationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): CancelBulkOperationRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CancelBulkOperationRequest;
  clearIdsList(): CancelBulkOperationRequest;
  addIds(value: string, index?: number): CancelBulkOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelBulkOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelBulkOperationRequest): CancelBulkOperationRequest.AsObject;
  static serializeBinaryToWriter(message: CancelBulkOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelBulkOperationRequest;
  static deserializeBinaryFromReader(message: CancelBulkOperationRequest, reader: jspb.BinaryReader): CancelBulkOperationRequest;
}

export namespace CancelBulkOperationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class DeleteBulkOperationRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteBulkOperationRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteBulkOperationRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteBulkOperationRequest;
  clearIdsList(): DeleteBulkOperationRequest;
  addIds(value: string, index?: number): DeleteBulkOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBulkOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBulkOperationRequest): DeleteBulkOperationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBulkOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBulkOperationRequest;
  static deserializeBinaryFromReader(message: DeleteBulkOperationRequest, reader: jspb.BinaryReader): DeleteBulkOperationRequest;
}

export namespace DeleteBulkOperationRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class SingleBulkOperationsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleBulkOperationsResponse;
  hasStatus(): boolean;
  clearStatus(): SingleBulkOperationsResponse;

  getBulkOperation(): proto_clarifai_api_resources_pb.BulkOperation | undefined;
  setBulkOperation(value?: proto_clarifai_api_resources_pb.BulkOperation): SingleBulkOperationsResponse;
  hasBulkOperation(): boolean;
  clearBulkOperation(): SingleBulkOperationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleBulkOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleBulkOperationsResponse): SingleBulkOperationsResponse.AsObject;
  static serializeBinaryToWriter(message: SingleBulkOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleBulkOperationsResponse;
  static deserializeBinaryFromReader(message: SingleBulkOperationsResponse, reader: jspb.BinaryReader): SingleBulkOperationsResponse;
}

export namespace SingleBulkOperationsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    bulkOperation?: proto_clarifai_api_resources_pb.BulkOperation.AsObject,
  }
}

export class MultiBulkOperationsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiBulkOperationsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiBulkOperationsResponse;

  getBulkOperationList(): Array<proto_clarifai_api_resources_pb.BulkOperation>;
  setBulkOperationList(value: Array<proto_clarifai_api_resources_pb.BulkOperation>): MultiBulkOperationsResponse;
  clearBulkOperationList(): MultiBulkOperationsResponse;
  addBulkOperation(value?: proto_clarifai_api_resources_pb.BulkOperation, index?: number): proto_clarifai_api_resources_pb.BulkOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiBulkOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiBulkOperationsResponse): MultiBulkOperationsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiBulkOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiBulkOperationsResponse;
  static deserializeBinaryFromReader(message: MultiBulkOperationsResponse, reader: jspb.BinaryReader): MultiBulkOperationsResponse;
}

export namespace MultiBulkOperationsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    bulkOperationList: Array<proto_clarifai_api_resources_pb.BulkOperation.AsObject>,
  }
}

export class PutTaskAssignmentsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PutTaskAssignmentsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PutTaskAssignmentsRequest;

  getTaskId(): string;
  setTaskId(value: string): PutTaskAssignmentsRequest;

  getInputId(): string;
  setInputId(value: string): PutTaskAssignmentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutTaskAssignmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutTaskAssignmentsRequest): PutTaskAssignmentsRequest.AsObject;
  static serializeBinaryToWriter(message: PutTaskAssignmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutTaskAssignmentsRequest;
  static deserializeBinaryFromReader(message: PutTaskAssignmentsRequest, reader: jspb.BinaryReader): PutTaskAssignmentsRequest;
}

export namespace PutTaskAssignmentsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    taskId: string,
    inputId: string,
  }
}

export class PostWaitlistEmailsRequest extends jspb.Message {
  getFeature(): string;
  setFeature(value: string): PostWaitlistEmailsRequest;

  getWaitlistEmailsList(): Array<proto_clarifai_api_resources_pb.WaitlistEmail>;
  setWaitlistEmailsList(value: Array<proto_clarifai_api_resources_pb.WaitlistEmail>): PostWaitlistEmailsRequest;
  clearWaitlistEmailsList(): PostWaitlistEmailsRequest;
  addWaitlistEmails(value?: proto_clarifai_api_resources_pb.WaitlistEmail, index?: number): proto_clarifai_api_resources_pb.WaitlistEmail;

  getCaptchaResponseToken(): string;
  setCaptchaResponseToken(value: string): PostWaitlistEmailsRequest;

  getCaptchaResponseTokenV3(): string;
  setCaptchaResponseTokenV3(value: string): PostWaitlistEmailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostWaitlistEmailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostWaitlistEmailsRequest): PostWaitlistEmailsRequest.AsObject;
  static serializeBinaryToWriter(message: PostWaitlistEmailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostWaitlistEmailsRequest;
  static deserializeBinaryFromReader(message: PostWaitlistEmailsRequest, reader: jspb.BinaryReader): PostWaitlistEmailsRequest;
}

export namespace PostWaitlistEmailsRequest {
  export type AsObject = {
    feature: string,
    waitlistEmailsList: Array<proto_clarifai_api_resources_pb.WaitlistEmail.AsObject>,
    captchaResponseToken: string,
    captchaResponseTokenV3: string,
  }
}

export class MultiWaitlistEmailResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWaitlistEmailResponse;
  hasStatus(): boolean;
  clearStatus(): MultiWaitlistEmailResponse;

  getWaitlistEmailsList(): Array<proto_clarifai_api_resources_pb.WaitlistEmail>;
  setWaitlistEmailsList(value: Array<proto_clarifai_api_resources_pb.WaitlistEmail>): MultiWaitlistEmailResponse;
  clearWaitlistEmailsList(): MultiWaitlistEmailResponse;
  addWaitlistEmails(value?: proto_clarifai_api_resources_pb.WaitlistEmail, index?: number): proto_clarifai_api_resources_pb.WaitlistEmail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiWaitlistEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiWaitlistEmailResponse): MultiWaitlistEmailResponse.AsObject;
  static serializeBinaryToWriter(message: MultiWaitlistEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiWaitlistEmailResponse;
  static deserializeBinaryFromReader(message: MultiWaitlistEmailResponse, reader: jspb.BinaryReader): MultiWaitlistEmailResponse;
}

export namespace MultiWaitlistEmailResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    waitlistEmailsList: Array<proto_clarifai_api_resources_pb.WaitlistEmail.AsObject>,
  }
}

export class GetSampledPredictMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetSampledPredictMetricsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetSampledPredictMetricsRequest;

  getModelId(): string;
  setModelId(value: string): GetSampledPredictMetricsRequest;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): GetSampledPredictMetricsRequest;
  hasStartDate(): boolean;
  clearStartDate(): GetSampledPredictMetricsRequest;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): GetSampledPredictMetricsRequest;
  hasEndDate(): boolean;
  clearEndDate(): GetSampledPredictMetricsRequest;

  getMinScore(): number;
  setMinScore(value: number): GetSampledPredictMetricsRequest;

  getMaxScore(): number;
  setMaxScore(value: number): GetSampledPredictMetricsRequest;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): GetSampledPredictMetricsRequest;
  hasPagination(): boolean;
  clearPagination(): GetSampledPredictMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSampledPredictMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSampledPredictMetricsRequest): GetSampledPredictMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSampledPredictMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSampledPredictMetricsRequest;
  static deserializeBinaryFromReader(message: GetSampledPredictMetricsRequest, reader: jspb.BinaryReader): GetSampledPredictMetricsRequest;
}

export namespace GetSampledPredictMetricsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    modelId: string,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    minScore: number,
    maxScore: number,
    pagination?: Pagination.AsObject,
  }
}

export class MultiSampledPredictMetricsResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiSampledPredictMetricsResponse;
  hasStatus(): boolean;
  clearStatus(): MultiSampledPredictMetricsResponse;

  getMetricsList(): Array<SamplePredictMetric>;
  setMetricsList(value: Array<SamplePredictMetric>): MultiSampledPredictMetricsResponse;
  clearMetricsList(): MultiSampledPredictMetricsResponse;
  addMetrics(value?: SamplePredictMetric, index?: number): SamplePredictMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSampledPredictMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSampledPredictMetricsResponse): MultiSampledPredictMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: MultiSampledPredictMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSampledPredictMetricsResponse;
  static deserializeBinaryFromReader(message: MultiSampledPredictMetricsResponse, reader: jspb.BinaryReader): MultiSampledPredictMetricsResponse;
}

export namespace MultiSampledPredictMetricsResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    metricsList: Array<SamplePredictMetric.AsObject>,
  }
}

export class SamplePredictMetric extends jspb.Message {
  getConceptId(): string;
  setConceptId(value: string): SamplePredictMetric;

  getConceptName(): string;
  setConceptName(value: string): SamplePredictMetric;

  getCount(): number;
  setCount(value: number): SamplePredictMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SamplePredictMetric.AsObject;
  static toObject(includeInstance: boolean, msg: SamplePredictMetric): SamplePredictMetric.AsObject;
  static serializeBinaryToWriter(message: SamplePredictMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SamplePredictMetric;
  static deserializeBinaryFromReader(message: SamplePredictMetric, reader: jspb.BinaryReader): SamplePredictMetric;
}

export namespace SamplePredictMetric {
  export type AsObject = {
    conceptId: string,
    conceptName: string,
    count: number,
  }
}

export class PostInputsAddJobsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsAddJobsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostInputsAddJobsRequest;

  getInputsAddJobsList(): Array<proto_clarifai_api_resources_pb.InputsAddJob>;
  setInputsAddJobsList(value: Array<proto_clarifai_api_resources_pb.InputsAddJob>): PostInputsAddJobsRequest;
  clearInputsAddJobsList(): PostInputsAddJobsRequest;
  addInputsAddJobs(value?: proto_clarifai_api_resources_pb.InputsAddJob, index?: number): proto_clarifai_api_resources_pb.InputsAddJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostInputsAddJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostInputsAddJobsRequest): PostInputsAddJobsRequest.AsObject;
  static serializeBinaryToWriter(message: PostInputsAddJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostInputsAddJobsRequest;
  static deserializeBinaryFromReader(message: PostInputsAddJobsRequest, reader: jspb.BinaryReader): PostInputsAddJobsRequest;
}

export namespace PostInputsAddJobsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    inputsAddJobsList: Array<proto_clarifai_api_resources_pb.InputsAddJob.AsObject>,
  }
}

export class ListInputsAddJobsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListInputsAddJobsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListInputsAddJobsRequest;

  getPage(): number;
  setPage(value: number): ListInputsAddJobsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListInputsAddJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInputsAddJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInputsAddJobsRequest): ListInputsAddJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInputsAddJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInputsAddJobsRequest;
  static deserializeBinaryFromReader(message: ListInputsAddJobsRequest, reader: jspb.BinaryReader): ListInputsAddJobsRequest;
}

export namespace ListInputsAddJobsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class GetInputsAddJobRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputsAddJobRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetInputsAddJobRequest;

  getId(): string;
  setId(value: string): GetInputsAddJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInputsAddJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInputsAddJobRequest): GetInputsAddJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetInputsAddJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInputsAddJobRequest;
  static deserializeBinaryFromReader(message: GetInputsAddJobRequest, reader: jspb.BinaryReader): GetInputsAddJobRequest;
}

export namespace GetInputsAddJobRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class CancelInputsAddJobRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): CancelInputsAddJobRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): CancelInputsAddJobRequest;

  getId(): string;
  setId(value: string): CancelInputsAddJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelInputsAddJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelInputsAddJobRequest): CancelInputsAddJobRequest.AsObject;
  static serializeBinaryToWriter(message: CancelInputsAddJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelInputsAddJobRequest;
  static deserializeBinaryFromReader(message: CancelInputsAddJobRequest, reader: jspb.BinaryReader): CancelInputsAddJobRequest;
}

export namespace CancelInputsAddJobRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    id: string,
  }
}

export class MultiInputsAddJobResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInputsAddJobResponse;
  hasStatus(): boolean;
  clearStatus(): MultiInputsAddJobResponse;

  getInputsAddJobsList(): Array<proto_clarifai_api_resources_pb.InputsAddJob>;
  setInputsAddJobsList(value: Array<proto_clarifai_api_resources_pb.InputsAddJob>): MultiInputsAddJobResponse;
  clearInputsAddJobsList(): MultiInputsAddJobResponse;
  addInputsAddJobs(value?: proto_clarifai_api_resources_pb.InputsAddJob, index?: number): proto_clarifai_api_resources_pb.InputsAddJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiInputsAddJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiInputsAddJobResponse): MultiInputsAddJobResponse.AsObject;
  static serializeBinaryToWriter(message: MultiInputsAddJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiInputsAddJobResponse;
  static deserializeBinaryFromReader(message: MultiInputsAddJobResponse, reader: jspb.BinaryReader): MultiInputsAddJobResponse;
}

export namespace MultiInputsAddJobResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    inputsAddJobsList: Array<proto_clarifai_api_resources_pb.InputsAddJob.AsObject>,
  }
}

export class SingleInputsAddJobResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInputsAddJobResponse;
  hasStatus(): boolean;
  clearStatus(): SingleInputsAddJobResponse;

  getInputsAddJob(): proto_clarifai_api_resources_pb.InputsAddJob | undefined;
  setInputsAddJob(value?: proto_clarifai_api_resources_pb.InputsAddJob): SingleInputsAddJobResponse;
  hasInputsAddJob(): boolean;
  clearInputsAddJob(): SingleInputsAddJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleInputsAddJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleInputsAddJobResponse): SingleInputsAddJobResponse.AsObject;
  static serializeBinaryToWriter(message: SingleInputsAddJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleInputsAddJobResponse;
  static deserializeBinaryFromReader(message: SingleInputsAddJobResponse, reader: jspb.BinaryReader): SingleInputsAddJobResponse;
}

export namespace SingleInputsAddJobResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    inputsAddJob?: proto_clarifai_api_resources_pb.InputsAddJob.AsObject,
  }
}

export class PostUploadsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostUploadsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PostUploadsRequest;

  getUploadsList(): Array<proto_clarifai_api_resources_pb.Upload>;
  setUploadsList(value: Array<proto_clarifai_api_resources_pb.Upload>): PostUploadsRequest;
  clearUploadsList(): PostUploadsRequest;
  addUploads(value?: proto_clarifai_api_resources_pb.Upload, index?: number): proto_clarifai_api_resources_pb.Upload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostUploadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostUploadsRequest): PostUploadsRequest.AsObject;
  static serializeBinaryToWriter(message: PostUploadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostUploadsRequest;
  static deserializeBinaryFromReader(message: PostUploadsRequest, reader: jspb.BinaryReader): PostUploadsRequest;
}

export namespace PostUploadsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    uploadsList: Array<proto_clarifai_api_resources_pb.Upload.AsObject>,
  }
}

export class DeleteUploadsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteUploadsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): DeleteUploadsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): DeleteUploadsRequest;
  clearIdsList(): DeleteUploadsRequest;
  addIds(value: string, index?: number): DeleteUploadsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUploadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUploadsRequest): DeleteUploadsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUploadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUploadsRequest;
  static deserializeBinaryFromReader(message: DeleteUploadsRequest, reader: jspb.BinaryReader): DeleteUploadsRequest;
}

export namespace DeleteUploadsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    idsList: Array<string>,
  }
}

export class ListUploadsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListUploadsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): ListUploadsRequest;

  getPage(): number;
  setPage(value: number): ListUploadsRequest;

  getPerPage(): number;
  setPerPage(value: number): ListUploadsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUploadsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUploadsRequest): ListUploadsRequest.AsObject;
  static serializeBinaryToWriter(message: ListUploadsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUploadsRequest;
  static deserializeBinaryFromReader(message: ListUploadsRequest, reader: jspb.BinaryReader): ListUploadsRequest;
}

export namespace ListUploadsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    page: number,
    perPage: number,
  }
}

export class GetUploadRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetUploadRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): GetUploadRequest;

  getUploadId(): string;
  setUploadId(value: string): GetUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUploadRequest): GetUploadRequest.AsObject;
  static serializeBinaryToWriter(message: GetUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUploadRequest;
  static deserializeBinaryFromReader(message: GetUploadRequest, reader: jspb.BinaryReader): GetUploadRequest;
}

export namespace GetUploadRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    uploadId: string,
  }
}

export class SingleUploadResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleUploadResponse;
  hasStatus(): boolean;
  clearStatus(): SingleUploadResponse;

  getUpload(): proto_clarifai_api_resources_pb.Upload | undefined;
  setUpload(value?: proto_clarifai_api_resources_pb.Upload): SingleUploadResponse;
  hasUpload(): boolean;
  clearUpload(): SingleUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleUploadResponse): SingleUploadResponse.AsObject;
  static serializeBinaryToWriter(message: SingleUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleUploadResponse;
  static deserializeBinaryFromReader(message: SingleUploadResponse, reader: jspb.BinaryReader): SingleUploadResponse;
}

export namespace SingleUploadResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    upload?: proto_clarifai_api_resources_pb.Upload.AsObject,
  }
}

export class MultiUploadResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiUploadResponse;
  hasStatus(): boolean;
  clearStatus(): MultiUploadResponse;

  getUploadsList(): Array<proto_clarifai_api_resources_pb.Upload>;
  setUploadsList(value: Array<proto_clarifai_api_resources_pb.Upload>): MultiUploadResponse;
  clearUploadsList(): MultiUploadResponse;
  addUploads(value?: proto_clarifai_api_resources_pb.Upload, index?: number): proto_clarifai_api_resources_pb.Upload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiUploadResponse): MultiUploadResponse.AsObject;
  static serializeBinaryToWriter(message: MultiUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiUploadResponse;
  static deserializeBinaryFromReader(message: MultiUploadResponse, reader: jspb.BinaryReader): MultiUploadResponse;
}

export namespace MultiUploadResponse {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    uploadsList: Array<proto_clarifai_api_resources_pb.Upload.AsObject>,
  }
}

export class PutUploadContentPartsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PutUploadContentPartsRequest;
  hasUserAppId(): boolean;
  clearUserAppId(): PutUploadContentPartsRequest;

  getUploadId(): string;
  setUploadId(value: string): PutUploadContentPartsRequest;

  getContentPartsList(): Array<proto_clarifai_api_resources_pb.UploadContentPart>;
  setContentPartsList(value: Array<proto_clarifai_api_resources_pb.UploadContentPart>): PutUploadContentPartsRequest;
  clearContentPartsList(): PutUploadContentPartsRequest;
  addContentParts(value?: proto_clarifai_api_resources_pb.UploadContentPart, index?: number): proto_clarifai_api_resources_pb.UploadContentPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutUploadContentPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutUploadContentPartsRequest): PutUploadContentPartsRequest.AsObject;
  static serializeBinaryToWriter(message: PutUploadContentPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutUploadContentPartsRequest;
  static deserializeBinaryFromReader(message: PutUploadContentPartsRequest, reader: jspb.BinaryReader): PutUploadContentPartsRequest;
}

export namespace PutUploadContentPartsRequest {
  export type AsObject = {
    userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    uploadId: string,
    contentPartsList: Array<proto_clarifai_api_resources_pb.UploadContentPart.AsObject>,
  }
}

export enum OrganizationInvitationStatus { 
  NOT_SET = 0,
  PENDING = 1,
  ACCEPTED = 2,
  CANCELLED = 3,
  DECLINED = 4,
  EXPIRED = 5,
}
