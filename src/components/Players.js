import React from 'react';

import slot from '../slot-machine.svg';
import dollar from '../dollar.svg';
import trophy from '../trophy.svg';

import { Card, Avatar, Col, Row, Typography } from 'antd';

const { Title } = Typography;

function Players({ selectedUsers }) {
  return (
    <div>
      <Row gutter={18}>
        {selectedUsers.map((user, id) => (
          <Col span={6}>
            <Card key={id} style={{ margin: '5px' }}>
              <Row>
                <Col span={10}>
                  <Avatar
                    src={user['Profile Image']}
                    style={{ width: '60px', height: '60px' }}
                  />
                </Col>
                <Col span={14}>
                  <span>
                    <Title level={3}>{user.Name}</Title>
                  </span>
                </Col>
              </Row>
              <Row style={{ margin: '20px' }}>
                <Col span={12}>
                  <img src={slot} width={20} /> {user.Bet}
                </Col>
                <Col span={12}>
                  <img src={dollar} width={20} /> {user.winPrice}
                </Col>
              </Row>

              <div style={{ padding: '4px' }}>
                <img src={trophy} width={25} /> {user.wins ? user.wins : 0}
              </div>
              {user.win && (
                <div
                  style={{
                    backgroundColor: '#704ee1',
                    borderRadius: '10px',
                    color: 'aliceblue',
                    padding: '5px 0',
                  }}
                >
                  Won 😍
                </div>
              )}
            </Card>
          </Col>
        ))}{' '}
      </Row>
    </div>
  );
}

export default Players;
