import React from 'react';
import Letter from '../Letter';

const tempLetters = [1,2,3];

const Feed = () => (
  <div className="feed">
    <div className="feed-inner page-inner">
      <div className="letters-list">
        {
          tempLetters.map(letter => {
            return <Letter />;
          })
        }
      </div>
    </div>
  </div>
);

export default Feed;
