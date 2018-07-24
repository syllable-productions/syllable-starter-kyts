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
            <span>Dear Nation is a living archive of the letters we write to our nation&#39;s leaders. Read my</span>&nbsp;
            <a href="/letters/dear-president-meet-dear-nation">letter to President Obama to tell him about the project.</a>&nbsp;
            <span>More information coming soon.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
