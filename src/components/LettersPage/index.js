import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Feed from '../Feed';

class LettersPage extends PureComponent {
  render() {
    const { lettersData } = this.props;

    return (
      <section>
        <div className="article">
          <div className="article-inner">
            <h2 className="h2 header-small">
              <a href="/letters">Letters recommended for you</a>
            </h2>
          </div>
          {lettersData && <Feed lettersData={lettersData} />}
        </div>
      </section>
    );
  }
}

LettersPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  lettersData: PropTypes.array.isRequired,
};

export default LettersPage;
