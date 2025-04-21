import { AxiosResponse } from "axios";
import { apiV1Instance } from "../api/index";

// export const addCheckList = async (
//   input: string,
//   cardId: string
// ): Promise<AxiosResponse> => {
//   try {
//     const data = await apiV1Instance.post(
//       `/checklists?idCard=${cardId}&name=${input}`
//     );
//     return data;
//   } catch (error) {
//     throw new Error(error instanceof Error ? error.message : String(error));
//   }
// };

// export const getCheckListsInCard = async (
//   cardId: string
// ): Promise<AxiosResponse> => {
//   try {
//     const data = await apiV1Instance.get(`cards/${cardId}/checklists`);
//     return data;
//   } catch (error) {
//     throw new Error(error instanceof Error ? error.message : String(error));
//   }
// };

export const createBoard = async (name: string): Promise<AxiosResponse> => {
  try {
    const { data } = await apiV1Instance.post(`boards/?name=${name}`);
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
};

export const getBoards = async (): Promise<AxiosResponse> => {
  try {
    const { data } = await apiV1Instance.get("/members/me/boards");
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
};

// export const createList = async (
//   name: string,
//   boardId: string
// ): Promise<List> => {
//   try {
//     const { data } = await apiV1Instance.post(
//       `/lists?name=${name}&idBoard=${boardId}`
//     );
//     return data;
//   } catch (error) {
//     throw new Error(
//       error instanceof Error ? error.message : "Something went wrong"
//     );
//   }
// };

// export const createCard = async (
//   name: string,
//   listId: string
// ): Promise<CardData> => {
//   try {
//     const { data } = await apiV1Instance.post(
//       `/cards?name=${name}&idList=${listId}`
//     );
//     return data;
//   } catch (error) {
//     throw new Error(
//       error instanceof Error ? error.message : "Something went wrong"
//     );
//   }
// };

// export const fetchBoardListAndCards = async (
//   boardId: string
// ): Promise<{ lists: []; cards: [] }> => {
//   try {
//     const lists = await apiV1Instance.get(`/boards/${boardId}/lists`);
//     const cards = await apiV1Instance.get(`/boards/${boardId}/cards`);

//     return { lists: lists.data, cards: cards.data };
//   } catch (error) {
//     throw new Error(
//       error instanceof Error ? error.message : "Something went wrong"
//     );
//   }
// };

// export const removeCard = async (listId: string) => {
//   try {
//     const { data } = await apiV1Instance.put(`/lists/${listId}?closed=true`);
//     return data;
//   } catch (error) {
//     throw new Error(
//       error instanceof Error ? error.message : "Something went wrong"
//     );
//   }
// };

// export const toggleCheckList = async (
//   cardId: string,
//   checkItemId: string,
//   isComplete: string
// ) => {
//   try {
//     const { data } = await apiV1Instance.put(
//       `/cards/${cardId}/checkItem/${checkItemId}`,
//       {
//         state: isComplete === "complete" ? "incomplete" : "complete",
//       }
//     );

//     return data;
//   } catch (error) {
//     throw new Error(
//       error instanceof Error ? error.message : "Something went wrong"
//     );
//   }
// };

// export const createItem = async (checkListId: string, name: string) => {
//   try {
//     const { data } = await apiV1Instance.post(
//       `/checklists/${checkListId}/checkItems?name=${name}`
//     );
//     return data;
//   } catch (error) {
//     throw new Error(
//       error instanceof Error ? error.message : "Something went wrong"
//     );
//   }
// };

// export const deleteItem = async (checkListId: string, checkItemId: string) => {
//   try {
//     await apiV1Instance.delete(
//       `/checklists/${checkListId}/checkItems/${checkItemId}`
//     );
//   } catch (error) {
//     throw new Error(
//       error instanceof Error ? error.message : "Something went wrong"
//     );
//   }
// };

// export const deleteCheckList = async (checkListId: string) => {
//   try {
//     await apiV1Instance.delete(`/checklists/${checkListId}`);
//   } catch (error) {
//     throw new Error(
//       error instanceof Error ? error.message : "Something went wrong"
//     );
//   }
// };
