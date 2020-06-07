import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.page';
import UsersListPageContainer from './pages/users-list/users-list.container';

export default () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route 
        path="/users" 
        component={UsersListPageContainer} 
      />
    </div>
  );
};

