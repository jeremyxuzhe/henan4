import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Components from '../pages/components';
import Contact from '../pages/contact';
import Introduction from '../pages/introduction';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div className="container">
    <div className="col">
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/components' component={Components}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/introduction' component={Introduction}/>
        </Switch>
      </main>
    </div>
  </div>
);

export default Main;
