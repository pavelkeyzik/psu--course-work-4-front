import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Menu,
  Input,
} from 'semantic-ui-react';
import messages from '../../shared/messages';

export default () => {
  return (
    <Menu secondary>
      <Menu.Item
        exact
        as={Link}
        to="/"
        name={messages.en.DASHBOARD}
      />
      <Menu.Item
        as={Link}
        to="/fines"
        name={messages.en.FINES}
      />
      <Menu.Item
        as={Link}
        to="/owners"
        name={messages.en.OWNERS}
        value="owners"
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name={messages.en.LOGOUT}
          value="logout"
        />
      </Menu.Menu>
    </Menu>
  );
}