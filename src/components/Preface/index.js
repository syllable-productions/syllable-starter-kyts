import React from 'react';
import styles from './styles.scss';

const blurb = `Dear Nation is a living archive of the letters we write to our nation's leaders.`;

const Preface = () => (
  <div className="preface-fixed">
    <div className="preface-inner">
      <h1 className="h1">
        <span className="hide">Dear Nation</span>
        <img src="images/dear-nation-logo.svg" alt="dear nation logo" />
      </h1>
      <div className="header-section">
        <p>{blurb}</p>
        <p>
          <a href="/write">Write</a> a letter.
        </p>

        <p>
          <a href="/letters">Discover</a> and share the voices that need to be heard.
        </p>
      </div>
      {/* >"./partials/email-capture"/ */}
    </div>
  </div>
);

export default Preface;
