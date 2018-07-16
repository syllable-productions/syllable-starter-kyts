import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Dialogs extends PureComponent {
  render() {
    const { dialogs } = this.props;

    return (
      <div className="dialogs">
        {dialogs.map(dialog => (
          <div className="dialog" key={dialog.id}>
            <div className="header-section">
              <div className="date">{dialog.date}</div>
              <h2 className="h2 header">{dialog.title}</h2>
              <div className="fulltext">{dialog.fulltext}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Dialogs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dialogs: PropTypes.array.isRequired,
};

export default Dialogs;
