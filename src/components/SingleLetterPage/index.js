import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FeedSingle from '../FeedSingle';

class SingleLetterPage extends PureComponent {
  render() {
    const { lettersData } = this.props;

    const letterData = lettersData[0];

    return (
      <section>
        <div className="article">{letterData && <FeedSingle letterData={letterData} />}</div>
      </section>
    );
  }
}

SingleLetterPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  lettersData: PropTypes.array,
};

SingleLetterPage.defaultProps = {
  lettersData: [],
};

export default SingleLetterPage;
