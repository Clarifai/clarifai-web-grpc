import * as jspb from 'google-protobuf'

import * as proto_clarifai_api_status_status_pb from '../../../proto/clarifai/api/status/status_pb';
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
  setId(value: string): App;

  getName(): string;
  setName(value: string): App;

  getDefaultLanguage(): string;
  setDefaultLanguage(value: string): App;

  getDefaultWorkflowId(): string;
  setDefaultWorkflowId(value: string): App;

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

  getNotes(): string;
  setNotes(value: string): Dataset;

  getVersion(): DatasetVersion | undefined;
  setVersion(value?: DatasetVersion): Dataset;
  hasVersion(): boolean;
  clearVersion(): Dataset;

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
    notes: string,
    version?: DatasetVersion.AsObject,
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

  getSavedSearch(): Search | undefined;
  setSavedSearch(value?: Search): AnnotationFilter;
  hasSavedSearch(): boolean;
  clearSavedSearch(): AnnotationFilter;

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

  getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
  setStatus(value?: proto_clarifai_api_status_status_pb.Status): DatasetVersion;
  hasStatus(): boolean;
  clearStatus(): DatasetVersion;

  getDescription(): string;
  setDescription(value: string): DatasetVersion;

  getMetrics(): DatasetVersionMetrics | undefined;
  setMetrics(value?: DatasetVersionMetrics): DatasetVersion;
  hasMetrics(): boolean;
  clearMetrics(): DatasetVersion;

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
  setAnnotationFilter(value?: AnnotationFilter): AnnotationFilterConfig;
  hasAnnotationFilter(): boolean;
  clearAnnotationFilter(): AnnotationFilterConfig;

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

  getInputInfo(): InputInfo | undefined;
  setInputInfo(value?: InputInfo): Model;
  hasInputInfo(): boolean;
  clearInputInfo(): Model;

  getTrainInfo(): TrainInfo | undefined;
  setTrainInfo(value?: TrainInfo): Model;
  hasTrainInfo(): boolean;
  clearTrainInfo(): Model;

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

  getIsStarred(): boolean;
  setIsStarred(value: boolean): Model;

  getStarCount(): number;
  setStarCount(value: number): Model;

  getImportInfo(): ImportInfo | undefined;
  setImportInfo(value?: ImportInfo): Model;
  hasImportInfo(): boolean;
  clearImportInfo(): Model;

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
  setFieldsMap(value?: google_protobuf_struct_pb.Struct): InputInfo;
  hasFieldsMap(): boolean;
  clearFieldsMap(): InputInfo;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): InputInfo;
  hasParams(): boolean;
  clearParams(): InputInfo;

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
  setParams(value?: google_protobuf_struct_pb.Struct): TrainInfo;
  hasParams(): boolean;
  clearParams(): TrainInfo;

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

  getClosedEnvironment(): boolean;
  setClosedEnvironment(value: boolean): OutputConfig;

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

  getEvaluable(): boolean;
  setEvaluable(value: boolean): ModelType;

  getExpectedPretrainedInputFields(): google_protobuf_struct_pb.Struct | undefined;
  setExpectedPretrainedInputFields(value?: google_protobuf_struct_pb.Struct): ModelType;
  hasExpectedPretrainedInputFields(): boolean;
  clearExpectedPretrainedInputFields(): ModelType;

  getExpectedPretrainedOutputFields(): google_protobuf_struct_pb.Struct | undefined;
  setExpectedPretrainedOutputFields(value?: google_protobuf_struct_pb.Struct): ModelType;
  hasExpectedPretrainedOutputFields(): boolean;
  clearExpectedPretrainedOutputFields(): ModelType;

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
  setIdInt(value: number): ModelTypeEnumOptionAlias;

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

  getDatasetVersion(): DatasetVersion | undefined;
  setDatasetVersion(value?: DatasetVersion): ModelVersion;
  hasDatasetVersion(): boolean;
  clearDatasetVersion(): ModelVersion;

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
  setId(value: string): PretrainedModelConfig;

  getType(): string;
  setType(value: string): PretrainedModelConfig;

  getInputFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setInputFieldsMap(value?: google_protobuf_struct_pb.Struct): PretrainedModelConfig;
  hasInputFieldsMap(): boolean;
  clearInputFieldsMap(): PretrainedModelConfig;

  getOutputFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
  setOutputFieldsMap(value?: google_protobuf_struct_pb.Struct): PretrainedModelConfig;
  hasOutputFieldsMap(): boolean;
  clearOutputFieldsMap(): PretrainedModelConfig;

  getDataProviderParams(): string;
  setDataProviderParams(value: string): PretrainedModelConfig;

  getModelZipUrl(): string;
  setModelZipUrl(value: string): PretrainedModelConfig;

  getOverwrite(): boolean;
  setOverwrite(value: boolean): PretrainedModelConfig;

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
  getId(): string;
  setId(value: string): EvalTestSetEntry;

  getUrl(): string;
  setUrl(value: string): EvalTestSetEntry;

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

  getId(): string;
  setId(value: string): EvalMetrics;

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

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): User;
  hasMetadata(): boolean;
  clearMetadata(): User;

  getEmailAddressesList(): Array<EmailAddress>;
  setEmailAddressesList(value: Array<EmailAddress>): User;
  clearEmailAddressesList(): User;
  addEmailAddresses(value?: EmailAddress, index?: number): EmailAddress;

  getIsOrgAdmin(): boolean;
  setIsOrgAdmin(value: boolean): User;

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

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): UserDetail;
  hasMetadata(): boolean;
  clearMetadata(): UserDetail;

  getEmailAddressesList(): Array<EmailAddress>;
  setEmailAddressesList(value: Array<EmailAddress>): UserDetail;
  clearEmailAddressesList(): UserDetail;
  addEmailAddresses(value?: EmailAddress, index?: number): EmailAddress;

  getIsOrgAdmin(): boolean;
  setIsOrgAdmin(value: boolean): UserDetail;

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

  getExistingAppId(): string;
  setExistingAppId(value: string): AppDuplication;

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
  setCopyInputs(value: boolean): AppDuplicationFilters;

  getCopyConcepts(): boolean;
  setCopyConcepts(value: boolean): AppDuplicationFilters;

  getCopyAnnotations(): boolean;
  setCopyAnnotations(value: boolean): AppDuplicationFilters;

  getCopyModels(): boolean;
  setCopyModels(value: boolean): AppDuplicationFilters;

  getCopyWorkflows(): boolean;
  setCopyWorkflows(value: boolean): AppDuplicationFilters;

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

  getPartitionedStrategyInfo(): TaskWorkerPartitionedStrategyInfo | undefined;
  setPartitionedStrategyInfo(value?: TaskWorkerPartitionedStrategyInfo): TaskWorker;
  hasPartitionedStrategyInfo(): boolean;
  clearPartitionedStrategyInfo(): TaskWorker;

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
  setId(value: string): Collector;

  getDescription(): string;
  setDescription(value: string): Collector;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collector;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Collector;

  getPreQueueWorkflowId(): string;
  setPreQueueWorkflowId(value: string): Collector;

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