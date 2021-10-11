import axios from 'axios';
import { UserState } from '../../interfaces/UserState';
import { Action } from '../user';
import { GET_USERS, GET_USERS_RESPONSE } from './constants';

interface handlerParams {
  dispatch: Function;
  action: Action;
  state: UserState;
}

const getUsers = async ({ dispatch }: handlerParams) => {
  const { data } = await axios.get('http://localhost:3000/users');

  dispatch({ type: GET_USERS_RESPONSE, payload: data });
};

const handler = {
  [GET_USERS]: getUsers,
};

export const requestMiddleware = async (params: handlerParams) => {
  const { action } = params;

  // @ts-ignore
  const actionHandler = handler[action.type];

  return typeof actionHandler === 'function' && (await actionHandler(params));
};
