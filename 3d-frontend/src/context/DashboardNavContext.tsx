'use client';
import { useReducer } from 'react';

const initialState = {
  menus: [],
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

const DashboarContext = createContext({
  state: { menus: [] },
  dispatch: (action: any) => {},
});





const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
 const [state, dispatch] = useReducer( notificationReducer,initialState)

 return (
   <DashboarContext.Provider value={{ state, dispatch }}>
     {children}
   </DashboarContext.Provider>
 );
};

export { DashboarContext, DashboardProvider };