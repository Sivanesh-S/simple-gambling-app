import React from 'react';
import Dice from '../dice.svg';

function MainUI() {
  return (
    <div>
      <img src={Dice} width={200} style={{ padding: '20px' }} />
    </div>
  );
}

export default MainUI;
