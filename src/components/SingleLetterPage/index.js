import React, { PureComponent } from 'react';
import FeedSingle from '../FeedSingle';

class SingleLetterPage extends PureComponent {
  render() {
    const { lettersData } = this.props;

    return (
      <section>
        <div className="article">{lettersData && <FeedSingle letterData={lettersData[0]} />}</div>
      </section>
    );
  }
}

export default SingleLetterPage;
