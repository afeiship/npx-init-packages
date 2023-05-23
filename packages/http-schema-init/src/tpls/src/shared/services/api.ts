import httpSchema from '@jswork/http-schema';
import interceptorRequest from './interceptors/request';
import interceptorResponse from './interceptors/response';
import schema from './schema';

const opts = {
  adapter: 'Axios',
  slim: true,
  interceptors: [...interceptorRequest, ...interceptorResponse],
  transformResponse(inResponse) {
    return inResponse.data;
  },
};

nx.$api = httpSchema(schema, opts);
