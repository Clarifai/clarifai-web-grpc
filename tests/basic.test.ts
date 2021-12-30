import { ClarifaiStub } from '../index'
import { expect } from 'chai'

describe('Basic Client Stub', () => {
  it('works', () => {
    const client = ClarifaiStub.grpc()
    expect(client.hostname_).to.equal('api.clarifai.com')
  })

  it('allows custom hostname', () => {
    const client = ClarifaiStub.grpc('api-dev.clarifai.com')
    expect(client.hostname_).to.equal('api-dev.clarifai.com')
  })
})
