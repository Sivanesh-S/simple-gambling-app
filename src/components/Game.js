import React, { useState } from 'react';

import Players from './Players';
import Back from './Back';
import OpposingBet from './OpposingBet';

const randomNumber = Math.ceil(Math.random() * 9);
function Game() {
  const selectedUsers = JSON.parse(localStorage.getItem('selectedUsers'));

  const updatedUsers = selectedUsers.map((user) => {
    user.winPrice = user.winPrice ? user.winPrice : 0;
    if (user.Bet == randomNumber) {
      console.count('updated');
      user.winPrice = user.Price * 2;
      user.win = true;
      user.wins = !user.wins ? 1 : user.wins + 1;
    } else {
      user.win = false;
    }
    return user;
  });

  return (
    <div>
      <OpposingBet randomNumber={randomNumber} />
      <Players randomNumber={randomNumber} selectedUsers={updatedUsers} />
      <Back />
    </div>
  );
}

export default Game;
