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
import { NavigationMenu } from '../';
import { routes } from '../../shared';

class App extends PureComponent {
  componentDidMount() {
    const { initApplication } = this.props;

    initApplication();
  }

  handleLogout = () => {
    const { logout } = this.props;
    logout();
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
          <NavigationMenu onLogout={this.handleLogout}/>
          <Switch>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route path={routes.FINES} component={FinesPage} />
            <Redirect to={routes.HOME} />
          </Switch>
        </Container>
      </Router>
    );
  }
};

export default App;
