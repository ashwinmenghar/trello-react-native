import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Board } from "../../types/board";
// @ts-ignore
import { BASE_URL, TOKEN, API_KEY } from "@env";
import { ApiError } from "../../types";

export const boardApi = createApi({
  reducerPath: "boardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  refetchOnFocus: true,

  endpoints: (builder) => ({
    getBoards: builder.query<Board[], void>({
      query: () => ({
        url: "/members/me/boards",
        method: "GET",
        params: {
          key: API_KEY,
          token: TOKEN,
        },
      }),
    }),

    createBoards: builder.mutation({
      query: (name) => ({
        url: `boards/?name=${name}`,
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

export const { useGetBoardsQuery, useCreateBoardsMutation } = boardApi;
