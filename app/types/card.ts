import { RouteProp } from "@react-navigation/native";

export interface TrelloList {
  id: string;
  name: string;
}

export interface TrelloCard {
  id: string;
  name: string;
  idList: string;
  desc: string;
  pos: number;
  cardData: CardData[];
}

export interface MergedCard extends TrelloCard {
  listId: string;
  listName: string;
  list: TrelloList;
}

export interface CardProps {
  id: string;
  name: string;
  cardData: CardData[];
}

export interface CardData {
  id: string;
  idBoard: string;
  idList: string;
  name: string;
}

export type CardListRouteProp = RouteProp<
  { params: { boardId: string } },
  "params"
>;

export interface CardResponse extends TrelloCard {
  closed?: boolean;
  dateLastActivity?: string;
  idLabels?: string[];
  idMembers?: string[];
  labels?: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

export interface CardApiState {
  data: CardResponse[];
  isLoading: boolean;
  error: string | null;
}
