import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateInput from './CreateInput';
import List from './List';

function Router(){
  return (
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/create" component={CreateInput} />
      {/*<Route path="/update/:id" exact component={Form} />*/}
      <Route to='/' />
    </Switch>
  )
}

export default Router;