import {V2Client} from '../proto/clarifai/api/serviceServiceClientPb';

class ClarifaiStub {
    static grpc() {
        let base = "api.clarifai.com"

        return new V2Client(base, null, null);
    }

}

module.exports = {ClarifaiStub};
