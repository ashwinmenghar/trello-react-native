export interface TrelloList {
  id: string;
  name: string;
  closed: boolean;
  pos: number;
}

export interface TrelloCard {
  id: string;
  name: string;
  idList: string;
  desc: string;
  pos: number;
}

export interface MergedCard extends TrelloCard {
  listId: string;
  listName: string;
  list: TrelloList;
}

export interface CardProps {
  name: string;
  cardData: CardData[];
}

export interface CardData {
  id: string;
  idBoard: string;
  idList: string;
  name: string;
}
