import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faCoffee,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import configureStore from './store';
import AppRouter from './routes/AppRouter';
import './styles/App.scss';

const store = configureStore();
library.add(faCheckSquare, faCoffee, fas);

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    </Provider>
  );
};

export default App;
