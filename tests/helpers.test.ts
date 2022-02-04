import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as Resources from '../src/resources'

describe('Resources/Helpers', () => {
  it('exports various google-protobuf & grpc-web helper classes', () => {
    expect(Resources.Any).to.be.instanceOf(Function)
    expect(Resources.Api).to.be.instanceOf(Function)
    expect(Resources.Duration).to.be.instanceOf(Function)
    expect(Resources.Empty).to.be.instanceOf(Function)
    expect(Resources.Struct).to.be.instanceOf(Function)
    expect(Resources.Timestamp).to.be.instanceOf(Function)
    expect(Resources.Type).to.be.instanceOf(Function)
    expect(Resources.Field).to.be.instanceOf(Function)
    expect(Resources.Enum).to.be.instanceOf(Function)
    expect(Resources.EnumValue).to.be.instanceOf(Function)
    expect(Resources.Option).to.be.instanceOf(Function)
    expect(Resources.DoubleValue).to.be.instanceOf(Function)
    expect(Resources.FloatValue).to.be.instanceOf(Function)
    expect(Resources.Int64Value).to.be.instanceOf(Function)
    expect(Resources.UInt64Value).to.be.instanceOf(Function)
    expect(Resources.Int32Value).to.be.instanceOf(Function)
    expect(Resources.UInt32Value).to.be.instanceOf(Function)
    expect(Resources.BoolValue).to.be.instanceOf(Function)
    expect(Resources.StringValue).to.be.instanceOf(Function)
    expect(Resources.BytesValue).to.be.instanceOf(Function)
    expect(Resources.BaseResponse).to.be.instanceOf(Function)
    expect(Resources.Status).to.be.instanceOf(Function)
    expect(Resources.StatusCode).to.be.instanceOf(Object)
  })
})
