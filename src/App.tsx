import React, {useState} from 'react';
import './StyleSheets/App.css';
import "./Components/styles.css";
import LoginButton from './Components/LoginButton';
import BucketList from './Components/BucketList';
import ParkList from './Components/ParkList'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from './Components/LoginForm';

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
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <p>Hello World</p>
          <LoginButton handleLoginClick={handleLoginClick} />
          <LoginForm isShowLogin={isShowLogin} />
        </header>
        <BucketList/>
        <ParkList/>
      </ThemeProvider>
    </div>
  );
}

export default App;
