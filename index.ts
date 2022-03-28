import { V2Client, V2PromiseClient } from './proto/clarifai/api/service_grpc_web_pb'

export class ClarifaiStub {
  static grpc (hostname = 'api.clarifai.com') {
    return new V2Client(hostname)
  }
}

export { V2Client, V2PromiseClient }
export { RpcError, Metadata, ClientReadableStream } from 'grpc-web'
export { BaseResponse } from './proto/clarifai/api/status/status_pb'
