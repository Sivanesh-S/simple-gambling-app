import React, { useEffect, useContext } from 'react';

import Left from './Left';
import Right from './Right';

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
    <div>
      <Right />
      <Left />
    </div>
  );
}

export default Main;
