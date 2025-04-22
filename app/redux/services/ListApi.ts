import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Board } from "../../types/board";
// @ts-ignore
import { BASE_URL, TOKEN, API_KEY } from "@env";

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
    createLists: builder.mutation({
      query: ({ name, boardId }: { name: string; boardId: string }) => ({
        url: `lists/?name=${name}&idBoard=${boardId}`,
        method: "POST",
        params: {
          key: API_KEY,
          token: TOKEN,
        },
      }),
    }),
  }),
});

export const { useCreateListsMutation } = ListApi;
