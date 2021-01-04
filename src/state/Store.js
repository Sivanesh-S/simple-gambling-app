import React, { createContext, useReducer } from 'react';

// original default state isGamePage: false

const pinitialState = {
  isGamePage: true,
  users: [
    {
      key: 'Richard',
      Name: 'Richard',
      Price: '2000',
      Bet: '5',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/richarde8624aa.jpg',
    },
    {
      key: 'Gregory',
      Name: 'Gregory',
      Price: '500',
      Bet: '6',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gregory032c4c3.jpg',
    },
    {
      key: 'Rodrick',
      Name: 'Rodrick',
      Price: '2',
      Bet: '3',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/rodrick14c9291.jpg',
    },
    {
      key: 'Pod',
      Name: 'Pod',
      Price: '3000',
      Bet: '9',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/pod2675a17.jpg',
    },
    {
      key: 'Chuck',
      Name: 'Chuck',
      Price: '650',
      Bet: '1',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/chuck35c8d61.jpg',
    },
    {
      key: 'Ravi',
      Name: 'Ravi',
      Price: '2000',
      Bet: '8',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/ravi42884a0.jpg',
    },
    {
      key: 'Soshal Distan Singh',
      Name: 'Soshal Distan Singh',
      Price: '2000',
      Bet: '3',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/soshal53167ca.jpg',
    },
    {
      key: 'Disha Patahai',
      Name: 'Disha Patahai',
      Price: '9999',
      Bet: '1',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/disha642f320.jpg',
    },
    {
      key: 'Faizan',
      Name: 'Faizan',
      Price: '1',
      Bet: '2',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/faizan7534fdb.jpg',
    },
    {
      key: 'George',
      Name: 'George',
      Price: '2000',
      Bet: '4',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/george826c2d1.jpg',
    },
    {
      key: 'Harshal Mehta',
      Name: 'Harshal Mehta',
      Price: '3000',
      Bet: '9',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/harshal8fc14b7.jpg',
    },
    {
      key: 'Richie Rick',
      Name: 'Richie Rick',
      Price: '20',
      Bet: '7',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/richie9c21cda.jpg',
    },
    {
      key: 'Mr Lego',
      Name: 'Mr Lego',
      Price: '100',
      Bet: '3',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/lego7beb05c.jpeg',
    },
    {
      key: 'Kelly',
      Name: 'Kelly',
      Price: '3000',
      Bet: '1',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/kellyac28ff4.jpeg',
    },
    {
      key: 'Adams',
      Name: 'Adams',
      Price: '200',
      Bet: '9',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/adamse077219.jpeg',
    },
    {
      key: 'Eve',
      Name: 'Eve',
      Price: '231',
      Bet: '8',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/eve05f5590.jpeg',
    },
    {
      key: 'Katlyn',
      Name: 'Katlyn',
      Price: '20',
      Bet: '7',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/katlyn307daf7.jpeg',
    },
    {
      key: 'Lucy',
      Name: 'Lucy',
      Price: '9998',
      Bet: '6',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/lucy53fe21e.jpeg',
    },
    {
      key: 'Lukaku',
      Name: 'Lukaku',
      Price: '500',
      Bet: '5',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/lukaku7bdcad0.jpeg',
    },
    {
      key: 'Keshav',
      Name: 'Keshav',
      Price: '20000',
      Bet: '4',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/keshavaaabf32.jpeg',
    },
    {
      key: 'Diana',
      Name: 'Diana',
      Price: '2',
      Bet: '3',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/dianada3c48e.jpeg',
    },
    {
      key: 'Oprah',
      Name: 'Oprah',
      Price: '3',
      Bet: '2',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/oprah00f6001.jpeg',
    },
    {
      key: 'Sweety Pi',
      Name: 'Sweety Pi',
      Price: '99',
      Bet: '1',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/sweety2bbdac8.jpeg',
    },
    {
      key: 'Katrina',
      Name: 'Katrina',
      Price: '999',
      Bet: '1',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/katrina5368bbd.jpeg',
    },
    {
      key: 'Georgina',
      Name: 'Georgina',
      Price: '25',
      Bet: '1',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/georgina88813c3.jpeg',
    },
    {
      key: 'Kate',
      Name: 'Kate',
      Price: '85',
      Bet: '2',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/kateafc101a.jpeg',
    },
    {
      key: 'Tiffany',
      Name: 'Tiffany',
      Price: '85',
      Bet: '3',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/tiffanyd333edd.jpeg',
    },
    {
      key: 'Mr Hunk',
      Name: 'Mr Hunk',
      Price: '85',
      Bet: '4',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/mr%20hunkf53339a.jpeg',
    },
    {
      key: 'Barrack',
      Name: 'Barrack',
      Price: '89',
      Bet: '5',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/barrack224ba5f.jpeg',
    },
    {
      key: 'Stephanie',
      Name: 'Stephanie',
      Price: '89',
      Bet: '6',
      'Profile Image':
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Stephanie42a86e1.jpeg',
    },
  ],
  selected: [
    'Richard',
    'Gregory',
    'Rodrick',
    'Pod',
    'Chuck',
    'Ravi',
    'Soshal Distan Singh',
    'Disha Patahai',
  ],
  isReady: false,
};

const initialState = {
  isGamePage: false,
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
        localStorage.setItem('users', JSON.stringify(data));
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
          localStorage.setItem('selected', JSON.stringify(state.selected));
          localStorage.setItem('users', JSON.stringify(state.users));
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
