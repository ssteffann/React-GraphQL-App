import axios from 'axios';
import { getRedditUserQuery, getSubredditQuery } from './graphql-queries';

const axiosRedditGraphQL = axios.create({
  baseURL: 'https://www.graphqlhub.com/graphql',
  mode: 'no-cors',
});


export const getRedditUser = async (username) => {
  const response = await axiosRedditGraphQL.post('', {
    query: getRedditUserQuery(username)
  });

  return response.data.data.reddit;
};

export const getSubReddit = async (name, limit) => {
  const response = await axiosRedditGraphQL.post('', {
    query: getSubredditQuery(name, limit)
  });

  return response.data.data.reddit
};
