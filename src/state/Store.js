import React, { createContext, useReducer } from 'react';

// original default state isGamePage: false
const initialState = {
  isGamePage: false,
  users: [],
  selected: [],
  isReady: false,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, data }) => {
    console.log('state:', state);
    switch (type) {
      case 'LIST':
        return {
          ...state,
          users: data.map((i) => ({ key: i.Name, ...i })),
        };
      case 'READY_TOGGLE':
        return {
          ...state,
          isReady: data,
        };
      case 'SELECTED_9':
        return {
          ...state,
          selected: data,
        };
      case 'ROUTE_TOGGLE':
        return {
          ...state,
          isGamePage: data,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
