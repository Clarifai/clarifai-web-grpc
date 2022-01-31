import { describe, it } from 'mocha'
import { expect } from 'chai'
import { ClarifaiStub } from '../src/index'

describe('Client Stub', () => {
  it('works', () => {
    const client = ClarifaiStub.grpc()
    expect(client.hostname_).to.equal('api-grpc-web.clarifai.com')
  })

  it('allows custom hostname', () => {
    const client = ClarifaiStub.grpc('api-dev.clarifai.com')
    expect(client.hostname_).to.equal('api-dev.clarifai.com')
  })
})
