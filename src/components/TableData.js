import React, { useContext, useState, useEffect } from 'react';

import { Table, Button } from 'antd';
import { store } from '../state/Store';

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Bet',
    dataIndex: 'Bet',
    key: 'Bet',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
  },
];

function TableData() {
  const { state, dispatch } = useContext(store);

  const [selected, setSelected] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch({ type: 'SELECTED_9', data: selected });
  }, [selected]);

  if (!state.isReady && count === 9) {
    dispatch({ type: 'READY_TOGGLE', data: true });
  }
  if (state.isReady && count !== 9)
    dispatch({ type: 'READY_TOGGLE', data: false });

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      if (selectedRowKeys.length <= 9) {
        setSelected(selectedRowKeys);
      }
      setCount(selectedRowKeys.length);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
    hideSelectAll: true,
    columnTitle: count < 9 ? `${9 - count} more` : 'Done',
  };

  return (
    <div>
      <Table
        dataSource={state.users}
        columns={columns}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
          selectedRowKeys: selected,
        }}
      />
    </div>
  );
}

export default TableData;
