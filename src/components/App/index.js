import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {
  Container,
} from 'semantic-ui-react';
import {
  PreviewPage,
  HomePage,
  AuthPage,
  FinesPage,
} from '../../pages';
import { NavigationMenu } from '..';

class App extends PureComponent {
  componentDidMount() {
    const { initApplication } = this.props;

    initApplication();
  }

  render() {
    const { app, user: { data } } = this.props;

    if (app.isLoading) return (
      <PreviewPage />
    );

    if (app.error) return (
      <p>{app.error}</p>
    );

    if (!data || !data.token) return (
      <Router>
        <AuthPage />
      </Router>
    );

    return (
      <Router>
        <Container>
          <NavigationMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/fines" component={FinesPage} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </Router>
    );
  }
};

export default App;
