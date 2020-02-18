export const getRedditUserQuery = (username) => {
  return `{
  reddit {
    user(username: "${username}") {
      username
      commentKarma
      createdISO
    }
  }
}`
};

export const getSubredditQuery = (name = 'movies', limit = 5) => {
  return `{
  reddit {
    subreddit(name: "${name}") {
      newListings(limit: ${limit}) {
        title
        comments {
          body
          author {
            username
            commentKarma
          }
        }
      }
    }
  }
}`
};
