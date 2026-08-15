import type { UnifiedInterceptor } from "@jswork/universal-request-core";

const TOKEN_KEY = "jwt_token";

const authInterceptor: UnifiedInterceptor = {
  id: "auth",
  request: (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  response: (res) => {
    // 登录成功时保存 token
    if (res.config.url?.includes("/auth") && res.config.method === "POST") {
      const token = res.data?.data?.token;
      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
      }
    }
    // 401 时清除 token
    if (res.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
    }
    return res;
  },
};

export default authInterceptor;
