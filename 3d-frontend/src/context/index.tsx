// src/context/AppProviders.js

import { UserProvider } from './UserContext';
import { ThemeProvider } from './ThemeContext';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </UserProvider>
  );
};

export default AppProviders;
