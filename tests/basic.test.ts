import { ClarifaiStub as StubSRC } from '../index'
import { ClarifaiStub as StubCJS } from '../dist/cjs/index'
import { ClarifaiStub as StubESM } from '../dist/esm/index'
import { describe, it } from 'mocha'
import { expect } from 'chai'

describe('Client Stub (src)', () => {
  it('works', () => {
    const client = StubSRC.grpc()
    expect(client.hostname).to.equal('api.clarifai.com')
  })

  it('allows custom hostname', () => {
    const client = StubSRC.grpc('api-dev.clarifai.com')
    expect(client.hostname).to.equal('api-dev.clarifai.com')
  })
})

describe('Client Stub (cjs)', () => {
  it('works', () => {
    const client = StubCJS.grpc()
    expect(client.hostname).to.equal('api.clarifai.com')
  })

  it('allows custom hostname', () => {
    const client = StubCJS.grpc('api-dev.clarifai.com')
    expect(client.hostname).to.equal('api-dev.clarifai.com')
  })
})

describe('Client Stub (esm)', () => {
  it('works', () => {
    const client = StubESM.grpc()
    expect(client.hostname_).to.equal('api.clarifai.com')
  })

  it('allows custom hostname', () => {
    const client = StubESM.grpc('api-dev.clarifai.com')
    expect(client.hostname).to.equal('api-dev.clarifai.com')
  })
})
