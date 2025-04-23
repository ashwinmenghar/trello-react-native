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

export interface CreateBoardRequest {
  name: string;
}

export interface BoardResponse extends Board {
  desc?: string;
  closed?: boolean;
  idOrganization?: string;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
}

export interface BoardApiState {
  data: BoardResponse[];
  isLoading: boolean;
  error: string | null;
}
