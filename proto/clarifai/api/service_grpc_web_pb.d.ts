import * as grpcWeb from 'grpc-web';

import * as proto_clarifai_api_service_pb from '../../../proto/clarifai/api/service_pb';
import * as proto_clarifai_api_status_status_pb from '../../../proto/clarifai/api/status/status_pb';


export class V2Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listConceptRelations(
    request: proto_clarifai_api_service_pb.ListConceptRelationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptRelationResponse>;

  postConceptRelations(
    request: proto_clarifai_api_service_pb.PostConceptRelationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptRelationResponse>;

  deleteConceptRelations(
    request: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getConceptCounts(
    request: proto_clarifai_api_service_pb.GetConceptCountsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptCountResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptCountResponse>;

  getConcept(
    request: proto_clarifai_api_service_pb.GetConceptRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleConceptResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleConceptResponse>;

  listConcepts(
    request: proto_clarifai_api_service_pb.ListConceptsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptResponse>;

  listModelConcepts(
    request: proto_clarifai_api_service_pb.ListModelConceptsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptResponse>;

  postConceptsSearches(
    request: proto_clarifai_api_service_pb.PostConceptsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptResponse>;

  postConcepts(
    request: proto_clarifai_api_service_pb.PostConceptsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptResponse>;

  patchConcepts(
    request: proto_clarifai_api_service_pb.PatchConceptsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptResponse>;

  getConceptLanguage(
    request: proto_clarifai_api_service_pb.GetConceptLanguageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleConceptLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleConceptLanguageResponse>;

  listConceptLanguages(
    request: proto_clarifai_api_service_pb.ListConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;

  postConceptLanguages(
    request: proto_clarifai_api_service_pb.PostConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;

  patchConceptLanguages(
    request: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;

  listKnowledgeGraphs(
    request: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;

  postKnowledgeGraphs(
    request: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;

  getAnnotation(
    request: proto_clarifai_api_service_pb.GetAnnotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleAnnotationResponse>;

  listAnnotations(
    request: proto_clarifai_api_service_pb.ListAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationResponse>;

  postAnnotations(
    request: proto_clarifai_api_service_pb.PostAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationResponse>;

  patchAnnotations(
    request: proto_clarifai_api_service_pb.PatchAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationResponse>;

  patchAnnotationsStatus(
    request: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse>;

  deleteAnnotation(
    request: proto_clarifai_api_service_pb.DeleteAnnotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteAnnotations(
    request: proto_clarifai_api_service_pb.DeleteAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listAnnotationTracks(
    request: proto_clarifai_api_service_pb.ListAnnotationTracksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;

  postAnnotationTracks(
    request: proto_clarifai_api_service_pb.PostAnnotationTracksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;

  patchAnnotationTracks(
    request: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;

  deleteAnnotationTracks(
    request: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchAnnotationsSearches(
    request: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postAnnotationsSearches(
    request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSearchResponse>;

  listAnnotationWorkers(
    request: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkerResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkerResponse>;

  getInputCount(
    request: proto_clarifai_api_service_pb.GetInputCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleInputCountResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleInputCountResponse>;

  streamInputs(
    request: proto_clarifai_api_service_pb.StreamInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputResponse>;

  getInputSamples(
    request: proto_clarifai_api_service_pb.GetInputSamplesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputAnnotationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputAnnotationResponse>;

  getInput(
    request: proto_clarifai_api_service_pb.GetInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleInputResponse>;

  getInputVideoManifest(
    request: proto_clarifai_api_service_pb.GetVideoManifestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.GetVideoManifestResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.GetVideoManifestResponse>;

  listInputs(
    request: proto_clarifai_api_service_pb.ListInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputResponse>;

  postInputs(
    request: proto_clarifai_api_service_pb.PostInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputResponse>;

  patchInputs(
    request: proto_clarifai_api_service_pb.PatchInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputResponse>;

  deleteInput(
    request: proto_clarifai_api_service_pb.DeleteInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteInputs(
    request: proto_clarifai_api_service_pb.DeleteInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchInputsSearches(
    request: proto_clarifai_api_service_pb.PatchInputsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postInputsSearches(
    request: proto_clarifai_api_service_pb.PostInputsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postModelOutputs(
    request: proto_clarifai_api_service_pb.PostModelOutputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiOutputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiOutputResponse>;

  generateModelOutputs(
    request: proto_clarifai_api_service_pb.PostModelOutputsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiOutputResponse>;

  listDatasets(
    request: proto_clarifai_api_service_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetResponse>;

  getDataset(
    request: proto_clarifai_api_service_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleDatasetResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleDatasetResponse>;

  postDatasets(
    request: proto_clarifai_api_service_pb.PostDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetResponse>;

  patchDatasets(
    request: proto_clarifai_api_service_pb.PatchDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetResponse>;

  deleteDatasets(
    request: proto_clarifai_api_service_pb.DeleteDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listDatasetInputs(
    request: proto_clarifai_api_service_pb.ListDatasetInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetInputResponse>;

  getDatasetInput(
    request: proto_clarifai_api_service_pb.GetDatasetInputRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleDatasetInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleDatasetInputResponse>;

  postDatasetInputs(
    request: proto_clarifai_api_service_pb.PostDatasetInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetInputResponse>;

  deleteDatasetInputs(
    request: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listDatasetVersions(
    request: proto_clarifai_api_service_pb.ListDatasetVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;

  getDatasetVersion(
    request: proto_clarifai_api_service_pb.GetDatasetVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleDatasetVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleDatasetVersionResponse>;

  listDatasetVersionMetricsGroups(
    request: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse>;

  postDatasetVersions(
    request: proto_clarifai_api_service_pb.PostDatasetVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;

  patchDatasetVersions(
    request: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;

  deleteDatasetVersions(
    request: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  putDatasetVersionExports(
    request: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse>;

  getModelType(
    request: proto_clarifai_api_service_pb.GetModelTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelTypeResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelTypeResponse>;

  listOpenSourceLicenses(
    request: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse>;

  listModelTypes(
    request: proto_clarifai_api_service_pb.ListModelTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelTypeResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelTypeResponse>;

  getModel(
    request: proto_clarifai_api_service_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelResponse>;

  getModelOutputInfo(
    request: proto_clarifai_api_service_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelResponse>;

  listModels(
    request: proto_clarifai_api_service_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelResponse>;

  getResourceCounts(
    request: proto_clarifai_api_service_pb.GetResourceCountsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.GetResourceCountsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.GetResourceCountsResponse>;

  postModelsSearches(
    request: proto_clarifai_api_service_pb.PostModelsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelResponse>;

  postModels(
    request: proto_clarifai_api_service_pb.PostModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelResponse>;

  patchModels(
    request: proto_clarifai_api_service_pb.PatchModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelResponse>;

  patchModelIds(
    request: proto_clarifai_api_service_pb.PatchModelIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelResponse>;

  deleteModel(
    request: proto_clarifai_api_service_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteModels(
    request: proto_clarifai_api_service_pb.DeleteModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchModelCheckConsents(
    request: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelCheckConsentResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelCheckConsentResponse>;

  patchModelToolkits(
    request: proto_clarifai_api_service_pb.PatchModelToolkitsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelToolkitResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelToolkitResponse>;

  patchModelUseCases(
    request: proto_clarifai_api_service_pb.PatchModelUseCasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelUseCaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelUseCaseResponse>;

  patchModelLanguages(
    request: proto_clarifai_api_service_pb.PatchModelLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelLanguageResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelLanguageResponse>;

  listModelInputs(
    request: proto_clarifai_api_service_pb.ListModelInputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputResponse>;

  getModelVersion(
    request: proto_clarifai_api_service_pb.GetModelVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelVersionResponse>;

  listModelVersions(
    request: proto_clarifai_api_service_pb.ListModelVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelVersionResponse>;

  postWorkflowVersionsUnPublish(
    request: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postWorkflowVersionsPublish(
    request: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersionsPublish(
    request: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersionsUnPublish(
    request: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersions(
    request: proto_clarifai_api_service_pb.PostModelVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelResponse>;

  patchModelVersions(
    request: proto_clarifai_api_service_pb.PatchModelVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelVersionResponse>;

  deleteModelVersion(
    request: proto_clarifai_api_service_pb.DeleteModelVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelMigration(
    request: proto_clarifai_api_service_pb.PostModelMigrationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelResponse>;

  putModelVersionExports(
    request: proto_clarifai_api_service_pb.PutModelVersionExportsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;

  getModelVersionExport(
    request: proto_clarifai_api_service_pb.GetModelVersionExportRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;

  getModelVersionMetrics(
    request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelVersionResponse>;

  postModelVersionMetrics(
    request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelVersionResponse>;

  postModelVersionEvaluations(
    request: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;

  listModelVersionEvaluations(
    request: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;

  getModelVersionEvaluation(
    request: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;

  postEvaluations(
    request: proto_clarifai_api_service_pb.PostEvaluationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;

  listEvaluations(
    request: proto_clarifai_api_service_pb.ListEvaluationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;

  getEvaluation(
    request: proto_clarifai_api_service_pb.GetEvaluationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;

  listModelReferences(
    request: proto_clarifai_api_service_pb.ListModelReferencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelReferenceResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelReferenceResponse>;

  getModelVersionInputExample(
    request: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse>;

  listModelVersionInputExamples(
    request: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse>;

  getWorkflow(
    request: proto_clarifai_api_service_pb.GetWorkflowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleWorkflowResponse>;

  listWorkflows(
    request: proto_clarifai_api_service_pb.ListWorkflowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowResponse>;

  postWorkflows(
    request: proto_clarifai_api_service_pb.PostWorkflowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowResponse>;

  patchWorkflows(
    request: proto_clarifai_api_service_pb.PatchWorkflowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowResponse>;

  patchWorkflowIds(
    request: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowResponse>;

  deleteWorkflow(
    request: proto_clarifai_api_service_pb.DeleteWorkflowRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteWorkflows(
    request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postWorkflowResults(
    request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.PostWorkflowResultsResponse>;

  listWorkflowVersions(
    request: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;

  getWorkflowVersion(
    request: proto_clarifai_api_service_pb.GetWorkflowVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleWorkflowVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleWorkflowVersionResponse>;

  deleteWorkflowVersions(
    request: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchWorkflowVersions(
    request: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;

  getKey(
    request: proto_clarifai_api_service_pb.GetKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleKeyResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleKeyResponse>;

  listKeys(
    request: proto_clarifai_api_service_pb.ListKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiKeyResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiKeyResponse>;

  listAppKeys(
    request: proto_clarifai_api_service_pb.ListAppKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiKeyResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiKeyResponse>;

  deleteKey(
    request: proto_clarifai_api_service_pb.DeleteKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postKeys(
    request: proto_clarifai_api_service_pb.PostKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiKeyResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiKeyResponse>;

  patchKeys(
    request: proto_clarifai_api_service_pb.PatchKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiKeyResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiKeyResponse>;

  myScopes(
    request: proto_clarifai_api_service_pb.MyScopesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiScopeResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiScopeResponse>;

  myScopesUser(
    request: proto_clarifai_api_service_pb.MyScopesUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiScopeUserResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiScopeUserResponse>;

  myScopesRoot(
    request: proto_clarifai_api_service_pb.MyScopesRootRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiScopeRootResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiScopeRootResponse>;

  listScopes(
    request: proto_clarifai_api_service_pb.ListScopesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiScopeDepsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiScopeDepsResponse>;

  getApp(
    request: proto_clarifai_api_service_pb.GetAppRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleAppResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleAppResponse>;

  listApps(
    request: proto_clarifai_api_service_pb.ListAppsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAppResponse>;

  deleteApp(
    request: proto_clarifai_api_service_pb.DeleteAppRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postApps(
    request: proto_clarifai_api_service_pb.PostAppsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAppResponse>;

  patchApps(
    request: proto_clarifai_api_service_pb.PatchAppsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAppResponse>;

  patchAppsDetails(
    request: proto_clarifai_api_service_pb.PatchAppsDetailsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAppResponse>;

  patchAppsIds(
    request: proto_clarifai_api_service_pb.PatchAppsIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAppResponse>;

  patchApp(
    request: proto_clarifai_api_service_pb.PatchAppRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleAppResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleAppResponse>;

  postAppsSearches(
    request: proto_clarifai_api_service_pb.PostAppsSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAppResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAppResponse>;

  getUser(
    request: proto_clarifai_api_service_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleUserResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleUserResponse>;

  postValidatePassword(
    request: proto_clarifai_api_service_pb.PostValidatePasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SinglePasswordValidationResponse>;

  getSearch(
    request: proto_clarifai_api_service_pb.GetSearchRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleSearchResponse>;

  listSearches(
    request: proto_clarifai_api_service_pb.ListSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSearchResponse>;

  patchSearches(
    request: proto_clarifai_api_service_pb.PatchSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postSearches(
    request: proto_clarifai_api_service_pb.PostSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postSearchesByID(
    request: proto_clarifai_api_service_pb.PostSearchesByIDRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSearchResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postAnnotationSearchMetrics(
    request: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;

  getAnnotationSearchMetrics(
    request: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;

  listAnnotationSearchMetrics(
    request: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;

  deleteAnnotationSearchMetrics(
    request: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteSearch(
    request: proto_clarifai_api_service_pb.DeleteSearchRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listAnnotationFilters(
    request: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;

  getAnnotationFilter(
    request: proto_clarifai_api_service_pb.GetAnnotationFilterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleAnnotationFilterResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleAnnotationFilterResponse>;

  postAnnotationFilters(
    request: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;

  patchAnnotationFilters(
    request: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;

  deleteAnnotationFilters(
    request: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listStatusCodes(
    request: proto_clarifai_api_service_pb.ListStatusCodesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiStatusCodeResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiStatusCodeResponse>;

  getStatusCode(
    request: proto_clarifai_api_service_pb.GetStatusCodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleStatusCodeResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleStatusCodeResponse>;

  listCollaborators(
    request: proto_clarifai_api_service_pb.ListCollaboratorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;

  postCollaborators(
    request: proto_clarifai_api_service_pb.PostCollaboratorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;

  patchCollaborators(
    request: proto_clarifai_api_service_pb.PatchCollaboratorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;

  deleteCollaborators(
    request: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listCollaborations(
    request: proto_clarifai_api_service_pb.ListCollaborationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCollaborationsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCollaborationsResponse>;

  postAppDuplications(
    request: proto_clarifai_api_service_pb.PostAppDuplicationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;

  listAppDuplications(
    request: proto_clarifai_api_service_pb.ListAppDuplicationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;

  getAppDuplication(
    request: proto_clarifai_api_service_pb.GetAppDuplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleAppDuplicationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleAppDuplicationResponse>;

  postTasks(
    request: proto_clarifai_api_service_pb.PostTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiTaskResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiTaskResponse>;

  getTaskAnnotationCount(
    request: proto_clarifai_api_service_pb.GetTaskCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleTaskCountResponse>;

  getTaskInputCount(
    request: proto_clarifai_api_service_pb.GetTaskCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleTaskCountResponse>;

  getTask(
    request: proto_clarifai_api_service_pb.GetTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleTaskResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleTaskResponse>;

  listTasks(
    request: proto_clarifai_api_service_pb.ListTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiTaskResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiTaskResponse>;

  patchTasks(
    request: proto_clarifai_api_service_pb.PatchTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiTaskResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiTaskResponse>;

  deleteTasks(
    request: proto_clarifai_api_service_pb.DeleteTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postLabelOrders(
    request: proto_clarifai_api_service_pb.PostLabelOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;

  getLabelOrder(
    request: proto_clarifai_api_service_pb.GetLabelOrderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleLabelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleLabelOrderResponse>;

  listLabelOrders(
    request: proto_clarifai_api_service_pb.ListLabelOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;

  patchLabelOrders(
    request: proto_clarifai_api_service_pb.PatchLabelOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;

  deleteLabelOrders(
    request: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postCollectors(
    request: proto_clarifai_api_service_pb.PostCollectorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCollectorResponse>;

  getCollector(
    request: proto_clarifai_api_service_pb.GetCollectorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleCollectorResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleCollectorResponse>;

  listCollectors(
    request: proto_clarifai_api_service_pb.ListCollectorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCollectorResponse>;

  patchCollectors(
    request: proto_clarifai_api_service_pb.PatchCollectorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCollectorResponse>;

  deleteCollectors(
    request: proto_clarifai_api_service_pb.DeleteCollectorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postStatValues(
    request: proto_clarifai_api_service_pb.PostStatValuesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiStatValueResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiStatValueResponse>;

  postStatValuesAggregate(
    request: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiStatValueAggregateResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiStatValueAggregateResponse>;

  getModule(
    request: proto_clarifai_api_service_pb.GetModuleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModuleResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModuleResponse>;

  listModules(
    request: proto_clarifai_api_service_pb.ListModulesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModuleResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModuleResponse>;

  postModules(
    request: proto_clarifai_api_service_pb.PostModulesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModuleResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModuleResponse>;

  patchModules(
    request: proto_clarifai_api_service_pb.PatchModulesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModuleResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModuleResponse>;

  deleteModules(
    request: proto_clarifai_api_service_pb.DeleteModulesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getModuleVersion(
    request: proto_clarifai_api_service_pb.GetModuleVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModuleVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModuleVersionResponse>;

  listModuleVersions(
    request: proto_clarifai_api_service_pb.ListModuleVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;

  postModuleVersions(
    request: proto_clarifai_api_service_pb.PostModuleVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;

  patchModuleVersions(
    request: proto_clarifai_api_service_pb.PatchModuleVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;

  deleteModuleVersions(
    request: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getModuleVersionUsageCount(
    request: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse>;

  getInstalledModuleVersion(
    request: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse>;

  listInstalledModuleVersions(
    request: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;

  postInstalledModuleVersions(
    request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;

  deleteInstalledModuleVersions(
    request: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postInstalledModuleVersionsKey(
    request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleKeyResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleKeyResponse>;

  postBulkOperations(
    request: proto_clarifai_api_service_pb.PostBulkOperationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;

  listBulkOperations(
    request: proto_clarifai_api_service_pb.ListBulkOperationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;

  getBulkOperation(
    request: proto_clarifai_api_service_pb.GetBulkOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleBulkOperationsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleBulkOperationsResponse>;

  cancelBulkOperations(
    request: proto_clarifai_api_service_pb.CancelBulkOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;

  deleteBulkOperations(
    request: proto_clarifai_api_service_pb.DeleteBulkOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listNextTaskAssignments(
    request: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputResponse>;

  putTaskAssignments(
    request: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiTaskAssignmentResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiTaskAssignmentResponse>;

  listInputsAddJobs(
    request: proto_clarifai_api_service_pb.ListInputsAddJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;

  getInputsAddJob(
    request: proto_clarifai_api_service_pb.GetInputsAddJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;

  cancelInputsAddJob(
    request: proto_clarifai_api_service_pb.CancelInputsAddJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;

  postUploads(
    request: proto_clarifai_api_service_pb.PostUploadsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiUploadResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiUploadResponse>;

  putUploadContentParts(
    request: proto_clarifai_api_service_pb.PutUploadContentPartsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleUploadResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleUploadResponse>;

  getUpload(
    request: proto_clarifai_api_service_pb.GetUploadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleUploadResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleUploadResponse>;

  listUploads(
    request: proto_clarifai_api_service_pb.ListUploadsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiUploadResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiUploadResponse>;

  deleteUploads(
    request: proto_clarifai_api_service_pb.DeleteUploadsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postInputsDataSources(
    request: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;

  getInputsExtractionJob(
    request: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse>;

  listInputsExtractionJobs(
    request: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;

  cancelInputsExtractionJobs(
    request: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;

  postInputsUploads(
    request: proto_clarifai_api_service_pb.PostInputsUploadsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;

  listPipelineVersionRuns(
    request: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;

  getRunner(
    request: proto_clarifai_api_service_pb.GetRunnerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleRunnerResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleRunnerResponse>;

  listRunners(
    request: proto_clarifai_api_service_pb.ListRunnersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiRunnerResponse>;

  postRunners(
    request: proto_clarifai_api_service_pb.PostRunnersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiRunnerResponse>;

  patchRunners(
    request: proto_clarifai_api_service_pb.PatchRunnersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiRunnerResponse>;

  deleteRunners(
    request: proto_clarifai_api_service_pb.DeleteRunnersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listRunnerItems(
    request: proto_clarifai_api_service_pb.ListRunnerItemsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiRunnerItemResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiRunnerItemResponse>;

  postRunnerItemOutputs(
    request: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse>;

  postModelVersionsTrainingTimeEstimate(
    request: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse>;

  listCloudProviders(
    request: proto_clarifai_api_service_pb.ListCloudProvidersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCloudProviderResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCloudProviderResponse>;

  listCloudRegions(
    request: proto_clarifai_api_service_pb.ListCloudRegionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiCloudRegionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiCloudRegionResponse>;

  listInstanceTypes(
    request: proto_clarifai_api_service_pb.ListInstanceTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiInstanceTypeResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiInstanceTypeResponse>;

  getComputeCluster(
    request: proto_clarifai_api_service_pb.GetComputeClusterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleComputeClusterResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleComputeClusterResponse>;

  listComputeClusters(
    request: proto_clarifai_api_service_pb.ListComputeClustersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiComputeClusterResponse>;

  postComputeClusters(
    request: proto_clarifai_api_service_pb.PostComputeClustersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiComputeClusterResponse>;

  deleteComputeClusters(
    request: proto_clarifai_api_service_pb.DeleteComputeClustersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getNodepool(
    request: proto_clarifai_api_service_pb.GetNodepoolRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleNodepoolResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleNodepoolResponse>;

  listNodepools(
    request: proto_clarifai_api_service_pb.ListNodepoolsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiNodepoolResponse>;

  postNodepools(
    request: proto_clarifai_api_service_pb.PostNodepoolsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiNodepoolResponse>;

  patchNodepools(
    request: proto_clarifai_api_service_pb.PatchNodepoolsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiNodepoolResponse>;

  deleteNodepools(
    request: proto_clarifai_api_service_pb.DeleteNodepoolsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getDeployment(
    request: proto_clarifai_api_service_pb.GetDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleDeploymentResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleDeploymentResponse>;

  listDeployments(
    request: proto_clarifai_api_service_pb.ListDeploymentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDeploymentResponse>;

  postDeployments(
    request: proto_clarifai_api_service_pb.PostDeploymentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDeploymentResponse>;

  patchDeployments(
    request: proto_clarifai_api_service_pb.PatchDeploymentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiDeploymentResponse>;

  deleteDeployments(
    request: proto_clarifai_api_service_pb.DeleteDeploymentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postAuditLogSearches(
    request: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiAuditLogEntryResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiAuditLogEntryResponse>;

  listWorkflowEvaluationTemplates(
    request: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse>;

  postLogEntries(
    request: proto_clarifai_api_service_pb.PostLogEntriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  listLogEntries(
    request: proto_clarifai_api_service_pb.ListLogEntriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiLogEntryResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiLogEntryResponse>;

  streamLogEntries(
    request: proto_clarifai_api_service_pb.StreamLogEntriesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiLogEntryResponse>;

  postComputePlaneMetrics(
    request: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  postWorkflowVersionEvaluations(
    request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;

  getWorkflowVersionEvaluation(
    request: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse>;

  listWorkflowVersionEvaluations(
    request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;

  patchWorkflowVersionEvaluations(
    request: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;

  listWorkflowVersionEvaluationData(
    request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;

  postWorkflowVersionEvaluationData(
    request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;

  postPipelines(
    request: proto_clarifai_api_service_pb.PostPipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineResponse>;

  getPipeline(
    request: proto_clarifai_api_service_pb.GetPipelineRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SinglePipelineResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SinglePipelineResponse>;

  listPipelines(
    request: proto_clarifai_api_service_pb.ListPipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineResponse>;

  patchPipelines(
    request: proto_clarifai_api_service_pb.PatchPipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineResponse>;

  deletePipelines(
    request: proto_clarifai_api_service_pb.DeletePipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getPipelineVersion(
    request: proto_clarifai_api_service_pb.GetPipelineVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SinglePipelineVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SinglePipelineVersionResponse>;

  listPipelineVersions(
    request: proto_clarifai_api_service_pb.ListPipelineVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;

  patchPipelineVersions(
    request: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;

  deletePipelineVersions(
    request: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_status_status_pb.BaseResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_status_status_pb.BaseResponse>;

  getPipelineVersionRun(
    request: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse>;

  postPipelineVersionRuns(
    request: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;

  patchPipelineVersionRuns(
    request: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;

  postPipelineSteps(
    request: proto_clarifai_api_service_pb.PostPipelineStepsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineStepResponse>;

  getPipelineStep(
    request: proto_clarifai_api_service_pb.GetPipelineStepRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SinglePipelineStepResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SinglePipelineStepResponse>;

  listPipelineSteps(
    request: proto_clarifai_api_service_pb.ListPipelineStepsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineStepResponse>;

  listPipelineStepVersions(
    request: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse>;

  getPipelineStepVersion(
    request: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse>;

  getSecret(
    request: proto_clarifai_api_service_pb.GetSecretRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.SingleSecretResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.SingleSecretResponse>;

  listSecrets(
    request: proto_clarifai_api_service_pb.ListSecretsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSecretResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSecretResponse>;

  postSecrets(
    request: proto_clarifai_api_service_pb.PostSecretsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSecretResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSecretResponse>;

  patchSecrets(
    request: proto_clarifai_api_service_pb.PatchSecretsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSecretResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSecretResponse>;

  deleteSecrets(
    request: proto_clarifai_api_service_pb.DeleteSecretsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiSecretResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiSecretResponse>;

  postMetricsQuery(
    request: proto_clarifai_api_service_pb.PostMetricsQueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MetricsQueryResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MetricsQueryResponse>;

  listMetricLabels(
    request: proto_clarifai_api_service_pb.ListMetricLabelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_clarifai_api_service_pb.MultiMetricLabelsResponse) => void
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiMetricLabelsResponse>;

}

export class V2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listConceptRelations(
    request: proto_clarifai_api_service_pb.ListConceptRelationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptRelationResponse>;

  postConceptRelations(
    request: proto_clarifai_api_service_pb.PostConceptRelationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptRelationResponse>;

  deleteConceptRelations(
    request: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getConceptCounts(
    request: proto_clarifai_api_service_pb.GetConceptCountsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptCountResponse>;

  getConcept(
    request: proto_clarifai_api_service_pb.GetConceptRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleConceptResponse>;

  listConcepts(
    request: proto_clarifai_api_service_pb.ListConceptsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptResponse>;

  listModelConcepts(
    request: proto_clarifai_api_service_pb.ListModelConceptsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptResponse>;

  postConceptsSearches(
    request: proto_clarifai_api_service_pb.PostConceptsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptResponse>;

  postConcepts(
    request: proto_clarifai_api_service_pb.PostConceptsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptResponse>;

  patchConcepts(
    request: proto_clarifai_api_service_pb.PatchConceptsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptResponse>;

  getConceptLanguage(
    request: proto_clarifai_api_service_pb.GetConceptLanguageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleConceptLanguageResponse>;

  listConceptLanguages(
    request: proto_clarifai_api_service_pb.ListConceptLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;

  postConceptLanguages(
    request: proto_clarifai_api_service_pb.PostConceptLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;

  patchConceptLanguages(
    request: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;

  listKnowledgeGraphs(
    request: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;

  postKnowledgeGraphs(
    request: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;

  getAnnotation(
    request: proto_clarifai_api_service_pb.GetAnnotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleAnnotationResponse>;

  listAnnotations(
    request: proto_clarifai_api_service_pb.ListAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationResponse>;

  postAnnotations(
    request: proto_clarifai_api_service_pb.PostAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationResponse>;

  patchAnnotations(
    request: proto_clarifai_api_service_pb.PatchAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationResponse>;

  patchAnnotationsStatus(
    request: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse>;

  deleteAnnotation(
    request: proto_clarifai_api_service_pb.DeleteAnnotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteAnnotations(
    request: proto_clarifai_api_service_pb.DeleteAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listAnnotationTracks(
    request: proto_clarifai_api_service_pb.ListAnnotationTracksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;

  postAnnotationTracks(
    request: proto_clarifai_api_service_pb.PostAnnotationTracksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;

  patchAnnotationTracks(
    request: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;

  deleteAnnotationTracks(
    request: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchAnnotationsSearches(
    request: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postAnnotationsSearches(
    request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSearchResponse>;

  listAnnotationWorkers(
    request: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkerResponse>;

  getInputCount(
    request: proto_clarifai_api_service_pb.GetInputCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleInputCountResponse>;

  streamInputs(
    request: proto_clarifai_api_service_pb.StreamInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputResponse>;

  getInputSamples(
    request: proto_clarifai_api_service_pb.GetInputSamplesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputAnnotationResponse>;

  getInput(
    request: proto_clarifai_api_service_pb.GetInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleInputResponse>;

  getInputVideoManifest(
    request: proto_clarifai_api_service_pb.GetVideoManifestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.GetVideoManifestResponse>;

  listInputs(
    request: proto_clarifai_api_service_pb.ListInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputResponse>;

  postInputs(
    request: proto_clarifai_api_service_pb.PostInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputResponse>;

  patchInputs(
    request: proto_clarifai_api_service_pb.PatchInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputResponse>;

  deleteInput(
    request: proto_clarifai_api_service_pb.DeleteInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteInputs(
    request: proto_clarifai_api_service_pb.DeleteInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchInputsSearches(
    request: proto_clarifai_api_service_pb.PatchInputsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postInputsSearches(
    request: proto_clarifai_api_service_pb.PostInputsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postModelOutputs(
    request: proto_clarifai_api_service_pb.PostModelOutputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiOutputResponse>;

  generateModelOutputs(
    request: proto_clarifai_api_service_pb.PostModelOutputsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiOutputResponse>;

  listDatasets(
    request: proto_clarifai_api_service_pb.ListDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetResponse>;

  getDataset(
    request: proto_clarifai_api_service_pb.GetDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleDatasetResponse>;

  postDatasets(
    request: proto_clarifai_api_service_pb.PostDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetResponse>;

  patchDatasets(
    request: proto_clarifai_api_service_pb.PatchDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetResponse>;

  deleteDatasets(
    request: proto_clarifai_api_service_pb.DeleteDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listDatasetInputs(
    request: proto_clarifai_api_service_pb.ListDatasetInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetInputResponse>;

  getDatasetInput(
    request: proto_clarifai_api_service_pb.GetDatasetInputRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleDatasetInputResponse>;

  postDatasetInputs(
    request: proto_clarifai_api_service_pb.PostDatasetInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetInputResponse>;

  deleteDatasetInputs(
    request: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listDatasetVersions(
    request: proto_clarifai_api_service_pb.ListDatasetVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;

  getDatasetVersion(
    request: proto_clarifai_api_service_pb.GetDatasetVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleDatasetVersionResponse>;

  listDatasetVersionMetricsGroups(
    request: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse>;

  postDatasetVersions(
    request: proto_clarifai_api_service_pb.PostDatasetVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;

  patchDatasetVersions(
    request: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;

  deleteDatasetVersions(
    request: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  putDatasetVersionExports(
    request: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse>;

  getModelType(
    request: proto_clarifai_api_service_pb.GetModelTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelTypeResponse>;

  listOpenSourceLicenses(
    request: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse>;

  listModelTypes(
    request: proto_clarifai_api_service_pb.ListModelTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelTypeResponse>;

  getModel(
    request: proto_clarifai_api_service_pb.GetModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelResponse>;

  getModelOutputInfo(
    request: proto_clarifai_api_service_pb.GetModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelResponse>;

  listModels(
    request: proto_clarifai_api_service_pb.ListModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelResponse>;

  getResourceCounts(
    request: proto_clarifai_api_service_pb.GetResourceCountsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.GetResourceCountsResponse>;

  postModelsSearches(
    request: proto_clarifai_api_service_pb.PostModelsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelResponse>;

  postModels(
    request: proto_clarifai_api_service_pb.PostModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelResponse>;

  patchModels(
    request: proto_clarifai_api_service_pb.PatchModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelResponse>;

  patchModelIds(
    request: proto_clarifai_api_service_pb.PatchModelIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelResponse>;

  deleteModel(
    request: proto_clarifai_api_service_pb.DeleteModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteModels(
    request: proto_clarifai_api_service_pb.DeleteModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchModelCheckConsents(
    request: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelCheckConsentResponse>;

  patchModelToolkits(
    request: proto_clarifai_api_service_pb.PatchModelToolkitsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelToolkitResponse>;

  patchModelUseCases(
    request: proto_clarifai_api_service_pb.PatchModelUseCasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelUseCaseResponse>;

  patchModelLanguages(
    request: proto_clarifai_api_service_pb.PatchModelLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelLanguageResponse>;

  listModelInputs(
    request: proto_clarifai_api_service_pb.ListModelInputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputResponse>;

  getModelVersion(
    request: proto_clarifai_api_service_pb.GetModelVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelVersionResponse>;

  listModelVersions(
    request: proto_clarifai_api_service_pb.ListModelVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelVersionResponse>;

  postWorkflowVersionsUnPublish(
    request: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postWorkflowVersionsPublish(
    request: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersionsPublish(
    request: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersionsUnPublish(
    request: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelVersions(
    request: proto_clarifai_api_service_pb.PostModelVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelResponse>;

  patchModelVersions(
    request: proto_clarifai_api_service_pb.PatchModelVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelVersionResponse>;

  deleteModelVersion(
    request: proto_clarifai_api_service_pb.DeleteModelVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postModelMigration(
    request: proto_clarifai_api_service_pb.PostModelMigrationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelResponse>;

  putModelVersionExports(
    request: proto_clarifai_api_service_pb.PutModelVersionExportsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;

  getModelVersionExport(
    request: proto_clarifai_api_service_pb.GetModelVersionExportRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;

  getModelVersionMetrics(
    request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelVersionResponse>;

  postModelVersionMetrics(
    request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelVersionResponse>;

  postModelVersionEvaluations(
    request: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;

  listModelVersionEvaluations(
    request: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;

  getModelVersionEvaluation(
    request: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;

  postEvaluations(
    request: proto_clarifai_api_service_pb.PostEvaluationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;

  listEvaluations(
    request: proto_clarifai_api_service_pb.ListEvaluationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;

  getEvaluation(
    request: proto_clarifai_api_service_pb.GetEvaluationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;

  listModelReferences(
    request: proto_clarifai_api_service_pb.ListModelReferencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelReferenceResponse>;

  getModelVersionInputExample(
    request: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse>;

  listModelVersionInputExamples(
    request: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse>;

  getWorkflow(
    request: proto_clarifai_api_service_pb.GetWorkflowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleWorkflowResponse>;

  listWorkflows(
    request: proto_clarifai_api_service_pb.ListWorkflowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowResponse>;

  postWorkflows(
    request: proto_clarifai_api_service_pb.PostWorkflowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowResponse>;

  patchWorkflows(
    request: proto_clarifai_api_service_pb.PatchWorkflowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowResponse>;

  patchWorkflowIds(
    request: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowResponse>;

  deleteWorkflow(
    request: proto_clarifai_api_service_pb.DeleteWorkflowRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteWorkflows(
    request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postWorkflowResults(
    request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.PostWorkflowResultsResponse>;

  listWorkflowVersions(
    request: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;

  getWorkflowVersion(
    request: proto_clarifai_api_service_pb.GetWorkflowVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleWorkflowVersionResponse>;

  deleteWorkflowVersions(
    request: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  patchWorkflowVersions(
    request: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;

  getKey(
    request: proto_clarifai_api_service_pb.GetKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleKeyResponse>;

  listKeys(
    request: proto_clarifai_api_service_pb.ListKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiKeyResponse>;

  listAppKeys(
    request: proto_clarifai_api_service_pb.ListAppKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiKeyResponse>;

  deleteKey(
    request: proto_clarifai_api_service_pb.DeleteKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postKeys(
    request: proto_clarifai_api_service_pb.PostKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiKeyResponse>;

  patchKeys(
    request: proto_clarifai_api_service_pb.PatchKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiKeyResponse>;

  myScopes(
    request: proto_clarifai_api_service_pb.MyScopesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiScopeResponse>;

  myScopesUser(
    request: proto_clarifai_api_service_pb.MyScopesUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiScopeUserResponse>;

  myScopesRoot(
    request: proto_clarifai_api_service_pb.MyScopesRootRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiScopeRootResponse>;

  listScopes(
    request: proto_clarifai_api_service_pb.ListScopesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiScopeDepsResponse>;

  getApp(
    request: proto_clarifai_api_service_pb.GetAppRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleAppResponse>;

  listApps(
    request: proto_clarifai_api_service_pb.ListAppsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAppResponse>;

  deleteApp(
    request: proto_clarifai_api_service_pb.DeleteAppRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postApps(
    request: proto_clarifai_api_service_pb.PostAppsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAppResponse>;

  patchApps(
    request: proto_clarifai_api_service_pb.PatchAppsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAppResponse>;

  patchAppsDetails(
    request: proto_clarifai_api_service_pb.PatchAppsDetailsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAppResponse>;

  patchAppsIds(
    request: proto_clarifai_api_service_pb.PatchAppsIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAppResponse>;

  patchApp(
    request: proto_clarifai_api_service_pb.PatchAppRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleAppResponse>;

  postAppsSearches(
    request: proto_clarifai_api_service_pb.PostAppsSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAppResponse>;

  getUser(
    request: proto_clarifai_api_service_pb.GetUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleUserResponse>;

  postValidatePassword(
    request: proto_clarifai_api_service_pb.PostValidatePasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SinglePasswordValidationResponse>;

  getSearch(
    request: proto_clarifai_api_service_pb.GetSearchRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleSearchResponse>;

  listSearches(
    request: proto_clarifai_api_service_pb.ListSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSearchResponse>;

  patchSearches(
    request: proto_clarifai_api_service_pb.PatchSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postSearches(
    request: proto_clarifai_api_service_pb.PostSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postSearchesByID(
    request: proto_clarifai_api_service_pb.PostSearchesByIDRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSearchResponse>;

  postAnnotationSearchMetrics(
    request: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;

  getAnnotationSearchMetrics(
    request: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;

  listAnnotationSearchMetrics(
    request: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;

  deleteAnnotationSearchMetrics(
    request: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  deleteSearch(
    request: proto_clarifai_api_service_pb.DeleteSearchRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listAnnotationFilters(
    request: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;

  getAnnotationFilter(
    request: proto_clarifai_api_service_pb.GetAnnotationFilterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleAnnotationFilterResponse>;

  postAnnotationFilters(
    request: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;

  patchAnnotationFilters(
    request: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;

  deleteAnnotationFilters(
    request: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listStatusCodes(
    request: proto_clarifai_api_service_pb.ListStatusCodesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiStatusCodeResponse>;

  getStatusCode(
    request: proto_clarifai_api_service_pb.GetStatusCodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleStatusCodeResponse>;

  listCollaborators(
    request: proto_clarifai_api_service_pb.ListCollaboratorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;

  postCollaborators(
    request: proto_clarifai_api_service_pb.PostCollaboratorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;

  patchCollaborators(
    request: proto_clarifai_api_service_pb.PatchCollaboratorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;

  deleteCollaborators(
    request: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listCollaborations(
    request: proto_clarifai_api_service_pb.ListCollaborationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCollaborationsResponse>;

  postAppDuplications(
    request: proto_clarifai_api_service_pb.PostAppDuplicationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;

  listAppDuplications(
    request: proto_clarifai_api_service_pb.ListAppDuplicationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;

  getAppDuplication(
    request: proto_clarifai_api_service_pb.GetAppDuplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleAppDuplicationResponse>;

  postTasks(
    request: proto_clarifai_api_service_pb.PostTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiTaskResponse>;

  getTaskAnnotationCount(
    request: proto_clarifai_api_service_pb.GetTaskCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleTaskCountResponse>;

  getTaskInputCount(
    request: proto_clarifai_api_service_pb.GetTaskCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleTaskCountResponse>;

  getTask(
    request: proto_clarifai_api_service_pb.GetTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleTaskResponse>;

  listTasks(
    request: proto_clarifai_api_service_pb.ListTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiTaskResponse>;

  patchTasks(
    request: proto_clarifai_api_service_pb.PatchTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiTaskResponse>;

  deleteTasks(
    request: proto_clarifai_api_service_pb.DeleteTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postLabelOrders(
    request: proto_clarifai_api_service_pb.PostLabelOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;

  getLabelOrder(
    request: proto_clarifai_api_service_pb.GetLabelOrderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleLabelOrderResponse>;

  listLabelOrders(
    request: proto_clarifai_api_service_pb.ListLabelOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;

  patchLabelOrders(
    request: proto_clarifai_api_service_pb.PatchLabelOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;

  deleteLabelOrders(
    request: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postCollectors(
    request: proto_clarifai_api_service_pb.PostCollectorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCollectorResponse>;

  getCollector(
    request: proto_clarifai_api_service_pb.GetCollectorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleCollectorResponse>;

  listCollectors(
    request: proto_clarifai_api_service_pb.ListCollectorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCollectorResponse>;

  patchCollectors(
    request: proto_clarifai_api_service_pb.PatchCollectorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCollectorResponse>;

  deleteCollectors(
    request: proto_clarifai_api_service_pb.DeleteCollectorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postStatValues(
    request: proto_clarifai_api_service_pb.PostStatValuesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiStatValueResponse>;

  postStatValuesAggregate(
    request: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiStatValueAggregateResponse>;

  getModule(
    request: proto_clarifai_api_service_pb.GetModuleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModuleResponse>;

  listModules(
    request: proto_clarifai_api_service_pb.ListModulesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModuleResponse>;

  postModules(
    request: proto_clarifai_api_service_pb.PostModulesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModuleResponse>;

  patchModules(
    request: proto_clarifai_api_service_pb.PatchModulesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModuleResponse>;

  deleteModules(
    request: proto_clarifai_api_service_pb.DeleteModulesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getModuleVersion(
    request: proto_clarifai_api_service_pb.GetModuleVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModuleVersionResponse>;

  listModuleVersions(
    request: proto_clarifai_api_service_pb.ListModuleVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;

  postModuleVersions(
    request: proto_clarifai_api_service_pb.PostModuleVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;

  patchModuleVersions(
    request: proto_clarifai_api_service_pb.PatchModuleVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;

  deleteModuleVersions(
    request: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getModuleVersionUsageCount(
    request: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse>;

  getInstalledModuleVersion(
    request: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse>;

  listInstalledModuleVersions(
    request: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;

  postInstalledModuleVersions(
    request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;

  deleteInstalledModuleVersions(
    request: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postInstalledModuleVersionsKey(
    request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleKeyResponse>;

  postBulkOperations(
    request: proto_clarifai_api_service_pb.PostBulkOperationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;

  listBulkOperations(
    request: proto_clarifai_api_service_pb.ListBulkOperationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;

  getBulkOperation(
    request: proto_clarifai_api_service_pb.GetBulkOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleBulkOperationsResponse>;

  cancelBulkOperations(
    request: proto_clarifai_api_service_pb.CancelBulkOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;

  deleteBulkOperations(
    request: proto_clarifai_api_service_pb.DeleteBulkOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listNextTaskAssignments(
    request: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputResponse>;

  putTaskAssignments(
    request: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiTaskAssignmentResponse>;

  listInputsAddJobs(
    request: proto_clarifai_api_service_pb.ListInputsAddJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;

  getInputsAddJob(
    request: proto_clarifai_api_service_pb.GetInputsAddJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;

  cancelInputsAddJob(
    request: proto_clarifai_api_service_pb.CancelInputsAddJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;

  postUploads(
    request: proto_clarifai_api_service_pb.PostUploadsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiUploadResponse>;

  putUploadContentParts(
    request: proto_clarifai_api_service_pb.PutUploadContentPartsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleUploadResponse>;

  getUpload(
    request: proto_clarifai_api_service_pb.GetUploadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleUploadResponse>;

  listUploads(
    request: proto_clarifai_api_service_pb.ListUploadsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiUploadResponse>;

  deleteUploads(
    request: proto_clarifai_api_service_pb.DeleteUploadsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postInputsDataSources(
    request: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;

  getInputsExtractionJob(
    request: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse>;

  listInputsExtractionJobs(
    request: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;

  cancelInputsExtractionJobs(
    request: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;

  postInputsUploads(
    request: proto_clarifai_api_service_pb.PostInputsUploadsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;

  listPipelineVersionRuns(
    request: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;

  getRunner(
    request: proto_clarifai_api_service_pb.GetRunnerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleRunnerResponse>;

  listRunners(
    request: proto_clarifai_api_service_pb.ListRunnersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiRunnerResponse>;

  postRunners(
    request: proto_clarifai_api_service_pb.PostRunnersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiRunnerResponse>;

  patchRunners(
    request: proto_clarifai_api_service_pb.PatchRunnersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiRunnerResponse>;

  deleteRunners(
    request: proto_clarifai_api_service_pb.DeleteRunnersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listRunnerItems(
    request: proto_clarifai_api_service_pb.ListRunnerItemsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiRunnerItemResponse>;

  postRunnerItemOutputs(
    request: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse>;

  postModelVersionsTrainingTimeEstimate(
    request: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse>;

  listCloudProviders(
    request: proto_clarifai_api_service_pb.ListCloudProvidersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCloudProviderResponse>;

  listCloudRegions(
    request: proto_clarifai_api_service_pb.ListCloudRegionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiCloudRegionResponse>;

  listInstanceTypes(
    request: proto_clarifai_api_service_pb.ListInstanceTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiInstanceTypeResponse>;

  getComputeCluster(
    request: proto_clarifai_api_service_pb.GetComputeClusterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleComputeClusterResponse>;

  listComputeClusters(
    request: proto_clarifai_api_service_pb.ListComputeClustersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiComputeClusterResponse>;

  postComputeClusters(
    request: proto_clarifai_api_service_pb.PostComputeClustersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiComputeClusterResponse>;

  deleteComputeClusters(
    request: proto_clarifai_api_service_pb.DeleteComputeClustersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getNodepool(
    request: proto_clarifai_api_service_pb.GetNodepoolRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleNodepoolResponse>;

  listNodepools(
    request: proto_clarifai_api_service_pb.ListNodepoolsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiNodepoolResponse>;

  postNodepools(
    request: proto_clarifai_api_service_pb.PostNodepoolsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiNodepoolResponse>;

  patchNodepools(
    request: proto_clarifai_api_service_pb.PatchNodepoolsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiNodepoolResponse>;

  deleteNodepools(
    request: proto_clarifai_api_service_pb.DeleteNodepoolsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getDeployment(
    request: proto_clarifai_api_service_pb.GetDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleDeploymentResponse>;

  listDeployments(
    request: proto_clarifai_api_service_pb.ListDeploymentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDeploymentResponse>;

  postDeployments(
    request: proto_clarifai_api_service_pb.PostDeploymentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDeploymentResponse>;

  patchDeployments(
    request: proto_clarifai_api_service_pb.PatchDeploymentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiDeploymentResponse>;

  deleteDeployments(
    request: proto_clarifai_api_service_pb.DeleteDeploymentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postAuditLogSearches(
    request: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiAuditLogEntryResponse>;

  listWorkflowEvaluationTemplates(
    request: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse>;

  postLogEntries(
    request: proto_clarifai_api_service_pb.PostLogEntriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  listLogEntries(
    request: proto_clarifai_api_service_pb.ListLogEntriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiLogEntryResponse>;

  streamLogEntries(
    request: proto_clarifai_api_service_pb.StreamLogEntriesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_clarifai_api_service_pb.MultiLogEntryResponse>;

  postComputePlaneMetrics(
    request: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  postWorkflowVersionEvaluations(
    request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;

  getWorkflowVersionEvaluation(
    request: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse>;

  listWorkflowVersionEvaluations(
    request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;

  patchWorkflowVersionEvaluations(
    request: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;

  listWorkflowVersionEvaluationData(
    request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;

  postWorkflowVersionEvaluationData(
    request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;

  postPipelines(
    request: proto_clarifai_api_service_pb.PostPipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineResponse>;

  getPipeline(
    request: proto_clarifai_api_service_pb.GetPipelineRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SinglePipelineResponse>;

  listPipelines(
    request: proto_clarifai_api_service_pb.ListPipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineResponse>;

  patchPipelines(
    request: proto_clarifai_api_service_pb.PatchPipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineResponse>;

  deletePipelines(
    request: proto_clarifai_api_service_pb.DeletePipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getPipelineVersion(
    request: proto_clarifai_api_service_pb.GetPipelineVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SinglePipelineVersionResponse>;

  listPipelineVersions(
    request: proto_clarifai_api_service_pb.ListPipelineVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;

  patchPipelineVersions(
    request: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;

  deletePipelineVersions(
    request: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_status_status_pb.BaseResponse>;

  getPipelineVersionRun(
    request: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse>;

  postPipelineVersionRuns(
    request: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;

  patchPipelineVersionRuns(
    request: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;

  postPipelineSteps(
    request: proto_clarifai_api_service_pb.PostPipelineStepsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineStepResponse>;

  getPipelineStep(
    request: proto_clarifai_api_service_pb.GetPipelineStepRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SinglePipelineStepResponse>;

  listPipelineSteps(
    request: proto_clarifai_api_service_pb.ListPipelineStepsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineStepResponse>;

  listPipelineStepVersions(
    request: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse>;

  getPipelineStepVersion(
    request: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse>;

  getSecret(
    request: proto_clarifai_api_service_pb.GetSecretRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.SingleSecretResponse>;

  listSecrets(
    request: proto_clarifai_api_service_pb.ListSecretsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSecretResponse>;

  postSecrets(
    request: proto_clarifai_api_service_pb.PostSecretsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSecretResponse>;

  patchSecrets(
    request: proto_clarifai_api_service_pb.PatchSecretsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSecretResponse>;

  deleteSecrets(
    request: proto_clarifai_api_service_pb.DeleteSecretsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiSecretResponse>;

  postMetricsQuery(
    request: proto_clarifai_api_service_pb.PostMetricsQueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MetricsQueryResponse>;

  listMetricLabels(
    request: proto_clarifai_api_service_pb.ListMetricLabelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_clarifai_api_service_pb.MultiMetricLabelsResponse>;

}

