import React, { useState, useContext } from 'react';
import UserContext from '../../context/user-context';
import Card from '../card/card';
import './user-settings.css';

const UserSettings = () => {
  const [userName, setUserName] = useState('');
  const { getUser, isLoading } = useContext(UserContext);

  return <Card className={'user-settings'}>
    <div className={'user-input'}>
      <h1>{'Enter Reddit Username'}</h1>

      <input
        className={'input user-settings-wrapper'}
        placeholder={'Username'}
        onChange={(e) => setUserName(e.target.value)}
        type='text'/>

      <div className={'user-settings-wrapper user-settings-button'}>
        <button
          disabled={!userName && !isLoading}
          className={'button'}
          onClick={() => getUser(userName)}
        >
          {isLoading ? 'Loading...' : 'Get Info'}
        </button>
      </div>
    </div>

  </Card>
};

UserSettings.displayName = 'UserSettings';

export default UserSettings;
