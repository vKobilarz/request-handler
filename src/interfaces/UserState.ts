export interface Status {
  loading: boolean;
  error: boolean;
}

export interface User {
  data: string;
  status: Status;
}

export interface UserState {
  data: {
    users: User[];
  };
  status: Status;
}
