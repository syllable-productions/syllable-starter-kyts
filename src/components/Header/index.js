import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

function Header() {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test-page">TestPage</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
