// app.config.js
export default ({ config }) => {
  return {
    ...config,
    extra: {
      API_BASE_URL: process.env.API_BASE_URL || "https://default.api.com",
      AUTH_TOKEN_KEY: process.env.AUTH_TOKEN_KEY || "defaultkey",
      DEBUG: process.env.DEBUG || false,
    },
  };
};
