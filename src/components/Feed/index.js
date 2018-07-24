import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Letter from '../Letter';
import styles from './styles.scss';

const addOneAndZeroFill = (val) => {
  return ('00' + (val + 1)).slice(-2);
};

class Feed extends PureComponent {
  render() {
    const { lettersData } = this.props;

    return (
      <div className="feed">
        <div className="feed-inner page-inner">
          <div className="letters-list">
            {
              lettersData && lettersData.map((letter, idx) => {
                return (
                  <section>
                    <a href={letter.slug} className="letter-idx">{addOneAndZeroFill(idx)}</a>
                    <Letter {...letter} key={letter.slug} />
                  </section>
                );
              })
            }
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
