# clarifai-web-grpc

The official Clarifai gRPC client for use in client browser applications.

[![NPM](https://nodei.co/npm/clarifai-web-grpc.png?downloads=true)](https://www.npmjs.com/package/clarifai-web-grpc)

## Installation

```bash
yarn add clarifai-web-grpc
```

## Usage

```ts
import { ClarifaiStub } from "clarifai-web-grpc";
import { App } from "clarifai-web-grpc/proto/clarifai/api/resources_pb";
import { PostAppsRequest } from "clarifai-web-grpc/proto/clarifai/api/service_pb";

// get a client object
const client = ClarifaiStub.promise()

// create an app
const app = new App();
app.setId("cat-app");
app.setDefaultWorkflowId("General-Detection");
app.setDescription("An app for some cats");

// create a request
const req = new PostAppsRequest();
req.setAppsList([app]);

// send the request
const auth = {
  "authorization": `Key ${process.env.CLARIFAI_TOKEN}`,
};
const resp = await client.postApps(req, auth);

// log the app id
console.log(resp.getAppsList()[0].getId());
```

## Examples

See the examples directory for more examples of how to use the clarifai API client

## Publishing to NPM
Publishing the client to NPM involves merging a PR with 2 things:
1. Updates the `version` field in `package.json` to the appropriate version.
2. Commit message should begin with `"GRPC clients version"` eg `"GRPC clients version 9.4.0"`.
