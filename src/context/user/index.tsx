import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from 'react';

import { initialState } from './initial';
import { Status, UserState } from '../../interfaces/UserState';
import { requestMiddleware } from './middleware';
import { GET_USERS } from './constants';
import reducerHandler from './actions';

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

export const Provider = ({ children }: any) => {
  const reducer = useCallback((state: UserState, action: Action) => {
    requestMiddleware(action, dispatch);

    // @ts-ignore
    const handler = reducerHandler[action.type];

    const updatedState = handler({ state, action, dispatch }) as UserState;

    return updatedState;
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsers = useCallback(() => {
    dispatch({ type: GET_USERS });
  }, []);

  return (
    <UserContext.Provider value={{ ...state, getUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
