import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Menu,
  Input,
} from 'semantic-ui-react';
import { messages, routes } from '../../shared';

export default ({ onLogout }) => {
  return (
    <Menu secondary>
      <Menu.Item
        exact
        as={Link}
        to={routes.HOME}
        name={messages.en.DASHBOARD}
      />
      <Menu.Item
        as={Link}
        to={routes.FINES}
        name={messages.en.FINES}
      />
      <Menu.Item
        as={Link}
        to={routes.OWNERS}
        name={messages.en.OWNERS}
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name={messages.en.LOGOUT}
          value="logout"
          onClick={onLogout}
        />
      </Menu.Menu>
    </Menu>
  );
}