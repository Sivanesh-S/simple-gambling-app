import React, { useContext } from 'react';
import { store } from '../state/Store';

import { Card, Avatar } from 'antd';

function Players() {
  const { state } = useContext(store);
  const { selected, users } = state;

  const selectedUsers = users.filter((user) => selected.includes(user.Name));

  return (
    <div>
      {selectedUsers.map((user, id) => (
        <Card
          title={
            <div>
              <Avatar src={user['Profile Image']} />
              <span>
                <b>{user.Name}</b>
              </span>
            </div>
          }
          key={id}
        >
          <div>Betting: {user.Bet}</div>
          <div>Price: {user.Price}</div>
        </Card>
      ))}{' '}
    </div>
  );
}

export default Players;
