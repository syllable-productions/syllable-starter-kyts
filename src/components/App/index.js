import React from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';
import HelmetHeader from '../HelmetHeader';
import Header from '../Header';
import Routes from '../../routes/';

const App = () => (
  <div>
    <HelmetHeader />
    <Header />
    <div className="container">{Routes}</div>
  </div>
);

export default App;
