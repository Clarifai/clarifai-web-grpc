import * as jspb from "google-protobuf"

import * as proto_clarifai_api_status_status_pb from '../../../proto/clarifai/api/status/status_pb';
import * as proto_clarifai_api_utils_extensions_pb from '../../../proto/clarifai/api/utils/extensions_pb';
import * as proto_utils_matrix_pb from '../../../proto/utils/matrix_pb';
import * as proto_clarifai_auth_util_extension_pb from '../../../proto/clarifai/auth/util/extension_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class Annotation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getInputId(): string;
  setInputId(value: string): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getAnnotationInfo(): google_protobuf_struct_pb.Struct | undefined;
  setAnnotationInfo(value?: google_protobuf_struct_pb.Struct): void;
  hasAnnotationInfo(): boolean;
  clearAnnotationInfo(): void;

  getUserId(): string;
  setUserId(value: string): void;

  getModelVersionId(): string;
  setModelVersionId(value: string): void;

  getEmbedModelVersionId(): string;
  setEmbedModelVersionId(value: string): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getTrusted(): boolean;
  setTrusted(value: boolean): void;

  getInputLevel(): boolean;
  setInputLevel(value: boolean): void;

  getConsensusInfo(): google_protobuf_struct_pb.Struct | undefined;
  setConsensusInfo(value?: google_protobuf_struct_pb.Struct): void;
  hasConsensusInfo(): boolean;
  clearConsensusInfo(): void;

  getTaskId(): string;
  setTaskId(value: string): void;

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
  }
}

export class App extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDefaultLanguage(): string;
  setDefaultLanguage(value: string): void;

  getDefaultWorkflowId(): string;
  setDefaultWorkflowId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getLegalConsentStatus(): number;
  setLegalConsentStatus(value: number): void;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSampleMs(): number;
  setSampleMs(value: number): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getDataTierId(): string;
  setDataTierId(value: string): void;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): void;

  getStarCount(): number;
  setStarCount(value: number): void;

  getNotes(): string;
  setNotes(value: string): void;

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
  }
}

export class AppQuery extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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

export class Collaborator extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getApp(): App | undefined;
  setApp(value?: App): void;
  hasApp(): boolean;
  clearApp(): void;

  getUser(): User | undefined;
  setUser(value?: User): void;
  hasUser(): boolean;
  clearUser(): void;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  clearScopesList(): void;
  addScopes(value: string, index?: number): void;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): void;
  clearEndpointsList(): void;
  addEndpoints(value: string, index?: number): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDeletedAt(): boolean;
  clearDeletedAt(): void;

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
  setApp(value?: App): void;
  hasApp(): boolean;
  clearApp(): void;

  getAppOwner(): User | undefined;
  setAppOwner(value?: User): void;
  hasAppOwner(): boolean;
  clearAppOwner(): void;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  clearScopesList(): void;
  addScopes(value: string, index?: number): void;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): void;
  clearEndpointsList(): void;
  addEndpoints(value: string, index?: number): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

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
  setUrl(value: string): void;

  getBase64(): Uint8Array | string;
  getBase64_asU8(): Uint8Array;
  getBase64_asB64(): string;
  setBase64(value: Uint8Array | string): void;

  getAllowDuplicateUrl(): boolean;
  setAllowDuplicateUrl(value: boolean): void;

  getHosted(): HostedURL | undefined;
  setHosted(value?: HostedURL): void;
  hasHosted(): boolean;
  clearHosted(): void;

  getAudioInfo(): AudioInfo | undefined;
  setAudioInfo(value?: AudioInfo): void;
  hasAudioInfo(): boolean;
  clearAudioInfo(): void;

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
  setAudioFormat(value: string): void;

  getSampleRate(): number;
  setSampleRate(value: number): void;

  getDurationSeconds(): number;
  setDurationSeconds(value: number): void;

  getBitRate(): number;
  setBitRate(value: number): void;

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
  setId(value: string): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getTimeInfo(): TimeInfo | undefined;
  setTimeInfo(value?: TimeInfo): void;
  hasTimeInfo(): boolean;
  clearTimeInfo(): void;

  getQuality(): number;
  setQuality(value: number): void;

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
  setId(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getScore(): number;
  setScore(value: number): void;

  getHitsList(): Array<Hit>;
  setHitsList(value: Array<Hit>): void;
  clearHitsList(): void;
  addHits(value?: Hit, index?: number): Hit;

  getProjectionList(): Array<number>;
  setProjectionList(value: Array<number>): void;
  clearProjectionList(): void;
  addProjection(value: number, index?: number): void;

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
  setRawHex(value: string): void;

  getW3c(): W3C | undefined;
  setW3c(value?: W3C): void;
  hasW3c(): boolean;
  clearW3c(): void;

  getValue(): number;
  setValue(value: number): void;

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
  setHex(value: string): void;

  getName(): string;
  setName(value: string): void;

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
  setUserId(value: string): void;

  getAppId(): string;
  setAppId(value: string): void;

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
  setOp(value: string): void;

  getMergeConflictResolution(): string;
  setMergeConflictResolution(value: string): void;

  getPath(): string;
  setPath(value: string): void;

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
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getAppId(): string;
  setAppId(value: string): void;

  getDefinition(): string;
  setDefinition(value: string): void;

  getVocabId(): string;
  setVocabId(value: string): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getUserId(): string;
  setUserId(value: string): void;

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
  }
}

export class ConceptCount extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getConceptTypeCount(): ConceptTypeCount | undefined;
  setConceptTypeCount(value?: ConceptTypeCount): void;
  hasConceptTypeCount(): boolean;
  clearConceptTypeCount(): void;

  getDetailConceptCount(): DetailConceptCount | undefined;
  setDetailConceptCount(value?: DetailConceptCount): void;
  hasDetailConceptCount(): boolean;
  clearDetailConceptCount(): void;

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
  setPositive(value: number): void;

  getNegative(): number;
  setNegative(value: number): void;

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
  setProcessed(value?: ConceptTypeCount): void;
  hasProcessed(): boolean;
  clearProcessed(): void;

  getToProcess(): ConceptTypeCount | undefined;
  setToProcess(value?: ConceptTypeCount): void;
  hasToProcess(): boolean;
  clearToProcess(): void;

  getErrors(): ConceptTypeCount | undefined;
  setErrors(value?: ConceptTypeCount): void;
  hasErrors(): boolean;
  clearErrors(): void;

  getProcessing(): ConceptTypeCount | undefined;
  setProcessing(value?: ConceptTypeCount): void;
  hasProcessing(): boolean;
  clearProcessing(): void;

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
  setName(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

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
  }
}

export class ConceptRelation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSubjectConcept(): Concept | undefined;
  setSubjectConcept(value?: Concept): void;
  hasSubjectConcept(): boolean;
  clearSubjectConcept(): void;

  getObjectConcept(): Concept | undefined;
  setObjectConcept(value?: Concept): void;
  hasObjectConcept(): boolean;
  clearObjectConcept(): void;

  getPredicate(): string;
  setPredicate(value: string): void;

  getKnowledgeGraphId(): string;
  setKnowledgeGraphId(value: string): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

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
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExamplesAppId(): string;
  setExamplesAppId(value: string): void;

  getSampledExamplesAppId(): string;
  setSampledExamplesAppId(value: string): void;

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
  setKnowledgeGraphId(value: string): void;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): void;
  clearConceptIdsList(): void;
  addConceptIds(value: string, index?: number): void;

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
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDefinition(): string;
  setDefinition(value: string): void;

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
  setImage(value?: Image): void;
  hasImage(): boolean;
  clearImage(): void;

  getVideo(): Video | undefined;
  setVideo(value?: Video): void;
  hasVideo(): boolean;
  clearVideo(): void;

  getConceptsList(): Array<Concept>;
  setConceptsList(value: Array<Concept>): void;
  clearConceptsList(): void;
  addConcepts(value?: Concept, index?: number): Concept;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getGeo(): Geo | undefined;
  setGeo(value?: Geo): void;
  hasGeo(): boolean;
  clearGeo(): void;

  getColorsList(): Array<Color>;
  setColorsList(value: Array<Color>): void;
  clearColorsList(): void;
  addColors(value?: Color, index?: number): Color;

  getClustersList(): Array<Cluster>;
  setClustersList(value: Array<Cluster>): void;
  clearClustersList(): void;
  addClusters(value?: Cluster, index?: number): Cluster;

  getEmbeddingsList(): Array<Embedding>;
  setEmbeddingsList(value: Array<Embedding>): void;
  clearEmbeddingsList(): void;
  addEmbeddings(value?: Embedding, index?: number): Embedding;

  getRegionsList(): Array<Region>;
  setRegionsList(value: Array<Region>): void;
  clearRegionsList(): void;
  addRegions(value?: Region, index?: number): Region;

  getFramesList(): Array<Frame>;
  setFramesList(value: Array<Frame>): void;
  clearFramesList(): void;
  addFrames(value?: Frame, index?: number): Frame;

  getText(): Text | undefined;
  setText(value?: Text): void;
  hasText(): boolean;
  clearText(): void;

  getAudio(): Audio | undefined;
  setAudio(value?: Audio): void;
  hasAudio(): boolean;
  clearAudio(): void;

  getTracksList(): Array<Track>;
  setTracksList(value: Array<Track>): void;
  clearTracksList(): void;
  addTracks(value?: Track, index?: number): Track;

  getTimeSegmentsList(): Array<TimeSegment>;
  setTimeSegmentsList(value: Array<TimeSegment>): void;
  clearTimeSegmentsList(): void;
  addTimeSegments(value?: TimeSegment, index?: number): TimeSegment;

  getHitsList(): Array<Hit>;
  setHitsList(value: Array<Hit>): void;
  clearHitsList(): void;
  addHits(value?: Hit, index?: number): Hit;

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
  }
}

export class Region extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRegionInfo(): RegionInfo | undefined;
  setRegionInfo(value?: RegionInfo): void;
  hasRegionInfo(): boolean;
  clearRegionInfo(): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getValue(): number;
  setValue(value: number): void;

  getTrackId(): string;
  setTrackId(value: string): void;

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
  setBoundingBox(value?: BoundingBox): void;
  hasBoundingBox(): boolean;
  clearBoundingBox(): void;

  getMask(): Mask | undefined;
  setMask(value?: Mask): void;
  hasMask(): boolean;
  clearMask(): void;

  getPolygon(): Polygon | undefined;
  setPolygon(value?: Polygon): void;
  hasPolygon(): boolean;
  clearPolygon(): void;

  getPoint(): Point | undefined;
  setPoint(value?: Point): void;
  hasPoint(): boolean;
  clearPoint(): void;

  getSpan(): Span | undefined;
  setSpan(value?: Span): void;
  hasSpan(): boolean;
  clearSpan(): void;

  getToken(): Token | undefined;
  setToken(value?: Token): void;
  hasToken(): boolean;
  clearToken(): void;

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
  }
}

export class BoundingBox extends jspb.Message {
  getTopRow(): number;
  setTopRow(value: number): void;

  getLeftCol(): number;
  setLeftCol(value: number): void;

  getBottomRow(): number;
  setBottomRow(value: number): void;

  getRightCol(): number;
  setRightCol(value: number): void;

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
  setIndex(value: number): void;

  getTime(): number;
  setTime(value: number): void;

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
  setFrameInfo(value?: FrameInfo): void;
  hasFrameInfo(): boolean;
  clearFrameInfo(): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getId(): string;
  setId(value: string): void;

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
  setImage(value?: Image): void;
  hasImage(): boolean;
  clearImage(): void;

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
  setPointsList(value: Array<Point>): void;
  clearPointsList(): void;
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
  setRow(value: number): void;

  getCol(): number;
  setCol(value: number): void;

  getZ(): number;
  setZ(value: number): void;

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
  }
}

export class Span extends jspb.Message {
  getCharStart(): number;
  setCharStart(value: number): void;

  getCharEnd(): number;
  setCharEnd(value: number): void;

  getRawText(): string;
  setRawText(value: string): void;

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
  setCharStart(value: number): void;

  getCharEnd(): number;
  setCharEnd(value: number): void;

  getRawText(): string;
  setRawText(value: string): void;

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
  setVectorList(value: Array<number>): void;
  clearVectorList(): void;
  addVector(value: number, index?: number): void;

  getNumDimensions(): number;
  setNumDimensions(value: number): void;

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
  setLongitude(value: number): void;

  getLatitude(): number;
  setLatitude(value: number): void;

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
  setType(value: string): void;

  getValue(): number;
  setValue(value: number): void;

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
  setGeoPoint(value?: GeoPoint): void;
  hasGeoPoint(): boolean;
  clearGeoPoint(): void;

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
  setGeoPoint(value?: GeoPoint): void;
  hasGeoPoint(): boolean;
  clearGeoPoint(): void;

  getGeoLimit(): GeoLimit | undefined;
  setGeoLimit(value?: GeoLimit): void;
  hasGeoLimit(): boolean;
  clearGeoLimit(): void;

  getGeoBoxList(): Array<GeoBoxedPoint>;
  setGeoBoxList(value: Array<GeoBoxedPoint>): void;
  clearGeoBoxList(): void;
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
  setUrl(value: string): void;

  getBase64(): Uint8Array | string;
  getBase64_asU8(): Uint8Array;
  getBase64_asB64(): string;
  setBase64(value: Uint8Array | string): void;

  getAllowDuplicateUrl(): boolean;
  setAllowDuplicateUrl(value: boolean): void;

  getHosted(): HostedURL | undefined;
  setHosted(value?: HostedURL): void;
  hasHosted(): boolean;
  clearHosted(): void;

  getImageInfo(): ImageInfo | undefined;
  setImageInfo(value?: ImageInfo): void;
  hasImageInfo(): boolean;
  clearImageInfo(): void;

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
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getFormat(): string;
  setFormat(value: string): void;

  getColorMode(): string;
  setColorMode(value: string): void;

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
  setPrefix(value: string): void;

  getSuffix(): string;
  setSuffix(value: string): void;

  getSizesList(): Array<string>;
  setSizesList(value: Array<string>): void;
  clearSizesList(): void;
  addSizes(value: string, index?: number): void;

  getCrossorigin(): string;
  setCrossorigin(value: string): void;

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
  setId(value: string): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): void;
  clearDatasetIdsList(): void;
  addDatasetIds(value: string, index?: number): void;

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

export class InputCount extends jspb.Message {
  getProcessed(): number;
  setProcessed(value: number): void;

  getToProcess(): number;
  setToProcess(value: number): void;

  getErrors(): number;
  setErrors(value: number): void;

  getProcessing(): number;
  setProcessing(value: number): void;

  getReindexed(): number;
  setReindexed(value: number): void;

  getToReindex(): number;
  setToReindex(value: number): void;

  getReindexErrors(): number;
  setReindexErrors(value: number): void;

  getReindexing(): number;
  setReindexing(value: number): void;

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

export class AnnotationFilter extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAppId(): string;
  setAppId(value: string): void;

  getSavedSearch(): Search | undefined;
  setSavedSearch(value?: Search): void;
  hasSavedSearch(): boolean;
  clearSavedSearch(): void;

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
    savedSearch?: Search.AsObject,
  }
}

export class DatasetVersion extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getAppId(): string;
  setAppId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getAnnotationFilterConfig(): AnnotationFilterConfig | undefined;
  setAnnotationFilterConfig(value?: AnnotationFilterConfig): void;
  hasAnnotationFilterConfig(): boolean;
  clearAnnotationFilterConfig(): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMetrics(): DatasetVersionMetrics | undefined;
  setMetrics(value?: DatasetVersionMetrics): void;
  hasMetrics(): boolean;
  clearMetrics(): void;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getEmbedModelVersionIdsList(): Array<string>;
  setEmbedModelVersionIdsList(value: Array<string>): void;
  clearEmbedModelVersionIdsList(): void;
  addEmbedModelVersionIds(value: string, index?: number): void;

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
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    description: string,
    metrics?: DatasetVersionMetrics.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    visibility?: Visibility.AsObject,
    embedModelVersionIdsList: Array<string>,
  }

  export enum DataConfigCase { 
    DATA_CONFIG_NOT_SET = 0,
    ANNOTATION_FILTER_CONFIG = 15,
  }
}

export class AnnotationFilterConfig extends jspb.Message {
  getAnnotationFilter(): AnnotationFilter | undefined;
  setAnnotationFilter(value?: AnnotationFilter): void;
  hasAnnotationFilter(): boolean;
  clearAnnotationFilter(): void;

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
  }
}

export class DatasetVersionMetrics extends jspb.Message {
  getInputsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setInputsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasInputsCount(): boolean;
  clearInputsCount(): void;

  getUnlabeledInputsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setUnlabeledInputsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasUnlabeledInputsCount(): boolean;
  clearUnlabeledInputsCount(): void;

  getInputsWithMetadataCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setInputsWithMetadataCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasInputsWithMetadataCount(): boolean;
  clearInputsWithMetadataCount(): void;

  getInputsWithGeoCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setInputsWithGeoCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasInputsWithGeoCount(): boolean;
  clearInputsWithGeoCount(): void;

  getRegionsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setRegionsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasRegionsCount(): boolean;
  clearRegionsCount(): void;

  getRegionLocationMatrix(): proto_utils_matrix_pbMatrixUint64 | undefined;
  setRegionLocationMatrix(value?: proto_utils_matrix_pbMatrixUint64): void;
  hasRegionLocationMatrix(): boolean;
  clearRegionLocationMatrix(): void;

  getBoundingBoxesCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setBoundingBoxesCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasBoundingBoxesCount(): boolean;
  clearBoundingBoxesCount(): void;

  getPolygonsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPolygonsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasPolygonsCount(): boolean;
  clearPolygonsCount(): void;

  getPointsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPointsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasPointsCount(): boolean;
  clearPointsCount(): void;

  getMasksCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setMasksCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasMasksCount(): boolean;
  clearMasksCount(): void;

  getRegionInputsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setRegionInputsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasRegionInputsCount(): boolean;
  clearRegionInputsCount(): void;

  getRegionFramesCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setRegionFramesCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasRegionFramesCount(): boolean;
  clearRegionFramesCount(): void;

  getFramesCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFramesCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasFramesCount(): boolean;
  clearFramesCount(): void;

  getFrameInputsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setFrameInputsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasFrameInputsCount(): boolean;
  clearFrameInputsCount(): void;

  getEmbeddingsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setEmbeddingsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasEmbeddingsCount(): boolean;
  clearEmbeddingsCount(): void;

  getPositiveInputTagsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPositiveInputTagsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasPositiveInputTagsCount(): boolean;
  clearPositiveInputTagsCount(): void;

  getPositiveRegionTagsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPositiveRegionTagsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasPositiveRegionTagsCount(): boolean;
  clearPositiveRegionTagsCount(): void;

  getPositiveFrameTagsCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPositiveFrameTagsCount(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasPositiveFrameTagsCount(): boolean;
  clearPositiveFrameTagsCount(): void;

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
    regionLocationMatrix?: proto_utils_matrix_pbMatrixUint64.AsObject,
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

export class WorkflowResultsSimilarity extends jspb.Message {
  getProbeInput(): Input | undefined;
  setProbeInput(value?: Input): void;
  hasProbeInput(): boolean;
  clearProbeInput(): void;

  getPoolResultsList(): Array<Hit>;
  setPoolResultsList(value: Array<Hit>): void;
  clearPoolResultsList(): void;
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
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  clearScopesList(): void;
  addScopes(value: string, index?: number): void;

  getEndpointsList(): Array<string>;
  setEndpointsList(value: Array<string>): void;
  clearEndpointsList(): void;
  addEndpoints(value: string, index?: number): void;

  getAppsList(): Array<App>;
  setAppsList(value: Array<App>): void;
  clearAppsList(): void;
  addApps(value?: App, index?: number): App;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpiresAt(): boolean;
  clearExpiresAt(): void;

  getAuthorizedIdpIdsList(): Array<string>;
  setAuthorizedIdpIdsList(value: Array<string>): void;
  clearAuthorizedIdpIdsList(): void;
  addAuthorizedIdpIds(value: string, index?: number): void;

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
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getAppId(): string;
  setAppId(value: string): void;

  getOutputInfo(): OutputInfo | undefined;
  setOutputInfo(value?: OutputInfo): void;
  hasOutputInfo(): boolean;
  clearOutputInfo(): void;

  getModelVersion(): ModelVersion | undefined;
  setModelVersion(value?: ModelVersion): void;
  hasModelVersion(): boolean;
  clearModelVersion(): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getInputInfo(): InputInfo | undefined;
  setInputInfo(value?: InputInfo): void;
  hasInputInfo(): boolean;
  clearInputInfo(): void;

  getTrainInfo(): TrainInfo | undefined;
  setTrainInfo(value?: TrainInfo): void;
  hasTrainInfo(): boolean;
  clearTrainInfo(): void;

  getModelTypeId(): string;
  setModelTypeId(value: string): void;

  getTask(): string;
  setTask(value: string): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getNotes(): string;
  setNotes(value: string): void;

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

  getIsStarred(): boolean;
  setIsStarred(value: boolean): void;

  getStarCount(): number;
  setStarCount(value: number): void;

  getImportInfo(): ImportInfo | undefined;
  setImportInfo(value?: ImportInfo): void;
  hasImportInfo(): boolean;
  clearImportInfo(): void;

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
    inputInfo?: InputInfo.AsObject,
    trainInfo?: TrainInfo.AsObject,
    modelTypeId: string,
    task: string,
    visibility?: Visibility.AsObject,
    description: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    notes: string,
    toolkitsList: Array<string>,
    useCasesList: Array<string>,
    languagesList: Array<string>,
    isStarred: boolean,
    starCount: number,
    importInfo?: ImportInfo.AsObject,
  }
}

export class ModelReference extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getModelId(): string;
  setModelId(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getName(): string;
  setName(value: string): void;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

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
  setId(value: string): void;

  getModelId(): string;
  setModelId(value: string): void;

  getModelVersionId(): string;
  setModelVersionId(value: string): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

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
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): void;
  hasOutputConfig(): boolean;
  clearOutputConfig(): void;

  getMessage(): string;
  setMessage(value: string): void;

  getFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setFieldsMap(value?: google_protobuf_struct_pb.Struct): void;
  hasFieldsMap(): boolean;
  clearFieldsMap(): void;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;
  hasParams(): boolean;
  clearParams(): void;

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
  }
}

export class InputInfo extends jspb.Message {
  getFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setFieldsMap(value?: google_protobuf_struct_pb.Struct): void;
  hasFieldsMap(): boolean;
  clearFieldsMap(): void;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;
  hasParams(): boolean;
  clearParams(): void;

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
  }
}

export class TrainInfo extends jspb.Message {
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;
  hasParams(): boolean;
  clearParams(): void;

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
  }
}

export class ImportInfo extends jspb.Message {
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;
  hasParams(): boolean;
  clearParams(): void;

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
  setConceptsMutuallyExclusive(value: boolean): void;

  getClosedEnvironment(): boolean;
  setClosedEnvironment(value: boolean): void;

  getExistingModelId(): string;
  setExistingModelId(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getHyperParameters(): string;
  setHyperParameters(value: string): void;

  getMaxConcepts(): number;
  setMaxConcepts(value: number): void;

  getMinValue(): number;
  setMinValue(value: number): void;

  getSelectConceptsList(): Array<Concept>;
  setSelectConceptsList(value: Array<Concept>): void;
  clearSelectConceptsList(): void;
  addSelectConcepts(value?: Concept, index?: number): Concept;

  getTrainingTimeout(): number;
  setTrainingTimeout(value: number): void;

  getSampleMs(): number;
  setSampleMs(value: number): void;

  getHyperParams(): google_protobuf_struct_pb.Struct | undefined;
  setHyperParams(value?: google_protobuf_struct_pb.Struct): void;
  hasHyperParams(): boolean;
  clearHyperParams(): void;

  getEmbedModelVersionId(): string;
  setEmbedModelVersionId(value: string): void;

  getFailOnMissingPositiveExamples(): boolean;
  setFailOnMissingPositiveExamples(value: boolean): void;

  getModelMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setModelMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasModelMetadata(): boolean;
  clearModelMetadata(): void;

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
    closedEnvironment: boolean,
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
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInputFieldsList(): Array<string>;
  setInputFieldsList(value: Array<string>): void;
  clearInputFieldsList(): void;
  addInputFields(value: string, index?: number): void;

  getOutputFieldsList(): Array<string>;
  setOutputFieldsList(value: Array<string>): void;
  clearOutputFieldsList(): void;
  addOutputFields(value: string, index?: number): void;

  getTrainable(): boolean;
  setTrainable(value: boolean): void;

  getCreatable(): boolean;
  setCreatable(value: boolean): void;

  getInternalOnly(): boolean;
  setInternalOnly(value: boolean): void;

  getModelTypeFieldsList(): Array<ModelTypeField>;
  setModelTypeFieldsList(value: Array<ModelTypeField>): void;
  clearModelTypeFieldsList(): void;
  addModelTypeFields(value?: ModelTypeField, index?: number): ModelTypeField;

  getRequiresSequentialFrames(): boolean;
  setRequiresSequentialFrames(value: boolean): void;

  getEvaluable(): boolean;
  setEvaluable(value: boolean): void;

  getExpectedPretrainedInputFields(): google_protobuf_struct_pb.Struct | undefined;
  setExpectedPretrainedInputFields(value?: google_protobuf_struct_pb.Struct): void;
  hasExpectedPretrainedInputFields(): boolean;
  clearExpectedPretrainedInputFields(): void;

  getExpectedPretrainedOutputFields(): google_protobuf_struct_pb.Struct | undefined;
  setExpectedPretrainedOutputFields(value?: google_protobuf_struct_pb.Struct): void;
  hasExpectedPretrainedOutputFields(): boolean;
  clearExpectedPretrainedOutputFields(): void;

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
    evaluable: boolean,
    expectedPretrainedInputFields?: google_protobuf_struct_pb.Struct.AsObject,
    expectedPretrainedOutputFields?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ModelTypeField extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getFieldType(): ModelTypeField.ModelTypeFieldType;
  setFieldType(value: ModelTypeField.ModelTypeFieldType): void;

  getDefaultValue(): google_protobuf_struct_pb.Value | undefined;
  setDefaultValue(value?: google_protobuf_struct_pb.Value): void;
  hasDefaultValue(): boolean;
  clearDefaultValue(): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPlaceholder(): string;
  setPlaceholder(value: string): void;

  getModelTypeEnumOptionsList(): Array<ModelTypeEnumOption>;
  setModelTypeEnumOptionsList(value: Array<ModelTypeEnumOption>): void;
  clearModelTypeEnumOptionsList(): void;
  addModelTypeEnumOptions(value?: ModelTypeEnumOption, index?: number): ModelTypeEnumOption;

  getInternalOnly(): boolean;
  setInternalOnly(value: boolean): void;

  getRequired(): boolean;
  setRequired(value: boolean): void;

  getModelTypeRangeInfo(): ModelTypeRangeInfo | undefined;
  setModelTypeRangeInfo(value?: ModelTypeRangeInfo): void;
  hasModelTypeRangeInfo(): boolean;
  clearModelTypeRangeInfo(): void;

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
  }
}

export class ModelTypeRangeInfo extends jspb.Message {
  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getStep(): number;
  setStep(value: number): void;

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
  setId(value: string): void;

  getAliasesList(): Array<ModelTypeEnumOptionAlias>;
  setAliasesList(value: Array<ModelTypeEnumOptionAlias>): void;
  clearAliasesList(): void;
  addAliases(value?: ModelTypeEnumOptionAlias, index?: number): ModelTypeEnumOptionAlias;

  getDescription(): string;
  setDescription(value: string): void;

  getModelTypeFieldsList(): Array<ModelTypeField>;
  setModelTypeFieldsList(value: Array<ModelTypeField>): void;
  clearModelTypeFieldsList(): void;
  addModelTypeFields(value?: ModelTypeField, index?: number): ModelTypeField;

  getInternalOnly(): boolean;
  setInternalOnly(value: boolean): void;

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
  }
}

export class ModelTypeEnumOptionAlias extends jspb.Message {
  getIdInt(): number;
  setIdInt(value: number): void;

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
  }
}

export class ModelQuery extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getModelTypeId(): string;
  setModelTypeId(value: string): void;

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
  setId(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getActiveConceptCount(): number;
  setActiveConceptCount(value: number): void;

  getMetrics(): EvalMetrics | undefined;
  setMetrics(value?: EvalMetrics): void;
  hasMetrics(): boolean;
  clearMetrics(): void;

  getTotalInputCount(): number;
  setTotalInputCount(value: number): void;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCompletedAt(): boolean;
  clearCompletedAt(): void;

  getDescription(): string;
  setDescription(value: string): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getAppId(): string;
  setAppId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getLicense(): string;
  setLicense(value: string): void;

  getDatasetVersion(): DatasetVersion | undefined;
  setDatasetVersion(value?: DatasetVersion): void;
  hasDatasetVersion(): boolean;
  clearDatasetVersion(): void;

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
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    visibility?: Visibility.AsObject,
    appId: string,
    userId: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    license: string,
    datasetVersion?: DatasetVersion.AsObject,
  }
}

export class PretrainedModelConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getInputFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setInputFieldsMap(value?: google_protobuf_struct_pb.Struct): void;
  hasInputFieldsMap(): boolean;
  clearInputFieldsMap(): void;

  getOutputFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setOutputFieldsMap(value?: google_protobuf_struct_pb.Struct): void;
  hasOutputFieldsMap(): boolean;
  clearOutputFieldsMap(): void;

  getDataProviderParams(): string;
  setDataProviderParams(value: string): void;

  getModelZipUrl(): string;
  setModelZipUrl(value: string): void;

  getOverwrite(): boolean;
  setOverwrite(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModelConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModelConfig): PretrainedModelConfig.AsObject;
  static serializeBinaryToWriter(message: PretrainedModelConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModelConfig;
  static deserializeBinaryFromReader(message: PretrainedModelConfig, reader: jspb.BinaryReader): PretrainedModelConfig;
}

export namespace PretrainedModelConfig {
  export type AsObject = {
    id: string,
    type: string,
    inputFieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
    outputFieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
    dataProviderParams: string,
    modelZipUrl: string,
    overwrite: boolean,
  }
}

export class TrainStats extends jspb.Message {
  getLossCurveList(): Array<LossCurveEntry>;
  setLossCurveList(value: Array<LossCurveEntry>): void;
  clearLossCurveList(): void;
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
  setEpoch(value: number): void;

  getGlobalStep(): number;
  setGlobalStep(value: number): void;

  getCost(): number;
  setCost(value: number): void;

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
  setConceptName(value: string): void;

  getCount(): number;
  setCount(value: number): void;

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
  }
}

export class LabelDistribution extends jspb.Message {
  getPositiveLabelCountsList(): Array<LabelCount>;
  setPositiveLabelCountsList(value: Array<LabelCount>): void;
  clearPositiveLabelCountsList(): void;
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
  setRow(value: string): void;

  getCol(): string;
  setCol(value: string): void;

  getCount(): number;
  setCount(value: number): void;

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
  setMatrixList(value: Array<CooccurrenceMatrixEntry>): void;
  clearMatrixList(): void;
  addMatrix(value?: CooccurrenceMatrixEntry, index?: number): CooccurrenceMatrixEntry;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): void;
  clearConceptIdsList(): void;
  addConceptIds(value: string, index?: number): void;

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
  setPredicted(value: string): void;

  getActual(): string;
  setActual(value: string): void;

  getValue(): number;
  setValue(value: number): void;

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
  }
}

export class ConfusionMatrix extends jspb.Message {
  getMatrixList(): Array<ConfusionMatrixEntry>;
  setMatrixList(value: Array<ConfusionMatrixEntry>): void;
  clearMatrixList(): void;
  addMatrix(value?: ConfusionMatrixEntry, index?: number): ConfusionMatrixEntry;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): void;
  clearConceptIdsList(): void;
  addConceptIds(value: string, index?: number): void;

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
  setFprList(value: Array<number>): void;
  clearFprList(): void;
  addFpr(value: number, index?: number): void;

  getTprList(): Array<number>;
  setTprList(value: Array<number>): void;
  clearTprList(): void;
  addTpr(value: number, index?: number): void;

  getThresholdsList(): Array<number>;
  setThresholdsList(value: Array<number>): void;
  clearThresholdsList(): void;
  addThresholds(value: number, index?: number): void;

  getFprPerImageList(): Array<number>;
  setFprPerImageList(value: Array<number>): void;
  clearFprPerImageList(): void;
  addFprPerImage(value: number, index?: number): void;

  getFprPerObjectList(): Array<number>;
  setFprPerObjectList(value: Array<number>): void;
  clearFprPerObjectList(): void;
  addFprPerObject(value: number, index?: number): void;

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
  setRecallList(value: Array<number>): void;
  clearRecallList(): void;
  addRecall(value: number, index?: number): void;

  getPrecisionList(): Array<number>;
  setPrecisionList(value: Array<number>): void;
  clearPrecisionList(): void;
  addPrecision(value: number, index?: number): void;

  getThresholdsList(): Array<number>;
  setThresholdsList(value: Array<number>): void;
  clearThresholdsList(): void;
  addThresholds(value: number, index?: number): void;

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
  setNumPos(value: number): void;

  getNumNeg(): number;
  setNumNeg(value: number): void;

  getNumTot(): number;
  setNumTot(value: number): void;

  getRocAuc(): number;
  setRocAuc(value: number): void;

  getF1(): number;
  setF1(value: number): void;

  getConcept(): Concept | undefined;
  setConcept(value?: Concept): void;
  hasConcept(): boolean;
  clearConcept(): void;

  getRocCurve(): ROC | undefined;
  setRocCurve(value?: ROC): void;
  hasRocCurve(): boolean;
  clearRocCurve(): void;

  getPrecisionRecallCurve(): PrecisionRecallCurve | undefined;
  setPrecisionRecallCurve(value?: PrecisionRecallCurve): void;
  hasPrecisionRecallCurve(): boolean;
  clearPrecisionRecallCurve(): void;

  getAvgPrecision(): number;
  setAvgPrecision(value: number): void;

  getAreaName(): string;
  setAreaName(value: string): void;

  getAreaMin(): number;
  setAreaMin(value: number): void;

  getAreaMax(): number;
  setAreaMax(value: number): void;

  getIou(): number;
  setIou(value: number): void;

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
  setMotMota(value: number): void;

  getMotNumSwitches(): number;
  setMotNumSwitches(value: number): void;

  getMorseFrag(): number;
  setMorseFrag(value: number): void;

  getAvgPrecision(): number;
  setAvgPrecision(value: number): void;

  getAiid(): string;
  setAiid(value: string): void;

  getUniqueSwitchRate(): number;
  setUniqueSwitchRate(value: number): void;

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
  getId(): string;
  setId(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getInput(): Input | undefined;
  setInput(value?: Input): void;
  hasInput(): boolean;
  clearInput(): void;

  getPredictedConceptsList(): Array<Concept>;
  setPredictedConceptsList(value: Array<Concept>): void;
  clearPredictedConceptsList(): void;
  addPredictedConcepts(value?: Concept, index?: number): Concept;

  getGroundTruthConceptsList(): Array<Concept>;
  setGroundTruthConceptsList(value: Array<Concept>): void;
  clearGroundTruthConceptsList(): void;
  addGroundTruthConcepts(value?: Concept, index?: number): Concept;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): void;
  hasAnnotation(): boolean;
  clearAnnotation(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalTestSetEntry.AsObject;
  static toObject(includeInstance: boolean, msg: EvalTestSetEntry): EvalTestSetEntry.AsObject;
  static serializeBinaryToWriter(message: EvalTestSetEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalTestSetEntry;
  static deserializeBinaryFromReader(message: EvalTestSetEntry, reader: jspb.BinaryReader): EvalTestSetEntry;
}

export namespace EvalTestSetEntry {
  export type AsObject = {
    id: string,
    url: string,
    input?: Input.AsObject,
    predictedConceptsList: Array<Concept.AsObject>,
    groundTruthConceptsList: Array<Concept.AsObject>,
    annotation?: Annotation.AsObject,
  }
}

export class LOPQEvalResult extends jspb.Message {
  getK(): number;
  setK(value: number): void;

  getRecallVsBruteForce(): number;
  setRecallVsBruteForce(value: number): void;

  getKendallTauVsBruteForce(): number;
  setKendallTauVsBruteForce(value: number): void;

  getMostFrequentCodePercent(): number;
  setMostFrequentCodePercent(value: number): void;

  getLopqNdcg(): number;
  setLopqNdcg(value: number): void;

  getBruteForceNdcg(): number;
  setBruteForceNdcg(value: number): void;

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
  setTop1Accuracy(value: number): void;

  getTop5Accuracy(): number;
  setTop5Accuracy(value: number): void;

  getMacroAvgRocAuc(): number;
  setMacroAvgRocAuc(value: number): void;

  getMacroStdRocAuc(): number;
  setMacroStdRocAuc(value: number): void;

  getMacroAvgF1Score(): number;
  setMacroAvgF1Score(value: number): void;

  getMacroStdF1Score(): number;
  setMacroStdF1Score(value: number): void;

  getMacroAvgPrecision(): number;
  setMacroAvgPrecision(value: number): void;

  getMacroAvgRecall(): number;
  setMacroAvgRecall(value: number): void;

  getMeanAvgPrecisionIou50(): number;
  setMeanAvgPrecisionIou50(value: number): void;

  getMeanAvgPrecisionIouRange(): number;
  setMeanAvgPrecisionIouRange(value: number): void;

  getLopqMetricsList(): Array<LOPQEvalResult>;
  setLopqMetricsList(value: Array<LOPQEvalResult>): void;
  clearLopqMetricsList(): void;
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
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getId(): string;
  setId(value: string): void;

  getSummary(): MetricsSummary | undefined;
  setSummary(value?: MetricsSummary): void;
  hasSummary(): boolean;
  clearSummary(): void;

  getConfusionMatrix(): ConfusionMatrix | undefined;
  setConfusionMatrix(value?: ConfusionMatrix): void;
  hasConfusionMatrix(): boolean;
  clearConfusionMatrix(): void;

  getCooccurrenceMatrix(): CooccurrenceMatrix | undefined;
  setCooccurrenceMatrix(value?: CooccurrenceMatrix): void;
  hasCooccurrenceMatrix(): boolean;
  clearCooccurrenceMatrix(): void;

  getLabelCounts(): LabelDistribution | undefined;
  setLabelCounts(value?: LabelDistribution): void;
  hasLabelCounts(): boolean;
  clearLabelCounts(): void;

  getBinaryMetricsList(): Array<BinaryMetrics>;
  setBinaryMetricsList(value: Array<BinaryMetrics>): void;
  clearBinaryMetricsList(): void;
  addBinaryMetrics(value?: BinaryMetrics, index?: number): BinaryMetrics;

  getTestSetList(): Array<EvalTestSetEntry>;
  setTestSetList(value: Array<EvalTestSetEntry>): void;
  clearTestSetList(): void;
  addTestSet(value?: EvalTestSetEntry, index?: number): EvalTestSetEntry;

  getMetricsByAreaList(): Array<BinaryMetrics>;
  setMetricsByAreaList(value: Array<BinaryMetrics>): void;
  clearMetricsByAreaList(): void;
  addMetricsByArea(value?: BinaryMetrics, index?: number): BinaryMetrics;

  getMetricsByClassList(): Array<BinaryMetrics>;
  setMetricsByClassList(value: Array<BinaryMetrics>): void;
  clearMetricsByClassList(): void;
  addMetricsByClass(value?: BinaryMetrics, index?: number): BinaryMetrics;

  getTrackerMetricsList(): Array<TrackerMetrics>;
  setTrackerMetricsList(value: Array<TrackerMetrics>): void;
  clearTrackerMetricsList(): void;
  addTrackerMetrics(value?: TrackerMetrics, index?: number): TrackerMetrics;

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
    id: string,
    summary?: MetricsSummary.AsObject,
    confusionMatrix?: ConfusionMatrix.AsObject,
    cooccurrenceMatrix?: CooccurrenceMatrix.AsObject,
    labelCounts?: LabelDistribution.AsObject,
    binaryMetricsList: Array<BinaryMetrics.AsObject>,
    testSetList: Array<EvalTestSetEntry.AsObject>,
    metricsByAreaList: Array<BinaryMetrics.AsObject>,
    metricsByClassList: Array<BinaryMetrics.AsObject>,
    trackerMetricsList: Array<TrackerMetrics.AsObject>,
  }
}

export class FieldsValue extends jspb.Message {
  getConfusionMatrix(): boolean;
  setConfusionMatrix(value: boolean): void;

  getCooccurrenceMatrix(): boolean;
  setCooccurrenceMatrix(value: boolean): void;

  getLabelCounts(): boolean;
  setLabelCounts(value: boolean): void;

  getBinaryMetrics(): boolean;
  setBinaryMetrics(value: boolean): void;

  getTestSet(): boolean;
  setTestSet(value: boolean): void;

  getMetricsByArea(): boolean;
  setMetricsByArea(value: boolean): void;

  getMetricsByClass(): boolean;
  setMetricsByClass(value: boolean): void;

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
  setId(value: string): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModel(): Model | undefined;
  setModel(value?: Model): void;
  hasModel(): boolean;
  clearModel(): void;

  getInput(): Input | undefined;
  setInput(value?: Input): void;
  hasInput(): boolean;
  clearInput(): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

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
  setScope(value: string): void;

  getDependingScopesList(): Array<string>;
  setDependingScopesList(value: Array<string>): void;
  clearDependingScopesList(): void;
  addDependingScopes(value: string, index?: number): void;

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
  setEndpoint(value: string): void;

  getDependingScopesList(): Array<string>;
  setDependingScopesList(value: Array<string>): void;
  clearDependingScopesList(): void;
  addDependingScopes(value: string, index?: number): void;

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
  setScore(value: number): void;

  getInput(): Input | undefined;
  setInput(value?: Input): void;
  hasInput(): boolean;
  clearInput(): void;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): void;
  hasAnnotation(): boolean;
  clearAnnotation(): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAppId(): string;
  setAppId(value: string): void;

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

export class And extends jspb.Message {
  getInput(): Input | undefined;
  setInput(value?: Input): void;
  hasInput(): boolean;
  clearInput(): void;

  getOutput(): Output | undefined;
  setOutput(value?: Output): void;
  hasOutput(): boolean;
  clearOutput(): void;

  getNegate(): boolean;
  setNegate(value: boolean): void;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): void;
  hasAnnotation(): boolean;
  clearAnnotation(): void;

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
  setAndsList(value: Array<And>): void;
  clearAndsList(): void;
  addAnds(value?: And, index?: number): And;

  getLanguage(): string;
  setLanguage(value: string): void;

  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): void;
  clearFiltersList(): void;
  addFilters(value?: Filter, index?: number): Filter;

  getRanksList(): Array<Rank>;
  setRanksList(value: Array<Rank>): void;
  clearRanksList(): void;
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
  setQuery(value?: Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getId(): string;
  setId(value: string): void;

  getApplicationId(): string;
  setApplicationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAsOf(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAsOf(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasAsOf(): boolean;
  clearAsOf(): void;

  getGitHash(): string;
  setGitHash(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getAlgorithm(): string;
  setAlgorithm(value: string): void;

  getSave(): boolean;
  setSave(value: boolean): void;

  getMinValue(): number;
  setMinValue(value: number): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

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
  }
}

export class Filter extends jspb.Message {
  getNegate(): boolean;
  setNegate(value: boolean): void;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): void;
  hasAnnotation(): boolean;
  clearAnnotation(): void;

  getInput(): Input | undefined;
  setInput(value?: Input): void;
  hasInput(): boolean;
  clearInput(): void;

  getLastUpdatedTimeRange(): TimeRange | undefined;
  setLastUpdatedTimeRange(value?: TimeRange): void;
  hasLastUpdatedTimeRange(): boolean;
  clearLastUpdatedTimeRange(): void;

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
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

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
  setNegate(value: boolean): void;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): void;
  hasAnnotation(): boolean;
  clearAnnotation(): void;

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
  setGroundTruth(value?: Search): void;
  hasGroundTruth(): boolean;
  clearGroundTruth(): void;

  getSearchToEval(): Search | undefined;
  setSearchToEval(value?: Search): void;
  hasSearchToEval(): boolean;
  clearSearchToEval(): void;

  getMetrics(): EvalMetrics | undefined;
  setMetrics(value?: EvalMetrics): void;
  hasMetrics(): boolean;
  clearMetrics(): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getActiveConceptCount(): number;
  setActiveConceptCount(value: number): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

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
  setRaw(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getAllowDuplicateUrl(): boolean;
  setAllowDuplicateUrl(value: boolean): void;

  getHosted(): HostedURL | undefined;
  setHosted(value?: HostedURL): void;
  hasHosted(): boolean;
  clearHosted(): void;

  getTextInfo(): TextInfo | undefined;
  setTextInfo(value?: TextInfo): void;
  hasTextInfo(): boolean;
  clearTextInfo(): void;

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
  setCharCount(value: number): void;

  getEncoding(): string;
  setEncoding(value: string): void;

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
  setId(value: string): void;

  getPrimaryEmail(): string;
  setPrimaryEmail(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getCompanyName(): string;
  setCompanyName(value: string): void;

  getJobTitle(): string;
  setJobTitle(value: string): void;

  getJobRole(): string;
  setJobRole(value: string): void;

  getBillType(): string;
  setBillType(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getDateGdprConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateGdprConsent(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDateGdprConsent(): boolean;
  clearDateGdprConsent(): void;

  getDateTosConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTosConsent(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDateTosConsent(): boolean;
  clearDateTosConsent(): void;

  getDateMarketingConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateMarketingConsent(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDateMarketingConsent(): boolean;
  clearDateMarketingConsent(): void;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getEmailAddressesList(): Array<EmailAddress>;
  setEmailAddressesList(value: Array<EmailAddress>): void;
  clearEmailAddressesList(): void;
  addEmailAddresses(value?: EmailAddress, index?: number): EmailAddress;

  getIsOrgAdmin(): boolean;
  setIsOrgAdmin(value: boolean): void;

  getTwoFactorAuthEnabled(): boolean;
  setTwoFactorAuthEnabled(value: boolean): void;

  getTeamsCount(): number;
  setTeamsCount(value: number): void;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): void;

  getStarCount(): number;
  setStarCount(value: number): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getUserDetail(): UserDetail | undefined;
  setUserDetail(value?: UserDetail): void;
  hasUserDetail(): boolean;
  clearUserDetail(): void;

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
    billType: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateGdprConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateTosConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateMarketingConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    emailAddressesList: Array<EmailAddress.AsObject>,
    isOrgAdmin: boolean,
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
  setPrimaryEmail(value: string): void;

  getBillType(): string;
  setBillType(value: string): void;

  getDateGdprConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateGdprConsent(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDateGdprConsent(): boolean;
  clearDateGdprConsent(): void;

  getDateTosConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTosConsent(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDateTosConsent(): boolean;
  clearDateTosConsent(): void;

  getDateMarketingConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateMarketingConsent(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDateMarketingConsent(): boolean;
  clearDateMarketingConsent(): void;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getEmailAddressesList(): Array<EmailAddress>;
  setEmailAddressesList(value: Array<EmailAddress>): void;
  clearEmailAddressesList(): void;
  addEmailAddresses(value?: EmailAddress, index?: number): EmailAddress;

  getIsOrgAdmin(): boolean;
  setIsOrgAdmin(value: boolean): void;

  getTwoFactorAuthEnabled(): boolean;
  setTwoFactorAuthEnabled(value: boolean): void;

  getTeamsCount(): number;
  setTeamsCount(value: number): void;

  getCountry(): string;
  setCountry(value: string): void;

  getState(): string;
  setState(value: string): void;

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
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    emailAddressesList: Array<EmailAddress.AsObject>,
    isOrgAdmin: boolean,
    twoFactorAuthEnabled: boolean,
    teamsCount: number,
    country: string,
    state: string,
  }
}

export class EmailAddress extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPrimary(): boolean;
  setPrimary(value: boolean): void;

  getVerified(): boolean;
  setVerified(value: boolean): void;

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
  setPlaintext(value: string): void;

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
  setMinimumLength(value: boolean): void;

  getMaximumLength(): boolean;
  setMaximumLength(value: boolean): void;

  getUpperCaseNeeded(): boolean;
  setUpperCaseNeeded(value: boolean): void;

  getLowerCaseNeeded(): boolean;
  setLowerCaseNeeded(value: boolean): void;

  getNumericNeeded(): boolean;
  setNumericNeeded(value: boolean): void;

  getNonAlphanumericNeeded(): boolean;
  setNonAlphanumericNeeded(value: boolean): void;

  getPasswordReuse(): boolean;
  setPasswordReuse(value: boolean): void;

  getExcludeNames(): boolean;
  setExcludeNames(value: boolean): void;

  getExcludeEmail(): boolean;
  setExcludeEmail(value: boolean): void;

  getNoConfusingLetters(): boolean;
  setNoConfusingLetters(value: boolean): void;

  getNoSimplePasswords(): boolean;
  setNoSimplePasswords(value: boolean): void;

  getNoCommonVocabs(): boolean;
  setNoCommonVocabs(value: boolean): void;

  getNoOverlapWithOld(): boolean;
  setNoOverlapWithOld(value: boolean): void;

  getPasswordLifespan(): boolean;
  setPasswordLifespan(value: boolean): void;

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
  setUrl(value: string): void;

  getBase64(): Uint8Array | string;
  getBase64_asU8(): Uint8Array;
  getBase64_asB64(): string;
  setBase64(value: Uint8Array | string): void;

  getAllowDuplicateUrl(): boolean;
  setAllowDuplicateUrl(value: boolean): void;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): void;

  getHosted(): HostedURL | undefined;
  setHosted(value?: HostedURL): void;
  hasHosted(): boolean;
  clearHosted(): void;

  getVideoInfo(): VideoInfo | undefined;
  setVideoInfo(value?: VideoInfo): void;
  hasVideoInfo(): boolean;
  clearVideoInfo(): void;

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
    videoInfo?: VideoInfo.AsObject,
  }
}

export class VideoInfo extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getFps(): number;
  setFps(value: number): void;

  getVideoFormat(): string;
  setVideoFormat(value: string): void;

  getBitRate(): number;
  setBitRate(value: number): void;

  getFrameCount(): number;
  setFrameCount(value: number): void;

  getDurationSeconds(): number;
  setDurationSeconds(value: number): void;

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
  setId(value: string): void;

  getAppId(): string;
  setAppId(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getNodesList(): Array<WorkflowNode>;
  setNodesList(value: Array<WorkflowNode>): void;
  clearNodesList(): void;
  addNodes(value?: WorkflowNode, index?: number): WorkflowNode;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getUserId(): string;
  setUserId(value: string): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getVersion(): WorkflowVersion | undefined;
  setVersion(value?: WorkflowVersion): void;
  hasVersion(): boolean;
  clearVersion(): void;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): void;

  getStarCount(): number;
  setStarCount(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getNotes(): string;
  setNotes(value: string): void;

  getUseCasesList(): Array<string>;
  setUseCasesList(value: Array<string>): void;
  clearUseCasesList(): void;
  addUseCases(value: string, index?: number): void;

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
  }
}

export class WorkflowVersion extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getNodesList(): Array<WorkflowNode>;
  setNodesList(value: Array<WorkflowNode>): void;
  clearNodesList(): void;
  addNodes(value?: WorkflowNode, index?: number): WorkflowNode;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getAppId(): string;
  setAppId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLicense(): string;
  setLicense(value: string): void;

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
  setId(value: string): void;

  getModel(): Model | undefined;
  setModel(value?: Model): void;
  hasModel(): boolean;
  clearModel(): void;

  getNodeInputsList(): Array<NodeInput>;
  setNodeInputsList(value: Array<NodeInput>): void;
  clearNodeInputsList(): void;
  addNodeInputs(value?: NodeInput, index?: number): NodeInput;

  getSuppressOutput(): boolean;
  setSuppressOutput(value: boolean): void;

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
  }
}

export class NodeInput extends jspb.Message {
  getNodeId(): string;
  setNodeId(value: string): void;

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
  setId(value: string): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModel(): Model | undefined;
  setModel(value?: Model): void;
  hasModel(): boolean;
  clearModel(): void;

  getInput(): Input | undefined;
  setInput(value?: Input): void;
  hasInput(): boolean;
  clearInput(): void;

  getOutputsList(): Array<Output>;
  setOutputsList(value: Array<Output>): void;
  clearOutputsList(): void;
  addOutputs(value?: Output, index?: number): Output;

  getSuppressOutput(): boolean;
  setSuppressOutput(value: boolean): void;

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
  setId(value: string): void;

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
  setId(value: string): void;

  getNewAppId(): string;
  setNewAppId(value: string): void;

  getNewAppName(): string;
  setNewAppName(value: string): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getLastModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastModifiedAt(): boolean;
  clearLastModifiedAt(): void;

  getFilter(): AppDuplicationFilters | undefined;
  setFilter(value?: AppDuplicationFilters): void;
  hasFilter(): boolean;
  clearFilter(): void;

  getExistingAppId(): string;
  setExistingAppId(value: string): void;

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
    newAppId: string,
    newAppName: string,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    filter?: AppDuplicationFilters.AsObject,
    existingAppId: string,
  }
}

export class AppDuplicationFilters extends jspb.Message {
  getCopyInputs(): boolean;
  setCopyInputs(value: boolean): void;

  getCopyConcepts(): boolean;
  setCopyConcepts(value: boolean): void;

  getCopyAnnotations(): boolean;
  setCopyAnnotations(value: boolean): void;

  getCopyModels(): boolean;
  setCopyModels(value: boolean): void;

  getCopyWorkflows(): boolean;
  setCopyWorkflows(value: boolean): void;

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
  }
}

export class LabelOrder extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getAutoRelease(): boolean;
  setAutoRelease(value: boolean): void;

  getAllowEmptyTag(): boolean;
  setAllowEmptyTag(value: boolean): void;

  getDesiredFulfillTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDesiredFulfillTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDesiredFulfillTime(): boolean;
  clearDesiredFulfillTime(): void;

  getEstimateFulfillTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEstimateFulfillTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEstimateFulfillTime(): boolean;
  clearEstimateFulfillTime(): void;

  getTask(): Task | undefined;
  setTask(value?: Task): void;
  hasTask(): boolean;
  clearTask(): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

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
  setId(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasModifiedAt(): boolean;
  clearModifiedAt(): void;

  getType(): Task.TaskType;
  setType(value: Task.TaskType): void;

  getDescription(): string;
  setDescription(value: string): void;

  getWorker(): TaskWorker | undefined;
  setWorker(value?: TaskWorker): void;
  hasWorker(): boolean;
  clearWorker(): void;

  getConceptIdsList(): Array<string>;
  setConceptIdsList(value: Array<string>): void;
  clearConceptIdsList(): void;
  addConceptIds(value: string, index?: number): void;

  getInputSource(): TaskInputSource | undefined;
  setInputSource(value?: TaskInputSource): void;
  hasInputSource(): boolean;
  clearInputSource(): void;

  getSampleMs(): number;
  setSampleMs(value: number): void;

  getAiAssistant(): TaskAIAssistant | undefined;
  setAiAssistant(value?: TaskAIAssistant): void;
  hasAiAssistant(): boolean;
  clearAiAssistant(): void;

  getReview(): TaskReview | undefined;
  setReview(value?: TaskReview): void;
  hasReview(): boolean;
  clearReview(): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getName(): string;
  setName(value: string): void;

  getAiAssistParams(): AiAssistParameters | undefined;
  setAiAssistParams(value?: AiAssistParameters): void;
  hasAiAssistParams(): boolean;
  clearAiAssistParams(): void;

  getVisibility(): Visibility | undefined;
  setVisibility(value?: Visibility): void;
  hasVisibility(): boolean;
  clearVisibility(): void;

  getAppId(): string;
  setAppId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

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
  setMinThreshold(value: number): void;

  getMaxThreshold(): number;
  setMaxThreshold(value: number): void;

  getConceptRelationIdsList(): Array<string>;
  setConceptRelationIdsList(value: Array<string>): void;
  clearConceptRelationIdsList(): void;
  addConceptRelationIds(value: string, index?: number): void;

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
  setStrategy(value: TaskWorker.TaskWorkerStrategy): void;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  clearUserIdsList(): void;
  addUserIds(value: string, index?: number): void;

  getPartitionedStrategyInfo(): TaskWorkerPartitionedStrategyInfo | undefined;
  setPartitionedStrategyInfo(value?: TaskWorkerPartitionedStrategyInfo): void;
  hasPartitionedStrategyInfo(): boolean;
  clearPartitionedStrategyInfo(): void;

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
    partitionedStrategyInfo?: TaskWorkerPartitionedStrategyInfo.AsObject,
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
  setType(value: TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy): void;

  getWorkersPerInput(): number;
  setWorkersPerInput(value: number): void;

  getWeights(): google_protobuf_struct_pb.Struct | undefined;
  setWeights(value?: google_protobuf_struct_pb.Struct): void;
  hasWeights(): boolean;
  clearWeights(): void;

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
  setType(value: TaskInputSource.TaskInputSourceType): void;

  getId(): string;
  setId(value: string): void;

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
  setStrategy(value: TaskReview.TaskReviewStrategy): void;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  clearUserIdsList(): void;
  addUserIds(value: string, index?: number): void;

  getManualStrategyInfo(): TaskReviewManualStrategyInfo | undefined;
  setManualStrategyInfo(value?: TaskReviewManualStrategyInfo): void;
  hasManualStrategyInfo(): boolean;
  clearManualStrategyInfo(): void;

  getConsensusStrategyInfo(): TaskReviewConsensusStrategyInfo | undefined;
  setConsensusStrategyInfo(value?: TaskReviewConsensusStrategyInfo): void;
  hasConsensusStrategyInfo(): boolean;
  clearConsensusStrategyInfo(): void;

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
  setSamplePercentage(value: number): void;

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
  setApprovalThreshold(value: number): void;

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
  setWorkflowId(value: string): void;

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

export class TaskStatusCountPerUser extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getPending(): number;
  setPending(value: number): void;

  getAwaitingReview(): number;
  setAwaitingReview(value: number): void;

  getSuccess(): number;
  setSuccess(value: number): void;

  getReviewDenied(): number;
  setReviewDenied(value: number): void;

  getAwaitingConsensusReview(): number;
  setAwaitingConsensusReview(value: number): void;

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
  }
}

export class Collector extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;

  getPreQueueWorkflowId(): string;
  setPreQueueWorkflowId(value: string): void;

  getPostQueueWorkflowId(): string;
  setPostQueueWorkflowId(value: string): void;

  getCollectorSource(): CollectorSource | undefined;
  setCollectorSource(value?: CollectorSource): void;
  hasCollectorSource(): boolean;
  clearCollectorSource(): void;

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

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
    postQueueWorkflowId: string,
    collectorSource?: CollectorSource.AsObject,
    status?: proto_clarifai_api_status_status_pb.Status.AsObject,
  }
}

export class CollectorSource extends jspb.Message {
  getApiPostModelOutputsCollectorSource(): APIPostModelOutputsCollectorSource | undefined;
  setApiPostModelOutputsCollectorSource(value?: APIPostModelOutputsCollectorSource): void;
  hasApiPostModelOutputsCollectorSource(): boolean;
  clearApiPostModelOutputsCollectorSource(): void;

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
  setModelUserId(value: string): void;

  getModelAppId(): string;
  setModelAppId(value: string): void;

  getModelId(): string;
  setModelId(value: string): void;

  getModelVersionId(): string;
  setModelVersionId(value: string): void;

  getPostInputsKeyId(): string;
  setPostInputsKeyId(value: string): void;

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
  }
}

export class StatValue extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  getValue(): number;
  setValue(value: number): void;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

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
  setStatValueAggregatesList(value: Array<StatValueAggregate>): void;
  clearStatValueAggregatesList(): void;
  addStatValueAggregates(value?: StatValueAggregate, index?: number): StatValueAggregate;

  getStatValueAggregateQuery(): StatValueAggregateQuery | undefined;
  setStatValueAggregateQuery(value?: StatValueAggregateQuery): void;
  hasStatValueAggregateQuery(): boolean;
  clearStatValueAggregateQuery(): void;

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
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  getAggregateValue(): number;
  setAggregateValue(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

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
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

  getTagGroupsList(): Array<string>;
  setTagGroupsList(value: Array<string>): void;
  clearTagGroupsList(): void;
  addTagGroups(value: string, index?: number): void;

  getStatValueAggType(): StatValueAggType;
  setStatValueAggType(value: StatValueAggType): void;

  getStatTimeAggType(): StatTimeAggType;
  setStatTimeAggType(value: StatTimeAggType): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

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

export class Visibility extends jspb.Message {
  getGettable(): Visibility.Gettable;
  setGettable(value: Visibility.Gettable): void;

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
  setUserId(value: string): void;

  getAppId(): string;
  setAppId(value: string): void;

  getObjectId(): string;
  setObjectId(value: string): void;

  getViewCount(): number;
  setViewCount(value: number): void;

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

export class TimeSegment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getData(): Data | undefined;
  setData(value?: Data): void;
  hasData(): boolean;
  clearData(): void;

  getTimeInfo(): TimeInfo | undefined;
  setTimeInfo(value?: TimeInfo): void;
  hasTimeInfo(): boolean;
  clearTimeInfo(): void;

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
  setNumFrames(value: number): void;

  getBeginTime(): number;
  setBeginTime(value: number): void;

  getEndTime(): number;
  setEndTime(value: number): void;

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
export enum ValueComparator { 
  CONCEPT_THRESHOLD_NOT_SET = 0,
  GREATER_THAN = 1,
  GREATER_THAN_OR_EQUAL = 2,
  LESS_THAN = 3,
  LESS_THAN_OR_EQUAL = 4,
  EQUAL = 5,
}
export enum EvaluationType { 
  CLASSIFICATION = 0,
  DETECTION = 1,
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
