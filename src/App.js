import './App.css';

import { Container } from '@mui/material`';

function App() {
  return (
    <Container maxWidth="sm">
      <div className='App-header'>
        Welcome to my portfolio
      </div>
      <div className='App-body'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            1
          </Grid>
          <Grid item xs={4}>
            2
          </Grid>
          <Grid item xs={4}>
            3
          </Grid>

        </Grid>
      </div>
      <div className='App-footer'>
        footer
      </div>
    </Container>
  );
}

export default App;
