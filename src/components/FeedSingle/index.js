import React, { Component } from 'react';
import Letter from '../Letter';

class FeedSingle extends Component {
  render() {
    const { letterData } = this.props;

    return (
      <div className="feed feed-single">
        <div className="feed-inner page-inner">
          <div className="letters-list">
            <Letter {...letterData} isSingleLetter key={letterData.slug} />
          </div>
        </div>
      </div>
    );
  }
}

export default FeedSingle;
