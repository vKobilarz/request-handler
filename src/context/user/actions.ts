import update from 'immutability-helper';

import { UserState } from '../../interfaces/UserState';
import { Action } from '../user';
import { GET_USERS, GET_USERS_RESPONSE } from './constants';

interface handlerParams {
  dispatch: Function;
  action: Action;
  state: UserState;
}

const getUsersAction = ({ state }: handlerParams): UserState => {
  return update(state, {
    status: {
      loading: { $set: true },
    },
  });
};

const getUsersResponseAction = ({
  action,
  state,
}: handlerParams): UserState => {
  return update(state, {
    data: {
      users: { $set: action.payload },
    },
    status: { loading: { $set: false } },
  });
};

const handler = {
  [GET_USERS]: getUsersAction,
  [GET_USERS_RESPONSE]: getUsersResponseAction,
};

export default handler;
