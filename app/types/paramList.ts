import { ParamListBase } from "@react-navigation/native";

export type RootStackParamList = {
  CardList: Params;
};

export type Params = {
  boardId: string;
  title: string;
};

export type ParamsList = {
  Board: undefined; // no params for Board
  CardList: {
    itemId: number;
    title: string;
  };
};
