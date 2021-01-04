import React, { useContext } from 'react';

import { store } from '../state/Store';

import { Card, Avatar } from 'antd';

const { Meta } = Card;

function Playing9() {
  const { state, dispatch } = useContext(store);
  const { selected, users = [] } = state;

  return (
    <div>
      {users
        .filter(({ key }) => selected.includes(key))
        .map((user) => (
          <Card
            title={user.Name}
            size="small"
            extra={
              <span>
                Price: <b>{user.Price} </b>
              </span>
            }
          >
            <Avatar shape="square" size="large" src={user['Profile Image']} />
            <p>
              Bet: <b>{user.Bet}</b>
            </p>
          </Card>
        ))}
    </div>
  );
}

export default Playing9;
