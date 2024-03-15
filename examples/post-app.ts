import { ClarifaiStub } from '../index'
import { App } from '../proto/clarifai/api/resources_pb'
import { PostAppsRequest } from '../proto/clarifai/api/service_pb'

export async function createAnApp() {
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
}
