import React from 'react';

function AboutPage() {
  return (
    <section>
      <div className="article">
        <div className="article-inner">
          <h2 className="h2 header-small">
            <a href="/about">About</a>
          </h2>
        </div>
        <div className="article-content page-inner">
          <p>
            Dear Nation is a living archive of the letters we write to our nation's leaders. Read my{' '}
            <a href="/letters/dear-president-meet-dear-nation">
              letter to President Obama to tell him about the project.
            </a>{' '}
            More information coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
