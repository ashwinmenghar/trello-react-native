import { BoardApiState } from "./board";
import { CardApiState } from "./card";

// Board Types
export interface Board {
  id: string;
  name: string;
}

export interface Status {
  loading: boolean;
  error: { message: string } | null;
}

export interface InitialState {
  boards: Board[];
  status: {
    fetch: Status;
    add: Status;
  };
}

export interface CreateListRequest {
  name: string;
  boardId: string;
}

export interface RemoveListRequest {
  listId: string;
}

export interface ListResponse extends List {
  closed?: boolean;
  pos?: number;
  subscribed?: boolean;
}

// Redux API Types

export interface ListApiState {
  data: ListResponse[];
  isLoading: boolean;
  error: string | null;
}

// Redux Root State
export interface RootState {
  boards: InitialState;
  boardApi: BoardApiState;
  listApi: ListApiState;
  cardApi: CardApiState;
}

// API Error Types
export interface ApiError {
  status: number;
  error?: {
    message?: string;
    data?: string;
  };
}

export interface List {
  id: string;
  name: string;
  idBoard: string;
}
