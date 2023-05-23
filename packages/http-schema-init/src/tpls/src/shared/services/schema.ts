export default {
  baseURL: 'https://api.github.com',
  request: ['', 'json'],
  items: [
    {
      items: {
        profile: ['get', '/users/afeiship']
      }
    }
  ]
};
