import React from 'react';

const SubredditContext = React.createContext({
  isLoading: false,
  getSubreddit: () => {},
  news: [],
});

export default SubredditContext;
