import React from 'react';

import { Card, Avatar } from 'antd';

function Players({ selectedUsers }) {
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
          <div>Price Won: {user.winPrice}</div>
          <div>Wins: {user.wins}</div>
          {user.win && 'Won 😍'}
        </Card>
      ))}{' '}
    </div>
  );
}

export default Players;
