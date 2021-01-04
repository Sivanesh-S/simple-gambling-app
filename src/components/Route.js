import React, { useContext } from 'react';
import Main from './Main';

import { store } from '../state/Store';
import Game from './Game';

function Page1() {
  const { state } = useContext(store);
  const { isGamePage, users } = state;

  return <div>{isGamePage ? <Game /> : <Main />}</div>;
}

export default Page1;
