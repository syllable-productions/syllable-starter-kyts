import React from 'react';
// todo: #tempFakeData
const isSingleLetter = null;
const source = {
  link: 2524,
  title: 2423,
};

const tags = [
  'foo',
  'bar',
];

const Letter = () => (
  <div className="letter-wrap">
    <div className="header-section">
      { isSingleLetter &&
        <div className="date">
          date
        </div>
      }
      <a href="{url}">
        <h1 className="h1">
          title
        </h1>
      </a>
      { isSingleLetter &&
        <div className="source">
          source: <a href={source.link} target="_blank" rel="noopener">{source.title}</a>
        </div>
      }
    </div>

    { isSingleLetter &&
      <div className="fulltext">

      </div>
    }
    { !isSingleLetter &&
      <p className="summary">
        summary
      </p>
    }

    <div className="tags">
      {
        tags.map(tag => {
          <span>{tag}</span>
        })
      }
    </div>
  </div>
);

export default Letter;
