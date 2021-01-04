import React, { useContext } from 'react';

import dollar from '../dollar.svg';
import slot from '../slot-machine.svg';

import { store } from '../state/Store';

import { Card, Avatar, Row, Col } from 'antd';

const { Meta } = Card;

function Playing9() {
  const { state, dispatch } = useContext(store);
  const { selected, users = [] } = state;

  return (
    <div>
      {users
        .filter(({ key }) => selected.includes(key))
        .map((user, id) => (
          <Card
            key={id}
            // title={user.Name}
            size="small"
          >
            <Row>
              <Col span={6}>
                <Avatar
                  shape="square"
                  size="large"
                  src={user['Profile Image']}
                />
              </Col>
              <Col span={12}>
                <p>
                  <img src={slot} width={20} /> <b>{user.Bet}</b>
                </p>
              </Col>
              <Col span={6}>
                <p>
                  <img src={dollar} width={20} /> <b>{user.Price}</b>
                </p>
              </Col>
            </Row>
          </Card>
        ))}
    </div>
  );
}

export default Playing9;
