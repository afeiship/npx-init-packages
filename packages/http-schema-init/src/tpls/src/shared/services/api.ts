import httpSchema from '@jswork/http-schema';

import ResponseCommon from './interceptors/response/common';
import RequestCommon from './interceptors/request/common';

const options = {
  slim: true,
  interceptors: [
    { type: 'response', fn: ResponseCommon },
    { type: 'request', fn: RequestCommon },
  ],
};

export default httpSchema(
  {
    baseURL: 'https://api.github.com',
    request: ['', 'json'],
    resources: [{ name: 'users' }],
    items: [
      {
        items: {
          profile: ['get', '/users/afeiship'],
        },
      },
    ],
  },
  options
);
