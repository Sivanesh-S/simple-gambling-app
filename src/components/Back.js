import React, { useContext } from 'react';
import { store } from '../state/Store';

import { Button } from 'antd';

function Back() {
  const { dispatch } = useContext(store);

  return (
    <div style={{ margin: '20px' }}>
      <Button
        size="large"
        type="primary"
        onClick={() => dispatch({ type: 'ROUTE_TOGGLE', data: false })}
      >
        Back
      </Button>
    </div>
  );
}

export default Back;
