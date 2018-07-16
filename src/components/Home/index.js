import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Preface from '../Preface';
import Feed from '../Feed';

class Home extends PureComponent {
  render() {
    const { lettersData } = this.props;

    return (
      <section className={styles.section}>
        <div className="row">
          <div className="col s12 l5">
            <Preface />
          </div>
          <div className="col s12 l7">{lettersData && <Feed lettersData={lettersData} />}</div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  lettersData: PropTypes.array,
};

Home.defaultProps = {
  lettersData: [],
};

export default Home;
