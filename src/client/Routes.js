import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.page';

export default () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
};

