import React, { PureComponent } from 'react';
import Page from '../Page';
import PropTypes from 'prop-types';
import Preface from '../Preface';
import Feed from '../Feed';
import styles from './styles.scss';

class Home extends PureComponent {
  render() {
    const { lettersData } = this.props;

    return (
      <Page pageName="home">
        <div className="row">
          <div className="col s12 l5">
            <Preface />
          </div>
          <div className="col s12 l7 feed-wrap container-inner">
            {lettersData && <Feed lettersData={lettersData} />}
          </div>
        </div>
      </Page>
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
