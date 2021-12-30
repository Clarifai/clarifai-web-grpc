import { ClarifaiStub } from '../index'
import { strictEqual } from 'assert'

describe('Basic Client Stub', () => {
  it('works', () => {
    const client = ClarifaiStub.grpc()
    strictEqual(client.hostname_, 'api.clarifai.com')
  })
})
