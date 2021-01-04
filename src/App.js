import './App.css';
import 'antd/dist/antd.css';

import Route from './components/Route';

import { StateProvider } from './state/Store';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Route />
      </StateProvider>
    </div>
  );
}

export default App;
