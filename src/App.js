import React from 'react';
import Home from './views/Home';

import DigitalMakerNews from './views/DigitalMakerNews';
import Scouts from './views/Scouts/ScoutsView';
import TheBoysNetwork from './views/TheBoysNetworkView';

import ProjectsView from './views/Projects/ProjectsView';
import HomeFinancesView from './views/Projects/HomeFinances/HomeFinancesView';
import Achievements from './views/Projects/Achievements/Achievements';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/TheBoysNetwork" component={TheBoysNetwork} />
        <Route path="/DigitalMakersNews" component={DigitalMakerNews} />
        <Route path="/Scouts" component={Scouts} />
        <Route path="/projects/homeFinances" component={HomeFinancesView} />
        <Route path="/projects/achievements" component={Achievements}/>
        <Route path="/projects" component={ProjectsView} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
