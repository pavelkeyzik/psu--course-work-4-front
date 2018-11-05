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
  signUp,
  user: {
    isLoading
  },
}) => (
  <Form loading={isLoading}>
    <Form.Input label={messages.en.ENTER_LOGIN} required/>
    <Form.Input type="password" label={messages.en.ENTER_PASSWORD} required/>
    <Form.Input type="password" label={messages.en.REPEAT_PASSWORD} required/>
    <Button onClick={signUp} primary>{messages.en.SIGN_UP}</Button>
    <Link to={routes.LOGIN}>{ messages.en.SIGN_IN }</Link>
  </Form>
);