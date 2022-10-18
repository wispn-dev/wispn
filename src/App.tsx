import React from 'react';
import './StyleSheets/App.css';
import LoginBox from './Components/LoginBox'
import BucketList from './Components/BucketList';
import ParkList from './Components/ParkList'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#26812a',
    },
    secondary: {
      main: '#cb1459',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <p>Hello World</p>
          <LoginBox/>
        </header>
        <BucketList/>
        <ParkList/>
      </ThemeProvider>
    </div>
  );
}

export default App;
