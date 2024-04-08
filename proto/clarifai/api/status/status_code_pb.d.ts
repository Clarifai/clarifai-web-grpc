import * as jspb from 'google-protobuf'



export enum StatusCode { 
  ZERO = 0,
  SUCCESS = 10000,
  MIXED_STATUS = 10010,
  FAILURE = 10020,
  TRY_AGAIN = 10030,
  NOT_IMPLEMENTED = 10040,
  MOVED = 10050,
  TEAPOT = 10060,
  CONN_ACCOUNT_ISSUES = 11000,
  CONN_TOKEN_INVALID = 11001,
  CONN_CREDENTIALS_INVALID = 11002,
  CONN_EXCEED_HOURLY_LIMIT = 11003,
  CONN_EXCEED_MONTHLY_LIMIT = 11004,
  CONN_THROTTLED = 11005,
  CONN_EXCEEDS_LIMITS = 11006,
  CONN_INSUFFICIENT_SCOPES = 11007,
  CONN_KEY_INVALID = 11008,
  CONN_KEY_NOT_FOUND = 11009,
  CONN_BAD_REQUEST_FORMAT = 11100,
  CONN_DOES_NOT_EXIST = 11101,
  CONN_INVALID_REQUEST = 11102,
  CONN_METHOD_NOT_ALLOWED = 11103,
  CONN_NO_GDPR_CONSENT = 11104,
  CONN_AUTH_METHOD_DISABLED = 11200,
  MODEL_TRAINED = 21100,
  MODEL_TRAINING = 21101,
  MODEL_UNTRAINED = 21102,
  MODEL_QUEUED_FOR_TRAINING = 21103,
  MODEL_UPLOADING = 21104,
  MODEL_UPLOADING_FAILED = 21105,
  MODEL_TRAINING_FAILED = 21106,
  MODEL_TRAINING_NO_DATA = 21110,
  MODEL_TRAINING_NO_POSITIVES = 21111,
  MODEL_TRAINING_ONE_VS_N_SINGLE_CLASS = 21112,
  MODEL_TRAINING_TIMED_OUT = 21113,
  MODEL_TRAINING_WAITING_ERROR = 21114,
  MODEL_TRAINING_UNKNOWN_ERROR = 21115,
  MODEL_TRAINING_MSG_REDELIVER = 21116,
  MODEL_TRAINING_INSUFFICIENT_DATA = 21117,
  MODEL_TRAINING_INVALID_PARAMS = 21118,
  MODEL_TRAINING_INVALID_DATA_TOLERANCE_EXCEEDED = 21119,
  MODEL_MODIFY_SUCCESS = 21150,
  MODEL_MODIFY_PENDING = 21151,
  MODEL_MODIFY_FAILED = 21152,
  MODEL_DOES_NOT_EXIST = 21200,
  MODEL_PERMISSION_DENIED = 21201,
  MODEL_INVALID_ARGUMENT = 21202,
  MODEL_INVALID_REQUEST = 21203,
  MODEL_EVALUATED = 21300,
  MODEL_EVALUATING = 21301,
  MODEL_NOT_EVALUATED = 21302,
  MODEL_QUEUED_FOR_EVALUATION = 21303,
  MODEL_EVALUATION_TIMED_OUT = 21310,
  MODEL_EVALUATION_WAITING_ERROR = 21311,
  MODEL_EVALUATION_UNKNOWN_ERROR = 21312,
  MODEL_PREDICTION_FAILED = 21313,
  MODEL_EVALUATION_MSG_REDELIVER = 21314,
  MODEL_EVALUATION_NEED_LABELS = 21315,
  MODEL_EVALUATION_NEED_INPUTS = 21316,
  MODEL_EVALUATION_FAILED = 21317,
  MODEL_DEPLOYMENT_FAILED = 21350,
  MODEL_DEPLOYING = 21351,
  MODEL_QUEUED_FOR_DEPLOYMENT = 21352,
  MODEL_NOT_DEPLOYED = 21353,
  MODEL_REFERENCE_INVALID_ARGUMENT = 21400,
  MODEL_EXAMPLE_INPUT_INVALID_ARGUMENT = 21420,
  MODEL_EXPORTED = 21500,
  MODEL_EXPORTING = 21501,
  MODEL_EXPORTING_FAILED = 21502,
  MODEL_EXPORT_PENDING = 21503,
  WORKFLOW_NO_MATCHING_INPUT = 22001,
  WORKFLOW_REQUIRE_TRAINED_MODEL = 22002,
  WORKFLOW_DUPLICATE = 22100,
  WORKFLOW_UNSUPPORTED_FORMAT = 22101,
  WORKFLOW_DOES_NOT_EXIST = 22102,
  WORKFLOW_PERMISSION_DENIED = 22103,
  WORKFLOW_INVALID_ARGUMENT = 22104,
  WORKFLOW_INVALID_RECIPE = 22105,
  WORKFLOW_INVALID_TEMPLATE = 22106,
  WORKFLOW_INVALID_GRAPH = 22107,
  WORKFLOW_INTERNAL_FAILURE = 22108,
  WORKFLOW_INVALID_REQUEST = 22999,
  WORKFLOW_MODIFY_SUCCESS = 22150,
  WORKFLOW_MODIFY_PENDING = 22151,
  WORKFLOW_MODIFY_FAILED = 22152,
  WORKFLOW_REINDEX_FAILED = 22153,
  CONCEPT_MODIFY_SUCCESS = 23150,
  CONCEPT_MODIFY_PENDING = 23151,
  CONCEPT_MODIFY_FAILED = 23152,
  ANNOTATION_SUCCESS = 24150,
  ANNOTATION_PENDING = 24151,
  ANNOTATION_FAILED = 24152,
  ANNOTATION_UNKNOWN_STATUS = 24154,
  ANNOTATION_INVALID_ARGUMENT = 24155,
  ANNOTATION_PERMISSION_DENIED = 24156,
  ANNOTATION_AWAITING_REVIEW = 24157,
  ANNOTATION_AWAITING_CONSENSUS_REVIEW = 24159,
  ANNOTATION_REVIEW_DENIED = 24158,
  ANNOTATION_MODIFY_SUCCESS = 24250,
  ANNOTATION_MODIFY_PENDING = 24251,
  ANNOTATION_MODIFY_FAILED = 24252,
  METADATA_INVALID_PATCH_ARGUMENTS = 24900,
  METADATA_PARSING_ISSUE = 24901,
  METADATA_MANIPULATION_ISSUE = 24902,
  TRAINER_JOB_STATE_NONE = 25000,
  TRAINER_JOB_STATE_QUEUED = 25001,
  TRAINER_JOB_STATE_RUNNING = 25002,
  TRAINER_JOB_STATE_COMPLETE = 25003,
  TRAINER_JOB_STATE_ERROR = 25004,
  DATA_DUMP_SUCCESS = 25150,
  DATA_DUMP_PENDING = 25151,
  DATA_DUMP_FAILED = 25152,
  DATA_DUMP_IN_PROGRESS = 25153,
  DATA_DUMP_NO_DATA = 25154,
  DATA_DUMP_UNEXPECTED_ERROR = 25155,
  DATA_DUMP_EXPORT_SUCCESS = 25170,
  DATA_DUMP_EXPORT_PENDING = 25171,
  DATA_DUMP_EXPORT_FAILED = 25172,
  DATA_DUMP_EXPORT_IN_PROGRESS = 25173,
  DATA_DUMP_EXPORT_UNEXPECTED_ERROR = 25174,
  APP_DUPLICATION_SUCCESS = 25200,
  APP_DUPLICATION_FAILED = 25201,
  APP_DUPLICATION_PENDING = 25202,
  APP_DUPLICATION_IN_PROGRESS = 25203,
  APP_DUPLICATION_INVALID_REQUEST = 25204,
  MODULE_DOES_NOT_EXIST = 25300,
  MODULE_PERMISSION_DENIED = 25301,
  MODULE_INVALID_ARGUMENT = 25302,
  MODULE_INVALID_REQUEST = 25303,
  BULK_OPERATION_SUCCESS = 25400,
  BULK_OPERATION_FAILED = 25401,
  BULK_OPERATION_PENDING = 25402,
  BULK_OPERATION_IN_PROGRESS = 25403,
  BULK_OPERATION_INVALID_REQUEST = 25404,
  BULK_OPERATION_CANCELLED = 25405,
  BULK_OPERATION_UNEXPECTED_ERROR = 25406,
  RUNNER_DOES_NOT_EXIST = 25600,
  RUNNER_PERMISSION_DENIED = 25601,
  RUNNER_INVALID_ARGUMENT = 25602,
  RUNNER_INVALID_REQUEST = 25603,
  RUNNER_NEEDS_RETRY = 25604,
  INPUT_DOWNLOAD_SUCCESS = 30000,
  INPUT_DOWNLOAD_PENDING = 30001,
  INPUT_DOWNLOAD_FAILED = 30002,
  INPUT_DOWNLOAD_IN_PROGRESS = 30003,
  INPUT_STATUS_UPDATE_FAILED = 30004,
  INPUT_DELETE_FAILED = 30005,
  INPUT_DUPLICATE = 30100,
  INPUT_UNSUPPORTED_FORMAT = 30101,
  INPUT_DOES_NOT_EXIST = 30102,
  INPUT_PERMISSION_DENIED = 30103,
  INPUT_INVALID_ARGUMENT = 30104,
  INPUT_OVER_LIMIT = 30105,
  INPUT_INVALID_URL = 30106,
  INPUT_MODIFY_SUCCESS = 30200,
  INPUT_MODIFY_PENDING = 30201,
  INPUT_MODIFY_FAILED = 30203,
  INPUT_STORAGE_HOST_FAILED = 30210,
  ALL_INPUT_INVALID_BYTES = 30300,
  INPUT_CLUSTER_SUCCESS = 30400,
  INPUT_CLUSTER_PENDING = 30401,
  INPUT_CLUSTER_FAILED = 30402,
  INPUT_CLUSTER_IN_PROGRESS = 30403,
  INPUT_REINDEX_SUCCESS = 30500,
  INPUT_REINDEX_PENDING = 30501,
  INPUT_REINDEX_FAILED = 30502,
  INPUT_REINDEX_IN_PROGRESS = 30503,
  INPUT_VIDEO_DOWNLOAD_SUCCESS = 31000,
  INPUT_VIDEO_DOWNLOAD_PENDING = 31001,
  INPUT_VIDEO_DOWNLOAD_FAILED = 31002,
  INPUT_VIDEO_DUPLICATE = 31100,
  INPUT_VIDEO_UNSUPPORTED_FORMAT = 31101,
  INPUT_VIDEO_DOES_NOT_EXIST = 31102,
  INPUT_VIDEO_PERMISSION_DENIED = 31103,
  INPUT_VIDEO_INVALID_ARGUMENT = 31104,
  INPUT_VIDEO_OVER_LIMIT = 31105,
  INPUT_VIDEO_INVALID_URL = 31106,
  INPUT_VIDEO_MODIFY_SUCCESS = 31200,
  INPUT_VIDEO_MODIFY_PENDING = 31201,
  INPUT_VIDEO_MODIFY_FAILED = 31203,
  INPUT_VIDEO_STORAGE_HOST_FAILED = 31210,
  ALL_INPUT_VIDEOS_INVALID_BYTES = 31300,
  INPUT_VIDEO_PROCESSING_SUCCESS = 31400,
  INPUT_VIDEO_PROCESSING_PENDING = 31410,
  INPUT_VIDEO_PROCESSING_FAILED = 31420,
  INPUT_VIDEO_STORAGE_INCONSISTENCY = 31430,
  INPUT_VIDEO_STORAGE_FAILURE = 31440,
  INPUT_VIDEO_URL_GENERATION_FAILURE = 31450,
  INPUT_CONNECTION_FAILED = 39996,
  REQUEST_DISABLED_FOR_MAINTENANCE = 39997,
  INPUT_WRITES_DISABLED_FOR_MAINTENANCE = 39998,
  INPUT_INVALID_REQUEST = 39999,
  PREDICT_INVALID_REQUEST = 40001,
  SEARCH_INVALID_REQUEST = 40002,
  CONCEPTS_INVALID_REQUEST = 40003,
  STATS_INVALID_REQUEST = 40004,
  DATABASE_DUPLICATE_KEY = 40010,
  DATABASE_STATEMENT_TIMEOUT = 40011,
  DATABASE_INVALID_ROWS_AFFECTED = 40012,
  DATABASE_DEADLOCK_DETECTED = 40013,
  DATABASE_FAIL_TASK = 40014,
  DATABASE_FAIL_TO_GET_CONNECTIONS = 40015,
  DATABASE_TOO_MANY_CLIENTS = 40016,
  DATABASE_CONSTRAINT_VIOLATED = 40017,
  DATABASE_CANCELED = 40021,
  ASYNC_WORKER_MULTI_ERRORS = 40020,
  RPC_REQUEST_QUEUE_FULL = 40030,
  RPC_SERVER_UNAVAILABLE = 40031,
  RPC_REQUEST_TIMEOUT = 40032,
  RPC_MAX_MESSAGE_SIZE_EXCEEDED = 40033,
  RPC_CANCELED = 40035,
  RPC_UNKNOWN_METHOD = 40036,
  REQUEST_CANCELED_BY_USER = 40037,
  CLUSTER_INTERNAL_FAILURE = 43040,
  EXTERNAL_CONNECTION_ERROR = 40034,
  QUERY_INVALID_SYNTAX = 40050,
  QUEUE_CONN_ERROR = 41000,
  QUEUE_CLOSE_REQUEST_TIMEOUT = 41002,
  QUEUE_CONN_CLOSED = 41003,
  QUEUE_PUBLISH_ACK_TIMEOUT = 41004,
  QUEUE_PUBLISH_ERROR = 41005,
  QUEUE_SUBSCRIPTION_TIMEOUT = 41006,
  QUEUE_SUBSCRIPTION_ERROR = 41007,
  QUEUE_MARSHALLING_FAILED = 41008,
  QUEUE_UNMARSHALLING_FAILED = 41009,
  QUEUE_MAX_MSG_REDELIVERY_EXCEEDED = 41010,
  QUEUE_ACK_FAILURE = 41011,
  SQS_OVERLIMIT = 41100,
  SQS_INVALID_RECEIPT_HANDLE = 41101,
  SQS_UNKNOWN = 41102,
  SEARCH_INTERNAL_FAILURE = 43001,
  SEARCH_PROJECTION_FAILURE = 43002,
  SEARCH_PREDICTION_FAILURE = 43003,
  SEARCH_BY_NOT_FULLY_INDEXED_INPUT = 43004,
  SAVED_SEARCH_MODIFY_FAILED = 43005,
  SEARCH_COUNTS_UNAVAILABLE = 43006,
  EVALUATION_QUEUED = 43100,
  EVALUATION_IN_PROGRESS = 43101,
  EVALUATION_SUCCESS = 43102,
  EVALUATION_FAILED_TO_RETRIEVE_DATA = 43103,
  EVALUATION_INVALID_ARGUMENT = 43104,
  EVALUATION_FAILED = 43105,
  EVALUATION_PENDING = 43106,
  EVALUATION_TIMED_OUT = 43107,
  EVALUATION_UNEXPECTED_ERROR = 43108,
  EVALUATION_MIXED = 43109,
  STRIPE_EVENT_ERROR = 44001,
  CACHE_MISS = 45001,
  REDIS_SCRIPT_EXITED_WITH_FAILURE = 45002,
  REDIS_STREAM_ERR = 45003,
  REDIS_NO_CONSUMERS = 45004,
  REDIS_STREAM_BACKOFF = 45005,
  SIGNUP_EVENT_ERROR = 46001,
  SIGNUP_FLAGGED = 46002,
  FILETYPE_UNSUPPORTED = 46003,
  APP_COUNT_INVALID_MESSAGE = 47001,
  APP_COUNT_UPDATE_INCREMENT_FAILED = 47002,
  APP_COUNT_REBUILD_FAILED = 47003,
  APP_COUNT_INTERNAL_FAILURE = 47004,
  MP_DOWNLOAD_ERROR = 47101,
  MP_RESOLVE_DNS_ERROR = 47102,
  MP_DOWNLOAD_MAX_SIZE_EXCEEDED_ERROR = 47103,
  MP_IMAGE_DECODE_ERROR = 47104,
  MP_INVALID_ARGUMENT = 47105,
  MP_IMAGE_PROCESSING_ERROR = 47106,
  DATATIER_CONN_ERROR = 47201,
  USER_CONSENT_FACE = 50001,
  WORKER_MISSING = 51000,
  WORKER_ACTIVE = 51001,
  WORKER_INACTIVE = 51002,
  COLLECTOR_MISSING = 52000,
  COLLECTOR_ACTIVE = 52001,
  COLLECTOR_INACTIVE = 52002,
  COLLECTOR_POST_INPUT_FAILED = 52003,
  SSO_IDENTITY_PROVIDER_DOES_NOT_EXIST = 53001,
  TASK_IN_PROGRESS = 54001,
  TASK_DONE = 54002,
  TASK_WONT_DO = 54003,
  TASK_FAILED = 54005,
  TASK_IDLE = 54006,
  TASK_CONFLICT = 54100,
  TASK_NOT_IMPLEMENTED = 54101,
  TASK_MISSING = 54102,
  TASK_PERMISSION_DENIED = 54103,
  TASK_ASSIGNMENT_SUCCESS = 54200,
  TASK_ASSIGNMENT_PENDING = 54201,
  TASK_ASSIGNMENT_AWAITING_REVIEW = 54202,
  TASK_ASSIGNMENT_AWAITING_CONSENSUS_REVIEW = 54203,
  TASK_ASSIGNMENT_REVIEW_DENIED = 54204,
  LABEL_ORDER_PENDING = 55001,
  LABEL_ORDER_IN_PROGRESS = 55002,
  LABEL_ORDER_SUCCESS = 55003,
  LABEL_ORDER_CANCELED = 55004,
  LICENSE_ACTIVE = 60000,
  LICENSE_DOES_NOT_EXIST = 60001,
  LICENSE_NEED_UPDATE = 60002,
  LICENSE_EXPIRED = 60003,
  LICENSE_REVOKED = 60004,
  LICENSE_DELETED = 60005,
  LICENSE_VOLUME_EXCEEDED = 60006,
  PASSWORD_VALIDATION_SUCCESS = 61000,
  PASSWORD_VALIDATION_FAILED = 61001,
  PASSWORDPOLICY_INVALID_ARGUMENT = 61002,
  FEATUREFLAG_CONFIG_NOT_FOUND = 62000,
  FEATUREFLAG_INVALID_ARGUMENT = 62001,
  FEATUREFLAG_BLOCKED = 62002,
  MAINTENANCE_SUCCESS = 63000,
  MAINTENANCE_FAILED = 63001,
  DATASET_VERSION_PENDING = 64005,
  DATASET_VERSION_IN_PROGRESS = 64010,
  DATASET_VERSION_READY = 64015,
  DATASET_VERSION_FAILURE = 64020,
  DATASET_VERSION_UNEXPECTED_ERROR = 64025,
  DATASET_VERSION_CONFLICT = 64030,
  DATASET_INPUT_SUCCESS = 64100,
  DATASET_INPUT_DUPLICATE = 64101,
  DATASET_VERSION_EXPORT_SUCCESS = 64200,
  DATASET_VERSION_EXPORT_PENDING = 64201,
  DATASET_VERSION_EXPORT_FAILED = 64202,
  DATASET_VERSION_EXPORT_IN_PROGRESS = 64203,
  DATASET_VERSION_EXPORT_UNEXPECTED_ERROR = 64204,
  JOB_QUEUED = 64000,
  JOB_RUNNING = 64001,
  JOB_COMPLETED = 64002,
  JOB_FAILED = 64003,
  JOB_CANCELLED = 64004,
  JOB_UNEXPECTED_ERROR = 64006,
  JOB_CONFLICT = 64007,
  AUTH_MISSING_IDP_ASSOC = 65000,
  LIST_OBJECTS_FAILED = 66000,
  ARCHIVE_EXTRACT_FAILED = 67000,
  UPLOAD_IN_PROGRESS = 68000,
  UPLOAD_DONE = 68001,
  UPLOAD_FAILED = 68002,
  UPLOAD_UNEXPECTED_ERROR = 68003,
  UPLOAD_EXPIRED = 68004,
  UPLOAD_CANCELED = 68005,
  UPLOAD_CONFLICT = 68006,
  BILLING_INVALID_INFO = 69000,
  INTERNAL_SERVER_ISSUE = 98004,
  INTERNAL_FETCHING_ISSUE = 98005,
  INTERNAL_DATABASE_ISSUE = 98006,
  INTERNAL_CONTEXT_CANCELED = 98008,
  INTERNAL_UNEXPECTED_TIMEOUT = 98009,
  INTERNAL_UNEXPECTED_V1 = 98010,
  INTERNAL_UNEXPECTED_PANIC = 98011,
  INTERNAL_UNEXPECTED_SPIRE = 98012,
  INTERNAL_REDIS_UNAVAILABLE = 98013,
  INTERNAL_RESOURCE_EXHAUSTED = 98014,
  INTERNAL_REDIS_UNCATEGORIZED = 98015,
  INTERNAL_AWS_UNCATEGORIZED = 98016,
  INTERNAL_AZURE_UNCATEGORIZED = 98017,
  CONN_UNCATEGORIZED = 99001,
  MODEL_UNCATEGORIZED = 99002,
  INPUT_UNCATEGORIZED = 99003,
  ANNOTATION_UNCATEGORIZED = 99004,
  BILLING_UNCATEGORIZED = 99005,
  INTERNAL_UNCATEGORIZED = 99009,
  BAD_REQUEST = 90400,
  SERVER_ERROR = 90500,
}
