import React from 'react';
import message from '../../../../shared/messages';
import constant from '../../../../shared/constants';

export default ({ type, onChangeType }) => {
  if(type === constant.AUTH) return (
    <p>
      {message.en.YOU_DONT_HAVE_ACCOUT}
      <a href="#" onClick={onChangeType}>
        {message.en.SIGN_UP}
      </a>
    </p>
  );

  if(type === constant.REG) return (
    <p>
      {message.en.HAVE_YOU_GOT_ACCOUNT}
      <a href="#" onClick={onChangeType}>
        {message.en.SIGN_IN}
      </a>
    </p>
  );
};