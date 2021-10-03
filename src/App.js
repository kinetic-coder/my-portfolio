import React from 'react';
import Home from './views/Home';
import DigitalMakerNews from './views/DigitalMakerNews';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/DigitalMakersNews" component={DigitalMakerNews} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;