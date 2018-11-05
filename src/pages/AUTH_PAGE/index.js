import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router';
import Auth from './containers/Auth';
import Reg from './containers/Reg';
import './index.scss';
import {
  routes,
} from '../../shared';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <Grid>
        <Grid.Column>
          <Switch>
            <Route path={routes.LOGIN} component={Auth}/>
            <Route path={routes.REGISTRATION} component={Reg}/>
            <Redirect to={routes.LOGIN}></Redirect>
          </Switch>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AuthPage;