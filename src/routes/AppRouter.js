import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import Population from '../components/Population';
import LifeExp from '../components/LifeExp';
import Fertility from '../components/Fertility';
import Header from '../components/Header';

//export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/population" component={Population} />
          <Route path="/lifexp" component={LifeExp} />
          <Route path="/fertility" component={Fertility} />
        </Switch>
      </main>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
