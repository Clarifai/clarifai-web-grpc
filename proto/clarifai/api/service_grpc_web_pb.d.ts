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
  DeleteLabelOrdersRequest,
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
  GetLabelOrderRequest,
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
  ListLabelOrdersRequest,
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
  MultiLabelOrderResponse,
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
  PatchAnnotationsSearchesRequest,
  PatchAnnotationsStatusRequest,
  PatchAnnotationsStatusResponse,
  PatchAppsRequest,
  PatchCollaboratorsRequest,
  PatchCollectorsRequest,
  PatchConceptLanguagesRequest,
  PatchConceptsRequest,
  PatchInputsRequest,
  PatchInputsSearchesRequest,
  PatchKeysRequest,
  PatchLabelOrdersRequest,
  PatchModelIdsRequest,
  PatchModelLanguagesRequest,
  PatchModelToolkitsRequest,
  PatchModelUseCasesRequest,
  PatchModelVersionsRequest,
  PatchModelsRequest,
  PatchSearchesRequest,
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
  PostLabelOrdersRequest,
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
  SingleLabelOrderResponse,
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
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listConceptRelations(
    request: ListConceptRelationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptRelationResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptRelationResponse>;

  postConceptRelations(
    request: PostConceptRelationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptRelationResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptRelationResponse>;

  deleteConceptRelations(
    request: DeleteConceptRelationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getConceptCounts(
    request: GetConceptCountsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptCountResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptCountResponse>;

  getConcept(
    request: GetConceptRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleConceptResponse) => void
  ): grpcWeb.ClientReadableStream<SingleConceptResponse>;

  listConcepts(
    request: ListConceptsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptResponse>;

  postConceptsSearches(
    request: PostConceptsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptResponse>;

  postConcepts(
    request: PostConceptsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptResponse>;

  patchConcepts(
    request: PatchConceptsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptResponse>;

  getConceptLanguage(
    request: GetConceptLanguageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleConceptLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<SingleConceptLanguageResponse>;

  listConceptLanguages(
    request: ListConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptLanguageResponse>;

  postConceptLanguages(
    request: PostConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptLanguageResponse>;

  patchConceptLanguages(
    request: PatchConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptLanguageResponse>;

  listKnowledgeGraphs(
    request: ListKnowledgeGraphsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiKnowledgeGraphResponse) => void
  ): grpcWeb.ClientReadableStream<MultiKnowledgeGraphResponse>;

  postKnowledgeGraphs(
    request: PostKnowledgeGraphsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiKnowledgeGraphResponse) => void
  ): grpcWeb.ClientReadableStream<MultiKnowledgeGraphResponse>;

  postConceptMappingJobs(
    request: PostConceptMappingJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiConceptMappingJobResponse) => void
  ): grpcWeb.ClientReadableStream<MultiConceptMappingJobResponse>;

  getAnnotation(
    request: GetAnnotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<SingleAnnotationResponse>;

  listAnnotations(
    request: ListAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAnnotationResponse>;

  postAnnotations(
    request: PostAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAnnotationResponse>;

  patchAnnotations(
    request: PatchAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAnnotationResponse>;

  patchAnnotationsStatus(
    request: PatchAnnotationsStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PatchAnnotationsStatusResponse) => void
  ): grpcWeb.ClientReadableStream<PatchAnnotationsStatusResponse>;

  deleteAnnotation(
    request: DeleteAnnotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteAnnotations(
    request: DeleteAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchAnnotationsSearches(
    request: PatchAnnotationsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<MultiSearchResponse>;

  postAnnotationsSearches(
    request: PostAnnotationsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<MultiSearchResponse>;

  getInputCount(
    request: GetInputCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleInputCountResponse) => void
  ): grpcWeb.ClientReadableStream<SingleInputCountResponse>;

  streamInputs(
    request: StreamInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<MultiInputResponse>;

  getInputSamples(
    request: GetInputSamplesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiInputAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<MultiInputAnnotationResponse>;

  getInput(
    request: GetInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleInputResponse) => void
  ): grpcWeb.ClientReadableStream<SingleInputResponse>;

  listInputs(
    request: ListInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<MultiInputResponse>;

  postInputs(
    request: PostInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<MultiInputResponse>;

  patchInputs(
    request: PatchInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<MultiInputResponse>;

  deleteInput(
    request: DeleteInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteInputs(
    request: DeleteInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchInputsSearches(
    request: PatchInputsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<MultiSearchResponse>;

  postInputsSearches(
    request: PostInputsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<MultiSearchResponse>;

  postModelOutputs(
    request: PostModelOutputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiOutputResponse) => void
  ): grpcWeb.ClientReadableStream<MultiOutputResponse>;

  getModelType(
    request: GetModelTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelTypeResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelTypeResponse>;

  listOpenSourceLicenses(
    request: ListOpenSourceLicensesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListOpenSourceLicensesResponse) => void
  ): grpcWeb.ClientReadableStream<ListOpenSourceLicensesResponse>;

  listModelTypes(
    request: ListModelTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelTypeResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelTypeResponse>;

  getModel(
    request: GetModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelResponse>;

  getModelOutputInfo(
    request: GetModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelResponse>;

  listModels(
    request: ListModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelResponse>;

  postModelsSearches(
    request: PostModelsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelResponse>;

  postModels(
    request: PostModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelResponse>;

  patchModels(
    request: PatchModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelResponse>;

  patchModelIds(
    request: PatchModelIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelResponse>;

  deleteModel(
    request: DeleteModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteModels(
    request: DeleteModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchModelToolkits(
    request: PatchModelToolkitsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelToolkitResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelToolkitResponse>;

  patchModelUseCases(
    request: PatchModelUseCasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelUseCaseResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelUseCaseResponse>;

  patchModelLanguages(
    request: PatchModelLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelLanguageResponse>;

  listModelInputs(
    request: ListModelInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<MultiInputResponse>;

  getModelVersion(
    request: GetModelVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelVersionResponse>;

  listModelVersions(
    request: ListModelVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelVersionResponse>;

  postModelVersionsPublish(
    request: PostModelVersionsPublishRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersionsUnPublish(
    request: PostModelVersionsUnPublishRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersions(
    request: PostModelVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelResponse>;

  patchModelVersions(
    request: PatchModelVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelVersionResponse>;

  deleteModelVersion(
    request: DeleteModelVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getModelVersionMetrics(
    request: GetModelVersionMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelVersionResponse>;

  postModelVersionMetrics(
    request: PostModelVersionMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelVersionResponse>;

  listModelReferences(
    request: ListModelReferencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelReferenceResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelReferenceResponse>;

  getModelVersionInputExample(
    request: GetModelVersionInputExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleModelVersionInputExampleResponse) => void
  ): grpcWeb.ClientReadableStream<SingleModelVersionInputExampleResponse>;

  listModelVersionInputExamples(
    request: ListModelVersionInputExamplesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiModelVersionInputExampleResponse) => void
  ): grpcWeb.ClientReadableStream<MultiModelVersionInputExampleResponse>;

  getWorkflow(
    request: GetWorkflowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<SingleWorkflowResponse>;

  listWorkflows(
    request: ListWorkflowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<MultiWorkflowResponse>;

  postWorkflows(
    request: PostWorkflowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<MultiWorkflowResponse>;

  patchWorkflows(
    request: PatchWorkflowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<MultiWorkflowResponse>;

  deleteWorkflow(
    request: DeleteWorkflowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteWorkflows(
    request: DeleteWorkflowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postWorkflowResults(
    request: PostWorkflowResultsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PostWorkflowResultsResponse) => void
  ): grpcWeb.ClientReadableStream<PostWorkflowResultsResponse>;

  postWorkflowResultsSimilarity(
    request: PostWorkflowResultsSimilarityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PostWorkflowResultsSimilarityResponse) => void
  ): grpcWeb.ClientReadableStream<PostWorkflowResultsSimilarityResponse>;

  listWorkflowVersions(
    request: ListWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowVersionResponse) => void
  ): grpcWeb.ClientReadableStream<MultiWorkflowVersionResponse>;

  getWorkflowVersion(
    request: GetWorkflowVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleWorkflowVersionResponse) => void
  ): grpcWeb.ClientReadableStream<SingleWorkflowVersionResponse>;

  deleteWorkflowVersions(
    request: DeleteWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchWorkflowVersions(
    request: PatchWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiWorkflowVersionResponse) => void
  ): grpcWeb.ClientReadableStream<MultiWorkflowVersionResponse>;

  getKey(
    request: GetKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleKeyResponse) => void
  ): grpcWeb.ClientReadableStream<SingleKeyResponse>;

  listKeys(
    request: ListKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiKeyResponse) => void
  ): grpcWeb.ClientReadableStream<MultiKeyResponse>;

  listAppKeys(
    request: ListAppKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiKeyResponse) => void
  ): grpcWeb.ClientReadableStream<MultiKeyResponse>;

  deleteKey(
    request: DeleteKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postKeys(
    request: PostKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiKeyResponse) => void
  ): grpcWeb.ClientReadableStream<MultiKeyResponse>;

  patchKeys(
    request: PatchKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiKeyResponse) => void
  ): grpcWeb.ClientReadableStream<MultiKeyResponse>;

  myScopes(
    request: MyScopesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiScopeResponse) => void
  ): grpcWeb.ClientReadableStream<MultiScopeResponse>;

  myScopesUser(
    request: MyScopesUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiScopeUserResponse) => void
  ): grpcWeb.ClientReadableStream<MultiScopeUserResponse>;

  myScopesRoot(
    request: MyScopesRootRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiScopeRootResponse) => void
  ): grpcWeb.ClientReadableStream<MultiScopeRootResponse>;

  listScopes(
    request: ListScopesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiScopeDepsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiScopeDepsResponse>;

  getApp(
    request: GetAppRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleAppResponse) => void
  ): grpcWeb.ClientReadableStream<SingleAppResponse>;

  listApps(
    request: ListAppsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAppResponse>;

  deleteApp(
    request: DeleteAppRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postApps(
    request: PostAppsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAppResponse>;

  patchApps(
    request: PatchAppsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAppResponse>;

  postAppsSearches(
    request: PostAppsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAppResponse>;

  postValidatePassword(
    request: PostValidatePasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SinglePasswordValidationResponse) => void
  ): grpcWeb.ClientReadableStream<SinglePasswordValidationResponse>;

  getSearch(
    request: GetSearchRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleSearchResponse) => void
  ): grpcWeb.ClientReadableStream<SingleSearchResponse>;

  listSearches(
    request: ListSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<MultiSearchResponse>;

  patchSearches(
    request: PatchSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<MultiSearchResponse>;

  postSearches(
    request: PostSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<MultiSearchResponse>;

  postSearchesByID(
    request: PostSearchesByIDRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<MultiSearchResponse>;

  postAnnotationSearchMetrics(
    request: PostAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationSearchMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAnnotationSearchMetricsResponse>;

  getAnnotationSearchMetrics(
    request: GetAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationSearchMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAnnotationSearchMetricsResponse>;

  listAnnotationSearchMetrics(
    request: ListAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAnnotationSearchMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAnnotationSearchMetricsResponse>;

  deleteAnnotationSearchMetrics(
    request: DeleteAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteSearch(
    request: DeleteSearchRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listStatusCodes(
    request: ListStatusCodesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiStatusCodeResponse) => void
  ): grpcWeb.ClientReadableStream<MultiStatusCodeResponse>;

  getStatusCode(
    request: GetStatusCodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleStatusCodeResponse) => void
  ): grpcWeb.ClientReadableStream<SingleStatusCodeResponse>;

  listCollaborators(
    request: ListCollaboratorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiCollaboratorsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiCollaboratorsResponse>;

  postCollaborators(
    request: PostCollaboratorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiCollaboratorsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiCollaboratorsResponse>;

  patchCollaborators(
    request: PatchCollaboratorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiCollaboratorsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiCollaboratorsResponse>;

  deleteCollaborators(
    request: DeleteCollaboratorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listCollaborations(
    request: ListCollaborationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiCollaborationsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiCollaborationsResponse>;

  postAppDuplications(
    request: PostAppDuplicationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAppDuplicationsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAppDuplicationsResponse>;

  listAppDuplications(
    request: ListAppDuplicationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiAppDuplicationsResponse) => void
  ): grpcWeb.ClientReadableStream<MultiAppDuplicationsResponse>;

  getAppDuplication(
    request: GetAppDuplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleAppDuplicationResponse) => void
  ): grpcWeb.ClientReadableStream<SingleAppDuplicationResponse>;

  postTasks(
    request: PostTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiTaskResponse) => void
  ): grpcWeb.ClientReadableStream<MultiTaskResponse>;

  getTaskAnnotationCount(
    request: GetTaskCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleTaskCountResponse) => void
  ): grpcWeb.ClientReadableStream<SingleTaskCountResponse>;

  getTaskInputCount(
    request: GetTaskCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleTaskCountResponse) => void
  ): grpcWeb.ClientReadableStream<SingleTaskCountResponse>;

  getTask(
    request: GetTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleTaskResponse) => void
  ): grpcWeb.ClientReadableStream<SingleTaskResponse>;

  listTasks(
    request: ListTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiTaskResponse) => void
  ): grpcWeb.ClientReadableStream<MultiTaskResponse>;

  patchTasks(
    request: PatchTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiTaskResponse) => void
  ): grpcWeb.ClientReadableStream<MultiTaskResponse>;

  deleteTasks(
    request: DeleteTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postLabelOrders(
    request: PostLabelOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiLabelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<MultiLabelOrderResponse>;

  getLabelOrder(
    request: GetLabelOrderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleLabelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<SingleLabelOrderResponse>;

  listLabelOrders(
    request: ListLabelOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiLabelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<MultiLabelOrderResponse>;

  patchLabelOrders(
    request: PatchLabelOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiLabelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<MultiLabelOrderResponse>;

  deleteLabelOrders(
    request: DeleteLabelOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postCollectors(
    request: PostCollectorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiCollectorResponse) => void
  ): grpcWeb.ClientReadableStream<MultiCollectorResponse>;

  getCollector(
    request: GetCollectorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SingleCollectorResponse) => void
  ): grpcWeb.ClientReadableStream<SingleCollectorResponse>;

  listCollectors(
    request: ListCollectorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiCollectorResponse) => void
  ): grpcWeb.ClientReadableStream<MultiCollectorResponse>;

  patchCollectors(
    request: PatchCollectorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiCollectorResponse) => void
  ): grpcWeb.ClientReadableStream<MultiCollectorResponse>;

  deleteCollectors(
    request: DeleteCollectorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postStatValues(
    request: PostStatValuesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiStatValueResponse) => void
  ): grpcWeb.ClientReadableStream<MultiStatValueResponse>;

  postStatValuesAggregate(
    request: PostStatValuesAggregateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiStatValueAggregateResponse) => void
  ): grpcWeb.ClientReadableStream<MultiStatValueAggregateResponse>;

  postTrendingMetricsView(
    request: PostTrendingMetricsViewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listTrendingMetricsViews(
    request: ListTrendingMetricsViewsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MultiTrendingMetricsViewResponse) => void
  ): grpcWeb.ClientReadableStream<MultiTrendingMetricsViewResponse>;

}

export class V2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  listConceptRelations(
    request: ListConceptRelationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptRelationResponse>;

  postConceptRelations(
    request: PostConceptRelationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptRelationResponse>;

  deleteConceptRelations(
    request: DeleteConceptRelationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getConceptCounts(
    request: GetConceptCountsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptCountResponse>;

  getConcept(
    request: GetConceptRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleConceptResponse>;

  listConcepts(
    request: ListConceptsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptResponse>;

  postConceptsSearches(
    request: PostConceptsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptResponse>;

  postConcepts(
    request: PostConceptsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptResponse>;

  patchConcepts(
    request: PatchConceptsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptResponse>;

  getConceptLanguage(
    request: GetConceptLanguageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleConceptLanguageResponse>;

  listConceptLanguages(
    request: ListConceptLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptLanguageResponse>;

  postConceptLanguages(
    request: PostConceptLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptLanguageResponse>;

  patchConceptLanguages(
    request: PatchConceptLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptLanguageResponse>;

  listKnowledgeGraphs(
    request: ListKnowledgeGraphsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiKnowledgeGraphResponse>;

  postKnowledgeGraphs(
    request: PostKnowledgeGraphsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiKnowledgeGraphResponse>;

  postConceptMappingJobs(
    request: PostConceptMappingJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiConceptMappingJobResponse>;

  getAnnotation(
    request: GetAnnotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleAnnotationResponse>;

  listAnnotations(
    request: ListAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAnnotationResponse>;

  postAnnotations(
    request: PostAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAnnotationResponse>;

  patchAnnotations(
    request: PatchAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAnnotationResponse>;

  patchAnnotationsStatus(
    request: PatchAnnotationsStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PatchAnnotationsStatusResponse>;

  deleteAnnotation(
    request: DeleteAnnotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteAnnotations(
    request: DeleteAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchAnnotationsSearches(
    request: PatchAnnotationsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiSearchResponse>;

  postAnnotationsSearches(
    request: PostAnnotationsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiSearchResponse>;

  getInputCount(
    request: GetInputCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleInputCountResponse>;

  streamInputs(
    request: StreamInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiInputResponse>;

  getInputSamples(
    request: GetInputSamplesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiInputAnnotationResponse>;

  getInput(
    request: GetInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleInputResponse>;

  listInputs(
    request: ListInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiInputResponse>;

  postInputs(
    request: PostInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiInputResponse>;

  patchInputs(
    request: PatchInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiInputResponse>;

  deleteInput(
    request: DeleteInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteInputs(
    request: DeleteInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchInputsSearches(
    request: PatchInputsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiSearchResponse>;

  postInputsSearches(
    request: PostInputsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiSearchResponse>;

  postModelOutputs(
    request: PostModelOutputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiOutputResponse>;

  getModelType(
    request: GetModelTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelTypeResponse>;

  listOpenSourceLicenses(
    request: ListOpenSourceLicensesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListOpenSourceLicensesResponse>;

  listModelTypes(
    request: ListModelTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelTypeResponse>;

  getModel(
    request: GetModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelResponse>;

  getModelOutputInfo(
    request: GetModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelResponse>;

  listModels(
    request: ListModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelResponse>;

  postModelsSearches(
    request: PostModelsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelResponse>;

  postModels(
    request: PostModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelResponse>;

  patchModels(
    request: PatchModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelResponse>;

  patchModelIds(
    request: PatchModelIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelResponse>;

  deleteModel(
    request: DeleteModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteModels(
    request: DeleteModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchModelToolkits(
    request: PatchModelToolkitsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelToolkitResponse>;

  patchModelUseCases(
    request: PatchModelUseCasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelUseCaseResponse>;

  patchModelLanguages(
    request: PatchModelLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelLanguageResponse>;

  listModelInputs(
    request: ListModelInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiInputResponse>;

  getModelVersion(
    request: GetModelVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelVersionResponse>;

  listModelVersions(
    request: ListModelVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelVersionResponse>;

  postModelVersionsPublish(
    request: PostModelVersionsPublishRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersionsUnPublish(
    request: PostModelVersionsUnPublishRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersions(
    request: PostModelVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelResponse>;

  patchModelVersions(
    request: PatchModelVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelVersionResponse>;

  deleteModelVersion(
    request: DeleteModelVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getModelVersionMetrics(
    request: GetModelVersionMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelVersionResponse>;

  postModelVersionMetrics(
    request: PostModelVersionMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelVersionResponse>;

  listModelReferences(
    request: ListModelReferencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelReferenceResponse>;

  getModelVersionInputExample(
    request: GetModelVersionInputExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleModelVersionInputExampleResponse>;

  listModelVersionInputExamples(
    request: ListModelVersionInputExamplesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiModelVersionInputExampleResponse>;

  getWorkflow(
    request: GetWorkflowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleWorkflowResponse>;

  listWorkflows(
    request: ListWorkflowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiWorkflowResponse>;

  postWorkflows(
    request: PostWorkflowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiWorkflowResponse>;

  patchWorkflows(
    request: PatchWorkflowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiWorkflowResponse>;

  deleteWorkflow(
    request: DeleteWorkflowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteWorkflows(
    request: DeleteWorkflowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postWorkflowResults(
    request: PostWorkflowResultsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PostWorkflowResultsResponse>;

  postWorkflowResultsSimilarity(
    request: PostWorkflowResultsSimilarityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PostWorkflowResultsSimilarityResponse>;

  listWorkflowVersions(
    request: ListWorkflowVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiWorkflowVersionResponse>;

  getWorkflowVersion(
    request: GetWorkflowVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleWorkflowVersionResponse>;

  deleteWorkflowVersions(
    request: DeleteWorkflowVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchWorkflowVersions(
    request: PatchWorkflowVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiWorkflowVersionResponse>;

  getKey(
    request: GetKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleKeyResponse>;

  listKeys(
    request: ListKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiKeyResponse>;

  listAppKeys(
    request: ListAppKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiKeyResponse>;

  deleteKey(
    request: DeleteKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postKeys(
    request: PostKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiKeyResponse>;

  patchKeys(
    request: PatchKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiKeyResponse>;

  myScopes(
    request: MyScopesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiScopeResponse>;

  myScopesUser(
    request: MyScopesUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiScopeUserResponse>;

  myScopesRoot(
    request: MyScopesRootRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiScopeRootResponse>;

  listScopes(
    request: ListScopesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiScopeDepsResponse>;

  getApp(
    request: GetAppRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleAppResponse>;

  listApps(
    request: ListAppsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAppResponse>;

  deleteApp(
    request: DeleteAppRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postApps(
    request: PostAppsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAppResponse>;

  patchApps(
    request: PatchAppsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAppResponse>;

  postAppsSearches(
    request: PostAppsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAppResponse>;

  postValidatePassword(
    request: PostValidatePasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SinglePasswordValidationResponse>;

  getSearch(
    request: GetSearchRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleSearchResponse>;

  listSearches(
    request: ListSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiSearchResponse>;

  patchSearches(
    request: PatchSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiSearchResponse>;

  postSearches(
    request: PostSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiSearchResponse>;

  postSearchesByID(
    request: PostSearchesByIDRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiSearchResponse>;

  postAnnotationSearchMetrics(
    request: PostAnnotationSearchMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAnnotationSearchMetricsResponse>;

  getAnnotationSearchMetrics(
    request: GetAnnotationSearchMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAnnotationSearchMetricsResponse>;

  listAnnotationSearchMetrics(
    request: ListAnnotationSearchMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAnnotationSearchMetricsResponse>;

  deleteAnnotationSearchMetrics(
    request: DeleteAnnotationSearchMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteSearch(
    request: DeleteSearchRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listStatusCodes(
    request: ListStatusCodesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiStatusCodeResponse>;

  getStatusCode(
    request: GetStatusCodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleStatusCodeResponse>;

  listCollaborators(
    request: ListCollaboratorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiCollaboratorsResponse>;

  postCollaborators(
    request: PostCollaboratorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiCollaboratorsResponse>;

  patchCollaborators(
    request: PatchCollaboratorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiCollaboratorsResponse>;

  deleteCollaborators(
    request: DeleteCollaboratorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listCollaborations(
    request: ListCollaborationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiCollaborationsResponse>;

  postAppDuplications(
    request: PostAppDuplicationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAppDuplicationsResponse>;

  listAppDuplications(
    request: ListAppDuplicationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiAppDuplicationsResponse>;

  getAppDuplication(
    request: GetAppDuplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleAppDuplicationResponse>;

  postTasks(
    request: PostTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiTaskResponse>;

  getTaskAnnotationCount(
    request: GetTaskCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleTaskCountResponse>;

  getTaskInputCount(
    request: GetTaskCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleTaskCountResponse>;

  getTask(
    request: GetTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleTaskResponse>;

  listTasks(
    request: ListTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiTaskResponse>;

  patchTasks(
    request: PatchTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiTaskResponse>;

  deleteTasks(
    request: DeleteTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postLabelOrders(
    request: PostLabelOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiLabelOrderResponse>;

  getLabelOrder(
    request: GetLabelOrderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleLabelOrderResponse>;

  listLabelOrders(
    request: ListLabelOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiLabelOrderResponse>;

  patchLabelOrders(
    request: PatchLabelOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiLabelOrderResponse>;

  deleteLabelOrders(
    request: DeleteLabelOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postCollectors(
    request: PostCollectorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiCollectorResponse>;

  getCollector(
    request: GetCollectorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SingleCollectorResponse>;

  listCollectors(
    request: ListCollectorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiCollectorResponse>;

  patchCollectors(
    request: PatchCollectorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiCollectorResponse>;

  deleteCollectors(
    request: DeleteCollectorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postStatValues(
    request: PostStatValuesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiStatValueResponse>;

  postStatValuesAggregate(
    request: PostStatValuesAggregateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiStatValueAggregateResponse>;

  postTrendingMetricsView(
    request: PostTrendingMetricsViewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listTrendingMetricsViews(
    request: ListTrendingMetricsViewsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<MultiTrendingMetricsViewResponse>;

}

