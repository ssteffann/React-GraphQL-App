import React from 'react';

const UserContext = React.createContext({
  isLoading: false,
  getUser: () => {},
  user: {},
});

export default UserContext;
