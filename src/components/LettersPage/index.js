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

function LettersPage() {
  return (
    <section>
      <div className="article">
        <div className="article-inner">
          <h2 className="h2 header-small">
            <a href="/letters">Letters recommended for you</a>
          </h2>
        </div>
        { isSingleLetter &&
          <span>
            feed-single
          </span>
        }
        { !isSingleLetter &&
          <span>
            feed
          </span>
        }
      </div>
    </section>
  );
}

export default LettersPage;
