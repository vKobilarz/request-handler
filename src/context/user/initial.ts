import { UserState } from '../../interfaces/UserState';

export const initialState: UserState = {
  data: {
    users: [],
  },
  status: {
    loading: false,
    error: false,
  },
};
