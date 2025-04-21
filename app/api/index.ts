import axios from "axios";
const keyValue = "b0f0af4b05df6b0caf13eb478e25c690";
const tokenValue =
  "ATTA0a123c7ba654d8700d745036fb176a4dc58e625094c4493066a9d376c0e937796AE8B387";
const baseURL = "https://api.trello.com/1";

// Access env variables
// const keyValue = Config.API_KEY;
// const tokenValue = Config.TOKEN;
// const baseURL = Config.BASE_URL;

// Create Axios instance
export const apiV1Instance = axios.create({
  baseURL,
  responseType: "json",
});

// Attach key/token as query params to every request
apiV1Instance.interceptors.request.use((request) => {
  if (keyValue && tokenValue) {
    request.params = {
      ...request.params,
      key: keyValue,
      token: tokenValue,
    };
  }
  return request;
});
