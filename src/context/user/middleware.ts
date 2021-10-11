import axios from 'axios';
import { Action } from '../user';

const getUsers = async (dispatch: Function) => {
  const { data } = await axios.get('http://localhost:3000/users');

  dispatch({ type: 'GET_USERS_RESPONSE', payload: data });
};

export const requestMiddleware = async (action: Action, dispatch: Function) => {
  switch (action.type) {
    case 'GET_USERS':
      return await getUsers(dispatch);
  }
};
