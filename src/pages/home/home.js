import React from 'react';

import Container from '../../components/container/container';
import Info from '../../components/info/info';
import UserSettings from '../../components/user-settings/user-settings';
import Profile from '../../components/profile/profile';

import UserContext from '../../context/user-context';
import SubredditContext from '../../context/subreddit-context';
import { getRedditUser, getSubReddit } from '../../utils/api';

import './home.css';
import NewsList from '../../components/news-list/news-list';

class HomePage extends React.Component {
  static displayName = 'HomePage';

  constructor(props) {
    super(props);

    this.state = {
      isUserLoading: false,
      user: {},
      isNewsLoading: false,
      news: [],
    }
  };

  getUser = async (username) => {
    this.setState({ isUserLoading: true });

    const response = await getRedditUser(username);

    this.setState({ isUserLoading: false, user: response.user || {} });
  };

  getNews = async (name, size) => {
    this.setState({ isNewsLoading: true });

    const response = await getSubReddit(name, size);

    this.setState({ isNewsLoading: false, news: response.subreddit.newListings || [] });
  };

  render() {
    const { isUserLoading, user, isNewsLoading, news } = this.state;
    const userState = {
      getUser: this.getUser,
      isLoading: isUserLoading,
      user,
    };

    const newsState = {
      getSubreddit: this.getNews,
      isLoading: isNewsLoading,
      news,
    };

    return (
      <UserContext.Provider value={userState}>
        <Container>
          <Info
            className={'hide-on-mobile '}
            title={'Display data from Reddit GraphQL endpoint.'}
            description={'Enter your username and select number of listings you want to be displayed.'}
          />

          <div className={'wrapper'}>
            <UserSettings/>

            <Profile/>
          </div>
        </Container>

        <SubredditContext.Provider value={newsState}>
          <div className={'list-news'}>
            <NewsList/>
          </div>

        </SubredditContext.Provider>
      </UserContext.Provider>
    )
  }
}

export default HomePage;
