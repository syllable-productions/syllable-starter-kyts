import React, { Component } from 'react';
import Dialogs from '../Dialogs';

const isSingleLetter = false;

class Letter extends Component {
  render() {
    const {
      title,
      slug,
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

        <div className="tags">
          {tags &&
            tags.map(tag => {
              <span>{tag}</span>;
            })}
        </div>
      </div>
    );
  }
}

export default Letter;
