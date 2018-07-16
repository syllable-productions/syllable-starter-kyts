import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import AboutPage from '../components/AboutPage';
import LettersPage from '../components/LettersPage';
import SingleLetterPage from '../components/SingleLetterPage';
import WritePage from '../components/WritePage';
import RouterWrapper from '../components/RouterWrapper';

// with guidance from https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/server-rendering.md
const Status = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      // there is no `staticContext` on the client, so
      // we need to guard against that here
      if (staticContext) {
        staticContext.status = code;
      }

      return children;
    }}
  />
);

const RedirectWithStatus = ({ from, to, status }) => (
  <Status code={status}>
    <Redirect from={from} to={to} />
  </Status>
);

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
);

// Note: A redirect can be added in this form
// <RedirectWithStatus status={301} from="/old" to="/new" />
function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RouterWrapper(Home)} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/letters" component={RouterWrapper(LettersPage)} />
      <Route path="/letters/:slug" component={RouterWrapper(SingleLetterPage)} />
      <Route path="/write" component={WritePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

Status.propTypes = {
  code: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

RedirectWithStatus.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};

export default Routes();
