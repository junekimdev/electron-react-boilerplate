import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './index';

const Rounter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
};

export default Rounter;