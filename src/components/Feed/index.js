import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Letter from '../Letter';

class Feed extends PureComponent {
  render() {
    const { lettersData } = this.props;

    return (
      <div className="feed">
        <div className="feed-inner page-inner">
          <div className="letters-list">
            {lettersData && lettersData.map(letter => <Letter {...letter} key={letter.slug} />)}
          </div>
        </div>
      </div>
    );
  }
}

Feed.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  lettersData: PropTypes.array.isRequired,
};

export default Feed;
