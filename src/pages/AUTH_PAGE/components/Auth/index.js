import React from 'react';
import {
  Form,
  Button,
} from 'semantic-ui-react';
import ChangeType from '../ChangeType';
import {
  constants,
  messages,
} from '../../../../shared';

export default ({
  signIn,
  user: {
    isLoading
  },
  onChangeType,
}) => (
  <Form loading={isLoading}>
    <Form.Input label={messages.en.ENTER_LOGIN} required/>
    <Form.Input type="password" label={messages.en.ENTER_PASSWORD} required/>
    <Button onClick={signIn} primary>{messages.en.SIGN_IN}</Button>
    <ChangeType type={constants.AUTH} onChangeType={onChangeType}/>
  </Form>
);