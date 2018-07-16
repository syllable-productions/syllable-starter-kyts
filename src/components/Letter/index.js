import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dialogs from '../Dialogs';

class Letter extends PureComponent {
  render() {
    const {
      title,
      url,
      date,
      source,
      summary,
      fulltext,
      dialogs,
      tags,
      isSingleLetter,
    } = this.props;

    return (
      <div className="letter-wrap">
        <div className="header-section">
          {isSingleLetter && <div className="date">{date}</div>}
          <a href={url}>
            <h1 className="h1">{title}</h1>
          </a>
          {isSingleLetter &&
            source && (
              <div className="source">
                source:{' '}
                <a href={source.url} target="_blank" rel="noopener">
                  {source.title}
                </a>
              </div>
            )}
        </div>

        {isSingleLetter && (
          <div>
            <div className="fulltext">{fulltext}</div>
            {dialogs && <Dialogs dialogs={dialogs} />}
          </div>
        )}
        {!isSingleLetter && <p className="summary">{summary}</p>}

        <div className="tags">{tags && tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>
    );
  }
}

Letter.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  source: PropTypes.object,
  summary: PropTypes.string,
  fulltext: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  dialogs: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array.isRequired,
  isSingleLetter: PropTypes.bool,
};

Letter.defaultProps = {
  date: null,
  source: {},
  summary: null,
  fulltext: null,
  isSingleLetter: false,
};

export default Letter;
