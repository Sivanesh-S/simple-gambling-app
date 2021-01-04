import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function OpposingBet({ randomNumber }) {
  return (
    <div
      style={{
        backgroundColor: '#704ee1',

        textAlign: 'center',
        padding: '30px',
      }}
    >
      <Title style={{ color: 'white', fontSize: '4em' }}>{randomNumber}</Title>
    </div>
  );
}

export default OpposingBet;
