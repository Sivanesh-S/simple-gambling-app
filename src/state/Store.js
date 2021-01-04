import React, { createContext, useReducer } from 'react';

// original default state isGamePage: false

const initialState = {
  isGamePage: localStorage.getItem('isGamePage'),
  users: [],
  selected: [],
  isReady: false,
};

console.log('initialState:', initialState);

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, data }) => {
    if (!state.isGamePage) {
      localStorage.clear();
    }
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
        if (data) {
          const selectedUsers = state.users.filter((user) =>
            state.selected.includes(user.Name)
          );
          localStorage.setItem('selectedUsers', JSON.stringify(selectedUsers));
          localStorage.setItem('isGamePage', 'true');
        } else {
          localStorage.setItem('isGamePage', 'false');
        }
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
