import {V2Client} from './proto/clarifai/api/serviceServiceClientPb'

export class ClarifaiStub {
  static grpc(hostname = "api.clarifai.com") {
    return new V2Client(hostname, null, null)
  }
}
