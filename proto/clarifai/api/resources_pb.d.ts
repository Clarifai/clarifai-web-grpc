import * as jspb from 'google-protobuf'

import * as proto_clarifai_api_status_status_pb from '../../../proto/clarifai/api/status/status_pb';
import * as proto_clarifai_api_status_status_code_pb from '../../../proto/clarifai/api/status/status_code_pb';
import * as proto_clarifai_api_utils_extensions_pb from '../../../proto/clarifai/api/utils/extensions_pb';
import * as proto_clarifai_api_utils_matrix_pb from '../../../proto/clarifai/api/utils/matrix_pb';
import * as proto_clarifai_auth_util_extension_pb from '../../../proto/clarifai/auth/util/extension_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Annotation extends jspb.Message {
  getId(): string;
  setId(value: string): Annotation;

  getInputId(): string;
  setInputId(value: string): Annotation;

  getData(): Data | undefined;
  setData(value?: Data): Annotation;
  hasData(): boolean;
  clearData(): Annotation;

  getAnnotationInfo(): google_protobuf_struct_pb.Struct | undefined;
  setAnnotationInfo(value?: google_protobuf_struct_pb.Struct): Annotation;
  hasAnnotationInfo(): boolean;
  clearAnnotationInfo(): Annotation;

  getUserId(): string;
  setUserId(value: string): Annotation;

  getModelVersionId(): string;
  setModelVersionId(value: string): Annotation;

  getEmbedModelVersionId(): string;
  setEmbedModelVersionId(value: string): Annotation;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): Annotation;
  hasStatus(): boolean;
  clearStatus(): Annotation;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Annotation;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Annotation;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Annotation;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Annotation;

  getTrusted(): boolean;
  setTrusted(value: boolean): Annotation;

  getInputLevel(): boolean;
  setInputLevel(value: boolean): Annotation;

  getConsensusInfo(): google_protobuf_struct_pb.Struct | undefined;
  setConsensusInfo(value?: google_protobuf_struct_pb.Struct): Annotation;
  hasConsensusInfo(): boolean;
  clearConsensusInfo(): Annotation;

  getTaskId(): string;
  setTaskId(value: string): Annotation;

  getWorker(): Worker | undefined;
  setWorker(value?: Worker): Annotation;
  hasWorker(): boolean;
  clearWorker(): Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotation.AsObject;
  static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
  static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotation;
  static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
  export type AsObject = {
    id: string,
    inputId: string,
    data?: Data.AsObject,
    annotationInfo?: google_protobuf_struct_pb.Struct.AsObject,
    userId: string,
    modelVersionId: string,
    embedModelVersionId: string,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    trusted: boolean,
    inputLevel: boolean,
    consensusInfo?: google_protobuf_struct_pb.Struct.AsObject,
    taskId: string,
    worker?: Worker.AsObject,
  }
}

export class Worker extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): Worker;
  hasUser(): boolean;
  clearUser(): Worker;

  getModel(): Model | undefined;
  setModel(value?: Model): Worker;
  hasModel(): boolean;
  clearModel(): Worker;

  getWorkflow(): Workflow | undefined;
  setWorkflow(value?: Workflow): Worker;
  hasWorkflow(): boolean;
  clearWorkflow(): Worker;

  getWorkerCase(): Worker.WorkerCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Worker.AsObject;
  static toObject(includeInstance: boolean, msg: Worker): Worker.AsObject;
  static serializeBinaryToWriter(message: Worker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Worker;
  static deserializeBinaryFromReader(message: Worker, reader: jspb.BinaryReader): Worker;
}

export namespace Worker {
  export type AsObject = {
    user?: User.AsObject,
    model?: Model.AsObject,
    workflow?: Workflow.AsObject,
  }

  export enum WorkerCase { 
    WORKER_NOT_SET = 0,
    USER = 1,
    MODEL = 2,
    WORKFLOW = 3,
  }
}

export class App extends jspb.Message {
  getId(): string;
  setId(value: string): App;

  getName(): string;
  setName(value: string): App;

  getDefaultLanguage(): string;
  setDefaultLanguage(value: string): App;

  getDefaultWorkflowId(): string;
  setDefaultWorkflowId(value: string): App;

  getDefaultWorkflow(): Workflow | undefined;
  setDefaultWorkflow(value?: Workflow): App;
  hasDefaultWorkflow(): boolean;
  clearDefaultWorkflow(): App;

  getUserId(): string;
  setUserId(value: string): App;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): App;
  hasCreatedAt(): boolean;
  clearCreatedAt(): App;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): App;
  hasModifiedAt(): boolean;
  clearModifiedAt(): App;

  getLegalConsentStatus(): number;
  setLegalConsentStatus(value: number): App;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): App;
  hasMetadata(): boolean;
  clearMetadata(): App;

  getDescription(): string;
  setDescription(value: string): App;

  getSampleMs(): number;
  setSampleMs(value: number): App;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): App;
  hasVisibility(): boolean;
  clearVisibility(): App;

  getDataTierId(): string;
  setDataTierId(value: string): App;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): App;

  getStarCount(): number;
  setStarCount(value: number): App;

  getNotes(): string;
  setNotes(value: string): App;

  getImage(): Image | undefined;
  setImage(value?: Image): App;
  hasImage(): boolean;
  clearImage(): App;

  getIsTemplate(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsTemplate(value?: google_protobuf_wrappers_pb.BoolValue): App;
  hasIsTemplate(): boolean;
  clearIsTemplate(): App;

  getExtraInfo(): AppExtraInfo | undefined;
  setExtraInfo(value?: AppExtraInfo): App;
  hasExtraInfo(): boolean;
  clearExtraInfo(): App;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): App.AsObject;
  static toObject(includeInstance: boolean, msg: App): App.AsObject;
  static serializeBinaryToWriter(message: App, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): App;
  static deserializeBinaryFromReader(message: App, reader: jspb.BinaryReader): App;
}

export namespace App {
  export type AsObject = {
    id: string,
    name: string,
    defaultLanguage: string,
    defaultWorkflowId: string,
    defaultWorkflow?: Workflow.AsObject,
    userId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    legalConsentStatus: number,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    description: string,
    sampleMs: number,
    visibility?: Visibility.AsObject,
    dataTierId: string,
    isStarred: boolean,
    starCount: number,
    notes: string,
    image?: Image.AsObject,
    isTemplate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    extraInfo?: AppExtraInfo.AsObject,
  }
}

export class AppExtraInfo extends jspb.Message {
  getSearchRevisionMarker(): string;
  setSearchRevisionMarker(value: string): AppExtraInfo;

  getCounts(): AppResourceCounts | undefined;
  setCounts(value?: AppResourceCounts): AppExtraInfo;
  hasCounts(): boolean;
  clearCounts(): AppExtraInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppExtraInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AppExtraInfo): AppExtraInfo.AsObject;
  static serializeBinaryToWriter(message: AppExtraInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppExtraInfo;
  static deserializeBinaryFromReader(message: AppExtraInfo, reader: jspb.BinaryReader): AppExtraInfo;
}

export namespace AppExtraInfo {
  export type AsObject = {
    searchRevisionMarker: string,
    counts?: AppResourceCounts.AsObject,
  }
}

export class AppQuery extends jspb.Message {
  getName(): string;
  setName(value: string): AppQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppQuery.AsObject;
  static toObject(includeInstance: boolean, msg: AppQuery): AppQuery.AsObject;
  static serializeBinaryToWriter(message: AppQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppQuery;
  static deserializeBinaryFromReader(message: AppQuery, reader: jspb.BinaryReader): AppQuery;
}

export namespace AppQuery {
  export type AsObject = {
    name: string,
  }
}

export class AppResourceCounts extends jspb.Message {
  getDatasets(): number;
  setDatasets(value: number): AppResourceCounts;

  getModels(): number;
  setModels(value: number): AppResourceCounts;

  getWorkflows(): number;
  setWorkflows(value: number): AppResourceCounts;

  getModules(): number;
  setModules(value: number): AppResourceCounts;

  getInputs(): number;
  setInputs(value: number): AppResourceCounts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppResourceCounts.AsObject;
  static toObject(includeInstance: boolean, msg: AppResourceCounts): AppResourceCounts.AsObject;
  static serializeBinaryToWriter(message: AppResourceCounts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppResourceCounts;
  static deserializeBinaryFromReader(message: AppResourceCounts, reader: jspb.BinaryReader): AppResourceCounts;
}

export namespace AppResourceCounts {
  export type AsObject = {
    datasets: number,
    models: number,
    workflows: number,
    modules: number,
    inputs: number,
  }
}

export class Collaborator extends jspb.Message {
  getId(): string;
  setId(value: string): Collaborator;

  getApp(): App | undefined;
  setApp(value?: App): Collaborator;
  hasApp(): boolean;
  clearApp(): Collaborator;

  getUser(): User | undefined;
  setUser(value?: User): Collaborator;
  hasUser(): boolean;
  clearUser(): Collaborator;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): Collaborator;
  clearScopesList(): Collaborator;
  addScopes(value: string, index?: number): Collaborator;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): Collaborator;
  clearEndpointsList(): Collaborator;
  addEndpoints(value: string, index?: number): Collaborator;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collaborator;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Collaborator;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collaborator;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Collaborator;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collaborator;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Collaborator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collaborator.AsObject;
  static toObject(includeInstance: boolean, msg: Collaborator): Collaborator.AsObject;
  static serializeBinaryToWriter(message: Collaborator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collaborator;
  static deserializeBinaryFromReader(message: Collaborator, reader: jspb.BinaryReader): Collaborator;
}

export namespace Collaborator {
  export type AsObject = {
    id: string,
    app?: App.AsObject,
    user?: User.AsObject,
    scopesList: Array<string>,
    endpointsList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Collaboration extends jspb.Message {
  getApp(): App | undefined;
  setApp(value?: App): Collaboration;
  hasApp(): boolean;
  clearApp(): Collaboration;

  getAppOwner(): User | undefined;
  setAppOwner(value?: User): Collaboration;
  hasAppOwner(): boolean;
  clearAppOwner(): Collaboration;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): Collaboration;
  clearScopesList(): Collaboration;
  addScopes(value: string, index?: number): Collaboration;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): Collaboration;
  clearEndpointsList(): Collaboration;
  addEndpoints(value: string, index?: number): Collaboration;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collaboration;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Collaboration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collaboration.AsObject;
  static toObject(includeInstance: boolean, msg: Collaboration): Collaboration.AsObject;
  static serializeBinaryToWriter(message: Collaboration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collaboration;
  static deserializeBinaryFromReader(message: Collaboration, reader: jspb.BinaryReader): Collaboration;
}

export namespace Collaboration {
  export type AsObject = {
    app?: App.AsObject,
    appOwner?: User.AsObject,
    scopesList: Array<string>,
    endpointsList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Audio extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): Audio;

  getBase64(): Uint8Array | string;
  getBase64_asU8(): Uint8Array;
  getBase64_asB64(): string;
  setBase64(value: Uint8Array | string): Audio;

  getAllowDuplicateUrl(): boolean;
  setAllowDuplicateUrl(value: boolean): Audio;

  getHosted(): HostedURL | undefined;
  setHosted(value?: HostedURL): Audio;
  hasHosted(): boolean;
  clearHosted(): Audio;

  getAudioInfo(): AudioInfo | undefined;
  setAudioInfo(value?: AudioInfo): Audio;
  hasAudioInfo(): boolean;
  clearAudioInfo(): Audio;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Audio.AsObject;
  static toObject(includeInstance: boolean, msg: Audio): Audio.AsObject;
  static serializeBinaryToWriter(message: Audio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Audio;
  static deserializeBinaryFromReader(message: Audio, reader: jspb.BinaryReader): Audio;
}

export namespace Audio {
  export type AsObject = {
    url: string,
    base64: Uint8Array | string,
    allowDuplicateUrl: boolean,
    hosted?: HostedURL.AsObject,
    audioInfo?: AudioInfo.AsObject,
  }
}

export class AudioInfo extends jspb.Message {
  getAudioFormat(): string;
  setAudioFormat(value: string): AudioInfo;

  getSampleRate(): number;
  setSampleRate(value: number): AudioInfo;

  getDurationSeconds(): number;
  setDurationSeconds(value: number): AudioInfo;

  getBitRate(): number;
  setBitRate(value: number): AudioInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AudioInfo): AudioInfo.AsObject;
  static serializeBinaryToWriter(message: AudioInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioInfo;
  static deserializeBinaryFromReader(message: AudioInfo, reader: jspb.BinaryReader): AudioInfo;
}

export namespace AudioInfo {
  export type AsObject = {
    audioFormat: string,
    sampleRate: number,
    durationSeconds: number,
    bitRate: number,
  }
}

export class Track extends jspb.Message {
  getId(): string;
  setId(value: string): Track;

  getData(): Data | undefined;
  setData(value?: Data): Track;
  hasData(): boolean;
  clearData(): Track;

  getTimeInfo(): TimeInfo | undefined;
  setTimeInfo(value?: TimeInfo): Track;
  hasTimeInfo(): boolean;
  clearTimeInfo(): Track;

  getQuality(): number;
  setQuality(value: number): Track;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Track.AsObject;
  static toObject(includeInstance: boolean, msg: Track): Track.AsObject;
  static serializeBinaryToWriter(message: Track, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Track;
  static deserializeBinaryFromReader(message: Track, reader: jspb.BinaryReader): Track;
}

export namespace Track {
  export type AsObject = {
    id: string,
    data?: Data.AsObject,
    timeInfo?: TimeInfo.AsObject,
    quality: number,
  }
}

export class Cluster extends jspb.Message {
  getId(): string;
  setId(value: string): Cluster;

  getCount(): number;
  setCount(value: number): Cluster;

  getScore(): number;
  setScore(value: number): Cluster;

  getHitsList(): Array<Hit>;
  setHitsList(value: Array<Hit>): Cluster;
  clearHitsList(): Cluster;
  addHits(value?: Hit, index?: number): Hit;

  getProjectionList(): Array<number>;
  setProjectionList(value: Array<number>): Cluster;
  clearProjectionList(): Cluster;
  addProjection(value: number, index?: number): Cluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cluster.AsObject;
  static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
  static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cluster;
  static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
  export type AsObject = {
    id: string,
    count: number,
    score: number,
    hitsList: Array<Hit.AsObject>,
    projectionList: Array<number>,
  }
}

export class Color extends jspb.Message {
  getRawHex(): string;
  setRawHex(value: string): Color;

  getW3c(): W3C | undefined;
  setW3c(value?: W3C): Color;
  hasW3c(): boolean;
  clearW3c(): Color;

  getValue(): number;
  setValue(value: number): Color;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Color.AsObject;
  static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
  static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Color;
  static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
  export type AsObject = {
    rawHex: string,
    w3c?: W3C.AsObject,
    value: number,
  }
}

export class W3C extends jspb.Message {
  getHex(): string;
  setHex(value: string): W3C;

  getName(): string;
  setName(value: string): W3C;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): W3C.AsObject;
  static toObject(includeInstance: boolean, msg: W3C): W3C.AsObject;
  static serializeBinaryToWriter(message: W3C, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): W3C;
  static deserializeBinaryFromReader(message: W3C, reader: jspb.BinaryReader): W3C;
}

export namespace W3C {
  export type AsObject = {
    hex: string,
    name: string,
  }
}

export class UserAppIDSet extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): UserAppIDSet;

  getAppId(): string;
  setAppId(value: string): UserAppIDSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAppIDSet.AsObject;
  static toObject(includeInstance: boolean, msg: UserAppIDSet): UserAppIDSet.AsObject;
  static serializeBinaryToWriter(message: UserAppIDSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAppIDSet;
  static deserializeBinaryFromReader(message: UserAppIDSet, reader: jspb.BinaryReader): UserAppIDSet;
}

export namespace UserAppIDSet {
  export type AsObject = {
    userId: string,
    appId: string,
  }
}

export class PatchAction extends jspb.Message {
  getOp(): string;
  setOp(value: string): PatchAction;

  getMergeConflictResolution(): string;
  setMergeConflictResolution(value: string): PatchAction;

  getPath(): string;
  setPath(value: string): PatchAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchAction.AsObject;
  static toObject(includeInstance: boolean, msg: PatchAction): PatchAction.AsObject;
  static serializeBinaryToWriter(message: PatchAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchAction;
  static deserializeBinaryFromReader(message: PatchAction, reader: jspb.BinaryReader): PatchAction;
}

export namespace PatchAction {
  export type AsObject = {
    op: string,
    mergeConflictResolution: string,
    path: string,
  }
}

export class Concept extends jspb.Message {
  getId(): string;
  setId(value: string): Concept;

  getName(): string;
  setName(value: string): Concept;

  getValue(): number;
  setValue(value: number): Concept;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Concept;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Concept;

  getLanguage(): string;
  setLanguage(value: string): Concept;

  getAppId(): string;
  setAppId(value: string): Concept;

  getDefinition(): string;
  setDefinition(value: string): Concept;

  getVocabId(): string;
  setVocabId(value: string): Concept;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): Concept;
  hasVisibility(): boolean;
  clearVisibility(): Concept;

  getUserId(): string;
  setUserId(value: string): Concept;

  getKeypointInfo(): KeypointInfo | undefined;
  setKeypointInfo(value?: KeypointInfo): Concept;
  hasKeypointInfo(): boolean;
  clearKeypointInfo(): Concept;

  getExtraInfo(): ConceptExtraInfo | undefined;
  setExtraInfo(value?: ConceptExtraInfo): Concept;
  hasExtraInfo(): boolean;
  clearExtraInfo(): Concept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Concept.AsObject;
  static toObject(includeInstance: boolean, msg: Concept): Concept.AsObject;
  static serializeBinaryToWriter(message: Concept, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Concept;
  static deserializeBinaryFromReader(message: Concept, reader: jspb.BinaryReader): Concept;
}

export namespace Concept {
  export type AsObject = {
    id: string,
    name: string,
    value: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    language: string,
    appId: string,
    definition: string,
    vocabId: string,
    visibility?: Visibility.AsObject,
    userId: string,
    keypointInfo?: KeypointInfo.AsObject,
    extraInfo?: ConceptExtraInfo.AsObject,
  }
}

export class KeypointInfo extends jspb.Message {
  getKeypointNamesList(): Array<string>;
  setKeypointNamesList(value: Array<string>): KeypointInfo;
  clearKeypointNamesList(): KeypointInfo;
  addKeypointNames(value: string, index?: number): KeypointInfo;

  getSkeletonList(): Array<KeypointEdge>;
  setSkeletonList(value: Array<KeypointEdge>): KeypointInfo;
  clearSkeletonList(): KeypointInfo;
  addSkeleton(value?: KeypointEdge, index?: number): KeypointEdge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeypointInfo.AsObject;
  static toObject(includeInstance: boolean, msg: KeypointInfo): KeypointInfo.AsObject;
  static serializeBinaryToWriter(message: KeypointInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeypointInfo;
  static deserializeBinaryFromReader(message: KeypointInfo, reader: jspb.BinaryReader): KeypointInfo;
}

export namespace KeypointInfo {
  export type AsObject = {
    keypointNamesList: Array<string>,
    skeletonList: Array<KeypointEdge.AsObject>,
  }
}

export class KeypointEdge extends jspb.Message {
  getK1(): number;
  setK1(value: number): KeypointEdge;

  getK2(): number;
  setK2(value: number): KeypointEdge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeypointEdge.AsObject;
  static toObject(includeInstance: boolean, msg: KeypointEdge): KeypointEdge.AsObject;
  static serializeBinaryToWriter(message: KeypointEdge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeypointEdge;
  static deserializeBinaryFromReader(message: KeypointEdge, reader: jspb.BinaryReader): KeypointEdge;
}

export namespace KeypointEdge {
  export type AsObject = {
    k1: number,
    k2: number,
  }
}

export class ConceptExtraInfo extends jspb.Message {
  getIsRankable(): boolean;
  setIsRankable(value: boolean): ConceptExtraInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptExtraInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptExtraInfo): ConceptExtraInfo.AsObject;
  static serializeBinaryToWriter(message: ConceptExtraInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptExtraInfo;
  static deserializeBinaryFromReader(message: ConceptExtraInfo, reader: jspb.BinaryReader): ConceptExtraInfo;
}

export namespace ConceptExtraInfo {
  export type AsObject = {
    isRankable: boolean,
  }
}

export class ConceptCount extends jspb.Message {
  getId(): string;
  setId(value: string): ConceptCount;

  getName(): string;
  setName(value: string): ConceptCount;

  getConceptTypeCount(): ConceptTypeCount | undefined;
  setConceptTypeCount(value?: ConceptTypeCount): ConceptCount;
  hasConceptTypeCount(): boolean;
  clearConceptTypeCount(): ConceptCount;

  getDetailConceptCount(): DetailConceptCount | undefined;
  setDetailConceptCount(value?: DetailConceptCount): ConceptCount;
  hasDetailConceptCount(): boolean;
  clearDetailConceptCount(): ConceptCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptCount.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptCount): ConceptCount.AsObject;
  static serializeBinaryToWriter(message: ConceptCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptCount;
  static deserializeBinaryFromReader(message: ConceptCount, reader: jspb.BinaryReader): ConceptCount;
}

export namespace ConceptCount {
  export type AsObject = {
    id: string,
    name: string,
    conceptTypeCount?: ConceptTypeCount.AsObject,
    detailConceptCount?: DetailConceptCount.AsObject,
  }
}

export class ConceptTypeCount extends jspb.Message {
  getPositive(): number;
  setPositive(value: number): ConceptTypeCount;

  getNegative(): number;
  setNegative(value: number): ConceptTypeCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptTypeCount.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptTypeCount): ConceptTypeCount.AsObject;
  static serializeBinaryToWriter(message: ConceptTypeCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptTypeCount;
  static deserializeBinaryFromReader(message: ConceptTypeCount, reader: jspb.BinaryReader): ConceptTypeCount;
}

export namespace ConceptTypeCount {
  export type AsObject = {
    positive: number,
    negative: number,
  }
}

export class DetailConceptCount extends jspb.Message {
  getProcessed(): ConceptTypeCount | undefined;
  setProcessed(value?: ConceptTypeCount): DetailConceptCount;
  hasProcessed(): boolean;
  clearProcessed(): DetailConceptCount;

  getToProcess(): ConceptTypeCount | undefined;
  setToProcess(value?: ConceptTypeCount): DetailConceptCount;
  hasToProcess(): boolean;
  clearToProcess(): DetailConceptCount;

  getErrors(): ConceptTypeCount | undefined;
  setErrors(value?: ConceptTypeCount): DetailConceptCount;
  hasErrors(): boolean;
  clearErrors(): DetailConceptCount;

  getProcessing(): ConceptTypeCount | undefined;
  setProcessing(value?: ConceptTypeCount): DetailConceptCount;
  hasProcessing(): boolean;
  clearProcessing(): DetailConceptCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailConceptCount.AsObject;
  static toObject(includeInstance: boolean, msg: DetailConceptCount): DetailConceptCount.AsObject;
  static serializeBinaryToWriter(message: DetailConceptCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailConceptCount;
  static deserializeBinaryFromReader(message: DetailConceptCount, reader: jspb.BinaryReader): DetailConceptCount;
}

export namespace DetailConceptCount {
  export type AsObject = {
    processed?: ConceptTypeCount.AsObject,
    toProcess?: ConceptTypeCount.AsObject,
    errors?: ConceptTypeCount.AsObject,
    processing?: ConceptTypeCount.AsObject,
  }
}

export class ConceptQuery extends jspb.Message {
  getName(): string;
  setName(value: string): ConceptQuery;

  getLanguage(): string;
  setLanguage(value: string): ConceptQuery;

  getWorkflowId(): string;
  setWorkflowId(value: string): ConceptQuery;

  getUseCasesList(): Array<WorkflowModelUseCase>;
  setUseCasesList(value: Array<WorkflowModelUseCase>): ConceptQuery;
  clearUseCasesList(): ConceptQuery;
  addUseCases(value: WorkflowModelUseCase, index?: number): ConceptQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptQuery): ConceptQuery.AsObject;
  static serializeBinaryToWriter(message: ConceptQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptQuery;
  static deserializeBinaryFromReader(message: ConceptQuery, reader: jspb.BinaryReader): ConceptQuery;
}

export namespace ConceptQuery {
  export type AsObject = {
    name: string,
    language: string,
    workflowId: string,
    useCasesList: Array<WorkflowModelUseCase>,
  }
}

export class ConceptRelation extends jspb.Message {
  getId(): string;
  setId(value: string): ConceptRelation;

  getSubjectConcept(): Concept | undefined;
  setSubjectConcept(value?: Concept): ConceptRelation;
  hasSubjectConcept(): boolean;
  clearSubjectConcept(): ConceptRelation;

  getObjectConcept(): Concept | undefined;
  setObjectConcept(value?: Concept): ConceptRelation;
  hasObjectConcept(): boolean;
  clearObjectConcept(): ConceptRelation;

  getPredicate(): string;
  setPredicate(value: string): ConceptRelation;

  getKnowledgeGraphId(): string;
  setKnowledgeGraphId(value: string): ConceptRelation;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): ConceptRelation;
  hasVisibility(): boolean;
  clearVisibility(): ConceptRelation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptRelation.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptRelation): ConceptRelation.AsObject;
  static serializeBinaryToWriter(message: ConceptRelation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptRelation;
  static deserializeBinaryFromReader(message: ConceptRelation, reader: jspb.BinaryReader): ConceptRelation;
}

export namespace ConceptRelation {
  export type AsObject = {
    id: string,
    subjectConcept?: Concept.AsObject,
    objectConcept?: Concept.AsObject,
    predicate: string,
    knowledgeGraphId: string,
    visibility?: Visibility.AsObject,
  }
}

export class KnowledgeGraph extends jspb.Message {
  getId(): string;
  setId(value: string): KnowledgeGraph;

  getName(): string;
  setName(value: string): KnowledgeGraph;

  getDescription(): string;
  setDescription(value: string): KnowledgeGraph;

  getExamplesAppId(): string;
  setExamplesAppId(value: string): KnowledgeGraph;

  getSampledExamplesAppId(): string;
  setSampledExamplesAppId(value: string): KnowledgeGraph;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeGraph.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeGraph): KnowledgeGraph.AsObject;
  static serializeBinaryToWriter(message: KnowledgeGraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeGraph;
  static deserializeBinaryFromReader(message: KnowledgeGraph, reader: jspb.BinaryReader): KnowledgeGraph;
}

export namespace KnowledgeGraph {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    examplesAppId: string,
    sampledExamplesAppId: string,
  }
}

export class ConceptMappingJob extends jspb.Message {
  getKnowledgeGraphId(): string;
  setKnowledgeGraphId(value: string): ConceptMappingJob;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): ConceptMappingJob;
  clearConceptIdsList(): ConceptMappingJob;
  addConceptIds(value: string, index?: number): ConceptMappingJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptMappingJob.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptMappingJob): ConceptMappingJob.AsObject;
  static serializeBinaryToWriter(message: ConceptMappingJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptMappingJob;
  static deserializeBinaryFromReader(message: ConceptMappingJob, reader: jspb.BinaryReader): ConceptMappingJob;
}

export namespace ConceptMappingJob {
  export type AsObject = {
    knowledgeGraphId: string,
    conceptIdsList: Array<string>,
  }
}

export class ConceptLanguage extends jspb.Message {
  getId(): string;
  setId(value: string): ConceptLanguage;

  getName(): string;
  setName(value: string): ConceptLanguage;

  getDefinition(): string;
  setDefinition(value: string): ConceptLanguage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptLanguage.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptLanguage): ConceptLanguage.AsObject;
  static serializeBinaryToWriter(message: ConceptLanguage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptLanguage;
  static deserializeBinaryFromReader(message: ConceptLanguage, reader: jspb.BinaryReader): ConceptLanguage;
}

export namespace ConceptLanguage {
  export type AsObject = {
    id: string,
    name: string,
    definition: string,
  }
}

export class Data extends jspb.Message {
  getImage(): Image | undefined;
  setImage(value?: Image): Data;
  hasImage(): boolean;
  clearImage(): Data;

  getVideo(): Video | undefined;
  setVideo(value?: Video): Data;
  hasVideo(): boolean;
  clearVideo(): Data;

  getConceptsList(): Array<Concept>;
  setConceptsList(value: Array<Concept>): Data;
  clearConceptsList(): Data;
  addConcepts(value?: Concept, index?: number): Concept;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Data;
  hasMetadata(): boolean;
  clearMetadata(): Data;

  getGeo(): Geo | undefined;
  setGeo(value?: Geo): Data;
  hasGeo(): boolean;
  clearGeo(): Data;

  getColorsList(): Array<Color>;
  setColorsList(value: Array<Color>): Data;
  clearColorsList(): Data;
  addColors(value?: Color, index?: number): Color;

  getClustersList(): Array<Cluster>;
  setClustersList(value: Array<Cluster>): Data;
  clearClustersList(): Data;
  addClusters(value?: Cluster, index?: number): Cluster;

  getEmbeddingsList(): Array<Embedding>;
  setEmbeddingsList(value: Array<Embedding>): Data;
  clearEmbeddingsList(): Data;
  addEmbeddings(value?: Embedding, index?: number): Embedding;

  getRegionsList(): Array<Region>;
  setRegionsList(value: Array<Region>): Data;
  clearRegionsList(): Data;
  addRegions(value?: Region, index?: number): Region;

  getFramesList(): Array<Frame>;
  setFramesList(value: Array<Frame>): Data;
  clearFramesList(): Data;
  addFrames(value?: Frame, index?: number): Frame;

  getText(): Text | undefined;
  setText(value?: Text): Data;
  hasText(): boolean;
  clearText(): Data;

  getAudio(): Audio | undefined;
  setAudio(value?: Audio): Data;
  hasAudio(): boolean;
  clearAudio(): Data;

  getTracksList(): Array<Track>;
  setTracksList(value: Array<Track>): Data;
  clearTracksList(): Data;
  addTracks(value?: Track, index?: number): Track;

  getTimeSegmentsList(): Array<TimeSegment>;
  setTimeSegmentsList(value: Array<TimeSegment>): Data;
  clearTimeSegmentsList(): Data;
  addTimeSegments(value?: TimeSegment, index?: number): TimeSegment;

  getHitsList(): Array<Hit>;
  setHitsList(value: Array<Hit>): Data;
  clearHitsList(): Data;
  addHits(value?: Hit, index?: number): Hit;

  getHeatmapsList(): Array<Image>;
  setHeatmapsList(value: Array<Image>): Data;
  clearHeatmapsList(): Data;
  addHeatmaps(value?: Image, index?: number): Image;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Data.AsObject;
  static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
  static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Data;
  static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
  export type AsObject = {
    image?: Image.AsObject,
    video?: Video.AsObject,
    conceptsList: Array<Concept.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    geo?: Geo.AsObject,
    colorsList: Array<Color.AsObject>,
    clustersList: Array<Cluster.AsObject>,
    embeddingsList: Array<Embedding.AsObject>,
    regionsList: Array<Region.AsObject>,
    framesList: Array<Frame.AsObject>,
    text?: Text.AsObject,
    audio?: Audio.AsObject,
    tracksList: Array<Track.AsObject>,
    timeSegmentsList: Array<TimeSegment.AsObject>,
    hitsList: Array<Hit.AsObject>,
    heatmapsList: Array<Image.AsObject>,
  }
}

export class Region extends jspb.Message {
  getId(): string;
  setId(value: string): Region;

  getRegionInfo(): RegionInfo | undefined;
  setRegionInfo(value?: RegionInfo): Region;
  hasRegionInfo(): boolean;
  clearRegionInfo(): Region;

  getData(): Data | undefined;
  setData(value?: Data): Region;
  hasData(): boolean;
  clearData(): Region;

  getValue(): number;
  setValue(value: number): Region;

  getTrackId(): string;
  setTrackId(value: string): Region;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Region.AsObject;
  static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
  static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Region;
  static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
  export type AsObject = {
    id: string,
    regionInfo?: RegionInfo.AsObject,
    data?: Data.AsObject,
    value: number,
    trackId: string,
  }
}

export class RegionInfo extends jspb.Message {
  getBoundingBox(): BoundingBox | undefined;
  setBoundingBox(value?: BoundingBox): RegionInfo;
  hasBoundingBox(): boolean;
  clearBoundingBox(): RegionInfo;

  getMask(): Mask | undefined;
  setMask(value?: Mask): RegionInfo;
  hasMask(): boolean;
  clearMask(): RegionInfo;

  getPolygon(): Polygon | undefined;
  setPolygon(value?: Polygon): RegionInfo;
  hasPolygon(): boolean;
  clearPolygon(): RegionInfo;

  getPoint(): Point | undefined;
  setPoint(value?: Point): RegionInfo;
  hasPoint(): boolean;
  clearPoint(): RegionInfo;

  getSpan(): Span | undefined;
  setSpan(value?: Span): RegionInfo;
  hasSpan(): boolean;
  clearSpan(): RegionInfo;

  getToken(): Token | undefined;
  setToken(value?: Token): RegionInfo;
  hasToken(): boolean;
  clearToken(): RegionInfo;

  getKeypointLocationsList(): Array<Point>;
  setKeypointLocationsList(value: Array<Point>): RegionInfo;
  clearKeypointLocationsList(): RegionInfo;
  addKeypointLocations(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RegionInfo): RegionInfo.AsObject;
  static serializeBinaryToWriter(message: RegionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionInfo;
  static deserializeBinaryFromReader(message: RegionInfo, reader: jspb.BinaryReader): RegionInfo;
}

export namespace RegionInfo {
  export type AsObject = {
    boundingBox?: BoundingBox.AsObject,
    mask?: Mask.AsObject,
    polygon?: Polygon.AsObject,
    point?: Point.AsObject,
    span?: Span.AsObject,
    token?: Token.AsObject,
    keypointLocationsList: Array<Point.AsObject>,
  }
}

export class BoundingBox extends jspb.Message {
  getTopRow(): number;
  setTopRow(value: number): BoundingBox;

  getLeftCol(): number;
  setLeftCol(value: number): BoundingBox;

  getBottomRow(): number;
  setBottomRow(value: number): BoundingBox;

  getRightCol(): number;
  setRightCol(value: number): BoundingBox;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingBox.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingBox): BoundingBox.AsObject;
  static serializeBinaryToWriter(message: BoundingBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingBox;
  static deserializeBinaryFromReader(message: BoundingBox, reader: jspb.BinaryReader): BoundingBox;
}

export namespace BoundingBox {
  export type AsObject = {
    topRow: number,
    leftCol: number,
    bottomRow: number,
    rightCol: number,
  }
}

export class FrameInfo extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): FrameInfo;

  getTime(): number;
  setTime(value: number): FrameInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FrameInfo): FrameInfo.AsObject;
  static serializeBinaryToWriter(message: FrameInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameInfo;
  static deserializeBinaryFromReader(message: FrameInfo, reader: jspb.BinaryReader): FrameInfo;
}

export namespace FrameInfo {
  export type AsObject = {
    index: number,
    time: number,
  }
}

export class Frame extends jspb.Message {
  getFrameInfo(): FrameInfo | undefined;
  setFrameInfo(value?: FrameInfo): Frame;
  hasFrameInfo(): boolean;
  clearFrameInfo(): Frame;

  getData(): Data | undefined;
  setData(value?: Data): Frame;
  hasData(): boolean;
  clearData(): Frame;

  getId(): string;
  setId(value: string): Frame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Frame.AsObject;
  static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
  static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Frame;
  static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
}

export namespace Frame {
  export type AsObject = {
    frameInfo?: FrameInfo.AsObject,
    data?: Data.AsObject,
    id: string,
  }
}

export class Mask extends jspb.Message {
  getImage(): Image | undefined;
  setImage(value?: Image): Mask;
  hasImage(): boolean;
  clearImage(): Mask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mask.AsObject;
  static toObject(includeInstance: boolean, msg: Mask): Mask.AsObject;
  static serializeBinaryToWriter(message: Mask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mask;
  static deserializeBinaryFromReader(message: Mask, reader: jspb.BinaryReader): Mask;
}

export namespace Mask {
  export type AsObject = {
    image?: Image.AsObject,
  }
}

export class Polygon extends jspb.Message {
  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): Polygon;
  clearPointsList(): Polygon;
  addPoints(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Polygon.AsObject;
  static toObject(includeInstance: boolean, msg: Polygon): Polygon.AsObject;
  static serializeBinaryToWriter(message: Polygon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Polygon;
  static deserializeBinaryFromReader(message: Polygon, reader: jspb.BinaryReader): Polygon;
}

export namespace Polygon {
  export type AsObject = {
    pointsList: Array<Point.AsObject>,
  }
}

export class Point extends jspb.Message {
  getRow(): number;
  setRow(value: number): Point;

  getCol(): number;
  setCol(value: number): Point;

  getZ(): number;
  setZ(value: number): Point;

  getVisibility(): Point.Visibility;
  setVisibility(value: Point.Visibility): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    row: number,
    col: number,
    z: number,
    visibility: Point.Visibility,
  }

  export enum Visibility { 
    NOT_SET = 0,
    VISIBLE = 1,
    NOT_VISIBLE = 2,
    NOT_PRESENT = 3,
  }
}

export class Span extends jspb.Message {
  getCharStart(): number;
  setCharStart(value: number): Span;

  getCharEnd(): number;
  setCharEnd(value: number): Span;

  getRawText(): string;
  setRawText(value: string): Span;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Span.AsObject;
  static toObject(includeInstance: boolean, msg: Span): Span.AsObject;
  static serializeBinaryToWriter(message: Span, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Span;
  static deserializeBinaryFromReader(message: Span, reader: jspb.BinaryReader): Span;
}

export namespace Span {
  export type AsObject = {
    charStart: number,
    charEnd: number,
    rawText: string,
  }
}

export class Token extends jspb.Message {
  getCharStart(): number;
  setCharStart(value: number): Token;

  getCharEnd(): number;
  setCharEnd(value: number): Token;

  getRawText(): string;
  setRawText(value: string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    charStart: number,
    charEnd: number,
    rawText: string,
  }
}

export class Embedding extends jspb.Message {
  getVectorList(): Array<number>;
  setVectorList(value: Array<number>): Embedding;
  clearVectorList(): Embedding;
  addVector(value: number, index?: number): Embedding;

  getNumDimensions(): number;
  setNumDimensions(value: number): Embedding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Embedding.AsObject;
  static toObject(includeInstance: boolean, msg: Embedding): Embedding.AsObject;
  static serializeBinaryToWriter(message: Embedding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Embedding;
  static deserializeBinaryFromReader(message: Embedding, reader: jspb.BinaryReader): Embedding;
}

export namespace Embedding {
  export type AsObject = {
    vectorList: Array<number>,
    numDimensions: number,
  }
}

export class GeoPoint extends jspb.Message {
  getLongitude(): number;
  setLongitude(value: number): GeoPoint;

  getLatitude(): number;
  setLatitude(value: number): GeoPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoPoint.AsObject;
  static toObject(includeInstance: boolean, msg: GeoPoint): GeoPoint.AsObject;
  static serializeBinaryToWriter(message: GeoPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoPoint;
  static deserializeBinaryFromReader(message: GeoPoint, reader: jspb.BinaryReader): GeoPoint;
}

export namespace GeoPoint {
  export type AsObject = {
    longitude: number,
    latitude: number,
  }
}

export class GeoLimit extends jspb.Message {
  getType(): string;
  setType(value: string): GeoLimit;

  getValue(): number;
  setValue(value: number): GeoLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoLimit.AsObject;
  static toObject(includeInstance: boolean, msg: GeoLimit): GeoLimit.AsObject;
  static serializeBinaryToWriter(message: GeoLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoLimit;
  static deserializeBinaryFromReader(message: GeoLimit, reader: jspb.BinaryReader): GeoLimit;
}

export namespace GeoLimit {
  export type AsObject = {
    type: string,
    value: number,
  }
}

export class GeoBoxedPoint extends jspb.Message {
  getGeoPoint(): GeoPoint | undefined;
  setGeoPoint(value?: GeoPoint): GeoBoxedPoint;
  hasGeoPoint(): boolean;
  clearGeoPoint(): GeoBoxedPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoBoxedPoint.AsObject;
  static toObject(includeInstance: boolean, msg: GeoBoxedPoint): GeoBoxedPoint.AsObject;
  static serializeBinaryToWriter(message: GeoBoxedPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoBoxedPoint;
  static deserializeBinaryFromReader(message: GeoBoxedPoint, reader: jspb.BinaryReader): GeoBoxedPoint;
}

export namespace GeoBoxedPoint {
  export type AsObject = {
    geoPoint?: GeoPoint.AsObject,
  }
}

export class Geo extends jspb.Message {
  getGeoPoint(): GeoPoint | undefined;
  setGeoPoint(value?: GeoPoint): Geo;
  hasGeoPoint(): boolean;
  clearGeoPoint(): Geo;

  getGeoLimit(): GeoLimit | undefined;
  setGeoLimit(value?: GeoLimit): Geo;
  hasGeoLimit(): boolean;
  clearGeoLimit(): Geo;

  getGeoBoxList(): Array<GeoBoxedPoint>;
  setGeoBoxList(value: Array<GeoBoxedPoint>): Geo;
  clearGeoBoxList(): Geo;
  addGeoBox(value?: GeoBoxedPoint, index?: number): GeoBoxedPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Geo.AsObject;
  static toObject(includeInstance: boolean, msg: Geo): Geo.AsObject;
  static serializeBinaryToWriter(message: Geo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Geo;
  static deserializeBinaryFromReader(message: Geo, reader: jspb.BinaryReader): Geo;
}

export namespace Geo {
  export type AsObject = {
    geoPoint?: GeoPoint.AsObject,
    geoLimit?: GeoLimit.AsObject,
    geoBoxList: Array<GeoBoxedPoint.AsObject>,
  }
}

export class Image extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): Image;

  getBase64(): Uint8Array | string;
  getBase64_asU8(): Uint8Array;
  getBase64_asB64(): string;
  setBase64(value: Uint8Array | string): Image;

  getAllowDuplicateUrl(): boolean;
  setAllowDuplicateUrl(value: boolean): Image;

  getHosted(): HostedURL | undefined;
  setHosted(value?: HostedURL): Image;
  hasHosted(): boolean;
  clearHosted(): Image;

  getImageInfo(): ImageInfo | undefined;
  setImageInfo(value?: ImageInfo): Image;
  hasImageInfo(): boolean;
  clearImageInfo(): Image;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    url: string,
    base64: Uint8Array | string,
    allowDuplicateUrl: boolean,
    hosted?: HostedURL.AsObject,
    imageInfo?: ImageInfo.AsObject,
  }
}

export class ImageInfo extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): ImageInfo;

  getHeight(): number;
  setHeight(value: number): ImageInfo;

  getFormat(): string;
  setFormat(value: string): ImageInfo;

  getColorMode(): string;
  setColorMode(value: string): ImageInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImageInfo): ImageInfo.AsObject;
  static serializeBinaryToWriter(message: ImageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageInfo;
  static deserializeBinaryFromReader(message: ImageInfo, reader: jspb.BinaryReader): ImageInfo;
}

export namespace ImageInfo {
  export type AsObject = {
    width: number,
    height: number,
    format: string,
    colorMode: string,
  }
}

export class HostedURL extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): HostedURL;

  getSuffix(): string;
  setSuffix(value: string): HostedURL;

  getSizesList(): Array<string>;
  setSizesList(value: Array<string>): HostedURL;
  clearSizesList(): HostedURL;
  addSizes(value: string, index?: number): HostedURL;

  getCrossorigin(): string;
  setCrossorigin(value: string): HostedURL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostedURL.AsObject;
  static toObject(includeInstance: boolean, msg: HostedURL): HostedURL.AsObject;
  static serializeBinaryToWriter(message: HostedURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostedURL;
  static deserializeBinaryFromReader(message: HostedURL, reader: jspb.BinaryReader): HostedURL;
}

export namespace HostedURL {
  export type AsObject = {
    prefix: string,
    suffix: string,
    sizesList: Array<string>,
    crossorigin: string,
  }
}

export class Input extends jspb.Message {
  getId(): string;
  setId(value: string): Input;

  getData(): Data | undefined;
  setData(value?: Data): Input;
  hasData(): boolean;
  clearData(): Input;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Input;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Input;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Input;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Input;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): Input;
  hasStatus(): boolean;
  clearStatus(): Input;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): Input;
  clearDatasetIdsList(): Input;
  addDatasetIds(value: string, index?: number): Input;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Input.AsObject;
  static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
  static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Input;
  static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
  export type AsObject = {
    id: string,
    data?: Data.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    datasetIdsList: Array<string>,
  }
}

export class InputBatch extends jspb.Message {
  getInputsList(): Array<Input>;
  setInputsList(value: Array<Input>): InputBatch;
  clearInputsList(): InputBatch;
  addInputs(value?: Input, index?: number): Input;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputBatch.AsObject;
  static toObject(includeInstance: boolean, msg: InputBatch): InputBatch.AsObject;
  static serializeBinaryToWriter(message: InputBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputBatch;
  static deserializeBinaryFromReader(message: InputBatch, reader: jspb.BinaryReader): InputBatch;
}

export namespace InputBatch {
  export type AsObject = {
    inputsList: Array<Input.AsObject>,
  }
}

export class InputCount extends jspb.Message {
  getProcessed(): number;
  setProcessed(value: number): InputCount;

  getToProcess(): number;
  setToProcess(value: number): InputCount;

  getErrors(): number;
  setErrors(value: number): InputCount;

  getProcessing(): number;
  setProcessing(value: number): InputCount;

  getReindexed(): number;
  setReindexed(value: number): InputCount;

  getToReindex(): number;
  setToReindex(value: number): InputCount;

  getReindexErrors(): number;
  setReindexErrors(value: number): InputCount;

  getReindexing(): number;
  setReindexing(value: number): InputCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputCount.AsObject;
  static toObject(includeInstance: boolean, msg: InputCount): InputCount.AsObject;
  static serializeBinaryToWriter(message: InputCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputCount;
  static deserializeBinaryFromReader(message: InputCount, reader: jspb.BinaryReader): InputCount;
}

export namespace InputCount {
  export type AsObject = {
    processed: number,
    toProcess: number,
    errors: number,
    processing: number,
    reindexed: number,
    toReindex: number,
    reindexErrors: number,
    reindexing: number,
  }
}

export class Dataset extends jspb.Message {
  getId(): string;
  setId(value: string): Dataset;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dataset;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Dataset;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dataset;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Dataset;

  getAppId(): string;
  setAppId(value: string): Dataset;

  getUserId(): string;
  setUserId(value: string): Dataset;

  getDescription(): string;
  setDescription(value: string): Dataset;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Dataset;
  hasMetadata(): boolean;
  clearMetadata(): Dataset;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): Dataset;
  hasVisibility(): boolean;
  clearVisibility(): Dataset;

  getDefaultAnnotationFilter(): AnnotationFilter | undefined;
  setDefaultAnnotationFilter(value?: AnnotationFilter): Dataset;
  hasDefaultAnnotationFilter(): boolean;
  clearDefaultAnnotationFilter(): Dataset;

  getDefaultProcessingInfo(): DatasetVersionProcessingInfo | undefined;
  setDefaultProcessingInfo(value?: DatasetVersionProcessingInfo): Dataset;
  hasDefaultProcessingInfo(): boolean;
  clearDefaultProcessingInfo(): Dataset;

  getNotes(): string;
  setNotes(value: string): Dataset;

  getVersion(): DatasetVersion | undefined;
  setVersion(value?: DatasetVersion): Dataset;
  hasVersion(): boolean;
  clearVersion(): Dataset;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): Dataset;

  getStarCount(): number;
  setStarCount(value: number): Dataset;

  getBookmarkOrigin(): BookmarkOrigin | undefined;
  setBookmarkOrigin(value?: BookmarkOrigin): Dataset;
  hasBookmarkOrigin(): boolean;
  clearBookmarkOrigin(): Dataset;

  getImage(): Image | undefined;
  setImage(value?: Image): Dataset;
  hasImage(): boolean;
  clearImage(): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    appId: string,
    userId: string,
    description: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    visibility?: Visibility.AsObject,
    defaultAnnotationFilter?: AnnotationFilter.AsObject,
    defaultProcessingInfo?: DatasetVersionProcessingInfo.AsObject,
    notes: string,
    version?: DatasetVersion.AsObject,
    isStarred: boolean,
    starCount: number,
    bookmarkOrigin?: BookmarkOrigin.AsObject,
    image?: Image.AsObject,
  }
}

export class AnnotationFilter extends jspb.Message {
  getId(): string;
  setId(value: string): AnnotationFilter;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AnnotationFilter;
  hasCreatedAt(): boolean;
  clearCreatedAt(): AnnotationFilter;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): AnnotationFilter;
  hasModifiedAt(): boolean;
  clearModifiedAt(): AnnotationFilter;

  getUserId(): string;
  setUserId(value: string): AnnotationFilter;

  getAppId(): string;
  setAppId(value: string): AnnotationFilter;

  getSearch(): Search | undefined;
  setSearch(value?: Search): AnnotationFilter;
  hasSearch(): boolean;
  clearSearch(): AnnotationFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationFilter): AnnotationFilter.AsObject;
  static serializeBinaryToWriter(message: AnnotationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationFilter;
  static deserializeBinaryFromReader(message: AnnotationFilter, reader: jspb.BinaryReader): AnnotationFilter;
}

export namespace AnnotationFilter {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userId: string,
    appId: string,
    search?: Search.AsObject,
  }
}

export class DatasetInput extends jspb.Message {
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DatasetInput;
  hasCreatedAt(): boolean;
  clearCreatedAt(): DatasetInput;

  getInput(): Input | undefined;
  setInput(value?: Input): DatasetInput;
  hasInput(): boolean;
  clearInput(): DatasetInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetInput.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetInput): DatasetInput.AsObject;
  static serializeBinaryToWriter(message: DatasetInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetInput;
  static deserializeBinaryFromReader(message: DatasetInput, reader: jspb.BinaryReader): DatasetInput;
}

export namespace DatasetInput {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    input?: Input.AsObject,
  }
}

export class DatasetVersion extends jspb.Message {
  getId(): string;
  setId(value: string): DatasetVersion;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DatasetVersion;
  hasCreatedAt(): boolean;
  clearCreatedAt(): DatasetVersion;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): DatasetVersion;
  hasModifiedAt(): boolean;
  clearModifiedAt(): DatasetVersion;

  getAppId(): string;
  setAppId(value: string): DatasetVersion;

  getUserId(): string;
  setUserId(value: string): DatasetVersion;

  getDatasetId(): string;
  setDatasetId(value: string): DatasetVersion;

  getAnnotationFilterConfig(): AnnotationFilterConfig | undefined;
  setAnnotationFilterConfig(value?: AnnotationFilterConfig): DatasetVersion;
  hasAnnotationFilterConfig(): boolean;
  clearAnnotationFilterConfig(): DatasetVersion;

  getModelPredictConfig(): ModelPredictConfig | undefined;
  setModelPredictConfig(value?: ModelPredictConfig): DatasetVersion;
  hasModelPredictConfig(): boolean;
  clearModelPredictConfig(): DatasetVersion;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): DatasetVersion;
  hasStatus(): boolean;
  clearStatus(): DatasetVersion;

  getDescription(): string;
  setDescription(value: string): DatasetVersion;

  getProcessingInfo(): DatasetVersionProcessingInfo | undefined;
  setProcessingInfo(value?: DatasetVersionProcessingInfo): DatasetVersion;
  hasProcessingInfo(): boolean;
  clearProcessingInfo(): DatasetVersion;

  getMetricsMap(): jspb.Map<string, DatasetVersionMetrics>;
  clearMetricsMap(): DatasetVersion;

  getExportInfo(): DatasetVersionExportInfo | undefined;
  setExportInfo(value?: DatasetVersionExportInfo): DatasetVersion;
  hasExportInfo(): boolean;
  clearExportInfo(): DatasetVersion;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): DatasetVersion;
  hasMetadata(): boolean;
  clearMetadata(): DatasetVersion;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): DatasetVersion;
  hasVisibility(): boolean;
  clearVisibility(): DatasetVersion;

  getEmbedModelVersionIdsList(): Array<string>;
  setEmbedModelVersionIdsList(value: Array<string>): DatasetVersion;
  clearEmbedModelVersionIdsList(): DatasetVersion;
  addEmbedModelVersionIds(value: string, index?: number): DatasetVersion;

  getRequestOrigin(): DatasetVersionRequestOrigin;
  setRequestOrigin(value: DatasetVersionRequestOrigin): DatasetVersion;

  getDataConfigCase(): DatasetVersion.DataConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetVersion.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetVersion): DatasetVersion.AsObject;
  static serializeBinaryToWriter(message: DatasetVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetVersion;
  static deserializeBinaryFromReader(message: DatasetVersion, reader: jspb.BinaryReader): DatasetVersion;
}

export namespace DatasetVersion {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    appId: string,
    userId: string,
    datasetId: string,
    annotationFilterConfig?: AnnotationFilterConfig.AsObject,
    modelPredictConfig?: ModelPredictConfig.AsObject,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    description: string,
    processingInfo?: DatasetVersionProcessingInfo.AsObject,
    metricsMap: Array<[string, DatasetVersionMetrics.AsObject]>,
    exportInfo?: DatasetVersionExportInfo.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    visibility?: Visibility.AsObject,
    embedModelVersionIdsList: Array<string>,
    requestOrigin: DatasetVersionRequestOrigin,
  }

  export enum DataConfigCase { 
    DATA_CONFIG_NOT_SET = 0,
    ANNOTATION_FILTER_CONFIG = 15,
    MODEL_PREDICT_CONFIG = 18,
  }
}

export class AnnotationFilterConfig extends jspb.Message {
  getAnnotationFilter(): AnnotationFilter | undefined;
  setAnnotationFilter(value?: AnnotationFilter): AnnotationFilterConfig;
  hasAnnotationFilter(): boolean;
  clearAnnotationFilter(): AnnotationFilterConfig;

  getIgnoreEmptyInputs(): boolean;
  setIgnoreEmptyInputs(value: boolean): AnnotationFilterConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationFilterConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationFilterConfig): AnnotationFilterConfig.AsObject;
  static serializeBinaryToWriter(message: AnnotationFilterConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationFilterConfig;
  static deserializeBinaryFromReader(message: AnnotationFilterConfig, reader: jspb.BinaryReader): AnnotationFilterConfig;
}

export namespace AnnotationFilterConfig {
  export type AsObject = {
    annotationFilter?: AnnotationFilter.AsObject,
    ignoreEmptyInputs: boolean,
  }
}

export class ModelPredictConfig extends jspb.Message {
  getModel(): Model | undefined;
  setModel(value?: Model): ModelPredictConfig;
  hasModel(): boolean;
  clearModel(): ModelPredictConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelPredictConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ModelPredictConfig): ModelPredictConfig.AsObject;
  static serializeBinaryToWriter(message: ModelPredictConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelPredictConfig;
  static deserializeBinaryFromReader(message: ModelPredictConfig, reader: jspb.BinaryReader): ModelPredictConfig;
}

export namespace ModelPredictConfig {
  export type AsObject = {
    model?: Model.AsObject,
  }
}

export class DatasetVersionMetrics extends jspb.Message {
  getInputsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setInputsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasInputsCount(): boolean;
  clearInputsCount(): DatasetVersionMetrics;

  getUnlabeledInputsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setUnlabeledInputsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasUnlabeledInputsCount(): boolean;
  clearUnlabeledInputsCount(): DatasetVersionMetrics;

  getInputsWithMetadataCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setInputsWithMetadataCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasInputsWithMetadataCount(): boolean;
  clearInputsWithMetadataCount(): DatasetVersionMetrics;

  getInputsWithGeoCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setInputsWithGeoCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasInputsWithGeoCount(): boolean;
  clearInputsWithGeoCount(): DatasetVersionMetrics;

  getRegionsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setRegionsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasRegionsCount(): boolean;
  clearRegionsCount(): DatasetVersionMetrics;

  getRegionLocationMatrix(): proto_clarifai_api_utils_matrix_pb.MatrixUint64 | undefined;
  setRegionLocationMatrix(value?: proto_clarifai_api_utils_matrix_pb.MatrixUint64): DatasetVersionMetrics;
  hasRegionLocationMatrix(): boolean;
  clearRegionLocationMatrix(): DatasetVersionMetrics;

  getBoundingBoxesCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setBoundingBoxesCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasBoundingBoxesCount(): boolean;
  clearBoundingBoxesCount(): DatasetVersionMetrics;

  getPolygonsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPolygonsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasPolygonsCount(): boolean;
  clearPolygonsCount(): DatasetVersionMetrics;

  getPointsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPointsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasPointsCount(): boolean;
  clearPointsCount(): DatasetVersionMetrics;

  getMasksCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setMasksCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasMasksCount(): boolean;
  clearMasksCount(): DatasetVersionMetrics;

  getRegionInputsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setRegionInputsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasRegionInputsCount(): boolean;
  clearRegionInputsCount(): DatasetVersionMetrics;

  getRegionFramesCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setRegionFramesCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasRegionFramesCount(): boolean;
  clearRegionFramesCount(): DatasetVersionMetrics;

  getFramesCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFramesCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasFramesCount(): boolean;
  clearFramesCount(): DatasetVersionMetrics;

  getFrameInputsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFrameInputsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasFrameInputsCount(): boolean;
  clearFrameInputsCount(): DatasetVersionMetrics;

  getEmbeddingsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setEmbeddingsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasEmbeddingsCount(): boolean;
  clearEmbeddingsCount(): DatasetVersionMetrics;

  getPositiveInputTagsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPositiveInputTagsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasPositiveInputTagsCount(): boolean;
  clearPositiveInputTagsCount(): DatasetVersionMetrics;

  getPositiveRegionTagsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPositiveRegionTagsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasPositiveRegionTagsCount(): boolean;
  clearPositiveRegionTagsCount(): DatasetVersionMetrics;

  getPositiveFrameTagsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPositiveFrameTagsCount(value?: google_protobuf_wrappers_pb.UInt64Value): DatasetVersionMetrics;
  hasPositiveFrameTagsCount(): boolean;
  clearPositiveFrameTagsCount(): DatasetVersionMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetVersionMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetVersionMetrics): DatasetVersionMetrics.AsObject;
  static serializeBinaryToWriter(message: DatasetVersionMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetVersionMetrics;
  static deserializeBinaryFromReader(message: DatasetVersionMetrics, reader: jspb.BinaryReader): DatasetVersionMetrics;
}

export namespace DatasetVersionMetrics {
  export type AsObject = {
    inputsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    unlabeledInputsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    inputsWithMetadataCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    inputsWithGeoCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    regionsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    regionLocationMatrix?: proto_clarifai_api_utils_matrix_pb.MatrixUint64.AsObject,
    boundingBoxesCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    polygonsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    pointsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    masksCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    regionInputsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    regionFramesCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    framesCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    frameInputsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    embeddingsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    positiveInputTagsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    positiveRegionTagsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    positiveFrameTagsCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class DatasetVersionMetricsGroup extends jspb.Message {
  getParentPath(): string;
  setParentPath(value: string): DatasetVersionMetricsGroup;

  getType(): DatasetVersionMetricsGroupType;
  setType(value: DatasetVersionMetricsGroupType): DatasetVersionMetricsGroup;

  getValue(): google_protobuf_struct_pb.Value | undefined;
  setValue(value?: google_protobuf_struct_pb.Value): DatasetVersionMetricsGroup;
  hasValue(): boolean;
  clearValue(): DatasetVersionMetricsGroup;

  getMetrics(): DatasetVersionMetrics | undefined;
  setMetrics(value?: DatasetVersionMetrics): DatasetVersionMetricsGroup;
  hasMetrics(): boolean;
  clearMetrics(): DatasetVersionMetricsGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetVersionMetricsGroup.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetVersionMetricsGroup): DatasetVersionMetricsGroup.AsObject;
  static serializeBinaryToWriter(message: DatasetVersionMetricsGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetVersionMetricsGroup;
  static deserializeBinaryFromReader(message: DatasetVersionMetricsGroup, reader: jspb.BinaryReader): DatasetVersionMetricsGroup;
}

export namespace DatasetVersionMetricsGroup {
  export type AsObject = {
    parentPath: string,
    type: DatasetVersionMetricsGroupType,
    value?: google_protobuf_struct_pb.Value.AsObject,
    metrics?: DatasetVersionMetrics.AsObject,
  }
}

export class DatasetVersionExportInfo extends jspb.Message {
  getClarifaiDataProtobuf(): DatasetVersionExport | undefined;
  setClarifaiDataProtobuf(value?: DatasetVersionExport): DatasetVersionExportInfo;
  hasClarifaiDataProtobuf(): boolean;
  clearClarifaiDataProtobuf(): DatasetVersionExportInfo;

  getClarifaiDataJson(): DatasetVersionExport | undefined;
  setClarifaiDataJson(value?: DatasetVersionExport): DatasetVersionExportInfo;
  hasClarifaiDataJson(): boolean;
  clearClarifaiDataJson(): DatasetVersionExportInfo;

  getCoco(): DatasetVersionExport | undefined;
  setCoco(value?: DatasetVersionExport): DatasetVersionExportInfo;
  hasCoco(): boolean;
  clearCoco(): DatasetVersionExportInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetVersionExportInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetVersionExportInfo): DatasetVersionExportInfo.AsObject;
  static serializeBinaryToWriter(message: DatasetVersionExportInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetVersionExportInfo;
  static deserializeBinaryFromReader(message: DatasetVersionExportInfo, reader: jspb.BinaryReader): DatasetVersionExportInfo;
}

export namespace DatasetVersionExportInfo {
  export type AsObject = {
    clarifaiDataProtobuf?: DatasetVersionExport.AsObject,
    clarifaiDataJson?: DatasetVersionExport.AsObject,
    coco?: DatasetVersionExport.AsObject,
  }
}

export class DatasetVersionExport extends jspb.Message {
  getFormat(): DatasetVersionExportFormat;
  setFormat(value: DatasetVersionExportFormat): DatasetVersionExport;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): DatasetVersionExport;
  hasStatus(): boolean;
  clearStatus(): DatasetVersionExport;

  getUrl(): string;
  setUrl(value: string): DatasetVersionExport;

  getSize(): number;
  setSize(value: number): DatasetVersionExport;

  getIncludeEmbeddings(): boolean;
  setIncludeEmbeddings(value: boolean): DatasetVersionExport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetVersionExport.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetVersionExport): DatasetVersionExport.AsObject;
  static serializeBinaryToWriter(message: DatasetVersionExport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetVersionExport;
  static deserializeBinaryFromReader(message: DatasetVersionExport, reader: jspb.BinaryReader): DatasetVersionExport;
}

export namespace DatasetVersionExport {
  export type AsObject = {
    format: DatasetVersionExportFormat,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    url: string,
    size: number,
    includeEmbeddings: boolean,
  }
}

export class DatasetVersionProcessingInfo extends jspb.Message {
  getFrameInterpolationInfo(): FrameInterpolationInfo | undefined;
  setFrameInterpolationInfo(value?: FrameInterpolationInfo): DatasetVersionProcessingInfo;
  hasFrameInterpolationInfo(): boolean;
  clearFrameInterpolationInfo(): DatasetVersionProcessingInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetVersionProcessingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetVersionProcessingInfo): DatasetVersionProcessingInfo.AsObject;
  static serializeBinaryToWriter(message: DatasetVersionProcessingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetVersionProcessingInfo;
  static deserializeBinaryFromReader(message: DatasetVersionProcessingInfo, reader: jspb.BinaryReader): DatasetVersionProcessingInfo;
}

export namespace DatasetVersionProcessingInfo {
  export type AsObject = {
    frameInterpolationInfo?: FrameInterpolationInfo.AsObject,
  }
}

export class FrameInterpolationInfo extends jspb.Message {
  getSampleMs(): number;
  setSampleMs(value: number): FrameInterpolationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameInterpolationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FrameInterpolationInfo): FrameInterpolationInfo.AsObject;
  static serializeBinaryToWriter(message: FrameInterpolationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameInterpolationInfo;
  static deserializeBinaryFromReader(message: FrameInterpolationInfo, reader: jspb.BinaryReader): FrameInterpolationInfo;
}

export namespace FrameInterpolationInfo {
  export type AsObject = {
    sampleMs: number,
  }
}

export class WorkflowResultsSimilarity extends jspb.Message {
  getProbeInput(): Input | undefined;
  setProbeInput(value?: Input): WorkflowResultsSimilarity;
  hasProbeInput(): boolean;
  clearProbeInput(): WorkflowResultsSimilarity;

  getPoolResultsList(): Array<Hit>;
  setPoolResultsList(value: Array<Hit>): WorkflowResultsSimilarity;
  clearPoolResultsList(): WorkflowResultsSimilarity;
  addPoolResults(value?: Hit, index?: number): Hit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowResultsSimilarity.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowResultsSimilarity): WorkflowResultsSimilarity.AsObject;
  static serializeBinaryToWriter(message: WorkflowResultsSimilarity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowResultsSimilarity;
  static deserializeBinaryFromReader(message: WorkflowResultsSimilarity, reader: jspb.BinaryReader): WorkflowResultsSimilarity;
}

export namespace WorkflowResultsSimilarity {
  export type AsObject = {
    probeInput?: Input.AsObject,
    poolResultsList: Array<Hit.AsObject>,
  }
}

export class Key extends jspb.Message {
  getId(): string;
  setId(value: string): Key;

  getType(): string;
  setType(value: string): Key;

  getDescription(): string;
  setDescription(value: string): Key;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): Key;
  clearScopesList(): Key;
  addScopes(value: string, index?: number): Key;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): Key;
  clearEndpointsList(): Key;
  addEndpoints(value: string, index?: number): Key;

  getAppsList(): Array<App>;
  setAppsList(value: Array<App>): Key;
  clearAppsList(): Key;
  addApps(value?: App, index?: number): App;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Key;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasExpiresAt(): boolean;
  clearExpiresAt(): Key;

  getAuthorizedIdpIdsList(): Array<string>;
  setAuthorizedIdpIdsList(value: Array<string>): Key;
  clearAuthorizedIdpIdsList(): Key;
  addAuthorizedIdpIds(value: string, index?: number): Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    id: string,
    type: string,
    description: string,
    scopesList: Array<string>,
    endpointsList: Array<string>,
    appsList: Array<App.AsObject>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authorizedIdpIdsList: Array<string>,
  }
}

export class Model extends jspb.Message {
  getId(): string;
  setId(value: string): Model;

  getName(): string;
  setName(value: string): Model;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Model;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Model;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Model;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Model;

  getAppId(): string;
  setAppId(value: string): Model;

  getOutputInfo(): OutputInfo | undefined;
  setOutputInfo(value?: OutputInfo): Model;
  hasOutputInfo(): boolean;
  clearOutputInfo(): Model;

  getModelVersion(): ModelVersion | undefined;
  setModelVersion(value?: ModelVersion): Model;
  hasModelVersion(): boolean;
  clearModelVersion(): Model;

  getDisplayName(): string;
  setDisplayName(value: string): Model;

  getUserId(): string;
  setUserId(value: string): Model;

  getDefaultEvalInfo(): EvalInfo | undefined;
  setDefaultEvalInfo(value?: EvalInfo): Model;
  hasDefaultEvalInfo(): boolean;
  clearDefaultEvalInfo(): Model;

  getModelTypeId(): string;
  setModelTypeId(value: string): Model;

  getTask(): string;
  setTask(value: string): Model;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): Model;
  hasVisibility(): boolean;
  clearVisibility(): Model;

  getDescription(): string;
  setDescription(value: string): Model;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Model;
  hasMetadata(): boolean;
  clearMetadata(): Model;

  getPresets(): google_protobuf_struct_pb.Struct | undefined;
  setPresets(value?: google_protobuf_struct_pb.Struct): Model;
  hasPresets(): boolean;
  clearPresets(): Model;

  getNotes(): string;
  setNotes(value: string): Model;

  getToolkitsList(): Array<string>;
  setToolkitsList(value: Array<string>): Model;
  clearToolkitsList(): Model;
  addToolkits(value: string, index?: number): Model;

  getUseCasesList(): Array<string>;
  setUseCasesList(value: Array<string>): Model;
  clearUseCasesList(): Model;
  addUseCases(value: string, index?: number): Model;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): Model;
  clearLanguagesList(): Model;
  addLanguages(value: string, index?: number): Model;

  getLanguagesFullList(): Array<FullTag>;
  setLanguagesFullList(value: Array<FullTag>): Model;
  clearLanguagesFullList(): Model;
  addLanguagesFull(value?: FullTag, index?: number): FullTag;

  getCheckConsentsList(): Array<string>;
  setCheckConsentsList(value: Array<string>): Model;
  clearCheckConsentsList(): Model;
  addCheckConsents(value: string, index?: number): Model;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): Model;

  getStarCount(): number;
  setStarCount(value: number): Model;

  getWorkflowRecommended(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setWorkflowRecommended(value?: google_protobuf_wrappers_pb.BoolValue): Model;
  hasWorkflowRecommended(): boolean;
  clearWorkflowRecommended(): Model;

  getBookmarkOrigin(): BookmarkOrigin | undefined;
  setBookmarkOrigin(value?: BookmarkOrigin): Model;
  hasBookmarkOrigin(): boolean;
  clearBookmarkOrigin(): Model;

  getImage(): Image | undefined;
  setImage(value?: Image): Model;
  hasImage(): boolean;
  clearImage(): Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    id: string,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    appId: string,
    outputInfo?: OutputInfo.AsObject,
    modelVersion?: ModelVersion.AsObject,
    displayName: string,
    userId: string,
    defaultEvalInfo?: EvalInfo.AsObject,
    modelTypeId: string,
    task: string,
    visibility?: Visibility.AsObject,
    description: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    presets?: google_protobuf_struct_pb.Struct.AsObject,
    notes: string,
    toolkitsList: Array<string>,
    useCasesList: Array<string>,
    languagesList: Array<string>,
    languagesFullList: Array<FullTag.AsObject>,
    checkConsentsList: Array<string>,
    isStarred: boolean,
    starCount: number,
    workflowRecommended?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    bookmarkOrigin?: BookmarkOrigin.AsObject,
    image?: Image.AsObject,
  }
}

export class ModelReference extends jspb.Message {
  getId(): string;
  setId(value: string): ModelReference;

  getModelId(): string;
  setModelId(value: string): ModelReference;

  getUrl(): string;
  setUrl(value: string): ModelReference;

  getName(): string;
  setName(value: string): ModelReference;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): ModelReference;
  hasMetadata(): boolean;
  clearMetadata(): ModelReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelReference.AsObject;
  static toObject(includeInstance: boolean, msg: ModelReference): ModelReference.AsObject;
  static serializeBinaryToWriter(message: ModelReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelReference;
  static deserializeBinaryFromReader(message: ModelReference, reader: jspb.BinaryReader): ModelReference;
}

export namespace ModelReference {
  export type AsObject = {
    id: string,
    modelId: string,
    url: string,
    name: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ModelVersionInputExample extends jspb.Message {
  getId(): string;
  setId(value: string): ModelVersionInputExample;

  getModelId(): string;
  setModelId(value: string): ModelVersionInputExample;

  getModelVersionId(): string;
  setModelVersionId(value: string): ModelVersionInputExample;

  getData(): Data | undefined;
  setData(value?: Data): ModelVersionInputExample;
  hasData(): boolean;
  clearData(): ModelVersionInputExample;

  getName(): string;
  setName(value: string): ModelVersionInputExample;

  getDescription(): string;
  setDescription(value: string): ModelVersionInputExample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelVersionInputExample.AsObject;
  static toObject(includeInstance: boolean, msg: ModelVersionInputExample): ModelVersionInputExample.AsObject;
  static serializeBinaryToWriter(message: ModelVersionInputExample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelVersionInputExample;
  static deserializeBinaryFromReader(message: ModelVersionInputExample, reader: jspb.BinaryReader): ModelVersionInputExample;
}

export namespace ModelVersionInputExample {
  export type AsObject = {
    id: string,
    modelId: string,
    modelVersionId: string,
    data?: Data.AsObject,
    name: string,
    description: string,
  }
}

export class OutputInfo extends jspb.Message {
  getData(): Data | undefined;
  setData(value?: Data): OutputInfo;
  hasData(): boolean;
  clearData(): OutputInfo;

  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): OutputInfo;
  hasOutputConfig(): boolean;
  clearOutputConfig(): OutputInfo;

  getMessage(): string;
  setMessage(value: string): OutputInfo;

  getFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setFieldsMap(value?: google_protobuf_struct_pb.Struct): OutputInfo;
  hasFieldsMap(): boolean;
  clearFieldsMap(): OutputInfo;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): OutputInfo;
  hasParams(): boolean;
  clearParams(): OutputInfo;

  getParamsSpecsList(): Array<ModelTypeField>;
  setParamsSpecsList(value: Array<ModelTypeField>): OutputInfo;
  clearParamsSpecsList(): OutputInfo;
  addParamsSpecs(value?: ModelTypeField, index?: number): ModelTypeField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OutputInfo): OutputInfo.AsObject;
  static serializeBinaryToWriter(message: OutputInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputInfo;
  static deserializeBinaryFromReader(message: OutputInfo, reader: jspb.BinaryReader): OutputInfo;
}

export namespace OutputInfo {
  export type AsObject = {
    data?: Data.AsObject,
    outputConfig?: OutputConfig.AsObject,
    message: string,
    fieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    paramsSpecsList: Array<ModelTypeField.AsObject>,
  }
}

export class InputInfo extends jspb.Message {
  getFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setFieldsMap(value?: google_protobuf_struct_pb.Struct): InputInfo;
  hasFieldsMap(): boolean;
  clearFieldsMap(): InputInfo;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): InputInfo;
  hasParams(): boolean;
  clearParams(): InputInfo;

  getBaseEmbedModel(): Model | undefined;
  setBaseEmbedModel(value?: Model): InputInfo;
  hasBaseEmbedModel(): boolean;
  clearBaseEmbedModel(): InputInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InputInfo): InputInfo.AsObject;
  static serializeBinaryToWriter(message: InputInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputInfo;
  static deserializeBinaryFromReader(message: InputInfo, reader: jspb.BinaryReader): InputInfo;
}

export namespace InputInfo {
  export type AsObject = {
    fieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    baseEmbedModel?: Model.AsObject,
  }
}

export class TrainInfo extends jspb.Message {
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): TrainInfo;
  hasParams(): boolean;
  clearParams(): TrainInfo;

  getDataset(): Dataset | undefined;
  setDataset(value?: Dataset): TrainInfo;
  hasDataset(): boolean;
  clearDataset(): TrainInfo;

  getResumeFromModel(): Model | undefined;
  setResumeFromModel(value?: Model): TrainInfo;
  hasResumeFromModel(): boolean;
  clearResumeFromModel(): TrainInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TrainInfo): TrainInfo.AsObject;
  static serializeBinaryToWriter(message: TrainInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainInfo;
  static deserializeBinaryFromReader(message: TrainInfo, reader: jspb.BinaryReader): TrainInfo;
}

export namespace TrainInfo {
  export type AsObject = {
    params?: google_protobuf_struct_pb.Struct.AsObject,
    dataset?: Dataset.AsObject,
    resumeFromModel?: Model.AsObject,
  }
}

export class EvalInfo extends jspb.Message {
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): EvalInfo;
  hasParams(): boolean;
  clearParams(): EvalInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EvalInfo): EvalInfo.AsObject;
  static serializeBinaryToWriter(message: EvalInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalInfo;
  static deserializeBinaryFromReader(message: EvalInfo, reader: jspb.BinaryReader): EvalInfo;
}

export namespace EvalInfo {
  export type AsObject = {
    params?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ImportInfo extends jspb.Message {
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): ImportInfo;
  hasParams(): boolean;
  clearParams(): ImportInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImportInfo): ImportInfo.AsObject;
  static serializeBinaryToWriter(message: ImportInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportInfo;
  static deserializeBinaryFromReader(message: ImportInfo, reader: jspb.BinaryReader): ImportInfo;
}

export namespace ImportInfo {
  export type AsObject = {
    params?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class OutputConfig extends jspb.Message {
  getConceptsMutuallyExclusive(): boolean;
  setConceptsMutuallyExclusive(value: boolean): OutputConfig;

  getExistingModelId(): string;
  setExistingModelId(value: string): OutputConfig;

  getLanguage(): string;
  setLanguage(value: string): OutputConfig;

  getHyperParameters(): string;
  setHyperParameters(value: string): OutputConfig;

  getMaxConcepts(): number;
  setMaxConcepts(value: number): OutputConfig;

  getMinValue(): number;
  setMinValue(value: number): OutputConfig;

  getSelectConceptsList(): Array<Concept>;
  setSelectConceptsList(value: Array<Concept>): OutputConfig;
  clearSelectConceptsList(): OutputConfig;
  addSelectConcepts(value?: Concept, index?: number): Concept;

  getTrainingTimeout(): number;
  setTrainingTimeout(value: number): OutputConfig;

  getSampleMs(): number;
  setSampleMs(value: number): OutputConfig;

  getHyperParams(): google_protobuf_struct_pb.Struct | undefined;
  setHyperParams(value?: google_protobuf_struct_pb.Struct): OutputConfig;
  hasHyperParams(): boolean;
  clearHyperParams(): OutputConfig;

  getEmbedModelVersionId(): string;
  setEmbedModelVersionId(value: string): OutputConfig;

  getFailOnMissingPositiveExamples(): boolean;
  setFailOnMissingPositiveExamples(value: boolean): OutputConfig;

  getModelMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setModelMetadata(value?: google_protobuf_struct_pb.Struct): OutputConfig;
  hasModelMetadata(): boolean;
  clearModelMetadata(): OutputConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputConfig): OutputConfig.AsObject;
  static serializeBinaryToWriter(message: OutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputConfig;
  static deserializeBinaryFromReader(message: OutputConfig, reader: jspb.BinaryReader): OutputConfig;
}

export namespace OutputConfig {
  export type AsObject = {
    conceptsMutuallyExclusive: boolean,
    existingModelId: string,
    language: string,
    hyperParameters: string,
    maxConcepts: number,
    minValue: number,
    selectConceptsList: Array<Concept.AsObject>,
    trainingTimeout: number,
    sampleMs: number,
    hyperParams?: google_protobuf_struct_pb.Struct.AsObject,
    embedModelVersionId: string,
    failOnMissingPositiveExamples: boolean,
    modelMetadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ModelType extends jspb.Message {
  getId(): string;
  setId(value: string): ModelType;

  getTitle(): string;
  setTitle(value: string): ModelType;

  getDescription(): string;
  setDescription(value: string): ModelType;

  getInputFieldsList(): Array<string>;
  setInputFieldsList(value: Array<string>): ModelType;
  clearInputFieldsList(): ModelType;
  addInputFields(value: string, index?: number): ModelType;

  getOutputFieldsList(): Array<string>;
  setOutputFieldsList(value: Array<string>): ModelType;
  clearOutputFieldsList(): ModelType;
  addOutputFields(value: string, index?: number): ModelType;

  getTrainable(): boolean;
  setTrainable(value: boolean): ModelType;

  getCreatable(): boolean;
  setCreatable(value: boolean): ModelType;

  getInternalOnly(): boolean;
  setInternalOnly(value: boolean): ModelType;

  getModelTypeFieldsList(): Array<ModelTypeField>;
  setModelTypeFieldsList(value: Array<ModelTypeField>): ModelType;
  clearModelTypeFieldsList(): ModelType;
  addModelTypeFields(value?: ModelTypeField, index?: number): ModelTypeField;

  getRequiresSequentialFrames(): boolean;
  setRequiresSequentialFrames(value: boolean): ModelType;

  getExpectedInputLayersList(): Array<ModelLayerInfo>;
  setExpectedInputLayersList(value: Array<ModelLayerInfo>): ModelType;
  clearExpectedInputLayersList(): ModelType;
  addExpectedInputLayers(value?: ModelLayerInfo, index?: number): ModelLayerInfo;

  getExpectedOutputLayersList(): Array<ModelLayerInfo>;
  setExpectedOutputLayersList(value: Array<ModelLayerInfo>): ModelType;
  clearExpectedOutputLayersList(): ModelType;
  addExpectedOutputLayers(value?: ModelLayerInfo, index?: number): ModelLayerInfo;

  getEvaluationType(): EvaluationType;
  setEvaluationType(value: EvaluationType): ModelType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelType.AsObject;
  static toObject(includeInstance: boolean, msg: ModelType): ModelType.AsObject;
  static serializeBinaryToWriter(message: ModelType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelType;
  static deserializeBinaryFromReader(message: ModelType, reader: jspb.BinaryReader): ModelType;
}

export namespace ModelType {
  export type AsObject = {
    id: string,
    title: string,
    description: string,
    inputFieldsList: Array<string>,
    outputFieldsList: Array<string>,
    trainable: boolean,
    creatable: boolean,
    internalOnly: boolean,
    modelTypeFieldsList: Array<ModelTypeField.AsObject>,
    requiresSequentialFrames: boolean,
    expectedInputLayersList: Array<ModelLayerInfo.AsObject>,
    expectedOutputLayersList: Array<ModelLayerInfo.AsObject>,
    evaluationType: EvaluationType,
  }
}

export class ModelLayerInfo extends jspb.Message {
  getDataFieldName(): string;
  setDataFieldName(value: string): ModelLayerInfo;

  getShapesList(): Array<LayerShape>;
  setShapesList(value: Array<LayerShape>): ModelLayerInfo;
  clearShapesList(): ModelLayerInfo;
  addShapes(value?: LayerShape, index?: number): LayerShape;

  getDescription(): string;
  setDescription(value: string): ModelLayerInfo;

  getRequiresLabelFilename(): boolean;
  setRequiresLabelFilename(value: boolean): ModelLayerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelLayerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModelLayerInfo): ModelLayerInfo.AsObject;
  static serializeBinaryToWriter(message: ModelLayerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelLayerInfo;
  static deserializeBinaryFromReader(message: ModelLayerInfo, reader: jspb.BinaryReader): ModelLayerInfo;
}

export namespace ModelLayerInfo {
  export type AsObject = {
    dataFieldName: string,
    shapesList: Array<LayerShape.AsObject>,
    description: string,
    requiresLabelFilename: boolean,
  }
}

export class TritonCondaEnvInfo extends jspb.Message {
  getCondaPackUrl(): string;
  setCondaPackUrl(value: string): TritonCondaEnvInfo;

  getCondaYamlUrl(): string;
  setCondaYamlUrl(value: string): TritonCondaEnvInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TritonCondaEnvInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TritonCondaEnvInfo): TritonCondaEnvInfo.AsObject;
  static serializeBinaryToWriter(message: TritonCondaEnvInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TritonCondaEnvInfo;
  static deserializeBinaryFromReader(message: TritonCondaEnvInfo, reader: jspb.BinaryReader): TritonCondaEnvInfo;
}

export namespace TritonCondaEnvInfo {
  export type AsObject = {
    condaPackUrl: string,
    condaYamlUrl: string,
  }
}

export class LayerShape extends jspb.Message {
  getDimsList(): Array<number>;
  setDimsList(value: Array<number>): LayerShape;
  clearDimsList(): LayerShape;
  addDims(value: number, index?: number): LayerShape;

  getMaxDimsList(): Array<number>;
  setMaxDimsList(value: Array<number>): LayerShape;
  clearMaxDimsList(): LayerShape;
  addMaxDims(value: number, index?: number): LayerShape;

  getDataType(): DataType;
  setDataType(value: DataType): LayerShape;

  getDescription(): string;
  setDescription(value: string): LayerShape;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LayerShape.AsObject;
  static toObject(includeInstance: boolean, msg: LayerShape): LayerShape.AsObject;
  static serializeBinaryToWriter(message: LayerShape, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LayerShape;
  static deserializeBinaryFromReader(message: LayerShape, reader: jspb.BinaryReader): LayerShape;
}

export namespace LayerShape {
  export type AsObject = {
    dimsList: Array<number>,
    maxDimsList: Array<number>,
    dataType: DataType,
    description: string,
  }
}

export class ModelTypeField extends jspb.Message {
  getPath(): string;
  setPath(value: string): ModelTypeField;

  getFieldType(): ModelTypeField.ModelTypeFieldType;
  setFieldType(value: ModelTypeField.ModelTypeFieldType): ModelTypeField;

  getDefaultValue(): google_protobuf_struct_pb.Value | undefined;
  setDefaultValue(value?: google_protobuf_struct_pb.Value): ModelTypeField;
  hasDefaultValue(): boolean;
  clearDefaultValue(): ModelTypeField;

  getDescription(): string;
  setDescription(value: string): ModelTypeField;

  getPlaceholder(): string;
  setPlaceholder(value: string): ModelTypeField;

  getModelTypeEnumOptionsList(): Array<ModelTypeEnumOption>;
  setModelTypeEnumOptionsList(value: Array<ModelTypeEnumOption>): ModelTypeField;
  clearModelTypeEnumOptionsList(): ModelTypeField;
  addModelTypeEnumOptions(value?: ModelTypeEnumOption, index?: number): ModelTypeEnumOption;

  getInternalOnly(): boolean;
  setInternalOnly(value: boolean): ModelTypeField;

  getRequired(): boolean;
  setRequired(value: boolean): ModelTypeField;

  getModelTypeRangeInfo(): ModelTypeRangeInfo | undefined;
  setModelTypeRangeInfo(value?: ModelTypeRangeInfo): ModelTypeField;
  hasModelTypeRangeInfo(): boolean;
  clearModelTypeRangeInfo(): ModelTypeField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelTypeField.AsObject;
  static toObject(includeInstance: boolean, msg: ModelTypeField): ModelTypeField.AsObject;
  static serializeBinaryToWriter(message: ModelTypeField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelTypeField;
  static deserializeBinaryFromReader(message: ModelTypeField, reader: jspb.BinaryReader): ModelTypeField;
}

export namespace ModelTypeField {
  export type AsObject = {
    path: string,
    fieldType: ModelTypeField.ModelTypeFieldType,
    defaultValue?: google_protobuf_struct_pb.Value.AsObject,
    description: string,
    placeholder: string,
    modelTypeEnumOptionsList: Array<ModelTypeEnumOption.AsObject>,
    internalOnly: boolean,
    required: boolean,
    modelTypeRangeInfo?: ModelTypeRangeInfo.AsObject,
  }

  export enum ModelTypeFieldType { 
    INVALID_MODEL_TYPE_FIELD_TYPE = 0,
    BOOLEAN = 1,
    STRING = 2,
    NUMBER = 3,
    ARRAY_OF_CONCEPTS = 4,
    ARRAY_OF_CONCEPTS_WITH_THRESHOLD = 5,
    RANGE = 7,
    ENUM = 8,
    COLLABORATORS = 9,
    JSON = 10,
    ARRAY_OF_NUMBERS = 11,
    WORKFLOW_EMBED_MODELS = 12,
    ARRAY_OF_STRINGS = 13,
    RECURSIVE_ENUM = 14,
    PYTHON_CODE = 15,
    DATASET_ID = 16,
    DATASET_VERSION_ID = 17,
    ARRAY_OF_MODEL_CONCEPTS = 18,
    DATASET = 19,
    DATASET_VERSION = 20,
    ENCRYPTED_STRING = 21,
    CHECKPOINT_MODEL = 22,
  }
}

export class ModelTypeRangeInfo extends jspb.Message {
  getMin(): number;
  setMin(value: number): ModelTypeRangeInfo;

  getMax(): number;
  setMax(value: number): ModelTypeRangeInfo;

  getStep(): number;
  setStep(value: number): ModelTypeRangeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelTypeRangeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModelTypeRangeInfo): ModelTypeRangeInfo.AsObject;
  static serializeBinaryToWriter(message: ModelTypeRangeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelTypeRangeInfo;
  static deserializeBinaryFromReader(message: ModelTypeRangeInfo, reader: jspb.BinaryReader): ModelTypeRangeInfo;
}

export namespace ModelTypeRangeInfo {
  export type AsObject = {
    min: number,
    max: number,
    step: number,
  }
}

export class ModelTypeEnumOption extends jspb.Message {
  getId(): string;
  setId(value: string): ModelTypeEnumOption;

  getAliasesList(): Array<ModelTypeEnumOptionAlias>;
  setAliasesList(value: Array<ModelTypeEnumOptionAlias>): ModelTypeEnumOption;
  clearAliasesList(): ModelTypeEnumOption;
  addAliases(value?: ModelTypeEnumOptionAlias, index?: number): ModelTypeEnumOptionAlias;

  getDescription(): string;
  setDescription(value: string): ModelTypeEnumOption;

  getModelTypeFieldsList(): Array<ModelTypeField>;
  setModelTypeFieldsList(value: Array<ModelTypeField>): ModelTypeEnumOption;
  clearModelTypeFieldsList(): ModelTypeEnumOption;
  addModelTypeFields(value?: ModelTypeField, index?: number): ModelTypeField;

  getInternalOnly(): boolean;
  setInternalOnly(value: boolean): ModelTypeEnumOption;

  getRecommended(): boolean;
  setRecommended(value: boolean): ModelTypeEnumOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelTypeEnumOption.AsObject;
  static toObject(includeInstance: boolean, msg: ModelTypeEnumOption): ModelTypeEnumOption.AsObject;
  static serializeBinaryToWriter(message: ModelTypeEnumOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelTypeEnumOption;
  static deserializeBinaryFromReader(message: ModelTypeEnumOption, reader: jspb.BinaryReader): ModelTypeEnumOption;
}

export namespace ModelTypeEnumOption {
  export type AsObject = {
    id: string,
    aliasesList: Array<ModelTypeEnumOptionAlias.AsObject>,
    description: string,
    modelTypeFieldsList: Array<ModelTypeField.AsObject>,
    internalOnly: boolean,
    recommended: boolean,
  }
}

export class ModelTypeEnumOptionAlias extends jspb.Message {
  getIdInt(): number;
  setIdInt(value: number): ModelTypeEnumOptionAlias;

  getWildcardString(): string;
  setWildcardString(value: string): ModelTypeEnumOptionAlias;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelTypeEnumOptionAlias.AsObject;
  static toObject(includeInstance: boolean, msg: ModelTypeEnumOptionAlias): ModelTypeEnumOptionAlias.AsObject;
  static serializeBinaryToWriter(message: ModelTypeEnumOptionAlias, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelTypeEnumOptionAlias;
  static deserializeBinaryFromReader(message: ModelTypeEnumOptionAlias, reader: jspb.BinaryReader): ModelTypeEnumOptionAlias;
}

export namespace ModelTypeEnumOptionAlias {
  export type AsObject = {
    idInt: number,
    wildcardString: string,
  }
}

export class ModelQuery extends jspb.Message {
  getName(): string;
  setName(value: string): ModelQuery;

  getModelTypeId(): string;
  setModelTypeId(value: string): ModelQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ModelQuery): ModelQuery.AsObject;
  static serializeBinaryToWriter(message: ModelQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelQuery;
  static deserializeBinaryFromReader(message: ModelQuery, reader: jspb.BinaryReader): ModelQuery;
}

export namespace ModelQuery {
  export type AsObject = {
    name: string,
    modelTypeId: string,
  }
}

export class ModelVersion extends jspb.Message {
  getId(): string;
  setId(value: string): ModelVersion;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ModelVersion;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ModelVersion;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ModelVersion;
  hasStatus(): boolean;
  clearStatus(): ModelVersion;

  getActiveConceptCount(): number;
  setActiveConceptCount(value: number): ModelVersion;

  getMetrics(): EvalMetrics | undefined;
  setMetrics(value?: EvalMetrics): ModelVersion;
  hasMetrics(): boolean;
  clearMetrics(): ModelVersion;

  getTotalInputCount(): number;
  setTotalInputCount(value: number): ModelVersion;

  getPretrainedModelConfig(): PretrainedModelConfig | undefined;
  setPretrainedModelConfig(value?: PretrainedModelConfig): ModelVersion;
  hasPretrainedModelConfig(): boolean;
  clearPretrainedModelConfig(): ModelVersion;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): ModelVersion;
  hasCompletedAt(): boolean;
  clearCompletedAt(): ModelVersion;

  getDescription(): string;
  setDescription(value: string): ModelVersion;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): ModelVersion;
  hasVisibility(): boolean;
  clearVisibility(): ModelVersion;

  getAppId(): string;
  setAppId(value: string): ModelVersion;

  getUserId(): string;
  setUserId(value: string): ModelVersion;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): ModelVersion;
  hasModifiedAt(): boolean;
  clearModifiedAt(): ModelVersion;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): ModelVersion;
  hasMetadata(): boolean;
  clearMetadata(): ModelVersion;

  getLicense(): string;
  setLicense(value: string): ModelVersion;

  getOutputInfo(): OutputInfo | undefined;
  setOutputInfo(value?: OutputInfo): ModelVersion;
  hasOutputInfo(): boolean;
  clearOutputInfo(): ModelVersion;

  getInputInfo(): InputInfo | undefined;
  setInputInfo(value?: InputInfo): ModelVersion;
  hasInputInfo(): boolean;
  clearInputInfo(): ModelVersion;

  getTrainInfo(): TrainInfo | undefined;
  setTrainInfo(value?: TrainInfo): ModelVersion;
  hasTrainInfo(): boolean;
  clearTrainInfo(): ModelVersion;

  getImportInfo(): ImportInfo | undefined;
  setImportInfo(value?: ImportInfo): ModelVersion;
  hasImportInfo(): boolean;
  clearImportInfo(): ModelVersion;

  getTrainLog(): string;
  setTrainLog(value: string): ModelVersion;

  getInferenceComputeInfo(): ComputeInfo | undefined;
  setInferenceComputeInfo(value?: ComputeInfo): ModelVersion;
  hasInferenceComputeInfo(): boolean;
  clearInferenceComputeInfo(): ModelVersion;

  getBuildInfo(): BuildInfo | undefined;
  setBuildInfo(value?: BuildInfo): ModelVersion;
  hasBuildInfo(): boolean;
  clearBuildInfo(): ModelVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelVersion.AsObject;
  static toObject(includeInstance: boolean, msg: ModelVersion): ModelVersion.AsObject;
  static serializeBinaryToWriter(message: ModelVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelVersion;
  static deserializeBinaryFromReader(message: ModelVersion, reader: jspb.BinaryReader): ModelVersion;
}

export namespace ModelVersion {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    activeConceptCount: number,
    metrics?: EvalMetrics.AsObject,
    totalInputCount: number,
    pretrainedModelConfig?: PretrainedModelConfig.AsObject,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    visibility?: Visibility.AsObject,
    appId: string,
    userId: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    license: string,
    outputInfo?: OutputInfo.AsObject,
    inputInfo?: InputInfo.AsObject,
    trainInfo?: TrainInfo.AsObject,
    importInfo?: ImportInfo.AsObject,
    trainLog: string,
    inferenceComputeInfo?: ComputeInfo.AsObject,
    buildInfo?: BuildInfo.AsObject,
  }
}

export class BuildInfo extends jspb.Message {
  getDockerImageName(): string;
  setDockerImageName(value: string): BuildInfo;

  getDockerImageTag(): string;
  setDockerImageTag(value: string): BuildInfo;

  getDockerImageDigest(): string;
  setDockerImageDigest(value: string): BuildInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BuildInfo): BuildInfo.AsObject;
  static serializeBinaryToWriter(message: BuildInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildInfo;
  static deserializeBinaryFromReader(message: BuildInfo, reader: jspb.BinaryReader): BuildInfo;
}

export namespace BuildInfo {
  export type AsObject = {
    dockerImageName: string,
    dockerImageTag: string,
    dockerImageDigest: string,
  }
}

export class ModelVersionExport extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ModelVersionExport;
  hasStatus(): boolean;
  clearStatus(): ModelVersionExport;

  getUrl(): string;
  setUrl(value: string): ModelVersionExport;

  getSize(): number;
  setSize(value: number): ModelVersionExport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelVersionExport.AsObject;
  static toObject(includeInstance: boolean, msg: ModelVersionExport): ModelVersionExport.AsObject;
  static serializeBinaryToWriter(message: ModelVersionExport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelVersionExport;
  static deserializeBinaryFromReader(message: ModelVersionExport, reader: jspb.BinaryReader): ModelVersionExport;
}

export namespace ModelVersionExport {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    url: string,
    size: number,
  }
}

export class PretrainedModelConfig extends jspb.Message {
  getInputFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setInputFieldsMap(value?: google_protobuf_struct_pb.Struct): PretrainedModelConfig;
  hasInputFieldsMap(): boolean;
  clearInputFieldsMap(): PretrainedModelConfig;

  getOutputFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setOutputFieldsMap(value?: google_protobuf_struct_pb.Struct): PretrainedModelConfig;
  hasOutputFieldsMap(): boolean;
  clearOutputFieldsMap(): PretrainedModelConfig;

  getModelZipUrl(): string;
  setModelZipUrl(value: string): PretrainedModelConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModelConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModelConfig): PretrainedModelConfig.AsObject;
  static serializeBinaryToWriter(message: PretrainedModelConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModelConfig;
  static deserializeBinaryFromReader(message: PretrainedModelConfig, reader: jspb.BinaryReader): PretrainedModelConfig;
}

export namespace PretrainedModelConfig {
  export type AsObject = {
    inputFieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
    outputFieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
    modelZipUrl: string,
  }
}

export class TrainStats extends jspb.Message {
  getLossCurveList(): Array<LossCurveEntry>;
  setLossCurveList(value: Array<LossCurveEntry>): TrainStats;
  clearLossCurveList(): TrainStats;
  addLossCurve(value?: LossCurveEntry, index?: number): LossCurveEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainStats.AsObject;
  static toObject(includeInstance: boolean, msg: TrainStats): TrainStats.AsObject;
  static serializeBinaryToWriter(message: TrainStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainStats;
  static deserializeBinaryFromReader(message: TrainStats, reader: jspb.BinaryReader): TrainStats;
}

export namespace TrainStats {
  export type AsObject = {
    lossCurveList: Array<LossCurveEntry.AsObject>,
  }
}

export class LossCurveEntry extends jspb.Message {
  getEpoch(): number;
  setEpoch(value: number): LossCurveEntry;

  getGlobalStep(): number;
  setGlobalStep(value: number): LossCurveEntry;

  getCost(): number;
  setCost(value: number): LossCurveEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LossCurveEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LossCurveEntry): LossCurveEntry.AsObject;
  static serializeBinaryToWriter(message: LossCurveEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LossCurveEntry;
  static deserializeBinaryFromReader(message: LossCurveEntry, reader: jspb.BinaryReader): LossCurveEntry;
}

export namespace LossCurveEntry {
  export type AsObject = {
    epoch: number,
    globalStep: number,
    cost: number,
  }
}

export class LabelCount extends jspb.Message {
  getConceptName(): string;
  setConceptName(value: string): LabelCount;

  getCount(): number;
  setCount(value: number): LabelCount;

  getConcept(): Concept | undefined;
  setConcept(value?: Concept): LabelCount;
  hasConcept(): boolean;
  clearConcept(): LabelCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelCount.AsObject;
  static toObject(includeInstance: boolean, msg: LabelCount): LabelCount.AsObject;
  static serializeBinaryToWriter(message: LabelCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelCount;
  static deserializeBinaryFromReader(message: LabelCount, reader: jspb.BinaryReader): LabelCount;
}

export namespace LabelCount {
  export type AsObject = {
    conceptName: string,
    count: number,
    concept?: Concept.AsObject,
  }
}

export class LabelDistribution extends jspb.Message {
  getPositiveLabelCountsList(): Array<LabelCount>;
  setPositiveLabelCountsList(value: Array<LabelCount>): LabelDistribution;
  clearPositiveLabelCountsList(): LabelDistribution;
  addPositiveLabelCounts(value?: LabelCount, index?: number): LabelCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelDistribution.AsObject;
  static toObject(includeInstance: boolean, msg: LabelDistribution): LabelDistribution.AsObject;
  static serializeBinaryToWriter(message: LabelDistribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelDistribution;
  static deserializeBinaryFromReader(message: LabelDistribution, reader: jspb.BinaryReader): LabelDistribution;
}

export namespace LabelDistribution {
  export type AsObject = {
    positiveLabelCountsList: Array<LabelCount.AsObject>,
  }
}

export class CooccurrenceMatrixEntry extends jspb.Message {
  getRow(): string;
  setRow(value: string): CooccurrenceMatrixEntry;

  getCol(): string;
  setCol(value: string): CooccurrenceMatrixEntry;

  getCount(): number;
  setCount(value: number): CooccurrenceMatrixEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CooccurrenceMatrixEntry.AsObject;
  static toObject(includeInstance: boolean, msg: CooccurrenceMatrixEntry): CooccurrenceMatrixEntry.AsObject;
  static serializeBinaryToWriter(message: CooccurrenceMatrixEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CooccurrenceMatrixEntry;
  static deserializeBinaryFromReader(message: CooccurrenceMatrixEntry, reader: jspb.BinaryReader): CooccurrenceMatrixEntry;
}

export namespace CooccurrenceMatrixEntry {
  export type AsObject = {
    row: string,
    col: string,
    count: number,
  }
}

export class CooccurrenceMatrix extends jspb.Message {
  getMatrixList(): Array<CooccurrenceMatrixEntry>;
  setMatrixList(value: Array<CooccurrenceMatrixEntry>): CooccurrenceMatrix;
  clearMatrixList(): CooccurrenceMatrix;
  addMatrix(value?: CooccurrenceMatrixEntry, index?: number): CooccurrenceMatrixEntry;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): CooccurrenceMatrix;
  clearConceptIdsList(): CooccurrenceMatrix;
  addConceptIds(value: string, index?: number): CooccurrenceMatrix;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CooccurrenceMatrix.AsObject;
  static toObject(includeInstance: boolean, msg: CooccurrenceMatrix): CooccurrenceMatrix.AsObject;
  static serializeBinaryToWriter(message: CooccurrenceMatrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CooccurrenceMatrix;
  static deserializeBinaryFromReader(message: CooccurrenceMatrix, reader: jspb.BinaryReader): CooccurrenceMatrix;
}

export namespace CooccurrenceMatrix {
  export type AsObject = {
    matrixList: Array<CooccurrenceMatrixEntry.AsObject>,
    conceptIdsList: Array<string>,
  }
}

export class ConfusionMatrixEntry extends jspb.Message {
  getPredicted(): string;
  setPredicted(value: string): ConfusionMatrixEntry;

  getActual(): string;
  setActual(value: string): ConfusionMatrixEntry;

  getValue(): number;
  setValue(value: number): ConfusionMatrixEntry;

  getPredictedConcept(): Concept | undefined;
  setPredictedConcept(value?: Concept): ConfusionMatrixEntry;
  hasPredictedConcept(): boolean;
  clearPredictedConcept(): ConfusionMatrixEntry;

  getActualConcept(): Concept | undefined;
  setActualConcept(value?: Concept): ConfusionMatrixEntry;
  hasActualConcept(): boolean;
  clearActualConcept(): ConfusionMatrixEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfusionMatrixEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ConfusionMatrixEntry): ConfusionMatrixEntry.AsObject;
  static serializeBinaryToWriter(message: ConfusionMatrixEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfusionMatrixEntry;
  static deserializeBinaryFromReader(message: ConfusionMatrixEntry, reader: jspb.BinaryReader): ConfusionMatrixEntry;
}

export namespace ConfusionMatrixEntry {
  export type AsObject = {
    predicted: string,
    actual: string,
    value: number,
    predictedConcept?: Concept.AsObject,
    actualConcept?: Concept.AsObject,
  }
}

export class ConfusionMatrix extends jspb.Message {
  getMatrixList(): Array<ConfusionMatrixEntry>;
  setMatrixList(value: Array<ConfusionMatrixEntry>): ConfusionMatrix;
  clearMatrixList(): ConfusionMatrix;
  addMatrix(value?: ConfusionMatrixEntry, index?: number): ConfusionMatrixEntry;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): ConfusionMatrix;
  clearConceptIdsList(): ConfusionMatrix;
  addConceptIds(value: string, index?: number): ConfusionMatrix;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfusionMatrix.AsObject;
  static toObject(includeInstance: boolean, msg: ConfusionMatrix): ConfusionMatrix.AsObject;
  static serializeBinaryToWriter(message: ConfusionMatrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfusionMatrix;
  static deserializeBinaryFromReader(message: ConfusionMatrix, reader: jspb.BinaryReader): ConfusionMatrix;
}

export namespace ConfusionMatrix {
  export type AsObject = {
    matrixList: Array<ConfusionMatrixEntry.AsObject>,
    conceptIdsList: Array<string>,
  }
}

export class ROC extends jspb.Message {
  getFprList(): Array<number>;
  setFprList(value: Array<number>): ROC;
  clearFprList(): ROC;
  addFpr(value: number, index?: number): ROC;

  getTprList(): Array<number>;
  setTprList(value: Array<number>): ROC;
  clearTprList(): ROC;
  addTpr(value: number, index?: number): ROC;

  getThresholdsList(): Array<number>;
  setThresholdsList(value: Array<number>): ROC;
  clearThresholdsList(): ROC;
  addThresholds(value: number, index?: number): ROC;

  getFprPerImageList(): Array<number>;
  setFprPerImageList(value: Array<number>): ROC;
  clearFprPerImageList(): ROC;
  addFprPerImage(value: number, index?: number): ROC;

  getFprPerObjectList(): Array<number>;
  setFprPerObjectList(value: Array<number>): ROC;
  clearFprPerObjectList(): ROC;
  addFprPerObject(value: number, index?: number): ROC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ROC.AsObject;
  static toObject(includeInstance: boolean, msg: ROC): ROC.AsObject;
  static serializeBinaryToWriter(message: ROC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ROC;
  static deserializeBinaryFromReader(message: ROC, reader: jspb.BinaryReader): ROC;
}

export namespace ROC {
  export type AsObject = {
    fprList: Array<number>,
    tprList: Array<number>,
    thresholdsList: Array<number>,
    fprPerImageList: Array<number>,
    fprPerObjectList: Array<number>,
  }
}

export class PrecisionRecallCurve extends jspb.Message {
  getRecallList(): Array<number>;
  setRecallList(value: Array<number>): PrecisionRecallCurve;
  clearRecallList(): PrecisionRecallCurve;
  addRecall(value: number, index?: number): PrecisionRecallCurve;

  getPrecisionList(): Array<number>;
  setPrecisionList(value: Array<number>): PrecisionRecallCurve;
  clearPrecisionList(): PrecisionRecallCurve;
  addPrecision(value: number, index?: number): PrecisionRecallCurve;

  getThresholdsList(): Array<number>;
  setThresholdsList(value: Array<number>): PrecisionRecallCurve;
  clearThresholdsList(): PrecisionRecallCurve;
  addThresholds(value: number, index?: number): PrecisionRecallCurve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrecisionRecallCurve.AsObject;
  static toObject(includeInstance: boolean, msg: PrecisionRecallCurve): PrecisionRecallCurve.AsObject;
  static serializeBinaryToWriter(message: PrecisionRecallCurve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrecisionRecallCurve;
  static deserializeBinaryFromReader(message: PrecisionRecallCurve, reader: jspb.BinaryReader): PrecisionRecallCurve;
}

export namespace PrecisionRecallCurve {
  export type AsObject = {
    recallList: Array<number>,
    precisionList: Array<number>,
    thresholdsList: Array<number>,
  }
}

export class BinaryMetrics extends jspb.Message {
  getNumPos(): number;
  setNumPos(value: number): BinaryMetrics;

  getNumNeg(): number;
  setNumNeg(value: number): BinaryMetrics;

  getNumTot(): number;
  setNumTot(value: number): BinaryMetrics;

  getRocAuc(): number;
  setRocAuc(value: number): BinaryMetrics;

  getF1(): number;
  setF1(value: number): BinaryMetrics;

  getConcept(): Concept | undefined;
  setConcept(value?: Concept): BinaryMetrics;
  hasConcept(): boolean;
  clearConcept(): BinaryMetrics;

  getRocCurve(): ROC | undefined;
  setRocCurve(value?: ROC): BinaryMetrics;
  hasRocCurve(): boolean;
  clearRocCurve(): BinaryMetrics;

  getPrecisionRecallCurve(): PrecisionRecallCurve | undefined;
  setPrecisionRecallCurve(value?: PrecisionRecallCurve): BinaryMetrics;
  hasPrecisionRecallCurve(): boolean;
  clearPrecisionRecallCurve(): BinaryMetrics;

  getAvgPrecision(): number;
  setAvgPrecision(value: number): BinaryMetrics;

  getAreaName(): string;
  setAreaName(value: string): BinaryMetrics;

  getAreaMin(): number;
  setAreaMin(value: number): BinaryMetrics;

  getAreaMax(): number;
  setAreaMax(value: number): BinaryMetrics;

  getIou(): number;
  setIou(value: number): BinaryMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryMetrics): BinaryMetrics.AsObject;
  static serializeBinaryToWriter(message: BinaryMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryMetrics;
  static deserializeBinaryFromReader(message: BinaryMetrics, reader: jspb.BinaryReader): BinaryMetrics;
}

export namespace BinaryMetrics {
  export type AsObject = {
    numPos: number,
    numNeg: number,
    numTot: number,
    rocAuc: number,
    f1: number,
    concept?: Concept.AsObject,
    rocCurve?: ROC.AsObject,
    precisionRecallCurve?: PrecisionRecallCurve.AsObject,
    avgPrecision: number,
    areaName: string,
    areaMin: number,
    areaMax: number,
    iou: number,
  }
}

export class TrackerMetrics extends jspb.Message {
  getMotMota(): number;
  setMotMota(value: number): TrackerMetrics;

  getMotNumSwitches(): number;
  setMotNumSwitches(value: number): TrackerMetrics;

  getMorseFrag(): number;
  setMorseFrag(value: number): TrackerMetrics;

  getAvgPrecision(): number;
  setAvgPrecision(value: number): TrackerMetrics;

  getAiid(): string;
  setAiid(value: string): TrackerMetrics;

  getUniqueSwitchRate(): number;
  setUniqueSwitchRate(value: number): TrackerMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackerMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: TrackerMetrics): TrackerMetrics.AsObject;
  static serializeBinaryToWriter(message: TrackerMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackerMetrics;
  static deserializeBinaryFromReader(message: TrackerMetrics, reader: jspb.BinaryReader): TrackerMetrics;
}

export namespace TrackerMetrics {
  export type AsObject = {
    motMota: number,
    motNumSwitches: number,
    morseFrag: number,
    avgPrecision: number,
    aiid: string,
    uniqueSwitchRate: number,
  }
}

export class EvalTestSetEntry extends jspb.Message {
  getInput(): Input | undefined;
  setInput(value?: Input): EvalTestSetEntry;
  hasInput(): boolean;
  clearInput(): EvalTestSetEntry;

  getPredictedConceptsList(): Array<Concept>;
  setPredictedConceptsList(value: Array<Concept>): EvalTestSetEntry;
  clearPredictedConceptsList(): EvalTestSetEntry;
  addPredictedConcepts(value?: Concept, index?: number): Concept;

  getGroundTruthConceptsList(): Array<Concept>;
  setGroundTruthConceptsList(value: Array<Concept>): EvalTestSetEntry;
  clearGroundTruthConceptsList(): EvalTestSetEntry;
  addGroundTruthConcepts(value?: Concept, index?: number): Concept;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): EvalTestSetEntry;
  hasAnnotation(): boolean;
  clearAnnotation(): EvalTestSetEntry;

  getPredictedAnnotation(): Annotation | undefined;
  setPredictedAnnotation(value?: Annotation): EvalTestSetEntry;
  hasPredictedAnnotation(): boolean;
  clearPredictedAnnotation(): EvalTestSetEntry;

  getGroundTruthAnnotation(): Annotation | undefined;
  setGroundTruthAnnotation(value?: Annotation): EvalTestSetEntry;
  hasGroundTruthAnnotation(): boolean;
  clearGroundTruthAnnotation(): EvalTestSetEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalTestSetEntry.AsObject;
  static toObject(includeInstance: boolean, msg: EvalTestSetEntry): EvalTestSetEntry.AsObject;
  static serializeBinaryToWriter(message: EvalTestSetEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalTestSetEntry;
  static deserializeBinaryFromReader(message: EvalTestSetEntry, reader: jspb.BinaryReader): EvalTestSetEntry;
}

export namespace EvalTestSetEntry {
  export type AsObject = {
    input?: Input.AsObject,
    predictedConceptsList: Array<Concept.AsObject>,
    groundTruthConceptsList: Array<Concept.AsObject>,
    annotation?: Annotation.AsObject,
    predictedAnnotation?: Annotation.AsObject,
    groundTruthAnnotation?: Annotation.AsObject,
  }
}

export class LOPQEvalResult extends jspb.Message {
  getK(): number;
  setK(value: number): LOPQEvalResult;

  getRecallVsBruteForce(): number;
  setRecallVsBruteForce(value: number): LOPQEvalResult;

  getKendallTauVsBruteForce(): number;
  setKendallTauVsBruteForce(value: number): LOPQEvalResult;

  getMostFrequentCodePercent(): number;
  setMostFrequentCodePercent(value: number): LOPQEvalResult;

  getLopqNdcg(): number;
  setLopqNdcg(value: number): LOPQEvalResult;

  getBruteForceNdcg(): number;
  setBruteForceNdcg(value: number): LOPQEvalResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LOPQEvalResult.AsObject;
  static toObject(includeInstance: boolean, msg: LOPQEvalResult): LOPQEvalResult.AsObject;
  static serializeBinaryToWriter(message: LOPQEvalResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LOPQEvalResult;
  static deserializeBinaryFromReader(message: LOPQEvalResult, reader: jspb.BinaryReader): LOPQEvalResult;
}

export namespace LOPQEvalResult {
  export type AsObject = {
    k: number,
    recallVsBruteForce: number,
    kendallTauVsBruteForce: number,
    mostFrequentCodePercent: number,
    lopqNdcg: number,
    bruteForceNdcg: number,
  }
}

export class MetricsSummary extends jspb.Message {
  getTop1Accuracy(): number;
  setTop1Accuracy(value: number): MetricsSummary;

  getTop5Accuracy(): number;
  setTop5Accuracy(value: number): MetricsSummary;

  getMacroAvgRocAuc(): number;
  setMacroAvgRocAuc(value: number): MetricsSummary;

  getMacroStdRocAuc(): number;
  setMacroStdRocAuc(value: number): MetricsSummary;

  getMacroAvgF1Score(): number;
  setMacroAvgF1Score(value: number): MetricsSummary;

  getMacroStdF1Score(): number;
  setMacroStdF1Score(value: number): MetricsSummary;

  getMacroAvgPrecision(): number;
  setMacroAvgPrecision(value: number): MetricsSummary;

  getMacroAvgRecall(): number;
  setMacroAvgRecall(value: number): MetricsSummary;

  getMeanAvgPrecisionIou50(): number;
  setMeanAvgPrecisionIou50(value: number): MetricsSummary;

  getMeanAvgPrecisionIouRange(): number;
  setMeanAvgPrecisionIouRange(value: number): MetricsSummary;

  getLopqMetricsList(): Array<LOPQEvalResult>;
  setLopqMetricsList(value: Array<LOPQEvalResult>): MetricsSummary;
  clearLopqMetricsList(): MetricsSummary;
  addLopqMetrics(value?: LOPQEvalResult, index?: number): LOPQEvalResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricsSummary.AsObject;
  static toObject(includeInstance: boolean, msg: MetricsSummary): MetricsSummary.AsObject;
  static serializeBinaryToWriter(message: MetricsSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricsSummary;
  static deserializeBinaryFromReader(message: MetricsSummary, reader: jspb.BinaryReader): MetricsSummary;
}

export namespace MetricsSummary {
  export type AsObject = {
    top1Accuracy: number,
    top5Accuracy: number,
    macroAvgRocAuc: number,
    macroStdRocAuc: number,
    macroAvgF1Score: number,
    macroStdF1Score: number,
    macroAvgPrecision: number,
    macroAvgRecall: number,
    meanAvgPrecisionIou50: number,
    meanAvgPrecisionIouRange: number,
    lopqMetricsList: Array<LOPQEvalResult.AsObject>,
  }
}

export class EvalMetrics extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): EvalMetrics;
  hasStatus(): boolean;
  clearStatus(): EvalMetrics;

  getUserId(): string;
  setUserId(value: string): EvalMetrics;

  getAppId(): string;
  setAppId(value: string): EvalMetrics;

  getId(): string;
  setId(value: string): EvalMetrics;

  getModel(): Model | undefined;
  setModel(value?: Model): EvalMetrics;
  hasModel(): boolean;
  clearModel(): EvalMetrics;

  getGroundTruthDataset(): Dataset | undefined;
  setGroundTruthDataset(value?: Dataset): EvalMetrics;
  hasGroundTruthDataset(): boolean;
  clearGroundTruthDataset(): EvalMetrics;

  getPredictionsDataset(): Dataset | undefined;
  setPredictionsDataset(value?: Dataset): EvalMetrics;
  hasPredictionsDataset(): boolean;
  clearPredictionsDataset(): EvalMetrics;

  getSummary(): MetricsSummary | undefined;
  setSummary(value?: MetricsSummary): EvalMetrics;
  hasSummary(): boolean;
  clearSummary(): EvalMetrics;

  getConfusionMatrix(): ConfusionMatrix | undefined;
  setConfusionMatrix(value?: ConfusionMatrix): EvalMetrics;
  hasConfusionMatrix(): boolean;
  clearConfusionMatrix(): EvalMetrics;

  getCooccurrenceMatrix(): CooccurrenceMatrix | undefined;
  setCooccurrenceMatrix(value?: CooccurrenceMatrix): EvalMetrics;
  hasCooccurrenceMatrix(): boolean;
  clearCooccurrenceMatrix(): EvalMetrics;

  getLabelCounts(): LabelDistribution | undefined;
  setLabelCounts(value?: LabelDistribution): EvalMetrics;
  hasLabelCounts(): boolean;
  clearLabelCounts(): EvalMetrics;

  getBinaryMetricsList(): Array<BinaryMetrics>;
  setBinaryMetricsList(value: Array<BinaryMetrics>): EvalMetrics;
  clearBinaryMetricsList(): EvalMetrics;
  addBinaryMetrics(value?: BinaryMetrics, index?: number): BinaryMetrics;

  getTestSetList(): Array<EvalTestSetEntry>;
  setTestSetList(value: Array<EvalTestSetEntry>): EvalMetrics;
  clearTestSetList(): EvalMetrics;
  addTestSet(value?: EvalTestSetEntry, index?: number): EvalTestSetEntry;

  getMetricsByAreaList(): Array<BinaryMetrics>;
  setMetricsByAreaList(value: Array<BinaryMetrics>): EvalMetrics;
  clearMetricsByAreaList(): EvalMetrics;
  addMetricsByArea(value?: BinaryMetrics, index?: number): BinaryMetrics;

  getMetricsByClassList(): Array<BinaryMetrics>;
  setMetricsByClassList(value: Array<BinaryMetrics>): EvalMetrics;
  clearMetricsByClassList(): EvalMetrics;
  addMetricsByClass(value?: BinaryMetrics, index?: number): BinaryMetrics;

  getTrackerMetricsList(): Array<TrackerMetrics>;
  setTrackerMetricsList(value: Array<TrackerMetrics>): EvalMetrics;
  clearTrackerMetricsList(): EvalMetrics;
  addTrackerMetrics(value?: TrackerMetrics, index?: number): TrackerMetrics;

  getEvalInfo(): EvalInfo | undefined;
  setEvalInfo(value?: EvalInfo): EvalMetrics;
  hasEvalInfo(): boolean;
  clearEvalInfo(): EvalMetrics;

  getExtendedMetrics(): ExtendedMetrics | undefined;
  setExtendedMetrics(value?: ExtendedMetrics): EvalMetrics;
  hasExtendedMetrics(): boolean;
  clearExtendedMetrics(): EvalMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: EvalMetrics): EvalMetrics.AsObject;
  static serializeBinaryToWriter(message: EvalMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalMetrics;
  static deserializeBinaryFromReader(message: EvalMetrics, reader: jspb.BinaryReader): EvalMetrics;
}

export namespace EvalMetrics {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    userId: string,
    appId: string,
    id: string,
    model?: Model.AsObject,
    groundTruthDataset?: Dataset.AsObject,
    predictionsDataset?: Dataset.AsObject,
    summary?: MetricsSummary.AsObject,
    confusionMatrix?: ConfusionMatrix.AsObject,
    cooccurrenceMatrix?: CooccurrenceMatrix.AsObject,
    labelCounts?: LabelDistribution.AsObject,
    binaryMetricsList: Array<BinaryMetrics.AsObject>,
    testSetList: Array<EvalTestSetEntry.AsObject>,
    metricsByAreaList: Array<BinaryMetrics.AsObject>,
    metricsByClassList: Array<BinaryMetrics.AsObject>,
    trackerMetricsList: Array<TrackerMetrics.AsObject>,
    evalInfo?: EvalInfo.AsObject,
    extendedMetrics?: ExtendedMetrics.AsObject,
  }
}

export class ExtendedMetrics extends jspb.Message {
  getUserMetrics(): google_protobuf_struct_pb.Struct | undefined;
  setUserMetrics(value?: google_protobuf_struct_pb.Struct): ExtendedMetrics;
  hasUserMetrics(): boolean;
  clearUserMetrics(): ExtendedMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendedMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendedMetrics): ExtendedMetrics.AsObject;
  static serializeBinaryToWriter(message: ExtendedMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendedMetrics;
  static deserializeBinaryFromReader(message: ExtendedMetrics, reader: jspb.BinaryReader): ExtendedMetrics;
}

export namespace ExtendedMetrics {
  export type AsObject = {
    userMetrics?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class FieldsValue extends jspb.Message {
  getConfusionMatrix(): boolean;
  setConfusionMatrix(value: boolean): FieldsValue;

  getCooccurrenceMatrix(): boolean;
  setCooccurrenceMatrix(value: boolean): FieldsValue;

  getLabelCounts(): boolean;
  setLabelCounts(value: boolean): FieldsValue;

  getBinaryMetrics(): boolean;
  setBinaryMetrics(value: boolean): FieldsValue;

  getTestSet(): boolean;
  setTestSet(value: boolean): FieldsValue;

  getMetricsByArea(): boolean;
  setMetricsByArea(value: boolean): FieldsValue;

  getMetricsByClass(): boolean;
  setMetricsByClass(value: boolean): FieldsValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldsValue.AsObject;
  static toObject(includeInstance: boolean, msg: FieldsValue): FieldsValue.AsObject;
  static serializeBinaryToWriter(message: FieldsValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldsValue;
  static deserializeBinaryFromReader(message: FieldsValue, reader: jspb.BinaryReader): FieldsValue;
}

export namespace FieldsValue {
  export type AsObject = {
    confusionMatrix: boolean,
    cooccurrenceMatrix: boolean,
    labelCounts: boolean,
    binaryMetrics: boolean,
    testSet: boolean,
    metricsByArea: boolean,
    metricsByClass: boolean,
  }
}

export class Output extends jspb.Message {
  getId(): string;
  setId(value: string): Output;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): Output;
  hasStatus(): boolean;
  clearStatus(): Output;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Output;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Output;

  getModel(): Model | undefined;
  setModel(value?: Model): Output;
  hasModel(): boolean;
  clearModel(): Output;

  getInput(): Input | undefined;
  setInput(value?: Input): Output;
  hasInput(): boolean;
  clearInput(): Output;

  getData(): Data | undefined;
  setData(value?: Data): Output;
  hasData(): boolean;
  clearData(): Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Output.AsObject;
  static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
  static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Output;
  static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
  export type AsObject = {
    id: string,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    model?: Model.AsObject,
    input?: Input.AsObject,
    data?: Data.AsObject,
  }
}

export class ScopeDeps extends jspb.Message {
  getScope(): string;
  setScope(value: string): ScopeDeps;

  getDependingScopesList(): Array<string>;
  setDependingScopesList(value: Array<string>): ScopeDeps;
  clearDependingScopesList(): ScopeDeps;
  addDependingScopes(value: string, index?: number): ScopeDeps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopeDeps.AsObject;
  static toObject(includeInstance: boolean, msg: ScopeDeps): ScopeDeps.AsObject;
  static serializeBinaryToWriter(message: ScopeDeps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopeDeps;
  static deserializeBinaryFromReader(message: ScopeDeps, reader: jspb.BinaryReader): ScopeDeps;
}

export namespace ScopeDeps {
  export type AsObject = {
    scope: string,
    dependingScopesList: Array<string>,
  }
}

export class EndpointDeps extends jspb.Message {
  getEndpoint(): string;
  setEndpoint(value: string): EndpointDeps;

  getDependingScopesList(): Array<string>;
  setDependingScopesList(value: Array<string>): EndpointDeps;
  clearDependingScopesList(): EndpointDeps;
  addDependingScopes(value: string, index?: number): EndpointDeps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointDeps.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointDeps): EndpointDeps.AsObject;
  static serializeBinaryToWriter(message: EndpointDeps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointDeps;
  static deserializeBinaryFromReader(message: EndpointDeps, reader: jspb.BinaryReader): EndpointDeps;
}

export namespace EndpointDeps {
  export type AsObject = {
    endpoint: string,
    dependingScopesList: Array<string>,
  }
}

export class Hit extends jspb.Message {
  getScore(): number;
  setScore(value: number): Hit;

  getInput(): Input | undefined;
  setInput(value?: Input): Hit;
  hasInput(): boolean;
  clearInput(): Hit;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): Hit;
  hasAnnotation(): boolean;
  clearAnnotation(): Hit;

  getUserId(): string;
  setUserId(value: string): Hit;

  getAppId(): string;
  setAppId(value: string): Hit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hit.AsObject;
  static toObject(includeInstance: boolean, msg: Hit): Hit.AsObject;
  static serializeBinaryToWriter(message: Hit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hit;
  static deserializeBinaryFromReader(message: Hit, reader: jspb.BinaryReader): Hit;
}

export namespace Hit {
  export type AsObject = {
    score: number,
    input?: Input.AsObject,
    annotation?: Annotation.AsObject,
    userId: string,
    appId: string,
  }
}

export class HitCount extends jspb.Message {
  getEstimatedTotal(): number;
  setEstimatedTotal(value: number): HitCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HitCount.AsObject;
  static toObject(includeInstance: boolean, msg: HitCount): HitCount.AsObject;
  static serializeBinaryToWriter(message: HitCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HitCount;
  static deserializeBinaryFromReader(message: HitCount, reader: jspb.BinaryReader): HitCount;
}

export namespace HitCount {
  export type AsObject = {
    estimatedTotal: number,
  }
}

export class And extends jspb.Message {
  getInput(): Input | undefined;
  setInput(value?: Input): And;
  hasInput(): boolean;
  clearInput(): And;

  getOutput(): Output | undefined;
  setOutput(value?: Output): And;
  hasOutput(): boolean;
  clearOutput(): And;

  getNegate(): boolean;
  setNegate(value: boolean): And;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): And;
  hasAnnotation(): boolean;
  clearAnnotation(): And;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): And.AsObject;
  static toObject(includeInstance: boolean, msg: And): And.AsObject;
  static serializeBinaryToWriter(message: And, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): And;
  static deserializeBinaryFromReader(message: And, reader: jspb.BinaryReader): And;
}

export namespace And {
  export type AsObject = {
    input?: Input.AsObject,
    output?: Output.AsObject,
    negate: boolean,
    annotation?: Annotation.AsObject,
  }
}

export class Query extends jspb.Message {
  getAndsList(): Array<And>;
  setAndsList(value: Array<And>): Query;
  clearAndsList(): Query;
  addAnds(value?: And, index?: number): And;

  getLanguage(): string;
  setLanguage(value: string): Query;

  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): Query;
  clearFiltersList(): Query;
  addFilters(value?: Filter, index?: number): Filter;

  getRanksList(): Array<Rank>;
  setRanksList(value: Array<Rank>): Query;
  clearRanksList(): Query;
  addRanks(value?: Rank, index?: number): Rank;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    andsList: Array<And.AsObject>,
    language: string,
    filtersList: Array<Filter.AsObject>,
    ranksList: Array<Rank.AsObject>,
  }
}

export class Search extends jspb.Message {
  getQuery(): Query | undefined;
  setQuery(value?: Query): Search;
  hasQuery(): boolean;
  clearQuery(): Search;

  getId(): string;
  setId(value: string): Search;

  getApplicationId(): string;
  setApplicationId(value: string): Search;

  getName(): string;
  setName(value: string): Search;

  getAsOf(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAsOf(value?: google_protobuf_timestamp_pb.Timestamp): Search;
  hasAsOf(): boolean;
  clearAsOf(): Search;

  getGitHash(): string;
  setGitHash(value: string): Search;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Search;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Search;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Search;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Search;

  getAlgorithm(): string;
  setAlgorithm(value: string): Search;

  getSave(): boolean;
  setSave(value: boolean): Search;

  getMinValue(): number;
  setMinValue(value: number): Search;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): Search;
  hasVisibility(): boolean;
  clearVisibility(): Search;

  getMetric(): Search.Metric;
  setMetric(value: Search.Metric): Search;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Search.AsObject;
  static toObject(includeInstance: boolean, msg: Search): Search.AsObject;
  static serializeBinaryToWriter(message: Search, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Search;
  static deserializeBinaryFromReader(message: Search, reader: jspb.BinaryReader): Search;
}

export namespace Search {
  export type AsObject = {
    query?: Query.AsObject,
    id: string,
    applicationId: string,
    name: string,
    asOf?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gitHash: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    algorithm: string,
    save: boolean,
    minValue: number,
    visibility?: Visibility.AsObject,
    metric: Search.Metric,
  }

  export enum Metric { 
    METRIC_NOT_SET = 0,
    EUCLIDEAN_DISTANCE = 1,
    COSINE_DISTANCE = 2,
  }
}

export class Filter extends jspb.Message {
  getNegate(): boolean;
  setNegate(value: boolean): Filter;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): Filter;
  hasAnnotation(): boolean;
  clearAnnotation(): Filter;

  getInput(): Input | undefined;
  setInput(value?: Input): Filter;
  hasInput(): boolean;
  clearInput(): Filter;

  getLastUpdatedTimeRange(): TimeRange | undefined;
  setLastUpdatedTimeRange(value?: TimeRange): Filter;
  hasLastUpdatedTimeRange(): boolean;
  clearLastUpdatedTimeRange(): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    negate: boolean,
    annotation?: Annotation.AsObject,
    input?: Input.AsObject,
    lastUpdatedTimeRange?: TimeRange.AsObject,
  }
}

export class TimeRange extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeRange;
  hasStartTime(): boolean;
  clearStartTime(): TimeRange;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeRange;
  hasEndTime(): boolean;
  clearEndTime(): TimeRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeRange.AsObject;
  static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
  static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeRange;
  static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
}

export namespace TimeRange {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Rank extends jspb.Message {
  getNegate(): boolean;
  setNegate(value: boolean): Rank;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): Rank;
  hasAnnotation(): boolean;
  clearAnnotation(): Rank;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rank.AsObject;
  static toObject(includeInstance: boolean, msg: Rank): Rank.AsObject;
  static serializeBinaryToWriter(message: Rank, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rank;
  static deserializeBinaryFromReader(message: Rank, reader: jspb.BinaryReader): Rank;
}

export namespace Rank {
  export type AsObject = {
    negate: boolean,
    annotation?: Annotation.AsObject,
  }
}

export class AnnotationSearchMetrics extends jspb.Message {
  getGroundTruth(): Search | undefined;
  setGroundTruth(value?: Search): AnnotationSearchMetrics;
  hasGroundTruth(): boolean;
  clearGroundTruth(): AnnotationSearchMetrics;

  getSearchToEval(): Search | undefined;
  setSearchToEval(value?: Search): AnnotationSearchMetrics;
  hasSearchToEval(): boolean;
  clearSearchToEval(): AnnotationSearchMetrics;

  getMetrics(): EvalMetrics | undefined;
  setMetrics(value?: EvalMetrics): AnnotationSearchMetrics;
  hasMetrics(): boolean;
  clearMetrics(): AnnotationSearchMetrics;

  getData(): Data | undefined;
  setData(value?: Data): AnnotationSearchMetrics;
  hasData(): boolean;
  clearData(): AnnotationSearchMetrics;

  getActiveConceptCount(): number;
  setActiveConceptCount(value: number): AnnotationSearchMetrics;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): AnnotationSearchMetrics;
  hasVisibility(): boolean;
  clearVisibility(): AnnotationSearchMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationSearchMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationSearchMetrics): AnnotationSearchMetrics.AsObject;
  static serializeBinaryToWriter(message: AnnotationSearchMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationSearchMetrics;
  static deserializeBinaryFromReader(message: AnnotationSearchMetrics, reader: jspb.BinaryReader): AnnotationSearchMetrics;
}

export namespace AnnotationSearchMetrics {
  export type AsObject = {
    groundTruth?: Search.AsObject,
    searchToEval?: Search.AsObject,
    metrics?: EvalMetrics.AsObject,
    data?: Data.AsObject,
    activeConceptCount: number,
    visibility?: Visibility.AsObject,
  }
}

export class Text extends jspb.Message {
  getRaw(): string;
  setRaw(value: string): Text;

  getUrl(): string;
  setUrl(value: string): Text;

  getAllowDuplicateUrl(): boolean;
  setAllowDuplicateUrl(value: boolean): Text;

  getHosted(): HostedURL | undefined;
  setHosted(value?: HostedURL): Text;
  hasHosted(): boolean;
  clearHosted(): Text;

  getTextInfo(): TextInfo | undefined;
  setTextInfo(value?: TextInfo): Text;
  hasTextInfo(): boolean;
  clearTextInfo(): Text;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Text.AsObject;
  static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
  static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Text;
  static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
}

export namespace Text {
  export type AsObject = {
    raw: string,
    url: string,
    allowDuplicateUrl: boolean,
    hosted?: HostedURL.AsObject,
    textInfo?: TextInfo.AsObject,
  }
}

export class TextInfo extends jspb.Message {
  getCharCount(): number;
  setCharCount(value: number): TextInfo;

  getEncoding(): string;
  setEncoding(value: string): TextInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TextInfo): TextInfo.AsObject;
  static serializeBinaryToWriter(message: TextInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextInfo;
  static deserializeBinaryFromReader(message: TextInfo, reader: jspb.BinaryReader): TextInfo;
}

export namespace TextInfo {
  export type AsObject = {
    charCount: number,
    encoding: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getPrimaryEmail(): string;
  setPrimaryEmail(value: string): User;

  getFirstName(): string;
  setFirstName(value: string): User;

  getLastName(): string;
  setLastName(value: string): User;

  getCompanyName(): string;
  setCompanyName(value: string): User;

  getJobTitle(): string;
  setJobTitle(value: string): User;

  getJobRole(): string;
  setJobRole(value: string): User;

  getIntention(): string;
  setIntention(value: string): User;

  getBillType(): string;
  setBillType(value: string): User;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreatedAt(): boolean;
  clearCreatedAt(): User;

  getDateGdprConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateGdprConsent(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasDateGdprConsent(): boolean;
  clearDateGdprConsent(): User;

  getDateTosConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTosConsent(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasDateTosConsent(): boolean;
  clearDateTosConsent(): User;

  getDateMarketingConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateMarketingConsent(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasDateMarketingConsent(): boolean;
  clearDateMarketingConsent(): User;

  getDatePiiConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatePiiConsent(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasDatePiiConsent(): boolean;
  clearDatePiiConsent(): User;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): User;
  hasMetadata(): boolean;
  clearMetadata(): User;

  getEmailAddressesList(): Array<EmailAddress>;
  setEmailAddressesList(value: Array<EmailAddress>): User;
  clearEmailAddressesList(): User;
  addEmailAddresses(value?: EmailAddress, index?: number): EmailAddress;

  getTwoFactorAuthEnabled(): boolean;
  setTwoFactorAuthEnabled(value: boolean): User;

  getTeamsCount(): number;
  setTeamsCount(value: number): User;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): User;

  getStarCount(): number;
  setStarCount(value: number): User;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): User;
  hasVisibility(): boolean;
  clearVisibility(): User;

  getUserDetail(): UserDetail | undefined;
  setUserDetail(value?: UserDetail): User;
  hasUserDetail(): boolean;
  clearUserDetail(): User;

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
    primaryEmail: string,
    firstName: string,
    lastName: string,
    companyName: string,
    jobTitle: string,
    jobRole: string,
    intention: string,
    billType: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateGdprConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateTosConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateMarketingConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    datePiiConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    emailAddressesList: Array<EmailAddress.AsObject>,
    twoFactorAuthEnabled: boolean,
    teamsCount: number,
    isStarred: boolean,
    starCount: number,
    visibility?: Visibility.AsObject,
    userDetail?: UserDetail.AsObject,
  }
}

export class UserDetail extends jspb.Message {
  getPrimaryEmail(): string;
  setPrimaryEmail(value: string): UserDetail;

  getBillType(): string;
  setBillType(value: string): UserDetail;

  getDateGdprConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateGdprConsent(value?: google_protobuf_timestamp_pb.Timestamp): UserDetail;
  hasDateGdprConsent(): boolean;
  clearDateGdprConsent(): UserDetail;

  getDateTosConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTosConsent(value?: google_protobuf_timestamp_pb.Timestamp): UserDetail;
  hasDateTosConsent(): boolean;
  clearDateTosConsent(): UserDetail;

  getDateMarketingConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateMarketingConsent(value?: google_protobuf_timestamp_pb.Timestamp): UserDetail;
  hasDateMarketingConsent(): boolean;
  clearDateMarketingConsent(): UserDetail;

  getDatePiiConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatePiiConsent(value?: google_protobuf_timestamp_pb.Timestamp): UserDetail;
  hasDatePiiConsent(): boolean;
  clearDatePiiConsent(): UserDetail;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): UserDetail;
  hasMetadata(): boolean;
  clearMetadata(): UserDetail;

  getEmailAddressesList(): Array<EmailAddress>;
  setEmailAddressesList(value: Array<EmailAddress>): UserDetail;
  clearEmailAddressesList(): UserDetail;
  addEmailAddresses(value?: EmailAddress, index?: number): EmailAddress;

  getTwoFactorAuthEnabled(): boolean;
  setTwoFactorAuthEnabled(value: boolean): UserDetail;

  getTeamsCount(): number;
  setTeamsCount(value: number): UserDetail;

  getCountry(): string;
  setCountry(value: string): UserDetail;

  getState(): string;
  setState(value: string): UserDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDetail.AsObject;
  static toObject(includeInstance: boolean, msg: UserDetail): UserDetail.AsObject;
  static serializeBinaryToWriter(message: UserDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDetail;
  static deserializeBinaryFromReader(message: UserDetail, reader: jspb.BinaryReader): UserDetail;
}

export namespace UserDetail {
  export type AsObject = {
    primaryEmail: string,
    billType: string,
    dateGdprConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateTosConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateMarketingConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    datePiiConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    emailAddressesList: Array<EmailAddress.AsObject>,
    twoFactorAuthEnabled: boolean,
    teamsCount: number,
    country: string,
    state: string,
  }
}

export class EmailAddress extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): EmailAddress;

  getPrimary(): boolean;
  setPrimary(value: boolean): EmailAddress;

  getVerified(): boolean;
  setVerified(value: boolean): EmailAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailAddress.AsObject;
  static toObject(includeInstance: boolean, msg: EmailAddress): EmailAddress.AsObject;
  static serializeBinaryToWriter(message: EmailAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailAddress;
  static deserializeBinaryFromReader(message: EmailAddress, reader: jspb.BinaryReader): EmailAddress;
}

export namespace EmailAddress {
  export type AsObject = {
    email: string,
    primary: boolean,
    verified: boolean,
  }
}

export class Password extends jspb.Message {
  getPlaintext(): string;
  setPlaintext(value: string): Password;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Password.AsObject;
  static toObject(includeInstance: boolean, msg: Password): Password.AsObject;
  static serializeBinaryToWriter(message: Password, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Password;
  static deserializeBinaryFromReader(message: Password, reader: jspb.BinaryReader): Password;
}

export namespace Password {
  export type AsObject = {
    plaintext: string,
  }
}

export class PasswordViolations extends jspb.Message {
  getMinimumLength(): boolean;
  setMinimumLength(value: boolean): PasswordViolations;

  getMaximumLength(): boolean;
  setMaximumLength(value: boolean): PasswordViolations;

  getUpperCaseNeeded(): boolean;
  setUpperCaseNeeded(value: boolean): PasswordViolations;

  getLowerCaseNeeded(): boolean;
  setLowerCaseNeeded(value: boolean): PasswordViolations;

  getNumericNeeded(): boolean;
  setNumericNeeded(value: boolean): PasswordViolations;

  getNonAlphanumericNeeded(): boolean;
  setNonAlphanumericNeeded(value: boolean): PasswordViolations;

  getPasswordReuse(): boolean;
  setPasswordReuse(value: boolean): PasswordViolations;

  getExcludeNames(): boolean;
  setExcludeNames(value: boolean): PasswordViolations;

  getExcludeEmail(): boolean;
  setExcludeEmail(value: boolean): PasswordViolations;

  getNoConfusingLetters(): boolean;
  setNoConfusingLetters(value: boolean): PasswordViolations;

  getNoSimplePasswords(): boolean;
  setNoSimplePasswords(value: boolean): PasswordViolations;

  getNoCommonVocabs(): boolean;
  setNoCommonVocabs(value: boolean): PasswordViolations;

  getNoOverlapWithOld(): boolean;
  setNoOverlapWithOld(value: boolean): PasswordViolations;

  getPasswordLifespan(): boolean;
  setPasswordLifespan(value: boolean): PasswordViolations;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordViolations.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordViolations): PasswordViolations.AsObject;
  static serializeBinaryToWriter(message: PasswordViolations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordViolations;
  static deserializeBinaryFromReader(message: PasswordViolations, reader: jspb.BinaryReader): PasswordViolations;
}

export namespace PasswordViolations {
  export type AsObject = {
    minimumLength: boolean,
    maximumLength: boolean,
    upperCaseNeeded: boolean,
    lowerCaseNeeded: boolean,
    numericNeeded: boolean,
    nonAlphanumericNeeded: boolean,
    passwordReuse: boolean,
    excludeNames: boolean,
    excludeEmail: boolean,
    noConfusingLetters: boolean,
    noSimplePasswords: boolean,
    noCommonVocabs: boolean,
    noOverlapWithOld: boolean,
    passwordLifespan: boolean,
  }
}

export class Video extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): Video;

  getBase64(): Uint8Array | string;
  getBase64_asU8(): Uint8Array;
  getBase64_asB64(): string;
  setBase64(value: Uint8Array | string): Video;

  getAllowDuplicateUrl(): boolean;
  setAllowDuplicateUrl(value: boolean): Video;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): Video;

  getHosted(): HostedURL | undefined;
  setHosted(value?: HostedURL): Video;
  hasHosted(): boolean;
  clearHosted(): Video;

  getHostedThumbnail(): HostedURL | undefined;
  setHostedThumbnail(value?: HostedURL): Video;
  hasHostedThumbnail(): boolean;
  clearHostedThumbnail(): Video;

  getVideoInfo(): VideoInfo | undefined;
  setVideoInfo(value?: VideoInfo): Video;
  hasVideoInfo(): boolean;
  clearVideoInfo(): Video;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Video.AsObject;
  static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
  static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Video;
  static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
}

export namespace Video {
  export type AsObject = {
    url: string,
    base64: Uint8Array | string,
    allowDuplicateUrl: boolean,
    thumbnailUrl: string,
    hosted?: HostedURL.AsObject,
    hostedThumbnail?: HostedURL.AsObject,
    videoInfo?: VideoInfo.AsObject,
  }
}

export class VideoInfo extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): VideoInfo;

  getHeight(): number;
  setHeight(value: number): VideoInfo;

  getFps(): number;
  setFps(value: number): VideoInfo;

  getVideoFormat(): string;
  setVideoFormat(value: string): VideoInfo;

  getBitRate(): number;
  setBitRate(value: number): VideoInfo;

  getFrameCount(): number;
  setFrameCount(value: number): VideoInfo;

  getDurationSeconds(): number;
  setDurationSeconds(value: number): VideoInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoInfo): VideoInfo.AsObject;
  static serializeBinaryToWriter(message: VideoInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoInfo;
  static deserializeBinaryFromReader(message: VideoInfo, reader: jspb.BinaryReader): VideoInfo;
}

export namespace VideoInfo {
  export type AsObject = {
    width: number,
    height: number,
    fps: number,
    videoFormat: string,
    bitRate: number,
    frameCount: number,
    durationSeconds: number,
  }
}

export class Workflow extends jspb.Message {
  getId(): string;
  setId(value: string): Workflow;

  getAppId(): string;
  setAppId(value: string): Workflow;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Workflow;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Workflow;

  getNodesList(): Array<WorkflowNode>;
  setNodesList(value: Array<WorkflowNode>): Workflow;
  clearNodesList(): Workflow;
  addNodes(value?: WorkflowNode, index?: number): WorkflowNode;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Workflow;
  hasMetadata(): boolean;
  clearMetadata(): Workflow;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): Workflow;
  hasVisibility(): boolean;
  clearVisibility(): Workflow;

  getUserId(): string;
  setUserId(value: string): Workflow;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Workflow;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Workflow;

  getVersion(): WorkflowVersion | undefined;
  setVersion(value?: WorkflowVersion): Workflow;
  hasVersion(): boolean;
  clearVersion(): Workflow;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): Workflow;

  getStarCount(): number;
  setStarCount(value: number): Workflow;

  getDescription(): string;
  setDescription(value: string): Workflow;

  getNotes(): string;
  setNotes(value: string): Workflow;

  getUseCasesList(): Array<string>;
  setUseCasesList(value: Array<string>): Workflow;
  clearUseCasesList(): Workflow;
  addUseCases(value: string, index?: number): Workflow;

  getCheckConsentsList(): Array<string>;
  setCheckConsentsList(value: Array<string>): Workflow;
  clearCheckConsentsList(): Workflow;
  addCheckConsents(value: string, index?: number): Workflow;

  getBookmarkOrigin(): BookmarkOrigin | undefined;
  setBookmarkOrigin(value?: BookmarkOrigin): Workflow;
  hasBookmarkOrigin(): boolean;
  clearBookmarkOrigin(): Workflow;

  getImage(): Image | undefined;
  setImage(value?: Image): Workflow;
  hasImage(): boolean;
  clearImage(): Workflow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Workflow.AsObject;
  static toObject(includeInstance: boolean, msg: Workflow): Workflow.AsObject;
  static serializeBinaryToWriter(message: Workflow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workflow;
  static deserializeBinaryFromReader(message: Workflow, reader: jspb.BinaryReader): Workflow;
}

export namespace Workflow {
  export type AsObject = {
    id: string,
    appId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nodesList: Array<WorkflowNode.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    visibility?: Visibility.AsObject,
    userId: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version?: WorkflowVersion.AsObject,
    isStarred: boolean,
    starCount: number,
    description: string,
    notes: string,
    useCasesList: Array<string>,
    checkConsentsList: Array<string>,
    bookmarkOrigin?: BookmarkOrigin.AsObject,
    image?: Image.AsObject,
  }
}

export class WorkflowVersion extends jspb.Message {
  getId(): string;
  setId(value: string): WorkflowVersion;

  getWorkflowId(): string;
  setWorkflowId(value: string): WorkflowVersion;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): WorkflowVersion;
  hasCreatedAt(): boolean;
  clearCreatedAt(): WorkflowVersion;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): WorkflowVersion;
  hasModifiedAt(): boolean;
  clearModifiedAt(): WorkflowVersion;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): WorkflowVersion;
  hasVisibility(): boolean;
  clearVisibility(): WorkflowVersion;

  getNodesList(): Array<WorkflowNode>;
  setNodesList(value: Array<WorkflowNode>): WorkflowVersion;
  clearNodesList(): WorkflowVersion;
  addNodes(value?: WorkflowNode, index?: number): WorkflowNode;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): WorkflowVersion;
  hasMetadata(): boolean;
  clearMetadata(): WorkflowVersion;

  getAppId(): string;
  setAppId(value: string): WorkflowVersion;

  getUserId(): string;
  setUserId(value: string): WorkflowVersion;

  getDescription(): string;
  setDescription(value: string): WorkflowVersion;

  getLicense(): string;
  setLicense(value: string): WorkflowVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowVersion.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowVersion): WorkflowVersion.AsObject;
  static serializeBinaryToWriter(message: WorkflowVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowVersion;
  static deserializeBinaryFromReader(message: WorkflowVersion, reader: jspb.BinaryReader): WorkflowVersion;
}

export namespace WorkflowVersion {
  export type AsObject = {
    id: string,
    workflowId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    visibility?: Visibility.AsObject,
    nodesList: Array<WorkflowNode.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    appId: string,
    userId: string,
    description: string,
    license: string,
  }
}

export class WorkflowNode extends jspb.Message {
  getId(): string;
  setId(value: string): WorkflowNode;

  getModel(): Model | undefined;
  setModel(value?: Model): WorkflowNode;
  hasModel(): boolean;
  clearModel(): WorkflowNode;

  getNodeInputsList(): Array<NodeInput>;
  setNodeInputsList(value: Array<NodeInput>): WorkflowNode;
  clearNodeInputsList(): WorkflowNode;
  addNodeInputs(value?: NodeInput, index?: number): NodeInput;

  getSuppressOutput(): boolean;
  setSuppressOutput(value: boolean): WorkflowNode;

  getOutputInfoOverride(): OutputInfo | undefined;
  setOutputInfoOverride(value?: OutputInfo): WorkflowNode;
  hasOutputInfoOverride(): boolean;
  clearOutputInfoOverride(): WorkflowNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowNode.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowNode): WorkflowNode.AsObject;
  static serializeBinaryToWriter(message: WorkflowNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowNode;
  static deserializeBinaryFromReader(message: WorkflowNode, reader: jspb.BinaryReader): WorkflowNode;
}

export namespace WorkflowNode {
  export type AsObject = {
    id: string,
    model?: Model.AsObject,
    nodeInputsList: Array<NodeInput.AsObject>,
    suppressOutput: boolean,
    outputInfoOverride?: OutputInfo.AsObject,
  }
}

export class NodeInput extends jspb.Message {
  getNodeId(): string;
  setNodeId(value: string): NodeInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInput.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInput): NodeInput.AsObject;
  static serializeBinaryToWriter(message: NodeInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInput;
  static deserializeBinaryFromReader(message: NodeInput, reader: jspb.BinaryReader): NodeInput;
}

export namespace NodeInput {
  export type AsObject = {
    nodeId: string,
  }
}

export class WorkflowResult extends jspb.Message {
  getId(): string;
  setId(value: string): WorkflowResult;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): WorkflowResult;
  hasStatus(): boolean;
  clearStatus(): WorkflowResult;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): WorkflowResult;
  hasCreatedAt(): boolean;
  clearCreatedAt(): WorkflowResult;

  getModel(): Model | undefined;
  setModel(value?: Model): WorkflowResult;
  hasModel(): boolean;
  clearModel(): WorkflowResult;

  getInput(): Input | undefined;
  setInput(value?: Input): WorkflowResult;
  hasInput(): boolean;
  clearInput(): WorkflowResult;

  getOutputsList(): Array<Output>;
  setOutputsList(value: Array<Output>): WorkflowResult;
  clearOutputsList(): WorkflowResult;
  addOutputs(value?: Output, index?: number): Output;

  getSuppressOutput(): boolean;
  setSuppressOutput(value: boolean): WorkflowResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowResult.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowResult): WorkflowResult.AsObject;
  static serializeBinaryToWriter(message: WorkflowResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowResult;
  static deserializeBinaryFromReader(message: WorkflowResult, reader: jspb.BinaryReader): WorkflowResult;
}

export namespace WorkflowResult {
  export type AsObject = {
    id: string,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    model?: Model.AsObject,
    input?: Input.AsObject,
    outputsList: Array<Output.AsObject>,
    suppressOutput: boolean,
  }
}

export class WorkflowState extends jspb.Message {
  getId(): string;
  setId(value: string): WorkflowState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowState.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowState): WorkflowState.AsObject;
  static serializeBinaryToWriter(message: WorkflowState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowState;
  static deserializeBinaryFromReader(message: WorkflowState, reader: jspb.BinaryReader): WorkflowState;
}

export namespace WorkflowState {
  export type AsObject = {
    id: string,
  }
}

export class AppDuplication extends jspb.Message {
  getId(): string;
  setId(value: string): AppDuplication;

  getDestinationApp(): App | undefined;
  setDestinationApp(value?: App): AppDuplication;
  hasDestinationApp(): boolean;
  clearDestinationApp(): AppDuplication;

  getExistingAppId(): string;
  setExistingAppId(value: string): AppDuplication;

  getNewAppId(): string;
  setNewAppId(value: string): AppDuplication;

  getNewAppName(): string;
  setNewAppName(value: string): AppDuplication;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): AppDuplication;
  hasStatus(): boolean;
  clearStatus(): AppDuplication;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AppDuplication;
  hasCreatedAt(): boolean;
  clearCreatedAt(): AppDuplication;

  getLastModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): AppDuplication;
  hasLastModifiedAt(): boolean;
  clearLastModifiedAt(): AppDuplication;

  getFilter(): AppDuplicationFilters | undefined;
  setFilter(value?: AppDuplicationFilters): AppDuplication;
  hasFilter(): boolean;
  clearFilter(): AppDuplication;

  getProgressList(): Array<AppCopyProgress>;
  setProgressList(value: Array<AppCopyProgress>): AppDuplication;
  clearProgressList(): AppDuplication;
  addProgress(value?: AppCopyProgress, index?: number): AppCopyProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppDuplication.AsObject;
  static toObject(includeInstance: boolean, msg: AppDuplication): AppDuplication.AsObject;
  static serializeBinaryToWriter(message: AppDuplication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppDuplication;
  static deserializeBinaryFromReader(message: AppDuplication, reader: jspb.BinaryReader): AppDuplication;
}

export namespace AppDuplication {
  export type AsObject = {
    id: string,
    destinationApp?: App.AsObject,
    existingAppId: string,
    newAppId: string,
    newAppName: string,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    filter?: AppDuplicationFilters.AsObject,
    progressList: Array<AppCopyProgress.AsObject>,
  }
}

export class AppCopyProgress extends jspb.Message {
  getField(): string;
  setField(value: string): AppCopyProgress;

  getValue(): number;
  setValue(value: number): AppCopyProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppCopyProgress.AsObject;
  static toObject(includeInstance: boolean, msg: AppCopyProgress): AppCopyProgress.AsObject;
  static serializeBinaryToWriter(message: AppCopyProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppCopyProgress;
  static deserializeBinaryFromReader(message: AppCopyProgress, reader: jspb.BinaryReader): AppCopyProgress;
}

export namespace AppCopyProgress {
  export type AsObject = {
    field: string,
    value: number,
  }
}

export class AppDuplicationFilters extends jspb.Message {
  getCopyInputs(): boolean;
  setCopyInputs(value: boolean): AppDuplicationFilters;

  getCopyConcepts(): boolean;
  setCopyConcepts(value: boolean): AppDuplicationFilters;

  getCopyAnnotations(): boolean;
  setCopyAnnotations(value: boolean): AppDuplicationFilters;

  getCopyModels(): boolean;
  setCopyModels(value: boolean): AppDuplicationFilters;

  getCopyWorkflows(): boolean;
  setCopyWorkflows(value: boolean): AppDuplicationFilters;

  getCopyInstalledModuleVersions(): boolean;
  setCopyInstalledModuleVersions(value: boolean): AppDuplicationFilters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppDuplicationFilters.AsObject;
  static toObject(includeInstance: boolean, msg: AppDuplicationFilters): AppDuplicationFilters.AsObject;
  static serializeBinaryToWriter(message: AppDuplicationFilters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppDuplicationFilters;
  static deserializeBinaryFromReader(message: AppDuplicationFilters, reader: jspb.BinaryReader): AppDuplicationFilters;
}

export namespace AppDuplicationFilters {
  export type AsObject = {
    copyInputs: boolean,
    copyConcepts: boolean,
    copyAnnotations: boolean,
    copyModels: boolean,
    copyWorkflows: boolean,
    copyInstalledModuleVersions: boolean,
  }
}

export class LabelOrder extends jspb.Message {
  getId(): string;
  setId(value: string): LabelOrder;

  getName(): string;
  setName(value: string): LabelOrder;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): LabelOrder;
  hasStatus(): boolean;
  clearStatus(): LabelOrder;

  getAutoRelease(): boolean;
  setAutoRelease(value: boolean): LabelOrder;

  getAllowEmptyTag(): boolean;
  setAllowEmptyTag(value: boolean): LabelOrder;

  getDesiredFulfillTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDesiredFulfillTime(value?: google_protobuf_timestamp_pb.Timestamp): LabelOrder;
  hasDesiredFulfillTime(): boolean;
  clearDesiredFulfillTime(): LabelOrder;

  getEstimateFulfillTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEstimateFulfillTime(value?: google_protobuf_timestamp_pb.Timestamp): LabelOrder;
  hasEstimateFulfillTime(): boolean;
  clearEstimateFulfillTime(): LabelOrder;

  getTask(): Task | undefined;
  setTask(value?: Task): LabelOrder;
  hasTask(): boolean;
  clearTask(): LabelOrder;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LabelOrder;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LabelOrder;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LabelOrder;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LabelOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelOrder.AsObject;
  static toObject(includeInstance: boolean, msg: LabelOrder): LabelOrder.AsObject;
  static serializeBinaryToWriter(message: LabelOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelOrder;
  static deserializeBinaryFromReader(message: LabelOrder, reader: jspb.BinaryReader): LabelOrder;
}

export namespace LabelOrder {
  export type AsObject = {
    id: string,
    name: string,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    autoRelease: boolean,
    allowEmptyTag: boolean,
    desiredFulfillTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    estimateFulfillTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    task?: Task.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Task extends jspb.Message {
  getId(): string;
  setId(value: string): Task;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Task;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Task;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Task;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Task;

  getType(): Task.TaskType;
  setType(value: Task.TaskType): Task;

  getDescription(): string;
  setDescription(value: string): Task;

  getWorker(): TaskWorker | undefined;
  setWorker(value?: TaskWorker): Task;
  hasWorker(): boolean;
  clearWorker(): Task;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): Task;
  clearConceptIdsList(): Task;
  addConceptIds(value: string, index?: number): Task;

  getInputSource(): TaskInputSource | undefined;
  setInputSource(value?: TaskInputSource): Task;
  hasInputSource(): boolean;
  clearInputSource(): Task;

  getSampleMs(): number;
  setSampleMs(value: number): Task;

  getAiAssistant(): TaskAIAssistant | undefined;
  setAiAssistant(value?: TaskAIAssistant): Task;
  hasAiAssistant(): boolean;
  clearAiAssistant(): Task;

  getReview(): TaskReview | undefined;
  setReview(value?: TaskReview): Task;
  hasReview(): boolean;
  clearReview(): Task;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): Task;
  hasStatus(): boolean;
  clearStatus(): Task;

  getName(): string;
  setName(value: string): Task;

  getAiAssistParams(): AiAssistParameters | undefined;
  setAiAssistParams(value?: AiAssistParameters): Task;
  hasAiAssistParams(): boolean;
  clearAiAssistParams(): Task;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): Task;
  hasVisibility(): boolean;
  clearVisibility(): Task;

  getAppId(): string;
  setAppId(value: string): Task;

  getUserId(): string;
  setUserId(value: string): Task;

  getLabelOrderId(): string;
  setLabelOrderId(value: string): Task;

  getConceptsList(): Array<TaskConcept>;
  setConceptsList(value: Array<TaskConcept>): Task;
  clearConceptsList(): Task;
  addConcepts(value?: TaskConcept, index?: number): TaskConcept;

  getDeletePreviousAnnotations(): boolean;
  setDeletePreviousAnnotations(value: boolean): Task;

  getMetrics(): TaskMetrics | undefined;
  setMetrics(value?: TaskMetrics): Task;
  hasMetrics(): boolean;
  clearMetrics(): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: Task.TaskType,
    description: string,
    worker?: TaskWorker.AsObject,
    conceptIdsList: Array<string>,
    inputSource?: TaskInputSource.AsObject,
    sampleMs: number,
    aiAssistant?: TaskAIAssistant.AsObject,
    review?: TaskReview.AsObject,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    name: string,
    aiAssistParams?: AiAssistParameters.AsObject,
    visibility?: Visibility.AsObject,
    appId: string,
    userId: string,
    labelOrderId: string,
    conceptsList: Array<TaskConcept.AsObject>,
    deletePreviousAnnotations: boolean,
    metrics?: TaskMetrics.AsObject,
  }

  export enum TaskType { 
    TYPE_NOT_SET = 0,
    CONCEPTS_CLASSIFICATION = 1,
    BOUNDING_BOX_DETECTION = 2,
    POLYGON_DETECTION = 3,
  }
}

export class AiAssistParameters extends jspb.Message {
  getMinThreshold(): number;
  setMinThreshold(value: number): AiAssistParameters;

  getMaxThreshold(): number;
  setMaxThreshold(value: number): AiAssistParameters;

  getConceptRelationIdsList(): Array<string>;
  setConceptRelationIdsList(value: Array<string>): AiAssistParameters;
  clearConceptRelationIdsList(): AiAssistParameters;
  addConceptRelationIds(value: string, index?: number): AiAssistParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AiAssistParameters.AsObject;
  static toObject(includeInstance: boolean, msg: AiAssistParameters): AiAssistParameters.AsObject;
  static serializeBinaryToWriter(message: AiAssistParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AiAssistParameters;
  static deserializeBinaryFromReader(message: AiAssistParameters, reader: jspb.BinaryReader): AiAssistParameters;
}

export namespace AiAssistParameters {
  export type AsObject = {
    minThreshold: number,
    maxThreshold: number,
    conceptRelationIdsList: Array<string>,
  }
}

export class TaskWorker extends jspb.Message {
  getStrategy(): TaskWorker.TaskWorkerStrategy;
  setStrategy(value: TaskWorker.TaskWorkerStrategy): TaskWorker;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): TaskWorker;
  clearUserIdsList(): TaskWorker;
  addUserIds(value: string, index?: number): TaskWorker;

  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): TaskWorker;
  clearUsersList(): TaskWorker;
  addUsers(value?: User, index?: number): User;

  getPartitionedStrategyInfo(): TaskWorkerPartitionedStrategyInfo | undefined;
  setPartitionedStrategyInfo(value?: TaskWorkerPartitionedStrategyInfo): TaskWorker;
  hasPartitionedStrategyInfo(): boolean;
  clearPartitionedStrategyInfo(): TaskWorker;

  getWorkersList(): Array<Worker>;
  setWorkersList(value: Array<Worker>): TaskWorker;
  clearWorkersList(): TaskWorker;
  addWorkers(value?: Worker, index?: number): Worker;

  getStrategyInfoCase(): TaskWorker.StrategyInfoCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskWorker.AsObject;
  static toObject(includeInstance: boolean, msg: TaskWorker): TaskWorker.AsObject;
  static serializeBinaryToWriter(message: TaskWorker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskWorker;
  static deserializeBinaryFromReader(message: TaskWorker, reader: jspb.BinaryReader): TaskWorker;
}

export namespace TaskWorker {
  export type AsObject = {
    strategy: TaskWorker.TaskWorkerStrategy,
    userIdsList: Array<string>,
    usersList: Array<User.AsObject>,
    partitionedStrategyInfo?: TaskWorkerPartitionedStrategyInfo.AsObject,
    workersList: Array<Worker.AsObject>,
  }

  export enum TaskWorkerStrategy { 
    WORKER_STRATEGY_NOT_SET = 0,
    PARTITIONED = 2,
    FULL = 3,
  }

  export enum StrategyInfoCase { 
    STRATEGY_INFO_NOT_SET = 0,
    PARTITIONED_STRATEGY_INFO = 3,
  }
}

export class TaskWorkerPartitionedStrategyInfo extends jspb.Message {
  getType(): TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy;
  setType(value: TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy): TaskWorkerPartitionedStrategyInfo;

  getWorkersPerInput(): number;
  setWorkersPerInput(value: number): TaskWorkerPartitionedStrategyInfo;

  getWeights(): google_protobuf_struct_pb.Struct | undefined;
  setWeights(value?: google_protobuf_struct_pb.Struct): TaskWorkerPartitionedStrategyInfo;
  hasWeights(): boolean;
  clearWeights(): TaskWorkerPartitionedStrategyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskWorkerPartitionedStrategyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TaskWorkerPartitionedStrategyInfo): TaskWorkerPartitionedStrategyInfo.AsObject;
  static serializeBinaryToWriter(message: TaskWorkerPartitionedStrategyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskWorkerPartitionedStrategyInfo;
  static deserializeBinaryFromReader(message: TaskWorkerPartitionedStrategyInfo, reader: jspb.BinaryReader): TaskWorkerPartitionedStrategyInfo;
}

export namespace TaskWorkerPartitionedStrategyInfo {
  export type AsObject = {
    type: TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy,
    workersPerInput: number,
    weights?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum TaskWorkerPartitionedStrategy { 
    PARTITIONED_WORKER_STRATEGY_NOT_SET = 0,
    EVENLY = 1,
    WEIGHTED = 2,
  }
}

export class TaskInputSource extends jspb.Message {
  getType(): TaskInputSource.TaskInputSourceType;
  setType(value: TaskInputSource.TaskInputSourceType): TaskInputSource;

  getId(): string;
  setId(value: string): TaskInputSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskInputSource.AsObject;
  static toObject(includeInstance: boolean, msg: TaskInputSource): TaskInputSource.AsObject;
  static serializeBinaryToWriter(message: TaskInputSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskInputSource;
  static deserializeBinaryFromReader(message: TaskInputSource, reader: jspb.BinaryReader): TaskInputSource;
}

export namespace TaskInputSource {
  export type AsObject = {
    type: TaskInputSource.TaskInputSourceType,
    id: string,
  }

  export enum TaskInputSourceType { 
    INPUT_SOURCE_TYPE_NOT_SET = 0,
    ALL_INPUTS = 1,
    SAVED_SEARCH = 2,
    DATASET = 3,
  }
}

export class TaskReview extends jspb.Message {
  getStrategy(): TaskReview.TaskReviewStrategy;
  setStrategy(value: TaskReview.TaskReviewStrategy): TaskReview;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): TaskReview;
  clearUserIdsList(): TaskReview;
  addUserIds(value: string, index?: number): TaskReview;

  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): TaskReview;
  clearUsersList(): TaskReview;
  addUsers(value?: User, index?: number): User;

  getManualStrategyInfo(): TaskReviewManualStrategyInfo | undefined;
  setManualStrategyInfo(value?: TaskReviewManualStrategyInfo): TaskReview;
  hasManualStrategyInfo(): boolean;
  clearManualStrategyInfo(): TaskReview;

  getConsensusStrategyInfo(): TaskReviewConsensusStrategyInfo | undefined;
  setConsensusStrategyInfo(value?: TaskReviewConsensusStrategyInfo): TaskReview;
  hasConsensusStrategyInfo(): boolean;
  clearConsensusStrategyInfo(): TaskReview;

  getStrategyInfoCase(): TaskReview.StrategyInfoCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskReview.AsObject;
  static toObject(includeInstance: boolean, msg: TaskReview): TaskReview.AsObject;
  static serializeBinaryToWriter(message: TaskReview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskReview;
  static deserializeBinaryFromReader(message: TaskReview, reader: jspb.BinaryReader): TaskReview;
}

export namespace TaskReview {
  export type AsObject = {
    strategy: TaskReview.TaskReviewStrategy,
    userIdsList: Array<string>,
    usersList: Array<User.AsObject>,
    manualStrategyInfo?: TaskReviewManualStrategyInfo.AsObject,
    consensusStrategyInfo?: TaskReviewConsensusStrategyInfo.AsObject,
  }

  export enum TaskReviewStrategy { 
    TASK_REVIEW_STRATEGY_NOT_SET = 0,
    NONE = 1,
    MANUAL = 2,
    CONSENSUS = 3,
  }

  export enum StrategyInfoCase { 
    STRATEGY_INFO_NOT_SET = 0,
    MANUAL_STRATEGY_INFO = 3,
    CONSENSUS_STRATEGY_INFO = 4,
  }
}

export class TaskReviewManualStrategyInfo extends jspb.Message {
  getSamplePercentage(): number;
  setSamplePercentage(value: number): TaskReviewManualStrategyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskReviewManualStrategyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TaskReviewManualStrategyInfo): TaskReviewManualStrategyInfo.AsObject;
  static serializeBinaryToWriter(message: TaskReviewManualStrategyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskReviewManualStrategyInfo;
  static deserializeBinaryFromReader(message: TaskReviewManualStrategyInfo, reader: jspb.BinaryReader): TaskReviewManualStrategyInfo;
}

export namespace TaskReviewManualStrategyInfo {
  export type AsObject = {
    samplePercentage: number,
  }
}

export class TaskReviewConsensusStrategyInfo extends jspb.Message {
  getApprovalThreshold(): number;
  setApprovalThreshold(value: number): TaskReviewConsensusStrategyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskReviewConsensusStrategyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TaskReviewConsensusStrategyInfo): TaskReviewConsensusStrategyInfo.AsObject;
  static serializeBinaryToWriter(message: TaskReviewConsensusStrategyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskReviewConsensusStrategyInfo;
  static deserializeBinaryFromReader(message: TaskReviewConsensusStrategyInfo, reader: jspb.BinaryReader): TaskReviewConsensusStrategyInfo;
}

export namespace TaskReviewConsensusStrategyInfo {
  export type AsObject = {
    approvalThreshold: number,
  }
}

export class TaskAIAssistant extends jspb.Message {
  getWorkflowId(): string;
  setWorkflowId(value: string): TaskAIAssistant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAIAssistant.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAIAssistant): TaskAIAssistant.AsObject;
  static serializeBinaryToWriter(message: TaskAIAssistant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAIAssistant;
  static deserializeBinaryFromReader(message: TaskAIAssistant, reader: jspb.BinaryReader): TaskAIAssistant;
}

export namespace TaskAIAssistant {
  export type AsObject = {
    workflowId: string,
  }
}

export class TaskAssignment extends jspb.Message {
  getId(): string;
  setId(value: string): TaskAssignment;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TaskAssignment;
  hasCreatedAt(): boolean;
  clearCreatedAt(): TaskAssignment;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): TaskAssignment;
  hasModifiedAt(): boolean;
  clearModifiedAt(): TaskAssignment;

  getWorker(): Worker | undefined;
  setWorker(value?: Worker): TaskAssignment;
  hasWorker(): boolean;
  clearWorker(): TaskAssignment;

  getInput(): Input | undefined;
  setInput(value?: Input): TaskAssignment;
  hasInput(): boolean;
  clearInput(): TaskAssignment;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): TaskAssignment;
  hasStatus(): boolean;
  clearStatus(): TaskAssignment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAssignment.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAssignment): TaskAssignment.AsObject;
  static serializeBinaryToWriter(message: TaskAssignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAssignment;
  static deserializeBinaryFromReader(message: TaskAssignment, reader: jspb.BinaryReader): TaskAssignment;
}

export namespace TaskAssignment {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    worker?: Worker.AsObject,
    input?: Input.AsObject,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class TaskStatusCountPerUser extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): TaskStatusCountPerUser;

  getPending(): number;
  setPending(value: number): TaskStatusCountPerUser;

  getAwaitingReview(): number;
  setAwaitingReview(value: number): TaskStatusCountPerUser;

  getSuccess(): number;
  setSuccess(value: number): TaskStatusCountPerUser;

  getReviewDenied(): number;
  setReviewDenied(value: number): TaskStatusCountPerUser;

  getAwaitingConsensusReview(): number;
  setAwaitingConsensusReview(value: number): TaskStatusCountPerUser;

  getWorker(): Worker | undefined;
  setWorker(value?: Worker): TaskStatusCountPerUser;
  hasWorker(): boolean;
  clearWorker(): TaskStatusCountPerUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusCountPerUser.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusCountPerUser): TaskStatusCountPerUser.AsObject;
  static serializeBinaryToWriter(message: TaskStatusCountPerUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusCountPerUser;
  static deserializeBinaryFromReader(message: TaskStatusCountPerUser, reader: jspb.BinaryReader): TaskStatusCountPerUser;
}

export namespace TaskStatusCountPerUser {
  export type AsObject = {
    userId: string,
    pending: number,
    awaitingReview: number,
    success: number,
    reviewDenied: number,
    awaitingConsensusReview: number,
    worker?: Worker.AsObject,
  }
}

export class ThresholdRange extends jspb.Message {
  getIsLowerInclusive(): boolean;
  setIsLowerInclusive(value: boolean): ThresholdRange;

  getIsUpperInclusive(): boolean;
  setIsUpperInclusive(value: boolean): ThresholdRange;

  getLower(): number;
  setLower(value: number): ThresholdRange;

  getUpper(): number;
  setUpper(value: number): ThresholdRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdRange.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdRange): ThresholdRange.AsObject;
  static serializeBinaryToWriter(message: ThresholdRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdRange;
  static deserializeBinaryFromReader(message: ThresholdRange, reader: jspb.BinaryReader): ThresholdRange;
}

export namespace ThresholdRange {
  export type AsObject = {
    isLowerInclusive: boolean,
    isUpperInclusive: boolean,
    lower: number,
    upper: number,
  }
}

export class TaskConceptAutoAnnotationConfig extends jspb.Message {
  getAnnotationDataTypes(): number;
  setAnnotationDataTypes(value: number): TaskConceptAutoAnnotationConfig;

  getThresholdRange(): ThresholdRange | undefined;
  setThresholdRange(value?: ThresholdRange): TaskConceptAutoAnnotationConfig;
  hasThresholdRange(): boolean;
  clearThresholdRange(): TaskConceptAutoAnnotationConfig;

  getStatusCode(): proto_clarifai_api_status_status_code_pb.StatusCode;
  setStatusCode(value: proto_clarifai_api_status_status_code_pb.StatusCode): TaskConceptAutoAnnotationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskConceptAutoAnnotationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TaskConceptAutoAnnotationConfig): TaskConceptAutoAnnotationConfig.AsObject;
  static serializeBinaryToWriter(message: TaskConceptAutoAnnotationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskConceptAutoAnnotationConfig;
  static deserializeBinaryFromReader(message: TaskConceptAutoAnnotationConfig, reader: jspb.BinaryReader): TaskConceptAutoAnnotationConfig;
}

export namespace TaskConceptAutoAnnotationConfig {
  export type AsObject = {
    annotationDataTypes: number,
    thresholdRange?: ThresholdRange.AsObject,
    statusCode: proto_clarifai_api_status_status_code_pb.StatusCode,
  }
}

export class TaskConcept extends jspb.Message {
  getConcept(): Concept | undefined;
  setConcept(value?: Concept): TaskConcept;
  hasConcept(): boolean;
  clearConcept(): TaskConcept;

  getAutoAnnotationConfig(): TaskConceptAutoAnnotationConfig | undefined;
  setAutoAnnotationConfig(value?: TaskConceptAutoAnnotationConfig): TaskConcept;
  hasAutoAnnotationConfig(): boolean;
  clearAutoAnnotationConfig(): TaskConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskConcept.AsObject;
  static toObject(includeInstance: boolean, msg: TaskConcept): TaskConcept.AsObject;
  static serializeBinaryToWriter(message: TaskConcept, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskConcept;
  static deserializeBinaryFromReader(message: TaskConcept, reader: jspb.BinaryReader): TaskConcept;
}

export namespace TaskConcept {
  export type AsObject = {
    concept?: Concept.AsObject,
    autoAnnotationConfig?: TaskConceptAutoAnnotationConfig.AsObject,
  }
}

export class TaskMetrics extends jspb.Message {
  getWork(): TaskWorkMetrics | undefined;
  setWork(value?: TaskWorkMetrics): TaskMetrics;
  hasWork(): boolean;
  clearWork(): TaskMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: TaskMetrics): TaskMetrics.AsObject;
  static serializeBinaryToWriter(message: TaskMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskMetrics;
  static deserializeBinaryFromReader(message: TaskMetrics, reader: jspb.BinaryReader): TaskMetrics;
}

export namespace TaskMetrics {
  export type AsObject = {
    work?: TaskWorkMetrics.AsObject,
  }
}

export class TaskWorkMetrics extends jspb.Message {
  getInputsCountEstimated(): number;
  setInputsCountEstimated(value: number): TaskWorkMetrics;

  getInputsPercentEstimated(): number;
  setInputsPercentEstimated(value: number): TaskWorkMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskWorkMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: TaskWorkMetrics): TaskWorkMetrics.AsObject;
  static serializeBinaryToWriter(message: TaskWorkMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskWorkMetrics;
  static deserializeBinaryFromReader(message: TaskWorkMetrics, reader: jspb.BinaryReader): TaskWorkMetrics;
}

export namespace TaskWorkMetrics {
  export type AsObject = {
    inputsCountEstimated: number,
    inputsPercentEstimated: number,
  }
}

export class Collector extends jspb.Message {
  getId(): string;
  setId(value: string): Collector;

  getDescription(): string;
  setDescription(value: string): Collector;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collector;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Collector;

  getPreQueueWorkflowId(): string;
  setPreQueueWorkflowId(value: string): Collector;

  getPreQueueRandomSample(): number;
  setPreQueueRandomSample(value: number): Collector;

  getPostQueueWorkflowId(): string;
  setPostQueueWorkflowId(value: string): Collector;

  getCollectorSource(): CollectorSource | undefined;
  setCollectorSource(value?: CollectorSource): Collector;
  hasCollectorSource(): boolean;
  clearCollectorSource(): Collector;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): Collector;
  hasStatus(): boolean;
  clearStatus(): Collector;

  getCollectOutputs(): boolean;
  setCollectOutputs(value: boolean): Collector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collector.AsObject;
  static toObject(includeInstance: boolean, msg: Collector): Collector.AsObject;
  static serializeBinaryToWriter(message: Collector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collector;
  static deserializeBinaryFromReader(message: Collector, reader: jspb.BinaryReader): Collector;
}

export namespace Collector {
  export type AsObject = {
    id: string,
    description: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    preQueueWorkflowId: string,
    preQueueRandomSample: number,
    postQueueWorkflowId: string,
    collectorSource?: CollectorSource.AsObject,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    collectOutputs: boolean,
  }
}

export class CollectorSource extends jspb.Message {
  getApiPostModelOutputsCollectorSource(): APIPostModelOutputsCollectorSource | undefined;
  setApiPostModelOutputsCollectorSource(value?: APIPostModelOutputsCollectorSource): CollectorSource;
  hasApiPostModelOutputsCollectorSource(): boolean;
  clearApiPostModelOutputsCollectorSource(): CollectorSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectorSource.AsObject;
  static toObject(includeInstance: boolean, msg: CollectorSource): CollectorSource.AsObject;
  static serializeBinaryToWriter(message: CollectorSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectorSource;
  static deserializeBinaryFromReader(message: CollectorSource, reader: jspb.BinaryReader): CollectorSource;
}

export namespace CollectorSource {
  export type AsObject = {
    apiPostModelOutputsCollectorSource?: APIPostModelOutputsCollectorSource.AsObject,
  }
}

export class APIPostModelOutputsCollectorSource extends jspb.Message {
  getModelUserId(): string;
  setModelUserId(value: string): APIPostModelOutputsCollectorSource;

  getModelAppId(): string;
  setModelAppId(value: string): APIPostModelOutputsCollectorSource;

  getModelId(): string;
  setModelId(value: string): APIPostModelOutputsCollectorSource;

  getModelVersionId(): string;
  setModelVersionId(value: string): APIPostModelOutputsCollectorSource;

  getPostInputsKeyId(): string;
  setPostInputsKeyId(value: string): APIPostModelOutputsCollectorSource;

  getCallerUserId(): string;
  setCallerUserId(value: string): APIPostModelOutputsCollectorSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIPostModelOutputsCollectorSource.AsObject;
  static toObject(includeInstance: boolean, msg: APIPostModelOutputsCollectorSource): APIPostModelOutputsCollectorSource.AsObject;
  static serializeBinaryToWriter(message: APIPostModelOutputsCollectorSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIPostModelOutputsCollectorSource;
  static deserializeBinaryFromReader(message: APIPostModelOutputsCollectorSource, reader: jspb.BinaryReader): APIPostModelOutputsCollectorSource;
}

export namespace APIPostModelOutputsCollectorSource {
  export type AsObject = {
    modelUserId: string,
    modelAppId: string,
    modelId: string,
    modelVersionId: string,
    postInputsKeyId: string,
    callerUserId: string,
  }
}

export class StatValue extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): StatValue;
  hasTime(): boolean;
  clearTime(): StatValue;

  getValue(): number;
  setValue(value: number): StatValue;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): StatValue;
  clearTagsList(): StatValue;
  addTags(value: string, index?: number): StatValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatValue.AsObject;
  static toObject(includeInstance: boolean, msg: StatValue): StatValue.AsObject;
  static serializeBinaryToWriter(message: StatValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatValue;
  static deserializeBinaryFromReader(message: StatValue, reader: jspb.BinaryReader): StatValue;
}

export namespace StatValue {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    value: number,
    tagsList: Array<string>,
  }
}

export class StatValueAggregateResult extends jspb.Message {
  getStatValueAggregatesList(): Array<StatValueAggregate>;
  setStatValueAggregatesList(value: Array<StatValueAggregate>): StatValueAggregateResult;
  clearStatValueAggregatesList(): StatValueAggregateResult;
  addStatValueAggregates(value?: StatValueAggregate, index?: number): StatValueAggregate;

  getStatValueAggregateQuery(): StatValueAggregateQuery | undefined;
  setStatValueAggregateQuery(value?: StatValueAggregateQuery): StatValueAggregateResult;
  hasStatValueAggregateQuery(): boolean;
  clearStatValueAggregateQuery(): StatValueAggregateResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatValueAggregateResult.AsObject;
  static toObject(includeInstance: boolean, msg: StatValueAggregateResult): StatValueAggregateResult.AsObject;
  static serializeBinaryToWriter(message: StatValueAggregateResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatValueAggregateResult;
  static deserializeBinaryFromReader(message: StatValueAggregateResult, reader: jspb.BinaryReader): StatValueAggregateResult;
}

export namespace StatValueAggregateResult {
  export type AsObject = {
    statValueAggregatesList: Array<StatValueAggregate.AsObject>,
    statValueAggregateQuery?: StatValueAggregateQuery.AsObject,
  }
}

export class StatValueAggregate extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): StatValueAggregate;
  hasTime(): boolean;
  clearTime(): StatValueAggregate;

  getAggregateValue(): number;
  setAggregateValue(value: number): StatValueAggregate;

  getCount(): number;
  setCount(value: number): StatValueAggregate;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): StatValueAggregate;
  clearTagsList(): StatValueAggregate;
  addTags(value: string, index?: number): StatValueAggregate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatValueAggregate.AsObject;
  static toObject(includeInstance: boolean, msg: StatValueAggregate): StatValueAggregate.AsObject;
  static serializeBinaryToWriter(message: StatValueAggregate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatValueAggregate;
  static deserializeBinaryFromReader(message: StatValueAggregate, reader: jspb.BinaryReader): StatValueAggregate;
}

export namespace StatValueAggregate {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    aggregateValue: number,
    count: number,
    tagsList: Array<string>,
  }
}

export class StatValueAggregateQuery extends jspb.Message {
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): StatValueAggregateQuery;
  clearTagsList(): StatValueAggregateQuery;
  addTags(value: string, index?: number): StatValueAggregateQuery;

  getTagGroupsList(): Array<string>;
  setTagGroupsList(value: Array<string>): StatValueAggregateQuery;
  clearTagGroupsList(): StatValueAggregateQuery;
  addTagGroups(value: string, index?: number): StatValueAggregateQuery;

  getStatValueAggType(): StatValueAggType;
  setStatValueAggType(value: StatValueAggType): StatValueAggregateQuery;

  getStatTimeAggType(): StatTimeAggType;
  setStatTimeAggType(value: StatTimeAggType): StatValueAggregateQuery;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): StatValueAggregateQuery;
  hasStartTime(): boolean;
  clearStartTime(): StatValueAggregateQuery;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): StatValueAggregateQuery;
  hasEndTime(): boolean;
  clearEndTime(): StatValueAggregateQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatValueAggregateQuery.AsObject;
  static toObject(includeInstance: boolean, msg: StatValueAggregateQuery): StatValueAggregateQuery.AsObject;
  static serializeBinaryToWriter(message: StatValueAggregateQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatValueAggregateQuery;
  static deserializeBinaryFromReader(message: StatValueAggregateQuery, reader: jspb.BinaryReader): StatValueAggregateQuery;
}

export namespace StatValueAggregateQuery {
  export type AsObject = {
    tagsList: Array<string>,
    tagGroupsList: Array<string>,
    statValueAggType: StatValueAggType,
    statTimeAggType: StatTimeAggType,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PCAProjectionComparator extends jspb.Message {
  getDistanceThreshold(): number;
  setDistanceThreshold(value: number): PCAProjectionComparator;

  getModelVersionId(): string;
  setModelVersionId(value: string): PCAProjectionComparator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PCAProjectionComparator.AsObject;
  static toObject(includeInstance: boolean, msg: PCAProjectionComparator): PCAProjectionComparator.AsObject;
  static serializeBinaryToWriter(message: PCAProjectionComparator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PCAProjectionComparator;
  static deserializeBinaryFromReader(message: PCAProjectionComparator, reader: jspb.BinaryReader): PCAProjectionComparator;
}

export namespace PCAProjectionComparator {
  export type AsObject = {
    distanceThreshold: number,
    modelVersionId: string,
  }
}

export class DuplicateAnnotationsResults extends jspb.Message {
  getDuplicateCfidList(): Array<string>;
  setDuplicateCfidList(value: Array<string>): DuplicateAnnotationsResults;
  clearDuplicateCfidList(): DuplicateAnnotationsResults;
  addDuplicateCfid(value: string, index?: number): DuplicateAnnotationsResults;

  getUniqueCount(): number;
  setUniqueCount(value: number): DuplicateAnnotationsResults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DuplicateAnnotationsResults.AsObject;
  static toObject(includeInstance: boolean, msg: DuplicateAnnotationsResults): DuplicateAnnotationsResults.AsObject;
  static serializeBinaryToWriter(message: DuplicateAnnotationsResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DuplicateAnnotationsResults;
  static deserializeBinaryFromReader(message: DuplicateAnnotationsResults, reader: jspb.BinaryReader): DuplicateAnnotationsResults;
}

export namespace DuplicateAnnotationsResults {
  export type AsObject = {
    duplicateCfidList: Array<string>,
    uniqueCount: number,
  }
}

export class Visibility extends jspb.Message {
  getGettable(): Visibility.Gettable;
  setGettable(value: Visibility.Gettable): Visibility;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Visibility.AsObject;
  static toObject(includeInstance: boolean, msg: Visibility): Visibility.AsObject;
  static serializeBinaryToWriter(message: Visibility, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Visibility;
  static deserializeBinaryFromReader(message: Visibility, reader: jspb.BinaryReader): Visibility;
}

export namespace Visibility {
  export type AsObject = {
    gettable: Visibility.Gettable,
  }

  export enum Gettable { 
    UNKNOWN_VISIBILITY = 0,
    PRIVATE = 10,
    ORG = 30,
    PUBLIC = 50,
  }
}

export class TrendingMetric extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): TrendingMetric;

  getAppId(): string;
  setAppId(value: string): TrendingMetric;

  getObjectId(): string;
  setObjectId(value: string): TrendingMetric;

  getViewCount(): number;
  setViewCount(value: number): TrendingMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrendingMetric.AsObject;
  static toObject(includeInstance: boolean, msg: TrendingMetric): TrendingMetric.AsObject;
  static serializeBinaryToWriter(message: TrendingMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrendingMetric;
  static deserializeBinaryFromReader(message: TrendingMetric, reader: jspb.BinaryReader): TrendingMetric;
}

export namespace TrendingMetric {
  export type AsObject = {
    userId: string,
    appId: string,
    objectId: string,
    viewCount: number,
  }
}

export class FullTag extends jspb.Message {
  getName(): string;
  setName(value: string): FullTag;

  getId(): string;
  setId(value: string): FullTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullTag.AsObject;
  static toObject(includeInstance: boolean, msg: FullTag): FullTag.AsObject;
  static serializeBinaryToWriter(message: FullTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullTag;
  static deserializeBinaryFromReader(message: FullTag, reader: jspb.BinaryReader): FullTag;
}

export namespace FullTag {
  export type AsObject = {
    name: string,
    id: string,
  }
}

export class TimeSegment extends jspb.Message {
  getId(): string;
  setId(value: string): TimeSegment;

  getData(): Data | undefined;
  setData(value?: Data): TimeSegment;
  hasData(): boolean;
  clearData(): TimeSegment;

  getTimeInfo(): TimeInfo | undefined;
  setTimeInfo(value?: TimeInfo): TimeSegment;
  hasTimeInfo(): boolean;
  clearTimeInfo(): TimeSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSegment.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSegment): TimeSegment.AsObject;
  static serializeBinaryToWriter(message: TimeSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSegment;
  static deserializeBinaryFromReader(message: TimeSegment, reader: jspb.BinaryReader): TimeSegment;
}

export namespace TimeSegment {
  export type AsObject = {
    id: string,
    data?: Data.AsObject,
    timeInfo?: TimeInfo.AsObject,
  }
}

export class TimeInfo extends jspb.Message {
  getNumFrames(): number;
  setNumFrames(value: number): TimeInfo;

  getBeginTime(): number;
  setBeginTime(value: number): TimeInfo;

  getEndTime(): number;
  setEndTime(value: number): TimeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TimeInfo): TimeInfo.AsObject;
  static serializeBinaryToWriter(message: TimeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeInfo;
  static deserializeBinaryFromReader(message: TimeInfo, reader: jspb.BinaryReader): TimeInfo;
}

export namespace TimeInfo {
  export type AsObject = {
    numFrames: number,
    beginTime: number,
    endTime: number,
  }
}

export class DatasetStar extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): DatasetStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetStar.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetStar): DatasetStar.AsObject;
  static serializeBinaryToWriter(message: DatasetStar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetStar;
  static deserializeBinaryFromReader(message: DatasetStar, reader: jspb.BinaryReader): DatasetStar;
}

export namespace DatasetStar {
  export type AsObject = {
    datasetId: string,
  }
}

export class ModuleStar extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): ModuleStar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleStar.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleStar): ModuleStar.AsObject;
  static serializeBinaryToWriter(message: ModuleStar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleStar;
  static deserializeBinaryFromReader(message: ModuleStar, reader: jspb.BinaryReader): ModuleStar;
}

export namespace ModuleStar {
  export type AsObject = {
    moduleId: string,
  }
}

export class Module extends jspb.Message {
  getId(): string;
  setId(value: string): Module;

  getDescription(): string;
  setDescription(value: string): Module;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Module;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Module;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Module;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Module;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): Module;
  hasVisibility(): boolean;
  clearVisibility(): Module;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Module;
  hasMetadata(): boolean;
  clearMetadata(): Module;

  getUserId(): string;
  setUserId(value: string): Module;

  getAppId(): string;
  setAppId(value: string): Module;

  getModuleVersion(): ModuleVersion | undefined;
  setModuleVersion(value?: ModuleVersion): Module;
  hasModuleVersion(): boolean;
  clearModuleVersion(): Module;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): Module;

  getStarCount(): number;
  setStarCount(value: number): Module;

  getBookmarkOrigin(): BookmarkOrigin | undefined;
  setBookmarkOrigin(value?: BookmarkOrigin): Module;
  hasBookmarkOrigin(): boolean;
  clearBookmarkOrigin(): Module;

  getImage(): Image | undefined;
  setImage(value?: Image): Module;
  hasImage(): boolean;
  clearImage(): Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    id: string,
    description: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    visibility?: Visibility.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    userId: string,
    appId: string,
    moduleVersion?: ModuleVersion.AsObject,
    isStarred: boolean,
    starCount: number,
    bookmarkOrigin?: BookmarkOrigin.AsObject,
    image?: Image.AsObject,
  }
}

export class ModuleVersion extends jspb.Message {
  getId(): string;
  setId(value: string): ModuleVersion;

  getModuleId(): string;
  setModuleId(value: string): ModuleVersion;

  getAppId(): string;
  setAppId(value: string): ModuleVersion;

  getUserId(): string;
  setUserId(value: string): ModuleVersion;

  getDescription(): string;
  setDescription(value: string): ModuleVersion;

  getNotes(): string;
  setNotes(value: string): ModuleVersion;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ModuleVersion;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ModuleVersion;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): ModuleVersion;
  hasModifiedAt(): boolean;
  clearModifiedAt(): ModuleVersion;

  getGitCommitUrl(): string;
  setGitCommitUrl(value: string): ModuleVersion;

  getModuleNav(): ModuleVersion.ModuleNav | undefined;
  setModuleNav(value?: ModuleVersion.ModuleNav): ModuleVersion;
  hasModuleNav(): boolean;
  clearModuleNav(): ModuleVersion;

  getApproved(): boolean;
  setApproved(value: boolean): ModuleVersion;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): ModuleVersion;
  hasVisibility(): boolean;
  clearVisibility(): ModuleVersion;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): ModuleVersion;
  hasMetadata(): boolean;
  clearMetadata(): ModuleVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleVersion.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleVersion): ModuleVersion.AsObject;
  static serializeBinaryToWriter(message: ModuleVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleVersion;
  static deserializeBinaryFromReader(message: ModuleVersion, reader: jspb.BinaryReader): ModuleVersion;
}

export namespace ModuleVersion {
  export type AsObject = {
    id: string,
    moduleId: string,
    appId: string,
    userId: string,
    description: string,
    notes: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gitCommitUrl: string,
    moduleNav?: ModuleVersion.ModuleNav.AsObject,
    approved: boolean,
    visibility?: Visibility.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class ModuleSubNav extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): ModuleSubNav;

    getQueryKey(): string;
    setQueryKey(value: string): ModuleSubNav;

    getQueryValue(): string;
    setQueryValue(value: string): ModuleSubNav;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModuleSubNav.AsObject;
    static toObject(includeInstance: boolean, msg: ModuleSubNav): ModuleSubNav.AsObject;
    static serializeBinaryToWriter(message: ModuleSubNav, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModuleSubNav;
    static deserializeBinaryFromReader(message: ModuleSubNav, reader: jspb.BinaryReader): ModuleSubNav;
  }

  export namespace ModuleSubNav {
    export type AsObject = {
      title: string,
      queryKey: string,
      queryValue: string,
    }
  }


  export class ModuleNav extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): ModuleNav;

    getModuleSubNavsList(): Array<ModuleVersion.ModuleSubNav>;
    setModuleSubNavsList(value: Array<ModuleVersion.ModuleSubNav>): ModuleNav;
    clearModuleSubNavsList(): ModuleNav;
    addModuleSubNavs(value?: ModuleVersion.ModuleSubNav, index?: number): ModuleVersion.ModuleSubNav;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModuleNav.AsObject;
    static toObject(includeInstance: boolean, msg: ModuleNav): ModuleNav.AsObject;
    static serializeBinaryToWriter(message: ModuleNav, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModuleNav;
    static deserializeBinaryFromReader(message: ModuleNav, reader: jspb.BinaryReader): ModuleNav;
  }

  export namespace ModuleNav {
    export type AsObject = {
      title: string,
      moduleSubNavsList: Array<ModuleVersion.ModuleSubNav.AsObject>,
    }
  }

}

export class InstalledModuleVersion extends jspb.Message {
  getId(): string;
  setId(value: string): InstalledModuleVersion;

  getModuleVersion(): ModuleVersion | undefined;
  setModuleVersion(value?: ModuleVersion): InstalledModuleVersion;
  hasModuleVersion(): boolean;
  clearModuleVersion(): InstalledModuleVersion;

  getAppId(): string;
  setAppId(value: string): InstalledModuleVersion;

  getUserId(): string;
  setUserId(value: string): InstalledModuleVersion;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstalledModuleVersion;
  hasCreatedAt(): boolean;
  clearCreatedAt(): InstalledModuleVersion;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstalledModuleVersion;
  hasModifiedAt(): boolean;
  clearModifiedAt(): InstalledModuleVersion;

  getDeployUrl(): string;
  setDeployUrl(value: string): InstalledModuleVersion;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): InstalledModuleVersion;
  hasVisibility(): boolean;
  clearVisibility(): InstalledModuleVersion;

  getKeyId(): string;
  setKeyId(value: string): InstalledModuleVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstalledModuleVersion.AsObject;
  static toObject(includeInstance: boolean, msg: InstalledModuleVersion): InstalledModuleVersion.AsObject;
  static serializeBinaryToWriter(message: InstalledModuleVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstalledModuleVersion;
  static deserializeBinaryFromReader(message: InstalledModuleVersion, reader: jspb.BinaryReader): InstalledModuleVersion;
}

export namespace InstalledModuleVersion {
  export type AsObject = {
    id: string,
    moduleVersion?: ModuleVersion.AsObject,
    appId: string,
    userId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deployUrl: string,
    visibility?: Visibility.AsObject,
    keyId: string,
  }
}

export class BulkOperation extends jspb.Message {
  getId(): string;
  setId(value: string): BulkOperation;

  getInputIds(): InputIDs | undefined;
  setInputIds(value?: InputIDs): BulkOperation;
  hasInputIds(): boolean;
  clearInputIds(): BulkOperation;

  getSearch(): Search | undefined;
  setSearch(value?: Search): BulkOperation;
  hasSearch(): boolean;
  clearSearch(): BulkOperation;

  getDataset(): Dataset | undefined;
  setDataset(value?: Dataset): BulkOperation;
  hasDataset(): boolean;
  clearDataset(): BulkOperation;

  getOperation(): Operation | undefined;
  setOperation(value?: Operation): BulkOperation;
  hasOperation(): boolean;
  clearOperation(): BulkOperation;

  getAppId(): string;
  setAppId(value: string): BulkOperation;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): BulkOperation;
  hasStatus(): boolean;
  clearStatus(): BulkOperation;

  getProgress(): Progress | undefined;
  setProgress(value?: Progress): BulkOperation;
  hasProgress(): boolean;
  clearProgress(): BulkOperation;

  getCreatedBy(): string;
  setCreatedBy(value: string): BulkOperation;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BulkOperation;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BulkOperation;

  getLastModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): BulkOperation;
  hasLastModifiedAt(): boolean;
  clearLastModifiedAt(): BulkOperation;

  getInputSourceCase(): BulkOperation.InputSourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkOperation.AsObject;
  static toObject(includeInstance: boolean, msg: BulkOperation): BulkOperation.AsObject;
  static serializeBinaryToWriter(message: BulkOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkOperation;
  static deserializeBinaryFromReader(message: BulkOperation, reader: jspb.BinaryReader): BulkOperation;
}

export namespace BulkOperation {
  export type AsObject = {
    id: string,
    inputIds?: InputIDs.AsObject,
    search?: Search.AsObject,
    dataset?: Dataset.AsObject,
    operation?: Operation.AsObject,
    appId: string,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    progress?: Progress.AsObject,
    createdBy: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum InputSourceCase { 
    INPUT_SOURCE_NOT_SET = 0,
    INPUT_IDS = 2,
    SEARCH = 10,
    DATASET = 11,
  }
}

export class InputIDs extends jspb.Message {
  getInputIdsList(): Array<string>;
  setInputIdsList(value: Array<string>): InputIDs;
  clearInputIdsList(): InputIDs;
  addInputIds(value: string, index?: number): InputIDs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputIDs.AsObject;
  static toObject(includeInstance: boolean, msg: InputIDs): InputIDs.AsObject;
  static serializeBinaryToWriter(message: InputIDs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputIDs;
  static deserializeBinaryFromReader(message: InputIDs, reader: jspb.BinaryReader): InputIDs;
}

export namespace InputIDs {
  export type AsObject = {
    inputIdsList: Array<string>,
  }
}

export class Progress extends jspb.Message {
  getProcessed(): number;
  setProcessed(value: number): Progress;

  getLastProcessedId(): string;
  setLastProcessedId(value: string): Progress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    processed: number,
    lastProcessedId: string,
  }
}

export class Operation extends jspb.Message {
  getAddConcepts(): AddConcepts | undefined;
  setAddConcepts(value?: AddConcepts): Operation;
  hasAddConcepts(): boolean;
  clearAddConcepts(): Operation;

  getDeleteConcepts(): DeleteConcepts | undefined;
  setDeleteConcepts(value?: DeleteConcepts): Operation;
  hasDeleteConcepts(): boolean;
  clearDeleteConcepts(): Operation;

  getAddMetadata(): AddMetadata | undefined;
  setAddMetadata(value?: AddMetadata): Operation;
  hasAddMetadata(): boolean;
  clearAddMetadata(): Operation;

  getDeleteMetadata(): DeleteMetadata | undefined;
  setDeleteMetadata(value?: DeleteMetadata): Operation;
  hasDeleteMetadata(): boolean;
  clearDeleteMetadata(): Operation;

  getOverwriteGeo(): OverwriteGeo | undefined;
  setOverwriteGeo(value?: OverwriteGeo): Operation;
  hasOverwriteGeo(): boolean;
  clearOverwriteGeo(): Operation;

  getDeleteGeo(): DeleteGeo | undefined;
  setDeleteGeo(value?: DeleteGeo): Operation;
  hasDeleteGeo(): boolean;
  clearDeleteGeo(): Operation;

  getDeleteFromDataset(): DeleteFromDataset | undefined;
  setDeleteFromDataset(value?: DeleteFromDataset): Operation;
  hasDeleteFromDataset(): boolean;
  clearDeleteFromDataset(): Operation;

  getAddToDataset(): AddToDataset | undefined;
  setAddToDataset(value?: AddToDataset): Operation;
  hasAddToDataset(): boolean;
  clearAddToDataset(): Operation;

  getSplitIntoDatasets(): SplitIntoDatasets | undefined;
  setSplitIntoDatasets(value?: SplitIntoDatasets): Operation;
  hasSplitIntoDatasets(): boolean;
  clearSplitIntoDatasets(): Operation;

  getOperationCase(): Operation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    addConcepts?: AddConcepts.AsObject,
    deleteConcepts?: DeleteConcepts.AsObject,
    addMetadata?: AddMetadata.AsObject,
    deleteMetadata?: DeleteMetadata.AsObject,
    overwriteGeo?: OverwriteGeo.AsObject,
    deleteGeo?: DeleteGeo.AsObject,
    deleteFromDataset?: DeleteFromDataset.AsObject,
    addToDataset?: AddToDataset.AsObject,
    splitIntoDatasets?: SplitIntoDatasets.AsObject,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    ADD_CONCEPTS = 1,
    DELETE_CONCEPTS = 2,
    ADD_METADATA = 3,
    DELETE_METADATA = 4,
    OVERWRITE_GEO = 5,
    DELETE_GEO = 6,
    DELETE_FROM_DATASET = 7,
    ADD_TO_DATASET = 8,
    SPLIT_INTO_DATASETS = 9,
  }
}

export class AddConcepts extends jspb.Message {
  getConceptsList(): Array<Concept>;
  setConceptsList(value: Array<Concept>): AddConcepts;
  clearConceptsList(): AddConcepts;
  addConcepts(value?: Concept, index?: number): Concept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddConcepts.AsObject;
  static toObject(includeInstance: boolean, msg: AddConcepts): AddConcepts.AsObject;
  static serializeBinaryToWriter(message: AddConcepts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddConcepts;
  static deserializeBinaryFromReader(message: AddConcepts, reader: jspb.BinaryReader): AddConcepts;
}

export namespace AddConcepts {
  export type AsObject = {
    conceptsList: Array<Concept.AsObject>,
  }
}

export class DeleteConcepts extends jspb.Message {
  getConceptsList(): Array<Concept>;
  setConceptsList(value: Array<Concept>): DeleteConcepts;
  clearConceptsList(): DeleteConcepts;
  addConcepts(value?: Concept, index?: number): Concept;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): DeleteConcepts;
  clearUserIdsList(): DeleteConcepts;
  addUserIds(value: string, index?: number): DeleteConcepts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConcepts.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConcepts): DeleteConcepts.AsObject;
  static serializeBinaryToWriter(message: DeleteConcepts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConcepts;
  static deserializeBinaryFromReader(message: DeleteConcepts, reader: jspb.BinaryReader): DeleteConcepts;
}

export namespace DeleteConcepts {
  export type AsObject = {
    conceptsList: Array<Concept.AsObject>,
    userIdsList: Array<string>,
  }
}

export class AddMetadata extends jspb.Message {
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): AddMetadata;
  hasMetadata(): boolean;
  clearMetadata(): AddMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: AddMetadata): AddMetadata.AsObject;
  static serializeBinaryToWriter(message: AddMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMetadata;
  static deserializeBinaryFromReader(message: AddMetadata, reader: jspb.BinaryReader): AddMetadata;
}

export namespace AddMetadata {
  export type AsObject = {
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DeleteMetadata extends jspb.Message {
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): DeleteMetadata;
  hasMetadata(): boolean;
  clearMetadata(): DeleteMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMetadata): DeleteMetadata.AsObject;
  static serializeBinaryToWriter(message: DeleteMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMetadata;
  static deserializeBinaryFromReader(message: DeleteMetadata, reader: jspb.BinaryReader): DeleteMetadata;
}

export namespace DeleteMetadata {
  export type AsObject = {
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class OverwriteGeo extends jspb.Message {
  getGeo(): Geo | undefined;
  setGeo(value?: Geo): OverwriteGeo;
  hasGeo(): boolean;
  clearGeo(): OverwriteGeo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverwriteGeo.AsObject;
  static toObject(includeInstance: boolean, msg: OverwriteGeo): OverwriteGeo.AsObject;
  static serializeBinaryToWriter(message: OverwriteGeo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverwriteGeo;
  static deserializeBinaryFromReader(message: OverwriteGeo, reader: jspb.BinaryReader): OverwriteGeo;
}

export namespace OverwriteGeo {
  export type AsObject = {
    geo?: Geo.AsObject,
  }
}

export class DeleteGeo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGeo.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGeo): DeleteGeo.AsObject;
  static serializeBinaryToWriter(message: DeleteGeo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGeo;
  static deserializeBinaryFromReader(message: DeleteGeo, reader: jspb.BinaryReader): DeleteGeo;
}

export namespace DeleteGeo {
  export type AsObject = {
  }
}

export class AddToDataset extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): AddToDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToDataset.AsObject;
  static toObject(includeInstance: boolean, msg: AddToDataset): AddToDataset.AsObject;
  static serializeBinaryToWriter(message: AddToDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToDataset;
  static deserializeBinaryFromReader(message: AddToDataset, reader: jspb.BinaryReader): AddToDataset;
}

export namespace AddToDataset {
  export type AsObject = {
    datasetId: string,
  }
}

export class DeleteFromDataset extends jspb.Message {
  getDatasetId(): string;
  setDatasetId(value: string): DeleteFromDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFromDataset.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFromDataset): DeleteFromDataset.AsObject;
  static serializeBinaryToWriter(message: DeleteFromDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFromDataset;
  static deserializeBinaryFromReader(message: DeleteFromDataset, reader: jspb.BinaryReader): DeleteFromDataset;
}

export namespace DeleteFromDataset {
  export type AsObject = {
    datasetId: string,
  }
}

export class SplitIntoDatasets extends jspb.Message {
  getDatasetSplitsList(): Array<DatasetSplit>;
  setDatasetSplitsList(value: Array<DatasetSplit>): SplitIntoDatasets;
  clearDatasetSplitsList(): SplitIntoDatasets;
  addDatasetSplits(value?: DatasetSplit, index?: number): DatasetSplit;

  getMethod(): SplitIntoDatasets.DatasetSplitMethod;
  setMethod(value: SplitIntoDatasets.DatasetSplitMethod): SplitIntoDatasets;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitIntoDatasets.AsObject;
  static toObject(includeInstance: boolean, msg: SplitIntoDatasets): SplitIntoDatasets.AsObject;
  static serializeBinaryToWriter(message: SplitIntoDatasets, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitIntoDatasets;
  static deserializeBinaryFromReader(message: SplitIntoDatasets, reader: jspb.BinaryReader): SplitIntoDatasets;
}

export namespace SplitIntoDatasets {
  export type AsObject = {
    datasetSplitsList: Array<DatasetSplit.AsObject>,
    method: SplitIntoDatasets.DatasetSplitMethod,
  }

  export enum DatasetSplitMethod { 
    NOT_SET = 0,
    RANDOM_PERCENTAGE_SPLIT = 1,
  }
}

export class DatasetSplit extends jspb.Message {
  getDataset(): Dataset | undefined;
  setDataset(value?: Dataset): DatasetSplit;
  hasDataset(): boolean;
  clearDataset(): DatasetSplit;

  getPercentage(): number;
  setPercentage(value: number): DatasetSplit;

  getMethodInfoCase(): DatasetSplit.MethodInfoCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetSplit.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetSplit): DatasetSplit.AsObject;
  static serializeBinaryToWriter(message: DatasetSplit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetSplit;
  static deserializeBinaryFromReader(message: DatasetSplit, reader: jspb.BinaryReader): DatasetSplit;
}

export namespace DatasetSplit {
  export type AsObject = {
    dataset?: Dataset.AsObject,
    percentage: number,
  }

  export enum MethodInfoCase { 
    METHOD_INFO_NOT_SET = 0,
    PERCENTAGE = 2,
  }
}

export class InputsAddJob extends jspb.Message {
  getId(): string;
  setId(value: string): InputsAddJob;

  getCallBackUrl(): string;
  setCallBackUrl(value: string): InputsAddJob;

  getAppPat(): string;
  setAppPat(value: string): InputsAddJob;

  getProgress(): InputsAddJobProgress | undefined;
  setProgress(value?: InputsAddJobProgress): InputsAddJob;
  hasProgress(): boolean;
  clearProgress(): InputsAddJob;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputsAddJob;
  hasCreatedAt(): boolean;
  clearCreatedAt(): InputsAddJob;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputsAddJob;
  hasModifiedAt(): boolean;
  clearModifiedAt(): InputsAddJob;

  getExtractionJobsList(): Array<InputsExtractionJob>;
  setExtractionJobsList(value: Array<InputsExtractionJob>): InputsAddJob;
  clearExtractionJobsList(): InputsAddJob;
  addExtractionJobs(value?: InputsExtractionJob, index?: number): InputsExtractionJob;

  getUploadsList(): Array<Upload>;
  setUploadsList(value: Array<Upload>): InputsAddJob;
  clearUploadsList(): InputsAddJob;
  addUploads(value?: Upload, index?: number): Upload;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): InputsAddJob;
  hasStatus(): boolean;
  clearStatus(): InputsAddJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputsAddJob.AsObject;
  static toObject(includeInstance: boolean, msg: InputsAddJob): InputsAddJob.AsObject;
  static serializeBinaryToWriter(message: InputsAddJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputsAddJob;
  static deserializeBinaryFromReader(message: InputsAddJob, reader: jspb.BinaryReader): InputsAddJob;
}

export namespace InputsAddJob {
  export type AsObject = {
    id: string,
    callBackUrl: string,
    appPat: string,
    progress?: InputsAddJobProgress.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    extractionJobsList: Array<InputsExtractionJob.AsObject>,
    uploadsList: Array<Upload.AsObject>,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class InputsAddJobProgress extends jspb.Message {
  getPendingCount(): number;
  setPendingCount(value: number): InputsAddJobProgress;

  getInProgressCount(): number;
  setInProgressCount(value: number): InputsAddJobProgress;

  getSuccessCount(): number;
  setSuccessCount(value: number): InputsAddJobProgress;

  getFailedCount(): number;
  setFailedCount(value: number): InputsAddJobProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputsAddJobProgress.AsObject;
  static toObject(includeInstance: boolean, msg: InputsAddJobProgress): InputsAddJobProgress.AsObject;
  static serializeBinaryToWriter(message: InputsAddJobProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputsAddJobProgress;
  static deserializeBinaryFromReader(message: InputsAddJobProgress, reader: jspb.BinaryReader): InputsAddJobProgress;
}

export namespace InputsAddJobProgress {
  export type AsObject = {
    pendingCount: number,
    inProgressCount: number,
    successCount: number,
    failedCount: number,
  }
}

export class Upload extends jspb.Message {
  getId(): string;
  setId(value: string): Upload;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Upload;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Upload;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Upload;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Upload;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): Upload;
  hasExpiresAt(): boolean;
  clearExpiresAt(): Upload;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): Upload;
  hasStatus(): boolean;
  clearStatus(): Upload;

  getContentName(): string;
  setContentName(value: string): Upload;

  getContentLength(): number;
  setContentLength(value: number): Upload;

  getContentUrl(): string;
  setContentUrl(value: string): Upload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upload.AsObject;
  static toObject(includeInstance: boolean, msg: Upload): Upload.AsObject;
  static serializeBinaryToWriter(message: Upload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upload;
  static deserializeBinaryFromReader(message: Upload, reader: jspb.BinaryReader): Upload;
}

export namespace Upload {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    contentName: string,
    contentLength: number,
    contentUrl: string,
  }
}

export class UploadContentPart extends jspb.Message {
  getRangeStart(): number;
  setRangeStart(value: number): UploadContentPart;

  getPartNumber(): number;
  setPartNumber(value: number): UploadContentPart;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): UploadContentPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadContentPart.AsObject;
  static toObject(includeInstance: boolean, msg: UploadContentPart): UploadContentPart.AsObject;
  static serializeBinaryToWriter(message: UploadContentPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadContentPart;
  static deserializeBinaryFromReader(message: UploadContentPart, reader: jspb.BinaryReader): UploadContentPart;
}

export namespace UploadContentPart {
  export type AsObject = {
    rangeStart: number,
    partNumber: number,
    data: Uint8Array | string,
  }
}

export class CustomCodeOperatorRequest extends jspb.Message {
  getInputsList(): Array<Input>;
  setInputsList(value: Array<Input>): CustomCodeOperatorRequest;
  clearInputsList(): CustomCodeOperatorRequest;
  addInputs(value?: Input, index?: number): Input;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): CustomCodeOperatorRequest;
  hasMetadata(): boolean;
  clearMetadata(): CustomCodeOperatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomCodeOperatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomCodeOperatorRequest): CustomCodeOperatorRequest.AsObject;
  static serializeBinaryToWriter(message: CustomCodeOperatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomCodeOperatorRequest;
  static deserializeBinaryFromReader(message: CustomCodeOperatorRequest, reader: jspb.BinaryReader): CustomCodeOperatorRequest;
}

export namespace CustomCodeOperatorRequest {
  export type AsObject = {
    inputsList: Array<Input.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class InputsExtractionJob extends jspb.Message {
  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): InputsExtractionJob;
  hasStatus(): boolean;
  clearStatus(): InputsExtractionJob;

  getId(): string;
  setId(value: string): InputsExtractionJob;

  getUrl(): string;
  setUrl(value: string): InputsExtractionJob;

  getProgress(): InputsExtractionJobProgress | undefined;
  setProgress(value?: InputsExtractionJobProgress): InputsExtractionJob;
  hasProgress(): boolean;
  clearProgress(): InputsExtractionJob;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputsExtractionJob;
  hasCreatedAt(): boolean;
  clearCreatedAt(): InputsExtractionJob;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputsExtractionJob;
  hasModifiedAt(): boolean;
  clearModifiedAt(): InputsExtractionJob;

  getInputIdConflictResolution(): InputIDConflictResolution;
  setInputIdConflictResolution(value: InputIDConflictResolution): InputsExtractionJob;

  getInputTemplate(): Input | undefined;
  setInputTemplate(value?: Input): InputsExtractionJob;
  hasInputTemplate(): boolean;
  clearInputTemplate(): InputsExtractionJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputsExtractionJob.AsObject;
  static toObject(includeInstance: boolean, msg: InputsExtractionJob): InputsExtractionJob.AsObject;
  static serializeBinaryToWriter(message: InputsExtractionJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputsExtractionJob;
  static deserializeBinaryFromReader(message: InputsExtractionJob, reader: jspb.BinaryReader): InputsExtractionJob;
}

export namespace InputsExtractionJob {
  export type AsObject = {
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    id: string,
    url: string,
    progress?: InputsExtractionJobProgress.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    inputIdConflictResolution: InputIDConflictResolution,
    inputTemplate?: Input.AsObject,
  }
}

export class InputsExtractionJobProgress extends jspb.Message {
  getAudioInputsCount(): number;
  setAudioInputsCount(value: number): InputsExtractionJobProgress;

  getImageInputsCount(): number;
  setImageInputsCount(value: number): InputsExtractionJobProgress;

  getVideoInputsCount(): number;
  setVideoInputsCount(value: number): InputsExtractionJobProgress;

  getTextInputsCount(): number;
  setTextInputsCount(value: number): InputsExtractionJobProgress;

  getPendingArchivesCount(): number;
  setPendingArchivesCount(value: number): InputsExtractionJobProgress;

  getInProgressArchivesCount(): number;
  setInProgressArchivesCount(value: number): InputsExtractionJobProgress;

  getCompletedArchivesCount(): number;
  setCompletedArchivesCount(value: number): InputsExtractionJobProgress;

  getFailedArchivesCount(): number;
  setFailedArchivesCount(value: number): InputsExtractionJobProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputsExtractionJobProgress.AsObject;
  static toObject(includeInstance: boolean, msg: InputsExtractionJobProgress): InputsExtractionJobProgress.AsObject;
  static serializeBinaryToWriter(message: InputsExtractionJobProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputsExtractionJobProgress;
  static deserializeBinaryFromReader(message: InputsExtractionJobProgress, reader: jspb.BinaryReader): InputsExtractionJobProgress;
}

export namespace InputsExtractionJobProgress {
  export type AsObject = {
    audioInputsCount: number,
    imageInputsCount: number,
    videoInputsCount: number,
    textInputsCount: number,
    pendingArchivesCount: number,
    inProgressArchivesCount: number,
    completedArchivesCount: number,
    failedArchivesCount: number,
  }
}

export class InputsDataSource extends jspb.Message {
  getInputsAddJobId(): string;
  setInputsAddJobId(value: string): InputsDataSource;

  getUrl(): DataSourceURL | undefined;
  setUrl(value?: DataSourceURL): InputsDataSource;
  hasUrl(): boolean;
  clearUrl(): InputsDataSource;

  getInputIdConflictResolution(): InputIDConflictResolution;
  setInputIdConflictResolution(value: InputIDConflictResolution): InputsDataSource;

  getInputTemplate(): Input | undefined;
  setInputTemplate(value?: Input): InputsDataSource;
  hasInputTemplate(): boolean;
  clearInputTemplate(): InputsDataSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputsDataSource.AsObject;
  static toObject(includeInstance: boolean, msg: InputsDataSource): InputsDataSource.AsObject;
  static serializeBinaryToWriter(message: InputsDataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputsDataSource;
  static deserializeBinaryFromReader(message: InputsDataSource, reader: jspb.BinaryReader): InputsDataSource;
}

export namespace InputsDataSource {
  export type AsObject = {
    inputsAddJobId: string,
    url?: DataSourceURL.AsObject,
    inputIdConflictResolution: InputIDConflictResolution,
    inputTemplate?: Input.AsObject,
  }
}

export class DataSourceURL extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): DataSourceURL;

  getCredentials(): DataSourceCredentials | undefined;
  setCredentials(value?: DataSourceCredentials): DataSourceURL;
  hasCredentials(): boolean;
  clearCredentials(): DataSourceURL;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceURL.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceURL): DataSourceURL.AsObject;
  static serializeBinaryToWriter(message: DataSourceURL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceURL;
  static deserializeBinaryFromReader(message: DataSourceURL, reader: jspb.BinaryReader): DataSourceURL;
}

export namespace DataSourceURL {
  export type AsObject = {
    url: string,
    credentials?: DataSourceCredentials.AsObject,
  }
}

export class DataSourceCredentials extends jspb.Message {
  getS3Creds(): AWSCreds | undefined;
  setS3Creds(value?: AWSCreds): DataSourceCredentials;
  hasS3Creds(): boolean;
  clearS3Creds(): DataSourceCredentials;

  getGcpCreds(): Uint8Array | string;
  getGcpCreds_asU8(): Uint8Array;
  getGcpCreds_asB64(): string;
  setGcpCreds(value: Uint8Array | string): DataSourceCredentials;

  getAzureBlobCreds(): AzureBlobCreds | undefined;
  setAzureBlobCreds(value?: AzureBlobCreds): DataSourceCredentials;
  hasAzureBlobCreds(): boolean;
  clearAzureBlobCreds(): DataSourceCredentials;

  getCredentialsCase(): DataSourceCredentials.CredentialsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceCredentials): DataSourceCredentials.AsObject;
  static serializeBinaryToWriter(message: DataSourceCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceCredentials;
  static deserializeBinaryFromReader(message: DataSourceCredentials, reader: jspb.BinaryReader): DataSourceCredentials;
}

export namespace DataSourceCredentials {
  export type AsObject = {
    s3Creds?: AWSCreds.AsObject,
    gcpCreds: Uint8Array | string,
    azureBlobCreds?: AzureBlobCreds.AsObject,
  }

  export enum CredentialsCase { 
    CREDENTIALS_NOT_SET = 0,
    S3_CREDS = 1,
    GCP_CREDS = 2,
    AZURE_BLOB_CREDS = 4,
  }
}

export class AWSCreds extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): AWSCreds;

  getId(): string;
  setId(value: string): AWSCreds;

  getSecret(): string;
  setSecret(value: string): AWSCreds;

  getToken(): string;
  setToken(value: string): AWSCreds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AWSCreds.AsObject;
  static toObject(includeInstance: boolean, msg: AWSCreds): AWSCreds.AsObject;
  static serializeBinaryToWriter(message: AWSCreds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AWSCreds;
  static deserializeBinaryFromReader(message: AWSCreds, reader: jspb.BinaryReader): AWSCreds;
}

export namespace AWSCreds {
  export type AsObject = {
    region: string,
    id: string,
    secret: string,
    token: string,
  }
}

export class AzureBlobCreds extends jspb.Message {
  getAccountName(): string;
  setAccountName(value: string): AzureBlobCreds;

  getAccountKey(): string;
  setAccountKey(value: string): AzureBlobCreds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AzureBlobCreds.AsObject;
  static toObject(includeInstance: boolean, msg: AzureBlobCreds): AzureBlobCreds.AsObject;
  static serializeBinaryToWriter(message: AzureBlobCreds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AzureBlobCreds;
  static deserializeBinaryFromReader(message: AzureBlobCreds, reader: jspb.BinaryReader): AzureBlobCreds;
}

export namespace AzureBlobCreds {
  export type AsObject = {
    accountName: string,
    accountKey: string,
  }
}

export class InputsUpload extends jspb.Message {
  getInputsAddJobId(): string;
  setInputsAddJobId(value: string): InputsUpload;

  getAppPat(): string;
  setAppPat(value: string): InputsUpload;

  getUpload(): Upload | undefined;
  setUpload(value?: Upload): InputsUpload;
  hasUpload(): boolean;
  clearUpload(): InputsUpload;

  getInputIdConflictResolution(): InputIDConflictResolution;
  setInputIdConflictResolution(value: InputIDConflictResolution): InputsUpload;

  getInputTemplate(): Input | undefined;
  setInputTemplate(value?: Input): InputsUpload;
  hasInputTemplate(): boolean;
  clearInputTemplate(): InputsUpload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputsUpload.AsObject;
  static toObject(includeInstance: boolean, msg: InputsUpload): InputsUpload.AsObject;
  static serializeBinaryToWriter(message: InputsUpload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputsUpload;
  static deserializeBinaryFromReader(message: InputsUpload, reader: jspb.BinaryReader): InputsUpload;
}

export namespace InputsUpload {
  export type AsObject = {
    inputsAddJobId: string,
    appPat: string,
    upload?: Upload.AsObject,
    inputIdConflictResolution: InputIDConflictResolution,
    inputTemplate?: Input.AsObject,
  }
}

export class BookmarkOrigin extends jspb.Message {
  getId(): string;
  setId(value: string): BookmarkOrigin;

  getAppId(): string;
  setAppId(value: string): BookmarkOrigin;

  getUserId(): string;
  setUserId(value: string): BookmarkOrigin;

  getResourceType(): BookmarkOrigin.BookmarkType;
  setResourceType(value: BookmarkOrigin.BookmarkType): BookmarkOrigin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookmarkOrigin.AsObject;
  static toObject(includeInstance: boolean, msg: BookmarkOrigin): BookmarkOrigin.AsObject;
  static serializeBinaryToWriter(message: BookmarkOrigin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookmarkOrigin;
  static deserializeBinaryFromReader(message: BookmarkOrigin, reader: jspb.BinaryReader): BookmarkOrigin;
}

export namespace BookmarkOrigin {
  export type AsObject = {
    id: string,
    appId: string,
    userId: string,
    resourceType: BookmarkOrigin.BookmarkType,
  }

  export enum BookmarkType { 
    UNKNOWN = 0,
    MODEL = 1,
    WORKFLOW = 2,
    DATASET = 3,
    MODULE = 4,
  }
}

export class Runner extends jspb.Message {
  getId(): string;
  setId(value: string): Runner;

  getDescription(): string;
  setDescription(value: string): Runner;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Runner;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Runner;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Runner;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Runner;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): Runner;
  hasMetadata(): boolean;
  clearMetadata(): Runner;

  getUserId(): string;
  setUserId(value: string): Runner;

  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): Runner;
  clearLabelsList(): Runner;
  addLabels(value: string, index?: number): Runner;

  getModel(): Model | undefined;
  setModel(value?: Model): Runner;
  hasModel(): boolean;
  clearModel(): Runner;

  getWorkflow(): Workflow | undefined;
  setWorkflow(value?: Workflow): Runner;
  hasWorkflow(): boolean;
  clearWorkflow(): Runner;

  getNodepool(): Nodepool | undefined;
  setNodepool(value?: Nodepool): Runner;
  hasNodepool(): boolean;
  clearNodepool(): Runner;

  getComputeInfo(): ComputeInfo | undefined;
  setComputeInfo(value?: ComputeInfo): Runner;
  hasComputeInfo(): boolean;
  clearComputeInfo(): Runner;

  getObjectCase(): Runner.ObjectCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Runner.AsObject;
  static toObject(includeInstance: boolean, msg: Runner): Runner.AsObject;
  static serializeBinaryToWriter(message: Runner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Runner;
  static deserializeBinaryFromReader(message: Runner, reader: jspb.BinaryReader): Runner;
}

export namespace Runner {
  export type AsObject = {
    id: string,
    description: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    userId: string,
    labelsList: Array<string>,
    model?: Model.AsObject,
    workflow?: Workflow.AsObject,
    nodepool?: Nodepool.AsObject,
    computeInfo?: ComputeInfo.AsObject,
  }

  export enum ObjectCase { 
    OBJECT_NOT_SET = 0,
    MODEL = 9,
    WORKFLOW = 10,
  }
}

export class Nodepool extends jspb.Message {
  getId(): string;
  setId(value: string): Nodepool;

  getUserId(): string;
  setUserId(value: string): Nodepool;

  getCloudRegion(): CloudRegion | undefined;
  setCloudRegion(value?: CloudRegion): Nodepool;
  hasCloudRegion(): boolean;
  clearCloudRegion(): Nodepool;

  getCapacityTypesList(): Array<Nodepool.CapacityType>;
  setCapacityTypesList(value: Array<Nodepool.CapacityType>): Nodepool;
  clearCapacityTypesList(): Nodepool;
  addCapacityTypes(value: Nodepool.CapacityType, index?: number): Nodepool;

  getInstanceTypesList(): Array<string>;
  setInstanceTypesList(value: Array<string>): Nodepool;
  clearInstanceTypesList(): Nodepool;
  addInstanceTypes(value: string, index?: number): Nodepool;

  getMinInstances(): number;
  setMinInstances(value: number): Nodepool;

  getMaxInstances(): number;
  setMaxInstances(value: number): Nodepool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nodepool.AsObject;
  static toObject(includeInstance: boolean, msg: Nodepool): Nodepool.AsObject;
  static serializeBinaryToWriter(message: Nodepool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nodepool;
  static deserializeBinaryFromReader(message: Nodepool, reader: jspb.BinaryReader): Nodepool;
}

export namespace Nodepool {
  export type AsObject = {
    id: string,
    userId: string,
    cloudRegion?: CloudRegion.AsObject,
    capacityTypesList: Array<Nodepool.CapacityType>,
    instanceTypesList: Array<string>,
    minInstances: number,
    maxInstances: number,
  }

  export enum CapacityType { 
    UKNOWN_CAPACITY_TYPE = 0,
    ONDEMAND_TYPE = 1,
    SPOT_TYPE = 2,
  }
}

export class CloudRegion extends jspb.Message {
  getId(): string;
  setId(value: string): CloudRegion;

  getCloud(): CloudRegion.Cloud;
  setCloud(value: CloudRegion.Cloud): CloudRegion;

  getRegion(): string;
  setRegion(value: string): CloudRegion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudRegion.AsObject;
  static toObject(includeInstance: boolean, msg: CloudRegion): CloudRegion.AsObject;
  static serializeBinaryToWriter(message: CloudRegion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudRegion;
  static deserializeBinaryFromReader(message: CloudRegion, reader: jspb.BinaryReader): CloudRegion;
}

export namespace CloudRegion {
  export type AsObject = {
    id: string,
    cloud: CloudRegion.Cloud,
    region: string,
  }

  export enum Cloud { 
    UNKOWN_CLOUD = 0,
    SELF_HOSTED = 1,
    AWS = 2,
    GCP = 3,
    AZURE = 4,
    LAMBDA = 5,
  }
}

export class ComputeInfo extends jspb.Message {
  getNumCpus(): number;
  setNumCpus(value: number): ComputeInfo;

  getCpuMemory(): string;
  setCpuMemory(value: string): ComputeInfo;

  getNumAccelerators(): number;
  setNumAccelerators(value: number): ComputeInfo;

  getAcceleratorMemory(): string;
  setAcceleratorMemory(value: string): ComputeInfo;

  getAcceleratorTypeList(): Array<string>;
  setAcceleratorTypeList(value: Array<string>): ComputeInfo;
  clearAcceleratorTypeList(): ComputeInfo;
  addAcceleratorType(value: string, index?: number): ComputeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeInfo): ComputeInfo.AsObject;
  static serializeBinaryToWriter(message: ComputeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeInfo;
  static deserializeBinaryFromReader(message: ComputeInfo, reader: jspb.BinaryReader): ComputeInfo;
}

export namespace ComputeInfo {
  export type AsObject = {
    numCpus: number,
    cpuMemory: string,
    numAccelerators: number,
    acceleratorMemory: string,
    acceleratorTypeList: Array<string>,
  }
}

export class AutoscaleConfig extends jspb.Message {
  getMinReplicas(): number;
  setMinReplicas(value: number): AutoscaleConfig;

  getMaxReplicas(): number;
  setMaxReplicas(value: number): AutoscaleConfig;

  getTrafficHistorySeconds(): number;
  setTrafficHistorySeconds(value: number): AutoscaleConfig;

  getScaleDownDelaySeconds(): number;
  setScaleDownDelaySeconds(value: number): AutoscaleConfig;

  getScaleUpDelaySeconds(): number;
  setScaleUpDelaySeconds(value: number): AutoscaleConfig;

  getEnablePacking(): boolean;
  setEnablePacking(value: boolean): AutoscaleConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoscaleConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AutoscaleConfig): AutoscaleConfig.AsObject;
  static serializeBinaryToWriter(message: AutoscaleConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoscaleConfig;
  static deserializeBinaryFromReader(message: AutoscaleConfig, reader: jspb.BinaryReader): AutoscaleConfig;
}

export namespace AutoscaleConfig {
  export type AsObject = {
    minReplicas: number,
    maxReplicas: number,
    trafficHistorySeconds: number,
    scaleDownDelaySeconds: number,
    scaleUpDelaySeconds: number,
    enablePacking: boolean,
  }
}

export class Deployment extends jspb.Message {
  getId(): string;
  setId(value: string): Deployment;

  getUserId(): string;
  setUserId(value: string): Deployment;

  getAutoscaleConfig(): AutoscaleConfig | undefined;
  setAutoscaleConfig(value?: AutoscaleConfig): Deployment;
  hasAutoscaleConfig(): boolean;
  clearAutoscaleConfig(): Deployment;

  getNodepoolsList(): Array<Nodepool>;
  setNodepoolsList(value: Array<Nodepool>): Deployment;
  clearNodepoolsList(): Deployment;
  addNodepools(value?: Nodepool, index?: number): Nodepool;

  getModel(): Model | undefined;
  setModel(value?: Model): Deployment;
  hasModel(): boolean;
  clearModel(): Deployment;

  getWorkflow(): Workflow | undefined;
  setWorkflow(value?: Workflow): Deployment;
  hasWorkflow(): boolean;
  clearWorkflow(): Deployment;

  getSchedulingChoice(): Deployment.SchedulingChoice;
  setSchedulingChoice(value: Deployment.SchedulingChoice): Deployment;

  getObjectCase(): Deployment.ObjectCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    id: string,
    userId: string,
    autoscaleConfig?: AutoscaleConfig.AsObject,
    nodepoolsList: Array<Nodepool.AsObject>,
    model?: Model.AsObject,
    workflow?: Workflow.AsObject,
    schedulingChoice: Deployment.SchedulingChoice,
  }

  export enum SchedulingChoice { 
    UNKNOWN_SCHEDULING_CHOICE = 0,
    FAIL = 1,
    RANDOM = 2,
    PRICE = 3,
    PERFORMANCE = 4,
    NETWORK = 5,
    UTILIZATION = 6,
    PREFER_SPOT = 7,
    PREFER_ONDEMAND = 8,
  }

  export enum ObjectCase { 
    OBJECT_NOT_SET = 0,
    MODEL = 5,
    WORKFLOW = 6,
  }
}

export class RunnerSelector extends jspb.Message {
  getNodepool(): Nodepool | undefined;
  setNodepool(value?: Nodepool): RunnerSelector;
  hasNodepool(): boolean;
  clearNodepool(): RunnerSelector;

  getRunner(): Runner | undefined;
  setRunner(value?: Runner): RunnerSelector;
  hasRunner(): boolean;
  clearRunner(): RunnerSelector;

  getDeployment(): Deployment | undefined;
  setDeployment(value?: Deployment): RunnerSelector;
  hasDeployment(): boolean;
  clearDeployment(): RunnerSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunnerSelector.AsObject;
  static toObject(includeInstance: boolean, msg: RunnerSelector): RunnerSelector.AsObject;
  static serializeBinaryToWriter(message: RunnerSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunnerSelector;
  static deserializeBinaryFromReader(message: RunnerSelector, reader: jspb.BinaryReader): RunnerSelector;
}

export namespace RunnerSelector {
  export type AsObject = {
    nodepool?: Nodepool.AsObject,
    runner?: Runner.AsObject,
    deployment?: Deployment.AsObject,
  }
}

export class ProcessingInfo extends jspb.Message {
  getRunnerMethodType(): RunnerMethodType;
  setRunnerMethodType(value: RunnerMethodType): ProcessingInfo;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): ProcessingInfo;
  hasStatus(): boolean;
  clearStatus(): ProcessingInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessingInfo): ProcessingInfo.AsObject;
  static serializeBinaryToWriter(message: ProcessingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessingInfo;
  static deserializeBinaryFromReader(message: ProcessingInfo, reader: jspb.BinaryReader): ProcessingInfo;
}

export namespace ProcessingInfo {
  export type AsObject = {
    runnerMethodType: RunnerMethodType,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export enum WorkflowModelUseCase { 
  WORKFLOW_MODEL_USE_CASE_NOT_SET = 0,
  CLASSIFICATION = 1,
  DETECTION = 2,
}
export enum DatasetVersionRequestOrigin { 
  DATASET_VERSION_REQUEST_ORIGIN_NOT_SET = 0,
  MANUAL = 1,
  TRAINING = 2,
  EVAL_GROUND_TRUTH = 3,
  EVAL_PREDICTIONS = 4,
}
export enum DatasetVersionMetricsGroupType { 
  DATASET_VERSION_METRICS_GROUP_TYPE_NOT_SET = 0,
  INPUT_TYPE = 2,
  CONCEPT_ID = 10,
  CONCEPTS_COUNT = 11,
  BOUNDING_BOXES_COUNT = 20,
  POLYGONS_COUNT = 21,
  POINTS_COUNT = 22,
  MASKS_COUNT = 23,
  PIXELS_COUNT = 30,
  ASPECT_RATIO = 31,
}
export enum DatasetVersionExportFormat { 
  DATASET_VERSION_EXPORT_FORMAT_NOT_SET = 0,
  CLARIFAI_DATA_PROTOBUF = 1,
  CLARIFAI_DATA_JSON = 3,
  COCO = 2,
}
export enum ExpirationAction { 
  EXPIRATION_ACTION_NOT_SET = 0,
  DELAY = 1,
  EXPIRY = 2,
}
export enum LicenseScope { 
  LICENSE_SCOPE_NOT_SET = 0,
  PREDICT = 1,
  TRAIN = 2,
  SEARCH = 3,
}
export enum DataType { 
  UNDEFINED = 0,
  STRING = 1,
  UINT8 = 2,
  INT32 = 3,
  INT64 = 4,
  FP32 = 5,
}
export enum ValueComparator { 
  CONCEPT_THRESHOLD_NOT_SET = 0,
  GREATER_THAN = 1,
  GREATER_THAN_OR_EQUAL = 2,
  LESS_THAN = 3,
  LESS_THAN_OR_EQUAL = 4,
  EQUAL = 5,
}
export enum EvaluationType { 
  UNDEFINED = 0,
  CLASSIFICATION = 1,
  DETECTION = 2,
  SEGMENTATION = 3,
  CLUSTERING = 4,
  TRACKER = 5,
  GENERATION = 6,
}
export enum APIEventType { 
  API_EVENT_TYPE_NOT_SET = 0,
  ON_PREM_PREDICT = 1,
  ON_PREM_TRAIN = 2,
  ON_PREM_SEARCH = 3,
}
export enum UsageIntervalType { 
  UNDEF = 0,
  DAY = 1,
  MONTH = 2,
  YEAR = 3,
}
export enum AnnotationDataType { 
  ANNOTATION_DATA_TYPE_NOT_SET = 0,
  TAG = 1,
  BOUNDING_BOX = 2,
  POLYGON = 4,
  POINT = 8,
  SPAN = 16,
  MASK = 32,
}
export enum RoleType { 
  TEAM = 0,
  ORG = 1,
}
export enum StatValueAggType { 
  SUM = 0,
  AVG = 1,
}
export enum StatTimeAggType { 
  NO_TIME_AGG = 0,
  YEAR = 1,
  MONTH = 2,
  WEEK = 3,
  DAY = 4,
  HOUR = 5,
  MINUTE = 6,
}
export enum ValidationErrorType { 
  VALIDATION_ERROR_TYPE_NOT_SET = 0,
  RESTRICTED = 1,
  DATABASE = 2,
  FORMAT = 3,
}
export enum InputIDConflictResolution { 
  INPUT_ID_CONFLICT_RESOLUTION_NOT_SET = 0,
  SKIP = 1,
  SUFFIX = 2,
}
export enum RunnerMethodType { 
  UNKNOWN = 0,
  UNARY_UNARY = 1,
  UNARY_STREAMING = 2,
  STREAMING_UNARY = 3,
  STREAMING_STREAMING = 4,
}
