# clarifai-web-grpc

The official Clarifai gRPC client for use in client browser applications.

[![NPM](https://nodei.co/npm/clarifai-web-grpc.png?downloads=true)](https://www.npmjs.com/package/clarifai-web-grpc)

## Installation

```bash
yarn add clarifai-web-grpc
```

## Usage

```ts
import { ClarifaiStub } from 'clarifai-web-grpc'
import { App } from 'clarifai-web-grpc/resources'
import { PostAppsRequest } from 'clarifai-web-grpc/service'

const client = ClarifaiStub.grpc()
// use client to create an App

const app = new App()
app.setId('cat-app')
app.setDefaultWorkflowId('General-Detection')
app.setDescription('An app for cats')

const req = new PostAppsRequest()
req.setAppsList([
  app
])

const auth = {
  'X-Clarifai-Session-Token': 'MY-CLARIFAI-PERSONAL-ACCESS-TOKEN',
}

client.postApps(req, auth, (err, resp) => {
  if (err) {
    console.error(err)
  } else {
    console.log(resp.getAppsList()[0].getId()) // logs "cat-app"
  }
})

```
