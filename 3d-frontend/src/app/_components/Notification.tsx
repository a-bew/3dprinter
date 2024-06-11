// src/pages/notifications.js

import { useContext } from 'react';
import NotificationContext, { NotificationProvider } from '../../context/NotificationContext';

const Notifications = () => {
  const { state, dispatch } = useContext(NotificationContext);

  const addNotification = () => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: 'New Notification' });
  };

  const removeNotification = (index: number) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', index });
  };

  return (
    <div>
      <h1>Notifications</h1>
      <button onClick={addNotification}>Add Notification</button>
      <ul>
        {state.notifications.map((notification, index) => (
          <li key={index}>
            {notification}
            <button onClick={() => removeNotification(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NotificationsPage = () => {
  return (
    <NotificationProvider>
        <Notifications />
    </NotificationProvider>
  );
};

export default NotificationsPage;
