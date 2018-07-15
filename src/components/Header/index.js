import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

function Header() {
  return (
    <section>
      <nav className={styles.comp}>
        <a href="/" className={styles.brandLogo}>
          BRAND
        </a>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/letters">
              Letters
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/write">
              Write
            </Link>
          </li>
        </ul>
      </nav>
      {/*
        <a className="corner-ribbon-wrap" href="/about">
          <div className="corner-ribbon top-right sticky">Alpha</div>
        </a>
      */}
    </section>
  );
}

{/*
<div className="section-header">
  <div className="navigation js-navigation">
    <a className="nav-toggle js-nav-toggle" href="#nav">
      <i className="bar bar-1"></i>
      <i className="bar bar-2"></i>
      <i className="bar bar-3"></i>
      <i className="bar bar-4"></i>
    </a>
    <nav id="nav" className="nav">
      <a href="/"><span>Home</span></a>
      <a href="/about"><span>About</span></a>
      <a href="/letters"><span>Read Letters</span></a>
      <a href="/write"><span>Write a Letter</span></a>
        {?user}
        <a href="/user"><span className="icon-user"></span></a>
        {:else}
        <a href="/login"><span className="icon-user"></span></a>
        {/user}
    </nav>
  </div>
</div>
*/}

export default Header;