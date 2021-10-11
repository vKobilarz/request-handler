import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from 'react';

import update from 'immutability-helper';

import { initialState } from './initial';
import { Status, UserState } from '../../interfaces/UserState';
import { requestMiddleware } from './middleware';

interface ContextState {
  getUsers(): void;
  data: any;
  status: Status;
}

export interface Action {
  type: string;
  payload?: any;
}

export const UserContext = createContext({} as ContextState);

const getUsersHandler = (state: UserState): UserState => {
  return update(state, {
    status: {
      loading: { $set: true },
    },
  });
};

const getUsersResponseHandler = (state: UserState, action: Action) => {
  return update(state, {
    data: {
      users: { $set: action.payload },
    },
    status: { loading: { $set: false } },
  });
};

export const Provider = ({ children }: any) => {
  const reducer = useCallback((state: UserState, action: Action) => {
    requestMiddleware(action, dispatch);

    switch (action.type) {
      case 'GET_USERS':
        return getUsersHandler(state);
      case 'GET_USERS_RESPONSE':
        return getUsersResponseHandler(state, action);
    }

    return state;
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsers = useCallback(() => {
    dispatch({ type: 'GET_USERS' });
  }, []);

  return (
    <UserContext.Provider value={{ ...state, getUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
