import React, { useState } from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import Auth from './containers/Auth';
import Reg from './containers/Reg';
import constant from '../../shared/constants';
import './index.scss';

const AuthPage = () => {
  const [type, setType] = useState(constant.AUTH);

  function handleChangeType() {
    setType(type === constant.AUTH ? constant.REG : constant.AUTH);
  };

  return (
    <div className="auth-page">
      <Grid>
        <Grid.Column>
          {type === constant.AUTH
            ? <Auth onChangeType={handleChangeType} />
            : <Reg onChangeType={handleChangeType} />}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AuthPage;