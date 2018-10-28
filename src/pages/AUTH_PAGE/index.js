import React, { PureComponent } from 'react';
import Auth from './containers/Auth';

class AuthPage extends PureComponent {
  render() {
    return (
      <div>
        <h1>Authorization page</h1>
        <Auth />
      </div>
    );
  }
}

export default AuthPage;