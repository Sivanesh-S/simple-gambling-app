import React, { useContext } from 'react';

import { Button } from 'antd';

import { store } from '../state/Store';

function Start() {
  const { state, dispatch } = useContext(store);

  return (
    <div>
      <Button
        type="primary"
        size="large"
        disabled={!state.isReady}
        onClick={() => dispatch({ type: 'ROUTE_TOGGLE', data: true })}
      >
        Start
      </Button>
    </div>
  );
}

export default Start;
