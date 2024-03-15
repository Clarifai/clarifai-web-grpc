import { ClarifaiStub } from '../index'
import { Struct, Data, Input, Text } from '../resources'
import { PostInputsRequest } from '../service'

export async function createAnInput() {
  // create an input with some text. In a real app, this might come
  // from a filepicker widget, or maybe a datasource like S3 or a database.
  const input = new Input();

  const data = new Data();

  const text = new Text();
  text.setRaw("hello world");

  // we can also attach metadata to an input so we can correlate it with
  // other data in our system. This can be any JSON-serializable object.
  const metadata = Struct.fromJavaScript({
    product_id: '1234',
    location: 'San Francisco',
    client: 'acme',
  });

  data.setMetadata(metadata);

  input.setData(data);

  // get a client object
  const client = ClarifaiStub.promise()

  // create a request
  const req = new PostInputsRequest();
  req.setInputsList([input]);

  // send the request
  const auth = {
    authorization: `Key ${process.env.CLARIFAI_TOKEN}`,
  };
  const resp = await client.postInputs(req, auth);

  // log the input id
  console.log(resp.getInputsList()[0].getId());
}
