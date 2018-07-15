import React, { Component } from 'react';
import Feed from '../Feed';

class LettersPage extends Component {
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

export default LettersPage;
