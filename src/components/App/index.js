import React from 'react';
// eslint-disable-next-line no-unused-vars
import HelmetHeader from '../HelmetHeader';
import Routes from '../../routes/';
import styles from './styles.scss';

const App = () => (
  <div>
    <HelmetHeader />
    {Routes}
  </div>
);

export default App;
