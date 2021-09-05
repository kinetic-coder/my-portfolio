import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="sm">
      <div className='App-header'>
        Welcome to my portfolio
      </div>
      <div>
        Body
      </div>
    </Container>
  );
}

export default App;
