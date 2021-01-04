import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function OpposingBet() {
  const randomNumber = Math.floor(Math.random() * 10);
  return (
    <div>
      <Title>{randomNumber}</Title>
    </div>
  );
}

export default OpposingBet;
