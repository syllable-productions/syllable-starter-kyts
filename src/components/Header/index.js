import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

function Header() {
  return (
    <section>
      <nav>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/test-page">
              Test Page
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
