import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TrelloCard, TrelloList, MergedCard } from "../../types/card";
// @ts-ignore
import { BASE_URL, TOKEN, API_KEY } from "@env";

export const boardWithCardsApi = createApi({
  reducerPath: "boardWithCardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  refetchOnFocus: true,

  endpoints: (builder) => ({
    getMergedBoardData: builder.query<MergedCard[], string>({
      async queryFn(boardId, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const [listsRes, cardsRes] = await Promise.all([
            fetchWithBQ(
              `/boards/${boardId}/lists?key=${API_KEY}&token=${TOKEN}`
            ),
            fetchWithBQ(
              `/boards/${boardId}/cards?key=${API_KEY}&token=${TOKEN}`
            ),
          ]);

          if (listsRes.error || cardsRes.error) {
            return { error: listsRes.error || cardsRes.error };
          }

          const lists = listsRes.data as TrelloList[];
          const cards = cardsRes.data as TrelloCard[];

          const merged = lists.map((list) => ({
            ...list,
            cardData: cards.filter((card) => card.idList === list.id),
          }));

          return { data: merged };
        } catch (err) {
          return { error: { status: 500, statusText: "Unexpected error" } };
        }
      },
    }),
  }),
});

export const { useGetMergedBoardDataQuery } = boardWithCardsApi;
