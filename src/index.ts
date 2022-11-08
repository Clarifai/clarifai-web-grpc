import { createPromiseClient } from "@bufbuild/connect-web";
import { createConnectTransport, ConnectTransportOptions } from "@bufbuild/connect-web/dist/types/connect-transport";
import { V2 as V2Service } from "./gen/proto/clarifai/api/service_connectweb";

/**
 * Creates a promise-style gRPC client for calling Clarifai's APIs, using the connect-web transport.
 * For more information on connect-web, see https://connect.build/docs/web/getting-started
 * @param baseUrl The baseUrl of Clarifai's gRPC service.
 * @param interceptors An array of interceptors to be applied to every gRPC call using this client.
 * @returns a promise-style gRPC client for calling Clarifai's APIs, using the connect-web transport.
 */
export function createClarifaiConnectClient(baseUrl: string, interceptors: ConnectTransportOptions["interceptors"] = []) {
  const transport = createConnectTransport({
    // Requests will be made to <baseUrl>/<package>.<service>/method
    baseUrl,

    // By default, connect-web clients use the JSON format.
    // Set this option to true to use the binary format.
    useBinaryFormat: false,

    // Controls what the fetch client will do with credentials, such as
    // Cookies. The default value is "same-origin", which will not
    // transmit Cookies in cross-origin requests.
    credentials: "same-origin",

    // Interceptors apply to all calls running through this transport.
    interceptors,
  });
  return createPromiseClient(V2Service, transport);
}

export { UnaryRequest, UnaryResponse, StreamResponse } from '@bufbuild/connect-web/dist/types/interceptor';
