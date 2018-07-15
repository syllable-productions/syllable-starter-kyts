import React from 'react';

const Preface = () => (
  <div className="preface-fixed">
    <div className="preface-inner">
      <h1 className="h1">
        <span className="hide">Dear Nation</span>
        <img src="images/dear-nation-logo.svg" />
      </h1>
      <div className="header-section">
        <p>
          Dear Nation is a living archive of the letters we write to our nation's leaders.
        </p>
        <p>
          <a href="/write">Write</a> a letter.
        </p>

        <p>
          <a href="/letters">Discover</a> and share the voices that need to be heard.
        </p>
      </div>
      {/*>"./partials/email-capture"/*/}
    </div>
  </div>
);

export default Preface;
