import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Board from '../components/Board';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Board} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;