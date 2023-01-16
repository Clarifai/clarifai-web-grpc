// source: proto/clarifai/auth/scope/scope.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.clarifai.auth.scope.S', null, global);
goog.exportSymbol('proto.clarifai.auth.scope.ScopeList', null, global);
goog.exportSymbol('proto.clarifai.auth.scope.clarfaiExposed', null, global);
goog.exportSymbol('proto.clarifai.auth.scope.clarifaiDependingScopesList', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.clarifai.auth.scope.ScopeList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.auth.scope.ScopeList.repeatedFields_, null);
};
goog.inherits(proto.clarifai.auth.scope.ScopeList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.auth.scope.ScopeList.displayName = 'proto.clarifai.auth.scope.ScopeList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.auth.scope.ScopeList.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.clarifai.auth.scope.ScopeList.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.auth.scope.ScopeList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.auth.scope.ScopeList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.auth.scope.ScopeList.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    endpointsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.clarifai.auth.scope.ScopeList}
 */
proto.clarifai.auth.scope.ScopeList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.auth.scope.ScopeList;
  return proto.clarifai.auth.scope.ScopeList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.auth.scope.ScopeList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.auth.scope.ScopeList}
 */
proto.clarifai.auth.scope.ScopeList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.clarifai.auth.scope.S>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addScopes(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addEndpoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.clarifai.auth.scope.ScopeList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.auth.scope.ScopeList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.auth.scope.ScopeList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.auth.scope.ScopeList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated S scopes = 1;
 * @return {!Array<!proto.clarifai.auth.scope.S>}
 */
proto.clarifai.auth.scope.ScopeList.prototype.getScopesList = function() {
  return /** @type {!Array<!proto.clarifai.auth.scope.S>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.clarifai.auth.scope.S>} value
 * @return {!proto.clarifai.auth.scope.ScopeList} returns this
 */
proto.clarifai.auth.scope.ScopeList.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.clarifai.auth.scope.S} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.auth.scope.ScopeList} returns this
 */
proto.clarifai.auth.scope.ScopeList.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.auth.scope.ScopeList} returns this
 */
proto.clarifai.auth.scope.ScopeList.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * repeated string endpoints = 2;
 * @return {!Array<string>}
 */
proto.clarifai.auth.scope.ScopeList.prototype.getEndpointsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.auth.scope.ScopeList} returns this
 */
proto.clarifai.auth.scope.ScopeList.prototype.setEndpointsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.auth.scope.ScopeList} returns this
 */
proto.clarifai.auth.scope.ScopeList.prototype.addEndpoints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.auth.scope.ScopeList} returns this
 */
proto.clarifai.auth.scope.ScopeList.prototype.clearEndpointsList = function() {
  return this.setEndpointsList([]);
};


/**
 * @enum {number}
 */
proto.clarifai.auth.scope.S = {
  UNDEF: 0,
  ALL: 1,
  PREDICT: 2,
  INPUTS_ADD: 4,
  INPUTS_GET: 5,
  INPUTS_PATCH: 7,
  INPUTS_DELETE: 8,
  OUTPUTS_PATCH: 9,
  CONCEPTS_ADD: 10,
  CONCEPTS_GET: 11,
  CONCEPTS_PATCH: 12,
  CONCEPTS_DELETE: 13,
  MODELS_ADD: 14,
  MODELS_GET: 15,
  MODELS_PATCH: 16,
  MODELS_DELETE: 17,
  MODELS_TRAIN: 26,
  MODELS_SYNC: 27,
  WORKFLOWS_ADD: 18,
  WORKFLOWS_GET: 19,
  WORKFLOWS_PATCH: 20,
  WORKFLOWS_DELETE: 21,
  WORKFLOWMETRICS_GET: 96,
  WORKFLOWMETRICS_ADD: 97,
  WORKFLOWMETRICS_DELETE: 98,
  TSNEVISUALIZATIONS_ADD: 24,
  TSNEVISUALIZATIONS_GET: 25,
  ANNOTATIONS_ADD: 37,
  ANNOTATIONS_GET: 38,
  ANNOTATIONS_PATCH: 39,
  ANNOTATIONS_DELETE: 40,
  COLLECTORS_ADD: 41,
  COLLECTORS_GET: 42,
  COLLECTORS_DELETE: 43,
  APPS_ADD: 44,
  APPS_GET: 45,
  APPS_DELETE: 46,
  KEYS_ADD: 47,
  KEYS_GET: 48,
  KEYS_DELETE: 49,
  COLLABORATORS_ADD: 51,
  COLLABORATORS_GET: 50,
  COLLABORATORS_DELETE: 52,
  METRICS_ADD: 54,
  METRICS_GET: 53,
  METRICS_DELETE: 63,
  TASKS_ADD: 55,
  TASKS_GET: 56,
  TASKS_DELETE: 70,
  PASSWORDPOLICIES_ADD: 57,
  PASSWORDPOLICIES_GET: 58,
  PASSWORDPOLICIES_DELETE: 59,
  LABELORDERS_GET: 67,
  LABELORDERS_ADD: 68,
  LABELORDERS_DELETE: 69,
  USERFEATURECONFIGS_GET: 71,
  FINDDUPLICATEANNOTATIONSJOBS_ADD: 102,
  FINDDUPLICATEANNOTATIONSJOBS_GET: 103,
  FINDDUPLICATEANNOTATIONSJOBS_DELETE: 104,
  DATASETS_GET: 105,
  DATASETS_ADD: 106,
  DATASETS_DELETE: 107,
  MODULES_ADD: 108,
  MODULES_GET: 109,
  MODULES_DELETE: 110,
  INSTALLEDMODULEVERSIONS_ADD: 111,
  INSTALLEDMODULEVERSIONS_GET: 112,
  INSTALLEDMODULEVERSIONS_DELETE: 113,
  SEARCH: 3,
  SAVEDSEARCH_GET: 114,
  SAVEDSEARCH_ADD: 115,
  SAVEDSEARCH_DELETE: 116,
  MODELVERSIONPUBLICATIONS_ADD: 117,
  MODELVERSIONPUBLICATIONS_DELETE: 118,
  WORKFLOWPUBLICATIONS_ADD: 119,
  WORKFLOWPUBLICATIONS_DELETE: 120,
  BULKOPERATION_ADD: 121,
  BULKOPERATION_GET: 122,
  BULKOPERATION_DELETE: 123,
  HISTORICALUSAGE_GET: 124,
  UPLOADS_GET: 128,
  UPLOADS_ADD: 129,
  UPLOADS_DELETE: 130
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clarfaiExposed`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.clarifai.auth.scope.clarfaiExposed = new jspb.ExtensionFieldInfo(
    80318,
    {clarfaiExposed: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[80318] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.auth.scope.clarfaiExposed,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[80318] = proto.clarifai.auth.scope.clarfaiExposed;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clarifaiDependingScopesList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.clarifai.auth.scope.S>>}
 */
proto.clarifai.auth.scope.clarifaiDependingScopesList = new jspb.ExtensionFieldInfo(
    80319,
    {clarifaiDependingScopesList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[80319] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.auth.scope.clarifaiDependingScopesList,
    jspb.BinaryReader.prototype.readPackedEnum,
    jspb.BinaryWriter.prototype.writePackedEnum,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[80319] = proto.clarifai.auth.scope.clarifaiDependingScopesList;

goog.object.extend(exports, proto.clarifai.auth.scope);
