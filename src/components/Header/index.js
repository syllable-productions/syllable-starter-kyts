import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="section-header">
        <div className="navigation">
          <a href="#nav" className="nav-toggle">
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
            <a href="/login"><span className="icon-user"></span></a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
