import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as ResourcesSRC from '../src/resources'
import * as ResourcesCJS from '../dist/resources'
import * as ResourcesESM from '../lib/resources'

function verifyInterface (modInterface: Record<string, unknown>) {
  expect(modInterface.Any).to.be.instanceOf(Function)
  expect(modInterface.Api).to.be.instanceOf(Function)
  expect(modInterface.Duration).to.be.instanceOf(Function)
  expect(modInterface.Empty).to.be.instanceOf(Function)
  expect(modInterface.Struct).to.be.instanceOf(Function)
  expect(modInterface.Timestamp).to.be.instanceOf(Function)
  expect(modInterface.Type).to.be.instanceOf(Function)
  expect(modInterface.Field).to.be.instanceOf(Function)
  expect(modInterface.Enum).to.be.instanceOf(Function)
  expect(modInterface.EnumValue).to.be.instanceOf(Function)
  expect(modInterface.Option).to.be.instanceOf(Function)
  expect(modInterface.DoubleValue).to.be.instanceOf(Function)
  expect(modInterface.FloatValue).to.be.instanceOf(Function)
  expect(modInterface.Int64Value).to.be.instanceOf(Function)
  expect(modInterface.UInt64Value).to.be.instanceOf(Function)
  expect(modInterface.Int32Value).to.be.instanceOf(Function)
  expect(modInterface.UInt32Value).to.be.instanceOf(Function)
  expect(modInterface.BoolValue).to.be.instanceOf(Function)
  expect(modInterface.StringValue).to.be.instanceOf(Function)
  expect(modInterface.BytesValue).to.be.instanceOf(Function)
  expect(modInterface.BaseResponse).to.be.instanceOf(Function)
}

describe('Resources/Helpers (src)', () => {
  it('exports various google-protobuf & grpc-web helper classes', () => {
    verifyInterface(ResourcesSRC)
  })
})

describe('Resources/Helpers (cjs)', () => {
  it('exports various google-protobuf & grpc-web helper classes', () => {
    verifyInterface(ResourcesCJS)
  })
})

describe('Resources/Helpers (esm)', () => {
  it('exports various google-protobuf & grpc-web helper classes', () => {
    verifyInterface(ResourcesESM)
  })
})
