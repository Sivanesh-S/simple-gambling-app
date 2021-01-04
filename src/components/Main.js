import React, { useEffect, useContext } from 'react';

import Left from './Left';
import Right from './Right';

import { Row, Col } from 'antd';

import { store } from '../state/Store';

const apiUrl =
  'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json';

function Main() {
  const { dispatch } = useContext(store);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'LIST', data: res });
      });
  }, []);

  return (
    <>
      <Row>
        <Col span={6}>
          <Left />
        </Col>
        <Col span={18}>
          <Right />
        </Col>
      </Row>
    </>
  );
}

export default Main;
