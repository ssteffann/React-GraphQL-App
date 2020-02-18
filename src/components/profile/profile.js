import React, { useContext } from 'react';
import UserContext from '../../context/user-context';
import Card from '../card/card';
import Loader from '../loader/loader';

import './profile.css'

const EmptyState = () => {
  return (<div className={'profile-empty'}>
    <h1>{'Username is not provided'}</h1>
    <h2>{'Please enter an username and press `Get Info` button'} </h2>
  </div>);
};

const Profile = () => {
  const { user, isLoading } = useContext(UserContext);

  if(isLoading) {
    return (<Card className={'profile'}><Loader className={'profile-loader'} /></Card>)
  }

  return (<Card className={'profile'}>
    {
      !user.username
        ? <EmptyState/>
        : (<div>
          <h2>Username: {user.username}</h2>

          <div
            className={'profile-karma'}>
            Karma: <span className={'profile-karma-info'}>{user['commentKarma']}</span>
          </div>

          <div>Active since: {new Date(user['createdISO']).toLocaleDateString()}</div>
        </div>)
    }
  </Card>);
};

Profile.displayName = 'Profile';

export default Profile;
