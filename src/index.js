import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home';
import DigitalMakerNews from './views/News/DigitalMakerNews';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router basename="/">
    <Switch>
      <Route path="/DigitalMakersNews" component={DigitalMakerNews} />
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
