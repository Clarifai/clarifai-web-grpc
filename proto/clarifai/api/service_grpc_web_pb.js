/**
 * @fileoverview gRPC-Web generated client stub for clarifai.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_clarifai_api_resources_pb = require('../../../proto/clarifai/api/resources_pb.js')

var proto_clarifai_api_status_status_pb = require('../../../proto/clarifai/api/status/status_pb.js')

var proto_clarifai_api_utils_extensions_pb = require('../../../proto/clarifai/api/utils/extensions_pb.js')

var proto_clarifai_auth_scope_scope_pb = require('../../../proto/clarifai/auth/scope/scope_pb.js')

var proto_clarifai_auth_util_extension_pb = require('../../../proto/clarifai/auth/util/extension_pb.js')

var proto_clarifai_commands_commands_pb = require('../../../proto/clarifai/commands/commands_pb.js')

var proto_clarifai_api_status_status_code_pb = require('../../../proto/clarifai/api/status/status_code_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.clarifai = {};
proto.clarifai.api = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.clarifai.api.V2Client =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.clarifai.api.V2PromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.TestMessage,
 *   !proto.clarifai.api.TestMessage>}
 */
const methodDescriptor_V2_Echo = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/Echo',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.TestMessage,
  proto.clarifai.api.TestMessage,
  /**
   * @param {!proto.clarifai.api.TestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.TestMessage.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.TestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.TestMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.TestMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/Echo',
      request,
      metadata || {},
      methodDescriptor_V2_Echo,
      callback);
};


/**
 * @param {!proto.clarifai.api.TestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.TestMessage>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/Echo',
      request,
      metadata || {},
      methodDescriptor_V2_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListConceptRelationsRequest,
 *   !proto.clarifai.api.MultiConceptRelationResponse>}
 */
const methodDescriptor_V2_ListConceptRelations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListConceptRelations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListConceptRelationsRequest,
  proto.clarifai.api.MultiConceptRelationResponse,
  /**
   * @param {!proto.clarifai.api.ListConceptRelationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptRelationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListConceptRelationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptRelationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptRelationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listConceptRelations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListConceptRelations',
      request,
      metadata || {},
      methodDescriptor_V2_ListConceptRelations,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListConceptRelationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptRelationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listConceptRelations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListConceptRelations',
      request,
      metadata || {},
      methodDescriptor_V2_ListConceptRelations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostConceptRelationsRequest,
 *   !proto.clarifai.api.MultiConceptRelationResponse>}
 */
const methodDescriptor_V2_PostConceptRelations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostConceptRelations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostConceptRelationsRequest,
  proto.clarifai.api.MultiConceptRelationResponse,
  /**
   * @param {!proto.clarifai.api.PostConceptRelationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptRelationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostConceptRelationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptRelationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptRelationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postConceptRelations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptRelations',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptRelations,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostConceptRelationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptRelationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postConceptRelations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptRelations',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptRelations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteConceptRelationsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteConceptRelations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteConceptRelations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteConceptRelationsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteConceptRelationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteConceptRelationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteConceptRelations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteConceptRelations',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteConceptRelations,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteConceptRelationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteConceptRelations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteConceptRelations',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteConceptRelations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetConceptCountsRequest,
 *   !proto.clarifai.api.MultiConceptCountResponse>}
 */
const methodDescriptor_V2_GetConceptCounts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetConceptCounts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetConceptCountsRequest,
  proto.clarifai.api.MultiConceptCountResponse,
  /**
   * @param {!proto.clarifai.api.GetConceptCountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptCountResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetConceptCountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getConceptCounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetConceptCounts',
      request,
      metadata || {},
      methodDescriptor_V2_GetConceptCounts,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetConceptCountsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptCountResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getConceptCounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetConceptCounts',
      request,
      metadata || {},
      methodDescriptor_V2_GetConceptCounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetConceptRequest,
 *   !proto.clarifai.api.SingleConceptResponse>}
 */
const methodDescriptor_V2_GetConcept = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetConcept',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetConceptRequest,
  proto.clarifai.api.SingleConceptResponse,
  /**
   * @param {!proto.clarifai.api.GetConceptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleConceptResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetConceptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleConceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleConceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getConcept =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetConcept',
      request,
      metadata || {},
      methodDescriptor_V2_GetConcept,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetConceptRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleConceptResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getConcept =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetConcept',
      request,
      metadata || {},
      methodDescriptor_V2_GetConcept);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodDescriptor_V2_ListConcepts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListConcepts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListConceptsRequest,
  proto.clarifai.api.MultiConceptResponse,
  /**
   * @param {!proto.clarifai.api.ListConceptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listConcepts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_ListConcepts,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listConcepts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_ListConcepts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModelConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodDescriptor_V2_ListModelConcepts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModelConcepts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModelConceptsRequest,
  proto.clarifai.api.MultiConceptResponse,
  /**
   * @param {!proto.clarifai.api.ListModelConceptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModelConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModelConcepts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModelConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelConcepts,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModelConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModelConcepts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModelConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelConcepts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostConceptsSearchesRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodDescriptor_V2_PostConceptsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostConceptsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostConceptsSearchesRequest,
  proto.clarifai.api.MultiConceptResponse,
  /**
   * @param {!proto.clarifai.api.PostConceptsSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostConceptsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postConceptsSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptsSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostConceptsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postConceptsSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptsSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodDescriptor_V2_PostConcepts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostConcepts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostConceptsRequest,
  proto.clarifai.api.MultiConceptResponse,
  /**
   * @param {!proto.clarifai.api.PostConceptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postConcepts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_PostConcepts,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postConcepts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_PostConcepts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodDescriptor_V2_PatchConcepts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchConcepts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchConceptsRequest,
  proto.clarifai.api.MultiConceptResponse,
  /**
   * @param {!proto.clarifai.api.PatchConceptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchConcepts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_PatchConcepts,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchConcepts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_PatchConcepts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetVocabRequest,
 *   !proto.clarifai.api.SingleVocabResponse>}
 */
const methodDescriptor_V2_GetVocab = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetVocab',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetVocabRequest,
  proto.clarifai.api.SingleVocabResponse,
  /**
   * @param {!proto.clarifai.api.GetVocabRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleVocabResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetVocabRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleVocabResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleVocabResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getVocab =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetVocab',
      request,
      metadata || {},
      methodDescriptor_V2_GetVocab,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetVocabRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleVocabResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getVocab =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetVocab',
      request,
      metadata || {},
      methodDescriptor_V2_GetVocab);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListVocabsRequest,
 *   !proto.clarifai.api.MultiVocabResponse>}
 */
const methodDescriptor_V2_ListVocabs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListVocabs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListVocabsRequest,
  proto.clarifai.api.MultiVocabResponse,
  /**
   * @param {!proto.clarifai.api.ListVocabsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiVocabResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListVocabsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiVocabResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiVocabResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listVocabs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListVocabs',
      request,
      metadata || {},
      methodDescriptor_V2_ListVocabs,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListVocabsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiVocabResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listVocabs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListVocabs',
      request,
      metadata || {},
      methodDescriptor_V2_ListVocabs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostVocabsRequest,
 *   !proto.clarifai.api.MultiVocabResponse>}
 */
const methodDescriptor_V2_PostVocabs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostVocabs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostVocabsRequest,
  proto.clarifai.api.MultiVocabResponse,
  /**
   * @param {!proto.clarifai.api.PostVocabsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiVocabResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostVocabsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiVocabResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiVocabResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postVocabs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostVocabs',
      request,
      metadata || {},
      methodDescriptor_V2_PostVocabs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostVocabsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiVocabResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postVocabs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostVocabs',
      request,
      metadata || {},
      methodDescriptor_V2_PostVocabs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchVocabsRequest,
 *   !proto.clarifai.api.MultiVocabResponse>}
 */
const methodDescriptor_V2_PatchVocabs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchVocabs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchVocabsRequest,
  proto.clarifai.api.MultiVocabResponse,
  /**
   * @param {!proto.clarifai.api.PatchVocabsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiVocabResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchVocabsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiVocabResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiVocabResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchVocabs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchVocabs',
      request,
      metadata || {},
      methodDescriptor_V2_PatchVocabs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchVocabsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiVocabResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchVocabs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchVocabs',
      request,
      metadata || {},
      methodDescriptor_V2_PatchVocabs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteVocabRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteVocab = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteVocab',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteVocabRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteVocabRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteVocabRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteVocab =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteVocab',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteVocab,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteVocabRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteVocab =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteVocab',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteVocab);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteVocabsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteVocabs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteVocabs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteVocabsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteVocabsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteVocabsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteVocabs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteVocabs',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteVocabs,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteVocabsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteVocabs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteVocabs',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteVocabs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListVocabConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodDescriptor_V2_ListVocabConcepts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListVocabConcepts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListVocabConceptsRequest,
  proto.clarifai.api.MultiConceptResponse,
  /**
   * @param {!proto.clarifai.api.ListVocabConceptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListVocabConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listVocabConcepts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListVocabConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_ListVocabConcepts,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListVocabConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listVocabConcepts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListVocabConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_ListVocabConcepts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostVocabConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodDescriptor_V2_PostVocabConcepts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostVocabConcepts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostVocabConceptsRequest,
  proto.clarifai.api.MultiConceptResponse,
  /**
   * @param {!proto.clarifai.api.PostVocabConceptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostVocabConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postVocabConcepts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostVocabConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_PostVocabConcepts,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostVocabConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postVocabConcepts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostVocabConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_PostVocabConcepts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteVocabConceptRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteVocabConcept = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteVocabConcept',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteVocabConceptRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteVocabConceptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteVocabConceptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteVocabConcept =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteVocabConcept',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteVocabConcept,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteVocabConceptRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteVocabConcept =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteVocabConcept',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteVocabConcept);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteVocabConceptsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteVocabConcepts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteVocabConcepts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteVocabConceptsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteVocabConceptsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteVocabConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteVocabConcepts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteVocabConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteVocabConcepts,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteVocabConceptsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteVocabConcepts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteVocabConcepts',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteVocabConcepts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetConceptLanguageRequest,
 *   !proto.clarifai.api.SingleConceptLanguageResponse>}
 */
const methodDescriptor_V2_GetConceptLanguage = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetConceptLanguage',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetConceptLanguageRequest,
  proto.clarifai.api.SingleConceptLanguageResponse,
  /**
   * @param {!proto.clarifai.api.GetConceptLanguageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleConceptLanguageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetConceptLanguageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleConceptLanguageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleConceptLanguageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getConceptLanguage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetConceptLanguage',
      request,
      metadata || {},
      methodDescriptor_V2_GetConceptLanguage,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetConceptLanguageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleConceptLanguageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getConceptLanguage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetConceptLanguage',
      request,
      metadata || {},
      methodDescriptor_V2_GetConceptLanguage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListConceptLanguagesRequest,
 *   !proto.clarifai.api.MultiConceptLanguageResponse>}
 */
const methodDescriptor_V2_ListConceptLanguages = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListConceptLanguages',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListConceptLanguagesRequest,
  proto.clarifai.api.MultiConceptLanguageResponse,
  /**
   * @param {!proto.clarifai.api.ListConceptLanguagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptLanguageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListConceptLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptLanguageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptLanguageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listConceptLanguages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListConceptLanguages',
      request,
      metadata || {},
      methodDescriptor_V2_ListConceptLanguages,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListConceptLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptLanguageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listConceptLanguages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListConceptLanguages',
      request,
      metadata || {},
      methodDescriptor_V2_ListConceptLanguages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostConceptLanguagesRequest,
 *   !proto.clarifai.api.MultiConceptLanguageResponse>}
 */
const methodDescriptor_V2_PostConceptLanguages = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostConceptLanguages',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostConceptLanguagesRequest,
  proto.clarifai.api.MultiConceptLanguageResponse,
  /**
   * @param {!proto.clarifai.api.PostConceptLanguagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptLanguageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostConceptLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptLanguageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptLanguageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postConceptLanguages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptLanguages',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptLanguages,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostConceptLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptLanguageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postConceptLanguages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptLanguages',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptLanguages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchConceptLanguagesRequest,
 *   !proto.clarifai.api.MultiConceptLanguageResponse>}
 */
const methodDescriptor_V2_PatchConceptLanguages = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchConceptLanguages',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchConceptLanguagesRequest,
  proto.clarifai.api.MultiConceptLanguageResponse,
  /**
   * @param {!proto.clarifai.api.PatchConceptLanguagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptLanguageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchConceptLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptLanguageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptLanguageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchConceptLanguages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchConceptLanguages',
      request,
      metadata || {},
      methodDescriptor_V2_PatchConceptLanguages,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchConceptLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptLanguageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchConceptLanguages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchConceptLanguages',
      request,
      metadata || {},
      methodDescriptor_V2_PatchConceptLanguages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListConceptReferencesRequest,
 *   !proto.clarifai.api.MultiConceptReferenceResponse>}
 */
const methodDescriptor_V2_ListConceptReferences = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListConceptReferences',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListConceptReferencesRequest,
  proto.clarifai.api.MultiConceptReferenceResponse,
  /**
   * @param {!proto.clarifai.api.ListConceptReferencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptReferenceResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListConceptReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptReferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptReferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listConceptReferences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListConceptReferences',
      request,
      metadata || {},
      methodDescriptor_V2_ListConceptReferences,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListConceptReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptReferenceResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listConceptReferences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListConceptReferences',
      request,
      metadata || {},
      methodDescriptor_V2_ListConceptReferences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListKnowledgeGraphsRequest,
 *   !proto.clarifai.api.MultiKnowledgeGraphResponse>}
 */
const methodDescriptor_V2_ListKnowledgeGraphs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListKnowledgeGraphs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListKnowledgeGraphsRequest,
  proto.clarifai.api.MultiKnowledgeGraphResponse,
  /**
   * @param {!proto.clarifai.api.ListKnowledgeGraphsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKnowledgeGraphResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListKnowledgeGraphsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiKnowledgeGraphResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiKnowledgeGraphResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listKnowledgeGraphs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListKnowledgeGraphs',
      request,
      metadata || {},
      methodDescriptor_V2_ListKnowledgeGraphs,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListKnowledgeGraphsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKnowledgeGraphResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listKnowledgeGraphs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListKnowledgeGraphs',
      request,
      metadata || {},
      methodDescriptor_V2_ListKnowledgeGraphs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostKnowledgeGraphsRequest,
 *   !proto.clarifai.api.MultiKnowledgeGraphResponse>}
 */
const methodDescriptor_V2_PostKnowledgeGraphs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostKnowledgeGraphs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostKnowledgeGraphsRequest,
  proto.clarifai.api.MultiKnowledgeGraphResponse,
  /**
   * @param {!proto.clarifai.api.PostKnowledgeGraphsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKnowledgeGraphResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostKnowledgeGraphsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiKnowledgeGraphResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiKnowledgeGraphResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postKnowledgeGraphs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostKnowledgeGraphs',
      request,
      metadata || {},
      methodDescriptor_V2_PostKnowledgeGraphs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostKnowledgeGraphsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKnowledgeGraphResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postKnowledgeGraphs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostKnowledgeGraphs',
      request,
      metadata || {},
      methodDescriptor_V2_PostKnowledgeGraphs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostConceptMappingJobsRequest,
 *   !proto.clarifai.api.MultiConceptMappingJobResponse>}
 */
const methodDescriptor_V2_PostConceptMappingJobs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostConceptMappingJobs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostConceptMappingJobsRequest,
  proto.clarifai.api.MultiConceptMappingJobResponse,
  /**
   * @param {!proto.clarifai.api.PostConceptMappingJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptMappingJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostConceptMappingJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptMappingJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptMappingJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postConceptMappingJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptMappingJobs',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptMappingJobs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostConceptMappingJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptMappingJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postConceptMappingJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptMappingJobs',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptMappingJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListConceptMappingsRequest,
 *   !proto.clarifai.api.MultiConceptMappingResponse>}
 */
const methodDescriptor_V2_ListConceptMappings = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListConceptMappings',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListConceptMappingsRequest,
  proto.clarifai.api.MultiConceptMappingResponse,
  /**
   * @param {!proto.clarifai.api.ListConceptMappingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptMappingResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListConceptMappingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptMappingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptMappingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listConceptMappings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListConceptMappings',
      request,
      metadata || {},
      methodDescriptor_V2_ListConceptMappings,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListConceptMappingsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptMappingResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listConceptMappings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListConceptMappings',
      request,
      metadata || {},
      methodDescriptor_V2_ListConceptMappings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostConceptMappingsRequest,
 *   !proto.clarifai.api.MultiConceptMappingResponse>}
 */
const methodDescriptor_V2_PostConceptMappings = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostConceptMappings',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostConceptMappingsRequest,
  proto.clarifai.api.MultiConceptMappingResponse,
  /**
   * @param {!proto.clarifai.api.PostConceptMappingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptMappingResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostConceptMappingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiConceptMappingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiConceptMappingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postConceptMappings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptMappings',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptMappings,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostConceptMappingsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptMappingResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postConceptMappings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostConceptMappings',
      request,
      metadata || {},
      methodDescriptor_V2_PostConceptMappings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetAnnotationRequest,
 *   !proto.clarifai.api.SingleAnnotationResponse>}
 */
const methodDescriptor_V2_GetAnnotation = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetAnnotation',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetAnnotationRequest,
  proto.clarifai.api.SingleAnnotationResponse,
  /**
   * @param {!proto.clarifai.api.GetAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleAnnotationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleAnnotationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleAnnotationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getAnnotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetAnnotation',
      request,
      metadata || {},
      methodDescriptor_V2_GetAnnotation,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleAnnotationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getAnnotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetAnnotation',
      request,
      metadata || {},
      methodDescriptor_V2_GetAnnotation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAnnotationsRequest,
 *   !proto.clarifai.api.MultiAnnotationResponse>}
 */
const methodDescriptor_V2_ListAnnotations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListAnnotations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAnnotationsRequest,
  proto.clarifai.api.MultiAnnotationResponse,
  /**
   * @param {!proto.clarifai.api.ListAnnotationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listAnnotations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListAnnotations',
      request,
      metadata || {},
      methodDescriptor_V2_ListAnnotations,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listAnnotations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListAnnotations',
      request,
      metadata || {},
      methodDescriptor_V2_ListAnnotations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAnnotationsRequest,
 *   !proto.clarifai.api.MultiAnnotationResponse>}
 */
const methodDescriptor_V2_PostAnnotations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAnnotations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAnnotationsRequest,
  proto.clarifai.api.MultiAnnotationResponse,
  /**
   * @param {!proto.clarifai.api.PostAnnotationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAnnotations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAnnotations',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnnotations,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAnnotations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAnnotations',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnnotations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAnnotationsRequest,
 *   !proto.clarifai.api.MultiAnnotationResponse>}
 */
const methodDescriptor_V2_PatchAnnotations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchAnnotations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAnnotationsRequest,
  proto.clarifai.api.MultiAnnotationResponse,
  /**
   * @param {!proto.clarifai.api.PatchAnnotationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchAnnotations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotations',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotations,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchAnnotations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotations',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAnnotationsStatusRequest,
 *   !proto.clarifai.api.PatchAnnotationsStatusResponse>}
 */
const methodDescriptor_V2_PatchAnnotationsStatus = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchAnnotationsStatus',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAnnotationsStatusRequest,
  proto.clarifai.api.PatchAnnotationsStatusResponse,
  /**
   * @param {!proto.clarifai.api.PatchAnnotationsStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PatchAnnotationsStatusResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAnnotationsStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PatchAnnotationsStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PatchAnnotationsStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchAnnotationsStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotationsStatus',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotationsStatus,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAnnotationsStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PatchAnnotationsStatusResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchAnnotationsStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotationsStatus',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotationsStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteAnnotationRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteAnnotation = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteAnnotation',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteAnnotationRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteAnnotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAnnotation',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAnnotation,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteAnnotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAnnotation',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAnnotation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteAnnotationsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteAnnotations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteAnnotations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteAnnotationsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteAnnotationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteAnnotations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAnnotations',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAnnotations,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteAnnotations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAnnotations',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAnnotations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAnnotationsSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_PatchAnnotationsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchAnnotationsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAnnotationsSearchesRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.PatchAnnotationsSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAnnotationsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchAnnotationsSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotationsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotationsSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAnnotationsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchAnnotationsSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotationsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotationsSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAnnotationsSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_PostAnnotationsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAnnotationsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAnnotationsSearchesRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.PostAnnotationsSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAnnotationsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAnnotationsSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAnnotationsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnnotationsSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAnnotationsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAnnotationsSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAnnotationsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnnotationsSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetInputCountRequest,
 *   !proto.clarifai.api.SingleInputCountResponse>}
 */
const methodDescriptor_V2_GetInputCount = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetInputCount',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetInputCountRequest,
  proto.clarifai.api.SingleInputCountResponse,
  /**
   * @param {!proto.clarifai.api.GetInputCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleInputCountResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetInputCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleInputCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleInputCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getInputCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetInputCount',
      request,
      metadata || {},
      methodDescriptor_V2_GetInputCount,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetInputCountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleInputCountResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getInputCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetInputCount',
      request,
      metadata || {},
      methodDescriptor_V2_GetInputCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.StreamInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_StreamInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/StreamInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.StreamInputsRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.StreamInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.StreamInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.streamInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/StreamInputs',
      request,
      metadata || {},
      methodDescriptor_V2_StreamInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.StreamInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.streamInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/StreamInputs',
      request,
      metadata || {},
      methodDescriptor_V2_StreamInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetInputSamplesRequest,
 *   !proto.clarifai.api.MultiInputAnnotationResponse>}
 */
const methodDescriptor_V2_GetInputSamples = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetInputSamples',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetInputSamplesRequest,
  proto.clarifai.api.MultiInputAnnotationResponse,
  /**
   * @param {!proto.clarifai.api.GetInputSamplesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputAnnotationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetInputSamplesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputAnnotationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputAnnotationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getInputSamples =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetInputSamples',
      request,
      metadata || {},
      methodDescriptor_V2_GetInputSamples,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetInputSamplesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputAnnotationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getInputSamples =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetInputSamples',
      request,
      metadata || {},
      methodDescriptor_V2_GetInputSamples);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetInputRequest,
 *   !proto.clarifai.api.SingleInputResponse>}
 */
const methodDescriptor_V2_GetInput = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetInput',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetInputRequest,
  proto.clarifai.api.SingleInputResponse,
  /**
   * @param {!proto.clarifai.api.GetInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetInput',
      request,
      metadata || {},
      methodDescriptor_V2_GetInput,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetInput',
      request,
      metadata || {},
      methodDescriptor_V2_GetInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_ListInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListInputsRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.ListInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListInputs',
      request,
      metadata || {},
      methodDescriptor_V2_ListInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListInputs',
      request,
      metadata || {},
      methodDescriptor_V2_ListInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_PostInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostInputsRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.PostInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostInputs',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostInputs',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostInputsFileRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_PostInputsFile = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostInputsFile',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostInputsFileRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.PostInputsFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostInputsFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postInputsFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsFile',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsFile,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostInputsFileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postInputsFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsFile',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostInputsNiFiRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_PostInputsNiFi = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostInputsNiFi',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostInputsNiFiRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.PostInputsNiFiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostInputsNiFiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postInputsNiFi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsNiFi',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsNiFi,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostInputsNiFiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postInputsNiFi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsNiFi',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsNiFi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostInputsDocumentRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_PostInputsDocument = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostInputsDocument',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostInputsDocumentRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.PostInputsDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostInputsDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postInputsDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsDocument',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsDocument,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostInputsDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postInputsDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsDocument',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_PatchInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchInputsRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.PatchInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchInputs',
      request,
      metadata || {},
      methodDescriptor_V2_PatchInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchInputs',
      request,
      metadata || {},
      methodDescriptor_V2_PatchInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteInputRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteInput = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteInput',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteInputRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteInput',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteInput,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteInputRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteInput',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteInputsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteInputsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteInputs',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteInputs',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchInputsSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_PatchInputsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchInputsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchInputsSearchesRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.PatchInputsSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchInputsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchInputsSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchInputsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PatchInputsSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchInputsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchInputsSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchInputsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PatchInputsSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostInputsSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_PostInputsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostInputsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostInputsSearchesRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.PostInputsSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostInputsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postInputsSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostInputsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postInputsSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelOutputsRequest,
 *   !proto.clarifai.api.MultiOutputResponse>}
 */
const methodDescriptor_V2_PostModelOutputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelOutputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelOutputsRequest,
  proto.clarifai.api.MultiOutputResponse,
  /**
   * @param {!proto.clarifai.api.PostModelOutputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOutputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelOutputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiOutputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiOutputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelOutputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelOutputs',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelOutputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelOutputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOutputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelOutputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelOutputs',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelOutputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListDatasetsRequest,
 *   !proto.clarifai.api.MultiDatasetResponse>}
 */
const methodDescriptor_V2_ListDatasets = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListDatasets',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListDatasetsRequest,
  proto.clarifai.api.MultiDatasetResponse,
  /**
   * @param {!proto.clarifai.api.ListDatasetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listDatasets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListDatasets',
      request,
      metadata || {},
      methodDescriptor_V2_ListDatasets,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listDatasets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListDatasets',
      request,
      metadata || {},
      methodDescriptor_V2_ListDatasets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetDatasetRequest,
 *   !proto.clarifai.api.SingleDatasetResponse>}
 */
const methodDescriptor_V2_GetDataset = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetDataset',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetDatasetRequest,
  proto.clarifai.api.SingleDatasetResponse,
  /**
   * @param {!proto.clarifai.api.GetDatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetDataset',
      request,
      metadata || {},
      methodDescriptor_V2_GetDataset,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleDatasetResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetDataset',
      request,
      metadata || {},
      methodDescriptor_V2_GetDataset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostDatasetsRequest,
 *   !proto.clarifai.api.MultiDatasetResponse>}
 */
const methodDescriptor_V2_PostDatasets = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostDatasets',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostDatasetsRequest,
  proto.clarifai.api.MultiDatasetResponse,
  /**
   * @param {!proto.clarifai.api.PostDatasetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postDatasets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostDatasets',
      request,
      metadata || {},
      methodDescriptor_V2_PostDatasets,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postDatasets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostDatasets',
      request,
      metadata || {},
      methodDescriptor_V2_PostDatasets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchDatasetsRequest,
 *   !proto.clarifai.api.MultiDatasetResponse>}
 */
const methodDescriptor_V2_PatchDatasets = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchDatasets',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchDatasetsRequest,
  proto.clarifai.api.MultiDatasetResponse,
  /**
   * @param {!proto.clarifai.api.PatchDatasetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchDatasets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchDatasets',
      request,
      metadata || {},
      methodDescriptor_V2_PatchDatasets,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchDatasets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchDatasets',
      request,
      metadata || {},
      methodDescriptor_V2_PatchDatasets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchDatasetIdsRequest,
 *   !proto.clarifai.api.MultiDatasetResponse>}
 */
const methodDescriptor_V2_PatchDatasetIds = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchDatasetIds',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchDatasetIdsRequest,
  proto.clarifai.api.MultiDatasetResponse,
  /**
   * @param {!proto.clarifai.api.PatchDatasetIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchDatasetIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchDatasetIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchDatasetIds',
      request,
      metadata || {},
      methodDescriptor_V2_PatchDatasetIds,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchDatasetIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchDatasetIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchDatasetIds',
      request,
      metadata || {},
      methodDescriptor_V2_PatchDatasetIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteDatasetsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteDatasets = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteDatasets',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteDatasetsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteDatasetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteDatasets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteDatasets',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteDatasets,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteDatasets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteDatasets',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteDatasets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListDatasetInputsRequest,
 *   !proto.clarifai.api.MultiDatasetInputResponse>}
 */
const methodDescriptor_V2_ListDatasetInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListDatasetInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListDatasetInputsRequest,
  proto.clarifai.api.MultiDatasetInputResponse,
  /**
   * @param {!proto.clarifai.api.ListDatasetInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListDatasetInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listDatasetInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListDatasetInputs',
      request,
      metadata || {},
      methodDescriptor_V2_ListDatasetInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListDatasetInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listDatasetInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListDatasetInputs',
      request,
      metadata || {},
      methodDescriptor_V2_ListDatasetInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetDatasetInputRequest,
 *   !proto.clarifai.api.SingleDatasetInputResponse>}
 */
const methodDescriptor_V2_GetDatasetInput = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetDatasetInput',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetDatasetInputRequest,
  proto.clarifai.api.SingleDatasetInputResponse,
  /**
   * @param {!proto.clarifai.api.GetDatasetInputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleDatasetInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetDatasetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleDatasetInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleDatasetInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getDatasetInput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetDatasetInput',
      request,
      metadata || {},
      methodDescriptor_V2_GetDatasetInput,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetDatasetInputRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleDatasetInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getDatasetInput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetDatasetInput',
      request,
      metadata || {},
      methodDescriptor_V2_GetDatasetInput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostDatasetInputsRequest,
 *   !proto.clarifai.api.MultiDatasetInputResponse>}
 */
const methodDescriptor_V2_PostDatasetInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostDatasetInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostDatasetInputsRequest,
  proto.clarifai.api.MultiDatasetInputResponse,
  /**
   * @param {!proto.clarifai.api.PostDatasetInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostDatasetInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postDatasetInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostDatasetInputs',
      request,
      metadata || {},
      methodDescriptor_V2_PostDatasetInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostDatasetInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postDatasetInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostDatasetInputs',
      request,
      metadata || {},
      methodDescriptor_V2_PostDatasetInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteDatasetInputsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteDatasetInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteDatasetInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteDatasetInputsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteDatasetInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteDatasetInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteDatasetInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteDatasetInputs',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteDatasetInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteDatasetInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteDatasetInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteDatasetInputs',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteDatasetInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListDatasetVersionsRequest,
 *   !proto.clarifai.api.MultiDatasetVersionResponse>}
 */
const methodDescriptor_V2_ListDatasetVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListDatasetVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListDatasetVersionsRequest,
  proto.clarifai.api.MultiDatasetVersionResponse,
  /**
   * @param {!proto.clarifai.api.ListDatasetVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListDatasetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listDatasetVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListDatasetVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListDatasetVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListDatasetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listDatasetVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListDatasetVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListDatasetVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetDatasetVersionRequest,
 *   !proto.clarifai.api.SingleDatasetVersionResponse>}
 */
const methodDescriptor_V2_GetDatasetVersion = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetDatasetVersion',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetDatasetVersionRequest,
  proto.clarifai.api.SingleDatasetVersionResponse,
  /**
   * @param {!proto.clarifai.api.GetDatasetVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleDatasetVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetDatasetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleDatasetVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleDatasetVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getDatasetVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetDatasetVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetDatasetVersion,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetDatasetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleDatasetVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getDatasetVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetDatasetVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetDatasetVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListDatasetVersionMetricsGroupsRequest,
 *   !proto.clarifai.api.MultiDatasetVersionMetricsGroupResponse>}
 */
const methodDescriptor_V2_ListDatasetVersionMetricsGroups = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListDatasetVersionMetricsGroups',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListDatasetVersionMetricsGroupsRequest,
  proto.clarifai.api.MultiDatasetVersionMetricsGroupResponse,
  /**
   * @param {!proto.clarifai.api.ListDatasetVersionMetricsGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetVersionMetricsGroupResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListDatasetVersionMetricsGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetVersionMetricsGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetVersionMetricsGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listDatasetVersionMetricsGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListDatasetVersionMetricsGroups',
      request,
      metadata || {},
      methodDescriptor_V2_ListDatasetVersionMetricsGroups,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListDatasetVersionMetricsGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetVersionMetricsGroupResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listDatasetVersionMetricsGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListDatasetVersionMetricsGroups',
      request,
      metadata || {},
      methodDescriptor_V2_ListDatasetVersionMetricsGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostDatasetVersionsRequest,
 *   !proto.clarifai.api.MultiDatasetVersionResponse>}
 */
const methodDescriptor_V2_PostDatasetVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostDatasetVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostDatasetVersionsRequest,
  proto.clarifai.api.MultiDatasetVersionResponse,
  /**
   * @param {!proto.clarifai.api.PostDatasetVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostDatasetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postDatasetVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostDatasetVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PostDatasetVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostDatasetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postDatasetVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostDatasetVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PostDatasetVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchDatasetVersionsRequest,
 *   !proto.clarifai.api.MultiDatasetVersionResponse>}
 */
const methodDescriptor_V2_PatchDatasetVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchDatasetVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchDatasetVersionsRequest,
  proto.clarifai.api.MultiDatasetVersionResponse,
  /**
   * @param {!proto.clarifai.api.PatchDatasetVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchDatasetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchDatasetVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchDatasetVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PatchDatasetVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchDatasetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchDatasetVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchDatasetVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PatchDatasetVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteDatasetVersionsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteDatasetVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteDatasetVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteDatasetVersionsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteDatasetVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteDatasetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteDatasetVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteDatasetVersions',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteDatasetVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteDatasetVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteDatasetVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteDatasetVersions',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteDatasetVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PutDatasetVersionExportsRequest,
 *   !proto.clarifai.api.MultiDatasetVersionExportResponse>}
 */
const methodDescriptor_V2_PutDatasetVersionExports = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PutDatasetVersionExports',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PutDatasetVersionExportsRequest,
  proto.clarifai.api.MultiDatasetVersionExportResponse,
  /**
   * @param {!proto.clarifai.api.PutDatasetVersionExportsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiDatasetVersionExportResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PutDatasetVersionExportsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiDatasetVersionExportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiDatasetVersionExportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.putDatasetVersionExports =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PutDatasetVersionExports',
      request,
      metadata || {},
      methodDescriptor_V2_PutDatasetVersionExports,
      callback);
};


/**
 * @param {!proto.clarifai.api.PutDatasetVersionExportsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiDatasetVersionExportResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.putDatasetVersionExports =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PutDatasetVersionExports',
      request,
      metadata || {},
      methodDescriptor_V2_PutDatasetVersionExports);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetModelTypeRequest,
 *   !proto.clarifai.api.SingleModelTypeResponse>}
 */
const methodDescriptor_V2_GetModelType = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModelType',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModelTypeRequest,
  proto.clarifai.api.SingleModelTypeResponse,
  /**
   * @param {!proto.clarifai.api.GetModelTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelTypeResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetModelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getModelType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetModelType',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelType,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetModelTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelTypeResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getModelType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetModelType',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListOpenSourceLicensesRequest,
 *   !proto.clarifai.api.ListOpenSourceLicensesResponse>}
 */
const methodDescriptor_V2_ListOpenSourceLicenses = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListOpenSourceLicenses',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListOpenSourceLicensesRequest,
  proto.clarifai.api.ListOpenSourceLicensesResponse,
  /**
   * @param {!proto.clarifai.api.ListOpenSourceLicensesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.ListOpenSourceLicensesResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListOpenSourceLicensesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.ListOpenSourceLicensesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.ListOpenSourceLicensesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listOpenSourceLicenses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListOpenSourceLicenses',
      request,
      metadata || {},
      methodDescriptor_V2_ListOpenSourceLicenses,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListOpenSourceLicensesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.ListOpenSourceLicensesResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listOpenSourceLicenses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListOpenSourceLicenses',
      request,
      metadata || {},
      methodDescriptor_V2_ListOpenSourceLicenses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModelTypesRequest,
 *   !proto.clarifai.api.MultiModelTypeResponse>}
 */
const methodDescriptor_V2_ListModelTypes = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModelTypes',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModelTypesRequest,
  proto.clarifai.api.MultiModelTypeResponse,
  /**
   * @param {!proto.clarifai.api.ListModelTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelTypeResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModelTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModelTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModelTypes',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelTypes,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModelTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelTypeResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModelTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModelTypes',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetModelRequest,
 *   !proto.clarifai.api.SingleModelResponse>}
 */
const methodDescriptor_V2_GetModel = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModel',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModelRequest,
  proto.clarifai.api.SingleModelResponse,
  /**
   * @param {!proto.clarifai.api.GetModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetModel',
      request,
      metadata || {},
      methodDescriptor_V2_GetModel,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetModel',
      request,
      metadata || {},
      methodDescriptor_V2_GetModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetModelRequest,
 *   !proto.clarifai.api.SingleModelResponse>}
 */
const methodDescriptor_V2_GetModelOutputInfo = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModelOutputInfo',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModelRequest,
  proto.clarifai.api.SingleModelResponse,
  /**
   * @param {!proto.clarifai.api.GetModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getModelOutputInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetModelOutputInfo',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelOutputInfo,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetModelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getModelOutputInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetModelOutputInfo',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelOutputInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModelsRequest,
 *   !proto.clarifai.api.MultiModelResponse>}
 */
const methodDescriptor_V2_ListModels = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModels',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModelsRequest,
  proto.clarifai.api.MultiModelResponse,
  /**
   * @param {!proto.clarifai.api.ListModelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModels',
      request,
      metadata || {},
      methodDescriptor_V2_ListModels,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModels',
      request,
      metadata || {},
      methodDescriptor_V2_ListModels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelsSearchesRequest,
 *   !proto.clarifai.api.MultiModelResponse>}
 */
const methodDescriptor_V2_PostModelsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelsSearchesRequest,
  proto.clarifai.api.MultiModelResponse,
  /**
   * @param {!proto.clarifai.api.PostModelsSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelsSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelsSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelsSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelsSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelsRequest,
 *   !proto.clarifai.api.SingleModelResponse>}
 */
const methodDescriptor_V2_PostModels = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModels',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelsRequest,
  proto.clarifai.api.SingleModelResponse,
  /**
   * @param {!proto.clarifai.api.PostModelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModels',
      request,
      metadata || {},
      methodDescriptor_V2_PostModels,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModels',
      request,
      metadata || {},
      methodDescriptor_V2_PostModels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchModelsRequest,
 *   !proto.clarifai.api.MultiModelResponse>}
 */
const methodDescriptor_V2_PatchModels = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModels',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModelsRequest,
  proto.clarifai.api.MultiModelResponse,
  /**
   * @param {!proto.clarifai.api.PatchModelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchModels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchModels',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModels,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchModels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchModels',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchModelIdsRequest,
 *   !proto.clarifai.api.MultiModelResponse>}
 */
const methodDescriptor_V2_PatchModelIds = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModelIds',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModelIdsRequest,
  proto.clarifai.api.MultiModelResponse,
  /**
   * @param {!proto.clarifai.api.PatchModelIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchModelIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchModelIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelIds',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelIds,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchModelIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchModelIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelIds',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteModelRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteModel = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteModel',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteModelRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteModelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteModelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteModel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModel',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModel,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteModelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteModel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModel',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteModelsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteModels = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteModels',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteModelsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteModelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteModels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModels',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModels,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteModelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteModels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModels',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchModelCheckConsentsRequest,
 *   !proto.clarifai.api.MultiModelCheckConsentResponse>}
 */
const methodDescriptor_V2_PatchModelCheckConsents = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModelCheckConsents',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModelCheckConsentsRequest,
  proto.clarifai.api.MultiModelCheckConsentResponse,
  /**
   * @param {!proto.clarifai.api.PatchModelCheckConsentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelCheckConsentResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchModelCheckConsentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelCheckConsentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelCheckConsentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchModelCheckConsents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelCheckConsents',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelCheckConsents,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchModelCheckConsentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelCheckConsentResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchModelCheckConsents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelCheckConsents',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelCheckConsents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchModelToolkitsRequest,
 *   !proto.clarifai.api.MultiModelToolkitResponse>}
 */
const methodDescriptor_V2_PatchModelToolkits = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModelToolkits',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModelToolkitsRequest,
  proto.clarifai.api.MultiModelToolkitResponse,
  /**
   * @param {!proto.clarifai.api.PatchModelToolkitsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelToolkitResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchModelToolkitsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelToolkitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelToolkitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchModelToolkits =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelToolkits',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelToolkits,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchModelToolkitsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelToolkitResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchModelToolkits =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelToolkits',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelToolkits);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchModelUseCasesRequest,
 *   !proto.clarifai.api.MultiModelUseCaseResponse>}
 */
const methodDescriptor_V2_PatchModelUseCases = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModelUseCases',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModelUseCasesRequest,
  proto.clarifai.api.MultiModelUseCaseResponse,
  /**
   * @param {!proto.clarifai.api.PatchModelUseCasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelUseCaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchModelUseCasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelUseCaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelUseCaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchModelUseCases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelUseCases',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelUseCases,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchModelUseCasesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelUseCaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchModelUseCases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelUseCases',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelUseCases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchModelLanguagesRequest,
 *   !proto.clarifai.api.MultiModelLanguageResponse>}
 */
const methodDescriptor_V2_PatchModelLanguages = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModelLanguages',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModelLanguagesRequest,
  proto.clarifai.api.MultiModelLanguageResponse,
  /**
   * @param {!proto.clarifai.api.PatchModelLanguagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelLanguageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchModelLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelLanguageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelLanguageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchModelLanguages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelLanguages',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelLanguages,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchModelLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelLanguageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchModelLanguages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelLanguages',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelLanguages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModelInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_ListModelInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModelInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModelInputsRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.ListModelInputsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModelInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModelInputs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModelInputs',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelInputs,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModelInputsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModelInputs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModelInputs',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelInputs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetModelVersionRequest,
 *   !proto.clarifai.api.SingleModelVersionResponse>}
 */
const methodDescriptor_V2_GetModelVersion = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModelVersion',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModelVersionRequest,
  proto.clarifai.api.SingleModelVersionResponse,
  /**
   * @param {!proto.clarifai.api.GetModelVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetModelVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getModelVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetModelVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelVersion,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetModelVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getModelVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetModelVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModelVersionsRequest,
 *   !proto.clarifai.api.MultiModelVersionResponse>}
 */
const methodDescriptor_V2_ListModelVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModelVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModelVersionsRequest,
  proto.clarifai.api.MultiModelVersionResponse,
  /**
   * @param {!proto.clarifai.api.ListModelVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModelVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModelVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModelVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModelVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostWorkflowVersionsUnPublishRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostWorkflowVersionsUnPublish = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWorkflowVersionsUnPublish',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWorkflowVersionsUnPublishRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostWorkflowVersionsUnPublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostWorkflowVersionsUnPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postWorkflowVersionsUnPublish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowVersionsUnPublish',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowVersionsUnPublish,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostWorkflowVersionsUnPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postWorkflowVersionsUnPublish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowVersionsUnPublish',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowVersionsUnPublish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostWorkflowVersionsPublishRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostWorkflowVersionsPublish = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWorkflowVersionsPublish',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWorkflowVersionsPublishRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostWorkflowVersionsPublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostWorkflowVersionsPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postWorkflowVersionsPublish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowVersionsPublish',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowVersionsPublish,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostWorkflowVersionsPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postWorkflowVersionsPublish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowVersionsPublish',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowVersionsPublish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelVersionsPublishRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostModelVersionsPublish = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelVersionsPublish',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelVersionsPublishRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostModelVersionsPublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelVersionsPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelVersionsPublish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersionsPublish',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersionsPublish,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelVersionsPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelVersionsPublish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersionsPublish',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersionsPublish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelVersionsUnPublishRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostModelVersionsUnPublish = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelVersionsUnPublish',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelVersionsUnPublishRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostModelVersionsUnPublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelVersionsUnPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelVersionsUnPublish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersionsUnPublish',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersionsUnPublish,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelVersionsUnPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelVersionsUnPublish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersionsUnPublish',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersionsUnPublish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelVersionsRequest,
 *   !proto.clarifai.api.SingleModelResponse>}
 */
const methodDescriptor_V2_PostModelVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelVersionsRequest,
  proto.clarifai.api.SingleModelResponse,
  /**
   * @param {!proto.clarifai.api.PostModelVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchModelVersionsRequest,
 *   !proto.clarifai.api.MultiModelVersionResponse>}
 */
const methodDescriptor_V2_PatchModelVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModelVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModelVersionsRequest,
  proto.clarifai.api.MultiModelVersionResponse,
  /**
   * @param {!proto.clarifai.api.PatchModelVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchModelVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchModelVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchModelVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchModelVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModelVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteModelVersionRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteModelVersion = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteModelVersion',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteModelVersionRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteModelVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteModelVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteModelVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModelVersion',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModelVersion,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteModelVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteModelVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModelVersion',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModelVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetModelVersionMetricsRequest,
 *   !proto.clarifai.api.SingleModelVersionResponse>}
 */
const methodDescriptor_V2_GetModelVersionMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModelVersionMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModelVersionMetricsRequest,
  proto.clarifai.api.SingleModelVersionResponse,
  /**
   * @param {!proto.clarifai.api.GetModelVersionMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetModelVersionMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getModelVersionMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetModelVersionMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelVersionMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetModelVersionMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getModelVersionMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetModelVersionMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelVersionMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelVersionMetricsRequest,
 *   !proto.clarifai.api.SingleModelVersionResponse>}
 */
const methodDescriptor_V2_PostModelVersionMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelVersionMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelVersionMetricsRequest,
  proto.clarifai.api.SingleModelVersionResponse,
  /**
   * @param {!proto.clarifai.api.PostModelVersionMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelVersionMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelVersionMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersionMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersionMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelVersionMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelVersionMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersionMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersionMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModelReferencesRequest,
 *   !proto.clarifai.api.MultiModelReferenceResponse>}
 */
const methodDescriptor_V2_ListModelReferences = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModelReferences',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModelReferencesRequest,
  proto.clarifai.api.MultiModelReferenceResponse,
  /**
   * @param {!proto.clarifai.api.ListModelReferencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelReferenceResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModelReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelReferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelReferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModelReferences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModelReferences',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelReferences,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModelReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelReferenceResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModelReferences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModelReferences',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelReferences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelReferencesRequest,
 *   !proto.clarifai.api.MultiModelReferenceResponse>}
 */
const methodDescriptor_V2_PostModelReferences = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelReferences',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelReferencesRequest,
  proto.clarifai.api.MultiModelReferenceResponse,
  /**
   * @param {!proto.clarifai.api.PostModelReferencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelReferenceResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelReferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelReferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelReferences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelReferences',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelReferences,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelReferenceResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelReferences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelReferences',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelReferences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteModelReferencesRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteModelReferences = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteModelReferences',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteModelReferencesRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteModelReferencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteModelReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteModelReferences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModelReferences',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModelReferences,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteModelReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteModelReferences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModelReferences',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModelReferences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetModelVersionInputExampleRequest,
 *   !proto.clarifai.api.SingleModelVersionInputExampleResponse>}
 */
const methodDescriptor_V2_GetModelVersionInputExample = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModelVersionInputExample',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModelVersionInputExampleRequest,
  proto.clarifai.api.SingleModelVersionInputExampleResponse,
  /**
   * @param {!proto.clarifai.api.GetModelVersionInputExampleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelVersionInputExampleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetModelVersionInputExampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModelVersionInputExampleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModelVersionInputExampleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getModelVersionInputExample =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetModelVersionInputExample',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelVersionInputExample,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetModelVersionInputExampleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelVersionInputExampleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getModelVersionInputExample =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetModelVersionInputExample',
      request,
      metadata || {},
      methodDescriptor_V2_GetModelVersionInputExample);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModelVersionInputExamplesRequest,
 *   !proto.clarifai.api.MultiModelVersionInputExampleResponse>}
 */
const methodDescriptor_V2_ListModelVersionInputExamples = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModelVersionInputExamples',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModelVersionInputExamplesRequest,
  proto.clarifai.api.MultiModelVersionInputExampleResponse,
  /**
   * @param {!proto.clarifai.api.ListModelVersionInputExamplesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelVersionInputExampleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModelVersionInputExamplesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelVersionInputExampleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelVersionInputExampleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModelVersionInputExamples =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModelVersionInputExamples',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelVersionInputExamples,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModelVersionInputExamplesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelVersionInputExampleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModelVersionInputExamples =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModelVersionInputExamples',
      request,
      metadata || {},
      methodDescriptor_V2_ListModelVersionInputExamples);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelVersionInputExamplesRequest,
 *   !proto.clarifai.api.MultiModelVersionInputExampleResponse>}
 */
const methodDescriptor_V2_PostModelVersionInputExamples = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelVersionInputExamples',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelVersionInputExamplesRequest,
  proto.clarifai.api.MultiModelVersionInputExampleResponse,
  /**
   * @param {!proto.clarifai.api.PostModelVersionInputExamplesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelVersionInputExampleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelVersionInputExamplesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelVersionInputExampleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelVersionInputExampleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelVersionInputExamples =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersionInputExamples',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersionInputExamples,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelVersionInputExamplesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelVersionInputExampleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelVersionInputExamples =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelVersionInputExamples',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelVersionInputExamples);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteModelVersionInputExamplesRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteModelVersionInputExamples = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteModelVersionInputExamples',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteModelVersionInputExamplesRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteModelVersionInputExamplesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteModelVersionInputExamplesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteModelVersionInputExamples =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModelVersionInputExamples',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModelVersionInputExamples,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteModelVersionInputExamplesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteModelVersionInputExamples =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModelVersionInputExamples',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModelVersionInputExamples);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModelStarsRequest,
 *   !proto.clarifai.api.MultiModelStarResponse>}
 */
const methodDescriptor_V2_PostModelStars = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelStars',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelStarsRequest,
  proto.clarifai.api.MultiModelStarResponse,
  /**
   * @param {!proto.clarifai.api.PostModelStarsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelStarResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModelStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModelStarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModelStarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModelStars =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModelStars',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelStars,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModelStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelStarResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModelStars =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModelStars',
      request,
      metadata || {},
      methodDescriptor_V2_PostModelStars);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteModelStarsRequest,
 *   !proto.clarifai.api.DeleteModelStarsResponse>}
 */
const methodDescriptor_V2_DeleteModelStars = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteModelStars',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteModelStarsRequest,
  proto.clarifai.api.DeleteModelStarsResponse,
  /**
   * @param {!proto.clarifai.api.DeleteModelStarsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.DeleteModelStarsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteModelStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.DeleteModelStarsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.DeleteModelStarsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteModelStars =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModelStars',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModelStars,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteModelStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.DeleteModelStarsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteModelStars =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModelStars',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModelStars);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostUserStarsRequest,
 *   !proto.clarifai.api.MultiUserStarResponse>}
 */
const methodDescriptor_V2_PostUserStars = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostUserStars',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostUserStarsRequest,
  proto.clarifai.api.MultiUserStarResponse,
  /**
   * @param {!proto.clarifai.api.PostUserStarsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiUserStarResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostUserStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiUserStarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiUserStarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postUserStars =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostUserStars',
      request,
      metadata || {},
      methodDescriptor_V2_PostUserStars,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostUserStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiUserStarResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postUserStars =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostUserStars',
      request,
      metadata || {},
      methodDescriptor_V2_PostUserStars);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteUserStarsRequest,
 *   !proto.clarifai.api.DeleteUserStarsResponse>}
 */
const methodDescriptor_V2_DeleteUserStars = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteUserStars',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteUserStarsRequest,
  proto.clarifai.api.DeleteUserStarsResponse,
  /**
   * @param {!proto.clarifai.api.DeleteUserStarsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.DeleteUserStarsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteUserStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.DeleteUserStarsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.DeleteUserStarsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteUserStars =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteUserStars',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteUserStars,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteUserStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.DeleteUserStarsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteUserStars =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteUserStars',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteUserStars);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostWorkflowStarsRequest,
 *   !proto.clarifai.api.MultiWorkflowStarResponse>}
 */
const methodDescriptor_V2_PostWorkflowStars = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWorkflowStars',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWorkflowStarsRequest,
  proto.clarifai.api.MultiWorkflowStarResponse,
  /**
   * @param {!proto.clarifai.api.PostWorkflowStarsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowStarResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostWorkflowStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowStarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowStarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postWorkflowStars =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowStars',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowStars,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostWorkflowStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowStarResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postWorkflowStars =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowStars',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowStars);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteWorkflowStarsRequest,
 *   !proto.clarifai.api.DeleteWorkflowStarsResponse>}
 */
const methodDescriptor_V2_DeleteWorkflowStars = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteWorkflowStars',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteWorkflowStarsRequest,
  proto.clarifai.api.DeleteWorkflowStarsResponse,
  /**
   * @param {!proto.clarifai.api.DeleteWorkflowStarsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.DeleteWorkflowStarsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteWorkflowStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.DeleteWorkflowStarsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.DeleteWorkflowStarsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteWorkflowStars =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflowStars',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflowStars,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteWorkflowStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.DeleteWorkflowStarsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteWorkflowStars =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflowStars',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflowStars);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAppStarsRequest,
 *   !proto.clarifai.api.MultiAppStarResponse>}
 */
const methodDescriptor_V2_PostAppStars = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAppStars',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAppStarsRequest,
  proto.clarifai.api.MultiAppStarResponse,
  /**
   * @param {!proto.clarifai.api.PostAppStarsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppStarResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAppStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAppStarResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAppStarResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAppStars =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAppStars',
      request,
      metadata || {},
      methodDescriptor_V2_PostAppStars,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAppStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppStarResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAppStars =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAppStars',
      request,
      metadata || {},
      methodDescriptor_V2_PostAppStars);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteAppStarsRequest,
 *   !proto.clarifai.api.DeleteAppStarsResponse>}
 */
const methodDescriptor_V2_DeleteAppStars = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteAppStars',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteAppStarsRequest,
  proto.clarifai.api.DeleteAppStarsResponse,
  /**
   * @param {!proto.clarifai.api.DeleteAppStarsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.DeleteAppStarsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteAppStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.DeleteAppStarsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.DeleteAppStarsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteAppStars =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAppStars',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAppStars,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteAppStarsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.DeleteAppStarsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteAppStars =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAppStars',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAppStars);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetWorkflowRequest,
 *   !proto.clarifai.api.SingleWorkflowResponse>}
 */
const methodDescriptor_V2_GetWorkflow = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetWorkflow',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetWorkflowRequest,
  proto.clarifai.api.SingleWorkflowResponse,
  /**
   * @param {!proto.clarifai.api.GetWorkflowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleWorkflowResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetWorkflowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleWorkflowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleWorkflowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getWorkflow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetWorkflow',
      request,
      metadata || {},
      methodDescriptor_V2_GetWorkflow,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetWorkflowRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleWorkflowResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getWorkflow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetWorkflow',
      request,
      metadata || {},
      methodDescriptor_V2_GetWorkflow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListWorkflowsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodDescriptor_V2_ListWorkflows = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListWorkflows',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListWorkflowsRequest,
  proto.clarifai.api.MultiWorkflowResponse,
  /**
   * @param {!proto.clarifai.api.ListWorkflowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listWorkflows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_ListWorkflows,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listWorkflows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_ListWorkflows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListPublicWorkflowsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodDescriptor_V2_ListPublicWorkflows = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListPublicWorkflows',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListPublicWorkflowsRequest,
  proto.clarifai.api.MultiWorkflowResponse,
  /**
   * @param {!proto.clarifai.api.ListPublicWorkflowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListPublicWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listPublicWorkflows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListPublicWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_ListPublicWorkflows,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListPublicWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listPublicWorkflows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListPublicWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_ListPublicWorkflows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostWorkflowsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodDescriptor_V2_PostWorkflows = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWorkflows',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWorkflowsRequest,
  proto.clarifai.api.MultiWorkflowResponse,
  /**
   * @param {!proto.clarifai.api.PostWorkflowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postWorkflows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflows,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postWorkflows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchWorkflowsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodDescriptor_V2_PatchWorkflows = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchWorkflows',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchWorkflowsRequest,
  proto.clarifai.api.MultiWorkflowResponse,
  /**
   * @param {!proto.clarifai.api.PatchWorkflowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchWorkflows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_PatchWorkflows,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchWorkflows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_PatchWorkflows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchWorkflowIdsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodDescriptor_V2_PatchWorkflowIds = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchWorkflowIds',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchWorkflowIdsRequest,
  proto.clarifai.api.MultiWorkflowResponse,
  /**
   * @param {!proto.clarifai.api.PatchWorkflowIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchWorkflowIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchWorkflowIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchWorkflowIds',
      request,
      metadata || {},
      methodDescriptor_V2_PatchWorkflowIds,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchWorkflowIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchWorkflowIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchWorkflowIds',
      request,
      metadata || {},
      methodDescriptor_V2_PatchWorkflowIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteWorkflowRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteWorkflow = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteWorkflow',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteWorkflowRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteWorkflowRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteWorkflowRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteWorkflow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflow',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflow,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteWorkflowRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteWorkflow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflow',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteWorkflowsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteWorkflows = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteWorkflows',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteWorkflowsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteWorkflowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteWorkflows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflows,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteWorkflows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflows',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostWorkflowResultsRequest,
 *   !proto.clarifai.api.PostWorkflowResultsResponse>}
 */
const methodDescriptor_V2_PostWorkflowResults = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWorkflowResults',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWorkflowResultsRequest,
  proto.clarifai.api.PostWorkflowResultsResponse,
  /**
   * @param {!proto.clarifai.api.PostWorkflowResultsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostWorkflowResultsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostWorkflowResultsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostWorkflowResultsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostWorkflowResultsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postWorkflowResults =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowResults',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowResults,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostWorkflowResultsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostWorkflowResultsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postWorkflowResults =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowResults',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowResults);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostWorkflowResultsSimilarityRequest,
 *   !proto.clarifai.api.PostWorkflowResultsSimilarityResponse>}
 */
const methodDescriptor_V2_PostWorkflowResultsSimilarity = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWorkflowResultsSimilarity',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWorkflowResultsSimilarityRequest,
  proto.clarifai.api.PostWorkflowResultsSimilarityResponse,
  /**
   * @param {!proto.clarifai.api.PostWorkflowResultsSimilarityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostWorkflowResultsSimilarityResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostWorkflowResultsSimilarityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostWorkflowResultsSimilarityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostWorkflowResultsSimilarityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postWorkflowResultsSimilarity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowResultsSimilarity',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowResultsSimilarity,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostWorkflowResultsSimilarityRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostWorkflowResultsSimilarityResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postWorkflowResultsSimilarity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowResultsSimilarity',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowResultsSimilarity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListWorkflowVersionsRequest,
 *   !proto.clarifai.api.MultiWorkflowVersionResponse>}
 */
const methodDescriptor_V2_ListWorkflowVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListWorkflowVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListWorkflowVersionsRequest,
  proto.clarifai.api.MultiWorkflowVersionResponse,
  /**
   * @param {!proto.clarifai.api.ListWorkflowVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListWorkflowVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listWorkflowVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListWorkflowVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListWorkflowVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListWorkflowVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listWorkflowVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListWorkflowVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListWorkflowVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetWorkflowVersionRequest,
 *   !proto.clarifai.api.SingleWorkflowVersionResponse>}
 */
const methodDescriptor_V2_GetWorkflowVersion = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetWorkflowVersion',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetWorkflowVersionRequest,
  proto.clarifai.api.SingleWorkflowVersionResponse,
  /**
   * @param {!proto.clarifai.api.GetWorkflowVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleWorkflowVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetWorkflowVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleWorkflowVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleWorkflowVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getWorkflowVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetWorkflowVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetWorkflowVersion,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetWorkflowVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleWorkflowVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getWorkflowVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetWorkflowVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetWorkflowVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteWorkflowVersionsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteWorkflowVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteWorkflowVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteWorkflowVersionsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteWorkflowVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteWorkflowVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteWorkflowVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflowVersions',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflowVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteWorkflowVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteWorkflowVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflowVersions',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflowVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchWorkflowVersionsRequest,
 *   !proto.clarifai.api.MultiWorkflowVersionResponse>}
 */
const methodDescriptor_V2_PatchWorkflowVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchWorkflowVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchWorkflowVersionsRequest,
  proto.clarifai.api.MultiWorkflowVersionResponse,
  /**
   * @param {!proto.clarifai.api.PatchWorkflowVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchWorkflowVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchWorkflowVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchWorkflowVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PatchWorkflowVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchWorkflowVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchWorkflowVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchWorkflowVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PatchWorkflowVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostWorkflowMetricsRequest,
 *   !proto.clarifai.api.MultiWorkflowMetricsResponse>}
 */
const methodDescriptor_V2_PostWorkflowMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWorkflowMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWorkflowMetricsRequest,
  proto.clarifai.api.MultiWorkflowMetricsResponse,
  /**
   * @param {!proto.clarifai.api.PostWorkflowMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostWorkflowMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postWorkflowMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostWorkflowMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postWorkflowMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostWorkflowMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_PostWorkflowMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetWorkflowMetricsRequest,
 *   !proto.clarifai.api.SingleWorkflowMetricsResponse>}
 */
const methodDescriptor_V2_GetWorkflowMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetWorkflowMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetWorkflowMetricsRequest,
  proto.clarifai.api.SingleWorkflowMetricsResponse,
  /**
   * @param {!proto.clarifai.api.GetWorkflowMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleWorkflowMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetWorkflowMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleWorkflowMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleWorkflowMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getWorkflowMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetWorkflowMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetWorkflowMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetWorkflowMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleWorkflowMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getWorkflowMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetWorkflowMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetWorkflowMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetWorkflowNodeMetricsRequest,
 *   !proto.clarifai.api.SingleWorkflowNodeMetricsResponse>}
 */
const methodDescriptor_V2_GetWorkflowNodeMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetWorkflowNodeMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetWorkflowNodeMetricsRequest,
  proto.clarifai.api.SingleWorkflowNodeMetricsResponse,
  /**
   * @param {!proto.clarifai.api.GetWorkflowNodeMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleWorkflowNodeMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetWorkflowNodeMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleWorkflowNodeMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleWorkflowNodeMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getWorkflowNodeMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetWorkflowNodeMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetWorkflowNodeMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetWorkflowNodeMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleWorkflowNodeMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getWorkflowNodeMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetWorkflowNodeMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetWorkflowNodeMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListWorkflowMetricsRequest,
 *   !proto.clarifai.api.MultiWorkflowMetricsResponse>}
 */
const methodDescriptor_V2_ListWorkflowMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListWorkflowMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListWorkflowMetricsRequest,
  proto.clarifai.api.MultiWorkflowMetricsResponse,
  /**
   * @param {!proto.clarifai.api.ListWorkflowMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListWorkflowMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWorkflowMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWorkflowMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listWorkflowMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListWorkflowMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_ListWorkflowMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListWorkflowMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listWorkflowMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListWorkflowMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_ListWorkflowMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteWorkflowMetricsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteWorkflowMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteWorkflowMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteWorkflowMetricsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteWorkflowMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteWorkflowMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteWorkflowMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflowMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflowMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteWorkflowMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteWorkflowMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWorkflowMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWorkflowMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetKeyRequest,
 *   !proto.clarifai.api.SingleKeyResponse>}
 */
const methodDescriptor_V2_GetKey = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetKey',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetKeyRequest,
  proto.clarifai.api.SingleKeyResponse,
  /**
   * @param {!proto.clarifai.api.GetKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleKeyResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetKey',
      request,
      metadata || {},
      methodDescriptor_V2_GetKey,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleKeyResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetKey',
      request,
      metadata || {},
      methodDescriptor_V2_GetKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListKeysRequest,
 *   !proto.clarifai.api.MultiKeyResponse>}
 */
const methodDescriptor_V2_ListKeys = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListKeys',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListKeysRequest,
  proto.clarifai.api.MultiKeyResponse,
  /**
   * @param {!proto.clarifai.api.ListKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKeyResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListKeys',
      request,
      metadata || {},
      methodDescriptor_V2_ListKeys,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKeyResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListKeys',
      request,
      metadata || {},
      methodDescriptor_V2_ListKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAppKeysRequest,
 *   !proto.clarifai.api.MultiKeyResponse>}
 */
const methodDescriptor_V2_ListAppKeys = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListAppKeys',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAppKeysRequest,
  proto.clarifai.api.MultiKeyResponse,
  /**
   * @param {!proto.clarifai.api.ListAppKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKeyResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAppKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listAppKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListAppKeys',
      request,
      metadata || {},
      methodDescriptor_V2_ListAppKeys,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAppKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKeyResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listAppKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListAppKeys',
      request,
      metadata || {},
      methodDescriptor_V2_ListAppKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteKeyRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteKey = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteKey',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteKeyRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteKey',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteKey,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteKey',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostKeysRequest,
 *   !proto.clarifai.api.MultiKeyResponse>}
 */
const methodDescriptor_V2_PostKeys = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostKeys',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostKeysRequest,
  proto.clarifai.api.MultiKeyResponse,
  /**
   * @param {!proto.clarifai.api.PostKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKeyResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostKeys',
      request,
      metadata || {},
      methodDescriptor_V2_PostKeys,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKeyResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostKeys',
      request,
      metadata || {},
      methodDescriptor_V2_PostKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchKeysRequest,
 *   !proto.clarifai.api.MultiKeyResponse>}
 */
const methodDescriptor_V2_PatchKeys = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchKeys',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchKeysRequest,
  proto.clarifai.api.MultiKeyResponse,
  /**
   * @param {!proto.clarifai.api.PatchKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKeyResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchKeys',
      request,
      metadata || {},
      methodDescriptor_V2_PatchKeys,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKeyResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchKeys',
      request,
      metadata || {},
      methodDescriptor_V2_PatchKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.MyScopesRequest,
 *   !proto.clarifai.api.MultiScopeResponse>}
 */
const methodDescriptor_V2_MyScopes = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/MyScopes',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.MyScopesRequest,
  proto.clarifai.api.MultiScopeResponse,
  /**
   * @param {!proto.clarifai.api.MyScopesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiScopeResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.MyScopesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiScopeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiScopeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.myScopes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/MyScopes',
      request,
      metadata || {},
      methodDescriptor_V2_MyScopes,
      callback);
};


/**
 * @param {!proto.clarifai.api.MyScopesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiScopeResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.myScopes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/MyScopes',
      request,
      metadata || {},
      methodDescriptor_V2_MyScopes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.MyScopesUserRequest,
 *   !proto.clarifai.api.MultiScopeUserResponse>}
 */
const methodDescriptor_V2_MyScopesUser = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/MyScopesUser',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.MyScopesUserRequest,
  proto.clarifai.api.MultiScopeUserResponse,
  /**
   * @param {!proto.clarifai.api.MyScopesUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiScopeUserResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.MyScopesUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiScopeUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiScopeUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.myScopesUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/MyScopesUser',
      request,
      metadata || {},
      methodDescriptor_V2_MyScopesUser,
      callback);
};


/**
 * @param {!proto.clarifai.api.MyScopesUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiScopeUserResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.myScopesUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/MyScopesUser',
      request,
      metadata || {},
      methodDescriptor_V2_MyScopesUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.MyScopesRootRequest,
 *   !proto.clarifai.api.MultiScopeRootResponse>}
 */
const methodDescriptor_V2_MyScopesRoot = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/MyScopesRoot',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.MyScopesRootRequest,
  proto.clarifai.api.MultiScopeRootResponse,
  /**
   * @param {!proto.clarifai.api.MyScopesRootRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiScopeRootResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.MyScopesRootRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiScopeRootResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiScopeRootResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.myScopesRoot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/MyScopesRoot',
      request,
      metadata || {},
      methodDescriptor_V2_MyScopesRoot,
      callback);
};


/**
 * @param {!proto.clarifai.api.MyScopesRootRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiScopeRootResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.myScopesRoot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/MyScopesRoot',
      request,
      metadata || {},
      methodDescriptor_V2_MyScopesRoot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListScopesRequest,
 *   !proto.clarifai.api.MultiScopeDepsResponse>}
 */
const methodDescriptor_V2_ListScopes = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListScopes',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListScopesRequest,
  proto.clarifai.api.MultiScopeDepsResponse,
  /**
   * @param {!proto.clarifai.api.ListScopesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiScopeDepsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListScopesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiScopeDepsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiScopeDepsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listScopes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListScopes',
      request,
      metadata || {},
      methodDescriptor_V2_ListScopes,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListScopesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiScopeDepsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listScopes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListScopes',
      request,
      metadata || {},
      methodDescriptor_V2_ListScopes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetAppRequest,
 *   !proto.clarifai.api.SingleAppResponse>}
 */
const methodDescriptor_V2_GetApp = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetApp',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetAppRequest,
  proto.clarifai.api.SingleAppResponse,
  /**
   * @param {!proto.clarifai.api.GetAppRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleAppResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetAppRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleAppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleAppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetApp',
      request,
      metadata || {},
      methodDescriptor_V2_GetApp,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetAppRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleAppResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetApp',
      request,
      metadata || {},
      methodDescriptor_V2_GetApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAppsRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodDescriptor_V2_ListApps = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListApps',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAppsRequest,
  proto.clarifai.api.MultiAppResponse,
  /**
   * @param {!proto.clarifai.api.ListAppsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listApps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListApps',
      request,
      metadata || {},
      methodDescriptor_V2_ListApps,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listApps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListApps',
      request,
      metadata || {},
      methodDescriptor_V2_ListApps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteAppRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteApp = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteApp',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteAppRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteAppRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteAppRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteApp',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteApp,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteAppRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteApp',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAppsRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodDescriptor_V2_PostApps = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostApps',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAppsRequest,
  proto.clarifai.api.MultiAppResponse,
  /**
   * @param {!proto.clarifai.api.PostAppsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postApps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostApps',
      request,
      metadata || {},
      methodDescriptor_V2_PostApps,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postApps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostApps',
      request,
      metadata || {},
      methodDescriptor_V2_PostApps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAppsRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodDescriptor_V2_PatchApps = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchApps',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAppsRequest,
  proto.clarifai.api.MultiAppResponse,
  /**
   * @param {!proto.clarifai.api.PatchAppsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchApps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchApps',
      request,
      metadata || {},
      methodDescriptor_V2_PatchApps,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchApps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchApps',
      request,
      metadata || {},
      methodDescriptor_V2_PatchApps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAppsIdsRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodDescriptor_V2_PatchAppsIds = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchAppsIds',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAppsIdsRequest,
  proto.clarifai.api.MultiAppResponse,
  /**
   * @param {!proto.clarifai.api.PatchAppsIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAppsIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchAppsIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchAppsIds',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAppsIds,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAppsIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchAppsIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchAppsIds',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAppsIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAppRequest,
 *   !proto.clarifai.api.SingleAppResponse>}
 */
const methodDescriptor_V2_PatchApp = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchApp',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAppRequest,
  proto.clarifai.api.SingleAppResponse,
  /**
   * @param {!proto.clarifai.api.PatchAppRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleAppResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAppRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleAppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleAppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchApp',
      request,
      metadata || {},
      methodDescriptor_V2_PatchApp,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAppRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleAppResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchApp',
      request,
      metadata || {},
      methodDescriptor_V2_PatchApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAppOwnerRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PatchAppOwner = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchAppOwner',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAppOwnerRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PatchAppOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAppOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchAppOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchAppOwner',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAppOwner,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAppOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchAppOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchAppOwner',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAppOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAppsSearchesRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodDescriptor_V2_PostAppsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAppsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAppsSearchesRequest,
  proto.clarifai.api.MultiAppResponse,
  /**
   * @param {!proto.clarifai.api.PostAppsSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAppsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAppResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAppResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAppsSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAppsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostAppsSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAppsSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAppsSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAppsSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostAppsSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetUserRequest,
 *   !proto.clarifai.api.SingleUserResponse>}
 */
const methodDescriptor_V2_GetUser = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetUser',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetUserRequest,
  proto.clarifai.api.SingleUserResponse,
  /**
   * @param {!proto.clarifai.api.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleUserResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetUser',
      request,
      metadata || {},
      methodDescriptor_V2_GetUser,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleUserResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetUser',
      request,
      metadata || {},
      methodDescriptor_V2_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListUsersRequest,
 *   !proto.clarifai.api.MultiUserResponse>}
 */
const methodDescriptor_V2_ListUsers = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListUsers',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListUsersRequest,
  proto.clarifai.api.MultiUserResponse,
  /**
   * @param {!proto.clarifai.api.ListUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiUserResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListUsers',
      request,
      metadata || {},
      methodDescriptor_V2_ListUsers,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiUserResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListUsers',
      request,
      metadata || {},
      methodDescriptor_V2_ListUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostUserConsentRequest,
 *   !proto.clarifai.api.SingleUserResponse>}
 */
const methodDescriptor_V2_PostUserConsent = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostUserConsent',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostUserConsentRequest,
  proto.clarifai.api.SingleUserResponse,
  /**
   * @param {!proto.clarifai.api.PostUserConsentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleUserResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostUserConsentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postUserConsent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostUserConsent',
      request,
      metadata || {},
      methodDescriptor_V2_PostUserConsent,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostUserConsentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleUserResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postUserConsent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostUserConsent',
      request,
      metadata || {},
      methodDescriptor_V2_PostUserConsent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchUserRequest,
 *   !proto.clarifai.api.SingleUserResponse>}
 */
const methodDescriptor_V2_PatchUser = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchUser',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchUserRequest,
  proto.clarifai.api.SingleUserResponse,
  /**
   * @param {!proto.clarifai.api.PatchUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleUserResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchUser',
      request,
      metadata || {},
      methodDescriptor_V2_PatchUser,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleUserResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchUser',
      request,
      metadata || {},
      methodDescriptor_V2_PatchUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostUserAccessRequest,
 *   !proto.clarifai.api.MultiUserAccessResponse>}
 */
const methodDescriptor_V2_PostUserAccess = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostUserAccess',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostUserAccessRequest,
  proto.clarifai.api.MultiUserAccessResponse,
  /**
   * @param {!proto.clarifai.api.PostUserAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiUserAccessResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostUserAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiUserAccessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiUserAccessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postUserAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostUserAccess',
      request,
      metadata || {},
      methodDescriptor_V2_PostUserAccess,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostUserAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiUserAccessResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postUserAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostUserAccess',
      request,
      metadata || {},
      methodDescriptor_V2_PostUserAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetUserAccessRequest,
 *   !proto.clarifai.api.SingleUserAccessResponse>}
 */
const methodDescriptor_V2_GetUserAccess = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetUserAccess',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetUserAccessRequest,
  proto.clarifai.api.SingleUserAccessResponse,
  /**
   * @param {!proto.clarifai.api.GetUserAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleUserAccessResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetUserAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleUserAccessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleUserAccessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getUserAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetUserAccess',
      request,
      metadata || {},
      methodDescriptor_V2_GetUserAccess,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetUserAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleUserAccessResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getUserAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetUserAccess',
      request,
      metadata || {},
      methodDescriptor_V2_GetUserAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostEmailsRequest,
 *   !proto.clarifai.api.MultipleEmailResponse>}
 */
const methodDescriptor_V2_PostEmails = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostEmails',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostEmailsRequest,
  proto.clarifai.api.MultipleEmailResponse,
  /**
   * @param {!proto.clarifai.api.PostEmailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultipleEmailResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostEmailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultipleEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultipleEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postEmails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostEmails',
      request,
      metadata || {},
      methodDescriptor_V2_PostEmails,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostEmailsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultipleEmailResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postEmails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostEmails',
      request,
      metadata || {},
      methodDescriptor_V2_PostEmails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListEmailsRequest,
 *   !proto.clarifai.api.MultipleEmailResponse>}
 */
const methodDescriptor_V2_ListEmails = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListEmails',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListEmailsRequest,
  proto.clarifai.api.MultipleEmailResponse,
  /**
   * @param {!proto.clarifai.api.ListEmailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultipleEmailResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListEmailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultipleEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultipleEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listEmails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListEmails',
      request,
      metadata || {},
      methodDescriptor_V2_ListEmails,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListEmailsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultipleEmailResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listEmails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListEmails',
      request,
      metadata || {},
      methodDescriptor_V2_ListEmails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostResendVerifyRequest,
 *   !proto.clarifai.api.SingleResendVerifyResponse>}
 */
const methodDescriptor_V2_PostResendVerifyEmail = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostResendVerifyEmail',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostResendVerifyRequest,
  proto.clarifai.api.SingleResendVerifyResponse,
  /**
   * @param {!proto.clarifai.api.PostResendVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleResendVerifyResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostResendVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleResendVerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleResendVerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postResendVerifyEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostResendVerifyEmail',
      request,
      metadata || {},
      methodDescriptor_V2_PostResendVerifyEmail,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostResendVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleResendVerifyResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postResendVerifyEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostResendVerifyEmail',
      request,
      metadata || {},
      methodDescriptor_V2_PostResendVerifyEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteEmailRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteEmail = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteEmail',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteEmailRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteEmail',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteEmail,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteEmail',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostPrimaryEmailRequest,
 *   !proto.clarifai.api.SingleEmailResponse>}
 */
const methodDescriptor_V2_PostPrimaryEmail = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostPrimaryEmail',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostPrimaryEmailRequest,
  proto.clarifai.api.SingleEmailResponse,
  /**
   * @param {!proto.clarifai.api.PostPrimaryEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleEmailResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostPrimaryEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postPrimaryEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostPrimaryEmail',
      request,
      metadata || {},
      methodDescriptor_V2_PostPrimaryEmail,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostPrimaryEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleEmailResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postPrimaryEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostPrimaryEmail',
      request,
      metadata || {},
      methodDescriptor_V2_PostPrimaryEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostValidatePasswordRequest,
 *   !proto.clarifai.api.SinglePasswordValidationResponse>}
 */
const methodDescriptor_V2_PostValidatePassword = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostValidatePassword',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostValidatePasswordRequest,
  proto.clarifai.api.SinglePasswordValidationResponse,
  /**
   * @param {!proto.clarifai.api.PostValidatePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SinglePasswordValidationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostValidatePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SinglePasswordValidationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SinglePasswordValidationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postValidatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostValidatePassword',
      request,
      metadata || {},
      methodDescriptor_V2_PostValidatePassword,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostValidatePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SinglePasswordValidationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postValidatePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostValidatePassword',
      request,
      metadata || {},
      methodDescriptor_V2_PostValidatePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListGlobalPasswordPoliciesRequest,
 *   !proto.clarifai.api.MultiplePasswordPoliciesResponse>}
 */
const methodDescriptor_V2_ListGlobalPasswordPolicies = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListGlobalPasswordPolicies',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListGlobalPasswordPoliciesRequest,
  proto.clarifai.api.MultiplePasswordPoliciesResponse,
  /**
   * @param {!proto.clarifai.api.ListGlobalPasswordPoliciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiplePasswordPoliciesResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListGlobalPasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiplePasswordPoliciesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiplePasswordPoliciesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listGlobalPasswordPolicies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListGlobalPasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_ListGlobalPasswordPolicies,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListGlobalPasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiplePasswordPoliciesResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listGlobalPasswordPolicies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListGlobalPasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_ListGlobalPasswordPolicies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListPasswordPoliciesRequest,
 *   !proto.clarifai.api.MultiplePasswordPoliciesResponse>}
 */
const methodDescriptor_V2_ListPasswordPolicies = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListPasswordPolicies',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListPasswordPoliciesRequest,
  proto.clarifai.api.MultiplePasswordPoliciesResponse,
  /**
   * @param {!proto.clarifai.api.ListPasswordPoliciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiplePasswordPoliciesResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListPasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiplePasswordPoliciesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiplePasswordPoliciesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listPasswordPolicies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListPasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_ListPasswordPolicies,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListPasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiplePasswordPoliciesResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listPasswordPolicies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListPasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_ListPasswordPolicies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostPasswordPoliciesRequest,
 *   !proto.clarifai.api.MultiplePasswordPoliciesResponse>}
 */
const methodDescriptor_V2_PostPasswordPolicies = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostPasswordPolicies',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostPasswordPoliciesRequest,
  proto.clarifai.api.MultiplePasswordPoliciesResponse,
  /**
   * @param {!proto.clarifai.api.PostPasswordPoliciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiplePasswordPoliciesResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostPasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiplePasswordPoliciesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiplePasswordPoliciesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postPasswordPolicies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostPasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_PostPasswordPolicies,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostPasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiplePasswordPoliciesResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postPasswordPolicies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostPasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_PostPasswordPolicies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchPasswordPoliciesRequest,
 *   !proto.clarifai.api.MultiplePasswordPoliciesResponse>}
 */
const methodDescriptor_V2_PatchPasswordPolicies = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchPasswordPolicies',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchPasswordPoliciesRequest,
  proto.clarifai.api.MultiplePasswordPoliciesResponse,
  /**
   * @param {!proto.clarifai.api.PatchPasswordPoliciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiplePasswordPoliciesResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchPasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiplePasswordPoliciesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiplePasswordPoliciesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchPasswordPolicies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchPasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_PatchPasswordPolicies,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchPasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiplePasswordPoliciesResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchPasswordPolicies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchPasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_PatchPasswordPolicies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeletePasswordPoliciesRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeletePasswordPolicies = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeletePasswordPolicies',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeletePasswordPoliciesRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeletePasswordPoliciesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeletePasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deletePasswordPolicies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeletePasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_DeletePasswordPolicies,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeletePasswordPoliciesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deletePasswordPolicies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeletePasswordPolicies',
      request,
      metadata || {},
      methodDescriptor_V2_DeletePasswordPolicies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.UserFeatureConfigRequest,
 *   !proto.clarifai.api.SingleUserFeatureConfigResponse>}
 */
const methodDescriptor_V2_GetUserFeatureConfig = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetUserFeatureConfig',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.UserFeatureConfigRequest,
  proto.clarifai.api.SingleUserFeatureConfigResponse,
  /**
   * @param {!proto.clarifai.api.UserFeatureConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleUserFeatureConfigResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.UserFeatureConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleUserFeatureConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleUserFeatureConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getUserFeatureConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetUserFeatureConfig',
      request,
      metadata || {},
      methodDescriptor_V2_GetUserFeatureConfig,
      callback);
};


/**
 * @param {!proto.clarifai.api.UserFeatureConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleUserFeatureConfigResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getUserFeatureConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetUserFeatureConfig',
      request,
      metadata || {},
      methodDescriptor_V2_GetUserFeatureConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostOrganizationsRequest,
 *   !proto.clarifai.api.MultiOrganizationResponse>}
 */
const methodDescriptor_V2_PostOrganizations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostOrganizations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostOrganizationsRequest,
  proto.clarifai.api.MultiOrganizationResponse,
  /**
   * @param {!proto.clarifai.api.PostOrganizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiOrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiOrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostOrganizations',
      request,
      metadata || {},
      methodDescriptor_V2_PostOrganizations,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostOrganizations',
      request,
      metadata || {},
      methodDescriptor_V2_PostOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListUsersOrganizationsRequest,
 *   !proto.clarifai.api.MultiUsersOrganizationsResponse>}
 */
const methodDescriptor_V2_ListUsersOrganizations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListUsersOrganizations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListUsersOrganizationsRequest,
  proto.clarifai.api.MultiUsersOrganizationsResponse,
  /**
   * @param {!proto.clarifai.api.ListUsersOrganizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiUsersOrganizationsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListUsersOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiUsersOrganizationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiUsersOrganizationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listUsersOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListUsersOrganizations',
      request,
      metadata || {},
      methodDescriptor_V2_ListUsersOrganizations,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListUsersOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiUsersOrganizationsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listUsersOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListUsersOrganizations',
      request,
      metadata || {},
      methodDescriptor_V2_ListUsersOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListOrganizationsRequest,
 *   !proto.clarifai.api.MultiOrganizationResponse>}
 */
const methodDescriptor_V2_ListOrganizations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListOrganizations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListOrganizationsRequest,
  proto.clarifai.api.MultiOrganizationResponse,
  /**
   * @param {!proto.clarifai.api.ListOrganizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiOrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiOrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListOrganizations',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrganizations,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListOrganizations',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetOrganizationRequest,
 *   !proto.clarifai.api.SingleOrganizationResponse>}
 */
const methodDescriptor_V2_GetOrganization = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetOrganization',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetOrganizationRequest,
  proto.clarifai.api.SingleOrganizationResponse,
  /**
   * @param {!proto.clarifai.api.GetOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleOrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleOrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleOrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_V2_GetOrganization,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleOrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetOrganization',
      request,
      metadata || {},
      methodDescriptor_V2_GetOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchOrganizationRequest,
 *   !proto.clarifai.api.SingleOrganizationResponse>}
 */
const methodDescriptor_V2_PatchOrganization = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchOrganization',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchOrganizationRequest,
  proto.clarifai.api.SingleOrganizationResponse,
  /**
   * @param {!proto.clarifai.api.PatchOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleOrganizationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleOrganizationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleOrganizationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchOrganization',
      request,
      metadata || {},
      methodDescriptor_V2_PatchOrganization,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleOrganizationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchOrganization',
      request,
      metadata || {},
      methodDescriptor_V2_PatchOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteOrganizationRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteOrganization = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteOrganization',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteOrganizationRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteOrganization',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteOrganization,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteOrganization',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListOrganizationMembersRequest,
 *   !proto.clarifai.api.MultiOrganizationMemberResponse>}
 */
const methodDescriptor_V2_ListOrganizationMembers = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListOrganizationMembers',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListOrganizationMembersRequest,
  proto.clarifai.api.MultiOrganizationMemberResponse,
  /**
   * @param {!proto.clarifai.api.ListOrganizationMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOrganizationMemberResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListOrganizationMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiOrganizationMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiOrganizationMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listOrganizationMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListOrganizationMembers',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrganizationMembers,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListOrganizationMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOrganizationMemberResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listOrganizationMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListOrganizationMembers',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrganizationMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListOrganizationAppMembersRequest,
 *   !proto.clarifai.api.MultiOrganizationMemberResponse>}
 */
const methodDescriptor_V2_ListOrganizationAppMembers = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListOrganizationAppMembers',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListOrganizationAppMembersRequest,
  proto.clarifai.api.MultiOrganizationMemberResponse,
  /**
   * @param {!proto.clarifai.api.ListOrganizationAppMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOrganizationMemberResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListOrganizationAppMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiOrganizationMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiOrganizationMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listOrganizationAppMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListOrganizationAppMembers',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrganizationAppMembers,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListOrganizationAppMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOrganizationMemberResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listOrganizationAppMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListOrganizationAppMembers',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrganizationAppMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostOrganizationMemberRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostOrganizationMember = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostOrganizationMember',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostOrganizationMemberRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostOrganizationMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostOrganizationMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postOrganizationMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostOrganizationMember',
      request,
      metadata || {},
      methodDescriptor_V2_PostOrganizationMember,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostOrganizationMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postOrganizationMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostOrganizationMember',
      request,
      metadata || {},
      methodDescriptor_V2_PostOrganizationMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchOrganizationMembersRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PatchOrganizationMember = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchOrganizationMember',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchOrganizationMembersRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PatchOrganizationMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchOrganizationMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchOrganizationMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchOrganizationMember',
      request,
      metadata || {},
      methodDescriptor_V2_PatchOrganizationMember,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchOrganizationMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchOrganizationMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchOrganizationMember',
      request,
      metadata || {},
      methodDescriptor_V2_PatchOrganizationMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteOrganizationMemberRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteOrganizationMember = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteOrganizationMember',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteOrganizationMemberRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteOrganizationMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteOrganizationMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteOrganizationMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteOrganizationMember',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteOrganizationMember,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteOrganizationMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteOrganizationMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteOrganizationMember',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteOrganizationMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostOrganizationInvitationsRequest,
 *   !proto.clarifai.api.MultiOrganizationInvitationResponse>}
 */
const methodDescriptor_V2_PostOrganizationInvitations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostOrganizationInvitations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostOrganizationInvitationsRequest,
  proto.clarifai.api.MultiOrganizationInvitationResponse,
  /**
   * @param {!proto.clarifai.api.PostOrganizationInvitationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOrganizationInvitationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostOrganizationInvitationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiOrganizationInvitationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiOrganizationInvitationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postOrganizationInvitations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostOrganizationInvitations',
      request,
      metadata || {},
      methodDescriptor_V2_PostOrganizationInvitations,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostOrganizationInvitationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOrganizationInvitationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postOrganizationInvitations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostOrganizationInvitations',
      request,
      metadata || {},
      methodDescriptor_V2_PostOrganizationInvitations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchOrganizationInvitationsRequest,
 *   !proto.clarifai.api.MultiOrganizationInvitationResponse>}
 */
const methodDescriptor_V2_PatchOrganizationInvitations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchOrganizationInvitations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchOrganizationInvitationsRequest,
  proto.clarifai.api.MultiOrganizationInvitationResponse,
  /**
   * @param {!proto.clarifai.api.PatchOrganizationInvitationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOrganizationInvitationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchOrganizationInvitationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiOrganizationInvitationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiOrganizationInvitationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchOrganizationInvitations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchOrganizationInvitations',
      request,
      metadata || {},
      methodDescriptor_V2_PatchOrganizationInvitations,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchOrganizationInvitationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOrganizationInvitationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchOrganizationInvitations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchOrganizationInvitations',
      request,
      metadata || {},
      methodDescriptor_V2_PatchOrganizationInvitations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListOrganizationInvitationsRequest,
 *   !proto.clarifai.api.MultiOrganizationInvitationResponse>}
 */
const methodDescriptor_V2_ListOrganizationInvitations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListOrganizationInvitations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListOrganizationInvitationsRequest,
  proto.clarifai.api.MultiOrganizationInvitationResponse,
  /**
   * @param {!proto.clarifai.api.ListOrganizationInvitationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOrganizationInvitationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListOrganizationInvitationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiOrganizationInvitationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiOrganizationInvitationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listOrganizationInvitations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListOrganizationInvitations',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrganizationInvitations,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListOrganizationInvitationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOrganizationInvitationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listOrganizationInvitations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListOrganizationInvitations',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrganizationInvitations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetOrganizationInvitationRequest,
 *   !proto.clarifai.api.SingleOrganizationInvitationResponse>}
 */
const methodDescriptor_V2_GetOrganizationInvitation = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetOrganizationInvitation',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetOrganizationInvitationRequest,
  proto.clarifai.api.SingleOrganizationInvitationResponse,
  /**
   * @param {!proto.clarifai.api.GetOrganizationInvitationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleOrganizationInvitationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetOrganizationInvitationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleOrganizationInvitationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleOrganizationInvitationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getOrganizationInvitation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetOrganizationInvitation',
      request,
      metadata || {},
      methodDescriptor_V2_GetOrganizationInvitation,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetOrganizationInvitationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleOrganizationInvitationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getOrganizationInvitation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetOrganizationInvitation',
      request,
      metadata || {},
      methodDescriptor_V2_GetOrganizationInvitation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostDeclineOrganizationInvitationRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostDeclineOrganizationInvitation = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostDeclineOrganizationInvitation',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostDeclineOrganizationInvitationRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostDeclineOrganizationInvitationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostDeclineOrganizationInvitationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postDeclineOrganizationInvitation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostDeclineOrganizationInvitation',
      request,
      metadata || {},
      methodDescriptor_V2_PostDeclineOrganizationInvitation,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostDeclineOrganizationInvitationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postDeclineOrganizationInvitation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostDeclineOrganizationInvitation',
      request,
      metadata || {},
      methodDescriptor_V2_PostDeclineOrganizationInvitation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAcceptOrganizationInvitationRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostAcceptOrganizationInvitation = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAcceptOrganizationInvitation',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAcceptOrganizationInvitationRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostAcceptOrganizationInvitationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAcceptOrganizationInvitationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAcceptOrganizationInvitation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAcceptOrganizationInvitation',
      request,
      metadata || {},
      methodDescriptor_V2_PostAcceptOrganizationInvitation,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAcceptOrganizationInvitationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAcceptOrganizationInvitation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAcceptOrganizationInvitation',
      request,
      metadata || {},
      methodDescriptor_V2_PostAcceptOrganizationInvitation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetOrganizationInvitationPublicRequest,
 *   !proto.clarifai.api.SingleOrganizationInvitationResponse>}
 */
const methodDescriptor_V2_GetOrganizationInvitationPublic = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetOrganizationInvitationPublic',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetOrganizationInvitationPublicRequest,
  proto.clarifai.api.SingleOrganizationInvitationResponse,
  /**
   * @param {!proto.clarifai.api.GetOrganizationInvitationPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleOrganizationInvitationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetOrganizationInvitationPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleOrganizationInvitationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleOrganizationInvitationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getOrganizationInvitationPublic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetOrganizationInvitationPublic',
      request,
      metadata || {},
      methodDescriptor_V2_GetOrganizationInvitationPublic,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetOrganizationInvitationPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleOrganizationInvitationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getOrganizationInvitationPublic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetOrganizationInvitationPublic',
      request,
      metadata || {},
      methodDescriptor_V2_GetOrganizationInvitationPublic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteRequestingUserFromOrganizationRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteRequestingUserFromOrganization = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteRequestingUserFromOrganization',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteRequestingUserFromOrganizationRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteRequestingUserFromOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteRequestingUserFromOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteRequestingUserFromOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteRequestingUserFromOrganization',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteRequestingUserFromOrganization,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteRequestingUserFromOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteRequestingUserFromOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteRequestingUserFromOrganization',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteRequestingUserFromOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostIdentityProvidersRequest,
 *   !proto.clarifai.api.MultiIdentityProviderResponse>}
 */
const methodDescriptor_V2_PostIdentityProviders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostIdentityProviders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostIdentityProvidersRequest,
  proto.clarifai.api.MultiIdentityProviderResponse,
  /**
   * @param {!proto.clarifai.api.PostIdentityProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiIdentityProviderResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostIdentityProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiIdentityProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiIdentityProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postIdentityProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostIdentityProviders',
      request,
      metadata || {},
      methodDescriptor_V2_PostIdentityProviders,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostIdentityProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiIdentityProviderResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postIdentityProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostIdentityProviders',
      request,
      metadata || {},
      methodDescriptor_V2_PostIdentityProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListIdentityProvidersRequest,
 *   !proto.clarifai.api.MultiIdentityProviderResponse>}
 */
const methodDescriptor_V2_ListIdentityProviders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListIdentityProviders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListIdentityProvidersRequest,
  proto.clarifai.api.MultiIdentityProviderResponse,
  /**
   * @param {!proto.clarifai.api.ListIdentityProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiIdentityProviderResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListIdentityProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiIdentityProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiIdentityProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listIdentityProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListIdentityProviders',
      request,
      metadata || {},
      methodDescriptor_V2_ListIdentityProviders,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListIdentityProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiIdentityProviderResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listIdentityProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListIdentityProviders',
      request,
      metadata || {},
      methodDescriptor_V2_ListIdentityProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetIdentityProviderRequest,
 *   !proto.clarifai.api.SingleIdentityProviderResponse>}
 */
const methodDescriptor_V2_GetIdentityProvider = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetIdentityProvider',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetIdentityProviderRequest,
  proto.clarifai.api.SingleIdentityProviderResponse,
  /**
   * @param {!proto.clarifai.api.GetIdentityProviderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleIdentityProviderResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetIdentityProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleIdentityProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleIdentityProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getIdentityProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetIdentityProvider',
      request,
      metadata || {},
      methodDescriptor_V2_GetIdentityProvider,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetIdentityProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleIdentityProviderResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getIdentityProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetIdentityProvider',
      request,
      metadata || {},
      methodDescriptor_V2_GetIdentityProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchIdentityProvidersRequest,
 *   !proto.clarifai.api.MultiIdentityProviderResponse>}
 */
const methodDescriptor_V2_PatchIdentityProviders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchIdentityProviders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchIdentityProvidersRequest,
  proto.clarifai.api.MultiIdentityProviderResponse,
  /**
   * @param {!proto.clarifai.api.PatchIdentityProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiIdentityProviderResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchIdentityProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiIdentityProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiIdentityProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchIdentityProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchIdentityProviders',
      request,
      metadata || {},
      methodDescriptor_V2_PatchIdentityProviders,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchIdentityProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiIdentityProviderResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchIdentityProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchIdentityProviders',
      request,
      metadata || {},
      methodDescriptor_V2_PatchIdentityProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteIdentityProvidersRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteIdentityProviders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteIdentityProviders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteIdentityProvidersRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteIdentityProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteIdentityProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteIdentityProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteIdentityProviders',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteIdentityProviders,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteIdentityProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteIdentityProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteIdentityProviders',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteIdentityProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostTeamsRequest,
 *   !proto.clarifai.api.MultiTeamResponse>}
 */
const methodDescriptor_V2_PostTeams = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostTeams',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostTeamsRequest,
  proto.clarifai.api.MultiTeamResponse,
  /**
   * @param {!proto.clarifai.api.PostTeamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTeamResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTeamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTeamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postTeams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostTeams',
      request,
      metadata || {},
      methodDescriptor_V2_PostTeams,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTeamResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postTeams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostTeams',
      request,
      metadata || {},
      methodDescriptor_V2_PostTeams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListTeamsRequest,
 *   !proto.clarifai.api.MultiTeamResponse>}
 */
const methodDescriptor_V2_ListTeams = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListTeams',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListTeamsRequest,
  proto.clarifai.api.MultiTeamResponse,
  /**
   * @param {!proto.clarifai.api.ListTeamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTeamResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTeamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTeamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listTeams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListTeams',
      request,
      metadata || {},
      methodDescriptor_V2_ListTeams,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTeamResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listTeams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListTeams',
      request,
      metadata || {},
      methodDescriptor_V2_ListTeams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetTeamRequest,
 *   !proto.clarifai.api.SingleTeamResponse>}
 */
const methodDescriptor_V2_GetTeam = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetTeam',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetTeamRequest,
  proto.clarifai.api.SingleTeamResponse,
  /**
   * @param {!proto.clarifai.api.GetTeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleTeamResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleTeamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleTeamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetTeam',
      request,
      metadata || {},
      methodDescriptor_V2_GetTeam,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleTeamResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetTeam',
      request,
      metadata || {},
      methodDescriptor_V2_GetTeam);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchTeamsRequest,
 *   !proto.clarifai.api.MultiTeamResponse>}
 */
const methodDescriptor_V2_PatchTeams = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchTeams',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchTeamsRequest,
  proto.clarifai.api.MultiTeamResponse,
  /**
   * @param {!proto.clarifai.api.PatchTeamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTeamResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTeamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTeamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchTeams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchTeams',
      request,
      metadata || {},
      methodDescriptor_V2_PatchTeams,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTeamResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchTeams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchTeams',
      request,
      metadata || {},
      methodDescriptor_V2_PatchTeams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteTeamsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteTeams = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteTeams',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteTeamsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteTeamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteTeams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteTeams',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteTeams,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteTeams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteTeams',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteTeams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostTeamUsersRequest,
 *   !proto.clarifai.api.MultiTeamUserResponse>}
 */
const methodDescriptor_V2_PostTeamUsers = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostTeamUsers',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostTeamUsersRequest,
  proto.clarifai.api.MultiTeamUserResponse,
  /**
   * @param {!proto.clarifai.api.PostTeamUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTeamUserResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostTeamUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTeamUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTeamUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postTeamUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostTeamUsers',
      request,
      metadata || {},
      methodDescriptor_V2_PostTeamUsers,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostTeamUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTeamUserResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postTeamUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostTeamUsers',
      request,
      metadata || {},
      methodDescriptor_V2_PostTeamUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListTeamUsersRequest,
 *   !proto.clarifai.api.MultiTeamUserResponse>}
 */
const methodDescriptor_V2_ListTeamUsers = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListTeamUsers',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListTeamUsersRequest,
  proto.clarifai.api.MultiTeamUserResponse,
  /**
   * @param {!proto.clarifai.api.ListTeamUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTeamUserResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListTeamUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTeamUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTeamUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listTeamUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListTeamUsers',
      request,
      metadata || {},
      methodDescriptor_V2_ListTeamUsers,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListTeamUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTeamUserResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listTeamUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListTeamUsers',
      request,
      metadata || {},
      methodDescriptor_V2_ListTeamUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteTeamUsersRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteTeamUsers = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteTeamUsers',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteTeamUsersRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteTeamUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteTeamUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteTeamUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteTeamUsers',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteTeamUsers,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteTeamUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteTeamUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteTeamUsers',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteTeamUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostTeamAppsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostTeamApps = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostTeamApps',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostTeamAppsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostTeamAppsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostTeamAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postTeamApps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostTeamApps',
      request,
      metadata || {},
      methodDescriptor_V2_PostTeamApps,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostTeamAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postTeamApps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostTeamApps',
      request,
      metadata || {},
      methodDescriptor_V2_PostTeamApps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListTeamAppsRequest,
 *   !proto.clarifai.api.MultiTeamAppsResponse>}
 */
const methodDescriptor_V2_ListTeamApps = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListTeamApps',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListTeamAppsRequest,
  proto.clarifai.api.MultiTeamAppsResponse,
  /**
   * @param {!proto.clarifai.api.ListTeamAppsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTeamAppsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListTeamAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTeamAppsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTeamAppsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listTeamApps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListTeamApps',
      request,
      metadata || {},
      methodDescriptor_V2_ListTeamApps,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListTeamAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTeamAppsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listTeamApps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListTeamApps',
      request,
      metadata || {},
      methodDescriptor_V2_ListTeamApps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteTeamAppsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteTeamApps = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteTeamApps',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteTeamAppsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteTeamAppsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteTeamAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteTeamApps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteTeamApps',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteTeamApps,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteTeamAppsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteTeamApps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteTeamApps',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteTeamApps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListRolesRequest,
 *   !proto.clarifai.api.MultiRoleResponse>}
 */
const methodDescriptor_V2_ListRoles = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListRoles',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListRolesRequest,
  proto.clarifai.api.MultiRoleResponse,
  /**
   * @param {!proto.clarifai.api.ListRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiRoleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListRoles',
      request,
      metadata || {},
      methodDescriptor_V2_ListRoles,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiRoleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListRoles',
      request,
      metadata || {},
      methodDescriptor_V2_ListRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetRoleRequest,
 *   !proto.clarifai.api.SingleRoleResponse>}
 */
const methodDescriptor_V2_GetRole = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetRole',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetRoleRequest,
  proto.clarifai.api.SingleRoleResponse,
  /**
   * @param {!proto.clarifai.api.GetRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleRoleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleRoleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleRoleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetRole',
      request,
      metadata || {},
      methodDescriptor_V2_GetRole,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleRoleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetRole',
      request,
      metadata || {},
      methodDescriptor_V2_GetRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetSearchRequest,
 *   !proto.clarifai.api.SingleSearchResponse>}
 */
const methodDescriptor_V2_GetSearch = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetSearch',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetSearchRequest,
  proto.clarifai.api.SingleSearchResponse,
  /**
   * @param {!proto.clarifai.api.GetSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getSearch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetSearch',
      request,
      metadata || {},
      methodDescriptor_V2_GetSearch,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getSearch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetSearch',
      request,
      metadata || {},
      methodDescriptor_V2_GetSearch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_ListSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListSearchesRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.ListSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListSearches',
      request,
      metadata || {},
      methodDescriptor_V2_ListSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListSearches',
      request,
      metadata || {},
      methodDescriptor_V2_ListSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_PatchSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchSearchesRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.PatchSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PatchSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PatchSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_PostSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostSearchesRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.PostSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostSearchesByIDRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_PostSearchesByID = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostSearchesByID',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostSearchesByIDRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.PostSearchesByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostSearchesByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postSearchesByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostSearchesByID',
      request,
      metadata || {},
      methodDescriptor_V2_PostSearchesByID,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostSearchesByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postSearchesByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostSearchesByID',
      request,
      metadata || {},
      methodDescriptor_V2_PostSearchesByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAnnotationSearchMetricsRequest,
 *   !proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 */
const methodDescriptor_V2_PostAnnotationSearchMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAnnotationSearchMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAnnotationSearchMetricsRequest,
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse,
  /**
   * @param {!proto.clarifai.api.PostAnnotationSearchMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAnnotationSearchMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationSearchMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAnnotationSearchMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAnnotationSearchMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnnotationSearchMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAnnotationSearchMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAnnotationSearchMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAnnotationSearchMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnnotationSearchMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetAnnotationSearchMetricsRequest,
 *   !proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 */
const methodDescriptor_V2_GetAnnotationSearchMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetAnnotationSearchMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetAnnotationSearchMetricsRequest,
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse,
  /**
   * @param {!proto.clarifai.api.GetAnnotationSearchMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetAnnotationSearchMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationSearchMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getAnnotationSearchMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetAnnotationSearchMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetAnnotationSearchMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetAnnotationSearchMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getAnnotationSearchMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetAnnotationSearchMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetAnnotationSearchMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAnnotationSearchMetricsRequest,
 *   !proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 */
const methodDescriptor_V2_ListAnnotationSearchMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListAnnotationSearchMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAnnotationSearchMetricsRequest,
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse,
  /**
   * @param {!proto.clarifai.api.ListAnnotationSearchMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAnnotationSearchMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationSearchMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listAnnotationSearchMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListAnnotationSearchMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_ListAnnotationSearchMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAnnotationSearchMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listAnnotationSearchMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListAnnotationSearchMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_ListAnnotationSearchMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteAnnotationSearchMetricsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteAnnotationSearchMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteAnnotationSearchMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteAnnotationSearchMetricsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteAnnotationSearchMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteAnnotationSearchMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteAnnotationSearchMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAnnotationSearchMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAnnotationSearchMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteAnnotationSearchMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteAnnotationSearchMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAnnotationSearchMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAnnotationSearchMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteSearchRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteSearch = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteSearch',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteSearchRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteSearch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteSearch',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteSearch,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteSearch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteSearch',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteSearch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAttributeSearchRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodDescriptor_V2_PostAttributeSearch = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAttributeSearch',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAttributeSearchRequest,
  proto.clarifai.api.MultiSearchResponse,
  /**
   * @param {!proto.clarifai.api.PostAttributeSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAttributeSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAttributeSearch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAttributeSearch',
      request,
      metadata || {},
      methodDescriptor_V2_PostAttributeSearch,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAttributeSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAttributeSearch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAttributeSearch',
      request,
      metadata || {},
      methodDescriptor_V2_PostAttributeSearch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAnnotationFiltersRequest,
 *   !proto.clarifai.api.MultiAnnotationFilterResponse>}
 */
const methodDescriptor_V2_ListAnnotationFilters = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListAnnotationFilters',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAnnotationFiltersRequest,
  proto.clarifai.api.MultiAnnotationFilterResponse,
  /**
   * @param {!proto.clarifai.api.ListAnnotationFiltersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationFilterResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAnnotationFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listAnnotationFilters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListAnnotationFilters',
      request,
      metadata || {},
      methodDescriptor_V2_ListAnnotationFilters,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAnnotationFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationFilterResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listAnnotationFilters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListAnnotationFilters',
      request,
      metadata || {},
      methodDescriptor_V2_ListAnnotationFilters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetAnnotationFilterRequest,
 *   !proto.clarifai.api.SingleAnnotationFilterResponse>}
 */
const methodDescriptor_V2_GetAnnotationFilter = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetAnnotationFilter',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetAnnotationFilterRequest,
  proto.clarifai.api.SingleAnnotationFilterResponse,
  /**
   * @param {!proto.clarifai.api.GetAnnotationFilterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleAnnotationFilterResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetAnnotationFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleAnnotationFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleAnnotationFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getAnnotationFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetAnnotationFilter',
      request,
      metadata || {},
      methodDescriptor_V2_GetAnnotationFilter,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetAnnotationFilterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleAnnotationFilterResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getAnnotationFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetAnnotationFilter',
      request,
      metadata || {},
      methodDescriptor_V2_GetAnnotationFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAnnotationFiltersRequest,
 *   !proto.clarifai.api.MultiAnnotationFilterResponse>}
 */
const methodDescriptor_V2_PostAnnotationFilters = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAnnotationFilters',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAnnotationFiltersRequest,
  proto.clarifai.api.MultiAnnotationFilterResponse,
  /**
   * @param {!proto.clarifai.api.PostAnnotationFiltersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationFilterResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAnnotationFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAnnotationFilters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAnnotationFilters',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnnotationFilters,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAnnotationFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationFilterResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAnnotationFilters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAnnotationFilters',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnnotationFilters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAnnotationFiltersRequest,
 *   !proto.clarifai.api.MultiAnnotationFilterResponse>}
 */
const methodDescriptor_V2_PatchAnnotationFilters = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchAnnotationFilters',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAnnotationFiltersRequest,
  proto.clarifai.api.MultiAnnotationFilterResponse,
  /**
   * @param {!proto.clarifai.api.PatchAnnotationFiltersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationFilterResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAnnotationFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationFilterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationFilterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchAnnotationFilters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotationFilters',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotationFilters,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAnnotationFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationFilterResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchAnnotationFilters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotationFilters',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotationFilters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteAnnotationFiltersRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteAnnotationFilters = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteAnnotationFilters',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteAnnotationFiltersRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteAnnotationFiltersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteAnnotationFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteAnnotationFilters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAnnotationFilters',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAnnotationFilters,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteAnnotationFiltersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteAnnotationFilters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteAnnotationFilters',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteAnnotationFilters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListClustersRequest,
 *   !proto.clarifai.api.MultiClusterResponse>}
 */
const methodDescriptor_V2_ListClusters = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListClusters',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListClustersRequest,
  proto.clarifai.api.MultiClusterResponse,
  /**
   * @param {!proto.clarifai.api.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiClusterResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiClusterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiClusterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listClusters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListClusters',
      request,
      metadata || {},
      methodDescriptor_V2_ListClusters,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiClusterResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listClusters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListClusters',
      request,
      metadata || {},
      methodDescriptor_V2_ListClusters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAnnotationsForClusterRequest,
 *   !proto.clarifai.api.MultiAnnotationResponse>}
 */
const methodDescriptor_V2_ListAnnotationsForCluster = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListAnnotationsForCluster',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAnnotationsForClusterRequest,
  proto.clarifai.api.MultiAnnotationResponse,
  /**
   * @param {!proto.clarifai.api.ListAnnotationsForClusterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAnnotationsForClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAnnotationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAnnotationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listAnnotationsForCluster =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListAnnotationsForCluster',
      request,
      metadata || {},
      methodDescriptor_V2_ListAnnotationsForCluster,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAnnotationsForClusterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listAnnotationsForCluster =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListAnnotationsForCluster',
      request,
      metadata || {},
      methodDescriptor_V2_ListAnnotationsForCluster);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostClustersSearchesRequest,
 *   !proto.clarifai.api.MultiClusterResponse>}
 */
const methodDescriptor_V2_PostClustersSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostClustersSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostClustersSearchesRequest,
  proto.clarifai.api.MultiClusterResponse,
  /**
   * @param {!proto.clarifai.api.PostClustersSearchesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiClusterResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostClustersSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiClusterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiClusterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postClustersSearches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostClustersSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostClustersSearches,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostClustersSearchesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiClusterResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postClustersSearches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostClustersSearches',
      request,
      metadata || {},
      methodDescriptor_V2_PostClustersSearches);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostVerifyEmailRequest,
 *   !proto.clarifai.api.SingleVerifyEmailResponse>}
 */
const methodDescriptor_V2_PostVerifyEmail = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostVerifyEmail',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostVerifyEmailRequest,
  proto.clarifai.api.SingleVerifyEmailResponse,
  /**
   * @param {!proto.clarifai.api.PostVerifyEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleVerifyEmailResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostVerifyEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleVerifyEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleVerifyEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postVerifyEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostVerifyEmail',
      request,
      metadata || {},
      methodDescriptor_V2_PostVerifyEmail,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostVerifyEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleVerifyEmailResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postVerifyEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostVerifyEmail',
      request,
      metadata || {},
      methodDescriptor_V2_PostVerifyEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.RequestResetPasswordRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostRequestResetPassword = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostRequestResetPassword',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.RequestResetPasswordRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.RequestResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.RequestResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postRequestResetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostRequestResetPassword',
      request,
      metadata || {},
      methodDescriptor_V2_PostRequestResetPassword,
      callback);
};


/**
 * @param {!proto.clarifai.api.RequestResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postRequestResetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostRequestResetPassword',
      request,
      metadata || {},
      methodDescriptor_V2_PostRequestResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.CompleteResetPasswordRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostCompleteResetPassword = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostCompleteResetPassword',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.CompleteResetPasswordRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.CompleteResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.CompleteResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postCompleteResetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostCompleteResetPassword',
      request,
      metadata || {},
      methodDescriptor_V2_PostCompleteResetPassword,
      callback);
};


/**
 * @param {!proto.clarifai.api.CompleteResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postCompleteResetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostCompleteResetPassword',
      request,
      metadata || {},
      methodDescriptor_V2_PostCompleteResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostLoginRequest,
 *   !proto.clarifai.api.SingleLoginResponse>}
 */
const methodDescriptor_V2_PostLogin = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostLogin',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostLoginRequest,
  proto.clarifai.api.SingleLoginResponse,
  /**
   * @param {!proto.clarifai.api.PostLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleLoginResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostLogin',
      request,
      metadata || {},
      methodDescriptor_V2_PostLogin,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleLoginResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostLogin',
      request,
      metadata || {},
      methodDescriptor_V2_PostLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostSignupRequest,
 *   !proto.clarifai.api.SingleLoginResponse>}
 */
const methodDescriptor_V2_PostSignup = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostSignup',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostSignupRequest,
  proto.clarifai.api.SingleLoginResponse,
  /**
   * @param {!proto.clarifai.api.PostSignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleLoginResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostSignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postSignup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostSignup',
      request,
      metadata || {},
      methodDescriptor_V2_PostSignup,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostSignupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleLoginResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postSignup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostSignup',
      request,
      metadata || {},
      methodDescriptor_V2_PostSignup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostLogoutRequest,
 *   !proto.clarifai.api.SingleLogoutResponse>}
 */
const methodDescriptor_V2_PostLogout = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostLogout',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostLogoutRequest,
  proto.clarifai.api.SingleLogoutResponse,
  /**
   * @param {!proto.clarifai.api.PostLogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleLogoutResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostLogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleLogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleLogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postLogout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostLogout',
      request,
      metadata || {},
      methodDescriptor_V2_PostLogout,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostLogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleLogoutResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postLogout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostLogout',
      request,
      metadata || {},
      methodDescriptor_V2_PostLogout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAuthMethodsRequest,
 *   !proto.clarifai.api.ListAuthMethodsResponse>}
 */
const methodDescriptor_V2_ListAuthMethods = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListAuthMethods',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAuthMethodsRequest,
  proto.clarifai.api.ListAuthMethodsResponse,
  /**
   * @param {!proto.clarifai.api.ListAuthMethodsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.ListAuthMethodsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAuthMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.ListAuthMethodsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.ListAuthMethodsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listAuthMethods =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListAuthMethods',
      request,
      metadata || {},
      methodDescriptor_V2_ListAuthMethods,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAuthMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.ListAuthMethodsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listAuthMethods =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListAuthMethods',
      request,
      metadata || {},
      methodDescriptor_V2_ListAuthMethods);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAuthMethodsRequest,
 *   !proto.clarifai.api.ListAuthMethodsResponse>}
 */
const methodDescriptor_V2_ListOrgAuthMethods = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListOrgAuthMethods',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAuthMethodsRequest,
  proto.clarifai.api.ListAuthMethodsResponse,
  /**
   * @param {!proto.clarifai.api.ListAuthMethodsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.ListAuthMethodsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAuthMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.ListAuthMethodsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.ListAuthMethodsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listOrgAuthMethods =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListOrgAuthMethods',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrgAuthMethods,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAuthMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.ListAuthMethodsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listOrgAuthMethods =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListOrgAuthMethods',
      request,
      metadata || {},
      methodDescriptor_V2_ListOrgAuthMethods);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostIdLoginFinalizerRequest,
 *   !proto.clarifai.api.PostIdLoginFinalizerResponse>}
 */
const methodDescriptor_V2_PostIdLoginFinalizer = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostIdLoginFinalizer',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostIdLoginFinalizerRequest,
  proto.clarifai.api.PostIdLoginFinalizerResponse,
  /**
   * @param {!proto.clarifai.api.PostIdLoginFinalizerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostIdLoginFinalizerResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostIdLoginFinalizerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostIdLoginFinalizerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostIdLoginFinalizerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postIdLoginFinalizer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostIdLoginFinalizer',
      request,
      metadata || {},
      methodDescriptor_V2_PostIdLoginFinalizer,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostIdLoginFinalizerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostIdLoginFinalizerResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postIdLoginFinalizer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostIdLoginFinalizer',
      request,
      metadata || {},
      methodDescriptor_V2_PostIdLoginFinalizer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostLinkIdpUserRequest,
 *   !proto.clarifai.api.PostLinkIdpUserResponse>}
 */
const methodDescriptor_V2_PostLinkIdpUser = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostLinkIdpUser',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostLinkIdpUserRequest,
  proto.clarifai.api.PostLinkIdpUserResponse,
  /**
   * @param {!proto.clarifai.api.PostLinkIdpUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostLinkIdpUserResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostLinkIdpUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostLinkIdpUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostLinkIdpUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postLinkIdpUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostLinkIdpUser',
      request,
      metadata || {},
      methodDescriptor_V2_PostLinkIdpUser,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostLinkIdpUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostLinkIdpUserResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postLinkIdpUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostLinkIdpUser',
      request,
      metadata || {},
      methodDescriptor_V2_PostLinkIdpUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetLoginInfoRequest,
 *   !proto.clarifai.api.GetLoginInfoResponse>}
 */
const methodDescriptor_V2_GetLoginInfo = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetLoginInfo',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetLoginInfoRequest,
  proto.clarifai.api.GetLoginInfoResponse,
  /**
   * @param {!proto.clarifai.api.GetLoginInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.GetLoginInfoResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetLoginInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.GetLoginInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.GetLoginInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getLoginInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetLoginInfo',
      request,
      metadata || {},
      methodDescriptor_V2_GetLoginInfo,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetLoginInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.GetLoginInfoResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getLoginInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetLoginInfo',
      request,
      metadata || {},
      methodDescriptor_V2_GetLoginInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.List2FAMethodsRequest,
 *   !proto.clarifai.api.List2FAMethodsResponse>}
 */
const methodDescriptor_V2_ListAuth2FAMethods = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListAuth2FAMethods',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.List2FAMethodsRequest,
  proto.clarifai.api.List2FAMethodsResponse,
  /**
   * @param {!proto.clarifai.api.List2FAMethodsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.List2FAMethodsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.List2FAMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.List2FAMethodsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.List2FAMethodsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listAuth2FAMethods =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListAuth2FAMethods',
      request,
      metadata || {},
      methodDescriptor_V2_ListAuth2FAMethods,
      callback);
};


/**
 * @param {!proto.clarifai.api.List2FAMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.List2FAMethodsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listAuth2FAMethods =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListAuth2FAMethods',
      request,
      metadata || {},
      methodDescriptor_V2_ListAuth2FAMethods);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAuth2FATotpRegisterEnableRequest,
 *   !proto.clarifai.api.PostAuth2FATotpRegisterEnableResponse>}
 */
const methodDescriptor_V2_PostAuth2FATotpRegisterEnable = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAuth2FATotpRegisterEnable',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAuth2FATotpRegisterEnableRequest,
  proto.clarifai.api.PostAuth2FATotpRegisterEnableResponse,
  /**
   * @param {!proto.clarifai.api.PostAuth2FATotpRegisterEnableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostAuth2FATotpRegisterEnableResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpRegisterEnableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostAuth2FATotpRegisterEnableResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostAuth2FATotpRegisterEnableResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAuth2FATotpRegisterEnable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpRegisterEnable',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpRegisterEnable,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpRegisterEnableRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostAuth2FATotpRegisterEnableResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAuth2FATotpRegisterEnable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpRegisterEnable',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpRegisterEnable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAuth2FATotpRegisterVerifyRequest,
 *   !proto.clarifai.api.PostAuth2FATotpRegisterVerifyResponse>}
 */
const methodDescriptor_V2_PostAuth2FATotpRegisterVerify = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAuth2FATotpRegisterVerify',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAuth2FATotpRegisterVerifyRequest,
  proto.clarifai.api.PostAuth2FATotpRegisterVerifyResponse,
  /**
   * @param {!proto.clarifai.api.PostAuth2FATotpRegisterVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostAuth2FATotpRegisterVerifyResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpRegisterVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostAuth2FATotpRegisterVerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostAuth2FATotpRegisterVerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAuth2FATotpRegisterVerify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpRegisterVerify',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpRegisterVerify,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpRegisterVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostAuth2FATotpRegisterVerifyResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAuth2FATotpRegisterVerify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpRegisterVerify',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpRegisterVerify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAuth2FATotpDisableRequest,
 *   !proto.clarifai.api.PostAuth2FATotpDisableResponse>}
 */
const methodDescriptor_V2_PostAuth2FATotpDisable = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAuth2FATotpDisable',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAuth2FATotpDisableRequest,
  proto.clarifai.api.PostAuth2FATotpDisableResponse,
  /**
   * @param {!proto.clarifai.api.PostAuth2FATotpDisableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostAuth2FATotpDisableResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpDisableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostAuth2FATotpDisableResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostAuth2FATotpDisableResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAuth2FATotpDisable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpDisable',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpDisable,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpDisableRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostAuth2FATotpDisableResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAuth2FATotpDisable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpDisable',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpDisable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAuth2FATotpLoginRequest,
 *   !proto.clarifai.api.SingleLoginResponse>}
 */
const methodDescriptor_V2_PostAuth2FATotpLogin = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAuth2FATotpLogin',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAuth2FATotpLoginRequest,
  proto.clarifai.api.SingleLoginResponse,
  /**
   * @param {!proto.clarifai.api.PostAuth2FATotpLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleLoginResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAuth2FATotpLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpLogin',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpLogin,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleLoginResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAuth2FATotpLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpLogin',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAuth2FATotpRecoverRequest,
 *   !proto.clarifai.api.PostAuth2FATotpRecoverResponse>}
 */
const methodDescriptor_V2_PostAuth2FATotpRecover = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAuth2FATotpRecover',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAuth2FATotpRecoverRequest,
  proto.clarifai.api.PostAuth2FATotpRecoverResponse,
  /**
   * @param {!proto.clarifai.api.PostAuth2FATotpRecoverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostAuth2FATotpRecoverResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpRecoverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostAuth2FATotpRecoverResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostAuth2FATotpRecoverResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAuth2FATotpRecover =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpRecover',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpRecover,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAuth2FATotpRecoverRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostAuth2FATotpRecoverResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAuth2FATotpRecover =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAuth2FATotpRecover',
      request,
      metadata || {},
      methodDescriptor_V2_PostAuth2FATotpRecover);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetAuth2FATotpRecoverConfirmRequest,
 *   !proto.clarifai.api.GetAuth2FATotpRecoverConfirmResponse>}
 */
const methodDescriptor_V2_GetAuth2FATotpRecoverConfirm = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetAuth2FATotpRecoverConfirm',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetAuth2FATotpRecoverConfirmRequest,
  proto.clarifai.api.GetAuth2FATotpRecoverConfirmResponse,
  /**
   * @param {!proto.clarifai.api.GetAuth2FATotpRecoverConfirmRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.GetAuth2FATotpRecoverConfirmResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetAuth2FATotpRecoverConfirmRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.GetAuth2FATotpRecoverConfirmResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.GetAuth2FATotpRecoverConfirmResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getAuth2FATotpRecoverConfirm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetAuth2FATotpRecoverConfirm',
      request,
      metadata || {},
      methodDescriptor_V2_GetAuth2FATotpRecoverConfirm,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetAuth2FATotpRecoverConfirmRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.GetAuth2FATotpRecoverConfirmResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getAuth2FATotpRecoverConfirm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetAuth2FATotpRecoverConfirm',
      request,
      metadata || {},
      methodDescriptor_V2_GetAuth2FATotpRecoverConfirm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetSubscriptionRequest,
 *   !proto.clarifai.api.SingleSubscriptionResponse>}
 */
const methodDescriptor_V2_GetSubscription = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetSubscription',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetSubscriptionRequest,
  proto.clarifai.api.SingleSubscriptionResponse,
  /**
   * @param {!proto.clarifai.api.GetSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleSubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleSubscriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleSubscriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetSubscription',
      request,
      metadata || {},
      methodDescriptor_V2_GetSubscription,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleSubscriptionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetSubscription',
      request,
      metadata || {},
      methodDescriptor_V2_GetSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostSubscriptionRequest,
 *   !proto.clarifai.api.SingleSubscriptionResponse>}
 */
const methodDescriptor_V2_PostSubscription = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostSubscription',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostSubscriptionRequest,
  proto.clarifai.api.SingleSubscriptionResponse,
  /**
   * @param {!proto.clarifai.api.PostSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleSubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleSubscriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleSubscriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostSubscription',
      request,
      metadata || {},
      methodDescriptor_V2_PostSubscription,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleSubscriptionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostSubscription',
      request,
      metadata || {},
      methodDescriptor_V2_PostSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListCreditCardsRequest,
 *   !proto.clarifai.api.MultipleCreditCardResponse>}
 */
const methodDescriptor_V2_ListCreditCards = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListCreditCards',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListCreditCardsRequest,
  proto.clarifai.api.MultipleCreditCardResponse,
  /**
   * @param {!proto.clarifai.api.ListCreditCardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultipleCreditCardResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListCreditCardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultipleCreditCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultipleCreditCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listCreditCards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListCreditCards',
      request,
      metadata || {},
      methodDescriptor_V2_ListCreditCards,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListCreditCardsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultipleCreditCardResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listCreditCards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListCreditCards',
      request,
      metadata || {},
      methodDescriptor_V2_ListCreditCards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostCreditCardRequest,
 *   !proto.clarifai.api.SingleCreditCardResponse>}
 */
const methodDescriptor_V2_PostCreditCard = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostCreditCard',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostCreditCardRequest,
  proto.clarifai.api.SingleCreditCardResponse,
  /**
   * @param {!proto.clarifai.api.PostCreditCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleCreditCardResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostCreditCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleCreditCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleCreditCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postCreditCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostCreditCard',
      request,
      metadata || {},
      methodDescriptor_V2_PostCreditCard,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostCreditCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleCreditCardResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postCreditCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostCreditCard',
      request,
      metadata || {},
      methodDescriptor_V2_PostCreditCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteCreditCardRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteCreditCard = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteCreditCard',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteCreditCardRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteCreditCardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteCreditCardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteCreditCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteCreditCard',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteCreditCard,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteCreditCardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteCreditCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteCreditCard',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteCreditCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchCreditCardsRequest,
 *   !proto.clarifai.api.MultipleCreditCardResponse>}
 */
const methodDescriptor_V2_PatchCreditCards = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchCreditCards',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchCreditCardsRequest,
  proto.clarifai.api.MultipleCreditCardResponse,
  /**
   * @param {!proto.clarifai.api.PatchCreditCardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultipleCreditCardResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchCreditCardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultipleCreditCardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultipleCreditCardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchCreditCards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchCreditCards',
      request,
      metadata || {},
      methodDescriptor_V2_PatchCreditCards,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchCreditCardsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultipleCreditCardResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchCreditCards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchCreditCards',
      request,
      metadata || {},
      methodDescriptor_V2_PatchCreditCards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetShippingAddressRequest,
 *   !proto.clarifai.api.SingleShippingAddressResponse>}
 */
const methodDescriptor_V2_GetShippingAddress = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetShippingAddress',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetShippingAddressRequest,
  proto.clarifai.api.SingleShippingAddressResponse,
  /**
   * @param {!proto.clarifai.api.GetShippingAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleShippingAddressResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetShippingAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleShippingAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleShippingAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getShippingAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetShippingAddress',
      request,
      metadata || {},
      methodDescriptor_V2_GetShippingAddress,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetShippingAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleShippingAddressResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getShippingAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetShippingAddress',
      request,
      metadata || {},
      methodDescriptor_V2_GetShippingAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PutShippingAddressRequest,
 *   !proto.clarifai.api.SingleShippingAddressResponse>}
 */
const methodDescriptor_V2_PutShippingAddress = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PutShippingAddress',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PutShippingAddressRequest,
  proto.clarifai.api.SingleShippingAddressResponse,
  /**
   * @param {!proto.clarifai.api.PutShippingAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleShippingAddressResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PutShippingAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleShippingAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleShippingAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.putShippingAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PutShippingAddress',
      request,
      metadata || {},
      methodDescriptor_V2_PutShippingAddress,
      callback);
};


/**
 * @param {!proto.clarifai.api.PutShippingAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleShippingAddressResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.putShippingAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PutShippingAddress',
      request,
      metadata || {},
      methodDescriptor_V2_PutShippingAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListPlansRequest,
 *   !proto.clarifai.api.MultiPlanResponse>}
 */
const methodDescriptor_V2_ListPlans = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListPlans',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListPlansRequest,
  proto.clarifai.api.MultiPlanResponse,
  /**
   * @param {!proto.clarifai.api.ListPlansRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiPlanResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListPlansRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiPlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiPlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listPlans =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListPlans',
      request,
      metadata || {},
      methodDescriptor_V2_ListPlans,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListPlansRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiPlanResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listPlans =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListPlans',
      request,
      metadata || {},
      methodDescriptor_V2_ListPlans);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListStatusCodesRequest,
 *   !proto.clarifai.api.MultiStatusCodeResponse>}
 */
const methodDescriptor_V2_ListStatusCodes = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListStatusCodes',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListStatusCodesRequest,
  proto.clarifai.api.MultiStatusCodeResponse,
  /**
   * @param {!proto.clarifai.api.ListStatusCodesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiStatusCodeResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListStatusCodesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiStatusCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiStatusCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listStatusCodes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListStatusCodes',
      request,
      metadata || {},
      methodDescriptor_V2_ListStatusCodes,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListStatusCodesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiStatusCodeResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listStatusCodes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListStatusCodes',
      request,
      metadata || {},
      methodDescriptor_V2_ListStatusCodes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetStatusCodeRequest,
 *   !proto.clarifai.api.SingleStatusCodeResponse>}
 */
const methodDescriptor_V2_GetStatusCode = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetStatusCode',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetStatusCodeRequest,
  proto.clarifai.api.SingleStatusCodeResponse,
  /**
   * @param {!proto.clarifai.api.GetStatusCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleStatusCodeResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetStatusCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleStatusCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleStatusCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getStatusCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetStatusCode',
      request,
      metadata || {},
      methodDescriptor_V2_GetStatusCode,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetStatusCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleStatusCodeResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getStatusCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetStatusCode',
      request,
      metadata || {},
      methodDescriptor_V2_GetStatusCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetHealthzRequest,
 *   !proto.clarifai.api.GetHealthzResponse>}
 */
const methodDescriptor_V2_GetHealthz = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetHealthz',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetHealthzRequest,
  proto.clarifai.api.GetHealthzResponse,
  /**
   * @param {!proto.clarifai.api.GetHealthzRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.GetHealthzResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetHealthzRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.GetHealthzResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.GetHealthzResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getHealthz =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetHealthz',
      request,
      metadata || {},
      methodDescriptor_V2_GetHealthz,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetHealthzRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.GetHealthzResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getHealthz =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetHealthz',
      request,
      metadata || {},
      methodDescriptor_V2_GetHealthz);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListUserBillingCyclesRequest,
 *   !proto.clarifai.api.ListUserBillingCyclesResponse>}
 */
const methodDescriptor_V2_ListUserBillingCycles = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListUserBillingCycles',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListUserBillingCyclesRequest,
  proto.clarifai.api.ListUserBillingCyclesResponse,
  /**
   * @param {!proto.clarifai.api.ListUserBillingCyclesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.ListUserBillingCyclesResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListUserBillingCyclesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.ListUserBillingCyclesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.ListUserBillingCyclesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listUserBillingCycles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListUserBillingCycles',
      request,
      metadata || {},
      methodDescriptor_V2_ListUserBillingCycles,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListUserBillingCyclesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.ListUserBillingCyclesResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listUserBillingCycles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListUserBillingCycles',
      request,
      metadata || {},
      methodDescriptor_V2_ListUserBillingCycles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListUserCyclesRequest,
 *   !proto.clarifai.api.ListUserCyclesResponse>}
 */
const methodDescriptor_V2_ListUserCycles = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListUserCycles',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListUserCyclesRequest,
  proto.clarifai.api.ListUserCyclesResponse,
  /**
   * @param {!proto.clarifai.api.ListUserCyclesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.ListUserCyclesResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListUserCyclesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.ListUserCyclesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.ListUserCyclesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listUserCycles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListUserCycles',
      request,
      metadata || {},
      methodDescriptor_V2_ListUserCycles,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListUserCyclesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.ListUserCyclesResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listUserCycles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListUserCycles',
      request,
      metadata || {},
      methodDescriptor_V2_ListUserCycles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetBillingUsageRequest,
 *   !proto.clarifai.api.GetBillingUsageResponse>}
 */
const methodDescriptor_V2_GetBillingUsage = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetBillingUsage',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetBillingUsageRequest,
  proto.clarifai.api.GetBillingUsageResponse,
  /**
   * @param {!proto.clarifai.api.GetBillingUsageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.GetBillingUsageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetBillingUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.GetBillingUsageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.GetBillingUsageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getBillingUsage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetBillingUsage',
      request,
      metadata || {},
      methodDescriptor_V2_GetBillingUsage,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetBillingUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.GetBillingUsageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getBillingUsage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetBillingUsage',
      request,
      metadata || {},
      methodDescriptor_V2_GetBillingUsage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostHistoricalUsageRequest,
 *   !proto.clarifai.api.PostHistoricalUsageResponse>}
 */
const methodDescriptor_V2_PostHistoricalUsage = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostHistoricalUsage',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostHistoricalUsageRequest,
  proto.clarifai.api.PostHistoricalUsageResponse,
  /**
   * @param {!proto.clarifai.api.PostHistoricalUsageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostHistoricalUsageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostHistoricalUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostHistoricalUsageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostHistoricalUsageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postHistoricalUsage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostHistoricalUsage',
      request,
      metadata || {},
      methodDescriptor_V2_PostHistoricalUsage,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostHistoricalUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostHistoricalUsageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postHistoricalUsage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostHistoricalUsage',
      request,
      metadata || {},
      methodDescriptor_V2_PostHistoricalUsage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetHistoricalUsageRequest,
 *   !proto.clarifai.api.GetHistoricalUsageResponse>}
 */
const methodDescriptor_V2_GetHistoricalUsage = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetHistoricalUsage',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetHistoricalUsageRequest,
  proto.clarifai.api.GetHistoricalUsageResponse,
  /**
   * @param {!proto.clarifai.api.GetHistoricalUsageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.GetHistoricalUsageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetHistoricalUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.GetHistoricalUsageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.GetHistoricalUsageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getHistoricalUsage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetHistoricalUsage',
      request,
      metadata || {},
      methodDescriptor_V2_GetHistoricalUsage,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetHistoricalUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.GetHistoricalUsageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getHistoricalUsage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetHistoricalUsage',
      request,
      metadata || {},
      methodDescriptor_V2_GetHistoricalUsage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListUsageIntervalsRequest,
 *   !proto.clarifai.api.ListUsageIntervalsResponse>}
 */
const methodDescriptor_V2_ListUsageIntervals = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListUsageIntervals',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListUsageIntervalsRequest,
  proto.clarifai.api.ListUsageIntervalsResponse,
  /**
   * @param {!proto.clarifai.api.ListUsageIntervalsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.ListUsageIntervalsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListUsageIntervalsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.ListUsageIntervalsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.ListUsageIntervalsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listUsageIntervals =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListUsageIntervals',
      request,
      metadata || {},
      methodDescriptor_V2_ListUsageIntervals,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListUsageIntervalsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.ListUsageIntervalsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listUsageIntervals =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListUsageIntervals',
      request,
      metadata || {},
      methodDescriptor_V2_ListUsageIntervals);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetRealtimeUsageRequest,
 *   !proto.clarifai.api.GetRealtimeUsageResponse>}
 */
const methodDescriptor_V2_GetRealtimeUsage = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetRealtimeUsage',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetRealtimeUsageRequest,
  proto.clarifai.api.GetRealtimeUsageResponse,
  /**
   * @param {!proto.clarifai.api.GetRealtimeUsageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.GetRealtimeUsageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetRealtimeUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.GetRealtimeUsageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.GetRealtimeUsageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getRealtimeUsage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetRealtimeUsage',
      request,
      metadata || {},
      methodDescriptor_V2_GetRealtimeUsage,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetRealtimeUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.GetRealtimeUsageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getRealtimeUsage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetRealtimeUsage',
      request,
      metadata || {},
      methodDescriptor_V2_GetRealtimeUsage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostUsageRequest,
 *   !proto.clarifai.api.PostUsageResponse>}
 */
const methodDescriptor_V2_PostUsage = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostUsage',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostUsageRequest,
  proto.clarifai.api.PostUsageResponse,
  /**
   * @param {!proto.clarifai.api.PostUsageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostUsageResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostUsageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostUsageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postUsage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostUsage',
      request,
      metadata || {},
      methodDescriptor_V2_PostUsage,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostUsageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostUsageResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postUsage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostUsage',
      request,
      metadata || {},
      methodDescriptor_V2_PostUsage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListCollaboratorsRequest,
 *   !proto.clarifai.api.MultiCollaboratorsResponse>}
 */
const methodDescriptor_V2_ListCollaborators = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListCollaborators',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListCollaboratorsRequest,
  proto.clarifai.api.MultiCollaboratorsResponse,
  /**
   * @param {!proto.clarifai.api.ListCollaboratorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollaboratorsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListCollaboratorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiCollaboratorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiCollaboratorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listCollaborators =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListCollaborators',
      request,
      metadata || {},
      methodDescriptor_V2_ListCollaborators,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListCollaboratorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollaboratorsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listCollaborators =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListCollaborators',
      request,
      metadata || {},
      methodDescriptor_V2_ListCollaborators);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostCollaboratorsRequest,
 *   !proto.clarifai.api.MultiCollaboratorsResponse>}
 */
const methodDescriptor_V2_PostCollaborators = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostCollaborators',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostCollaboratorsRequest,
  proto.clarifai.api.MultiCollaboratorsResponse,
  /**
   * @param {!proto.clarifai.api.PostCollaboratorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollaboratorsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostCollaboratorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiCollaboratorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiCollaboratorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postCollaborators =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostCollaborators',
      request,
      metadata || {},
      methodDescriptor_V2_PostCollaborators,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostCollaboratorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollaboratorsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postCollaborators =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostCollaborators',
      request,
      metadata || {},
      methodDescriptor_V2_PostCollaborators);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchCollaboratorsRequest,
 *   !proto.clarifai.api.MultiCollaboratorsResponse>}
 */
const methodDescriptor_V2_PatchCollaborators = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchCollaborators',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchCollaboratorsRequest,
  proto.clarifai.api.MultiCollaboratorsResponse,
  /**
   * @param {!proto.clarifai.api.PatchCollaboratorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollaboratorsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchCollaboratorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiCollaboratorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiCollaboratorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchCollaborators =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchCollaborators',
      request,
      metadata || {},
      methodDescriptor_V2_PatchCollaborators,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchCollaboratorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollaboratorsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchCollaborators =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchCollaborators',
      request,
      metadata || {},
      methodDescriptor_V2_PatchCollaborators);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteCollaboratorsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteCollaborators = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteCollaborators',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteCollaboratorsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteCollaboratorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteCollaboratorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteCollaborators =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteCollaborators',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteCollaborators,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteCollaboratorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteCollaborators =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteCollaborators',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteCollaborators);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListCollaborationsRequest,
 *   !proto.clarifai.api.MultiCollaborationsResponse>}
 */
const methodDescriptor_V2_ListCollaborations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListCollaborations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListCollaborationsRequest,
  proto.clarifai.api.MultiCollaborationsResponse,
  /**
   * @param {!proto.clarifai.api.ListCollaborationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollaborationsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListCollaborationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiCollaborationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiCollaborationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listCollaborations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListCollaborations',
      request,
      metadata || {},
      methodDescriptor_V2_ListCollaborations,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListCollaborationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollaborationsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listCollaborations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListCollaborations',
      request,
      metadata || {},
      methodDescriptor_V2_ListCollaborations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.FetchLicenseRequest,
 *   !proto.clarifai.api.FetchLicenseResponse>}
 */
const methodDescriptor_V2_FetchLicense = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/FetchLicense',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.FetchLicenseRequest,
  proto.clarifai.api.FetchLicenseResponse,
  /**
   * @param {!proto.clarifai.api.FetchLicenseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.FetchLicenseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.FetchLicenseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.FetchLicenseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.FetchLicenseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.fetchLicense =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/FetchLicense',
      request,
      metadata || {},
      methodDescriptor_V2_FetchLicense,
      callback);
};


/**
 * @param {!proto.clarifai.api.FetchLicenseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.FetchLicenseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.fetchLicense =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/FetchLicense',
      request,
      metadata || {},
      methodDescriptor_V2_FetchLicense);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListLicensesRequest,
 *   !proto.clarifai.api.MultipleLicensesResponse>}
 */
const methodDescriptor_V2_ListLicenses = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListLicenses',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListLicensesRequest,
  proto.clarifai.api.MultipleLicensesResponse,
  /**
   * @param {!proto.clarifai.api.ListLicensesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultipleLicensesResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListLicensesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultipleLicensesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultipleLicensesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listLicenses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListLicenses',
      request,
      metadata || {},
      methodDescriptor_V2_ListLicenses,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListLicensesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultipleLicensesResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listLicenses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListLicenses',
      request,
      metadata || {},
      methodDescriptor_V2_ListLicenses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetLicenseRequest,
 *   !proto.clarifai.api.SingleLicenseResponse>}
 */
const methodDescriptor_V2_GetLicense = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetLicense',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetLicenseRequest,
  proto.clarifai.api.SingleLicenseResponse,
  /**
   * @param {!proto.clarifai.api.GetLicenseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleLicenseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetLicenseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleLicenseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleLicenseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getLicense =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetLicense',
      request,
      metadata || {},
      methodDescriptor_V2_GetLicense,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetLicenseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleLicenseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getLicense =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetLicense',
      request,
      metadata || {},
      methodDescriptor_V2_GetLicense);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ValidateLicenseRequest,
 *   !proto.clarifai.api.ValidateLicenseResponse>}
 */
const methodDescriptor_V2_ValidateLicense = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ValidateLicense',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ValidateLicenseRequest,
  proto.clarifai.api.ValidateLicenseResponse,
  /**
   * @param {!proto.clarifai.api.ValidateLicenseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.ValidateLicenseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ValidateLicenseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.ValidateLicenseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.ValidateLicenseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.validateLicense =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ValidateLicense',
      request,
      metadata || {},
      methodDescriptor_V2_ValidateLicense,
      callback);
};


/**
 * @param {!proto.clarifai.api.ValidateLicenseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.ValidateLicenseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.validateLicense =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ValidateLicense',
      request,
      metadata || {},
      methodDescriptor_V2_ValidateLicense);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAppDuplicationsRequest,
 *   !proto.clarifai.api.MultiAppDuplicationsResponse>}
 */
const methodDescriptor_V2_PostAppDuplications = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAppDuplications',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAppDuplicationsRequest,
  proto.clarifai.api.MultiAppDuplicationsResponse,
  /**
   * @param {!proto.clarifai.api.PostAppDuplicationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppDuplicationsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAppDuplicationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAppDuplicationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAppDuplicationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAppDuplications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAppDuplications',
      request,
      metadata || {},
      methodDescriptor_V2_PostAppDuplications,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAppDuplicationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppDuplicationsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAppDuplications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAppDuplications',
      request,
      metadata || {},
      methodDescriptor_V2_PostAppDuplications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListAppDuplicationsRequest,
 *   !proto.clarifai.api.MultiAppDuplicationsResponse>}
 */
const methodDescriptor_V2_ListAppDuplications = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListAppDuplications',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListAppDuplicationsRequest,
  proto.clarifai.api.MultiAppDuplicationsResponse,
  /**
   * @param {!proto.clarifai.api.ListAppDuplicationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppDuplicationsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListAppDuplicationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiAppDuplicationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiAppDuplicationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listAppDuplications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListAppDuplications',
      request,
      metadata || {},
      methodDescriptor_V2_ListAppDuplications,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListAppDuplicationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppDuplicationsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listAppDuplications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListAppDuplications',
      request,
      metadata || {},
      methodDescriptor_V2_ListAppDuplications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetAppDuplicationRequest,
 *   !proto.clarifai.api.SingleAppDuplicationResponse>}
 */
const methodDescriptor_V2_GetAppDuplication = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetAppDuplication',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetAppDuplicationRequest,
  proto.clarifai.api.SingleAppDuplicationResponse,
  /**
   * @param {!proto.clarifai.api.GetAppDuplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleAppDuplicationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetAppDuplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleAppDuplicationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleAppDuplicationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getAppDuplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetAppDuplication',
      request,
      metadata || {},
      methodDescriptor_V2_GetAppDuplication,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetAppDuplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleAppDuplicationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getAppDuplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetAppDuplication',
      request,
      metadata || {},
      methodDescriptor_V2_GetAppDuplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostTasksRequest,
 *   !proto.clarifai.api.MultiTaskResponse>}
 */
const methodDescriptor_V2_PostTasks = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostTasks',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostTasksRequest,
  proto.clarifai.api.MultiTaskResponse,
  /**
   * @param {!proto.clarifai.api.PostTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTaskResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostTasks',
      request,
      metadata || {},
      methodDescriptor_V2_PostTasks,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTaskResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostTasks',
      request,
      metadata || {},
      methodDescriptor_V2_PostTasks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetTaskCountRequest,
 *   !proto.clarifai.api.SingleTaskCountResponse>}
 */
const methodDescriptor_V2_GetTaskAnnotationCount = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetTaskAnnotationCount',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetTaskCountRequest,
  proto.clarifai.api.SingleTaskCountResponse,
  /**
   * @param {!proto.clarifai.api.GetTaskCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleTaskCountResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetTaskCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleTaskCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleTaskCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getTaskAnnotationCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetTaskAnnotationCount',
      request,
      metadata || {},
      methodDescriptor_V2_GetTaskAnnotationCount,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetTaskCountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleTaskCountResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getTaskAnnotationCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetTaskAnnotationCount',
      request,
      metadata || {},
      methodDescriptor_V2_GetTaskAnnotationCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetTaskCountRequest,
 *   !proto.clarifai.api.SingleTaskCountResponse>}
 */
const methodDescriptor_V2_GetTaskInputCount = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetTaskInputCount',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetTaskCountRequest,
  proto.clarifai.api.SingleTaskCountResponse,
  /**
   * @param {!proto.clarifai.api.GetTaskCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleTaskCountResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetTaskCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleTaskCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleTaskCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getTaskInputCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetTaskInputCount',
      request,
      metadata || {},
      methodDescriptor_V2_GetTaskInputCount,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetTaskCountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleTaskCountResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getTaskInputCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetTaskInputCount',
      request,
      metadata || {},
      methodDescriptor_V2_GetTaskInputCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetTaskRequest,
 *   !proto.clarifai.api.SingleTaskResponse>}
 */
const methodDescriptor_V2_GetTask = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetTask',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetTaskRequest,
  proto.clarifai.api.SingleTaskResponse,
  /**
   * @param {!proto.clarifai.api.GetTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleTaskResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetTask',
      request,
      metadata || {},
      methodDescriptor_V2_GetTask,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleTaskResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetTask',
      request,
      metadata || {},
      methodDescriptor_V2_GetTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListTasksRequest,
 *   !proto.clarifai.api.MultiTaskResponse>}
 */
const methodDescriptor_V2_ListTasks = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListTasks',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListTasksRequest,
  proto.clarifai.api.MultiTaskResponse,
  /**
   * @param {!proto.clarifai.api.ListTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTaskResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListTasks',
      request,
      metadata || {},
      methodDescriptor_V2_ListTasks,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTaskResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListTasks',
      request,
      metadata || {},
      methodDescriptor_V2_ListTasks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchTasksRequest,
 *   !proto.clarifai.api.MultiTaskResponse>}
 */
const methodDescriptor_V2_PatchTasks = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchTasks',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchTasksRequest,
  proto.clarifai.api.MultiTaskResponse,
  /**
   * @param {!proto.clarifai.api.PatchTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTaskResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchTasks',
      request,
      metadata || {},
      methodDescriptor_V2_PatchTasks,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTaskResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchTasks',
      request,
      metadata || {},
      methodDescriptor_V2_PatchTasks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteTasksRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteTasks = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteTasks',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteTasksRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteTasks',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteTasks,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteTasks',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteTasks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchAnnotationCountsRollupRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PatchAnnotationCountsRollup = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchAnnotationCountsRollup',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchAnnotationCountsRollupRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PatchAnnotationCountsRollupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchAnnotationCountsRollupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchAnnotationCountsRollup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotationCountsRollup',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotationCountsRollup,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchAnnotationCountsRollupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchAnnotationCountsRollup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchAnnotationCountsRollup',
      request,
      metadata || {},
      methodDescriptor_V2_PatchAnnotationCountsRollup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostLabelOrdersRequest,
 *   !proto.clarifai.api.MultiLabelOrderResponse>}
 */
const methodDescriptor_V2_PostLabelOrders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostLabelOrders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostLabelOrdersRequest,
  proto.clarifai.api.MultiLabelOrderResponse,
  /**
   * @param {!proto.clarifai.api.PostLabelOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiLabelOrderResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostLabelOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiLabelOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiLabelOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postLabelOrders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostLabelOrders',
      request,
      metadata || {},
      methodDescriptor_V2_PostLabelOrders,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostLabelOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiLabelOrderResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postLabelOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostLabelOrders',
      request,
      metadata || {},
      methodDescriptor_V2_PostLabelOrders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetLabelOrderRequest,
 *   !proto.clarifai.api.SingleLabelOrderResponse>}
 */
const methodDescriptor_V2_GetLabelOrder = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetLabelOrder',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetLabelOrderRequest,
  proto.clarifai.api.SingleLabelOrderResponse,
  /**
   * @param {!proto.clarifai.api.GetLabelOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleLabelOrderResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetLabelOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleLabelOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleLabelOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getLabelOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetLabelOrder',
      request,
      metadata || {},
      methodDescriptor_V2_GetLabelOrder,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetLabelOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleLabelOrderResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getLabelOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetLabelOrder',
      request,
      metadata || {},
      methodDescriptor_V2_GetLabelOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListLabelOrdersRequest,
 *   !proto.clarifai.api.MultiLabelOrderResponse>}
 */
const methodDescriptor_V2_ListLabelOrders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListLabelOrders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListLabelOrdersRequest,
  proto.clarifai.api.MultiLabelOrderResponse,
  /**
   * @param {!proto.clarifai.api.ListLabelOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiLabelOrderResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListLabelOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiLabelOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiLabelOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listLabelOrders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListLabelOrders',
      request,
      metadata || {},
      methodDescriptor_V2_ListLabelOrders,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListLabelOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiLabelOrderResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listLabelOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListLabelOrders',
      request,
      metadata || {},
      methodDescriptor_V2_ListLabelOrders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchLabelOrdersRequest,
 *   !proto.clarifai.api.MultiLabelOrderResponse>}
 */
const methodDescriptor_V2_PatchLabelOrders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchLabelOrders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchLabelOrdersRequest,
  proto.clarifai.api.MultiLabelOrderResponse,
  /**
   * @param {!proto.clarifai.api.PatchLabelOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiLabelOrderResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchLabelOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiLabelOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiLabelOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchLabelOrders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchLabelOrders',
      request,
      metadata || {},
      methodDescriptor_V2_PatchLabelOrders,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchLabelOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiLabelOrderResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchLabelOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchLabelOrders',
      request,
      metadata || {},
      methodDescriptor_V2_PatchLabelOrders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteLabelOrdersRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteLabelOrders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteLabelOrders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteLabelOrdersRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteLabelOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteLabelOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteLabelOrders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteLabelOrders',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteLabelOrders,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteLabelOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteLabelOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteLabelOrders',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteLabelOrders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostCollectorsRequest,
 *   !proto.clarifai.api.MultiCollectorResponse>}
 */
const methodDescriptor_V2_PostCollectors = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostCollectors',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostCollectorsRequest,
  proto.clarifai.api.MultiCollectorResponse,
  /**
   * @param {!proto.clarifai.api.PostCollectorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollectorResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostCollectorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiCollectorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiCollectorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postCollectors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostCollectors',
      request,
      metadata || {},
      methodDescriptor_V2_PostCollectors,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostCollectorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollectorResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postCollectors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostCollectors',
      request,
      metadata || {},
      methodDescriptor_V2_PostCollectors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetCollectorRequest,
 *   !proto.clarifai.api.SingleCollectorResponse>}
 */
const methodDescriptor_V2_GetCollector = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetCollector',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetCollectorRequest,
  proto.clarifai.api.SingleCollectorResponse,
  /**
   * @param {!proto.clarifai.api.GetCollectorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleCollectorResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetCollectorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleCollectorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleCollectorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getCollector =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetCollector',
      request,
      metadata || {},
      methodDescriptor_V2_GetCollector,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetCollectorRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleCollectorResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getCollector =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetCollector',
      request,
      metadata || {},
      methodDescriptor_V2_GetCollector);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListCollectorsRequest,
 *   !proto.clarifai.api.MultiCollectorResponse>}
 */
const methodDescriptor_V2_ListCollectors = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListCollectors',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListCollectorsRequest,
  proto.clarifai.api.MultiCollectorResponse,
  /**
   * @param {!proto.clarifai.api.ListCollectorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollectorResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListCollectorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiCollectorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiCollectorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listCollectors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListCollectors',
      request,
      metadata || {},
      methodDescriptor_V2_ListCollectors,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListCollectorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollectorResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listCollectors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListCollectors',
      request,
      metadata || {},
      methodDescriptor_V2_ListCollectors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchCollectorsRequest,
 *   !proto.clarifai.api.MultiCollectorResponse>}
 */
const methodDescriptor_V2_PatchCollectors = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchCollectors',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchCollectorsRequest,
  proto.clarifai.api.MultiCollectorResponse,
  /**
   * @param {!proto.clarifai.api.PatchCollectorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollectorResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchCollectorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiCollectorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiCollectorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchCollectors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchCollectors',
      request,
      metadata || {},
      methodDescriptor_V2_PatchCollectors,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchCollectorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollectorResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchCollectors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchCollectors',
      request,
      metadata || {},
      methodDescriptor_V2_PatchCollectors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteCollectorsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteCollectors = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteCollectors',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteCollectorsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteCollectorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteCollectorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteCollectors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteCollectors',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteCollectors,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteCollectorsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteCollectors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteCollectors',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteCollectors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostStatValuesRequest,
 *   !proto.clarifai.api.MultiStatValueResponse>}
 */
const methodDescriptor_V2_PostStatValues = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostStatValues',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostStatValuesRequest,
  proto.clarifai.api.MultiStatValueResponse,
  /**
   * @param {!proto.clarifai.api.PostStatValuesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiStatValueResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostStatValuesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiStatValueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiStatValueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postStatValues =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostStatValues',
      request,
      metadata || {},
      methodDescriptor_V2_PostStatValues,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostStatValuesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiStatValueResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postStatValues =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostStatValues',
      request,
      metadata || {},
      methodDescriptor_V2_PostStatValues);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostStatValuesAggregateRequest,
 *   !proto.clarifai.api.MultiStatValueAggregateResponse>}
 */
const methodDescriptor_V2_PostStatValuesAggregate = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostStatValuesAggregate',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostStatValuesAggregateRequest,
  proto.clarifai.api.MultiStatValueAggregateResponse,
  /**
   * @param {!proto.clarifai.api.PostStatValuesAggregateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiStatValueAggregateResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostStatValuesAggregateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiStatValueAggregateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiStatValueAggregateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postStatValuesAggregate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostStatValuesAggregate',
      request,
      metadata || {},
      methodDescriptor_V2_PostStatValuesAggregate,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostStatValuesAggregateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiStatValueAggregateResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postStatValuesAggregate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostStatValuesAggregate',
      request,
      metadata || {},
      methodDescriptor_V2_PostStatValuesAggregate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostAnalyticsRequest,
 *   !proto.clarifai.api.PostAnalyticsResponse>}
 */
const methodDescriptor_V2_PostAnalytics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAnalytics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAnalyticsRequest,
  proto.clarifai.api.PostAnalyticsResponse,
  /**
   * @param {!proto.clarifai.api.PostAnalyticsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostAnalyticsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostAnalyticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostAnalyticsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostAnalyticsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postAnalytics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostAnalytics',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnalytics,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostAnalyticsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostAnalyticsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postAnalytics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostAnalytics',
      request,
      metadata || {},
      methodDescriptor_V2_PostAnalytics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostSDKBillingRequest,
 *   !proto.clarifai.api.PostSDKBillingResponse>}
 */
const methodDescriptor_V2_PostSDKBilling = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostSDKBilling',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostSDKBillingRequest,
  proto.clarifai.api.PostSDKBillingResponse,
  /**
   * @param {!proto.clarifai.api.PostSDKBillingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostSDKBillingResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostSDKBillingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.PostSDKBillingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.PostSDKBillingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postSDKBilling =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostSDKBilling',
      request,
      metadata || {},
      methodDescriptor_V2_PostSDKBilling,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostSDKBillingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostSDKBillingResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postSDKBilling =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostSDKBilling',
      request,
      metadata || {},
      methodDescriptor_V2_PostSDKBilling);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostFindDuplicateAnnotationsJobsRequest,
 *   !proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse>}
 */
const methodDescriptor_V2_PostFindDuplicateAnnotationsJobs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostFindDuplicateAnnotationsJobs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostFindDuplicateAnnotationsJobsRequest,
  proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse,
  /**
   * @param {!proto.clarifai.api.PostFindDuplicateAnnotationsJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostFindDuplicateAnnotationsJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postFindDuplicateAnnotationsJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostFindDuplicateAnnotationsJobs',
      request,
      metadata || {},
      methodDescriptor_V2_PostFindDuplicateAnnotationsJobs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostFindDuplicateAnnotationsJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postFindDuplicateAnnotationsJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostFindDuplicateAnnotationsJobs',
      request,
      metadata || {},
      methodDescriptor_V2_PostFindDuplicateAnnotationsJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetFindDuplicateAnnotationsJobRequest,
 *   !proto.clarifai.api.SingleFindDuplicateAnnotationsJobResponse>}
 */
const methodDescriptor_V2_GetFindDuplicateAnnotationsJob = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetFindDuplicateAnnotationsJob',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetFindDuplicateAnnotationsJobRequest,
  proto.clarifai.api.SingleFindDuplicateAnnotationsJobResponse,
  /**
   * @param {!proto.clarifai.api.GetFindDuplicateAnnotationsJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleFindDuplicateAnnotationsJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetFindDuplicateAnnotationsJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleFindDuplicateAnnotationsJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleFindDuplicateAnnotationsJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getFindDuplicateAnnotationsJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetFindDuplicateAnnotationsJob',
      request,
      metadata || {},
      methodDescriptor_V2_GetFindDuplicateAnnotationsJob,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetFindDuplicateAnnotationsJobRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleFindDuplicateAnnotationsJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getFindDuplicateAnnotationsJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetFindDuplicateAnnotationsJob',
      request,
      metadata || {},
      methodDescriptor_V2_GetFindDuplicateAnnotationsJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListFindDuplicateAnnotationsJobsRequest,
 *   !proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse>}
 */
const methodDescriptor_V2_ListFindDuplicateAnnotationsJobs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListFindDuplicateAnnotationsJobs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListFindDuplicateAnnotationsJobsRequest,
  proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse,
  /**
   * @param {!proto.clarifai.api.ListFindDuplicateAnnotationsJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListFindDuplicateAnnotationsJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listFindDuplicateAnnotationsJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListFindDuplicateAnnotationsJobs',
      request,
      metadata || {},
      methodDescriptor_V2_ListFindDuplicateAnnotationsJobs,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListFindDuplicateAnnotationsJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiFindDuplicateAnnotationsJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listFindDuplicateAnnotationsJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListFindDuplicateAnnotationsJobs',
      request,
      metadata || {},
      methodDescriptor_V2_ListFindDuplicateAnnotationsJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteFindDuplicateAnnotationsJobsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteFindDuplicateAnnotationsJobs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteFindDuplicateAnnotationsJobs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteFindDuplicateAnnotationsJobsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteFindDuplicateAnnotationsJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteFindDuplicateAnnotationsJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteFindDuplicateAnnotationsJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteFindDuplicateAnnotationsJobs',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteFindDuplicateAnnotationsJobs,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteFindDuplicateAnnotationsJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteFindDuplicateAnnotationsJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteFindDuplicateAnnotationsJobs',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteFindDuplicateAnnotationsJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostTrendingMetricsViewRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostTrendingMetricsView = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostTrendingMetricsView',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostTrendingMetricsViewRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PostTrendingMetricsViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostTrendingMetricsViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postTrendingMetricsView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostTrendingMetricsView',
      request,
      metadata || {},
      methodDescriptor_V2_PostTrendingMetricsView,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostTrendingMetricsViewRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postTrendingMetricsView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostTrendingMetricsView',
      request,
      metadata || {},
      methodDescriptor_V2_PostTrendingMetricsView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListTrendingMetricsViewsRequest,
 *   !proto.clarifai.api.MultiTrendingMetricsViewResponse>}
 */
const methodDescriptor_V2_ListTrendingMetricsViews = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListTrendingMetricsViews',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListTrendingMetricsViewsRequest,
  proto.clarifai.api.MultiTrendingMetricsViewResponse,
  /**
   * @param {!proto.clarifai.api.ListTrendingMetricsViewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTrendingMetricsViewResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListTrendingMetricsViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTrendingMetricsViewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTrendingMetricsViewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listTrendingMetricsViews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListTrendingMetricsViews',
      request,
      metadata || {},
      methodDescriptor_V2_ListTrendingMetricsViews,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListTrendingMetricsViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTrendingMetricsViewResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listTrendingMetricsViews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListTrendingMetricsViews',
      request,
      metadata || {},
      methodDescriptor_V2_ListTrendingMetricsViews);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostIdValidationRequest,
 *   !proto.clarifai.api.MultiIdValidationResponse>}
 */
const methodDescriptor_V2_PostIdValidation = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostIdValidation',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostIdValidationRequest,
  proto.clarifai.api.MultiIdValidationResponse,
  /**
   * @param {!proto.clarifai.api.PostIdValidationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiIdValidationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostIdValidationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiIdValidationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiIdValidationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postIdValidation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostIdValidation',
      request,
      metadata || {},
      methodDescriptor_V2_PostIdValidation,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostIdValidationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiIdValidationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postIdValidation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostIdValidation',
      request,
      metadata || {},
      methodDescriptor_V2_PostIdValidation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListTagCategoriesRequest,
 *   !proto.clarifai.api.MultiTagCategoryResponse>}
 */
const methodDescriptor_V2_ListTagCategories = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListTagCategories',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListTagCategoriesRequest,
  proto.clarifai.api.MultiTagCategoryResponse,
  /**
   * @param {!proto.clarifai.api.ListTagCategoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTagCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListTagCategoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiTagCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiTagCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listTagCategories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListTagCategories',
      request,
      metadata || {},
      methodDescriptor_V2_ListTagCategories,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListTagCategoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTagCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listTagCategories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListTagCategories',
      request,
      metadata || {},
      methodDescriptor_V2_ListTagCategories);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListWebNotificationsRequest,
 *   !proto.clarifai.api.MultiWebNotificationResponse>}
 */
const methodDescriptor_V2_ListWebNotifications = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListWebNotifications',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListWebNotificationsRequest,
  proto.clarifai.api.MultiWebNotificationResponse,
  /**
   * @param {!proto.clarifai.api.ListWebNotificationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWebNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListWebNotificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWebNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWebNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listWebNotifications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListWebNotifications',
      request,
      metadata || {},
      methodDescriptor_V2_ListWebNotifications,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListWebNotificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWebNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listWebNotifications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListWebNotifications',
      request,
      metadata || {},
      methodDescriptor_V2_ListWebNotifications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetWebNotificationRequest,
 *   !proto.clarifai.api.SingleWebNotificationResponse>}
 */
const methodDescriptor_V2_GetWebNotification = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetWebNotification',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetWebNotificationRequest,
  proto.clarifai.api.SingleWebNotificationResponse,
  /**
   * @param {!proto.clarifai.api.GetWebNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleWebNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetWebNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleWebNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleWebNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getWebNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetWebNotification',
      request,
      metadata || {},
      methodDescriptor_V2_GetWebNotification,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetWebNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleWebNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getWebNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetWebNotification',
      request,
      metadata || {},
      methodDescriptor_V2_GetWebNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchWebNotificationsRequest,
 *   !proto.clarifai.api.MultiWebNotificationResponse>}
 */
const methodDescriptor_V2_PatchWebNotifications = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchWebNotifications',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchWebNotificationsRequest,
  proto.clarifai.api.MultiWebNotificationResponse,
  /**
   * @param {!proto.clarifai.api.PatchWebNotificationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWebNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchWebNotificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWebNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWebNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchWebNotifications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchWebNotifications',
      request,
      metadata || {},
      methodDescriptor_V2_PatchWebNotifications,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchWebNotificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWebNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchWebNotifications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchWebNotifications',
      request,
      metadata || {},
      methodDescriptor_V2_PatchWebNotifications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteWebNotificationsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteWebNotifications = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteWebNotifications',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteWebNotificationsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteWebNotificationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteWebNotificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteWebNotifications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWebNotifications',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWebNotifications,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteWebNotificationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteWebNotifications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteWebNotifications',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteWebNotifications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetModuleRequest,
 *   !proto.clarifai.api.SingleModuleResponse>}
 */
const methodDescriptor_V2_GetModule = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModule',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModuleRequest,
  proto.clarifai.api.SingleModuleResponse,
  /**
   * @param {!proto.clarifai.api.GetModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModuleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getModule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetModule',
      request,
      metadata || {},
      methodDescriptor_V2_GetModule,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModuleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getModule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetModule',
      request,
      metadata || {},
      methodDescriptor_V2_GetModule);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModulesRequest,
 *   !proto.clarifai.api.MultiModuleResponse>}
 */
const methodDescriptor_V2_ListModules = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModules',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModulesRequest,
  proto.clarifai.api.MultiModuleResponse,
  /**
   * @param {!proto.clarifai.api.ListModulesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModuleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModules =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModules',
      request,
      metadata || {},
      methodDescriptor_V2_ListModules,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModuleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModules =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModules',
      request,
      metadata || {},
      methodDescriptor_V2_ListModules);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModulesRequest,
 *   !proto.clarifai.api.MultiModuleResponse>}
 */
const methodDescriptor_V2_PostModules = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModules',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModulesRequest,
  proto.clarifai.api.MultiModuleResponse,
  /**
   * @param {!proto.clarifai.api.PostModulesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModuleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModules =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModules',
      request,
      metadata || {},
      methodDescriptor_V2_PostModules,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModuleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModules =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModules',
      request,
      metadata || {},
      methodDescriptor_V2_PostModules);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PatchModulesRequest,
 *   !proto.clarifai.api.MultiModuleResponse>}
 */
const methodDescriptor_V2_PatchModules = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModules',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModulesRequest,
  proto.clarifai.api.MultiModuleResponse,
  /**
   * @param {!proto.clarifai.api.PatchModulesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModuleResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PatchModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModuleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModuleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.patchModules =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PatchModules',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModules,
      callback);
};


/**
 * @param {!proto.clarifai.api.PatchModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModuleResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.patchModules =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PatchModules',
      request,
      metadata || {},
      methodDescriptor_V2_PatchModules);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteModulesRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteModules = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteModules',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteModulesRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteModulesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteModules =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModules',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModules,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteModulesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteModules =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModules',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModules);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetModuleVersionRequest,
 *   !proto.clarifai.api.SingleModuleVersionResponse>}
 */
const methodDescriptor_V2_GetModuleVersion = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModuleVersion',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModuleVersionRequest,
  proto.clarifai.api.SingleModuleVersionResponse,
  /**
   * @param {!proto.clarifai.api.GetModuleVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModuleVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetModuleVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleModuleVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleModuleVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getModuleVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetModuleVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetModuleVersion,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetModuleVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModuleVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getModuleVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetModuleVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetModuleVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListModuleVersionsRequest,
 *   !proto.clarifai.api.MultiModuleVersionResponse>}
 */
const methodDescriptor_V2_ListModuleVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListModuleVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListModuleVersionsRequest,
  proto.clarifai.api.MultiModuleVersionResponse,
  /**
   * @param {!proto.clarifai.api.ListModuleVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModuleVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModuleVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModuleVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listModuleVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListModuleVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModuleVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listModuleVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListModuleVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostModuleVersionsRequest,
 *   !proto.clarifai.api.MultiModuleVersionResponse>}
 */
const methodDescriptor_V2_PostModuleVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModuleVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModuleVersionsRequest,
  proto.clarifai.api.MultiModuleVersionResponse,
  /**
   * @param {!proto.clarifai.api.PostModuleVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModuleVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiModuleVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiModuleVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postModuleVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PostModuleVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModuleVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postModuleVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PostModuleVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteModuleVersionsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteModuleVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteModuleVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteModuleVersionsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteModuleVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteModuleVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModuleVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteModuleVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteModuleVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetInstalledModuleVersionRequest,
 *   !proto.clarifai.api.SingleInstalledModuleVersionResponse>}
 */
const methodDescriptor_V2_GetInstalledModuleVersion = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetInstalledModuleVersion',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetInstalledModuleVersionRequest,
  proto.clarifai.api.SingleInstalledModuleVersionResponse,
  /**
   * @param {!proto.clarifai.api.GetInstalledModuleVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleInstalledModuleVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetInstalledModuleVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleInstalledModuleVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleInstalledModuleVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getInstalledModuleVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetInstalledModuleVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetInstalledModuleVersion,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetInstalledModuleVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleInstalledModuleVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getInstalledModuleVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetInstalledModuleVersion',
      request,
      metadata || {},
      methodDescriptor_V2_GetInstalledModuleVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListInstalledModuleVersionsRequest,
 *   !proto.clarifai.api.MultiInstalledModuleVersionResponse>}
 */
const methodDescriptor_V2_ListInstalledModuleVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListInstalledModuleVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListInstalledModuleVersionsRequest,
  proto.clarifai.api.MultiInstalledModuleVersionResponse,
  /**
   * @param {!proto.clarifai.api.ListInstalledModuleVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInstalledModuleVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListInstalledModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInstalledModuleVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInstalledModuleVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listInstalledModuleVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListInstalledModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListInstalledModuleVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListInstalledModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInstalledModuleVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listInstalledModuleVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListInstalledModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_ListInstalledModuleVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostInstalledModuleVersionsRequest,
 *   !proto.clarifai.api.MultiInstalledModuleVersionResponse>}
 */
const methodDescriptor_V2_PostInstalledModuleVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostInstalledModuleVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostInstalledModuleVersionsRequest,
  proto.clarifai.api.MultiInstalledModuleVersionResponse,
  /**
   * @param {!proto.clarifai.api.PostInstalledModuleVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInstalledModuleVersionResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostInstalledModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInstalledModuleVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInstalledModuleVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postInstalledModuleVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostInstalledModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PostInstalledModuleVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostInstalledModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInstalledModuleVersionResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postInstalledModuleVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostInstalledModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_PostInstalledModuleVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteInstalledModuleVersionsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteInstalledModuleVersions = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteInstalledModuleVersions',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteInstalledModuleVersionsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteInstalledModuleVersionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteInstalledModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteInstalledModuleVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteInstalledModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteInstalledModuleVersions,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteInstalledModuleVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteInstalledModuleVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteInstalledModuleVersions',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteInstalledModuleVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostInstalledModuleVersionsKeyRequest,
 *   !proto.clarifai.api.SingleKeyResponse>}
 */
const methodDescriptor_V2_PostInstalledModuleVersionsKey = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostInstalledModuleVersionsKey',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostInstalledModuleVersionsKeyRequest,
  proto.clarifai.api.SingleKeyResponse,
  /**
   * @param {!proto.clarifai.api.PostInstalledModuleVersionsKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleKeyResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostInstalledModuleVersionsKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postInstalledModuleVersionsKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostInstalledModuleVersionsKey',
      request,
      metadata || {},
      methodDescriptor_V2_PostInstalledModuleVersionsKey,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostInstalledModuleVersionsKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleKeyResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postInstalledModuleVersionsKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostInstalledModuleVersionsKey',
      request,
      metadata || {},
      methodDescriptor_V2_PostInstalledModuleVersionsKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostBulkOperationsRequest,
 *   !proto.clarifai.api.MultiBulkOperationsResponse>}
 */
const methodDescriptor_V2_PostBulkOperations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostBulkOperations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostBulkOperationsRequest,
  proto.clarifai.api.MultiBulkOperationsResponse,
  /**
   * @param {!proto.clarifai.api.PostBulkOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiBulkOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostBulkOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiBulkOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiBulkOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postBulkOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostBulkOperations',
      request,
      metadata || {},
      methodDescriptor_V2_PostBulkOperations,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostBulkOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiBulkOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postBulkOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostBulkOperations',
      request,
      metadata || {},
      methodDescriptor_V2_PostBulkOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListBulkOperationsRequest,
 *   !proto.clarifai.api.MultiBulkOperationsResponse>}
 */
const methodDescriptor_V2_ListBulkOperations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListBulkOperations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListBulkOperationsRequest,
  proto.clarifai.api.MultiBulkOperationsResponse,
  /**
   * @param {!proto.clarifai.api.ListBulkOperationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiBulkOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListBulkOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiBulkOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiBulkOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listBulkOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListBulkOperations',
      request,
      metadata || {},
      methodDescriptor_V2_ListBulkOperations,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListBulkOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiBulkOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listBulkOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListBulkOperations',
      request,
      metadata || {},
      methodDescriptor_V2_ListBulkOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetBulkOperationRequest,
 *   !proto.clarifai.api.SingleBulkOperationsResponse>}
 */
const methodDescriptor_V2_GetBulkOperation = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetBulkOperation',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetBulkOperationRequest,
  proto.clarifai.api.SingleBulkOperationsResponse,
  /**
   * @param {!proto.clarifai.api.GetBulkOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleBulkOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetBulkOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleBulkOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleBulkOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getBulkOperation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetBulkOperation',
      request,
      metadata || {},
      methodDescriptor_V2_GetBulkOperation,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetBulkOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleBulkOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getBulkOperation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetBulkOperation',
      request,
      metadata || {},
      methodDescriptor_V2_GetBulkOperation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.CancelBulkOperationRequest,
 *   !proto.clarifai.api.MultiBulkOperationsResponse>}
 */
const methodDescriptor_V2_CancelBulkOperations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/CancelBulkOperations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.CancelBulkOperationRequest,
  proto.clarifai.api.MultiBulkOperationsResponse,
  /**
   * @param {!proto.clarifai.api.CancelBulkOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiBulkOperationsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.CancelBulkOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiBulkOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiBulkOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.cancelBulkOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/CancelBulkOperations',
      request,
      metadata || {},
      methodDescriptor_V2_CancelBulkOperations,
      callback);
};


/**
 * @param {!proto.clarifai.api.CancelBulkOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiBulkOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.cancelBulkOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/CancelBulkOperations',
      request,
      metadata || {},
      methodDescriptor_V2_CancelBulkOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteBulkOperationRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteBulkOperations = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteBulkOperations',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteBulkOperationRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteBulkOperationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteBulkOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteBulkOperations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteBulkOperations',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteBulkOperations,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteBulkOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteBulkOperations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteBulkOperations',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteBulkOperations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetDatasetInputsSearchAddJobRequest,
 *   !proto.clarifai.api.SingleDatasetInputsSearchAddJobResponse>}
 */
const methodDescriptor_V2_GetDatasetInputsSearchAddJob = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetDatasetInputsSearchAddJob',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetDatasetInputsSearchAddJobRequest,
  proto.clarifai.api.SingleDatasetInputsSearchAddJobResponse,
  /**
   * @param {!proto.clarifai.api.GetDatasetInputsSearchAddJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleDatasetInputsSearchAddJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetDatasetInputsSearchAddJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleDatasetInputsSearchAddJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleDatasetInputsSearchAddJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getDatasetInputsSearchAddJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetDatasetInputsSearchAddJob',
      request,
      metadata || {},
      methodDescriptor_V2_GetDatasetInputsSearchAddJob,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetDatasetInputsSearchAddJobRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleDatasetInputsSearchAddJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getDatasetInputsSearchAddJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetDatasetInputsSearchAddJob',
      request,
      metadata || {},
      methodDescriptor_V2_GetDatasetInputsSearchAddJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListNextTaskAssignmentsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_ListNextTaskAssignments = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListNextTaskAssignments',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListNextTaskAssignmentsRequest,
  proto.clarifai.api.MultiInputResponse,
  /**
   * @param {!proto.clarifai.api.ListNextTaskAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListNextTaskAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listNextTaskAssignments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListNextTaskAssignments',
      request,
      metadata || {},
      methodDescriptor_V2_ListNextTaskAssignments,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListNextTaskAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listNextTaskAssignments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListNextTaskAssignments',
      request,
      metadata || {},
      methodDescriptor_V2_ListNextTaskAssignments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PutTaskAssignmentsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PutTaskAssignments = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PutTaskAssignments',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PutTaskAssignmentsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.PutTaskAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PutTaskAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.putTaskAssignments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PutTaskAssignments',
      request,
      metadata || {},
      methodDescriptor_V2_PutTaskAssignments,
      callback);
};


/**
 * @param {!proto.clarifai.api.PutTaskAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.putTaskAssignments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PutTaskAssignments',
      request,
      metadata || {},
      methodDescriptor_V2_PutTaskAssignments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostWaitlistEmailsRequest,
 *   !proto.clarifai.api.MultiWaitlistEmailResponse>}
 */
const methodDescriptor_V2_PostWaitlistEmails = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWaitlistEmails',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWaitlistEmailsRequest,
  proto.clarifai.api.MultiWaitlistEmailResponse,
  /**
   * @param {!proto.clarifai.api.PostWaitlistEmailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWaitlistEmailResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostWaitlistEmailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiWaitlistEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiWaitlistEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postWaitlistEmails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostWaitlistEmails',
      request,
      metadata || {},
      methodDescriptor_V2_PostWaitlistEmails,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostWaitlistEmailsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWaitlistEmailResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postWaitlistEmails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostWaitlistEmails',
      request,
      metadata || {},
      methodDescriptor_V2_PostWaitlistEmails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetSampledPredictMetricsRequest,
 *   !proto.clarifai.api.MultiSampledPredictMetricsResponse>}
 */
const methodDescriptor_V2_GetSampledPredictMetrics = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetSampledPredictMetrics',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetSampledPredictMetricsRequest,
  proto.clarifai.api.MultiSampledPredictMetricsResponse,
  /**
   * @param {!proto.clarifai.api.GetSampledPredictMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSampledPredictMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetSampledPredictMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiSampledPredictMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiSampledPredictMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getSampledPredictMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetSampledPredictMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetSampledPredictMetrics,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetSampledPredictMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSampledPredictMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getSampledPredictMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetSampledPredictMetrics',
      request,
      metadata || {},
      methodDescriptor_V2_GetSampledPredictMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostInputsAddJobsRequest,
 *   !proto.clarifai.api.MultiInputsAddJobResponse>}
 */
const methodDescriptor_V2_PostInputsAddJobs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostInputsAddJobs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostInputsAddJobsRequest,
  proto.clarifai.api.MultiInputsAddJobResponse,
  /**
   * @param {!proto.clarifai.api.PostInputsAddJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputsAddJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostInputsAddJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputsAddJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputsAddJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postInputsAddJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsAddJobs',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsAddJobs,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostInputsAddJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputsAddJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postInputsAddJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostInputsAddJobs',
      request,
      metadata || {},
      methodDescriptor_V2_PostInputsAddJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListInputsAddJobsRequest,
 *   !proto.clarifai.api.MultiInputsAddJobResponse>}
 */
const methodDescriptor_V2_ListInputsAddJobs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListInputsAddJobs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListInputsAddJobsRequest,
  proto.clarifai.api.MultiInputsAddJobResponse,
  /**
   * @param {!proto.clarifai.api.ListInputsAddJobsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputsAddJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListInputsAddJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiInputsAddJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiInputsAddJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listInputsAddJobs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListInputsAddJobs',
      request,
      metadata || {},
      methodDescriptor_V2_ListInputsAddJobs,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListInputsAddJobsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputsAddJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listInputsAddJobs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListInputsAddJobs',
      request,
      metadata || {},
      methodDescriptor_V2_ListInputsAddJobs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetInputsAddJobRequest,
 *   !proto.clarifai.api.SingleInputsAddJobResponse>}
 */
const methodDescriptor_V2_GetInputsAddJob = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetInputsAddJob',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetInputsAddJobRequest,
  proto.clarifai.api.SingleInputsAddJobResponse,
  /**
   * @param {!proto.clarifai.api.GetInputsAddJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleInputsAddJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetInputsAddJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleInputsAddJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleInputsAddJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getInputsAddJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetInputsAddJob',
      request,
      metadata || {},
      methodDescriptor_V2_GetInputsAddJob,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetInputsAddJobRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleInputsAddJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getInputsAddJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetInputsAddJob',
      request,
      metadata || {},
      methodDescriptor_V2_GetInputsAddJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.CancelInputsAddJobRequest,
 *   !proto.clarifai.api.SingleInputsAddJobResponse>}
 */
const methodDescriptor_V2_CancelInputsAddJob = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/CancelInputsAddJob',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.CancelInputsAddJobRequest,
  proto.clarifai.api.SingleInputsAddJobResponse,
  /**
   * @param {!proto.clarifai.api.CancelInputsAddJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleInputsAddJobResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.CancelInputsAddJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleInputsAddJobResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleInputsAddJobResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.cancelInputsAddJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/CancelInputsAddJob',
      request,
      metadata || {},
      methodDescriptor_V2_CancelInputsAddJob,
      callback);
};


/**
 * @param {!proto.clarifai.api.CancelInputsAddJobRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleInputsAddJobResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.cancelInputsAddJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/CancelInputsAddJob',
      request,
      metadata || {},
      methodDescriptor_V2_CancelInputsAddJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PostUploadsRequest,
 *   !proto.clarifai.api.MultiUploadResponse>}
 */
const methodDescriptor_V2_PostUploads = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostUploads',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostUploadsRequest,
  proto.clarifai.api.MultiUploadResponse,
  /**
   * @param {!proto.clarifai.api.PostUploadsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiUploadResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PostUploadsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiUploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.postUploads =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PostUploads',
      request,
      metadata || {},
      methodDescriptor_V2_PostUploads,
      callback);
};


/**
 * @param {!proto.clarifai.api.PostUploadsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiUploadResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.postUploads =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PostUploads',
      request,
      metadata || {},
      methodDescriptor_V2_PostUploads);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.PutUploadContentPartsRequest,
 *   !proto.clarifai.api.SingleUploadResponse>}
 */
const methodDescriptor_V2_PutUploadContentParts = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PutUploadContentParts',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PutUploadContentPartsRequest,
  proto.clarifai.api.SingleUploadResponse,
  /**
   * @param {!proto.clarifai.api.PutUploadContentPartsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleUploadResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.PutUploadContentPartsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleUploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.putUploadContentParts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/PutUploadContentParts',
      request,
      metadata || {},
      methodDescriptor_V2_PutUploadContentParts,
      callback);
};


/**
 * @param {!proto.clarifai.api.PutUploadContentPartsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleUploadResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.putUploadContentParts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/PutUploadContentParts',
      request,
      metadata || {},
      methodDescriptor_V2_PutUploadContentParts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.GetUploadRequest,
 *   !proto.clarifai.api.SingleUploadResponse>}
 */
const methodDescriptor_V2_GetUpload = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetUpload',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetUploadRequest,
  proto.clarifai.api.SingleUploadResponse,
  /**
   * @param {!proto.clarifai.api.GetUploadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleUploadResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.GetUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.SingleUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.SingleUploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.getUpload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/GetUpload',
      request,
      metadata || {},
      methodDescriptor_V2_GetUpload,
      callback);
};


/**
 * @param {!proto.clarifai.api.GetUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleUploadResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.getUpload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/GetUpload',
      request,
      metadata || {},
      methodDescriptor_V2_GetUpload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.ListUploadsRequest,
 *   !proto.clarifai.api.MultiUploadResponse>}
 */
const methodDescriptor_V2_ListUploads = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListUploads',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListUploadsRequest,
  proto.clarifai.api.MultiUploadResponse,
  /**
   * @param {!proto.clarifai.api.ListUploadsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiUploadResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.ListUploadsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.MultiUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.MultiUploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.listUploads =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/ListUploads',
      request,
      metadata || {},
      methodDescriptor_V2_ListUploads,
      callback);
};


/**
 * @param {!proto.clarifai.api.ListUploadsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiUploadResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listUploads =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListUploads',
      request,
      metadata || {},
      methodDescriptor_V2_ListUploads);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.clarifai.api.DeleteUploadsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteUploads = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteUploads',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteUploadsRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /**
   * @param {!proto.clarifai.api.DeleteUploadsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @param {!proto.clarifai.api.DeleteUploadsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.clarifai.api.status.BaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.clarifai.api.status.BaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.clarifai.api.V2Client.prototype.deleteUploads =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/clarifai.api.V2/DeleteUploads',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteUploads,
      callback);
};


/**
 * @param {!proto.clarifai.api.DeleteUploadsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     Promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.deleteUploads =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/DeleteUploads',
      request,
      metadata || {},
      methodDescriptor_V2_DeleteUploads);
};


module.exports = proto.clarifai.api;

