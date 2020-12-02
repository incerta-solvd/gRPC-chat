import * as grpc from '@grpc/grpc-js'

export const addServiceFactory = <T>(
  service: T,
  implementation: { [k in keyof T]: (call: any, callback: any) => void }
) => (server: grpc.Server): void => server.addService(service as any, implementation)
