import React, { useState } from 'react';
import {
  Menu,
  Input,
} from 'semantic-ui-react';
import messages from '../../../../shared/messages';

export default () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (e, { value }) => setActiveItem(value);

  return (
    <Menu secondary>
      <Menu.Item
        name={messages.en.DASHBOARD}
        value="dashboard"
        active={activeItem === 'dashboard'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name={messages.en.FINES}
        value="fines"
        active={activeItem === 'fines'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name={messages.en.OWNERS}
        value="owners"
        active={activeItem === 'owners'}
        onClick={handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name={messages.en.LOGOUT}
          value="logout"
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}