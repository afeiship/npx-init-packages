import httpSchema from "@jswork/http-schema";
import { FetchAdapter } from "@jswork/universal-request-adapter-fetch";
import schema from "./schema";
import authInterceptor from "./interceptors/auth-interceptor";

// type Api = Record<string, (data?: any, options?: Record<string, any>) => Promise<any>>;

const api = httpSchema(schema, {
  adapter: new FetchAdapter(),
  interceptors: [authInterceptor],
  transformResponse: (res) => res.data.data,
});

// @ts-expect-error 挂载到 window 方便调试
window.api = api;

export default api;
