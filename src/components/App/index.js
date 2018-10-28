import React, { PureComponent } from 'react';
import { Route } from 'react-router';
import {
  PreviewPage,
  HomePage,
  AuthPage,
} from '../../pages';

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
      <>
        <Route exact path="/" component={AuthPage}/>
      </>
    );

    return (
      <>
        <Route exact path="/" component={HomePage}/>
      </>
    );
  }
};

export default App;
