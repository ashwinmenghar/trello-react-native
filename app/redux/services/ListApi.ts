import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// @ts-ignore
import { BASE_URL, TOKEN, API_KEY } from "@env";
import {
  List,
  ApiError,
  CreateListRequest,
  RemoveListRequest,
} from "../../types";

export const ListApi = createApi({
  reducerPath: "ListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  refetchOnFocus: true,

  endpoints: (builder) => ({
    createLists: builder.mutation<List, CreateListRequest>({
      query: ({ name, boardId }) => ({
        url: `lists/?name=${name}&idBoard=${boardId}`,
        method: "POST",
        params: {
          key: API_KEY,
          token: TOKEN,
        },
      }),
      transformErrorResponse: (response): ApiError => response as ApiError,
    }),

    removeList: builder.mutation<List, RemoveListRequest>({
      query: ({ listId }) => ({
        url: `/lists/${listId}?closed=true`,
        method: "PUT",
        params: {
          key: API_KEY,
          token: TOKEN,
        },
      }),
      transformErrorResponse: (response): ApiError => response as ApiError,
    }),
  }),
});

export const { useCreateListsMutation, useRemoveListMutation } = ListApi;
