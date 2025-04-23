import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Board } from "../../types/board";
// @ts-ignore
import { BASE_URL, TOKEN, API_KEY } from "@env";
import { ApiError } from "../../types";

export const cardApi = createApi({
  reducerPath: "cardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  refetchOnFocus: true,

  endpoints: (builder) => ({
    createCard: builder.mutation({
      query: ({ name, listId }) => ({
        url: `/cardss?name=${name}&idList=${listId}`,
        method: "POST",
        params: {
          key: API_KEY,
          token: TOKEN,
        },
      }),
      transformErrorResponse: (response): ApiError => response as ApiError,
    }),
  }),
});

export const { useCreateCardMutation } = cardApi;
