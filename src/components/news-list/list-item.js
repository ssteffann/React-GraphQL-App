import React from 'react';
import Card from '../card/card';

import './list-item.css'

const ListItem = ({ item = {} }) => {
  const length = item.comments.length;
  const author = length > 0 && item.comments[0].author;

  return (<Card className={'list-item'}>
    <div className={'list-item-wrapper'}>
      <div className={'list-item-title'}>{item.title}</div>
      <div className={'list-item-comments'}>
        Comments: {length}

        {author && (
          <div className={'list-item-author'}>
            <div>Top Commenter:</div>
            {author.username} - {author['commentKarma']}
          </div>
        )}

      </div>
    </div>
  </Card>);
};

ListItem.displayName = 'ListItem';

export default ListItem;
