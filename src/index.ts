import * as grpcWeb from 'grpc-web';
import * as $ from 'jquery';

import {V2Client} from '../proto/clarifai/api/serviceServiceClientPb';

class ClarifaiStub {
    static grpc() {
        let base = "api.clarifai.com"

        return new V2Client(base, null, null);
    }

}

module.exports = {ClarifaiStub};
