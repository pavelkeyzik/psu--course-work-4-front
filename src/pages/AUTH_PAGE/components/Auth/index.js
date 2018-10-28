import React from 'react';

export default ({ signIn }) => (
  <div>
    <p>Click for authorization</p>
    <button onClick={signIn}>Sign in</button>
  </div>
);