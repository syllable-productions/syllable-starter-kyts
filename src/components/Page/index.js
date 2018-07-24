import React, { PureComponent } from 'react';
import Header from '../Header';
import styles from './styles.scss';

class Page extends PureComponent {
  render() {
    return (
      <div className={`page page-${this.props.pageName}`}>
        <div className="container">
          <Header />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Page;
