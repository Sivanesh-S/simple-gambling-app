import React from 'react';

import Players from './Players';
import Back from './Back';
import OpposingBet from './OpposingBet';

function Game() {
  return (
    <div>
      <OpposingBet />
      <Players />
      <Back />
    </div>
  );
}

export default Game;
