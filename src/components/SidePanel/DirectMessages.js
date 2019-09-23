import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { isUserWhitespacable } from '@babel/types';

class DirectMessages extends React.Component {
  state = {
    users: []
  };
  render() {
    const { users } = this.state;

    return (
      <Menu.Menu className='menu'>
        <Menu.Item>
          <span>
            <Icon name='mail' />
            DIRECT MESSAGES
          </span>{' '}
          ({users.length})
        </Menu.Item>
        {/*Users to Send Direct Messages*/}
      </Menu.Menu>
    );
  }
}

export default DirectMessages;
