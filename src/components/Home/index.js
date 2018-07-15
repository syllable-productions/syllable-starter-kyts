import React from 'react';
import styles from './styles.scss';
import Preface from '../Preface';
import Feed from '../Feed';

function Home() {
  return (
    <section className={styles.section}>
      <div className="row">
      <div className="col s12 l5">
        <Preface />
      </div>
      <div className="col s12 l7">
        <Feed />
      </div>
    </div>
    </section>
  );
}

export default Home;
