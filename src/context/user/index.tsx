import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from 'react';

import update from 'immutability-helper';

import { initialState } from './initial';
import { Status, UserState } from '../../interfaces/UserState';

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

const reducer = (state: UserState, action: Action) => {
  switch (action.type) {
    case 'GET_USERS':
      return getUsersHandler(state);
  }

  return state;
};

export const Provider = ({ children }: any) => {
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
