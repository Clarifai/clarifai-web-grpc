import * as jspb from "google-protobuf"

import * as proto_clarifai_api_resources_pb from '../../../proto/clarifai/api/resources_pb';
import * as proto_clarifai_api_status_status_pb from '../../../proto/clarifai/api/status/status_pb';
import * as proto_clarifai_api_utils_extensions_pb from '../../../proto/clarifai/api/utils/extensions_pb';
import * as proto_clarifai_auth_scope_scope_pb from '../../../proto/clarifai/auth/scope/scope_pb';
import * as proto_clarifai_auth_util_extension_pb from '../../../proto/clarifai/auth/util/extension_pb';
import * as proto_clarifai_api_status_status_code_pb from '../../../proto/clarifai/api/status/status_code_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAnnotationId(): string;
  setAnnotationId(value: string): void;

  getInputId(): string;
  setInputId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

  getInputIdsList(): Array<string>;
  setInputIdsList(value: Array<string>): void;
  clearInputIdsList(): void;
  addInputIds(value: string, index?: number): void;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  clearUserIdsList(): void;
  addUserIds(value: string, index?: number): void;

  getModelVersionIdsList(): Array<string>;
  setModelVersionIdsList(value: Array<string>): void;
  clearModelVersionIdsList(): void;
  addModelVersionIds(value: string, index?: number): void;

  getStatusesList(): Array<proto_clarifai_api_status_status_pb.Status>;
  setStatusesList(value: Array<proto_clarifai_api_status_status_pb.Status>): void;
  clearStatusesList(): void;
  addStatuses(value?: proto_clarifai_api_status_status_pb.Status, index?: number): proto_clarifai_api_status_status_pb.Status;

  getListAllAnnotations(): boolean;
  setListAllAnnotations(value: boolean): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

  getTaskId(): string;
  setTaskId(value: string): void;

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
    page: number,
    perPage: number,
    taskId: string,
  }
}

export class PostAnnotationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
  setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): void;
  clearAnnotationsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
  setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): void;
  clearAnnotationsList(): void;
  addAnnotations(value?: proto_clarifai_api_resources_pb.Annotation, index?: number): proto_clarifai_api_resources_pb.Annotation;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getStatusCode(): proto_clarifai_api_status_status_code_pb.StatusCode;
  setStatusCode(value: proto_clarifai_api_status_status_code_pb.StatusCode): void;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  clearUserIdsList(): void;
  addUserIds(value: string, index?: number): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getAction(): string;
  setAction(value: string): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  clearUserIdsList(): void;
  addUserIds(value: string, index?: number): void;

  getUpdatedCount(): number;
  setUpdatedCount(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getInputId(): string;
  setInputId(value: string): void;

  getAnnotationId(): string;
  setAnnotationId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

  getInputIdsList(): Array<string>;
  setInputIdsList(value: Array<string>): void;
  clearInputIdsList(): void;
  addInputIds(value: string, index?: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getAnnotation(): proto_clarifai_api_resources_pb.Annotation | undefined;
  setAnnotation(value?: proto_clarifai_api_resources_pb.Annotation): void;
  hasAnnotation(): boolean;
  clearAnnotation(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
  setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): void;
  clearAnnotationsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): void;
  clearAdditionalFieldsList(): void;
  addAdditionalFields(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

  getSortAscending(): boolean;
  setSortAscending(value: boolean): void;

  getSortByName(): boolean;
  setSortByName(value: boolean): void;

  getSortByModifiedAt(): boolean;
  setSortByModifiedAt(value: boolean): void;

  getQuery(): string;
  setQuery(value: string): void;

  getName(): string;
  setName(value: string): void;

  getFeaturedOnly(): boolean;
  setFeaturedOnly(value: boolean): void;

  getStarredOnly(): boolean;
  setStarredOnly(value: boolean): void;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): void;
  clearAdditionalFieldsList(): void;
  addAdditionalFields(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
  setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): void;
  clearAppsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
  setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): void;
  clearAppsList(): void;
  addApps(value?: proto_clarifai_api_resources_pb.App, index?: number): proto_clarifai_api_resources_pb.App;

  getAction(): string;
  setAction(value: string): void;

  getMetadataAction(): proto_clarifai_api_resources_pb.PatchAction | undefined;
  setMetadataAction(value?: proto_clarifai_api_resources_pb.PatchAction): void;
  hasMetadataAction(): boolean;
  clearMetadataAction(): void;

  getReindex(): boolean;
  setReindex(value: boolean): void;

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

export class PostAppsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAppQuery(): proto_clarifai_api_resources_pb.AppQuery | undefined;
  setAppQuery(value?: proto_clarifai_api_resources_pb.AppQuery): void;
  hasAppQuery(): boolean;
  clearAppQuery(): void;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;
  hasPagination(): boolean;
  clearPagination(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getApp(): proto_clarifai_api_resources_pb.App | undefined;
  setApp(value?: proto_clarifai_api_resources_pb.App): void;
  hasApp(): boolean;
  clearApp(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
  setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): void;
  clearAppsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getListAllCollaborators(): boolean;
  setListAllCollaborators(value: boolean): void;

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
  }
}

export class PostCollaboratorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
  setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): void;
  clearCollaboratorsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
  setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): void;
  clearCollaboratorsList(): void;
  addCollaborators(value?: proto_clarifai_api_resources_pb.Collaborator, index?: number): proto_clarifai_api_resources_pb.Collaborator;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getCollaboratorIdsList(): Array<string>;
  setCollaboratorIdsList(value: Array<string>): void;
  clearCollaboratorIdsList(): void;
  addCollaboratorIds(value: string, index?: number): void;

  getUserEmailsList(): Array<string>;
  setUserEmailsList(value: Array<string>): void;
  clearUserEmailsList(): void;
  addUserEmails(value: string, index?: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
  setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): void;
  clearCollaboratorsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCollaborationsList(): Array<proto_clarifai_api_resources_pb.Collaboration>;
  setCollaborationsList(value: Array<proto_clarifai_api_resources_pb.Collaboration>): void;
  clearCollaborationsList(): void;
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

export class GetStatusCodeRequest extends jspb.Message {
  getStatusCodeId(): string;
  setStatusCodeId(value: string): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getStatusesList(): Array<proto_clarifai_api_status_status_pb.Status>;
  setStatusesList(value: Array<proto_clarifai_api_status_status_pb.Status>): void;
  clearStatusesList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptId(): string;
  setConceptId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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

export class PostConceptsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptQuery(): proto_clarifai_api_resources_pb.ConceptQuery | undefined;
  setConceptQuery(value?: proto_clarifai_api_resources_pb.ConceptQuery): void;
  hasConceptQuery(): boolean;
  clearConceptQuery(): void;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;
  hasPagination(): boolean;
  clearPagination(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
  setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): void;
  clearConceptsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
  setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): void;
  clearConceptsList(): void;
  addConcepts(value?: proto_clarifai_api_resources_pb.Concept, index?: number): proto_clarifai_api_resources_pb.Concept;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getConcept(): proto_clarifai_api_resources_pb.Concept | undefined;
  setConcept(value?: proto_clarifai_api_resources_pb.Concept): void;
  hasConcept(): boolean;
  clearConcept(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
  setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): void;
  clearConceptsList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getConceptCountsList(): Array<proto_clarifai_api_resources_pb.ConceptCount>;
  setConceptCountsList(value: Array<proto_clarifai_api_resources_pb.ConceptCount>): void;
  clearConceptCountsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptId(): string;
  setConceptId(value: string): void;

  getPredicate(): string;
  setPredicate(value: string): void;

  getKnowledgeGraphId(): string;
  setKnowledgeGraphId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptId(): string;
  setConceptId(value: string): void;

  getConceptRelationsList(): Array<proto_clarifai_api_resources_pb.ConceptRelation>;
  setConceptRelationsList(value: Array<proto_clarifai_api_resources_pb.ConceptRelation>): void;
  clearConceptRelationsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptId(): string;
  setConceptId(value: string): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getKnowledgeGraphsList(): Array<proto_clarifai_api_resources_pb.KnowledgeGraph>;
  setKnowledgeGraphsList(value: Array<proto_clarifai_api_resources_pb.KnowledgeGraph>): void;
  clearKnowledgeGraphsList(): void;
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

export class PostConceptMappingJobsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptMappingJobsList(): Array<proto_clarifai_api_resources_pb.ConceptMappingJob>;
  setConceptMappingJobsList(value: Array<proto_clarifai_api_resources_pb.ConceptMappingJob>): void;
  clearConceptMappingJobsList(): void;
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

export class MultiConceptRelationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getConceptRelationsList(): Array<proto_clarifai_api_resources_pb.ConceptRelation>;
  setConceptRelationsList(value: Array<proto_clarifai_api_resources_pb.ConceptRelation>): void;
  clearConceptRelationsList(): void;
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

export class MultiKnowledgeGraphResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getKnowledgeGraphsList(): Array<proto_clarifai_api_resources_pb.KnowledgeGraph>;
  setKnowledgeGraphsList(value: Array<proto_clarifai_api_resources_pb.KnowledgeGraph>): void;
  clearKnowledgeGraphsList(): void;
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

export class MultiConceptMappingJobResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptId(): string;
  setConceptId(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptId(): string;
  setConceptId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptId(): string;
  setConceptId(value: string): void;

  getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
  setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): void;
  clearConceptLanguagesList(): void;
  addConceptLanguages(value?: proto_clarifai_api_resources_pb.ConceptLanguage, index?: number): proto_clarifai_api_resources_pb.ConceptLanguage;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getConceptId(): string;
  setConceptId(value: string): void;

  getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
  setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): void;
  clearConceptLanguagesList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getConceptLanguage(): proto_clarifai_api_resources_pb.ConceptLanguage | undefined;
  setConceptLanguage(value?: proto_clarifai_api_resources_pb.ConceptLanguage): void;
  hasConceptLanguage(): boolean;
  clearConceptLanguage(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
  setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): void;
  clearConceptLanguagesList(): void;
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

export class GetInputRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getInputId(): string;
  setInputId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  clearUserIdsList(): void;
  addUserIds(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPerPage(): number;
  setPerPage(value: number): void;

  getLastId(): string;
  setLastId(value: string): void;

  getDescending(): boolean;
  setDescending(value: boolean): void;

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
    descending: boolean,
  }
}

export class PostInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): void;
  clearInputsList(): void;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

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
  }
}

export class PatchInputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): void;
  clearInputsList(): void;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getInputId(): string;
  setInputId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getInput(): proto_clarifai_api_resources_pb.Input | undefined;
  setInput(value?: proto_clarifai_api_resources_pb.Input): void;
  hasInput(): boolean;
  clearInput(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): void;
  clearInputsList(): void;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

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
  }
}

export class MultiInputAnnotationResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getHitsList(): Array<proto_clarifai_api_resources_pb.Hit>;
  setHitsList(value: Array<proto_clarifai_api_resources_pb.Hit>): void;
  clearHitsList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCounts(): proto_clarifai_api_resources_pb.InputCount | undefined;
  setCounts(value?: proto_clarifai_api_resources_pb.InputCount): void;
  hasCounts(): boolean;
  clearCounts(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

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

export class PostModelOutputsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): void;
  clearInputsList(): void;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getModel(): proto_clarifai_api_resources_pb.Model | undefined;
  setModel(value?: proto_clarifai_api_resources_pb.Model): void;
  hasModel(): boolean;
  clearModel(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getKeyId(): string;
  setKeyId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
  setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): void;
  clearKeysList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getKeyId(): string;
  setKeyId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
  setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): void;
  clearKeysList(): void;
  addKeys(value?: proto_clarifai_api_resources_pb.Key, index?: number): proto_clarifai_api_resources_pb.Key;

  getAction(): string;
  setAction(value: string): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getKey(): proto_clarifai_api_resources_pb.Key | undefined;
  setKey(value?: proto_clarifai_api_resources_pb.Key): void;
  hasKey(): boolean;
  clearKey(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
  setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): void;
  clearKeysList(): void;
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

export class GetModelRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getTrainedBefore(): boolean;
  setTrainedBefore(value: boolean): void;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): void;
  clearAdditionalFieldsList(): void;
  addAdditionalFields(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

  getSortAscending(): boolean;
  setSortAscending(value: boolean): void;

  getSortByName(): boolean;
  setSortByName(value: boolean): void;

  getSortByNumInputs(): boolean;
  setSortByNumInputs(value: boolean): void;

  getSortByModifiedAt(): boolean;
  setSortByModifiedAt(value: boolean): void;

  getQuery(): string;
  setQuery(value: string): void;

  getName(): string;
  setName(value: string): void;

  getModelTypeId(): string;
  setModelTypeId(value: string): void;

  getTrainedOnly(): boolean;
  setTrainedOnly(value: boolean): void;

  getInputFieldsList(): Array<string>;
  setInputFieldsList(value: Array<string>): void;
  clearInputFieldsList(): void;
  addInputFields(value: string, index?: number): void;

  getOutputFieldsList(): Array<string>;
  setOutputFieldsList(value: Array<string>): void;
  clearOutputFieldsList(): void;
  addOutputFields(value: string, index?: number): void;

  getLicense(): string;
  setLicense(value: string): void;

  getFeaturedOnly(): boolean;
  setFeaturedOnly(value: boolean): void;

  getStarredOnly(): boolean;
  setStarredOnly(value: boolean): void;

  getToolkitsList(): Array<string>;
  setToolkitsList(value: Array<string>): void;
  clearToolkitsList(): void;
  addToolkits(value: string, index?: number): void;

  getUseCasesList(): Array<string>;
  setUseCasesList(value: Array<string>): void;
  clearUseCasesList(): void;
  addUseCases(value: string, index?: number): void;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): void;
  clearLanguagesList(): void;
  addLanguages(value: string, index?: number): void;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): void;
  clearAdditionalFieldsList(): void;
  addAdditionalFields(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getToolkitsList(): Array<string>;
  setToolkitsList(value: Array<string>): void;
  clearToolkitsList(): void;
  addToolkits(value: string, index?: number): void;

  getAction(): string;
  setAction(value: string): void;

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

export class PatchModelUseCasesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getUsecasesList(): Array<string>;
  setUsecasesList(value: Array<string>): void;
  clearUsecasesList(): void;
  addUsecases(value: string, index?: number): void;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): void;
  clearLanguagesList(): void;
  addLanguages(value: string, index?: number): void;

  getAction(): string;
  setAction(value: string): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getToolkitsList(): Array<string>;
  setToolkitsList(value: Array<string>): void;
  clearToolkitsList(): void;
  addToolkits(value: string, index?: number): void;

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

export class MultiModelUseCaseResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getUsecasesList(): Array<string>;
  setUsecasesList(value: Array<string>): void;
  clearUsecasesList(): void;
  addUsecases(value: string, index?: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): void;
  clearLanguagesList(): void;
  addLanguages(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModel(): proto_clarifai_api_resources_pb.Model | undefined;
  setModel(value?: proto_clarifai_api_resources_pb.Model): void;
  hasModel(): boolean;
  clearModel(): void;

  getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
  setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): void;
  clearModelsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
  setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): void;
  clearModelsList(): void;
  addModels(value?: proto_clarifai_api_resources_pb.Model, index?: number): proto_clarifai_api_resources_pb.Model;

  getAction(): string;
  setAction(value: string): void;

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

export class DeleteModelRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelQuery(): proto_clarifai_api_resources_pb.ModelQuery | undefined;
  setModelQuery(value?: proto_clarifai_api_resources_pb.ModelQuery): void;
  hasModelQuery(): boolean;
  clearModelQuery(): void;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;
  hasPagination(): boolean;
  clearPagination(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModel(): proto_clarifai_api_resources_pb.Model | undefined;
  setModel(value?: proto_clarifai_api_resources_pb.Model): void;
  hasModel(): boolean;
  clearModel(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
  setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): void;
  clearModelsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
  setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): void;
  clearModelVersionsList(): void;
  addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): void;
  clearConceptIdsList(): void;
  addConceptIds(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModelVersion(): proto_clarifai_api_resources_pb.ModelVersion | undefined;
  setModelVersion(value?: proto_clarifai_api_resources_pb.ModelVersion): void;
  hasModelVersion(): boolean;
  clearModelVersion(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
  setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): void;
  clearModelVersionsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
  setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): void;
  clearModelVersionsList(): void;
  addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;

  getSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setSearch(value?: proto_clarifai_api_resources_pb.Search): void;
  hasSearch(): boolean;
  clearSearch(): void;

  getTrainSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setTrainSearch(value?: proto_clarifai_api_resources_pb.Search): void;
  hasTrainSearch(): boolean;
  clearTrainSearch(): void;

  getTestSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setTestSearch(value?: proto_clarifai_api_resources_pb.Search): void;
  hasTestSearch(): boolean;
  clearTestSearch(): void;

  getEvaluateAfterTraining(): boolean;
  setEvaluateAfterTraining(value: boolean): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDatasetVersion(): proto_clarifai_api_resources_pb.DatasetVersion | undefined;
  setDatasetVersion(value?: proto_clarifai_api_resources_pb.DatasetVersion): void;
  hasDatasetVersion(): boolean;
  clearDatasetVersion(): void;

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
  }
}

export class ModelVersionPublishRequest extends jspb.Message {
  getVersionId(): string;
  setVersionId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getPublicationsList(): Array<ModelVersionPublishRequest>;
  setPublicationsList(value: Array<ModelVersionPublishRequest>): void;
  clearPublicationsList(): void;
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
  setVersionId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getPublicationsList(): Array<ModelVersionUnpublishRequest>;
  setPublicationsList(value: Array<ModelVersionUnpublishRequest>): void;
  clearPublicationsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

  getMaxExamples(): number;
  setMaxExamples(value: number): void;

  getTestSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setTestSearch(value?: proto_clarifai_api_resources_pb.Search): void;
  hasTestSearch(): boolean;
  clearTestSearch(): void;

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
  }
}

export class GetModelVersionMetricsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

  getFields(): proto_clarifai_api_resources_pb.FieldsValue | undefined;
  setFields(value?: proto_clarifai_api_resources_pb.FieldsValue): void;
  hasFields(): boolean;
  clearFields(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelTypeId(): string;
  setModelTypeId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getLicensesList(): Array<string>;
  setLicensesList(value: Array<string>): void;
  clearLicensesList(): void;
  addLicenses(value: string, index?: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModelType(): proto_clarifai_api_resources_pb.ModelType | undefined;
  setModelType(value?: proto_clarifai_api_resources_pb.ModelType): void;
  hasModelType(): boolean;
  clearModelType(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModelTypesList(): Array<proto_clarifai_api_resources_pb.ModelType>;
  setModelTypesList(value: Array<proto_clarifai_api_resources_pb.ModelType>): void;
  clearModelTypesList(): void;
  addModelTypes(value?: proto_clarifai_api_resources_pb.ModelType, index?: number): proto_clarifai_api_resources_pb.ModelType;

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
  }
}

export class GetModelVersionInputExampleRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getModelVersionId(): string;
  setModelVersionId(value: string): void;

  getExampleId(): string;
  setExampleId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getModelVersionId(): string;
  setModelVersionId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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

export class SingleModelVersionInputExampleResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModelVersionInputExample(): proto_clarifai_api_resources_pb.ModelVersionInputExample | undefined;
  setModelVersionInputExample(value?: proto_clarifai_api_resources_pb.ModelVersionInputExample): void;
  hasModelVersionInputExample(): boolean;
  clearModelVersionInputExample(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModelVersionInputExamplesList(): Array<proto_clarifai_api_resources_pb.ModelVersionInputExample>;
  setModelVersionInputExamplesList(value: Array<proto_clarifai_api_resources_pb.ModelVersionInputExample>): void;
  clearModelVersionInputExamplesList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getModelId(): string;
  setModelId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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

export class MultiModelReferenceResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getModelReferencesList(): Array<proto_clarifai_api_resources_pb.ModelReference>;
  setModelReferencesList(value: Array<proto_clarifai_api_resources_pb.ModelReference>): void;
  clearModelReferencesList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getOutputsList(): Array<proto_clarifai_api_resources_pb.Output>;
  setOutputsList(value: Array<proto_clarifai_api_resources_pb.Output>): void;
  clearOutputsList(): void;
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
  setKeyType(value: string): void;

  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getScopeDepsList(): Array<proto_clarifai_api_resources_pb.ScopeDeps>;
  setScopeDepsList(value: Array<proto_clarifai_api_resources_pb.ScopeDeps>): void;
  clearScopeDepsList(): void;
  addScopeDeps(value?: proto_clarifai_api_resources_pb.ScopeDeps, index?: number): proto_clarifai_api_resources_pb.ScopeDeps;

  getEndpointDepsList(): Array<proto_clarifai_api_resources_pb.EndpointDeps>;
  setEndpointDepsList(value: Array<proto_clarifai_api_resources_pb.EndpointDeps>): void;
  clearEndpointDepsList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  clearScopesList(): void;
  addScopes(value: string, index?: number): void;

  getApp(): proto_clarifai_api_resources_pb.App | undefined;
  setApp(value?: proto_clarifai_api_resources_pb.App): void;
  hasApp(): boolean;
  clearApp(): void;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): void;
  clearEndpointsList(): void;
  addEndpoints(value: string, index?: number): void;

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
  }
}

export class MultiScopeUserResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  clearScopesList(): void;
  addScopes(value: string, index?: number): void;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): void;
  clearEndpointsList(): void;
  addEndpoints(value: string, index?: number): void;

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
  }
}

export class MultiScopeRootResponse extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  clearScopesList(): void;
  addScopes(value: string, index?: number): void;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): void;
  clearEndpointsList(): void;
  addEndpoints(value: string, index?: number): void;

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
  }
}

export class GetSearchRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getId(): string;
  setId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getQuery(): proto_clarifai_api_resources_pb.Query | undefined;
  setQuery(value?: proto_clarifai_api_resources_pb.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): void;
  clearSearchesList(): void;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;
  hasPagination(): boolean;
  clearPagination(): void;

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

export class PostSearchesByIDRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getId(): string;
  setId(value: string): void;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;
  hasPagination(): boolean;
  clearPagination(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getId(): string;
  setId(value: string): void;

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

export class PostAnnotationsSearchesRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): void;
  clearSearchesList(): void;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;
  hasPagination(): boolean;
  clearPagination(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getId(): string;
  setId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): void;
  clearSearchesList(): void;
  addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;
  hasPagination(): boolean;
  clearPagination(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getSearch(): proto_clarifai_api_resources_pb.Search | undefined;
  setSearch(value?: proto_clarifai_api_resources_pb.Search): void;
  hasSearch(): boolean;
  clearSearch(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getId(): string;
  setId(value: string): void;

  getHitsList(): Array<proto_clarifai_api_resources_pb.Hit>;
  setHitsList(value: Array<proto_clarifai_api_resources_pb.Hit>): void;
  clearHitsList(): void;
  addHits(value?: proto_clarifai_api_resources_pb.Hit, index?: number): proto_clarifai_api_resources_pb.Hit;

  getQuery(): proto_clarifai_api_resources_pb.Query | undefined;
  setQuery(value?: proto_clarifai_api_resources_pb.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
  setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): void;
  clearSearchesList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getId(): string;
  setId(value: string): void;

  getGroundTruth(): proto_clarifai_api_resources_pb.Search | undefined;
  setGroundTruth(value?: proto_clarifai_api_resources_pb.Search): void;
  hasGroundTruth(): boolean;
  clearGroundTruth(): void;

  getSearchToEval(): proto_clarifai_api_resources_pb.Search | undefined;
  setSearchToEval(value?: proto_clarifai_api_resources_pb.Search): void;
  hasSearchToEval(): boolean;
  clearSearchToEval(): void;

  getData(): proto_clarifai_api_resources_pb.Data | undefined;
  setData(value?: proto_clarifai_api_resources_pb.Data): void;
  hasData(): boolean;
  clearData(): void;

  getEvaluationType(): proto_clarifai_api_resources_pb.EvaluationType;
  setEvaluationType(value: proto_clarifai_api_resources_pb.EvaluationType): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getId(): string;
  setId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getAnnotationSearchMetricsList(): Array<proto_clarifai_api_resources_pb.AnnotationSearchMetrics>;
  setAnnotationSearchMetricsList(value: Array<proto_clarifai_api_resources_pb.AnnotationSearchMetrics>): void;
  clearAnnotationSearchMetricsList(): void;
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

export class PostValidatePasswordRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPassword(): proto_clarifai_api_resources_pb.Password | undefined;
  setPassword(value?: proto_clarifai_api_resources_pb.Password): void;
  hasPassword(): boolean;
  clearPassword(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getPasswordViolations(): proto_clarifai_api_resources_pb.PasswordViolations | undefined;
  setPasswordViolations(value?: proto_clarifai_api_resources_pb.PasswordViolations): void;
  hasPasswordViolations(): boolean;
  clearPasswordViolations(): void;

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

export class GetWorkflowRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getFavorClarifaiWorkflows(): boolean;
  setFavorClarifaiWorkflows(value: boolean): void;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): void;
  clearAdditionalFieldsList(): void;
  addAdditionalFields(value: string, index?: number): void;

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
  }
}

export class ListWorkflowsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

  getSortAscending(): boolean;
  setSortAscending(value: boolean): void;

  getSortById(): boolean;
  setSortById(value: boolean): void;

  getSortByModifiedAt(): boolean;
  setSortByModifiedAt(value: boolean): void;

  getQuery(): string;
  setQuery(value: string): void;

  getId(): string;
  setId(value: string): void;

  getFeaturedOnly(): boolean;
  setFeaturedOnly(value: boolean): void;

  getStarredOnly(): boolean;
  setStarredOnly(value: boolean): void;

  getAdditionalFieldsList(): Array<string>;
  setAdditionalFieldsList(value: Array<string>): void;
  clearAdditionalFieldsList(): void;
  addAdditionalFields(value: string, index?: number): void;

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
  }

  export enum SortByCase { 
    SORT_BY_NOT_SET = 0,
    SORT_BY_ID = 6,
    SORT_BY_MODIFIED_AT = 7,
  }
}

export class PostWorkflowsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
  setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): void;
  clearWorkflowsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
  setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): void;
  clearWorkflowsList(): void;
  addWorkflows(value?: proto_clarifai_api_resources_pb.Workflow, index?: number): proto_clarifai_api_resources_pb.Workflow;

  getAction(): string;
  setAction(value: string): void;

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

export class DeleteWorkflowRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getWorkflow(): proto_clarifai_api_resources_pb.Workflow | undefined;
  setWorkflow(value?: proto_clarifai_api_resources_pb.Workflow): void;
  hasWorkflow(): boolean;
  clearWorkflow(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
  setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): void;
  clearWorkflowsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

  getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): void;
  clearInputsList(): void;
  addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getOutputConfig(): proto_clarifai_api_resources_pb.OutputConfig | undefined;
  setOutputConfig(value?: proto_clarifai_api_resources_pb.OutputConfig): void;
  hasOutputConfig(): boolean;
  clearOutputConfig(): void;

  getFavorClarifaiWorkflows(): boolean;
  setFavorClarifaiWorkflows(value: boolean): void;

  getWorkflowState(): proto_clarifai_api_resources_pb.WorkflowState | undefined;
  setWorkflowState(value?: proto_clarifai_api_resources_pb.WorkflowState): void;
  hasWorkflowState(): boolean;
  clearWorkflowState(): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getWorkflow(): proto_clarifai_api_resources_pb.Workflow | undefined;
  setWorkflow(value?: proto_clarifai_api_resources_pb.Workflow): void;
  hasWorkflow(): boolean;
  clearWorkflow(): void;

  getResultsList(): Array<proto_clarifai_api_resources_pb.WorkflowResult>;
  setResultsList(value: Array<proto_clarifai_api_resources_pb.WorkflowResult>): void;
  clearResultsList(): void;
  addResults(value?: proto_clarifai_api_resources_pb.WorkflowResult, index?: number): proto_clarifai_api_resources_pb.WorkflowResult;

  getWorkflowState(): proto_clarifai_api_resources_pb.WorkflowState | undefined;
  setWorkflowState(value?: proto_clarifai_api_resources_pb.WorkflowState): void;
  hasWorkflowState(): boolean;
  clearWorkflowState(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getVersionId(): string;
  setVersionId(value: string): void;

  getModelVersionId(): string;
  setModelVersionId(value: string): void;

  getProbeInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setProbeInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): void;
  clearProbeInputsList(): void;
  addProbeInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getPoolInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
  setPoolInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): void;
  clearPoolInputsList(): void;
  addPoolInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

  getFavorClarifaiWorkflows(): boolean;
  setFavorClarifaiWorkflows(value: boolean): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getResultsList(): Array<proto_clarifai_api_resources_pb.WorkflowResultsSimilarity>;
  setResultsList(value: Array<proto_clarifai_api_resources_pb.WorkflowResultsSimilarity>): void;
  clearResultsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getWorkflowVersionId(): string;
  setWorkflowVersionId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getWorkflowVersionIdsList(): Array<string>;
  setWorkflowVersionIdsList(value: Array<string>): void;
  clearWorkflowVersionIdsList(): void;
  addWorkflowVersionIds(value: string, index?: number): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getWorkflowVersionsList(): Array<proto_clarifai_api_resources_pb.WorkflowVersion>;
  setWorkflowVersionsList(value: Array<proto_clarifai_api_resources_pb.WorkflowVersion>): void;
  clearWorkflowVersionsList(): void;
  addWorkflowVersions(value?: proto_clarifai_api_resources_pb.WorkflowVersion, index?: number): proto_clarifai_api_resources_pb.WorkflowVersion;

  getAction(): string;
  setAction(value: string): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getWorkflowVersionsList(): Array<proto_clarifai_api_resources_pb.WorkflowVersion>;
  setWorkflowVersionsList(value: Array<proto_clarifai_api_resources_pb.WorkflowVersion>): void;
  clearWorkflowVersionsList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getWorkflowVersion(): proto_clarifai_api_resources_pb.WorkflowVersion | undefined;
  setWorkflowVersion(value?: proto_clarifai_api_resources_pb.WorkflowVersion): void;
  hasWorkflowVersion(): boolean;
  clearWorkflowVersion(): void;

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

export class PostAppDuplicationsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAppDuplicationsList(): Array<proto_clarifai_api_resources_pb.AppDuplication>;
  setAppDuplicationsList(value: Array<proto_clarifai_api_resources_pb.AppDuplication>): void;
  clearAppDuplicationsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getAppDuplicationId(): string;
  setAppDuplicationId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getAppDuplicationsList(): Array<proto_clarifai_api_resources_pb.AppDuplication>;
  setAppDuplicationsList(value: Array<proto_clarifai_api_resources_pb.AppDuplication>): void;
  clearAppDuplicationsList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getAppDuplication(): proto_clarifai_api_resources_pb.AppDuplication | undefined;
  setAppDuplication(value?: proto_clarifai_api_resources_pb.AppDuplication): void;
  hasAppDuplication(): boolean;
  clearAppDuplication(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
  setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): void;
  clearTasksList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getTaskId(): string;
  setTaskId(value: string): void;

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
  }
}

export class ListTasksRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

  getWorkerUserIdsList(): Array<string>;
  setWorkerUserIdsList(value: Array<string>): void;
  clearWorkerUserIdsList(): void;
  addWorkerUserIds(value: string, index?: number): void;

  getReviewUserIdsList(): Array<string>;
  setReviewUserIdsList(value: Array<string>): void;
  clearReviewUserIdsList(): void;
  addReviewUserIds(value: string, index?: number): void;

  getIncludingLabelOrderTasks(): boolean;
  setIncludingLabelOrderTasks(value: boolean): void;

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
    includingLabelOrderTasks: boolean,
  }
}

export class PatchTasksRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
  setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): void;
  clearTasksList(): void;
  addTasks(value?: proto_clarifai_api_resources_pb.Task, index?: number): proto_clarifai_api_resources_pb.Task;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
  setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): void;
  clearTasksList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getTask(): proto_clarifai_api_resources_pb.Task | undefined;
  setTask(value?: proto_clarifai_api_resources_pb.Task): void;
  hasTask(): boolean;
  clearTask(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  clearUserIdsList(): void;
  addUserIds(value: string, index?: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getAppId(): string;
  setAppId(value: string): void;

  getTaskId(): string;
  setTaskId(value: string): void;

  getCountsList(): Array<proto_clarifai_api_resources_pb.TaskStatusCountPerUser>;
  setCountsList(value: Array<proto_clarifai_api_resources_pb.TaskStatusCountPerUser>): void;
  clearCountsList(): void;
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

export class PostCollectorsRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
  setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): void;
  clearCollectorsList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
  setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): void;
  clearCollectorsList(): void;
  addCollectors(value?: proto_clarifai_api_resources_pb.Collector, index?: number): proto_clarifai_api_resources_pb.Collector;

  getAction(): string;
  setAction(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  clearIdsList(): void;
  addIds(value: string, index?: number): void;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getCollectorId(): string;
  setCollectorId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
  setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): void;
  clearCollectorsList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCollector(): proto_clarifai_api_resources_pb.Collector | undefined;
  setCollector(value?: proto_clarifai_api_resources_pb.Collector): void;
  hasCollector(): boolean;
  clearCollector(): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getStatValuesList(): Array<proto_clarifai_api_resources_pb.StatValue>;
  setStatValuesList(value: Array<proto_clarifai_api_resources_pb.StatValue>): void;
  clearStatValuesList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getStatValuesList(): Array<proto_clarifai_api_resources_pb.StatValue>;
  setStatValuesList(value: Array<proto_clarifai_api_resources_pb.StatValue>): void;
  clearStatValuesList(): void;
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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getStatValueAggregateQueriesList(): Array<proto_clarifai_api_resources_pb.StatValueAggregateQuery>;
  setStatValueAggregateQueriesList(value: Array<proto_clarifai_api_resources_pb.StatValueAggregateQuery>): void;
  clearStatValueAggregateQueriesList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getStatValueAggregateResultsList(): Array<proto_clarifai_api_resources_pb.StatValueAggregateResult>;
  setStatValueAggregateResultsList(value: Array<proto_clarifai_api_resources_pb.StatValueAggregateResult>): void;
  clearStatValueAggregateResultsList(): void;
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

export class PostTrendingMetricsViewRequest extends jspb.Message {
  getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getViewType(): string;
  setViewType(value: string): void;

  getObjectId(): string;
  setObjectId(value: string): void;

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
  setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): void;
  hasUserAppId(): boolean;
  clearUserAppId(): void;

  getViewType(): string;
  setViewType(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPerPage(): number;
  setPerPage(value: number): void;

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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getMetricsList(): Array<proto_clarifai_api_resources_pb.TrendingMetric>;
  setMetricsList(value: Array<proto_clarifai_api_resources_pb.TrendingMetric>): void;
  clearMetricsList(): void;
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

export enum OrganizationInvitationStatus { 
  NOT_SET = 0,
  PENDING = 1,
  ACCEPTED = 2,
  CANCELLED = 3,
  DECLINED = 4,
  EXPIRED = 5,
}
