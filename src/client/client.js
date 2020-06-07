import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';
import store from './redux/store';


ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);