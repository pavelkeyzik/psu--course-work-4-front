import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import Auth from './containers/Auth';
import Reg from './containers/Reg';
import './index.scss';
import { Switch, Route, Redirect } from 'react-router';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <Grid>
        <Grid.Column>
          <Switch>
            <Route path="/login" component={Auth}/>
            <Route path="/registration" component={Reg}/>
            <Redirect to="/login"></Redirect>
          </Switch>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AuthPage;