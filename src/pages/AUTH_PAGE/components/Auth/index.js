import React from 'react';
import {
  Form,
  Button,
} from 'semantic-ui-react';
import {
  messages,
  routes,
} from '../../../../shared';
import { Link } from 'react-router-dom';

export default ({
  signIn,
  user: {
    isLoading
  },
}) => (
  <Form loading={isLoading}>
    <Form.Input label={messages.en.ENTER_LOGIN} required/>
    <Form.Input type="password" label={messages.en.ENTER_PASSWORD} required/>
    <Button onClick={signIn} primary>{messages.en.SIGN_IN}</Button>
    <Link to={routes.REGISTRATION}>{messages.en.SIGN_UP}</Link>
  </Form>
);