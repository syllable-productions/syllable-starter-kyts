import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Letter from '../Letter';

class FeedSingle extends PureComponent {
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

FeedSingle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  letterData: PropTypes.object.isRequired,
};

export default FeedSingle;
