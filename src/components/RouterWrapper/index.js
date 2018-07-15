import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { letters } from '../../test-data';

function RouterWrapper(WrappedComponent) {
  class Extender extends Component {
    constructor() {
      super();

      this.state = {
        routeError: null,
        slug: null,
        lettersData: null,
        isSingleLetter: null,
      };
    }

    // check the route state both on mount and update
    componentDidMount() {
      this.getRouteState(this.props);
    }

    // check the route state both on mount and update
    componentWillReceiveProps(nextProps) {
      this.getRouteState(nextProps);
    }

    getRouteState(props) {
      // get values from the router
      // eslint-disable-next-line react/prop-types
      const { match: { params } } = props;
      const { slug } = params;

      let lettersData = letters;
      let isSingleLetter = false;

      if (slug) {
        isSingleLetter = true;
        lettersData = letters
          .filter(letter => letter.slug === slug)
          .map(letter => Object.assign({}, letter));
      }

      this.setState({
        slug,
        lettersData,
        isSingleLetter,
      });
    }

    render() {
      const { routeError } = this.state;

      if (routeError) {
        return (
          <Route
            render={({ staticContext }) => {
              // there is no `staticContext` on the client, so
              // we need to guard against that here
              if (staticContext) {
                staticContext.status = routeError;
              }

              return <div>{routeError}</div>;
            }}
          />
        );
      }

      return <WrappedComponent {...this.state} />;
    }
  }

  return withRouter(Extender);
}

export default RouterWrapper;
