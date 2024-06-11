'use client';

import { SetStateAction, createContext, useReducer, useState } from 'react';

const UserContext = createContext({
    state: null,
    dispatch: (action: any) => {},
});

const initialState = {
  user: null
}

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'REMOVE_USER':
      return {user: null};
    default:
      return state;
  }
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
