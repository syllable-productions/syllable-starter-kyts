import React, { Component } from 'react';

class Dialogs extends Component {
  render() {
    return (
      <div className="dialogs">
        {this.props.dialogs.map((dialog, idx) => (
          <div className="dialog" key={idx}>
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

export default Dialogs;
