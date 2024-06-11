'use client'
import { createContext, useReducer } from 'react';

const NotificationContext = createContext({
    state: { notifications: [] },
    dispatch: (action: any) => {},
});

const initialState = {
  notifications: [],
};

const notificationReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((_: any, index: number) => index !== action.index),
      };
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;