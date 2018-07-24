import React from 'react';
// eslint-disable-next-line no-unused-vars
import HelmetHeader from '../HelmetHeader';
import Ribbon from '../Ribbon';
import Routes from '../../routes/';
import styles from './styles.scss';

const App = () => (
  <div>
    <HelmetHeader />
    <Ribbon />
    {Routes}
  </div>
);

export default App;
