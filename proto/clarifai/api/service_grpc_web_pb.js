/**
 * @fileoverview gRPC-Web generated client stub for clarifai.api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var proto_clarifai_api_resources_pb = require('../../../proto/clarifai/api/resources_pb.js')

var proto_clarifai_api_status_status_pb = require('../../../proto/clarifai/api/status/status_pb.js')

var proto_clarifai_api_utils_extensions_pb = require('../../../proto/clarifai/api/utils/extensions_pb.js')

var proto_clarifai_auth_scope_scope_pb = require('../../../proto/clarifai/auth/scope/scope_pb.js')

var proto_clarifai_auth_util_extension_pb = require('../../../proto/clarifai/auth/util/extension_pb.js')

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
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.clarifai.api.V2Client =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.clarifai.api.V2PromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
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
  /** @param {!proto.clarifai.api.ListConceptRelationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptRelationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListConceptRelationsRequest,
 *   !proto.clarifai.api.MultiConceptRelationResponse>}
 */
const methodInfo_V2_ListConceptRelations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptRelationResponse,
  /** @param {!proto.clarifai.api.ListConceptRelationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptRelationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptRelationResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostConceptRelationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptRelationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostConceptRelationsRequest,
 *   !proto.clarifai.api.MultiConceptRelationResponse>}
 */
const methodInfo_V2_PostConceptRelations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptRelationResponse,
  /** @param {!proto.clarifai.api.PostConceptRelationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptRelationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptRelationResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteConceptRelationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteConceptRelationsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteConceptRelations = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteConceptRelationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetConceptCountsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetConceptCountsRequest,
 *   !proto.clarifai.api.MultiConceptCountResponse>}
 */
const methodInfo_V2_GetConceptCounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptCountResponse,
  /** @param {!proto.clarifai.api.GetConceptCountsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptCountResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptCountResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetConceptRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleConceptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetConceptRequest,
 *   !proto.clarifai.api.SingleConceptResponse>}
 */
const methodInfo_V2_GetConcept = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleConceptResponse,
  /** @param {!proto.clarifai.api.GetConceptRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleConceptResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleConceptResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListConceptsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodInfo_V2_ListConcepts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptResponse,
  /** @param {!proto.clarifai.api.ListConceptsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PostConceptsSearchesRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodDescriptor_V2_PostConceptsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostConceptsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostConceptsSearchesRequest,
  proto.clarifai.api.MultiConceptResponse,
  /** @param {!proto.clarifai.api.PostConceptsSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostConceptsSearchesRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodInfo_V2_PostConceptsSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptResponse,
  /** @param {!proto.clarifai.api.PostConceptsSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostConceptsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodInfo_V2_PostConcepts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptResponse,
  /** @param {!proto.clarifai.api.PostConceptsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchConceptsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchConceptsRequest,
 *   !proto.clarifai.api.MultiConceptResponse>}
 */
const methodInfo_V2_PatchConcepts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptResponse,
  /** @param {!proto.clarifai.api.PatchConceptsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.GetConceptLanguageRequest,
 *   !proto.clarifai.api.SingleConceptLanguageResponse>}
 */
const methodDescriptor_V2_GetConceptLanguage = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetConceptLanguage',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetConceptLanguageRequest,
  proto.clarifai.api.SingleConceptLanguageResponse,
  /** @param {!proto.clarifai.api.GetConceptLanguageRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleConceptLanguageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetConceptLanguageRequest,
 *   !proto.clarifai.api.SingleConceptLanguageResponse>}
 */
const methodInfo_V2_GetConceptLanguage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleConceptLanguageResponse,
  /** @param {!proto.clarifai.api.GetConceptLanguageRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleConceptLanguageResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleConceptLanguageResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListConceptLanguagesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptLanguageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListConceptLanguagesRequest,
 *   !proto.clarifai.api.MultiConceptLanguageResponse>}
 */
const methodInfo_V2_ListConceptLanguages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptLanguageResponse,
  /** @param {!proto.clarifai.api.ListConceptLanguagesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptLanguageResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptLanguageResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostConceptLanguagesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptLanguageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostConceptLanguagesRequest,
 *   !proto.clarifai.api.MultiConceptLanguageResponse>}
 */
const methodInfo_V2_PostConceptLanguages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptLanguageResponse,
  /** @param {!proto.clarifai.api.PostConceptLanguagesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptLanguageResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptLanguageResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchConceptLanguagesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptLanguageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchConceptLanguagesRequest,
 *   !proto.clarifai.api.MultiConceptLanguageResponse>}
 */
const methodInfo_V2_PatchConceptLanguages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptLanguageResponse,
  /** @param {!proto.clarifai.api.PatchConceptLanguagesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptLanguageResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptLanguageResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.ListKnowledgeGraphsRequest,
 *   !proto.clarifai.api.MultiKnowledgeGraphResponse>}
 */
const methodDescriptor_V2_ListKnowledgeGraphs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListKnowledgeGraphs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListKnowledgeGraphsRequest,
  proto.clarifai.api.MultiKnowledgeGraphResponse,
  /** @param {!proto.clarifai.api.ListKnowledgeGraphsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKnowledgeGraphResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListKnowledgeGraphsRequest,
 *   !proto.clarifai.api.MultiKnowledgeGraphResponse>}
 */
const methodInfo_V2_ListKnowledgeGraphs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiKnowledgeGraphResponse,
  /** @param {!proto.clarifai.api.ListKnowledgeGraphsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiKnowledgeGraphResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKnowledgeGraphResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostKnowledgeGraphsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKnowledgeGraphResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostKnowledgeGraphsRequest,
 *   !proto.clarifai.api.MultiKnowledgeGraphResponse>}
 */
const methodInfo_V2_PostKnowledgeGraphs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiKnowledgeGraphResponse,
  /** @param {!proto.clarifai.api.PostKnowledgeGraphsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiKnowledgeGraphResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKnowledgeGraphResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostConceptMappingJobsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiConceptMappingJobResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostConceptMappingJobsRequest,
 *   !proto.clarifai.api.MultiConceptMappingJobResponse>}
 */
const methodInfo_V2_PostConceptMappingJobs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiConceptMappingJobResponse,
  /** @param {!proto.clarifai.api.PostConceptMappingJobsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiConceptMappingJobResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiConceptMappingJobResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.GetAnnotationRequest,
 *   !proto.clarifai.api.SingleAnnotationResponse>}
 */
const methodDescriptor_V2_GetAnnotation = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetAnnotation',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetAnnotationRequest,
  proto.clarifai.api.SingleAnnotationResponse,
  /** @param {!proto.clarifai.api.GetAnnotationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleAnnotationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetAnnotationRequest,
 *   !proto.clarifai.api.SingleAnnotationResponse>}
 */
const methodInfo_V2_GetAnnotation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleAnnotationResponse,
  /** @param {!proto.clarifai.api.GetAnnotationRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleAnnotationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleAnnotationResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListAnnotationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListAnnotationsRequest,
 *   !proto.clarifai.api.MultiAnnotationResponse>}
 */
const methodInfo_V2_ListAnnotations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAnnotationResponse,
  /** @param {!proto.clarifai.api.ListAnnotationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAnnotationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostAnnotationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostAnnotationsRequest,
 *   !proto.clarifai.api.MultiAnnotationResponse>}
 */
const methodInfo_V2_PostAnnotations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAnnotationResponse,
  /** @param {!proto.clarifai.api.PostAnnotationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAnnotationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchAnnotationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchAnnotationsRequest,
 *   !proto.clarifai.api.MultiAnnotationResponse>}
 */
const methodInfo_V2_PatchAnnotations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAnnotationResponse,
  /** @param {!proto.clarifai.api.PatchAnnotationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAnnotationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchAnnotationsStatusRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PatchAnnotationsStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchAnnotationsStatusRequest,
 *   !proto.clarifai.api.PatchAnnotationsStatusResponse>}
 */
const methodInfo_V2_PatchAnnotationsStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.PatchAnnotationsStatusResponse,
  /** @param {!proto.clarifai.api.PatchAnnotationsStatusRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.PatchAnnotationsStatusResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PatchAnnotationsStatusResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteAnnotationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteAnnotationRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteAnnotation = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteAnnotationRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteAnnotationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteAnnotationsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteAnnotations = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteAnnotationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchAnnotationsSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchAnnotationsSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodInfo_V2_PatchAnnotationsSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiSearchResponse,
  /** @param {!proto.clarifai.api.PatchAnnotationsSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostAnnotationsSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostAnnotationsSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodInfo_V2_PostAnnotationsSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiSearchResponse,
  /** @param {!proto.clarifai.api.PostAnnotationsSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetInputCountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleInputCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetInputCountRequest,
 *   !proto.clarifai.api.SingleInputCountResponse>}
 */
const methodInfo_V2_GetInputCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleInputCountResponse,
  /** @param {!proto.clarifai.api.GetInputCountRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleInputCountResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleInputCountResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.StreamInputsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.StreamInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodInfo_V2_StreamInputs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiInputResponse,
  /** @param {!proto.clarifai.api.StreamInputsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiInputResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetInputSamplesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputAnnotationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetInputSamplesRequest,
 *   !proto.clarifai.api.MultiInputAnnotationResponse>}
 */
const methodInfo_V2_GetInputSamples = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiInputAnnotationResponse,
  /** @param {!proto.clarifai.api.GetInputSamplesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiInputAnnotationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputAnnotationResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetInputRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetInputRequest,
 *   !proto.clarifai.api.SingleInputResponse>}
 */
const methodInfo_V2_GetInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleInputResponse,
  /** @param {!proto.clarifai.api.GetInputRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleInputResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleInputResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListInputsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodInfo_V2_ListInputs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiInputResponse,
  /** @param {!proto.clarifai.api.ListInputsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiInputResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostInputsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodInfo_V2_PostInputs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiInputResponse,
  /** @param {!proto.clarifai.api.PostInputsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiInputResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PatchInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodDescriptor_V2_PatchInputs = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchInputs',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchInputsRequest,
  proto.clarifai.api.MultiInputResponse,
  /** @param {!proto.clarifai.api.PatchInputsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodInfo_V2_PatchInputs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiInputResponse,
  /** @param {!proto.clarifai.api.PatchInputsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiInputResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteInputRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteInputRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteInput = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteInputRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteInputsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteInputsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteInputs = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteInputsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchInputsSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchInputsSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodInfo_V2_PatchInputsSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiSearchResponse,
  /** @param {!proto.clarifai.api.PatchInputsSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostInputsSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostInputsSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodInfo_V2_PostInputsSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiSearchResponse,
  /** @param {!proto.clarifai.api.PostInputsSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostModelOutputsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiOutputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostModelOutputsRequest,
 *   !proto.clarifai.api.MultiOutputResponse>}
 */
const methodInfo_V2_PostModelOutputs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiOutputResponse,
  /** @param {!proto.clarifai.api.PostModelOutputsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiOutputResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiOutputResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.GetModelTypeRequest,
 *   !proto.clarifai.api.SingleModelTypeResponse>}
 */
const methodDescriptor_V2_GetModelType = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModelType',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModelTypeRequest,
  proto.clarifai.api.SingleModelTypeResponse,
  /** @param {!proto.clarifai.api.GetModelTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetModelTypeRequest,
 *   !proto.clarifai.api.SingleModelTypeResponse>}
 */
const methodInfo_V2_GetModelType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelTypeResponse,
  /** @param {!proto.clarifai.api.GetModelTypeRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelTypeResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelTypeResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListOpenSourceLicensesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.ListOpenSourceLicensesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListOpenSourceLicensesRequest,
 *   !proto.clarifai.api.ListOpenSourceLicensesResponse>}
 */
const methodInfo_V2_ListOpenSourceLicenses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.ListOpenSourceLicensesResponse,
  /** @param {!proto.clarifai.api.ListOpenSourceLicensesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.ListOpenSourceLicensesResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.ListOpenSourceLicensesResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListModelTypesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListModelTypesRequest,
 *   !proto.clarifai.api.MultiModelTypeResponse>}
 */
const methodInfo_V2_ListModelTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelTypeResponse,
  /** @param {!proto.clarifai.api.ListModelTypesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelTypeResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelTypeResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetModelRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetModelRequest,
 *   !proto.clarifai.api.SingleModelResponse>}
 */
const methodInfo_V2_GetModel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelResponse,
  /** @param {!proto.clarifai.api.GetModelRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetModelRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetModelRequest,
 *   !proto.clarifai.api.SingleModelResponse>}
 */
const methodInfo_V2_GetModelOutputInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelResponse,
  /** @param {!proto.clarifai.api.GetModelRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListModelsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListModelsRequest,
 *   !proto.clarifai.api.MultiModelResponse>}
 */
const methodInfo_V2_ListModels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelResponse,
  /** @param {!proto.clarifai.api.ListModelsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostModelsSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostModelsSearchesRequest,
 *   !proto.clarifai.api.MultiModelResponse>}
 */
const methodInfo_V2_PostModelsSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelResponse,
  /** @param {!proto.clarifai.api.PostModelsSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostModelsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostModelsRequest,
 *   !proto.clarifai.api.SingleModelResponse>}
 */
const methodInfo_V2_PostModels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelResponse,
  /** @param {!proto.clarifai.api.PostModelsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchModelsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchModelsRequest,
 *   !proto.clarifai.api.MultiModelResponse>}
 */
const methodInfo_V2_PatchModels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelResponse,
  /** @param {!proto.clarifai.api.PatchModelsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchModelIdsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchModelIdsRequest,
 *   !proto.clarifai.api.MultiModelResponse>}
 */
const methodInfo_V2_PatchModelIds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelResponse,
  /** @param {!proto.clarifai.api.PatchModelIdsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteModelRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteModelRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteModel = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteModelRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteModelsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteModelsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteModels = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteModelsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PatchModelToolkitsRequest,
 *   !proto.clarifai.api.MultiModelToolkitResponse>}
 */
const methodDescriptor_V2_PatchModelToolkits = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PatchModelToolkits',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PatchModelToolkitsRequest,
  proto.clarifai.api.MultiModelToolkitResponse,
  /** @param {!proto.clarifai.api.PatchModelToolkitsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelToolkitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchModelToolkitsRequest,
 *   !proto.clarifai.api.MultiModelToolkitResponse>}
 */
const methodInfo_V2_PatchModelToolkits = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelToolkitResponse,
  /** @param {!proto.clarifai.api.PatchModelToolkitsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelToolkitResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelToolkitResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchModelUseCasesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelUseCaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchModelUseCasesRequest,
 *   !proto.clarifai.api.MultiModelUseCaseResponse>}
 */
const methodInfo_V2_PatchModelUseCases = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelUseCaseResponse,
  /** @param {!proto.clarifai.api.PatchModelUseCasesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelUseCaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelUseCaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchModelLanguagesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelLanguageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchModelLanguagesRequest,
 *   !proto.clarifai.api.MultiModelLanguageResponse>}
 */
const methodInfo_V2_PatchModelLanguages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelLanguageResponse,
  /** @param {!proto.clarifai.api.PatchModelLanguagesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelLanguageResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelLanguageResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListModelInputsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiInputResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListModelInputsRequest,
 *   !proto.clarifai.api.MultiInputResponse>}
 */
const methodInfo_V2_ListModelInputs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiInputResponse,
  /** @param {!proto.clarifai.api.ListModelInputsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiInputResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiInputResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetModelVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetModelVersionRequest,
 *   !proto.clarifai.api.SingleModelVersionResponse>}
 */
const methodInfo_V2_GetModelVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelVersionResponse,
  /** @param {!proto.clarifai.api.GetModelVersionRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelVersionResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelVersionResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListModelVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListModelVersionsRequest,
 *   !proto.clarifai.api.MultiModelVersionResponse>}
 */
const methodInfo_V2_ListModelVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelVersionResponse,
  /** @param {!proto.clarifai.api.ListModelVersionsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelVersionResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelVersionResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PostModelVersionsPublishRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostModelVersionsPublish = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostModelVersionsPublish',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostModelVersionsPublishRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.PostModelVersionsPublishRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostModelVersionsPublishRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_PostModelVersionsPublish = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.PostModelVersionsPublishRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostModelVersionsUnPublishRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostModelVersionsUnPublishRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_PostModelVersionsUnPublish = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.PostModelVersionsUnPublishRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostModelVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostModelVersionsRequest,
 *   !proto.clarifai.api.SingleModelResponse>}
 */
const methodInfo_V2_PostModelVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelResponse,
  /** @param {!proto.clarifai.api.PostModelVersionsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchModelVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchModelVersionsRequest,
 *   !proto.clarifai.api.MultiModelVersionResponse>}
 */
const methodInfo_V2_PatchModelVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelVersionResponse,
  /** @param {!proto.clarifai.api.PatchModelVersionsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelVersionResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelVersionResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteModelVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteModelVersionRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteModelVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteModelVersionRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetModelVersionMetricsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetModelVersionMetricsRequest,
 *   !proto.clarifai.api.SingleModelVersionResponse>}
 */
const methodInfo_V2_GetModelVersionMetrics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelVersionResponse,
  /** @param {!proto.clarifai.api.GetModelVersionMetricsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelVersionResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelVersionResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostModelVersionMetricsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostModelVersionMetricsRequest,
 *   !proto.clarifai.api.SingleModelVersionResponse>}
 */
const methodInfo_V2_PostModelVersionMetrics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelVersionResponse,
  /** @param {!proto.clarifai.api.PostModelVersionMetricsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelVersionResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelVersionResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListModelReferencesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelReferenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListModelReferencesRequest,
 *   !proto.clarifai.api.MultiModelReferenceResponse>}
 */
const methodInfo_V2_ListModelReferences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelReferenceResponse,
  /** @param {!proto.clarifai.api.ListModelReferencesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelReferenceResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelReferenceResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.GetModelVersionInputExampleRequest,
 *   !proto.clarifai.api.SingleModelVersionInputExampleResponse>}
 */
const methodDescriptor_V2_GetModelVersionInputExample = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetModelVersionInputExample',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetModelVersionInputExampleRequest,
  proto.clarifai.api.SingleModelVersionInputExampleResponse,
  /** @param {!proto.clarifai.api.GetModelVersionInputExampleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleModelVersionInputExampleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetModelVersionInputExampleRequest,
 *   !proto.clarifai.api.SingleModelVersionInputExampleResponse>}
 */
const methodInfo_V2_GetModelVersionInputExample = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleModelVersionInputExampleResponse,
  /** @param {!proto.clarifai.api.GetModelVersionInputExampleRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleModelVersionInputExampleResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleModelVersionInputExampleResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListModelVersionInputExamplesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiModelVersionInputExampleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListModelVersionInputExamplesRequest,
 *   !proto.clarifai.api.MultiModelVersionInputExampleResponse>}
 */
const methodInfo_V2_ListModelVersionInputExamples = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiModelVersionInputExampleResponse,
  /** @param {!proto.clarifai.api.ListModelVersionInputExamplesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiModelVersionInputExampleResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiModelVersionInputExampleResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.GetWorkflowRequest,
 *   !proto.clarifai.api.SingleWorkflowResponse>}
 */
const methodDescriptor_V2_GetWorkflow = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetWorkflow',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetWorkflowRequest,
  proto.clarifai.api.SingleWorkflowResponse,
  /** @param {!proto.clarifai.api.GetWorkflowRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleWorkflowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetWorkflowRequest,
 *   !proto.clarifai.api.SingleWorkflowResponse>}
 */
const methodInfo_V2_GetWorkflow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleWorkflowResponse,
  /** @param {!proto.clarifai.api.GetWorkflowRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleWorkflowResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleWorkflowResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListWorkflowsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListWorkflowsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodInfo_V2_ListWorkflows = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiWorkflowResponse,
  /** @param {!proto.clarifai.api.ListWorkflowsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiWorkflowResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PostWorkflowsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodDescriptor_V2_PostWorkflows = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostWorkflows',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostWorkflowsRequest,
  proto.clarifai.api.MultiWorkflowResponse,
  /** @param {!proto.clarifai.api.PostWorkflowsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostWorkflowsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodInfo_V2_PostWorkflows = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiWorkflowResponse,
  /** @param {!proto.clarifai.api.PostWorkflowsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiWorkflowResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchWorkflowsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchWorkflowsRequest,
 *   !proto.clarifai.api.MultiWorkflowResponse>}
 */
const methodInfo_V2_PatchWorkflows = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiWorkflowResponse,
  /** @param {!proto.clarifai.api.PatchWorkflowsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiWorkflowResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.DeleteWorkflowRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_DeleteWorkflow = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/DeleteWorkflow',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.DeleteWorkflowRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteWorkflowRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteWorkflowRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteWorkflow = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteWorkflowRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteWorkflowsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteWorkflowsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteWorkflows = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteWorkflowsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostWorkflowResultsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostWorkflowResultsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostWorkflowResultsRequest,
 *   !proto.clarifai.api.PostWorkflowResultsResponse>}
 */
const methodInfo_V2_PostWorkflowResults = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.PostWorkflowResultsResponse,
  /** @param {!proto.clarifai.api.PostWorkflowResultsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.PostWorkflowResultsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostWorkflowResultsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostWorkflowResultsSimilarityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.PostWorkflowResultsSimilarityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostWorkflowResultsSimilarityRequest,
 *   !proto.clarifai.api.PostWorkflowResultsSimilarityResponse>}
 */
const methodInfo_V2_PostWorkflowResultsSimilarity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.PostWorkflowResultsSimilarityResponse,
  /** @param {!proto.clarifai.api.PostWorkflowResultsSimilarityRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.PostWorkflowResultsSimilarityResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.PostWorkflowResultsSimilarityResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListWorkflowVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListWorkflowVersionsRequest,
 *   !proto.clarifai.api.MultiWorkflowVersionResponse>}
 */
const methodInfo_V2_ListWorkflowVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiWorkflowVersionResponse,
  /** @param {!proto.clarifai.api.ListWorkflowVersionsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiWorkflowVersionResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowVersionResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetWorkflowVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleWorkflowVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetWorkflowVersionRequest,
 *   !proto.clarifai.api.SingleWorkflowVersionResponse>}
 */
const methodInfo_V2_GetWorkflowVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleWorkflowVersionResponse,
  /** @param {!proto.clarifai.api.GetWorkflowVersionRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleWorkflowVersionResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleWorkflowVersionResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteWorkflowVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteWorkflowVersionsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteWorkflowVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteWorkflowVersionsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchWorkflowVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiWorkflowVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchWorkflowVersionsRequest,
 *   !proto.clarifai.api.MultiWorkflowVersionResponse>}
 */
const methodInfo_V2_PatchWorkflowVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiWorkflowVersionResponse,
  /** @param {!proto.clarifai.api.PatchWorkflowVersionsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiWorkflowVersionResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiWorkflowVersionResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.GetKeyRequest,
 *   !proto.clarifai.api.SingleKeyResponse>}
 */
const methodDescriptor_V2_GetKey = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetKey',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetKeyRequest,
  proto.clarifai.api.SingleKeyResponse,
  /** @param {!proto.clarifai.api.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetKeyRequest,
 *   !proto.clarifai.api.SingleKeyResponse>}
 */
const methodInfo_V2_GetKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleKeyResponse,
  /** @param {!proto.clarifai.api.GetKeyRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleKeyResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleKeyResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListKeysRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListKeysRequest,
 *   !proto.clarifai.api.MultiKeyResponse>}
 */
const methodInfo_V2_ListKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiKeyResponse,
  /** @param {!proto.clarifai.api.ListKeysRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiKeyResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKeyResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListAppKeysRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListAppKeysRequest,
 *   !proto.clarifai.api.MultiKeyResponse>}
 */
const methodInfo_V2_ListAppKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiKeyResponse,
  /** @param {!proto.clarifai.api.ListAppKeysRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiKeyResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKeyResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteKeyRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteKeyRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostKeysRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostKeysRequest,
 *   !proto.clarifai.api.MultiKeyResponse>}
 */
const methodInfo_V2_PostKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiKeyResponse,
  /** @param {!proto.clarifai.api.PostKeysRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiKeyResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKeyResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchKeysRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchKeysRequest,
 *   !proto.clarifai.api.MultiKeyResponse>}
 */
const methodInfo_V2_PatchKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiKeyResponse,
  /** @param {!proto.clarifai.api.PatchKeysRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiKeyResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiKeyResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.MyScopesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiScopeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.MyScopesRequest,
 *   !proto.clarifai.api.MultiScopeResponse>}
 */
const methodInfo_V2_MyScopes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiScopeResponse,
  /** @param {!proto.clarifai.api.MyScopesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiScopeResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiScopeResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.MyScopesUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiScopeUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.MyScopesUserRequest,
 *   !proto.clarifai.api.MultiScopeUserResponse>}
 */
const methodInfo_V2_MyScopesUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiScopeUserResponse,
  /** @param {!proto.clarifai.api.MyScopesUserRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiScopeUserResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiScopeUserResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.MyScopesRootRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiScopeRootResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.MyScopesRootRequest,
 *   !proto.clarifai.api.MultiScopeRootResponse>}
 */
const methodInfo_V2_MyScopesRoot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiScopeRootResponse,
  /** @param {!proto.clarifai.api.MyScopesRootRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiScopeRootResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiScopeRootResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListScopesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiScopeDepsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListScopesRequest,
 *   !proto.clarifai.api.MultiScopeDepsResponse>}
 */
const methodInfo_V2_ListScopes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiScopeDepsResponse,
  /** @param {!proto.clarifai.api.ListScopesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiScopeDepsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiScopeDepsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetAppRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleAppResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetAppRequest,
 *   !proto.clarifai.api.SingleAppResponse>}
 */
const methodInfo_V2_GetApp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleAppResponse,
  /** @param {!proto.clarifai.api.GetAppRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleAppResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleAppResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListAppsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListAppsRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodInfo_V2_ListApps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAppResponse,
  /** @param {!proto.clarifai.api.ListAppsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAppResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteAppRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteAppRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteApp = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteAppRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostAppsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostAppsRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodInfo_V2_PostApps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAppResponse,
  /** @param {!proto.clarifai.api.PostAppsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAppResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchAppsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchAppsRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodInfo_V2_PatchApps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAppResponse,
  /** @param {!proto.clarifai.api.PatchAppsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAppResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PostAppsSearchesRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodDescriptor_V2_PostAppsSearches = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAppsSearches',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAppsSearchesRequest,
  proto.clarifai.api.MultiAppResponse,
  /** @param {!proto.clarifai.api.PostAppsSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostAppsSearchesRequest,
 *   !proto.clarifai.api.MultiAppResponse>}
 */
const methodInfo_V2_PostAppsSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAppResponse,
  /** @param {!proto.clarifai.api.PostAppsSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAppResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PostValidatePasswordRequest,
 *   !proto.clarifai.api.SinglePasswordValidationResponse>}
 */
const methodDescriptor_V2_PostValidatePassword = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostValidatePassword',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostValidatePasswordRequest,
  proto.clarifai.api.SinglePasswordValidationResponse,
  /** @param {!proto.clarifai.api.PostValidatePasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SinglePasswordValidationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostValidatePasswordRequest,
 *   !proto.clarifai.api.SinglePasswordValidationResponse>}
 */
const methodInfo_V2_PostValidatePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SinglePasswordValidationResponse,
  /** @param {!proto.clarifai.api.PostValidatePasswordRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SinglePasswordValidationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SinglePasswordValidationResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.GetSearchRequest,
 *   !proto.clarifai.api.SingleSearchResponse>}
 */
const methodDescriptor_V2_GetSearch = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/GetSearch',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.GetSearchRequest,
  proto.clarifai.api.SingleSearchResponse,
  /** @param {!proto.clarifai.api.GetSearchRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetSearchRequest,
 *   !proto.clarifai.api.SingleSearchResponse>}
 */
const methodInfo_V2_GetSearch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleSearchResponse,
  /** @param {!proto.clarifai.api.GetSearchRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodInfo_V2_ListSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiSearchResponse,
  /** @param {!proto.clarifai.api.ListSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodInfo_V2_PatchSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiSearchResponse,
  /** @param {!proto.clarifai.api.PatchSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostSearchesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostSearchesRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodInfo_V2_PostSearches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiSearchResponse,
  /** @param {!proto.clarifai.api.PostSearchesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostSearchesByIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiSearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostSearchesByIDRequest,
 *   !proto.clarifai.api.MultiSearchResponse>}
 */
const methodInfo_V2_PostSearchesByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiSearchResponse,
  /** @param {!proto.clarifai.api.PostSearchesByIDRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiSearchResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiSearchResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostAnnotationSearchMetricsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostAnnotationSearchMetricsRequest,
 *   !proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 */
const methodInfo_V2_PostAnnotationSearchMetrics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse,
  /** @param {!proto.clarifai.api.PostAnnotationSearchMetricsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAnnotationSearchMetricsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetAnnotationSearchMetricsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetAnnotationSearchMetricsRequest,
 *   !proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 */
const methodInfo_V2_GetAnnotationSearchMetrics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse,
  /** @param {!proto.clarifai.api.GetAnnotationSearchMetricsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAnnotationSearchMetricsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListAnnotationSearchMetricsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListAnnotationSearchMetricsRequest,
 *   !proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 */
const methodInfo_V2_ListAnnotationSearchMetrics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAnnotationSearchMetricsResponse,
  /** @param {!proto.clarifai.api.ListAnnotationSearchMetricsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAnnotationSearchMetricsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAnnotationSearchMetricsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteAnnotationSearchMetricsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteAnnotationSearchMetricsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteAnnotationSearchMetrics = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteAnnotationSearchMetricsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteSearchRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteSearchRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteSearch = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteSearchRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.ListStatusCodesRequest,
 *   !proto.clarifai.api.MultiStatusCodeResponse>}
 */
const methodDescriptor_V2_ListStatusCodes = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListStatusCodes',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListStatusCodesRequest,
  proto.clarifai.api.MultiStatusCodeResponse,
  /** @param {!proto.clarifai.api.ListStatusCodesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiStatusCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListStatusCodesRequest,
 *   !proto.clarifai.api.MultiStatusCodeResponse>}
 */
const methodInfo_V2_ListStatusCodes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiStatusCodeResponse,
  /** @param {!proto.clarifai.api.ListStatusCodesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiStatusCodeResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiStatusCodeResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetStatusCodeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleStatusCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetStatusCodeRequest,
 *   !proto.clarifai.api.SingleStatusCodeResponse>}
 */
const methodInfo_V2_GetStatusCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleStatusCodeResponse,
  /** @param {!proto.clarifai.api.GetStatusCodeRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleStatusCodeResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleStatusCodeResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.ListCollaboratorsRequest,
 *   !proto.clarifai.api.MultiCollaboratorsResponse>}
 */
const methodDescriptor_V2_ListCollaborators = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/ListCollaborators',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.ListCollaboratorsRequest,
  proto.clarifai.api.MultiCollaboratorsResponse,
  /** @param {!proto.clarifai.api.ListCollaboratorsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollaboratorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListCollaboratorsRequest,
 *   !proto.clarifai.api.MultiCollaboratorsResponse>}
 */
const methodInfo_V2_ListCollaborators = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiCollaboratorsResponse,
  /** @param {!proto.clarifai.api.ListCollaboratorsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiCollaboratorsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollaboratorsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostCollaboratorsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollaboratorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostCollaboratorsRequest,
 *   !proto.clarifai.api.MultiCollaboratorsResponse>}
 */
const methodInfo_V2_PostCollaborators = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiCollaboratorsResponse,
  /** @param {!proto.clarifai.api.PostCollaboratorsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiCollaboratorsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollaboratorsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchCollaboratorsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollaboratorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchCollaboratorsRequest,
 *   !proto.clarifai.api.MultiCollaboratorsResponse>}
 */
const methodInfo_V2_PatchCollaborators = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiCollaboratorsResponse,
  /** @param {!proto.clarifai.api.PatchCollaboratorsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiCollaboratorsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollaboratorsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteCollaboratorsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteCollaboratorsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteCollaborators = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteCollaboratorsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListCollaborationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollaborationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListCollaborationsRequest,
 *   !proto.clarifai.api.MultiCollaborationsResponse>}
 */
const methodInfo_V2_ListCollaborations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiCollaborationsResponse,
  /** @param {!proto.clarifai.api.ListCollaborationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiCollaborationsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollaborationsResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PostAppDuplicationsRequest,
 *   !proto.clarifai.api.MultiAppDuplicationsResponse>}
 */
const methodDescriptor_V2_PostAppDuplications = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostAppDuplications',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostAppDuplicationsRequest,
  proto.clarifai.api.MultiAppDuplicationsResponse,
  /** @param {!proto.clarifai.api.PostAppDuplicationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppDuplicationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostAppDuplicationsRequest,
 *   !proto.clarifai.api.MultiAppDuplicationsResponse>}
 */
const methodInfo_V2_PostAppDuplications = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAppDuplicationsResponse,
  /** @param {!proto.clarifai.api.PostAppDuplicationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAppDuplicationsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppDuplicationsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListAppDuplicationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiAppDuplicationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListAppDuplicationsRequest,
 *   !proto.clarifai.api.MultiAppDuplicationsResponse>}
 */
const methodInfo_V2_ListAppDuplications = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiAppDuplicationsResponse,
  /** @param {!proto.clarifai.api.ListAppDuplicationsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiAppDuplicationsResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiAppDuplicationsResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetAppDuplicationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleAppDuplicationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetAppDuplicationRequest,
 *   !proto.clarifai.api.SingleAppDuplicationResponse>}
 */
const methodInfo_V2_GetAppDuplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleAppDuplicationResponse,
  /** @param {!proto.clarifai.api.GetAppDuplicationRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleAppDuplicationResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleAppDuplicationResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostTasksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTaskResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostTasksRequest,
 *   !proto.clarifai.api.MultiTaskResponse>}
 */
const methodInfo_V2_PostTasks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiTaskResponse,
  /** @param {!proto.clarifai.api.PostTasksRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiTaskResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTaskResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetTaskCountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleTaskCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetTaskCountRequest,
 *   !proto.clarifai.api.SingleTaskCountResponse>}
 */
const methodInfo_V2_GetTaskAnnotationCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleTaskCountResponse,
  /** @param {!proto.clarifai.api.GetTaskCountRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleTaskCountResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleTaskCountResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetTaskCountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleTaskCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetTaskCountRequest,
 *   !proto.clarifai.api.SingleTaskCountResponse>}
 */
const methodInfo_V2_GetTaskInputCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleTaskCountResponse,
  /** @param {!proto.clarifai.api.GetTaskCountRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleTaskCountResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleTaskCountResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetTaskRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleTaskResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetTaskRequest,
 *   !proto.clarifai.api.SingleTaskResponse>}
 */
const methodInfo_V2_GetTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleTaskResponse,
  /** @param {!proto.clarifai.api.GetTaskRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleTaskResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleTaskResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListTasksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTaskResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListTasksRequest,
 *   !proto.clarifai.api.MultiTaskResponse>}
 */
const methodInfo_V2_ListTasks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiTaskResponse,
  /** @param {!proto.clarifai.api.ListTasksRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiTaskResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTaskResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchTasksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTaskResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchTasksRequest,
 *   !proto.clarifai.api.MultiTaskResponse>}
 */
const methodInfo_V2_PatchTasks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiTaskResponse,
  /** @param {!proto.clarifai.api.PatchTasksRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiTaskResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTaskResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteTasksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteTasksRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteTasks = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteTasksRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PostLabelOrdersRequest,
 *   !proto.clarifai.api.MultiLabelOrderResponse>}
 */
const methodDescriptor_V2_PostLabelOrders = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostLabelOrders',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostLabelOrdersRequest,
  proto.clarifai.api.MultiLabelOrderResponse,
  /** @param {!proto.clarifai.api.PostLabelOrdersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiLabelOrderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostLabelOrdersRequest,
 *   !proto.clarifai.api.MultiLabelOrderResponse>}
 */
const methodInfo_V2_PostLabelOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiLabelOrderResponse,
  /** @param {!proto.clarifai.api.PostLabelOrdersRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiLabelOrderResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiLabelOrderResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetLabelOrderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleLabelOrderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetLabelOrderRequest,
 *   !proto.clarifai.api.SingleLabelOrderResponse>}
 */
const methodInfo_V2_GetLabelOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleLabelOrderResponse,
  /** @param {!proto.clarifai.api.GetLabelOrderRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleLabelOrderResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleLabelOrderResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListLabelOrdersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiLabelOrderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListLabelOrdersRequest,
 *   !proto.clarifai.api.MultiLabelOrderResponse>}
 */
const methodInfo_V2_ListLabelOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiLabelOrderResponse,
  /** @param {!proto.clarifai.api.ListLabelOrdersRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiLabelOrderResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiLabelOrderResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchLabelOrdersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiLabelOrderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchLabelOrdersRequest,
 *   !proto.clarifai.api.MultiLabelOrderResponse>}
 */
const methodInfo_V2_PatchLabelOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiLabelOrderResponse,
  /** @param {!proto.clarifai.api.PatchLabelOrdersRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiLabelOrderResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiLabelOrderResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteLabelOrdersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteLabelOrdersRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteLabelOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteLabelOrdersRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostCollectorsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollectorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostCollectorsRequest,
 *   !proto.clarifai.api.MultiCollectorResponse>}
 */
const methodInfo_V2_PostCollectors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiCollectorResponse,
  /** @param {!proto.clarifai.api.PostCollectorsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiCollectorResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollectorResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.GetCollectorRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.SingleCollectorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.GetCollectorRequest,
 *   !proto.clarifai.api.SingleCollectorResponse>}
 */
const methodInfo_V2_GetCollector = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.SingleCollectorResponse,
  /** @param {!proto.clarifai.api.GetCollectorRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.SingleCollectorResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.SingleCollectorResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListCollectorsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollectorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListCollectorsRequest,
 *   !proto.clarifai.api.MultiCollectorResponse>}
 */
const methodInfo_V2_ListCollectors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiCollectorResponse,
  /** @param {!proto.clarifai.api.ListCollectorsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiCollectorResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollectorResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PatchCollectorsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiCollectorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PatchCollectorsRequest,
 *   !proto.clarifai.api.MultiCollectorResponse>}
 */
const methodInfo_V2_PatchCollectors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiCollectorResponse,
  /** @param {!proto.clarifai.api.PatchCollectorsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiCollectorResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiCollectorResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.DeleteCollectorsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.DeleteCollectorsRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_DeleteCollectors = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.DeleteCollectorsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostStatValuesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiStatValueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostStatValuesRequest,
 *   !proto.clarifai.api.MultiStatValueResponse>}
 */
const methodInfo_V2_PostStatValues = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiStatValueResponse,
  /** @param {!proto.clarifai.api.PostStatValuesRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiStatValueResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiStatValueResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.PostStatValuesAggregateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiStatValueAggregateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostStatValuesAggregateRequest,
 *   !proto.clarifai.api.MultiStatValueAggregateResponse>}
 */
const methodInfo_V2_PostStatValuesAggregate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiStatValueAggregateResponse,
  /** @param {!proto.clarifai.api.PostStatValuesAggregateRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiStatValueAggregateResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiStatValueAggregateResponse>}
 *     A native promise that resolves to the response
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
 *   !proto.clarifai.api.PostTrendingMetricsViewRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodDescriptor_V2_PostTrendingMetricsView = new grpc.web.MethodDescriptor(
  '/clarifai.api.V2/PostTrendingMetricsView',
  grpc.web.MethodType.UNARY,
  proto.clarifai.api.PostTrendingMetricsViewRequest,
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.PostTrendingMetricsViewRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.PostTrendingMetricsViewRequest,
 *   !proto.clarifai.api.status.BaseResponse>}
 */
const methodInfo_V2_PostTrendingMetricsView = new grpc.web.AbstractClientBase.MethodInfo(
  proto_clarifai_api_status_status_pb.BaseResponse,
  /** @param {!proto.clarifai.api.PostTrendingMetricsViewRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.status.BaseResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.status.BaseResponse>}
 *     A native promise that resolves to the response
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
  /** @param {!proto.clarifai.api.ListTrendingMetricsViewsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.clarifai.api.MultiTrendingMetricsViewResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.clarifai.api.ListTrendingMetricsViewsRequest,
 *   !proto.clarifai.api.MultiTrendingMetricsViewResponse>}
 */
const methodInfo_V2_ListTrendingMetricsViews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.clarifai.api.MultiTrendingMetricsViewResponse,
  /** @param {!proto.clarifai.api.ListTrendingMetricsViewsRequest} request */
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
 * @param {function(?grpc.web.Error, ?proto.clarifai.api.MultiTrendingMetricsViewResponse)}
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
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.clarifai.api.MultiTrendingMetricsViewResponse>}
 *     A native promise that resolves to the response
 */
proto.clarifai.api.V2PromiseClient.prototype.listTrendingMetricsViews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/clarifai.api.V2/ListTrendingMetricsViews',
      request,
      metadata || {},
      methodDescriptor_V2_ListTrendingMetricsViews);
};


module.exports = proto.clarifai.api;

