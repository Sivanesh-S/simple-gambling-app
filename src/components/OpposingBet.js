import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function OpposingBet({ randomNumber }) {
  return (
    <div>
      <Title>{randomNumber}</Title>
    </div>
  );
}

export default OpposingBet;
