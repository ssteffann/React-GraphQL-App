import React, { useState, useContext } from 'react';
import SubredditContext from '../../context/subreddit-context';
import Card from '../card/card';
import Loader from '../loader/loader';
import ListItem from './list-item';

import './news-list.css'
import { pageSizes } from './constants';

const NewsList = () => {
  const [category, setCategory] = useState('movies');
  const [size, setSize] = useState(2);
  const { news, isLoading, getSubreddit } = useContext(SubredditContext);

  if (isLoading) {
    return (<Card className={'news-list-loader'}><Loader/></Card>)
  }
  return (<div>
    <div className={'news-list-inputs'}>
      <div>
        <input
          type={'text'}
          value={category}
          className={'input'}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <select className={'select'} value={size} onChange={(e) => setSize(e.target.value)}>
          {pageSizes.map((item) => <option key={item} value={item}>Page size: {item}</option>)}
        </select>
      </div>

      <div>
        <button
          disabled={!category}
          className={'button'}
          onClick={() => getSubreddit(category, size)}
        >
          Refresh News
        </button>
      </div>

    </div>

    {news.map((item, index) => <ListItem item={item} key={index}/>)}
  </div>)
};

NewsList.displayName = 'NewsList';

export default NewsList;
