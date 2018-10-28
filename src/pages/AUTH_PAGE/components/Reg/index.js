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
  signUp,
  user: {
    isLoading
  },
  onChangeType,
}) => (
  <Form loading={isLoading}>
    <Form.Input label={messages.en.ENTER_LOGIN} required/>
    <Form.Input type="password" label={messages.en.ENTER_PASSWORD} required/>
    <Form.Input type="password" label={messages.en.REPEAT_PASSWORD} required/>
    <Button onClick={signUp} primary>{messages.en.SIGN_UP}</Button>
    <ChangeType type={constants.REG} onChangeType={onChangeType}/>
  </Form>
);