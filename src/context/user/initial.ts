import { UserState } from '../../interfaces/UserState';

export const initialState: UserState = {
  data: {
    users: [
      {
        data: 'user1',
        status: {
          loading: false,
          error: false,
        },
      },
      {
        data: 'user2',
        status: {
          loading: false,
          error: false,
        },
      },
    ],
  },
  status: {
    loading: false,
    error: false,
  },
};
