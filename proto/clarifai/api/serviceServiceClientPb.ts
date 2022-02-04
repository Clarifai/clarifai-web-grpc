/**
 * @fileoverview gRPC-Web generated client stub for clarifai.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

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

import {
  DeleteAnnotationRequest,
  DeleteAnnotationSearchMetricsRequest,
  DeleteAnnotationsRequest,
  DeleteAppRequest,
  DeleteCollaboratorsRequest,
  DeleteCollectorsRequest,
  DeleteConceptRelationsRequest,
  DeleteInputRequest,
  DeleteInputsRequest,
  DeleteKeyRequest,
  DeleteModelRequest,
  DeleteModelVersionRequest,
  DeleteModelsRequest,
  DeleteSearchRequest,
  DeleteTasksRequest,
  DeleteWorkflowRequest,
  DeleteWorkflowVersionsRequest,
  DeleteWorkflowsRequest,
  GetAnnotationRequest,
  GetAnnotationSearchMetricsRequest,
  GetAppDuplicationRequest,
  GetAppRequest,
  GetCollectorRequest,
  GetConceptCountsRequest,
  GetConceptLanguageRequest,
  GetConceptRequest,
  GetInputCountRequest,
  GetInputRequest,
  GetInputSamplesRequest,
  GetKeyRequest,
  GetModelRequest,
  GetModelTypeRequest,
  GetModelVersionInputExampleRequest,
  GetModelVersionMetricsRequest,
  GetModelVersionRequest,
  GetSearchRequest,
  GetStatusCodeRequest,
  GetTaskCountRequest,
  GetTaskRequest,
  GetWorkflowRequest,
  GetWorkflowVersionRequest,
  ListAnnotationSearchMetricsRequest,
  ListAnnotationsRequest,
  ListAppDuplicationsRequest,
  ListAppKeysRequest,
  ListAppsRequest,
  ListCollaborationsRequest,
  ListCollaboratorsRequest,
  ListCollectorsRequest,
  ListConceptLanguagesRequest,
  ListConceptRelationsRequest,
  ListConceptsRequest,
  ListInputsRequest,
  ListKeysRequest,
  ListKnowledgeGraphsRequest,
  ListModelInputsRequest,
  ListModelReferencesRequest,
  ListModelTypesRequest,
  ListModelVersionInputExamplesRequest,
  ListModelVersionsRequest,
  ListModelsRequest,
  ListOpenSourceLicensesRequest,
  ListOpenSourceLicensesResponse,
  ListScopesRequest,
  ListSearchesRequest,
  ListStatusCodesRequest,
  ListTasksRequest,
  ListTrendingMetricsViewsRequest,
  ListWorkflowVersionsRequest,
  ListWorkflowsRequest,
  MultiAnnotationResponse,
  MultiAnnotationSearchMetricsResponse,
  MultiAppDuplicationsResponse,
  MultiAppResponse,
  MultiCollaborationsResponse,
  MultiCollaboratorsResponse,
  MultiCollectorResponse,
  MultiConceptCountResponse,
  MultiConceptLanguageResponse,
  MultiConceptMappingJobResponse,
  MultiConceptRelationResponse,
  MultiConceptResponse,
  MultiInputAnnotationResponse,
  MultiInputResponse,
  MultiKeyResponse,
  MultiKnowledgeGraphResponse,
  MultiModelLanguageResponse,
  MultiModelReferenceResponse,
  MultiModelResponse,
  MultiModelToolkitResponse,
  MultiModelTypeResponse,
  MultiModelUseCaseResponse,
  MultiModelVersionInputExampleResponse,
  MultiModelVersionResponse,
  MultiOutputResponse,
  MultiScopeDepsResponse,
  MultiScopeResponse,
  MultiScopeRootResponse,
  MultiScopeUserResponse,
  MultiSearchResponse,
  MultiStatValueAggregateResponse,
  MultiStatValueResponse,
  MultiStatusCodeResponse,
  MultiTaskResponse,
  MultiTrendingMetricsViewResponse,
  MultiWorkflowResponse,
  MultiWorkflowVersionResponse,
  MyScopesRequest,
  MyScopesRootRequest,
  MyScopesUserRequest,
  PatchAnnotationsRequest,
  PatchAnnotationsStatusRequest,
  PatchAnnotationsStatusResponse,
  PatchAppsRequest,
  PatchCollaboratorsRequest,
  PatchCollectorsRequest,
  PatchConceptLanguagesRequest,
  PatchConceptsRequest,
  PatchInputsRequest,
  PatchKeysRequest,
  PatchModelLanguagesRequest,
  PatchModelToolkitsRequest,
  PatchModelUseCasesRequest,
  PatchModelVersionsRequest,
  PatchModelsRequest,
  PatchTasksRequest,
  PatchWorkflowVersionsRequest,
  PatchWorkflowsRequest,
  PostAnnotationSearchMetricsRequest,
  PostAnnotationsRequest,
  PostAnnotationsSearchesRequest,
  PostAppDuplicationsRequest,
  PostAppsRequest,
  PostAppsSearchesRequest,
  PostCollaboratorsRequest,
  PostCollectorsRequest,
  PostConceptLanguagesRequest,
  PostConceptMappingJobsRequest,
  PostConceptRelationsRequest,
  PostConceptsRequest,
  PostConceptsSearchesRequest,
  PostInputsRequest,
  PostInputsSearchesRequest,
  PostKeysRequest,
  PostKnowledgeGraphsRequest,
  PostModelOutputsRequest,
  PostModelVersionMetricsRequest,
  PostModelVersionsPublishRequest,
  PostModelVersionsRequest,
  PostModelVersionsUnPublishRequest,
  PostModelsRequest,
  PostModelsSearchesRequest,
  PostSearchesByIDRequest,
  PostSearchesRequest,
  PostStatValuesAggregateRequest,
  PostStatValuesRequest,
  PostTasksRequest,
  PostTrendingMetricsViewRequest,
  PostValidatePasswordRequest,
  PostWorkflowResultsRequest,
  PostWorkflowResultsResponse,
  PostWorkflowResultsSimilarityRequest,
  PostWorkflowResultsSimilarityResponse,
  PostWorkflowsRequest,
  SingleAnnotationResponse,
  SingleAppDuplicationResponse,
  SingleAppResponse,
  SingleCollectorResponse,
  SingleConceptLanguageResponse,
  SingleConceptResponse,
  SingleInputCountResponse,
  SingleInputResponse,
  SingleKeyResponse,
  SingleModelResponse,
  SingleModelTypeResponse,
  SingleModelVersionInputExampleResponse,
  SingleModelVersionResponse,
  SinglePasswordValidationResponse,
  SingleSearchResponse,
  SingleStatusCodeResponse,
  SingleTaskCountResponse,
  SingleTaskResponse,
  SingleWorkflowResponse,
  SingleWorkflowVersionResponse,
  StreamInputsRequest} from './service_pb';

export class V2Client {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListConceptRelations = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptRelationResponse,
    (request: ListConceptRelationsRequest) => {
      return request.serializeBinary();
    },
    MultiConceptRelationResponse.deserializeBinary
  );

  listConceptRelations(
    request: ListConceptRelationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptRelationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListConceptRelations',
      request,
      metadata || {},
      this.methodInfoListConceptRelations,
      callback);
  }

  methodInfoPostConceptRelations = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptRelationResponse,
    (request: PostConceptRelationsRequest) => {
      return request.serializeBinary();
    },
    MultiConceptRelationResponse.deserializeBinary
  );

  postConceptRelations(
    request: PostConceptRelationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptRelationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostConceptRelations',
      request,
      metadata || {},
      this.methodInfoPostConceptRelations,
      callback);
  }

  methodInfoDeleteConceptRelations = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteConceptRelationsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteConceptRelations(
    request: DeleteConceptRelationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteConceptRelations',
      request,
      metadata || {},
      this.methodInfoDeleteConceptRelations,
      callback);
  }

  methodInfoGetConceptCounts = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptCountResponse,
    (request: GetConceptCountsRequest) => {
      return request.serializeBinary();
    },
    MultiConceptCountResponse.deserializeBinary
  );

  getConceptCounts(
    request: GetConceptCountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptCountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetConceptCounts',
      request,
      metadata || {},
      this.methodInfoGetConceptCounts,
      callback);
  }

  methodInfoGetConcept = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleConceptResponse,
    (request: GetConceptRequest) => {
      return request.serializeBinary();
    },
    SingleConceptResponse.deserializeBinary
  );

  getConcept(
    request: GetConceptRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleConceptResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetConcept',
      request,
      metadata || {},
      this.methodInfoGetConcept,
      callback);
  }

  methodInfoListConcepts = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptResponse,
    (request: ListConceptsRequest) => {
      return request.serializeBinary();
    },
    MultiConceptResponse.deserializeBinary
  );

  listConcepts(
    request: ListConceptsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListConcepts',
      request,
      metadata || {},
      this.methodInfoListConcepts,
      callback);
  }

  methodInfoPostConceptsSearches = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptResponse,
    (request: PostConceptsSearchesRequest) => {
      return request.serializeBinary();
    },
    MultiConceptResponse.deserializeBinary
  );

  postConceptsSearches(
    request: PostConceptsSearchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostConceptsSearches',
      request,
      metadata || {},
      this.methodInfoPostConceptsSearches,
      callback);
  }

  methodInfoPostConcepts = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptResponse,
    (request: PostConceptsRequest) => {
      return request.serializeBinary();
    },
    MultiConceptResponse.deserializeBinary
  );

  postConcepts(
    request: PostConceptsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostConcepts',
      request,
      metadata || {},
      this.methodInfoPostConcepts,
      callback);
  }

  methodInfoPatchConcepts = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptResponse,
    (request: PatchConceptsRequest) => {
      return request.serializeBinary();
    },
    MultiConceptResponse.deserializeBinary
  );

  patchConcepts(
    request: PatchConceptsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchConcepts',
      request,
      metadata || {},
      this.methodInfoPatchConcepts,
      callback);
  }

  methodInfoGetConceptLanguage = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleConceptLanguageResponse,
    (request: GetConceptLanguageRequest) => {
      return request.serializeBinary();
    },
    SingleConceptLanguageResponse.deserializeBinary
  );

  getConceptLanguage(
    request: GetConceptLanguageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleConceptLanguageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetConceptLanguage',
      request,
      metadata || {},
      this.methodInfoGetConceptLanguage,
      callback);
  }

  methodInfoListConceptLanguages = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptLanguageResponse,
    (request: ListConceptLanguagesRequest) => {
      return request.serializeBinary();
    },
    MultiConceptLanguageResponse.deserializeBinary
  );

  listConceptLanguages(
    request: ListConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptLanguageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListConceptLanguages',
      request,
      metadata || {},
      this.methodInfoListConceptLanguages,
      callback);
  }

  methodInfoPostConceptLanguages = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptLanguageResponse,
    (request: PostConceptLanguagesRequest) => {
      return request.serializeBinary();
    },
    MultiConceptLanguageResponse.deserializeBinary
  );

  postConceptLanguages(
    request: PostConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptLanguageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostConceptLanguages',
      request,
      metadata || {},
      this.methodInfoPostConceptLanguages,
      callback);
  }

  methodInfoPatchConceptLanguages = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptLanguageResponse,
    (request: PatchConceptLanguagesRequest) => {
      return request.serializeBinary();
    },
    MultiConceptLanguageResponse.deserializeBinary
  );

  patchConceptLanguages(
    request: PatchConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptLanguageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchConceptLanguages',
      request,
      metadata || {},
      this.methodInfoPatchConceptLanguages,
      callback);
  }

  methodInfoListKnowledgeGraphs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiKnowledgeGraphResponse,
    (request: ListKnowledgeGraphsRequest) => {
      return request.serializeBinary();
    },
    MultiKnowledgeGraphResponse.deserializeBinary
  );

  listKnowledgeGraphs(
    request: ListKnowledgeGraphsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiKnowledgeGraphResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListKnowledgeGraphs',
      request,
      metadata || {},
      this.methodInfoListKnowledgeGraphs,
      callback);
  }

  methodInfoPostKnowledgeGraphs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiKnowledgeGraphResponse,
    (request: PostKnowledgeGraphsRequest) => {
      return request.serializeBinary();
    },
    MultiKnowledgeGraphResponse.deserializeBinary
  );

  postKnowledgeGraphs(
    request: PostKnowledgeGraphsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiKnowledgeGraphResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostKnowledgeGraphs',
      request,
      metadata || {},
      this.methodInfoPostKnowledgeGraphs,
      callback);
  }

  methodInfoPostConceptMappingJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiConceptMappingJobResponse,
    (request: PostConceptMappingJobsRequest) => {
      return request.serializeBinary();
    },
    MultiConceptMappingJobResponse.deserializeBinary
  );

  postConceptMappingJobs(
    request: PostConceptMappingJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiConceptMappingJobResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostConceptMappingJobs',
      request,
      metadata || {},
      this.methodInfoPostConceptMappingJobs,
      callback);
  }

  methodInfoGetAnnotation = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleAnnotationResponse,
    (request: GetAnnotationRequest) => {
      return request.serializeBinary();
    },
    SingleAnnotationResponse.deserializeBinary
  );

  getAnnotation(
    request: GetAnnotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleAnnotationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetAnnotation',
      request,
      metadata || {},
      this.methodInfoGetAnnotation,
      callback);
  }

  methodInfoListAnnotations = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAnnotationResponse,
    (request: ListAnnotationsRequest) => {
      return request.serializeBinary();
    },
    MultiAnnotationResponse.deserializeBinary
  );

  listAnnotations(
    request: ListAnnotationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListAnnotations',
      request,
      metadata || {},
      this.methodInfoListAnnotations,
      callback);
  }

  methodInfoPostAnnotations = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAnnotationResponse,
    (request: PostAnnotationsRequest) => {
      return request.serializeBinary();
    },
    MultiAnnotationResponse.deserializeBinary
  );

  postAnnotations(
    request: PostAnnotationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostAnnotations',
      request,
      metadata || {},
      this.methodInfoPostAnnotations,
      callback);
  }

  methodInfoPatchAnnotations = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAnnotationResponse,
    (request: PatchAnnotationsRequest) => {
      return request.serializeBinary();
    },
    MultiAnnotationResponse.deserializeBinary
  );

  patchAnnotations(
    request: PatchAnnotationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchAnnotations',
      request,
      metadata || {},
      this.methodInfoPatchAnnotations,
      callback);
  }

  methodInfoPatchAnnotationsStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    PatchAnnotationsStatusResponse,
    (request: PatchAnnotationsStatusRequest) => {
      return request.serializeBinary();
    },
    PatchAnnotationsStatusResponse.deserializeBinary
  );

  patchAnnotationsStatus(
    request: PatchAnnotationsStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PatchAnnotationsStatusResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchAnnotationsStatus',
      request,
      metadata || {},
      this.methodInfoPatchAnnotationsStatus,
      callback);
  }

  methodInfoDeleteAnnotation = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteAnnotationRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteAnnotation(
    request: DeleteAnnotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteAnnotation',
      request,
      metadata || {},
      this.methodInfoDeleteAnnotation,
      callback);
  }

  methodInfoDeleteAnnotations = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteAnnotationsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteAnnotations(
    request: DeleteAnnotationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteAnnotations',
      request,
      metadata || {},
      this.methodInfoDeleteAnnotations,
      callback);
  }

  methodInfoPostAnnotationsSearches = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiSearchResponse,
    (request: PostAnnotationsSearchesRequest) => {
      return request.serializeBinary();
    },
    MultiSearchResponse.deserializeBinary
  );

  postAnnotationsSearches(
    request: PostAnnotationsSearchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostAnnotationsSearches',
      request,
      metadata || {},
      this.methodInfoPostAnnotationsSearches,
      callback);
  }

  methodInfoGetInputCount = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleInputCountResponse,
    (request: GetInputCountRequest) => {
      return request.serializeBinary();
    },
    SingleInputCountResponse.deserializeBinary
  );

  getInputCount(
    request: GetInputCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleInputCountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetInputCount',
      request,
      metadata || {},
      this.methodInfoGetInputCount,
      callback);
  }

  methodInfoStreamInputs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiInputResponse,
    (request: StreamInputsRequest) => {
      return request.serializeBinary();
    },
    MultiInputResponse.deserializeBinary
  );

  streamInputs(
    request: StreamInputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/StreamInputs',
      request,
      metadata || {},
      this.methodInfoStreamInputs,
      callback);
  }

  methodInfoGetInputSamples = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiInputAnnotationResponse,
    (request: GetInputSamplesRequest) => {
      return request.serializeBinary();
    },
    MultiInputAnnotationResponse.deserializeBinary
  );

  getInputSamples(
    request: GetInputSamplesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiInputAnnotationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetInputSamples',
      request,
      metadata || {},
      this.methodInfoGetInputSamples,
      callback);
  }

  methodInfoGetInput = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleInputResponse,
    (request: GetInputRequest) => {
      return request.serializeBinary();
    },
    SingleInputResponse.deserializeBinary
  );

  getInput(
    request: GetInputRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleInputResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetInput',
      request,
      metadata || {},
      this.methodInfoGetInput,
      callback);
  }

  methodInfoListInputs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiInputResponse,
    (request: ListInputsRequest) => {
      return request.serializeBinary();
    },
    MultiInputResponse.deserializeBinary
  );

  listInputs(
    request: ListInputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListInputs',
      request,
      metadata || {},
      this.methodInfoListInputs,
      callback);
  }

  methodInfoPostInputs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiInputResponse,
    (request: PostInputsRequest) => {
      return request.serializeBinary();
    },
    MultiInputResponse.deserializeBinary
  );

  postInputs(
    request: PostInputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostInputs',
      request,
      metadata || {},
      this.methodInfoPostInputs,
      callback);
  }

  methodInfoPatchInputs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiInputResponse,
    (request: PatchInputsRequest) => {
      return request.serializeBinary();
    },
    MultiInputResponse.deserializeBinary
  );

  patchInputs(
    request: PatchInputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchInputs',
      request,
      metadata || {},
      this.methodInfoPatchInputs,
      callback);
  }

  methodInfoDeleteInput = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteInputRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteInput(
    request: DeleteInputRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteInput',
      request,
      metadata || {},
      this.methodInfoDeleteInput,
      callback);
  }

  methodInfoDeleteInputs = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteInputsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteInputs(
    request: DeleteInputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteInputs',
      request,
      metadata || {},
      this.methodInfoDeleteInputs,
      callback);
  }

  methodInfoPostInputsSearches = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiSearchResponse,
    (request: PostInputsSearchesRequest) => {
      return request.serializeBinary();
    },
    MultiSearchResponse.deserializeBinary
  );

  postInputsSearches(
    request: PostInputsSearchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostInputsSearches',
      request,
      metadata || {},
      this.methodInfoPostInputsSearches,
      callback);
  }

  methodInfoPostModelOutputs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiOutputResponse,
    (request: PostModelOutputsRequest) => {
      return request.serializeBinary();
    },
    MultiOutputResponse.deserializeBinary
  );

  postModelOutputs(
    request: PostModelOutputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiOutputResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostModelOutputs',
      request,
      metadata || {},
      this.methodInfoPostModelOutputs,
      callback);
  }

  methodInfoGetModelType = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelTypeResponse,
    (request: GetModelTypeRequest) => {
      return request.serializeBinary();
    },
    SingleModelTypeResponse.deserializeBinary
  );

  getModelType(
    request: GetModelTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelTypeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetModelType',
      request,
      metadata || {},
      this.methodInfoGetModelType,
      callback);
  }

  methodInfoListOpenSourceLicenses = new grpcWeb.AbstractClientBase.MethodInfo(
    ListOpenSourceLicensesResponse,
    (request: ListOpenSourceLicensesRequest) => {
      return request.serializeBinary();
    },
    ListOpenSourceLicensesResponse.deserializeBinary
  );

  listOpenSourceLicenses(
    request: ListOpenSourceLicensesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListOpenSourceLicensesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListOpenSourceLicenses',
      request,
      metadata || {},
      this.methodInfoListOpenSourceLicenses,
      callback);
  }

  methodInfoListModelTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelTypeResponse,
    (request: ListModelTypesRequest) => {
      return request.serializeBinary();
    },
    MultiModelTypeResponse.deserializeBinary
  );

  listModelTypes(
    request: ListModelTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelTypeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListModelTypes',
      request,
      metadata || {},
      this.methodInfoListModelTypes,
      callback);
  }

  methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelResponse,
    (request: GetModelRequest) => {
      return request.serializeBinary();
    },
    SingleModelResponse.deserializeBinary
  );

  getModel(
    request: GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetModel',
      request,
      metadata || {},
      this.methodInfoGetModel,
      callback);
  }

  methodInfoGetModelOutputInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelResponse,
    (request: GetModelRequest) => {
      return request.serializeBinary();
    },
    SingleModelResponse.deserializeBinary
  );

  getModelOutputInfo(
    request: GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetModelOutputInfo',
      request,
      metadata || {},
      this.methodInfoGetModelOutputInfo,
      callback);
  }

  methodInfoListModels = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelResponse,
    (request: ListModelsRequest) => {
      return request.serializeBinary();
    },
    MultiModelResponse.deserializeBinary
  );

  listModels(
    request: ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListModels',
      request,
      metadata || {},
      this.methodInfoListModels,
      callback);
  }

  methodInfoPostModelsSearches = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelResponse,
    (request: PostModelsSearchesRequest) => {
      return request.serializeBinary();
    },
    MultiModelResponse.deserializeBinary
  );

  postModelsSearches(
    request: PostModelsSearchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostModelsSearches',
      request,
      metadata || {},
      this.methodInfoPostModelsSearches,
      callback);
  }

  methodInfoPostModels = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelResponse,
    (request: PostModelsRequest) => {
      return request.serializeBinary();
    },
    SingleModelResponse.deserializeBinary
  );

  postModels(
    request: PostModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostModels',
      request,
      metadata || {},
      this.methodInfoPostModels,
      callback);
  }

  methodInfoPatchModels = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelResponse,
    (request: PatchModelsRequest) => {
      return request.serializeBinary();
    },
    MultiModelResponse.deserializeBinary
  );

  patchModels(
    request: PatchModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchModels',
      request,
      metadata || {},
      this.methodInfoPatchModels,
      callback);
  }

  methodInfoDeleteModel = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteModelRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteModel(
    request: DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteModel',
      request,
      metadata || {},
      this.methodInfoDeleteModel,
      callback);
  }

  methodInfoDeleteModels = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteModelsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteModels(
    request: DeleteModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteModels',
      request,
      metadata || {},
      this.methodInfoDeleteModels,
      callback);
  }

  methodInfoPatchModelToolkits = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelToolkitResponse,
    (request: PatchModelToolkitsRequest) => {
      return request.serializeBinary();
    },
    MultiModelToolkitResponse.deserializeBinary
  );

  patchModelToolkits(
    request: PatchModelToolkitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelToolkitResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchModelToolkits',
      request,
      metadata || {},
      this.methodInfoPatchModelToolkits,
      callback);
  }

  methodInfoPatchModelUseCases = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelUseCaseResponse,
    (request: PatchModelUseCasesRequest) => {
      return request.serializeBinary();
    },
    MultiModelUseCaseResponse.deserializeBinary
  );

  patchModelUseCases(
    request: PatchModelUseCasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelUseCaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchModelUseCases',
      request,
      metadata || {},
      this.methodInfoPatchModelUseCases,
      callback);
  }

  methodInfoPatchModelLanguages = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelLanguageResponse,
    (request: PatchModelLanguagesRequest) => {
      return request.serializeBinary();
    },
    MultiModelLanguageResponse.deserializeBinary
  );

  patchModelLanguages(
    request: PatchModelLanguagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelLanguageResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchModelLanguages',
      request,
      metadata || {},
      this.methodInfoPatchModelLanguages,
      callback);
  }

  methodInfoListModelInputs = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiInputResponse,
    (request: ListModelInputsRequest) => {
      return request.serializeBinary();
    },
    MultiInputResponse.deserializeBinary
  );

  listModelInputs(
    request: ListModelInputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListModelInputs',
      request,
      metadata || {},
      this.methodInfoListModelInputs,
      callback);
  }

  methodInfoGetModelVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelVersionResponse,
    (request: GetModelVersionRequest) => {
      return request.serializeBinary();
    },
    SingleModelVersionResponse.deserializeBinary
  );

  getModelVersion(
    request: GetModelVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelVersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetModelVersion',
      request,
      metadata || {},
      this.methodInfoGetModelVersion,
      callback);
  }

  methodInfoListModelVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelVersionResponse,
    (request: ListModelVersionsRequest) => {
      return request.serializeBinary();
    },
    MultiModelVersionResponse.deserializeBinary
  );

  listModelVersions(
    request: ListModelVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelVersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListModelVersions',
      request,
      metadata || {},
      this.methodInfoListModelVersions,
      callback);
  }

  methodInfoPostModelVersionsPublish = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: PostModelVersionsPublishRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  postModelVersionsPublish(
    request: PostModelVersionsPublishRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostModelVersionsPublish',
      request,
      metadata || {},
      this.methodInfoPostModelVersionsPublish,
      callback);
  }

  methodInfoPostModelVersionsUnPublish = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: PostModelVersionsUnPublishRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  postModelVersionsUnPublish(
    request: PostModelVersionsUnPublishRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostModelVersionsUnPublish',
      request,
      metadata || {},
      this.methodInfoPostModelVersionsUnPublish,
      callback);
  }

  methodInfoPostModelVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelResponse,
    (request: PostModelVersionsRequest) => {
      return request.serializeBinary();
    },
    SingleModelResponse.deserializeBinary
  );

  postModelVersions(
    request: PostModelVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostModelVersions',
      request,
      metadata || {},
      this.methodInfoPostModelVersions,
      callback);
  }

  methodInfoPatchModelVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelVersionResponse,
    (request: PatchModelVersionsRequest) => {
      return request.serializeBinary();
    },
    MultiModelVersionResponse.deserializeBinary
  );

  patchModelVersions(
    request: PatchModelVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelVersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchModelVersions',
      request,
      metadata || {},
      this.methodInfoPatchModelVersions,
      callback);
  }

  methodInfoDeleteModelVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteModelVersionRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteModelVersion(
    request: DeleteModelVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteModelVersion',
      request,
      metadata || {},
      this.methodInfoDeleteModelVersion,
      callback);
  }

  methodInfoGetModelVersionMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelVersionResponse,
    (request: GetModelVersionMetricsRequest) => {
      return request.serializeBinary();
    },
    SingleModelVersionResponse.deserializeBinary
  );

  getModelVersionMetrics(
    request: GetModelVersionMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelVersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetModelVersionMetrics',
      request,
      metadata || {},
      this.methodInfoGetModelVersionMetrics,
      callback);
  }

  methodInfoPostModelVersionMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelVersionResponse,
    (request: PostModelVersionMetricsRequest) => {
      return request.serializeBinary();
    },
    SingleModelVersionResponse.deserializeBinary
  );

  postModelVersionMetrics(
    request: PostModelVersionMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelVersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostModelVersionMetrics',
      request,
      metadata || {},
      this.methodInfoPostModelVersionMetrics,
      callback);
  }

  methodInfoListModelReferences = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelReferenceResponse,
    (request: ListModelReferencesRequest) => {
      return request.serializeBinary();
    },
    MultiModelReferenceResponse.deserializeBinary
  );

  listModelReferences(
    request: ListModelReferencesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelReferenceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListModelReferences',
      request,
      metadata || {},
      this.methodInfoListModelReferences,
      callback);
  }

  methodInfoGetModelVersionInputExample = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleModelVersionInputExampleResponse,
    (request: GetModelVersionInputExampleRequest) => {
      return request.serializeBinary();
    },
    SingleModelVersionInputExampleResponse.deserializeBinary
  );

  getModelVersionInputExample(
    request: GetModelVersionInputExampleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleModelVersionInputExampleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetModelVersionInputExample',
      request,
      metadata || {},
      this.methodInfoGetModelVersionInputExample,
      callback);
  }

  methodInfoListModelVersionInputExamples = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiModelVersionInputExampleResponse,
    (request: ListModelVersionInputExamplesRequest) => {
      return request.serializeBinary();
    },
    MultiModelVersionInputExampleResponse.deserializeBinary
  );

  listModelVersionInputExamples(
    request: ListModelVersionInputExamplesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiModelVersionInputExampleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListModelVersionInputExamples',
      request,
      metadata || {},
      this.methodInfoListModelVersionInputExamples,
      callback);
  }

  methodInfoGetWorkflow = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleWorkflowResponse,
    (request: GetWorkflowRequest) => {
      return request.serializeBinary();
    },
    SingleWorkflowResponse.deserializeBinary
  );

  getWorkflow(
    request: GetWorkflowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleWorkflowResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetWorkflow',
      request,
      metadata || {},
      this.methodInfoGetWorkflow,
      callback);
  }

  methodInfoListWorkflows = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiWorkflowResponse,
    (request: ListWorkflowsRequest) => {
      return request.serializeBinary();
    },
    MultiWorkflowResponse.deserializeBinary
  );

  listWorkflows(
    request: ListWorkflowsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListWorkflows',
      request,
      metadata || {},
      this.methodInfoListWorkflows,
      callback);
  }

  methodInfoPostWorkflows = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiWorkflowResponse,
    (request: PostWorkflowsRequest) => {
      return request.serializeBinary();
    },
    MultiWorkflowResponse.deserializeBinary
  );

  postWorkflows(
    request: PostWorkflowsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostWorkflows',
      request,
      metadata || {},
      this.methodInfoPostWorkflows,
      callback);
  }

  methodInfoPatchWorkflows = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiWorkflowResponse,
    (request: PatchWorkflowsRequest) => {
      return request.serializeBinary();
    },
    MultiWorkflowResponse.deserializeBinary
  );

  patchWorkflows(
    request: PatchWorkflowsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchWorkflows',
      request,
      metadata || {},
      this.methodInfoPatchWorkflows,
      callback);
  }

  methodInfoDeleteWorkflow = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteWorkflowRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteWorkflow(
    request: DeleteWorkflowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteWorkflow',
      request,
      metadata || {},
      this.methodInfoDeleteWorkflow,
      callback);
  }

  methodInfoDeleteWorkflows = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteWorkflowsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteWorkflows(
    request: DeleteWorkflowsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteWorkflows',
      request,
      metadata || {},
      this.methodInfoDeleteWorkflows,
      callback);
  }

  methodInfoPostWorkflowResults = new grpcWeb.AbstractClientBase.MethodInfo(
    PostWorkflowResultsResponse,
    (request: PostWorkflowResultsRequest) => {
      return request.serializeBinary();
    },
    PostWorkflowResultsResponse.deserializeBinary
  );

  postWorkflowResults(
    request: PostWorkflowResultsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PostWorkflowResultsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostWorkflowResults',
      request,
      metadata || {},
      this.methodInfoPostWorkflowResults,
      callback);
  }

  methodInfoPostWorkflowResultsSimilarity = new grpcWeb.AbstractClientBase.MethodInfo(
    PostWorkflowResultsSimilarityResponse,
    (request: PostWorkflowResultsSimilarityRequest) => {
      return request.serializeBinary();
    },
    PostWorkflowResultsSimilarityResponse.deserializeBinary
  );

  postWorkflowResultsSimilarity(
    request: PostWorkflowResultsSimilarityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PostWorkflowResultsSimilarityResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostWorkflowResultsSimilarity',
      request,
      metadata || {},
      this.methodInfoPostWorkflowResultsSimilarity,
      callback);
  }

  methodInfoListWorkflowVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiWorkflowVersionResponse,
    (request: ListWorkflowVersionsRequest) => {
      return request.serializeBinary();
    },
    MultiWorkflowVersionResponse.deserializeBinary
  );

  listWorkflowVersions(
    request: ListWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowVersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListWorkflowVersions',
      request,
      metadata || {},
      this.methodInfoListWorkflowVersions,
      callback);
  }

  methodInfoGetWorkflowVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleWorkflowVersionResponse,
    (request: GetWorkflowVersionRequest) => {
      return request.serializeBinary();
    },
    SingleWorkflowVersionResponse.deserializeBinary
  );

  getWorkflowVersion(
    request: GetWorkflowVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleWorkflowVersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetWorkflowVersion',
      request,
      metadata || {},
      this.methodInfoGetWorkflowVersion,
      callback);
  }

  methodInfoDeleteWorkflowVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteWorkflowVersionsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteWorkflowVersions(
    request: DeleteWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteWorkflowVersions',
      request,
      metadata || {},
      this.methodInfoDeleteWorkflowVersions,
      callback);
  }

  methodInfoPatchWorkflowVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiWorkflowVersionResponse,
    (request: PatchWorkflowVersionsRequest) => {
      return request.serializeBinary();
    },
    MultiWorkflowVersionResponse.deserializeBinary
  );

  patchWorkflowVersions(
    request: PatchWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowVersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchWorkflowVersions',
      request,
      metadata || {},
      this.methodInfoPatchWorkflowVersions,
      callback);
  }

  methodInfoGetKey = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleKeyResponse,
    (request: GetKeyRequest) => {
      return request.serializeBinary();
    },
    SingleKeyResponse.deserializeBinary
  );

  getKey(
    request: GetKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleKeyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetKey',
      request,
      metadata || {},
      this.methodInfoGetKey,
      callback);
  }

  methodInfoListKeys = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiKeyResponse,
    (request: ListKeysRequest) => {
      return request.serializeBinary();
    },
    MultiKeyResponse.deserializeBinary
  );

  listKeys(
    request: ListKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiKeyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListKeys',
      request,
      metadata || {},
      this.methodInfoListKeys,
      callback);
  }

  methodInfoListAppKeys = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiKeyResponse,
    (request: ListAppKeysRequest) => {
      return request.serializeBinary();
    },
    MultiKeyResponse.deserializeBinary
  );

  listAppKeys(
    request: ListAppKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiKeyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListAppKeys',
      request,
      metadata || {},
      this.methodInfoListAppKeys,
      callback);
  }

  methodInfoDeleteKey = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteKeyRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteKey(
    request: DeleteKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteKey',
      request,
      metadata || {},
      this.methodInfoDeleteKey,
      callback);
  }

  methodInfoPostKeys = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiKeyResponse,
    (request: PostKeysRequest) => {
      return request.serializeBinary();
    },
    MultiKeyResponse.deserializeBinary
  );

  postKeys(
    request: PostKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiKeyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostKeys',
      request,
      metadata || {},
      this.methodInfoPostKeys,
      callback);
  }

  methodInfoPatchKeys = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiKeyResponse,
    (request: PatchKeysRequest) => {
      return request.serializeBinary();
    },
    MultiKeyResponse.deserializeBinary
  );

  patchKeys(
    request: PatchKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiKeyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchKeys',
      request,
      metadata || {},
      this.methodInfoPatchKeys,
      callback);
  }

  methodInfoMyScopes = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiScopeResponse,
    (request: MyScopesRequest) => {
      return request.serializeBinary();
    },
    MultiScopeResponse.deserializeBinary
  );

  myScopes(
    request: MyScopesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiScopeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/MyScopes',
      request,
      metadata || {},
      this.methodInfoMyScopes,
      callback);
  }

  methodInfoMyScopesUser = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiScopeUserResponse,
    (request: MyScopesUserRequest) => {
      return request.serializeBinary();
    },
    MultiScopeUserResponse.deserializeBinary
  );

  myScopesUser(
    request: MyScopesUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiScopeUserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/MyScopesUser',
      request,
      metadata || {},
      this.methodInfoMyScopesUser,
      callback);
  }

  methodInfoMyScopesRoot = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiScopeRootResponse,
    (request: MyScopesRootRequest) => {
      return request.serializeBinary();
    },
    MultiScopeRootResponse.deserializeBinary
  );

  myScopesRoot(
    request: MyScopesRootRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiScopeRootResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/MyScopesRoot',
      request,
      metadata || {},
      this.methodInfoMyScopesRoot,
      callback);
  }

  methodInfoListScopes = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiScopeDepsResponse,
    (request: ListScopesRequest) => {
      return request.serializeBinary();
    },
    MultiScopeDepsResponse.deserializeBinary
  );

  listScopes(
    request: ListScopesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiScopeDepsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListScopes',
      request,
      metadata || {},
      this.methodInfoListScopes,
      callback);
  }

  methodInfoGetApp = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleAppResponse,
    (request: GetAppRequest) => {
      return request.serializeBinary();
    },
    SingleAppResponse.deserializeBinary
  );

  getApp(
    request: GetAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleAppResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetApp',
      request,
      metadata || {},
      this.methodInfoGetApp,
      callback);
  }

  methodInfoListApps = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAppResponse,
    (request: ListAppsRequest) => {
      return request.serializeBinary();
    },
    MultiAppResponse.deserializeBinary
  );

  listApps(
    request: ListAppsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAppResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListApps',
      request,
      metadata || {},
      this.methodInfoListApps,
      callback);
  }

  methodInfoDeleteApp = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteAppRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteApp(
    request: DeleteAppRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteApp',
      request,
      metadata || {},
      this.methodInfoDeleteApp,
      callback);
  }

  methodInfoPostApps = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAppResponse,
    (request: PostAppsRequest) => {
      return request.serializeBinary();
    },
    MultiAppResponse.deserializeBinary
  );

  postApps(
    request: PostAppsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAppResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostApps',
      request,
      metadata || {},
      this.methodInfoPostApps,
      callback);
  }

  methodInfoPatchApps = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAppResponse,
    (request: PatchAppsRequest) => {
      return request.serializeBinary();
    },
    MultiAppResponse.deserializeBinary
  );

  patchApps(
    request: PatchAppsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAppResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchApps',
      request,
      metadata || {},
      this.methodInfoPatchApps,
      callback);
  }

  methodInfoPostAppsSearches = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAppResponse,
    (request: PostAppsSearchesRequest) => {
      return request.serializeBinary();
    },
    MultiAppResponse.deserializeBinary
  );

  postAppsSearches(
    request: PostAppsSearchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAppResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostAppsSearches',
      request,
      metadata || {},
      this.methodInfoPostAppsSearches,
      callback);
  }

  methodInfoPostValidatePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    SinglePasswordValidationResponse,
    (request: PostValidatePasswordRequest) => {
      return request.serializeBinary();
    },
    SinglePasswordValidationResponse.deserializeBinary
  );

  postValidatePassword(
    request: PostValidatePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SinglePasswordValidationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostValidatePassword',
      request,
      metadata || {},
      this.methodInfoPostValidatePassword,
      callback);
  }

  methodInfoGetSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleSearchResponse,
    (request: GetSearchRequest) => {
      return request.serializeBinary();
    },
    SingleSearchResponse.deserializeBinary
  );

  getSearch(
    request: GetSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleSearchResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetSearch',
      request,
      metadata || {},
      this.methodInfoGetSearch,
      callback);
  }

  methodInfoListSearches = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiSearchResponse,
    (request: ListSearchesRequest) => {
      return request.serializeBinary();
    },
    MultiSearchResponse.deserializeBinary
  );

  listSearches(
    request: ListSearchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListSearches',
      request,
      metadata || {},
      this.methodInfoListSearches,
      callback);
  }

  methodInfoPostSearches = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiSearchResponse,
    (request: PostSearchesRequest) => {
      return request.serializeBinary();
    },
    MultiSearchResponse.deserializeBinary
  );

  postSearches(
    request: PostSearchesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostSearches',
      request,
      metadata || {},
      this.methodInfoPostSearches,
      callback);
  }

  methodInfoPostSearchesByID = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiSearchResponse,
    (request: PostSearchesByIDRequest) => {
      return request.serializeBinary();
    },
    MultiSearchResponse.deserializeBinary
  );

  postSearchesByID(
    request: PostSearchesByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostSearchesByID',
      request,
      metadata || {},
      this.methodInfoPostSearchesByID,
      callback);
  }

  methodInfoPostAnnotationSearchMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAnnotationSearchMetricsResponse,
    (request: PostAnnotationSearchMetricsRequest) => {
      return request.serializeBinary();
    },
    MultiAnnotationSearchMetricsResponse.deserializeBinary
  );

  postAnnotationSearchMetrics(
    request: PostAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationSearchMetricsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostAnnotationSearchMetrics',
      request,
      metadata || {},
      this.methodInfoPostAnnotationSearchMetrics,
      callback);
  }

  methodInfoGetAnnotationSearchMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAnnotationSearchMetricsResponse,
    (request: GetAnnotationSearchMetricsRequest) => {
      return request.serializeBinary();
    },
    MultiAnnotationSearchMetricsResponse.deserializeBinary
  );

  getAnnotationSearchMetrics(
    request: GetAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationSearchMetricsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetAnnotationSearchMetrics',
      request,
      metadata || {},
      this.methodInfoGetAnnotationSearchMetrics,
      callback);
  }

  methodInfoListAnnotationSearchMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAnnotationSearchMetricsResponse,
    (request: ListAnnotationSearchMetricsRequest) => {
      return request.serializeBinary();
    },
    MultiAnnotationSearchMetricsResponse.deserializeBinary
  );

  listAnnotationSearchMetrics(
    request: ListAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationSearchMetricsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListAnnotationSearchMetrics',
      request,
      metadata || {},
      this.methodInfoListAnnotationSearchMetrics,
      callback);
  }

  methodInfoDeleteAnnotationSearchMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteAnnotationSearchMetricsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteAnnotationSearchMetrics(
    request: DeleteAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteAnnotationSearchMetrics',
      request,
      metadata || {},
      this.methodInfoDeleteAnnotationSearchMetrics,
      callback);
  }

  methodInfoDeleteSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteSearchRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteSearch(
    request: DeleteSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteSearch',
      request,
      metadata || {},
      this.methodInfoDeleteSearch,
      callback);
  }

  methodInfoListStatusCodes = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiStatusCodeResponse,
    (request: ListStatusCodesRequest) => {
      return request.serializeBinary();
    },
    MultiStatusCodeResponse.deserializeBinary
  );

  listStatusCodes(
    request: ListStatusCodesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiStatusCodeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListStatusCodes',
      request,
      metadata || {},
      this.methodInfoListStatusCodes,
      callback);
  }

  methodInfoGetStatusCode = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleStatusCodeResponse,
    (request: GetStatusCodeRequest) => {
      return request.serializeBinary();
    },
    SingleStatusCodeResponse.deserializeBinary
  );

  getStatusCode(
    request: GetStatusCodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleStatusCodeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetStatusCode',
      request,
      metadata || {},
      this.methodInfoGetStatusCode,
      callback);
  }

  methodInfoListCollaborators = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiCollaboratorsResponse,
    (request: ListCollaboratorsRequest) => {
      return request.serializeBinary();
    },
    MultiCollaboratorsResponse.deserializeBinary
  );

  listCollaborators(
    request: ListCollaboratorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiCollaboratorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListCollaborators',
      request,
      metadata || {},
      this.methodInfoListCollaborators,
      callback);
  }

  methodInfoPostCollaborators = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiCollaboratorsResponse,
    (request: PostCollaboratorsRequest) => {
      return request.serializeBinary();
    },
    MultiCollaboratorsResponse.deserializeBinary
  );

  postCollaborators(
    request: PostCollaboratorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiCollaboratorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostCollaborators',
      request,
      metadata || {},
      this.methodInfoPostCollaborators,
      callback);
  }

  methodInfoPatchCollaborators = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiCollaboratorsResponse,
    (request: PatchCollaboratorsRequest) => {
      return request.serializeBinary();
    },
    MultiCollaboratorsResponse.deserializeBinary
  );

  patchCollaborators(
    request: PatchCollaboratorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiCollaboratorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchCollaborators',
      request,
      metadata || {},
      this.methodInfoPatchCollaborators,
      callback);
  }

  methodInfoDeleteCollaborators = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteCollaboratorsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteCollaborators(
    request: DeleteCollaboratorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteCollaborators',
      request,
      metadata || {},
      this.methodInfoDeleteCollaborators,
      callback);
  }

  methodInfoListCollaborations = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiCollaborationsResponse,
    (request: ListCollaborationsRequest) => {
      return request.serializeBinary();
    },
    MultiCollaborationsResponse.deserializeBinary
  );

  listCollaborations(
    request: ListCollaborationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiCollaborationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListCollaborations',
      request,
      metadata || {},
      this.methodInfoListCollaborations,
      callback);
  }

  methodInfoPostAppDuplications = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAppDuplicationsResponse,
    (request: PostAppDuplicationsRequest) => {
      return request.serializeBinary();
    },
    MultiAppDuplicationsResponse.deserializeBinary
  );

  postAppDuplications(
    request: PostAppDuplicationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAppDuplicationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostAppDuplications',
      request,
      metadata || {},
      this.methodInfoPostAppDuplications,
      callback);
  }

  methodInfoListAppDuplications = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiAppDuplicationsResponse,
    (request: ListAppDuplicationsRequest) => {
      return request.serializeBinary();
    },
    MultiAppDuplicationsResponse.deserializeBinary
  );

  listAppDuplications(
    request: ListAppDuplicationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiAppDuplicationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListAppDuplications',
      request,
      metadata || {},
      this.methodInfoListAppDuplications,
      callback);
  }

  methodInfoGetAppDuplication = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleAppDuplicationResponse,
    (request: GetAppDuplicationRequest) => {
      return request.serializeBinary();
    },
    SingleAppDuplicationResponse.deserializeBinary
  );

  getAppDuplication(
    request: GetAppDuplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleAppDuplicationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetAppDuplication',
      request,
      metadata || {},
      this.methodInfoGetAppDuplication,
      callback);
  }

  methodInfoPostTasks = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiTaskResponse,
    (request: PostTasksRequest) => {
      return request.serializeBinary();
    },
    MultiTaskResponse.deserializeBinary
  );

  postTasks(
    request: PostTasksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiTaskResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostTasks',
      request,
      metadata || {},
      this.methodInfoPostTasks,
      callback);
  }

  methodInfoGetTaskAnnotationCount = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleTaskCountResponse,
    (request: GetTaskCountRequest) => {
      return request.serializeBinary();
    },
    SingleTaskCountResponse.deserializeBinary
  );

  getTaskAnnotationCount(
    request: GetTaskCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleTaskCountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetTaskAnnotationCount',
      request,
      metadata || {},
      this.methodInfoGetTaskAnnotationCount,
      callback);
  }

  methodInfoGetTaskInputCount = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleTaskCountResponse,
    (request: GetTaskCountRequest) => {
      return request.serializeBinary();
    },
    SingleTaskCountResponse.deserializeBinary
  );

  getTaskInputCount(
    request: GetTaskCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleTaskCountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetTaskInputCount',
      request,
      metadata || {},
      this.methodInfoGetTaskInputCount,
      callback);
  }

  methodInfoGetTask = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleTaskResponse,
    (request: GetTaskRequest) => {
      return request.serializeBinary();
    },
    SingleTaskResponse.deserializeBinary
  );

  getTask(
    request: GetTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleTaskResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetTask',
      request,
      metadata || {},
      this.methodInfoGetTask,
      callback);
  }

  methodInfoListTasks = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiTaskResponse,
    (request: ListTasksRequest) => {
      return request.serializeBinary();
    },
    MultiTaskResponse.deserializeBinary
  );

  listTasks(
    request: ListTasksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiTaskResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListTasks',
      request,
      metadata || {},
      this.methodInfoListTasks,
      callback);
  }

  methodInfoPatchTasks = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiTaskResponse,
    (request: PatchTasksRequest) => {
      return request.serializeBinary();
    },
    MultiTaskResponse.deserializeBinary
  );

  patchTasks(
    request: PatchTasksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiTaskResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchTasks',
      request,
      metadata || {},
      this.methodInfoPatchTasks,
      callback);
  }

  methodInfoDeleteTasks = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteTasksRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteTasks(
    request: DeleteTasksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteTasks',
      request,
      metadata || {},
      this.methodInfoDeleteTasks,
      callback);
  }

  methodInfoPostCollectors = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiCollectorResponse,
    (request: PostCollectorsRequest) => {
      return request.serializeBinary();
    },
    MultiCollectorResponse.deserializeBinary
  );

  postCollectors(
    request: PostCollectorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiCollectorResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostCollectors',
      request,
      metadata || {},
      this.methodInfoPostCollectors,
      callback);
  }

  methodInfoGetCollector = new grpcWeb.AbstractClientBase.MethodInfo(
    SingleCollectorResponse,
    (request: GetCollectorRequest) => {
      return request.serializeBinary();
    },
    SingleCollectorResponse.deserializeBinary
  );

  getCollector(
    request: GetCollectorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SingleCollectorResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/GetCollector',
      request,
      metadata || {},
      this.methodInfoGetCollector,
      callback);
  }

  methodInfoListCollectors = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiCollectorResponse,
    (request: ListCollectorsRequest) => {
      return request.serializeBinary();
    },
    MultiCollectorResponse.deserializeBinary
  );

  listCollectors(
    request: ListCollectorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiCollectorResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListCollectors',
      request,
      metadata || {},
      this.methodInfoListCollectors,
      callback);
  }

  methodInfoPatchCollectors = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiCollectorResponse,
    (request: PatchCollectorsRequest) => {
      return request.serializeBinary();
    },
    MultiCollectorResponse.deserializeBinary
  );

  patchCollectors(
    request: PatchCollectorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiCollectorResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PatchCollectors',
      request,
      metadata || {},
      this.methodInfoPatchCollectors,
      callback);
  }

  methodInfoDeleteCollectors = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: DeleteCollectorsRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  deleteCollectors(
    request: DeleteCollectorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/DeleteCollectors',
      request,
      metadata || {},
      this.methodInfoDeleteCollectors,
      callback);
  }

  methodInfoPostStatValues = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiStatValueResponse,
    (request: PostStatValuesRequest) => {
      return request.serializeBinary();
    },
    MultiStatValueResponse.deserializeBinary
  );

  postStatValues(
    request: PostStatValuesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiStatValueResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostStatValues',
      request,
      metadata || {},
      this.methodInfoPostStatValues,
      callback);
  }

  methodInfoPostStatValuesAggregate = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiStatValueAggregateResponse,
    (request: PostStatValuesAggregateRequest) => {
      return request.serializeBinary();
    },
    MultiStatValueAggregateResponse.deserializeBinary
  );

  postStatValuesAggregate(
    request: PostStatValuesAggregateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiStatValueAggregateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostStatValuesAggregate',
      request,
      metadata || {},
      this.methodInfoPostStatValuesAggregate,
      callback);
  }

  methodInfoPostTrendingMetricsView = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_clarifai_api_status_status_pb.BaseResponse,
    (request: PostTrendingMetricsViewRequest) => {
      return request.serializeBinary();
    },
    proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
  );

  postTrendingMetricsView(
    request: PostTrendingMetricsViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/PostTrendingMetricsView',
      request,
      metadata || {},
      this.methodInfoPostTrendingMetricsView,
      callback);
  }

  methodInfoListTrendingMetricsViews = new grpcWeb.AbstractClientBase.MethodInfo(
    MultiTrendingMetricsViewResponse,
    (request: ListTrendingMetricsViewsRequest) => {
      return request.serializeBinary();
    },
    MultiTrendingMetricsViewResponse.deserializeBinary
  );

  listTrendingMetricsViews(
    request: ListTrendingMetricsViewsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MultiTrendingMetricsViewResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/clarifai.api.V2/ListTrendingMetricsViews',
      request,
      metadata || {},
      this.methodInfoListTrendingMetricsViews,
      callback);
  }

}

