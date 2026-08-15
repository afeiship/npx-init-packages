export default {
  items: [
    {
      request: ["/rails_jwt_admin", "json"],
      items: {
        login: ["post", "/auth"],
        profile: ["get", "/me"],
      },
    },
    {
      request: ["/api", "json"],
      resources: ["badges", "posts"],
    },
  ],
} as any;
